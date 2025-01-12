from flask import Flask, render_template, request
import pandas as pd
import networkx as nx
import matplotlib.pyplot as plt

# Corriger la déclaration de Flask en utilisant __name__
app = Flask(__name__)

# Charger les données
data = pd.read_csv('friday.csv')
data.fillna(0, inplace=True)
data['Label'] = data['Label'].apply(lambda x: 'Normal' if x == 0 else 'Threat')
network_data = data[['Total Fwd Packet', 'Total Bwd packets', 'Total Length of Fwd Packet', 'Total Length of Bwd Packet', 'Flow Bytes/s', 'Flow Packets/s', 'Label']]

# Modèle de diffusion
class DiffusionModel:
    def __init__(self, graph):  # Corriger le constructeur (utiliser __init__ au lieu de _init_)
        self.graph = graph

    def simulate_diffusion(self, seed_nodes, steps=10):
        infected = set(seed_nodes)
        new_infected = set(seed_nodes)
        
        for _ in range(steps):
            next_infected = set()
            for node in new_infected:
                neighbors = set(self.graph.neighbors(node))
                next_infected.update(neighbors - infected)
            infected.update(next_infected)
            new_infected = next_infected
        return infected

# Créer un graphe réseau à partir des données
G = nx.from_pandas_edgelist(network_data, source='Total Fwd Packet', target='Total Bwd packets')
diffusion_model = DiffusionModel(G)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/simulate', methods=['POST'])
def simulate():
    # Obtenir les nœuds de départ à partir du formulaire et les convertir en une liste d'entiers
    seed_nodes_input = request.form['seed_nodes']
    seed_nodes = list(map(int, seed_nodes_input.split(',')))

    # Vérifier que tous les nœuds de départ sont valides
    invalid_nodes = [node for node in seed_nodes if node not in G]
    if invalid_nodes:
        return f"Erreur : Ces nœuds ne sont pas dans le graphe : {invalid_nodes}", 400

    # Simuler la diffusion
    infected_nodes = diffusion_model.simulate_diffusion(seed_nodes=seed_nodes)
    
  

    
    # Mettre à jour le dataframe avec les nœuds infectés
    network_data['infected'] = network_data.index.isin(infected_nodes).astype(int)
    network_data.to_csv('network_data_infected.csv', index=False)

    # Visualisation
    plt.figure(figsize=(12, 8))
    pos = nx.spring_layout(G)
    nx.draw_networkx_nodes(G, pos, node_color='blue', node_size=50)
    nx.draw_networkx_edges(G, pos, alpha=0.5)
    infected_subgraph = G.subgraph(infected_nodes)
    nx.draw_networkx_nodes(infected_subgraph, pos, node_color='red', node_size=50)
    plt.title('Simulation de la diffusion des menaces dans le réseau')
    plt.savefig('static/diffusion.png')

    return render_template('results.html', infected_nodes=infected_nodes)


# Corriger la condition pour exécuter l'application Flask
if __name__ == '__main__':
    app.run(debug=True)

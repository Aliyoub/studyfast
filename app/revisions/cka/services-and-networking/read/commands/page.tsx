import React from 'react';
import  '../../../style.css'

// Définition de l'interface pour une commande Kubernetes
interface KubernetesCommand {
  name: string;
  usage: string;
  description: string;
  details: string;
}

// Liste des commandes Kubernetes Networking
const networkingCommands: KubernetesCommand[] = [
  {
    name: "kubectl expose",
    usage: "kubectl expose deployment <deployment-name> --port=<port>",
    description: "Expose un Pod ou un ensemble de Pods en créant un Service.",
    details: "Crée un objet Service qui permet l'accès réseau au Pod ou au déploiement spécifié. Utile pour exposer des applications vers d'autres parties du cluster ou vers l'extérieur."
  },
  {
    name: "kubectl port-forward",
    usage: "kubectl port-forward pod/<pod-name> <local-port>:<remote-port>",
    description: "Redirige le port local vers un Pod pour tester ou déboguer.",
    details: "Permet de tester l'accès réseau localement sans exposer le Service à d'autres. Pratique pour le développement et le débogage."
  },
  {
    name: "kubectl get svc",
    usage: "kubectl get svc <service-name>",
    description: "Liste les Services du cluster avec leurs adresses IP.",
    details: "Affiche l'état des Services, ce qui est utile pour vérifier l'accessibilité et le suivi des Services dans le cluster."
  },
  {
    name: "kubectl describe svc",
    usage: "kubectl describe svc <service-name>",
    description: "Affiche les détails d'un Service Kubernetes.",
    details: "Fournit des informations sur le routage, les sélecteurs et d'autres détails. Utile pour diagnostiquer et comprendre la configuration réseau d’un Service."
  },
  {
    name: "kubectl exec",
    usage: "kubectl exec -it <pod-name> -- <command>",
    description: "Exécute des commandes dans un Pod (ping, curl, etc.) pour tester la connectivité.",
    details: "Permet de tester l'accès réseau directement depuis le Pod pour vérifier les connexions entre Pods ou vers l'extérieur."
  },
  {
    name: "kubectl logs",
    usage: "kubectl logs <pod-name>",
    description: "Affiche les journaux d'un Pod.",
    details: "Les journaux peuvent contenir des informations sur les erreurs réseau, aidant à diagnostiquer des problèmes de connectivité ou de configuration."
  },
  {
    name: "kubectl apply -f",
    usage: "kubectl apply -f <configuration.yaml>",
    description: "Crée des ressources réseau (Ingress, Network Policies, Services) à partir d'un fichier YAML.",
    details: "Utilisé pour appliquer des configurations réseau, comme des politiques de réseau et des routes d'accès, pour contrôler le trafic dans le cluster."
  },
  {
    name: "kubectl get networkpolicy",
    usage: "kubectl get networkpolicy",
    description: "Liste les Network Policies configurées dans le cluster.",
    details: "Affiche les politiques réseau appliquées pour isoler ou autoriser le trafic entre Pods, utile pour le suivi des règles de sécurité."
  },
  {
    name: "kubectl describe networkpolicy",
    usage: "kubectl describe networkpolicy <networkpolicy-name>",
    description: "Détaille une Network Policy spécifique.",
    details: "Affiche les règles et restrictions d’accès réseau pour les Pods, permettant de diagnostiquer les règles de connectivité appliquées."
  },
];

// Composant React pour afficher la liste des commandes Kubernetes Networking
const Page: React.FC = () => {
  return (
    <div className='container'>
    {/* <div style={{ fontFamily: 'Arial, sans-serif', margin: '0 auto', maxWidth: '800px', padding: '20px' }}> */}
      <h1>Commandes Kubernetes pour le Networking</h1>
      <p>Les commandes suivantes permettent de gérer le réseau entre les Pods, Services, et autres composants dans Kubernetes.</p>

      {networkingCommands.map((command, index) => (
        <div key={index}>
        {/* <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}> */}
          <h2>{command.name}</h2>
          <p><strong>Utilisation :</strong> <code>{command.usage}</code></p>
          <p><strong>Description :</strong> {command.description}</p>
          <p><strong>Détails :</strong> {command.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;

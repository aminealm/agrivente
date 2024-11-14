import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      "id": 1,
      "question": "Quels avantages offre AgriVente pour les agriculteurs locaux?",
      "answer": "AgriVente offre une plateforme conviviale qui permet aux agriculteurs locaux de vendre directement leurs produits aux consommateurs. Cela favorise le commerce local, minimise les intermédiaires et offre une visibilité accrue aux agriculteurs."
    },
    {
      "id": 2,
      "question": "AgriVente est-il accessible sur mobile?",
      "answer": "Oui, AgriVente est entièrement compatible avec les appareils mobiles, ce qui vous permet d'accéder facilement à une variété de produits frais directement depuis votre smartphone ou tablette."
    },
    {
      "id": 3,
      "question": "Quelle est la politique de remboursement d'AgriVente?",
      "answer": "AgriVente s'engage à garantir la satisfaction de ses utilisateurs. Si vous rencontrez un problème avec votre achat, n'hésitez pas à nous contacter pour discuter des options de remboursement."
    },
    {
      "id": 4,
      "question": "AgriVente prend-il en charge les paiements internationaux?",
      "answer": "Actuellement, AgriVente se concentre sur les transactions locales pour soutenir les communautés agricoles locales. Nous envisagerons la prise en charge des paiements internationaux à l'avenir."
    }
];

    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Questions à l'esprit</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}

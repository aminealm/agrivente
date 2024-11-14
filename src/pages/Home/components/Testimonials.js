export const Testimonials = () => {
    return (
      <section className='my-20'>
          <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Témoignages sur AgriVente</h1>    
          <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Facilité de collaboration efficace</h3>
                      <p className="my-4 font-light">AgriVente a considérablement simplifié notre collaboration d'équipe. C'est un outil indispensable pour travailler ensemble de manière efficiente."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="utilisateur" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Mehdi Choulli</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Coordinatrice de l'équipe logistique</div>
                      </div>
                  </figcaption>    
              </figure>
              <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Excellent service client</h3>
                      <p className="my-4 font-light">Le service client d'AgriVente est exceptionnel. Ils sont toujours prêts à répondre à nos questions et à résoudre nos problèmes rapidement."</p>
                  </blockquote>
                  <figcaption className="flex justify-center items-center space-x-3">
                      <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="utilisateur" />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>Mohamed Amine Chaddak</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">Responsable du service client</div>
                      </div>
                  </figcaption>    
              </figure>
              {/* Ajoutez autant de témoignages que nécessaire ici */}
          </div>
      </section>
    )
  }
  
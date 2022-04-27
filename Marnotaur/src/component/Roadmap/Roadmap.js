import React from 'react';

const Roadmap = () => {
    return ( 
    <div style={{ marginLeft: "4rem"}}>
  <div className="lg:flex justify-between" id='roadmap'>
  <div>
    <div className="sm:flex sm:justify-between mb-5">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl whitespace-pre-wrap uppercase font-greek" style={{color:"#fff"}}>
        <div className="mb-5" >
ROADMAP</div>
      </h2>
      <div className="flex ">
        <div className="mr-4 w-40">
          <div className="relative flex justify-center cursor-pointer group text-gold-main">
            <div className="py-2.5 z-10 font-greek uppercase text-lg flex justify-center items-center group-hover:text-black text-black">
              Gia fatto
            </div>
            <div className="absolute  top-0 pointer-events-none left-0 ">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 210 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H209.461L206.046 45.6413L0.5 59.4652V0.5Z"
                  className="group-hover:fill-current stroke-current fill-current"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-40" style={{width:"11rem"}}>
          <div className="relative flex justify-center cursor-pointer group text-gold-main">
            <div className="py-2.5 z-10 font-greek uppercase text-lg flex justify-center items-center group-hover:text-black text-gold-main">
              Arriverà Presto
            </div>
            <div className="absolute  top-0 pointer-events-none left-0 ">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 210 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H209.461L206.046 45.6413L0.5 59.4652V0.5Z"
                  className="group-hover:fill-current stroke-current false"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-screen-lg">
      <img src="/roadmap/orn.png" alt="" className="w-full mb-5" />
      <div className="relative z-20">
        <div
          id="roadmap-section"
          className="px-10 transition-all duration-300 lg:h-104 overflow-y-hidden lg:overflow-y-auto overflow-x-visible relative"
        >
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Scelta del concetto</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>
                  Team strutturato di sviluppatori, designer, manager e
                  strateghi di marketing
                </p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>
                  Disegno strutturato e visualizzazione della 1a e 2a versione
                </p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Meccanismo per Shadow staking del token nativo</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Sviluppo Smart contract per le pool di liquidità 0.1.0</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>
                  Sviluppo dello smart contract apertura di posizioni in leva
                  0.1.0
                </p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Integrazione di ChainLink per aggiornamneto sui prezzi</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>
                  Gestione del ciclo di vita dei pool (controllare la visibilità
                  delle pool nell'applicazione)
                </p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Rinkeby testnet</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Connessione di interfaccia per depositi e prelievi
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Creazione di pool per i fornitori di liquidità
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Creazione di meccanismi di liquidazione
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Creare un meccanismo di leva
                    </div>
                  </div>
                </div>
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 false" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>5X ribattezzato Marnotaur</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Pools</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Concetto di sottoprodotto delle pool
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Creazione di una versione mvp del pool di Cardano
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Concetto di pool senza permessi
                    </div>
                  </div>
                </div>
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 false" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Farming/ Ricompense per la fornitura di liquidità</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Creata tecnologia di Shadow Staking
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Singolo token/LP token farming
                    </div>
                  </div>
                </div>
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 false" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Cooperazione di marketing con vari KOLs</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Creazione di comunità regionali</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>$TAUR Smart contract deployed su Binance Smart Chain</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Partnership con DAOMaker e Infinity Pad</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>$TAUR Community Round su Daomaker e Infinity Pad</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Test degli smart contract (contratti intelligenti)</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Documentare il protocollo</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>
                  Aggiunta di una funzione per prendere in prestito dei fondi
                </p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Implementazione sulla Etherum virtual Machine</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div />
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Pools</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div>
                  <div className="relative left-8 mb-4  block">
                    <div className="text-xl flex justify-between">
                      <p>
                        Creazione della versione mvp della pool di staking di
                        Solana
                      </p>
                      <p className="text-yellow-600 font-bold text-lg mr-8" />
                    </div>
                    <div className="relative">
                      <div className="font-light italic text-gold-main " />
                      <div />
                      <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 ml-0.25 hidden" />
                    </div>
                    <div className="absolute top-0.5 -left-10 ml-0.5">
                      <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full ml-1.5 hidden" />
                      <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20  bg-gold-main mb-1">
                        <div className="w-full h-full rounded-full bg-gold-main" />
                      </div>
                    </div>
                  </div>
                  <div className="relative left-8 mb-4  block">
                    <div className="text-xl flex justify-between">
                      <p>
                        Creazione dello staking game “Strong and weak hands”
                      </p>
                      <p className="text-yellow-600 font-bold text-lg mr-8" />
                    </div>
                    <div className="relative">
                      <div className="font-light italic text-gold-main ">
                        Gia fatto
                      </div>
                      <div>
                        <div className="mb-2 mt-2 flex">
                          <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                          <div className="text-lg font-light inline-block ml-4">
                            Creazione di contratti intelligenti per lo staking
                          </div>
                        </div>
                        <div className="mb-2 mt-2 flex">
                          <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                          <div className="text-lg font-light inline-block ml-4">
                            Progettazione del designs
                          </div>
                        </div>
                        <div className="mb-2 mt-2 flex">
                          <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                          <div className="text-lg font-light inline-block ml-4">
                            Creazione del lato front-end
                          </div>
                        </div>
                        <div className="mb-2 mt-2 flex">
                          <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                          <div className="text-lg font-light inline-block ml-4">
                            Collegare i contratti intelligenti con il front-end
                          </div>
                        </div>
                        <div className="mb-2 mt-2 flex">
                          <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                          <div className="text-lg font-light inline-block ml-4">
                            Collegare i contratti intelligenti con il front-end
                          </div>
                        </div>
                        <div className="mb-2 mt-2 flex">
                          <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                          <div className="text-lg font-light inline-block ml-4">
                            Avvio di test interni
                          </div>
                        </div>
                      </div>
                      <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 ml-0.25 false" />
                    </div>
                    <div className="absolute top-0.5 -left-10 ml-0.5">
                      <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full ml-1.5 hidden" />
                      <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20  bg-gold-main mb-1">
                        <div className="w-full h-full rounded-full bg-gold-main" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 false" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 hidden lg:block">
            <div className="relative">
              <div className="text-xl flex justify-between">
                <p>Lancio della Mainnet (rete principale)</p>
                <p className="text-yellow-600 font-bold text-lg" />
              </div>
              <div className="relative">
                <div className="font-light italic text-gold-main ">
                  Gia fatto
                </div>
                <div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Importare il codice sulla mainnet (rete principale)
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Lancio della prima versione sulla mainnet di Avalanche
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Documentare il protocollo
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Test di Liquidazione
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Lancio su BSC mainnet
                    </div>
                  </div>
                  <div className="mb-2 mt-2 flex">
                    <div className=" flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-gold-main" />
                    <div className="text-lg font-light inline-block ml-4">
                      Test inziale interno
                    </div>
                  </div>
                </div>
                <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 false" />
              </div>
              <div className="absolute top-0.5 -left-10 ">
                <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                  <div className="w-full h-full rounded-full bg-gold-main" />
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-mobileRoadmaps md:min-h-tabletRoadmaps">
            <div className="mb-5 lg:hidden">
              <div className="relative">
                <div className="text-xl flex justify-between">
                  <p>Scelta del concetto</p>
                  <p className="text-yellow-600 font-bold text-lg" />
                </div>
                <div className="relative">
                  <div className="font-light italic text-gold-main ">
                    Gia fatto
                  </div>
                  <div />
                  <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
                </div>
                <div className="absolute top-0.5 -left-10 ">
                  <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                    <div className="w-full h-full rounded-full bg-gold-main" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 lg:hidden">
              <div className="relative">
                <div className="text-xl flex justify-between">
                  <p>
                    Team strutturato di sviluppatori, designer, manager e
                    strateghi di marketing
                  </p>
                  <p className="text-yellow-600 font-bold text-lg" />
                </div>
                <div className="relative">
                  <div className="font-light italic text-gold-main ">
                    Gia fatto
                  </div>
                  <div />
                  <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
                </div>
                <div className="absolute top-0.5 -left-10 ">
                  <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                    <div className="w-full h-full rounded-full bg-gold-main" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 lg:hidden">
              <div className="relative">
                <div className="text-xl flex justify-between">
                  <p>
                    Disegno strutturato e visualizzazione della 1a e 2a versione
                  </p>
                  <p className="text-yellow-600 font-bold text-lg" />
                </div>
                <div className="relative">
                  <div className="font-light italic text-gold-main ">
                    Gia fatto
                  </div>
                  <div />
                  <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
                </div>
                <div className="absolute top-0.5 -left-10 ">
                  <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                    <div className="w-full h-full rounded-full bg-gold-main" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 lg:hidden">
              <div className="relative">
                <div className="text-xl flex justify-between">
                  <p>Meccanismo per Shadow staking del token nativo</p>
                  <p className="text-yellow-600 font-bold text-lg" />
                </div>
                <div className="relative">
                  <div className="font-light italic text-gold-main ">
                    Gia fatto
                  </div>
                  <div />
                  <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
                </div>
                <div className="absolute top-0.5 -left-10 ">
                  <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                    <div className="w-full h-full rounded-full bg-gold-main" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 lg:hidden">
              <div className="relative">
                <div className="text-xl flex justify-between">
                  <p>Sviluppo Smart contract per le pool di liquidità 0.1.0</p>
                  <p className="text-yellow-600 font-bold text-lg" />
                </div>
                <div className="relative">
                  <div className="font-light italic text-gold-main ">
                    Gia fatto
                  </div>
                  <div />
                  <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
                </div>
                <div className="absolute top-0.5 -left-10 ">
                  <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                    <div className="w-full h-full rounded-full bg-gold-main" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 lg:hidden">
              <div className="relative">
                <div className="text-xl flex justify-between">
                  <p>
                    Sviluppo dello smart contract apertura di posizioni in leva
                    0.1.0
                  </p>
                  <p className="text-yellow-600 font-bold text-lg" />
                </div>
                <div className="relative">
                  <div className="font-light italic text-gold-main ">
                    Gia fatto
                  </div>
                  <div />
                  <div className="w-0.5 h-full bg-gold-main absolute  top-1 -left-7 hidden" />
                </div>
                <div className="absolute top-0.5 -left-10 ">
                  <div className="w-6 h-6 p-1.5 rounded-full bg-opacity-20 bg-gold-main mb-1">
                    <div className="w-full h-full rounded-full bg-gold-main" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:max-h-80 h-full hidden lg:block top-0 absolute right-0  w-0.5 bg-ui-inactive">
          <div
            style={{ top: "80%" }}
            className="h-1/5 w-1 absolute left-0 bg-gold-main"
          />
        </div>
      </div>
      <div className="">
        <button className=" false text-gold-main z-30 lg:hidden hover:text-white transition-all mb-10 mt-8 font-greek text-lg uppercase px-4 relative focus:outline-none">
          <div className="absolute left-0 w-52 h-16">
            <svg
              width={171}
              height={54}
              className="w-full h-full"
              viewBox="0 0 171 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 0.5H170.456L167.038 41.0331L0.5 53.4613V0.5Z"
                className="stroke-current"
              />
            </svg>
          </div>
          <div className="pt-3 pl-6 w-full grid place-items-center">
            Mostra di più
          </div>
        </button>
      </div>
      <img src="/roadmap/orn.png" alt="" className="w-full mt-5" />
    </div>
  </div>
  <div className="w-full max-w-xl  place-items-center relative hidden lg:grid">
    <div
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #944400 0%, #E8934B 0.01%, rgba(175, 81, 1, 0) 100%)",
        opacity: "0.4"
      }}
      className="w-full h-full absolute -top-40 left-0"
    />
    <img src="/roadmap/fire.svg" alt="" />
  </div>
</div>


    </div>
    )
}


export default Roadmap;
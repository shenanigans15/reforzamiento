const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! Yo quiero mi dinero
    reject('Mi amigo se perdió')
  }, 2000)
})

myPromise
  .then((myMoney) => {
    console.log(`Tengo mis ${myMoney} de vuelta`)
  })
  .catch((reason) => {
    console.warn(reason)
  })
  .finally(() => {
    console.log('Pues a seguir con mi vida')
  })

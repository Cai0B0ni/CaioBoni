const dataFromServer = "resume";

export default {
  get: _ =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataFromServer);
      }, 2000);
    })
};

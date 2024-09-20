function calculate() {
  const misiones = parseInt(document.getElementById("misiones").value) || 0;
  const enemigos = parseInt(document.getElementById("enemigos").value) || 0;
  const rewardType = document.getElementById("rewardType").value;

  const rewardRates = {
    mon: { misiones: 100, enemigos: 10 },
    gem: { misiones: 5, enemigos: 1 },
    xp: { misiones: 500, enemigos: 100 },
  };

  const totalReward =
    misiones * rewardRates[rewardType].misiones +
    enemigos * rewardRates[rewardType].enemigos;

  document.getElementById("result").innerHTML = `
      <h2>Puntaje</h2>
      <p>
        Total de ${
          rewardType === "mon"
            ? "monedas de oro"
            : rewardType === "gem"
            ? "gemas"
            : "puntos de experiencia"
        }: ${totalReward}
      </p>
    `;
}

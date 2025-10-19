document.addEventListener('DOMContentLoaded', async () => {
  const robuxInput = document.getElementById('robuxInput');
  const usdInput = document.getElementById('usdInput');
  const customRate = document.getElementById('customRate');
  const rateInfo = document.getElementById('rateInfo');

  const robuxResult = document.getElementById('robuxResult');
  const usdResult = document.getElementById('usdResult');

  let usdToBrl = 5.0; // valor padrão
  const robuxToUsd = 0.0038; // 1 Robux = USD

  // Buscar cotação atual USD → BRL da AwesomeAPI
  try {
    const res = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const data = await res.json();
    usdToBrl = parseFloat(data.USDBRL.bid);
    customRate.value = usdToBrl.toFixed(2);
    rateInfo.textContent = `Cotação atual: 1 USD = R$${usdToBrl.toFixed(2)}`;
  } catch (err) {
    rateInfo.textContent = "Erro ao carregar cotação, usando valor padrão.";
    customRate.value = usdToBrl.toFixed(2);
  }

  // Funções de conversão
  function convertRobuxToBRL() {
    const robux = parseFloat(robuxInput.value);
    if (!isNaN(robux)) {
      const usd = robux * robuxToUsd;
      const brl = usd * parseFloat(customRate.value || usdToBrl);
      robuxResult.textContent = `${robux} Robux ≈ R$${brl.toFixed(2)} (${usd.toFixed(2)} USD)`;
    } else {
      robuxResult.textContent = "";
    }
  }

  function convertUsdToRobux() {
    const usd = parseFloat(usdInput.value);
    if (!isNaN(usd)) {
      const robux = usd / robuxToUsd;
      const brl = usd * parseFloat(customRate.value || usdToBrl);
      usdResult.textContent = `$${usd.toFixed(2)} USD ≈ ${robux.toFixed(2)} Robux (R$${brl.toFixed(2)})`;
    } else {
      usdResult.textContent = "";
    }
  }

  // Eventos
  robuxInput.addEventListener('input', convertRobuxToBRL);
  usdInput.addEventListener('input', convertUsdToRobux);

  customRate.addEventListener('change', () => {
    usdToBrl = parseFloat(customRate.value);
    rateInfo.textContent = `Cotação ajustada: 1 USD = R$${usdToBrl.toFixed(2)}`;
    convertRobuxToBRL();
    convertUsdToRobux();
  });
});

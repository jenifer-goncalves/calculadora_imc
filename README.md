<!-- Meu código -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora IMC</title>
</head>
<body>
    <main class="container">
        <header class="header">
            <h1>Calculadora IMC</h1>
        </header>

        <section class="cards">
            <div class="inputs">
                <div class="input-group">
                    <label>Peso</label>
                    <input 
                    type="number"
                    id="peso"
                    placeholder="Ex: 52kg"/>
                </div>

                <div class="input-group">
                    <label>Altura</label>
                    <input 
                    type="number"
                    id="altura"
                    placeholder="Ex: 1,65m"/>
                </div>
            </div>
        </section>
        

            <section class="buttons">
                <div class="button-calc">
                    <button onclick="calcularImc()">Calcular</button>
                </div>
                <div class="button-clean">
                    <button onclick="limpar()">Limpar</button>
                </div>  
            </section>    
        

        <section class="resultado" id="resultado">
            <!-- Link com o JS -->
        </section>

        <script src="./js/calculo-imc.js"></script>
    </main>
</body>
</html>
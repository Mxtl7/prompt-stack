# Prompts Anti-Alucinação: Como Impedir o ChatGPT de Inventar Coisas

*Palavra-chave: como fazer o chatgpt parar de inventar · leitura de 9 min*

O ChatGPT inventa coisas porque é um modelo de linguagem, não um banco de dados: ele prevê texto plausível, e uma estatística, um preço ou uma citação com cara de plausível é exatamente tão fluente quanto um real. Você não consegue consertar o modelo. Consegue consertar o prompt — e um prompt estruturado com flags de verificação explícitas corta a saída alucinada com muito mais consistência do que pedir ao modelo para "por favor, seja preciso".

Este artigo mostra os padrões de verificação que funcionam, por que funcionam, e como um stack de 20 prompts publicado os embute em todos os prompts por padrão.

## Por que "por favor, não invente nada" falha

Pedir ao modelo que seja preciso é um desejo, não uma restrição. Desejos competem com a instrução real ("escreva 1500 palavras citando estatísticas") e perdem — o modelo ainda precisa preencher a seção, então preenche com algo fluente. Três coisas funcionam de verdade:

1. **Uma instrução de papel que inclui padrões de precisão**, definida antes de qualquer conteúdo ser escrito.
2. **Uma especificação de saída com um lugar para a incerteza** — uma flag, um campo, uma seção — para o modelo ter onde colocar "não sei" que não seja um fato inventado.
3. **Proibições explícitas da falha específica** — estatísticas inventadas, citações inventadas, preços inventados — nomeadas uma a uma.

A segunda é a parte que sustenta tudo. Alucinação é, com frequência, um problema de roteamento: o modelo não tem um canal legítimo para a incerteza, então a incerteza vaza para o conteúdo como fabricação. Dê um canal a ele e o vazamento para.

## Padrão 1: A instrução de sistema que carrega precisão

Todo prompt do [Modern Freelancer's AI Prompt Stack](https://mxtl7.github.io/prompt-stack/) abre com uma instrução de sistema que carrega padrões de precisão, não só um papel. O Prompt 02 (o motor de conteúdo SEO):

> Você é um diretor de conteúdo SEO. Você produz conteúdo útil e com potencial de ranqueamento, não enrolação. Nada de keyword stuffing, nada de estatísticas inventadas.

A cláusula de precisão fica na mesma instrução que o papel, então vale desde o primeiro token, não depois de o modelo já ter decidido como o artigo vai soar. O Prompt 04 (copy de conversão) faz o mesmo com o próprio modo de falha: o papel de redator recebe a instrução de usar linguagem simples e proíbe juridiquês de marketing como "soluções", "vanguarda", "revolucionário" — assim a saída não desliza para o registro inflado onde afirmações inventadas parecem naturais.

O padrão: nomeie o modo de falha do modelo *para aquela tarefa* na instrução de sistema, numa única cláusula, antes de o conteúdo começar.

## Padrão 2: Flags de verificação em vez de fatos inventados

O mecanismo anti-alucinação central do stack é a flag `[VERIFY]` / `[CONFIRM]`: quando a saída de um prompt contém uma afirmação que o modelo não consegue ancorar — uma estatística, um número de mercado, um nome de cliente, um preço — o prompt exige que ele marque essa afirmação para verificação em vez de apresentá-la como fato.

A especificação do Prompt 02 deixa isso concreto: o artigo é escrito "marcando onde afirmações precisam de fontes que eu devo verificar". O modelo não fabrica um estudo de benchmark; ele escreve a afirmação e a marca. Você então gasta 30 segundos confirmando ou cortando. O prompt também carrega uma regra de afirmações absolutas — nenhum absoluto médico/jurídico/financeiro a menos que *você* forneça — para as categorias de fabricação de maior risco ficarem bloqueadas na origem, não apenas sinalizadas.

Este é o padrão mais transferível do artigo: **uma afirmação que o modelo inventa é um defeito que você descobre depois de publicar; uma afirmação que o modelo sinaliza é um defeito que você descobre em 30 segundos antes.** Mesmo defeito, dois custos muito diferentes.

## Padrão 3: Especificações de saída que deixam espaço para o "não sei"

Alucinação prospera em especificações que exigem saída confiante. Se o prompt pede "3 insights de mercado com números", o modelo produz 3 insights com números, mesmo quando só tem 1,5. A correção é uma especificação com canais legítimos de incerteza:

- um **campo `[VERIFY]`** para qualquer número que o modelo não tenha fundamentado,
- uma **opção explícita de devolver menos itens** do que os pedidos, em vez de preencher para bater a contagem,
- uma **seção separada para suposições**, para o que o modelo chutou ficar visível como chute.

Essa última é a diferença entre um sistema funcional e uma armadilha. O Prompt 10 do stack (Recebimento de Briefing de Projeto) existe exatamente para isso: transforma mensagens bagunçadas de cliente num briefing limpo e pega a ambiguidade *antes* de você emitir a fatura — as suposições aparecem como suposições, não entram silenciosamente no entregável. No contexto brasileiro, onde boa parte do escopo é combinada por áudio no WhatsApp e virar mensagem em texto, esse padrão é ainda mais valioso: o briefing estruturado expõe o que ficou combinado só de boca antes de virar prejuízo. A mesma ideia de design vale para qualquer prompt: torne os chutes do modelo visíveis, e a fabricação perde o esconderijo.

## Padrão 4: Anti-alucinação no fluxo de trabalho, não só no prompt

Sinalizar só funciona se a verificação acontecer de fato. O stack embute isso no fluxo de trabalho nos pontos onde fatos inventados custam mais caro:

- **Conteúdo para cliente:** a instrução de citação do motor de SEO coloca a verificação do seu lado da mesa, antes de o artigo ir ao ar.
- **Preço e negociação:** o prompt de negociação (Prompt 03) nunca deixa o modelo afirmar um preço — os preços vêm da sua taxa e do orçamento dele como parâmetros entre colchetes, e o trabalho do modelo são respostas de redução de escopo, não números inventados. O prompt de estratégia de preço faz a matemática do piso a partir das *suas* entradas, não do chute do modelo.
- **Prospecção:** o prompt de prospecção (Prompt 01) exige um detalhe *real* pesquisado por prospect como entrada — o modelo personaliza a partir de fatos que você fornece, e a especificação proíbe o enchimento que ele inventaria ("espero que esteja bem").

Essa divisão de trabalho é o núcleo do design: **fatos vêm de você como parâmetros entre colchetes; estrutura e linguagem vêm do modelo.** Um modelo trabalhando com os seus fatos não tem nada para alucinar sobre a substância — ele só escreve o tecido conjuntivo.

## Um checklist funcional

Passe qualquer conteúdo gerado por prompt por isto antes de ir ao ar:

1. **Todo número tem uma fonte que você verificou**, ou uma flag `[VERIFY]` que você resolveu.
2. **Todo nome, preço e citação vieram das suas entradas**, não da saída do modelo.
3. **Nenhuma afirmação absoluta médica/jurídica/financeira**, a menos que você tenha fornecido.
4. **As suposições do modelo estão visíveis** — aparecem como suposições, não entram no entregável.
5. **As contagens de itens batem com o que foi pedido** — e onde o modelo preencheu para bater a contagem, corte o preenchimento.

Cinco checagens, dois minutos, e o modo de falha que faz conteúdo de IA ser corrigido em público cai para perto de zero.

## FAQ

**Por que não simplesmente pedir ao modelo para citar fontes?**
Pedir fontes te dá fontes inventadas — citações fluentes para papers que não existem. A flag `[VERIFY]` inverte isso: o modelo marca as afirmações para *sua* verificação em vez de fabricar a base. Você checa o mundo real; o modelo checa o texto.

**Funciona no Claude e no Gemini também?**
Sim. São padrões de prompt, não recursos de modelo: uma instrução de papel com padrões de precisão, uma especificação de saída com canais de incerteza e proibições explícitas. Funcionam em qualquer modelo de linguagem.

**E código ou caminhos de arquivo alucinados?**
O mesmo padrão: fatos vêm das suas entradas. Cole o caminho de arquivo real, a mensagem de erro real, a resposta real da API no prompt como parâmetros, e exija que o modelo trabalhe a partir deles em vez de inventar versões plausíveis.

**Onde consigo prompts com isso embutido?**
O [Modern Freelancer's AI Prompt Stack](https://mxtl7.github.io/prompt-stack/) entrega 20 sistemas de prompts com os padrões de verificação acima embutidos em todos — flags `[VERIFY]`, instruções de sistema com precisão e parâmetros entre colchetes que mantêm os fatos do seu lado. Arquivos `.md` simples, funcionam em qualquer IA.

---

*Relacionados: [Prompts de IA para freelancers](01-prompts-de-ia-para-freelancers.md) · [Engenharia de prompts para trabalho com clientes](02-engenharia-de-prompts-para-clientes.md)*

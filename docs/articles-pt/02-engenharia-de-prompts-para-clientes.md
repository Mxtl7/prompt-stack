# Engenharia de Prompts para Trabalho com Clientes: um Sistema Funcional, não uma Frase Solta

*Palavra-chave: engenharia de prompts para clientes · leitura de 9 min*

O trabalho com clientes gira em torno de documentos: prospecção que gera resposta, artigos que rankeiam, landing pages que convertem, posts que preenchem o calendário. Cada um deles é um problema de prompt, e a maioria dos freelancers resolve do mesmo jeito perdedor — um pedido de cinco palavras seguido de vinte minutos reescrevendo o que veio.

Este artigo é o outro caminho. Mostra como um pequeno conjunto de sistemas de prompts estruturados cobre todo o caminho de entrega ao cliente, como é a especificação de saída de cada sistema e como rodá-los para o tempo de edição cair para minutos. Os exemplos vêm de um stack de 20 prompts publicado, para você ver as especificações reais, não um resumo.

## A regra que separa engenharia de prompts de "saber usar prompt"

Um sistema de prompts tem três partes fixas:

1. **Uma instrução de sistema** que define o papel e os padrões do modelo antes de qualquer conteúdo ser escrito.
2. **Uma especificação de saída estruturada** — lista exata de entregáveis com contagem de palavras e de itens, para o formato da saída ser previsível.
3. **Parâmetros entre colchetes** (`[nicho]`, `[palavra-chave principal]`, `[dor]`) que fazem o mesmo prompt funcionar para qualquer cliente e mercado.

A especificação de saída é a parte que sustenta tudo. "Escreva um artigo sobre SEO" dá liberdade total ao modelo, o que significa que cada execução te entrega algo diferente para consertar. Uma especificação como "primeiro o outline, depois 1500 palavras em parágrafos curtos, depois uma FAQ com perguntas como título, depois meta título + descrição com menos de 160 caracteres" te dá o mesmo esqueleto a cada execução. Mesmo esqueleto significa que você sabe exatamente onde editar — e onde não precisa editar.

## Sistema 1: O motor de conteúdo SEO

O conteúdo para clientes vive ou morre de estrutura. O Prompt 02 do [Modern Freelancer's AI Prompt Stack](https://mxtl7.github.io/prompt-stack/) roda como um diretor de SEO e produz, numa única execução:

- um outline com palavras-chave-alvo e intenção de busca (informacional vs. comercial),
- o artigo completo em parágrafos curtos e subtítulos, estilo E-E-A-T, **marcando onde afirmações precisam de fontes que você deve verificar**,
- uma seção de FAQ com perguntas como títulos,
- meta título e descrição com menos de 160 caracteres.

Dois detalhes dessa especificação fazem o trabalho pesado. Primeiro, o outline vem *antes* do artigo — você aprova a direção antes de existirem 1500 palavras, e é aí que a revisão de conteúdo fica barata de verdade. Segundo, a instrução de citação: o prompt é proibido de apresentar estatísticas inventadas como fato e, em vez disso, marca onde uma afirmação precisa de fonte. Para trabalho com cliente, isso não é detalhe. Uma estatística fabricada no blog de um cliente é um e-mail de correção e uma queda de credibilidade; uma flag `[VERIFY]` é uma checagem de fonte de 30 segundos do seu lado.

A instrução de sistema também carrega a lista de proibições: nada de keyword stuffing, nada de enrolação, nenhuma afirmação absoluta médica/jurídica/financeira a menos que você forneça. Seguro para cliente por padrão.

## Sistema 2: Copy de conversão para landing pages e e-mail

Copy de landing page tem um modo de falha diferente: ela não rankeia ou rankeia mal, simplesmente não converte, e ninguém te diz por quê. O motivo de sempre é que a copy descreve o produto em vez da dor do leitor.

O Prompt 04 roda como um redator de conversão com uma especificação que bloqueia essa falha: um headline de herói (máximo 8 palavras) mais subheadline, 3 bullets de benefício, cada um começando com um resultado, um corpo de 90 palavras, um CTA e uma FAQ de tratamento de objeções com 3 itens. Duas restrições importam para trabalho com cliente:

- **Um CTA.** CTAs empilhados dividem a intenção do leitor. A especificação impede fisicamente três botões competindo.
- **O insumo de enquadramento.** O prompt pede a maior dor do leitor como parâmetro e enquadra tudo em volta dela — e a instrução de sistema proíbe juridiquês de marketing: nada de "soluções", nada de "vanguarda", nada de "revolucionário".

Essa lista de proibições é o motivo de a copy sobreviver à revisão do cliente. E o CTA do mercado brasileiro geralmente não é um botão: é o link do WhatsApp Business. A especificação é agnóstica de canal — se o CTA do seu cliente é "chamar no WhatsApp", uma especificação com um único CTA garante que existe exatamente um botão de WhatsApp na página, não três competindo pelo clique.

## Sistema 3: Reaproveitamento social de uma ideia

O custo escondido do trabalho social para clientes é o calendário: cinco plataformas, cinco formatos nativos, uma ideia central. Reescrever a mesma ideia à mão para cada formato é sobrecarga pura.

O Prompt 05 pega a ideia central e devolve conteúdo nativo de plataforma numa execução: 1 post para LinkedIn (150–200 palavras, gancho primeiro, aprendizado, pergunta suave de fechamento), 3 threads de 4 tweets para X com uma ideia por tweet e um esboço de carrossel de 5 slides com 3 bullets por slide. A restrição de consistência é um parâmetro — `[voz/tom]` — para cada ativo soar como a marca do cliente, não como o modelo. E a regra antispam já vem embutida: nada de spam de hashtag, máximo 2 hashtags.

Uma execução substitui uma tarde de troca de formatos. Seu tempo de revisão é o único custo restante, e os formatos de saída fixos fazem dessa revisão um checklist em vez de uma reescrita.

## Rodando o sistema num projeto real

Um fluxo de trabalho com cliente, de ponta a ponta:

1. **Briefing.** Consiga o nicho do cliente, a palavra-chave principal e a maior dor do leitor dele. Esses são os parâmetros entre colchetes para tudo que vem depois.
2. **Conteúdo.** Rode o motor de SEO com esses parâmetros. Aprove o outline. Verifique toda afirmação sinalizada antes de o artigo ir ao ar. Entregue o artigo com a FAQ e as meta tags — a especificação já produziu o pacote.
3. **Landing page.** Rode o prompt de copy com o mesmo parâmetro de dor. Confira a contagem de CTAs (a especificação diz um). Entregue.
4. **Redes sociais.** Alimente o prompt de reaproveitamento com a ideia central do artigo. Agende o post do LinkedIn e as threads. O teto continua em 2 hashtags.
5. **Iteração.** Quando o ranqueamento ou a conversão estancam, o que você muda são os parâmetros — não os prompts. O sistema fica fixo; as entradas carregam a informação nova.

Esse último ponto é a disciplina real da engenharia de prompts para trabalho com cliente: separar o invariante (a estrutura do prompt) do variável (as entradas do cliente). Mude o variável, mantenha o invariante, e suas saídas continuam consistentes em todo projeto.

## O que a especificação de saída compra

- **Edições previsíveis.** Mesmo esqueleto a cada execução significa que você sabe onde cada bloco mora.
- **Padrões seguros para cliente.** Flags de citação, listas de proibições e restrições de afirmações ficam dentro da especificação, não na sua memória.
- **Trabalho em paralelo.** Como todo prompt produz um pacote fixo (artigo + FAQ + meta; hero + bullets + CTA + FAQ), você entrega três coisas para três clientes numa mesma sentada sem contaminação cruzada.
- **Revisões mais rápidas.** Clientes aprovam outlines e bullets, não rascunhos de 1500 palavras. A especificação antecipa a aprovação.

## FAQ

**Isso serve só para agências?**
Não. As especificações escalam para baixo: um freelancer solo cuidando do blog de um cliente usa os mesmos três sistemas, só com menos colchetes preenchidos por semana.

**O modelo segue a especificação?**
Na maioria das vezes, e a falha é óbvia — uma seção de FAQ faltando ou um headline de 12 palavras se vê em segundos. Essa visibilidade é o ponto da especificação: defeito barato de pegar e barato de consertar.

**E quando o cliente quer uma copy "mais criativa"?**
Mude o parâmetro, não a especificação. Afrouxe o insumo de tom e mantenha a contagem de CTAs, a lista de proibições e o formato de saída. Você mantém a disciplina e ganha o tempero.

**Onde consigo esses sistemas?**
O [Modern Freelancer's AI Prompt Stack](https://mxtl7.github.io/prompt-stack/) entrega os 20 como arquivos `.md` simples — o motor de SEO, copy de conversão, reaproveitamento social, além de prospecção, negociação e o resto do caminho do cliente. Todo prompt inclui instrução de sistema, especificação de saída exata e parâmetros entre colchetes.

---

*Relacionados: [Prompts de IA para freelancers](01-prompts-de-ia-para-freelancers.md) · [Prompts anti-alucinação: como impedir a IA de inventar coisas](03-anti-hallucination-prompts.md)*

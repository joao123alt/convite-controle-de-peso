# 🎨 Sistema de Design & Identidade Visual (Design System) - VidaVem

Este guia descreve o ecossistema de design, tokens visuais, componentes primitivos e regras de estilização multiplataforma (iOS, Android e Web) do aplicativo **VidaVem Controle de Peso**.

---

## 🌈 1. Paleta de Cores e Temas

O aplicativo suporta temas **Claro** (Light) e **Escuro** (Dark) nativamente, controlados via `ThemeContext.tsx` e injetados pelo `TamaguiProvider`. A base visual é "Premium & Moderna", focada em alto contraste, bordas transparentes refinadas e acentos de cor marcantes.

### 🎨 1.1. Cores de Marca e Semânticas
| Categoria | Nome do Token | Cor HEX | Propósito / Aplicação |
| :--- | :--- | :--- | :--- |
| **Marca Principal** | `$primary` | `#EF6820` | Destaque principal, botões de ação e pílulas ativas. |
| **Marca Hover** | `$primaryHover` | `#FFA333` | Estado de foco/hover para botões primários. |
| **Marca Secundária** | `$secondary` | `#FF744C` | Cores de acento e gradientes. |
| **Semântica Sucesso** | `$success` | `#28A745` | Progresso positivo, perda de peso e metas atingidas. |
| **Semântica Erro** | `$error` | `#FF5959` | Alertas de ganho de peso, recaídas e erros de formulário. |

### 🌗 1.2. Definição de Temas (Claro vs. Escuro)

```mermaid
graph TD
    ThemeContext[ThemeContext] -->|Tema Ativo| TamaguiProvider[TamaguiProvider]
    TamaguiProvider -->|Tema: Claro| LightTheme[Fundo: #F7F7F7 | Texto: #111]
    TamaguiProvider -->|Tema: Escuro| DarkTheme[Fundo: #111 | Texto: #F7F7F7]
    LightTheme --> Primitives[Botões, Títulos, Textos e Gráficos]
    DarkTheme --> Primitives
```

* **Tema Claro (`light`):**
  * Fundo Principal (`background`): `#F7F7F7` (Cinza muito claro/quase branco)
  * Superfícies/Containers (`backgroundSecondary`): `#FFFFFF`
  * Textos/Títulos (`text` / `color`): `#111111`
  * Bordas e Divisores (`borderColor`): `#ADADAD`
* **Tema Escuro (`dark`):**
  * Fundo Principal (`background`): `#111111` (Preto puro para displays OLED)
  * Superfícies/Containers (`backgroundSecondary`): `#1F1F1F` (Cinza chumbo)
  * Textos/Títulos (`text` / `color`): `#F7F7F7`
  * Bordas e Divisores (`borderColor`): `#2C2C2C`

> [!NOTE]
> Todos os componentes e telas devem utilizar tokens semânticos (ex: `$background` e `$text`) em vez de valores HEX fixos para garantir suporte automático ao modo escuro.

---

## 📐 2. Tipografia e Escalas

A tipografia do aplicativo é estruturada sobre a fonte **Inter** (`Inter_400Regular`), garantindo ótima legibilidade e estilo minimalista editorial.

### 🔤 2.1. Escala de Tamanhos de Fonte
* `$fontSize.textXsm`: `16px` (Legendas e dados auxiliares)
* `$fontSize.textSm`: `17px` (Corpo secundário e botões)
* `$fontSize.textMd`: `18px` (Corpo principal de textos)
* `$fontSize.textLg`: `26px` (Destaque e números médios)
* `$fontSize.titleSm`: `20px` (Títulos de seções / subtítulos)
* `$fontSize.titleMd`: `24px` (Títulos de cartões / modais)
* `$fontSize.titleLg`: `35px` (Títulos principais / KPIs de peso)

> [!IMPORTANT]
> Todos os componentes de texto implementam `allowFontScaling={false}`. Isso impede que as configurações de acessibilidade do sistema operacional quebrem as proporções e o alinhamento da interface da aplicação.

---

## 🔳 3. Grid, Espaçamentos e Sombras

O sistema visual utiliza escalas consistentes para paddings, margens e arredondamentos.

### 📐 3.1. Espaçamento (Spacing)
* **Pequeno (`$sm` / `spacing.xSmall`):** `8px` — Para gaps internos de flex, rótulos e ícones emparelhados.
* **Médio (`$md` / `spacing.small`):** `16px` — Para margens padrão e paddings internos de cartões.
* **Grande (`$lg` / `spacing.medium`):** `24px` — Para distanciamento entre blocos de informação principais.

### 🍩 3.2. Bordas e Arredondamento (Border Radius)
* `$radius.sm`: `5px` — Para tags de status e badges.
* `$radius.md`: `9px` — Para inputs, caixas de diálogo e botões.
* `$radius.lg`: `30px` — Para cartões de destaque e modais flutuantes.
* `$radius.full`: `50px` — Para avatares e botões circulares.

### 👥 3.3. Elevações e Sombras (Shadows)
As sombras são definidas em `shadowStyles.ts` para oferecer profundidade e efeito de "vidro" sobre o fundo:
* **`shadow` (Padrão):** Sombra firme com `elevation: 10` e `shadowOpacity: 0.28`, ideal para menus e banners flutuantes.
* **`modernShadow` (Premium):** Sombra suave e espalhada com `elevation: 12` e `shadowOpacity: 0.25` (emulada na Web usando `box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12)`).

---

## 🧱 4. Componentes Primitivos de Interface

Estes componentes representam os blocos fundamentais (primitivos) de construção visual e estão localizados em `src/styles/components/`.

### 🔘 4.1. Botões (Buttons)

```carousel
```tsx
// Button1: Ação Primária
import Button1 from '@/styles/components/buttons/Button1';

<Button1 onPress={handleRegister}>
  Registrar Peso
</Button1>
```
<!-- slide -->
```tsx
// Button2: Ação Secundária (Contorno)
import Button2 from '@/styles/components/buttons/Button2';

<Button2 onPress={handleCancel}>
  Voltar
</Button2>
```
<!-- slide -->
```tsx
// Button3: Ação Terceária (Reverse Fundo)
import Button3 from '@/styles/components/buttons/Button3';

<Button3 onPress={handleAlt}>
  Opções Alternativas
</Button3>
```
```

#### Biblioteca de Estilo de Botões
* **`Button1` (Principal):** Fundo laranja (`#EF6820`), texto em negrito (`700`) e cor branca. Efeito hover com suavização para `$primaryHover`.
* **`Button2` (Secundário/Outlined):** Fundo branco, contorno laranja `$primary` e texto laranja. Ideal para ações secundárias como "Voltar".
* **`Button3` (Inverso):** Fundo `$white` com texto `$textReverse`. Adapta-se dinamicamente ao tema ativado.
* **`Button4` (Link de Texto):** Fundo transparente, ideal para botões discretos e links.
* **`ButtonDisabled`:** Fundo cinza e texto cinza para indicar estados desabilitados.

---

### 📝 4.2. Títulos e Textos (Typography Wrappers)

```tsx
import Title1 from '@/styles/components/titles/Title1';
import Title2 from '@/styles/components/titles/Title2';
import Text2 from '@/styles/components/texts/Text2';
import Text3 from '@/styles/components/texts/Text3';

<Title1>82.5 kg</Title1>            {/* Título de destaque (35px) */}
<Title2 color="primary">Meta</Title2> {/* Título médio colorido (24px) */}
<Text2>Insira seu peso hoje</Text2>   {/* Texto principal (18px) */}
<Text3 color="gray">Opcional</Text3>  {/* Texto secundário/legenda (17px) */}
```

* **`Title1` / `Title2` / `Title3`:** Utilizados para títulos de grande, médio e pequeno porte respectivamente. Suportam a propriedade `color` para trocar rapidamente a cor semântica do texto.
* **`Text1` a `Text4`:** Elementos de texto de tamanho 26px, 18px, 17px e 16px. Todos contêm fallbacks de acessibilidade pré-configurados.

---

## 📊 5. Gráficos & Visualização de Dados (Charts)

Os gráficos representam a parte central da interface de acompanhamento do plano comportamental e necessitam de renderização otimizada para Web e Mobile.

### 📉 5.1. Gráfico de Peso (`WeightChart`)
Exibe a evolução do peso real, peso projetado e a linha de tendência do usuário.
* **Mobile (Nativo):** Utiliza gráficos vetoriais construídos sob medida usando `react-native-svg` e curvas suaves do `react-native-wagmi-charts`.
* **Web (Navegadores):** Utiliza um wrapper condicional (`WeightChart.web.tsx`) com a biblioteca `recharts` para garantir interatividade responsiva por hover e renderização limpa do DOM.

### 📊 5.2. Gráfico Comportamental (`BehaviorChart`)
Exibe as métricas diárias de esforço, satisfação e fome (**Esforço / Satisfação / Fome**) em curvas sobrepostas:
* **Curva de Esforço (Effort):** Acento laranja `$primary`.
* **Curva de Satisfação (Satisfaction):** Acento verde `$success`.
* **Curva de Fome (Hunger):** Acento vermelho `$error`.

---

## 🚀 6. Diretrizes de Layout e Alinhamento

Para criar interfaces visualmente impactantes, siga estas regras:
1. **Zonas de Contraste:** Utilize fundos translúcidos com baixas opacidades (ex. `bg-color-500/10`) para pílulas e tags, mantendo a legibilidade do texto.
2. **Visual Clutter:** Evite spinners e loaders infinitos. Use o padrão `TransitionLoading.tsx` ou esqueletos estáticos de layout para transições de tela mais rápidas e orgânicas.
3. **Portal Provider:** Componentes suspensos (Select, Dialogs, Tooltips, Modais) devem sempre estar encapsulados por um `<PortalProvider shouldAddRootHost>` (presente no `_layout.tsx`) para evitar que fiquem ocultos atrás de layouts e barreiras nativas.
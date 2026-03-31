# 🚑 Web App Interativo de Ensino de Primeiros Socorros

## ⚠️ AVISO LEGAL E DE PROPRIEDADE INTELECTUAL
Este repositório contém o código-fonte e a estrutura pedagógica de um **Produto Educacional** desenvolvido como requisito para a obtenção do grau de Mestre pelo Programa de Pós-Graduação em Educação Profissional e Tecnológica (ProfEPT).

Os direitos patrimoniais pertencem ao **Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro (IFTM)**. A autoria (direitos morais) pertence ao pesquisador e desenvolvedor listado ao final deste documento.

---

## 🎯 Sobre o Projeto
Trata-se de uma Tecnologia Educacional em formato de *Web App Client-Side* (executado diretamente no navegador do celular ou computador), concebida para o ensino de Primeiros Socorros a estudantes do Ensino Médio Integrado e ao público leigo em geral.

Diferente de manuais estáticos tradicionais, este sistema fundamenta-se em metodologias ativas de aprendizagem, notadamente a **Aprendizagem Baseada em Problemas (PBL)**. O sistema utiliza o erro como ferramenta pedagógica e estimula a tomada de decisão ativa em situações de emergência simuladas.

---

## 📦 Arquitetura e Módulos Pedagógicos
O sistema foi arquitetado de forma modular, congregando teoria e prática simulada em um ambiente virtual unificado:

1. **📖 Módulo Teórico Interativo:** Conversão do conhecimento técnico-científico (diretrizes de saúde, protocolos de RCP, etc.) em seções de leitura otimizadas para telas móveis, enriquecidas com esquemas visuais e integração de vídeos explicativos.
2. **🚨 Motor de Simulação de Casos Clínicos:** O núcleo interativo do produto. O usuário é imerso em um cenário de emergência passo a passo. O algoritmo de *State Machine* (Máquina de Estados) impede o avanço em caso de escolhas incorretas, fornecendo *feedback* formativo imediato (explicando o "porquê" do erro antes de permitir nova tentativa).
3. **📝 Módulo de Avaliação (Quiz Formativo):** Sistema dinâmico de teste de conhecimentos com cálculo de pontuação em tempo real, garantindo a consolidação da aprendizagem.
4. **🔗 Hub de Extensão e Certificação:** Encaminhamento do usuário para páginas e entidades certificadoras oficiais da área (ex: AVA do Corpo de Bombeiros).

---

## 🛠️ Stack Tecnológica (Desenvolvimento Sustentável)
A escolha da tecnologia baseou-se nos princípios de alta portabilidade, acessibilidade e independência de infraestrutura (*Offline-first approach* parcial):
* **Interface (Frontend):** HTML5 Semântico e CSS3 (Design Responsivo / *Mobile-First*).
* **Motor Lógico e Pedagógico:** *Vanilla JavaScript* (JS puro, sem dependência de bibliotecas externas pesadas).
* **Hospedagem e Deploy:** Servido nativamente via *GitHub Pages*, garantindo disponibilidade 24/7 sem custos institucionais de servidores.

---

## 📝 Autoria e Registro
* **Titular dos Direitos Patrimoniais:** Instituto Federal do Triângulo Mineiro (IFTM) - CNPJ: 10.695.891/0001-00.
* **Programa:** Mestrado Profissional em Educação Profissional e Tecnológica (ProfEPT).
* **Pesquisador / Desenvolvedor:** Luis Fernando Howeler.
* **Orientador:** Prof. Dr. Geraldo Gonçalves de Lima.
* **Ano de Conclusão:** 2026.

---

## ⚖️ Licença e Direitos Autorais

[![Licença Creative Commons](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

Este Produto Educacional é licenciado sob uma [Licença Creative Commons Atribuição-NãoComercial-CompartilhaIgual 4.0 Internacional](http://creativecommons.org/licenses/by-nc-sa/4.0/).

**O que isso significa?**
Você tem o direito de compartilhar (copiar e redistribuir o material em qualquer suporte ou formato) e adaptar (remixar, transformar e criar a partir do material) para **fins estritamente educacionais e não comerciais**, sob as seguintes condições:
* **Atribuição (BY):** Você deve dar o crédito apropriado aos autores (Luis Fernando Howeler e Prof. Dr. Geraldo Gonçalves de Lima) e à instituição titular dos direitos patrimoniais (IFTM).
* **Não Comercial (NC):** Você não pode usar o material para fins comerciais.
* **Compartilha Igual (SA):** Se você remixar, transformar ou criar a partir do material, tem de distribuir as suas contribuições sob a mesma licença que o original.

*O código-fonte constitui patrimônio do Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro (IFTM), passível de registro de anterioridade junto ao Instituto Nacional da Propriedade Industrial (INPI).*

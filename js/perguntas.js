const bancoDeQuestoes = [
  {
    "id": 1,
    "pergunta": "Você chega a um cruzamento onde ocorreu uma colisão entre dois carros. Há fumaça saindo de um dos veículos e combustível vazando. Uma vítima foi ejetada e sangra intensamente (esguichando) pela perna, enquanto outra dentro do carro grita de dor segurando o braço. Qual é a sua primeira ação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Correr imediatamente até a vítima ejetada para aplicar um torniquete, pois o sangramento arterial é a maior prioridade de vida.",
        "correta": false,
        "explicacao": "Apesar do sangramento exsanguinante ser a prioridade clínica (X no XABCDE), a segurança da cena (risco de incêndio/explosão) deve ser garantida antes de qualquer intervenção, evitando que o socorrista se torne uma vítima."
      },
      {
        "id": "B",
        "texto": "Avaliar a vítima que está gritando no carro, pois a capacidade de vocalizar indica que as vias aéreas estão abertas.",
        "correta": false,
        "explicacao": "Ignorar um sangramento exsanguinante (vítima ejetada) e a segurança da cena viola as diretrizes do PHTLS. O paciente que grita tem via aérea pérvia, mas não é a prioridade crítica de trauma."
      },
      {
        "id": "C",
        "texto": "Garantir a segurança da cena afastando-se do risco, acionar o serviço de emergência (192/193) e orientar as vítimas se possível.",
        "correta": true,
        "explicacao": "Conforme o PHTLS (10ª Edição) e diretrizes de SBV, a avaliação da cena é o passo zero. Se o local é inseguro (fumaça e combustível), o leigo deve acionar o socorro especializado e não entrar na zona de perigo."
      },
      {
        "id": "D",
        "texto": "Retirar rapidamente a vítima de dentro do veículo em chamas e depois procurar o kit de primeiros socorros para o sangramento.",
        "correta": false,
        "explicacao": "O leigo não possui EPI adequado para atuar em um veículo com princípio de incêndio e vazamento de combustível. A ação correta é manter-se seguro e acionar o Corpo de Bombeiros (193)."
      }
    ]
  },
  {
    "id": 2,
    "pergunta": "Durante um evento esportivo, um homem de 50 anos cai abruptamente no chão. Você se aproxima, verifica que o local é seguro, toca em seus ombros e o chama em voz alta, mas ele não responde. Você observa que ele apresenta respirações agônicas (gasping). Qual a conduta imediata?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Posicioná-lo de lado na posição de recuperação para evitar aspiração e aguardar que a respiração volte ao padrão normal.",
        "correta": false,
        "explicacao": "A respiração agônica (gasping) não é uma respiração normal e é um sinal clássico de Parada Cardiorrespiratória (PCR). A posição de recuperação atrasaria o início vital das compressões torácicas."
      },
      {
        "id": "B",
        "texto": "Solicitar a alguém que ligue para o 192 e traga um DEA, e iniciar imediatamente as compressões torácicas fortes e rápidas.",
        "correta": true,
        "explicacao": "Segundo a AHA (2020), vítima não responsiva e com ausência de respiração normal (gasping) deve ser tratada como PCR. A cadeia de sobrevivência exige acionamento imediato e RCP precoce."
      },
      {
        "id": "C",
        "texto": "Abrir as vias aéreas, checar o pulso carotídeo por até 15 segundos e aplicar duas ventilações de resgate antes das compressões.",
        "correta": false,
        "explicacao": "A diretriz da AHA não recomenda a checagem de pulso para leigos (gera atraso e erro). A sequência correta é CAB (Compressões primeiro), não mais ABC, e a checagem nunca deve passar de 10 segundos para profissionais."
      },
      {
        "id": "D",
        "texto": "Elevar as pernas da vítima para aumentar o retorno venoso ao coração e aguardar o Serviço de Atendimento Móvel de Urgência.",
        "correta": false,
        "explicacao": "A elevação de pernas é ineficaz para tratar uma Parada Cardiorrespiratória e desperdiça tempo crítico que deveria ser usado para realizar compressões torácicas contínuas."
      }
    ]
  },
  {
    "id": 3,
    "pergunta": "Você está em um restaurante e percebe que um bebê de aproximadamente 8 meses parou de tossir enquanto comia. Ele não emite som, está consciente, mas apresenta os lábios e rosto arroxeados (cianose). O que você deve fazer imediatamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar o bebê de pé, apoiado no seu colo, e realizar compressões abdominais rápidas (Manobra de Heimlich) logo abaixo do umbigo.",
        "correta": false,
        "explicacao": "A Manobra de Heimlich (compressões abdominais) é contraindicada para lactentes (menores de 1 ano) pelo alto risco de lesões em órgãos internos, como o fígado."
      },
      {
        "id": "B",
        "texto": "Abrir a boca da criança e realizar uma varredura às cegas com o dedo indicador para tentar puxar o corpo estranho visível ou não.",
        "correta": false,
        "explicacao": "A varredura digital às cegas é estritamente proibida, pois pode empurrar o objeto ainda mais fundo na via aérea, agravando a obstrução."
      },
      {
        "id": "C",
        "texto": "Segurar o bebê pelas pernas de cabeça para baixo e sacudir suavemente para que a gravidade ajude a expelir o alimento.",
        "correta": false,
        "explicacao": "Segurar a criança pelos pés e sacudir é uma prática perigosa que aumenta o risco de queda grave e trauma cranioencefálico, não sendo recomendada por nenhuma diretriz."
      },
      {
        "id": "D",
        "texto": "Posicionar o bebê de bruços em seu antebraço, aplicar 5 golpes nas costas e alternar com 5 compressões torácicas usando dois dedos.",
        "correta": true,
        "explicacao": "Segundo a AHA, a conduta correta para obstrução grave em lactentes responsivos é a alternância de 5 golpes interescapulares (nas costas) e 5 compressões torácicas no centro do peito."
      }
    ]
  },
  {
    "id": 4,
    "pergunta": "Uma jovem estudante de repente grita, cai no chão e começa a apresentar contrações musculares rítmicas e intensas por todo o corpo. Ela está espumando pela boca e seus dentes estão travados. Vários colegas estão em pânico. Qual a sua conduta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Inserir rapidamente uma caneta ou carteira entre os dentes dela para evitar que ela enrole ou morda gravemente a própria língua.",
        "correta": false,
        "explicacao": "Este é um mito popular perigoso. Inserir objetos na boca de alguém convulsionando pode quebrar os dentes da vítima, obstruir a via aérea ou causar lesões graves nos dedos do socorrista."
      },
      {
        "id": "B",
        "texto": "Imobilizar firmemente os braços e as pernas da vítima no chão para evitar que ela se machuque durante os fortes espasmos motores.",
        "correta": false,
        "explicacao": "Restringir os movimentos de uma pessoa em crise convulsiva pode resultar em luxações articulares, estiramentos musculares e até fraturas ósseas. Os movimentos devem ser livres."
      },
      {
        "id": "C",
        "texto": "Afastar objetos cortantes ou duros do alcance dela, proteger a cabeça com algo macio, cronometrar a crise e não intervir na boca.",
        "correta": true,
        "explicacao": "A conduta baseada em evidências é focar na proteção contra traumas secundários (afastar objetos, proteger a cabeça). Após a crise cessar, deve-se lateralizar a vítima (posição de recuperação)."
      },
      {
        "id": "D",
        "texto": "Oferecer pequenos goles de água assim que ela parar de se debater para lavar a espuma da boca e desobstruir as vias respiratórias.",
        "correta": false,
        "explicacao": "Nunca se deve oferecer líquidos ou alimentos para uma vítima que acabou de convulsionar (fase pós-ictal), pois o nível de consciência está alterado e há altíssimo risco de broncoaspiração."
      }
    ]
  },
  {
    "id": 5,
    "pergunta": "Um cozinheiro derrama acidentalmente uma panela de óleo fervente sobre o próprio antebraço direito. A pele imediatamente fica vermelha, extremamente dolorida e começam a se formar grandes bolhas. O que deve ser feito no atendimento pré-hospitalar inicial?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar compressas de gelo diretamente sobre a queimadura para interromper o dano térmico profundo e aliviar a dor aguda.",
        "correta": false,
        "explicacao": "O uso de gelo direto em queimaduras causa vasoconstrição severa e lesão térmica adicional pelo frio (geladura), agravando a isquemia do tecido já lesionado."
      },
      {
        "id": "B",
        "texto": "Estourar as bolhas cuidadosamente com uma agulha limpa para aliviar a pressão e aplicar uma camada grossa de pomada cicatrizante.",
        "correta": false,
        "explicacao": "Bolhas intactas funcionam como um curativo biológico estéril que protege contra infecções e perda de fluidos. O leigo nunca deve rompê-las ou aplicar pomadas sem prescrição médica."
      },
      {
        "id": "C",
        "texto": "Resfriar o antebraço com água corrente em temperatura ambiente por cerca de 10 a 20 minutos e cobrir com um pano limpo e seco.",
        "correta": true,
        "explicacao": "A diretriz de primeiros socorros indica que o resfriamento com água corrente em temperatura ambiente cessa a progressão do calor nos tecidos. Cobrir com pano limpo previne infecções e alivia a dor pelo contato com o ar."
      },
      {
        "id": "D",
        "texto": "Aplicar pasta de dente ou clara de ovo sobre a área afetada para resfriar a pele e evitar que a queimadura atinja tecidos profundos.",
        "correta": false,
        "explicacao": "Produtos caseiros não estéreis (pasta de dente, manteiga, ovo) retêm o calor na ferida, aumentam drasticamente o risco de infecção e dificultam a limpeza posterior no hospital."
      }
    ]
  },
  {
    "id": 6,
    "pergunta": "Durante um almoço em família, o seu avô de repente deixa o garfo cair e não consegue levantar o braço esquerdo. Ao tentar perguntar o que houve, você nota que a fala dele está enrolada e um dos lados do rosto parece caído. O que deve ser feito?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Oferecer um copo de água com açúcar para descartar a possibilidade de hipoglicemia antes de acionar o socorro profissional.",
        "correta": false,
        "explicacao": "Com a face caída e fala enrolada, ele pode estar sem reflexo de deglutição adequado. Dar qualquer coisa via oral pode causar engasgo e broncoaspiração letal."
      },
      {
        "id": "B",
        "texto": "Administrar um comprimido de ácido acetilsalicílico (AAS) mastigável imediatamente, pois trata-se de um possível infarto agudo.",
        "correta": false,
        "explicacao": "Os sinais descritos são da Escala de Cincinnati para AVC (Acidente Vascular Cerebral). O leigo não deve administrar AAS, pois o AVC pode ser hemorrágico, e o anticoagulante agravaria o quadro."
      },
      {
        "id": "C",
        "texto": "Deitá-lo confortavelmente no sofá, elevar suas pernas para aumentar a oxigenação cerebral e aguardar 30 minutos em observação.",
        "correta": false,
        "explicacao": "Elevar as pernas ou deitar o paciente sem supervisão médica pode aumentar a pressão intracraniana em caso de AVC. O tempo é crucial (\"tempo é cérebro\") e não se deve aguardar."
      },
      {
        "id": "D",
        "texto": "Registrar o horário exato do início dos sintomas, tranquilizar a vítima e ligar imediatamente para o SAMU (192) relatando os sinais.",
        "correta": true,
        "explicacao": "Reconhecimento rápido através do mnemônico SAMU (Sorriso, Abraço, Mensagem, Urgência). Saber a hora de início dos sintomas é fundamental para a equipe hospitalar decidir sobre o uso de trombolíticos."
      }
    ]
  },
  {
    "id": 7,
    "pergunta": "Um trabalhador da construção civil tem sua perna esmagada e parcialmente amputada por uma viga de aço. Você é o primeiro a chegar. Ele está pálido, confuso e o sangue jorra em grandes quantidades (pulsátil) do coto. Como você atua de forma prioritária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar pressão direta sobre a lesão com uma gaze limpa e aguardar, pois o uso de torniquetes é o último recurso absoluto e pode causar perda da perna.",
        "correta": false,
        "explicacao": "Embora a pressão direta seja útil, em amputações e sangramentos arteriais massivos com risco de vida iminente, o torniquete é a intervenção de primeira linha nas diretrizes modernas (PHTLS e Stop the Bleed)."
      },
      {
        "id": "B",
        "texto": "Priorizar a busca da parte amputada para embalá-la em gelo direto, aumentando as chances de reimplante cirúrgico pelo hospital.",
        "correta": false,
        "explicacao": "A prioridade absoluta é salvar a vida (controle da hemorragia exsanguinante) antes de focar no membro amputado. A regra básica do trauma é 'vida sobre membro'."
      },
      {
        "id": "C",
        "texto": "Instalar rapidamente um torniquete comercial ou improvisado cerca de 5 a 7 cm acima da ferida, apertando até que o sangramento pare completamente.",
        "correta": true,
        "explicacao": "Hemorragia exsanguinante em extremidades (letra X do PHTLS) é a principal causa de morte evitável no trauma. A aplicação imediata e eficaz de um torniquete é a manobra de salvamento padrão."
      },
      {
        "id": "D",
        "texto": "Lavar abundantemente o local com soro fisiológico e água oxigenada para prevenir infecção óssea profunda antes de tentar conter o sangue.",
        "correta": false,
        "explicacao": "Lavar a ferida diante de um sangramento arterial ativo consome tempo crítico e remove coágulos incipientes, piorando a perda de sangue e levando a vítima ao choque hipovolêmico rapidamente."
      }
    ]
  },
  {
    "id": 8,
    "pergunta": "Uma adolescente com histórico conhecido de alergia severa a amendoim ingere acidentalmente um pedaço de bolo contaminado. Em poucos minutos, ela apresenta inchaço extremo nos lábios, dificuldade extrema para respirar (chiado forte) e urticária. Ela possui uma caneta de epinefrina (EpiPen) na bolsa. Qual a ação inicial correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Oferecer água e incentivar a respiração lenta, aguardando que o corpo lide com a alergia antes de recorrer a medicamentos fortes.",
        "correta": false,
        "explicacao": "A anafilaxia é uma emergência médica de rápida evolução que leva à morte por fechamento da via aérea ou choque. Retardar a aplicação do tratamento reverte drasticamente a chance de sobrevivência."
      },
      {
        "id": "B",
        "texto": "Ligar para o 192 e auxiliar a vítima na autoaplicação da sua caneta de epinefrina na parte externa da coxa, conforme prescrito.",
        "correta": true,
        "explicacao": "Na suspeita de anafilaxia, a administração precoce da adrenalina intramuscular é a intervenção primária que salva vidas. O leigo é autorizado e incentivado a auxiliar o paciente a usar seu próprio dispositivo prescrito."
      },
      {
        "id": "C",
        "texto": "Inserir os dedos na garganta da adolescente para manter fisicamente a via aérea aberta caso o inchaço bloqueie totalmente a passagem de ar.",
        "correta": false,
        "explicacao": "Manipulação manual da orofaringe em pacientes com edema de glote anafilático é perigosa, ineficaz e pode acelerar o fechamento total da via aérea devido a espasmos e lesões."
      },
      {
        "id": "D",
        "texto": "Administrar 2 comprimidos de anti-histamínico oral (antialérgico comum) que você possui na mochila e aguardar 15 minutos pelo efeito.",
        "correta": false,
        "explicacao": "Anti-histamínicos orais têm absorção muito lenta e não tratam a hipotensão severa ou o broncoespasmo agudo da anafilaxia grave. Além disso, há risco de engasgo ao engolir com a garganta inchada."
      }
    ]
  },
  {
    "id": 9,
    "pergunta": "Você presencia um ciclista de alta velocidade colidir contra uma árvore, sendo arremessado sem capacete. Ele fica inconsciente por alguns minutos. Ao acordar, está extremamente confuso, agitado e subitamente começa a vomitar em jato. Ele continua deitado de costas. O que você deve fazer para protegê-lo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Segurar firmemente os ombros e a cabeça dele alinhados contra o chão, não permitindo nenhum movimento, mesmo enquanto ele vomita.",
        "correta": false,
        "explicacao": "Manter uma vítima que está vomitando deitada de barriga para cima invariavelmente resultará em aspiração de conteúdo gástrico para os pulmões, bloqueando a via aérea e causando asfixia."
      },
      {
        "id": "B",
        "texto": "Realizar o rolamento em bloco para lateralizar o paciente em monobloco, protegendo a coluna cervical e garantindo a drenagem do vômito.",
        "correta": true,
        "explicacao": "Segundo o PHTLS, em vítimas com suspeita de Trauma Cranioencefálico (TCE) e lesão medular, a proteção de via aérea tem prioridade estrutural. Girar o paciente em bloco protege a coluna e evita aspiração."
      },
      {
        "id": "C",
        "texto": "Levantá-lo rapidamente e sentá-lo encostado na árvore, inclinando a cabeça dele para frente para facilitar a saída do vômito e desobstruir a via.",
        "correta": false,
        "explicacao": "Movimentar verticalmente uma vítima com potencial lesão de coluna cervical de alta energia, sem imobilização profissional, pode transformar uma lesão óssea medular instável em paralisia permanente."
      },
      {
        "id": "D",
        "texto": "Abrir a boca da vítima à força e usar panos para absorver o vômito enquanto realiza a manobra de elevação do queixo (chin lift).",
        "correta": false,
        "explicacao": "A manobra de chin lift (extensão do pescoço) é contraindicada em vítimas de trauma devido ao risco para a coluna cervical. Além disso, limpar com pano sem lateralizar não resolve o risco de aspiração do líquido contínuo."
      }
    ]
  },
  {
    "id": 10,
    "pergunta": "Você retira uma criança de 5 anos do fundo de uma piscina. O local é seguro. Ela está flácida, não responde aos estímulos e não está respirando normalmente. O serviço de emergência já foi acionado e estão trazendo o DEA. Qual deve ser a sua abordagem inicial em relação à reanimação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pressionar vigorosamente o abdômen da criança na tentativa de expulsar toda a água engolida antes de começar a ventilar seus pulmões.",
        "correta": false,
        "explicacao": "A manobra de compressão abdominal (Heimlich) para tentar retirar água dos pulmões é contraindicada pela AHA, pois atrasa a RCP e frequentemente provoca vômito, agravando o risco de broncoaspiração."
      },
      {
        "id": "B",
        "texto": "Manter a criança deitada, cobri-la com uma manta térmica para tratar a hipotermia e aguardar a chegada do DEA antes de realizar compressões.",
        "correta": false,
        "explicacao": "O atraso no início da Reanimação Cardiopulmonar (RCP) em uma vítima de afogamento reduz drasticamente a chance de reversão, pois a causa base é a hipóxia severa do cérebro e coração."
      },
      {
        "id": "C",
        "texto": "Iniciar a RCP o mais rápido possível, preferencialmente começando por ventilações de resgate, pois a parada cardíaca no afogamento ocorre por asfixia (falta de oxigênio).",
        "correta": true,
        "explicacao": "Diferente da PCR súbita do adulto, a parada no afogamento (e pediátrica em geral) é predominantemente asfíxica. A AHA recomenda focar no fornecimento rápido de oxigênio e nas compressões (protocolo focado na correção da hipóxia)."
      },
      {
        "id": "D",
        "texto": "Erguer a criança pelos pés e bater em suas costas por cerca de dois minutos para garantir a drenagem postural total do sistema respiratório.",
        "correta": false,
        "explicacao": "A maior parte da água inalada é rapidamente absorvida ou está em pequena quantidade. Técnicas de drenagem postural desperdiçam tempo valioso em que o cérebro está morrendo sem oxigênio circulante."
      }
    ]
  },
  {
    "id": 11,
    "pergunta": "Após uma forte tempestade, um cabo de alta tensão rompe-se e cai sobre um carro com uma pessoa consciente no interior. Familiares desesperados tentam aproximar-se para retirar a vítima. Qual deve ser a sua intervenção prioritária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Utilizar um cabo de vassoura ou objeto de madeira seca para afastar o fio elétrico do veículo e, em seguida, retirar a vítima em segurança.",
        "correta": false,
        "explicacao": "A madeira pode conduzir eletricidade em cenários de alta tensão, especialmente se houver humidade. Tentar mover o cabo coloca o socorrista em risco letal imediato."
      },
      {
        "id": "B",
        "texto": "Instruir a vítima a abrir a porta e saltar do carro com os pés juntos, garantindo que não toca no metal e no chão em simultâneo.",
        "correta": false,
        "explicacao": "Embora o salto com os pés juntos evite a tensão de passo, a indicação prioritária (se não houver incêndio) é que a vítima permaneça no interior, que atua como uma gaiola de Faraday."
      },
      {
        "id": "C",
        "texto": "Impedir a aproximação de terceiros, instruir a vítima a permanecer no interior do veículo sem tocar nas partes metálicas e acionar o 193.",
        "correta": true,
        "explicacao": "A segurança da cena é absoluta. O interior do carro protege a vítima (efeito Faraday). O leigo deve isolar a área e aguardar a equipa especializada para cortar a energia."
      },
      {
        "id": "D",
        "texto": "Calçar luvas de borracha grossa (tipo limpeza) e calçado com sola de borracha para abrir a porta do carro e resgatar a vítima rapidamente.",
        "correta": false,
        "explicacao": "Equipamentos de Proteção Individual (EPI) domésticos não oferecem qualquer isolamento contra linhas de alta tensão. O socorrista seria eletrocutado de imediato."
      }
    ]
  },
  {
    "id": 12,
    "pergunta": "Uma mulher no terceiro trimestre de gravidez sofre um colapso súbito num centro comercial. Não reage e não apresenta respiração normal (apneia/gasping). Como deve adaptar as manobras de Suporte Básico de Vida (SBV)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar as compressões torácicas no centro do peito e solicitar a um ajudante que desloque manualmente o útero da vítima para o lado esquerdo.",
        "correta": true,
        "explicacao": "A Diretriz da AHA (2020) indica que o útero grávido comprime a veia cava inferior. O deslocamento uterino para a esquerda melhora o retorno venoso durante as compressões normais."
      },
      {
        "id": "B",
        "texto": "Evitar o uso do Desfibrilhador Automático Externo (DAE) até a chegada da equipa médica, pois o choque elétrico pode ser fatal para o feto.",
        "correta": false,
        "explicacao": "O DAE é perfeitamente seguro e está fortemente indicado na gravidez. A prioridade máxima para a sobrevivência do feto é a rápida reanimação e sobrevivência da mãe."
      },
      {
        "id": "C",
        "texto": "Posicionar as mãos para as compressões na metade inferior do abdómen para não causar trauma direto nas costelas ou no feto em desenvolvimento.",
        "correta": false,
        "explicacao": "As compressões devem ser feitas no mesmo local que num adulto normal (metade inferior do esterno). Compressões abdominais são ineficazes para a perfusão e lesam órgãos."
      },
      {
        "id": "D",
        "texto": "Realizar apenas ventilações de resgate, pois as compressões torácicas profundas causarão descolamento da placenta e hemorragia interna grave.",
        "correta": false,
        "explicacao": "A ausência de compressões torácicas numa vítima em paragem cardiorrespiratória (PCR) resulta em morte certa. O risco de lesões não justifica a não realização da manobra vital."
      }
    ]
  },
  {
    "id": 13,
    "pergunta": "Um operário de construção dispara acidentalmente uma pistola de pregos contra a própria coxa. Um prego espesso está profundamente cravado, com pouco sangramento visível. Ele está lúcido, mas quer arrancar o prego para ir ao hospital. O que deve fazer?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remover o prego num movimento rápido e retilíneo, aplicando imediatamente pressão direta forte e um torniquete acima do ferimento.",
        "correta": false,
        "explicacao": "Remover um objeto empalado no ambiente pré-hospitalar é contraindicado. O objeto pode estar a tamponar um grande vaso (ex: artéria femoral), e a sua remoção causará hemorragia exsanguinante."
      },
      {
        "id": "B",
        "texto": "Cortar a extremidade exposta do prego com um alicate para facilitar o transporte e colocar gelo sobre o local para reduzir a forte dor.",
        "correta": false,
        "explicacao": "Cortar o objeto transmite vibrações e calor diretamente para os tecidos internos e vasos sanguíneos, agravando drasticamente a lesão estrutural interna."
      },
      {
        "id": "C",
        "texto": "Convencer a vítima a não remover o objeto, estabilizá-lo manualmente ou com curativos volumosos ao seu redor e aguardar o socorro de emergência.",
        "correta": true,
        "explicacao": "De acordo com o PHTLS (10ª Edição), objetos encravados só devem ser removidos num bloco operatório. O papel do socorrista é imobilizar o objeto para evitar agravamento da lesão."
      },
      {
        "id": "D",
        "texto": "Aplicar um torniquete profilático apertado na raiz da coxa e, em seguida, puxar o prego cuidadosamente, lavando a ferida com soro fisiológico.",
        "correta": false,
        "explicacao": "O torniquete só deve ser aplicado se houver hemorragia exsanguinante ativa, e nunca como medida profilática para permitir a remoção de um objeto encravado na rua."
      }
    ]
  },
  {
    "id": 14,
    "pergunta": "Um familiar com diabetes tipo 1 começa a suar abundantemente, apresenta tremores, confusão mental severa e comportamento agressivo durante um passeio. Ele recusa-se a sentar. Qual é a conduta leiga mais adequada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Restringir fisicamente os seus movimentos para evitar quedas e administrar a sua caneta de insulina imediatamente para corrigir a glicose.",
        "correta": false,
        "explicacao": "Os sinais descritos (sudorese, tremor, agressividade) indicam uma crise de hipoglicemia. Administrar insulina agravará o quadro, podendo levar a coma profundo e morte."
      },
      {
        "id": "B",
        "texto": "Forçar a ingestão de um copo grande de sumo com muito açúcar, segurando a sua cabeça para trás, para garantir a absorção imediata.",
        "correta": false,
        "explicacao": "Nunca se deve forçar a ingestão de líquidos em vítimas confusas ou agitadas que resistem, devido ao risco iminente de broncoaspiração (líquido nos pulmões)."
      },
      {
        "id": "C",
        "texto": "Oferecer uma fonte de açúcar de absorção rápida (ex: pacotes de açúcar, sumo) apenas se ele conseguir engolir de forma autónoma e segura.",
        "correta": true,
        "explicacao": "O protocolo de primeiros socorros orienta a oferta de glicose oral apenas se a vítima tiver reflexo de deglutição intacto. Se perder a consciência, lateraliza-se e liga-se ao 192."
      },
      {
        "id": "D",
        "texto": "Posicioná-lo imediatamente na posição de recuperação, não oferecer alimentos e esperar que o fígado liberte reservas de glicogénio naturalmente.",
        "correta": false,
        "explicacao": "Atrasar o tratamento da hipoglicemia num doente que ainda consegue engolir pode resultar em danos cerebrais irreversíveis. A intervenção com açúcar oral é crítica nesta fase."
      }
    ]
  },
  {
    "id": 15,
    "pergunta": "Um funcionário da limpeza recebe respingos de lixívia concentrada (produto químico alcalino) diretamente no olho direito. Ele apresenta dor excruciante, o olho está fortemente fechado (blefaroespasmo) e lacrimeja muito. O que deve fazer imediatamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tapar ambos os olhos com compressas secas para evitar que os movimentos do olho bom façam o olho ferido mover-se e friccionar o químico.",
        "correta": false,
        "explicacao": "Tapar o olho sem remover o químico causará queimadura contínua da córnea. Substâncias alcalinas penetram rapidamente nos tecidos oculares e causam cegueira irreversível."
      },
      {
        "id": "B",
        "texto": "Aplicar algumas gotas de uma solução ácida suave, como vinagre diluído em água, para neutralizar a alcalinidade da lixívia rapidamente.",
        "correta": false,
        "explicacao": "Nunca se deve tentar neutralizar químicos no olho (ácido no alcalino ou vice-versa). A reação química resultante gera intenso calor térmico, cozendo a estrutura ocular."
      },
      {
        "id": "C",
        "texto": "Irrigar o olho afetado abundantemente com água corrente por pelo menos 15 a 20 minutos, inclinando a cabeça para não contaminar o olho são.",
        "correta": true,
        "explicacao": "A lavagem ocular contínua com água limpa (ou soro) é o único tratamento pré-hospitalar validado para remover fisicamente o químico, diluindo-o. A cabeça deve inclinar-se para o lado da lesão."
      },
      {
        "id": "D",
        "texto": "Friccionar suavemente as pálpebras com uma gaze humedecida para limpar o produto, e instilar um colírio anestésico para permitir a abertura do olho.",
        "correta": false,
        "explicacao": "Friccionar o olho pode empurrar o químico para zonas mais profundas e agravar as lesões mecânicas na córnea já fragilizada. Leigos não devem usar colírios prescritos."
      }
    ]
  },
  {
    "id": 16,
    "pergunta": "Um jovem adulto é encontrado inconsciente num WC público. Ao seu lado, há uma seringa vazia e indícios de uso de opióides. A cena é segura. Ao avaliá-lo, nota que ele não responde, tem os lábios azuis e respira apenas 2 vezes por minuto (bradipneia extrema). Qual a sequência correta de atuação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Acionar o socorro, colocar a vítima em posição lateral de segurança para prevenir aspiração de vómito e aguardar, pois ainda respira.",
        "correta": false,
        "explicacao": "Uma respiração de 2 incursões por minuto (gasping/bradipneia severa) não é eficaz e levará à paragem cardíaca iminente por hipóxia. A ação deve ser muito mais agressiva."
      },
      {
        "id": "B",
        "texto": "Acionar o serviço de emergência, administrar spray nasal de Naloxona (se disponível) e iniciar compressões torácicas como se fosse uma PCR.",
        "correta": true,
        "explicacao": "Segundo a AHA (2020), para suspeita de overdose de opióides com respiração anormal (ou ausente), o leigo deve iniciar manobras de RCP e administrar Naloxona (antídoto) o mais rápido possível."
      },
      {
        "id": "C",
        "texto": "Estimular o paciente com jatos de água fria no rosto e estalos no peito para reverter a depressão do sistema nervoso central induzida pela droga.",
        "correta": false,
        "explicacao": "A depressão respiratória por opióides não reverte com estímulos dolorosos ou térmicos. O tempo perdido nestas ações diminui drasticamente as hipóteses de sobrevivência do cérebro."
      },
      {
        "id": "D",
        "texto": "Focar exclusivamente na realização de respirações boca-a-boca contínuas durante 10 minutos antes de iniciar qualquer tipo de compressão torácica.",
        "correta": false,
        "explicacao": "A recomendação da AHA para leigos na ausência de respiração normal é focar imediatamente na RCP padrão (compressões torácicas), pois o estado evolui rapidamente para colapso cardiovascular."
      }
    ]
  },
  {
    "id": 17,
    "pergunta": "Durante uma discussão num bar, um homem sofre um ferimento profundo por arma branca (faca) no hemitórax direito. Ele tem muita dificuldade em respirar. Ouve-se um som de 'sucção' quando ele inspira e observa-se sangue a borbulhar pela ferida na expiração. O que prioriza no atendimento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Introduzir gaze hemostática profundamente na ferida torácica para travar o sangramento ativo do pulmão perfurado e da musculatura.",
        "correta": false,
        "explicacao": "O tamponamento interno (preenchimento da ferida) é estritamente proibido em cavidades torácicas e abdominais, pois o sangue acumula-se internamente e pode comprimir o coração e o pulmão."
      },
      {
        "id": "B",
        "texto": "Selar imediatamente a ferida com um penso oclusivo valvulado (ou curativo colado em 3 lados) para impedir a entrada de mais ar na cavidade pleural.",
        "correta": true,
        "explicacao": "Trata-se de um pneumotórax aberto ('ferida sugadora'). O PHTLS orienta a aplicação de um selo torácico valvulado para permitir a saída de ar sob pressão e impedir a sua entrada, prevenindo o pneumotórax hipertensivo."
      },
      {
        "id": "C",
        "texto": "Manter a vítima estritamente deitada de barriga para cima, com as pernas elevadas, e evitar qualquer tipo de curativo na região do peito.",
        "correta": false,
        "explicacao": "Deixar uma ferida torácica aberta permite a entrada massiva de ar na cavidade pleural, causando colapso total do pulmão. A vítima deve ser mantida, se possível, numa posição que lhe facilite a respiração."
      },
      {
        "id": "D",
        "texto": "Remover a arma branca caso ainda esteja presa no local, para permitir que o sangue e o ar aprisionados saiam com maior facilidade.",
        "correta": false,
        "explicacao": "A regra de ouro em trauma é nunca remover objetos empalados. A faca atua como um 'tampão' vascular; removê-la desencadeará hemorragia maciça ou colapso imediato."
      }
    ]
  },
  {
    "id": 18,
    "pergunta": "Um ciclista idoso cai com violência após um atropelamento leve. Ele queixa-se de dores excruciantes na zona da pélvis (bacia). Observa-se que a sua perna esquerda está visivelmente mais curta do que a direita e rodada para fora. O local já está seguro. O que não deve fazer?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar compressão firme para baixo e para os lados sobre os ossos da bacia para testar a instabilidade pélvica e confirmar a fratura.",
        "correta": true,
        "explicacao": "De acordo com o PHTLS, a compressão pélvica manual ('rocking') é proscrita, mesmo para profissionais, pois pode deslocar coágulos, agravar a fratura e causar hemorragia interna fulminante."
      },
      {
        "id": "B",
        "texto": "Aconselhar a vítima a permanecer absolutamente imóvel, evitando que dobre os joelhos ou tente alterar a sua posição no solo.",
        "correta": false,
        "explicacao": "Esta é a ação CORRETA. Em traumatismos pélvicos graves, a imobilidade absoluta minimiza a dor e o risco de lesão em vasos sanguíneos ilíacos, que podem sangrar litros de sangue internamente."
      },
      {
        "id": "C",
        "texto": "Cobrir o idoso com mantas térmicas ou casacos para evitar a perda de calor, previnindo a hipotermia e o agravamento do choque.",
        "correta": false,
        "explicacao": "Esta é uma ação CORRETA. A prevenção da hipotermia é o pilar do tratamento do doente em choque hemorrágico, sendo essencial cobrir as vítimas no chão frio."
      },
      {
        "id": "D",
        "texto": "Ligar imediatamente para o serviço de emergência médica relatando o mecanismo de alta energia e os sinais evidentes de lesão estrutural.",
        "correta": false,
        "explicacao": "Esta é uma ação CORRETA. O relato preciso dos indícios anatómicos e do mecanismo da lesão (cinemática) acelera o despacho de uma ambulância com suporte avançado de vida."
      }
    ]
  },
  {
    "id": 19,
    "pergunta": "Uma criança asmática de 8 anos está a sofrer uma crise aguda grave num parque infantil. Ela respira com grande esforço, apresenta sibilos audíveis (chiadeira) e os músculos do pescoço repuxam a cada inspiração. Ela não tem o seu inalador. Como deve agir o socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar um saco de papel fechado em redor do nariz e da boca da criança para que ela reinale o seu próprio dióxido de carbono e relaxe os brônquios.",
        "correta": false,
        "explicacao": "Esta técnica (usada para hiperventilação por ansiedade) é perigosa num caso de asma, pois a criança está a sofrer de broncoespasmo grave e necessita desesperadamente de oxigénio fresco, não de CO2."
      },
      {
        "id": "B",
        "texto": "Ajudar a criança a sentar-se na posição de tripé (inclinada para a frente), acalmá-la para reduzir o consumo de oxigénio e contactar o 192 imediatamente.",
        "correta": true,
        "explicacao": "A posição sentada e inclinada para a frente facilita a mecânica respiratória. Na ausência de medicação de resgate (salbutamol), a criança está em risco de paragem por hipóxia, sendo urgente o socorro especializado."
      },
      {
        "id": "C",
        "texto": "Deitar a criança de costas com as pernas elevadas, facilitando assim a subida do diafragma e a expulsão do ar aprisionado nos pulmões.",
        "correta": false,
        "explicacao": "Deitar uma vítima em dificuldade respiratória aguda agrava drasticamente o quadro, pois as vísceras abdominais comprimem o diafragma, aumentando o trabalho respiratório e o pânico."
      },
      {
        "id": "D",
        "texto": "Incentivá-la a beber água gelada rapidamente para provocar choque térmico na garganta e aliviar o inchaço dos brônquios.",
        "correta": false,
        "explicacao": "Ingerir líquidos, especialmente gelados, durante uma crise de dispneia grave aumenta enormemente o risco de engasgamento grave e asfixia imediata. Não tem efeito na dilatação dos brônquios."
      }
    ]
  },
  {
    "id": 20,
    "pergunta": "Durante um festival de música, uma estrutura metálica desaba sobre várias pessoas (Incidente com Múltiplas Vítimas - IMV). Você é a única pessoa com formação em primeiros socorros no local. Após garantir a segurança inicial e acionar o 192/193, qual é a sua próxima ação na triagem inicial?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Escolher a vítima com os ferimentos mais horríveis ou que grita mais alto, prestando-lhe assistência total até à chegada da primeira ambulância.",
        "correta": false,
        "explicacao": "Num cenário de catástrofe/IMV, fixar a atenção numa única vítima vai contra a doutrina de triagem, comprometendo a vida de várias outras vítimas com hemorragias tratáveis que permanecerão negligenciadas."
      },
      {
        "id": "B",
        "texto": "Gritar em voz alta: 'Quem conseguir andar, dirija-se para aquele local seguro', iniciando a distinção clínica das vítimas mais graves e menos graves.",
        "correta": true,
        "explicacao": "Segundo os protocolos de triagem (ex: método START), o primeiro passo é separar quem consegue caminhar ('Verdes' - menor risco de vida), o que limpa a área para identificar e socorrer rapidamente os casos mais críticos."
      },
      {
        "id": "C",
        "texto": "Iniciar a reanimação cardiopulmonar (RCP) ininterrupta na primeira vítima que encontrar sem pulso e sem respiração, cumprindo a diretriz universal de SBV.",
        "correta": false,
        "explicacao": "A RCP num incidente com múltiplas vítimas em que o número de vítimas excede os recursos consome demasiado tempo. Vítimas em PCR são habitualmente classificadas como 'Preto' (não resgatáveis) até haver recursos excedentes."
      },
      {
        "id": "D",
        "texto": "Procurar kits de primeiros socorros nas redondezas e aplicar talas de imobilização em todas as fraturas expostas para prevenir o risco de infeção hospitalar.",
        "correta": false,
        "explicacao": "A imobilização de fraturas consome tempo vital. O foco na triagem primária é apenas a correção imediata de risco iminente de morte (controlo de hemorragias exsanguinantes e desobstrução rápida de vias aéreas)."
      }
    ]
  },
  {
    "id": 21,
    "pergunta": "Você chega a uma construção e encontra um trabalhador caído e inconsciente segurando um cabo elétrico desencapado. Há poças d'água ao redor e outros trabalhadores gritando. Qual deve ser sua primeira e imediata ação tática?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Afastar o cabo das mãos da vítima utilizando um pedaço de madeira seco e iniciar as avaliações primárias.",
        "correta": false,
        "explicacao": "A água é excelente condutora de eletricidade e o risco de um arco elétrico ou condução até o socorrista é altíssimo, mesmo com objetos de madeira que podem estar úmidos."
      },
      {
        "id": "B",
        "texto": "Isolar a área imediatamente, solicitar o corte de energia na rede principal e acionar a equipe de resgate.",
        "correta": true,
        "explicacao": "A segurança da cena é o primeiro e mais inviolável passo da cadeia de sobrevivência (AHA). Em ambientes energizados, o socorrista leigo nunca deve se aproximar sem o corte confirmado da energia."
      },
      {
        "id": "C",
        "texto": "Verificar a responsividade da vítima tocando em seus ombros usando apenas uma das mãos isolada com luva.",
        "correta": false,
        "explicacao": "Tocar na vítima enquanto ela ainda está em contato com a fonte de energia transferirá a corrente elétrica para o socorrista, criando uma segunda vítima."
      },
      {
        "id": "D",
        "texto": "Iniciar as compressões torácicas imediatas caso a vítima não apresente expansão visível do seu tórax.",
        "correta": false,
        "explicacao": "Qualquer atendimento clínico à vítima só pode ser iniciado após a extração segura ou o corte total da energia na cena (segurança de cena em primeiro lugar)."
      }
    ]
  },
  {
    "id": 22,
    "pergunta": "Durante um acidente de trânsito severo, uma vítima apresenta amputação traumática do braço direito com jorro de sangue pulsátil. Ela também respira de forma ruidosa. Considerando o protocolo PHTLS (XABCDE), qual a intervenção primária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar a elevação do membro e aplicar curativo compressivo volumoso sobre o coto amputado rapidamente.",
        "correta": false,
        "explicacao": "Em casos de hemorragia exsanguinante (arterial/amputação), a elevação e a compressão direta geralmente são ineficazes e causam perda de tempo crítico."
      },
      {
        "id": "B",
        "texto": "Liberar as vias aéreas com a manobra de elevação do queixo, pois a respiração ruidosa indica obstrução.",
        "correta": false,
        "explicacao": "Segundo o PHTLS atualizado, o 'X' (Hemorragia Exsanguinante) precede o 'A' (Vias Aéreas). O paciente morrerá de choque hipovolêmico antes da hipóxia."
      },
      {
        "id": "C",
        "texto": "Aplicar um torniquete tático alto e apertado no membro afetado imediatamente para cessar a hemorragia.",
        "correta": true,
        "explicacao": "No XABCDE, a prioridade absoluta de vida ('X') em hemorragias de extremidades não compressíveis ou catastróficas é a aplicação precoce e efetiva do torniquete."
      },
      {
        "id": "D",
        "texto": "Imobilizar a coluna cervical da vítima manualmente para evitar qualquer agravo de uma lesão medular alta.",
        "correta": false,
        "explicacao": "A restrição de movimento da coluna (parte do 'A') é secundária ao controle de uma hemorragia externa maciça (o passo 'X')."
      }
    ]
  },
  {
    "id": 23,
    "pergunta": "Você está em um restaurante e um bebê de 8 meses engasga com um pedaço de alimento. Ele não tosse, não chora e começa a ficar com os lábios roxos. A mãe, em pânico, entrega a criança a você. Qual a conduta correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar a manobra de Heimlich com compressões abdominais logo abaixo do apêndice xifoide repetidas vezes.",
        "correta": false,
        "explicacao": "Compressões abdominais (Heimlich) são contraindicadas para lactentes (menores de 1 ano) devido ao alto risco de lesão em órgãos internos."
      },
      {
        "id": "B",
        "texto": "Introduzir o dedo em forma de gancho na boca do bebê para tentar retirar o corpo estranho visualizado.",
        "correta": false,
        "explicacao": "A varredura digital às cegas é estritamente proibida pelas diretrizes da AHA, pois frequentemente empurra o corpo estranho mais fundo na via aérea."
      },
      {
        "id": "C",
        "texto": "Aplicar cinco golpes nas costas seguidos de cinco compressões torácicas, apoiando o bebê em seu braço.",
        "correta": true,
        "explicacao": "O protocolo da AHA (2020) para desobstrução em lactentes conscientes consiste na alternância de 5 golpes interescapulares nas costas e 5 compressões no centro do tórax."
      },
      {
        "id": "D",
        "texto": "Iniciar imediatamente a reanimação com trinta compressões e duas ventilações, pois o bebê está cianótico.",
        "correta": false,
        "explicacao": "A RCP é iniciada apenas se o bebê se tornar irresponsivo (inconsciente). Enquanto estiver responsivo, mantém-se os golpes nas costas e compressões torácicas."
      }
    ]
  },
  {
    "id": 24,
    "pergunta": "Em um shopping, um homem adulto cai subitamente e inicia fortes abalos musculares generalizados (crise convulsiva), com salivação excessiva. Populares tentam abrir a boca dele com uma caneta. Como você deve intervir?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ajudar os populares a segurar os membros do homem firmemente para evitar fraturas ósseas secundárias.",
        "correta": false,
        "explicacao": "Conter os movimentos espasmódicos da vítima pode paradoxalmente causar luxações ou fraturas severas."
      },
      {
        "id": "B",
        "texto": "Afastar os curiosos, proteger a cabeça do homem com algo macio e não tentar colocar nada em sua boca.",
        "correta": true,
        "explicacao": "O manejo leigo foca em proteger contra traumas secundários e manter a via aérea livre sem inserir objetos na boca, aguardando o fim da crise para lateralizar a vítima."
      },
      {
        "id": "C",
        "texto": "Colocar um pano enrolado entre os dentes do paciente para impedir que ele acabe amputando a própria língua.",
        "correta": false,
        "explicacao": "Inserir objetos na boca durante a fase tônico-clônica pode quebrar dentes que podem ser aspirados e bloquear a via aérea gravemente."
      },
      {
        "id": "D",
        "texto": "Posicionar a vítima em decúbito lateral esquerdo imediatamente, mesmo durante a fase de abalos musculares.",
        "correta": false,
        "explicacao": "A rolagem lateral deve ser feita após o término das convulsões. Forçar a vítima de lado durante os abalos é perigoso e ineficaz."
      }
    ]
  },
  {
    "id": 25,
    "pergunta": "Após a explosão térmica em uma cozinha industrial, você encontra uma vítima consciente com queimaduras de segundo e terceiro graus. Roupas de tecido sintético derreteram e estão aderidas à pele do tórax. Qual a conduta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Puxar rapidamente os fragmentos de roupa aderida para evitar que o calor retido continue lesionando a pele.",
        "correta": false,
        "explicacao": "Puxar tecidos sintéticos aderidos causará avulsão (arrancamento) brutal de tecidos vivos, piorando o choque e agravando a infecção."
      },
      {
        "id": "B",
        "texto": "Aplicar pomada cicatrizante genérica na área afetada e cobrir o paciente com um plástico filme bem apertado.",
        "correta": false,
        "explicacao": "O uso de substâncias químicas, pomadas ou cremes por socorristas leigos é contraindicado, pois atrapalhará o desbridamento médico posterior."
      },
      {
        "id": "C",
        "texto": "Resfriar a lesão com água limpa em temperatura ambiente e manter a roupa grudada no local de origem intocada.",
        "correta": true,
        "explicacao": "A conduta padrão em APH e primeiros socorros é cessar o processo de queimadura resfriando a área afetada, preservando a integridade das partes aderidas para o hospital."
      },
      {
        "id": "D",
        "texto": "Cobrir as queimaduras com gelo moído envolto em toalha para causar analgesia e vasoconstrição periférica.",
        "correta": false,
        "explicacao": "O uso de gelo (temperaturas extremas) agrava a queimadura causando vasoconstrição severa e isquemia, aprofundando a morte tecidual local."
      }
    ]
  },
  {
    "id": 26,
    "pergunta": "Um colega de trabalho apresenta inchaço rápido no rosto, chiado no peito e manchas vermelhas após ingerir amendoim acidentalmente. Ele relata ser gravemente alérgico e possui uma caneta de epinefrina. O que você deve fazer?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Oferecer um copo de água com açúcar para estabilizar os níveis glicêmicos enquanto aguarda a ambulância.",
        "correta": false,
        "explicacao": "Fornecer líquidos via oral a um paciente que está perdendo a perviedade da via aérea por edema de glote gera um iminente risco de aspiração."
      },
      {
        "id": "B",
        "texto": "Auxiliar o colega na autoadministração da epinefrina na face lateral da coxa e ligar para a emergência.",
        "correta": true,
        "explicacao": "Segundo a AHA, socorristas leigos podem e devem auxiliar a vítima na utilização de sua própria caneta de adrenalina em casos claros de anafilaxia."
      },
      {
        "id": "C",
        "texto": "Deitar a vítima imediatamente e realizar compressões torácicas devido à falha iminente da função respiratória.",
        "correta": false,
        "explicacao": "O paciente ainda respira e está consciente. Compressões torácicas só devem ser iniciadas se ele perder a consciência e parar de respirar normalmente (PCR)."
      },
      {
        "id": "D",
        "texto": "Aguardar a chegada do resgate médico antes de permitir que ele faça uso de qualquer medicação injetável forte.",
        "correta": false,
        "explicacao": "O choque anafilático é fatal em poucos minutos. O atraso na administração da epinefrina agrava as chances de asfixia por edema de glote."
      }
    ]
  },
  {
    "id": 27,
    "pergunta": "Um idoso na rua apresenta subitamente paralisia de um lado do rosto, fala pastosa e fraqueza no braço direito, não conseguindo erguê-lo. Ele pede que você apenas o ajude a sentar e esperar passar. Qual a ação ideal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Acatar o pedido do idoso, colocá-lo sentado na sombra e reavaliar seus sinais vitais após uns quinze minutos.",
        "correta": false,
        "explicacao": "A janela terapêutica neurológica é curtíssima. Atrasar o atendimento médico destrói as chances de reversão das sequelas isquêmicas."
      },
      {
        "id": "B",
        "texto": "Identificar o quadro como um possível Acidente Vascular Cerebral e acionar a emergência médica de imediato.",
        "correta": true,
        "explicacao": "O reconhecimento da escala SAMU (Sorriso, Abraço, Mensagem, Urgência) ou FAST exige a ativação precoce do 192, sendo tempo estritamente igual a cérebro."
      },
      {
        "id": "C",
        "texto": "Fornecer meio comprimido de aspirina infantil mastigável, suspeitando tratar-se de infarto agudo do miocárdio.",
        "correta": false,
        "explicacao": "Administrar AAS sem saber se é um AVC isquêmico ou hemorrágico é extremamente perigoso, podendo agravar um sangramento intracraniano letal."
      },
      {
        "id": "D",
        "texto": "Realizar estímulos dolorosos intensos no braço paralisado para tentar reativar a circulação sanguínea no local.",
        "correta": false,
        "explicacao": "A paralisia é de origem neurológica central e não vascular periférica; estímulos dolorosos apenas causam sofrimento e atrasam o resgate."
      }
    ]
  },
  {
    "id": 28,
    "pergunta": "Você presencia o resgate de um banhista em PCR por afogamento. Ele é retirado da água inconsciente e não respira normalmente. A cena é considerada perfeitamente segura. Qual o passo de ressuscitação correto baseando-se no protocolo aplicável a afogados?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar manobras de compressão abdominal de Heimlich vigorosas para conseguir expulsar a água dos pulmões.",
        "correta": false,
        "explicacao": "Manobras para drenar líquido dos pulmões apenas causam vômito, aspiração gástrica secundária e atrasam o início fundamental da oxigenação cerebral."
      },
      {
        "id": "B",
        "texto": "Secar o tórax, iniciar ciclos de trinta compressões e duas ventilações de resgate, providenciando logo um DEA.",
        "correta": true,
        "explicacao": "Na PCR por hipóxia (afogamento), as ventilações de resgate são críticas, aliadas às compressões torácicas de alta qualidade, devendo-se utilizar o DEA precocemente."
      },
      {
        "id": "C",
        "texto": "Iniciar as compressões torácicas e manter as vias aéreas fechadas firmemente para evitar saída de fluidos gástricos.",
        "correta": false,
        "explicacao": "Manter as vias aéreas fechadas impede totalmente a expansão torácica e anula as trocas gasosas remanescentes ou posteriores."
      },
      {
        "id": "D",
        "texto": "Posicionar a vítima de bruços e pressionar a sua região lombar ritmicamente até a chegada do resgate médico local.",
        "correta": false,
        "explicacao": "Métodos antigos como 'Holger-Nielsen' foram descartados há décadas por completa ineficácia em gerar pressão de perfusão coronariana adequada."
      }
    ]
  },
  {
    "id": 29,
    "pergunta": "Durante uma discussão física em uma praça, um homem sofre um golpe de tesoura profunda no abdômen. A tesoura permanece alojada e fixada no local do ferimento. Ele está pálido, confuso e suando muito. Qual a intervenção mais segura?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remover a tesoura de forma rápida e aplicar um curativo compressivo hemostático direto sobre a ferida exposta.",
        "correta": false,
        "explicacao": "Remover um objeto empalado retira o possível 'tampão' vascular natural criado pela lâmina, desencadeando uma hemorragia interna severa imediata."
      },
      {
        "id": "B",
        "texto": "Deixar a tesoura no local exato, estabilizá-la com curativos volumosos ao redor e acionar o resgate logo a seguir.",
        "correta": true,
        "explicacao": "A conduta unânime em traumas por objetos encravados/empalados é a imobilização do objeto no próprio local, minimizando o sangramento até o centro cirúrgico."
      },
      {
        "id": "C",
        "texto": "Girar a lâmina cuidadosamente para tentar aliviar a dor do paciente e evitar a secção de órgãos internos vitais.",
        "correta": false,
        "explicacao": "Qualquer movimento ou manipulação da lâmina atua cirurgicamente rasgando mais tecidos e vasos ao longo de todo o trajeto da perfuração."
      },
      {
        "id": "D",
        "texto": "Elevar as pernas da vítima e puxar a tesoura parcialmente visando diminuir a intensa pressão intra-abdominal.",
        "correta": false,
        "explicacao": "Mobilizar o objeto causará trauma maciço secundário. A elevação de membros pode desestabilizar o objeto no interior da cavidade."
      }
    ]
  },
  {
    "id": 30,
    "pergunta": "Você é acionado por um passageiro em um voo longo que apresenta dor opressiva severa no peito, que irradia para a mandíbula, palidez e sudorese fria. Ele está plenamente consciente. O que deve ser feito primariamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Solicitar que o passageiro caminhe lentamente pelo corredor para melhorar o fluxo sanguíneo muscular e a oxigenação.",
        "correta": false,
        "explicacao": "Exercício aumenta a demanda de oxigênio pelo miocárdio infartado, piorando a isquemia cardíaca e acelerando a chance de fibrilação ventricular."
      },
      {
        "id": "B",
        "texto": "Acomodá-lo de forma muito confortável, evitar esforços, pedir o kit de emergência e avisar toda a tripulação.",
        "correta": true,
        "explicacao": "A suspeita de IAM exige repouso imediato para diminuir a carga sobre o coração, tranquilização do paciente e contato ágil com o suporte emergencial avançado."
      },
      {
        "id": "C",
        "texto": "Iniciar compressões torácicas profiláticas imediatamente, pois a parada cardíaca nesse caso é sempre iminente e severa.",
        "correta": false,
        "explicacao": "Não se aplica RCP em pacientes com pulso/conscientes. As compressões em peitos com batimento normal podem gerar arritmias letais (comotio cordis simulado)."
      },
      {
        "id": "D",
        "texto": "Deitar a vítima com as pernas elevadas a quarenta e cinco graus para facilitar o imediato retorno venoso ao coração.",
        "correta": false,
        "explicacao": "Elevar as pernas em caso de IAM aumenta o retorno venoso (pré-carga) subitamente em um coração já adoecido, agravando congestão pulmonar ou dispneia."
      }
    ]
  },
  {
    "id": 31,
    "pergunta": "Você presencia o capotamento de um ônibus com múltiplos passageiros feridos. Há pessoas gritando dentro e fora do veículo, além de vazamento de combustível. Como primeiro socorrista na cena, qual deve ser sua ação inicial prioritária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Entrar imediatamente no ônibus para iniciar a extricação das vítimas que estão inconscientes ou gravemente feridas.",
        "correta": false,
        "explicacao": "Entrar em um cenário de alto risco (veículo instável e vazamento de combustível) sem EPIs adequados transforma o socorrista em uma vítima em potencial."
      },
      {
        "id": "B",
        "texto": "Garantir a própria segurança, acionar o socorro informando múltiplas vítimas e instruir os que conseguem andar a se afastarem.",
        "correta": true,
        "explicacao": "Em incidentes com múltiplas vítimas (IMV), a segurança da cena e o dimensionamento para o acionamento do resgate precedem qualquer cuidado individual. Afastar as vítimas que andam facilita a triagem."
      },
      {
        "id": "C",
        "texto": "Iniciar a reanimação cardiopulmonar na primeira vítima inconsciente que encontrar ejetada para fora do ônibus.",
        "correta": false,
        "explicacao": "Em situações de múltiplas vítimas com recursos limitados, não se inicia RCP prolongada, pois isso consome o único socorrista e condena os demais à morte por falta de atendimento."
      },
      {
        "id": "D",
        "texto": "Procurar extintores de incêndio nos carros próximos para lavar a pista e eliminar todo o combustível derramado.",
        "correta": false,
        "explicacao": "Extintores automotivos não são eficazes para lavar grandes derramamentos, e o foco inicial deve ser isolar a área, acionar o socorro especializado e focar nas vítimas a uma distância segura."
      }
    ]
  },
  {
    "id": 32,
    "pergunta": "Durante um ataque violento em uma praça (já contido pela polícia), você encontra quatro vítimas de esfaqueamento. Você está sozinho e possui apenas ataduras elásticas e panos limpos. Qual vítima deve receber sua primeira intervenção física (o 'X' do protocolo XABCDE)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Um jovem que grita desesperadamente de dor segurando o abdômen com as vísceras parcialmente expostas.",
        "correta": false,
        "explicacao": "A evisceração é uma lesão grave e impactante, mas o paciente grita (via aérea e respiração presentes) e raramente morre de hemorragia externa fulminante nos primeiros minutos."
      },
      {
        "id": "B",
        "texto": "Uma senhora inconsciente que apresenta respiração ruidosa, sangramento discreto no rosto e extremidades frias.",
        "correta": false,
        "explicacao": "O comprometimento de vias aéreas ('A') é crítico, mas no protocolo PHTLS atual, o controle de hemorragias exsanguinantes ('X') precede o manejo da via aérea."
      },
      {
        "id": "C",
        "texto": "Um homem deitado em silêncio com um jato de sangue pulsátil e em grande volume jorrando de sua coxa direita.",
        "correta": true,
        "explicacao": "O sangramento arterial massivo em extremidades mata em pouquíssimos minutos. É a prioridade absoluta ('X') e exige compressão direta imediata ou torniquete."
      },
      {
        "id": "D",
        "texto": "Uma adolescente pálida, com uma faca encravada no ombro, que caminha de um lado para o outro pedindo ajuda.",
        "correta": false,
        "explicacao": "Se a vítima está caminhando e falando, ela possui perfusão cerebral, ventilação e vias aéreas patentes, sendo considerada de menor prioridade imediata para intervenção física urgente."
      }
    ]
  },
  {
    "id": 33,
    "pergunta": "Durante uma tempestade com raios em um campo aberto, um raio atinge o solo próximo a um grupo de pessoas. Você encontra duas vítimas no chão: a Vítima 1 está confusa, chorando e com queimaduras superficiais; a Vítima 2 está inconsciente e sem respiração (em PCR). O que dita a diretriz de ressuscitação (AHA) neste cenário?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Priorizar a Vítima 1, acalmá-la e cobrir suas queimaduras, pois a Vítima 2 já não apresenta sinais de vida e o tempo é curto.",
        "correta": false,
        "explicacao": "Esta é a regra de triagem tradicional para traumas convencionais, onde vítimas em PCR não recebem recursos iniciais se houver múltiplos feridos."
      },
      {
        "id": "B",
        "texto": "Aguardar pelo menos dez minutos antes de tocar em qualquer uma das vítimas para evitar receber uma descarga residual mortal.",
        "correta": false,
        "explicacao": "O corpo humano não armazena eletricidade após um choque por raio. É totalmente seguro tocar e atender as vítimas imediatamente."
      },
      {
        "id": "C",
        "texto": "Priorizar a Vítima 2, iniciando a reanimação cardiopulmonar e uso de DEA imediatamente, realizando a chamada 'triagem reversa'.",
        "correta": true,
        "explicacao": "Em incidentes com múltiplos feridos por raio, a AHA preconiza a 'triagem reversa'. As vítimas em parada respiratória/cardíaca têm prioridade máxima, pois as outras geralmente se recuperam espontaneamente."
      },
      {
        "id": "D",
        "texto": "Posicionar ambas as vítimas em decúbito lateral de segurança e focar exclusivamente em pedir socorro especializado pelo celular.",
        "correta": false,
        "explicacao": "Colocar uma vítima em PCR na posição de recuperação agrava a hipóxia e impede a realização da RCP necessária para salvar sua vida."
      }
    ]
  },
  {
    "id": 34,
    "pergunta": "Após o desabamento de uma arquibancada, você encontra uma vítima inconsciente, deitada de costas e que não parece respirar. Você está cercado de outras vítimas pedindo socorro. Como leigo, você realiza a inclinação da cabeça e elevação do queixo dela, e ela volta a respirar normalmente. Qual a sua próxima ação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar a vítima na posição de recuperação (decúbito lateral), manter a via aérea aberta e seguir para avaliar a próxima vítima.",
        "correta": true,
        "explicacao": "Em IMV, o socorrista não pode focar em um só paciente se não há PCR ativa. A posição de recuperação mantém a via aérea pérvia, permitindo que você ajude outros feridos."
      },
      {
        "id": "B",
        "texto": "Iniciar imediatamente a ventilação boca a boca ou com máscara de bolso, realizando uma insuflação a cada seis segundos.",
        "correta": false,
        "explicacao": "Se a vítima voltou a respirar normalmente após a desobstrução mecânica, a ventilação de resgate não é mais necessária e tomaria tempo essencial no contexto de múltiplas vítimas."
      },
      {
        "id": "C",
        "texto": "Manter-se de joelhos segurando firmemente a cabeça da vítima na posição exata para proteger a coluna cervical até a ambulância chegar.",
        "correta": false,
        "explicacao": "Fixar-se a uma única vítima para proteção cervical manual (que já estaria comprometida pela rolagem/extensão) impede a triagem e o salvamento das outras vítimas no cenário."
      },
      {
        "id": "D",
        "texto": "Realizar uma bandagem de compressão em torno da cabeça e do pescoço para garantir que a via aérea permaneça estável sem você.",
        "correta": false,
        "explicacao": "Bandagens não substituem o posicionamento corporal correto e tentar improvisar um colar cervical ou fixação constritiva no pescoço pode asfixiar a vítima gravemente."
      }
    ]
  },
  {
    "id": 35,
    "pergunta": "Durante um evento festivo em um clube fechado, inicia-se um incêndio de rápida propagação com muita fumaça escura. Várias pessoas conseguem sair, mas tossindo intensamente. Ao realizar uma triagem visual rápida entre os sobreviventes na calçada, qual sintoma indica o maior risco de morte iminente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Vítima com queimaduras de segundo grau nos dois antebraços, que está consciente, chorando e reclamando de dor intensa.",
        "correta": false,
        "explicacao": "Queimaduras periféricas, embora dolorosas e graves a médio prazo, não representam ameaça à vida nos primeiros minutos como o comprometimento respiratório."
      },
      {
        "id": "B",
        "texto": "Vítima que apresenta rouquidão severa, dificuldade evidente de puxar o ar, pelos do nariz chamuscados e fuligem na face.",
        "correta": true,
        "explicacao": "Esses são sinais clássicos de queimadura de vias aéreas por inalação de gases superaquecidos. O edema de glote é fatal em minutos e esta vítima é prioridade absoluta no pré-hospitalar."
      },
      {
        "id": "C",
        "texto": "Vítima que inalou bastante fumaça e está sentada no chão tossindo produtivamente, mas com um padrão de fala claro e contínuo.",
        "correta": false,
        "explicacao": "Se a vítima fala de forma clara e contínua, sua via aérea está patente no momento, tornando-a uma prioridade secundária em relação à vítima com rouquidão e estridor."
      },
      {
        "id": "D",
        "texto": "Vítima com suspeita de fratura fechada na tíbia por ter sido pisoteada, que não consegue caminhar até a zona de segurança.",
        "correta": false,
        "explicacao": "Fraturas fechadas sem hemorragia massiva não são ameaças imediatas à vida. Elas representam menor urgência no protocolo de triagem frente a um comprometimento de via aérea."
      }
    ]
  },
  {
    "id": 36,
    "pergunta": "Você é o primeiro a chegar a uma colisão envolvendo três veículos e seis vítimas. Ao ligar para o Serviço de Atendimento Móvel de Urgência (192), qual é a estrutura de informação mais crítica para acionar os recursos corretos em um cenário de múltiplas vítimas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fornecer os nomes de todas as vítimas, a gravidade detalhada das lesões de cada uma e sugerir as medicações que devem trazer.",
        "correta": false,
        "explicacao": "Perder tempo colhendo nomes ou diagnosticando lesões específicas atrasa o despacho. O despachador precisa de uma visão panorâmica e não médica para enviar os recursos adequados."
      },
      {
        "id": "B",
        "texto": "Informar a localização exata, a natureza do incidente (colisão de 3 carros), número aproximado de vítimas e riscos adicionais na cena.",
        "correta": true,
        "explicacao": "Essa é a base do relatório CHALET/METHANE adaptado. O foco é garantir que o centro de operações envie rapidamente a quantidade certa de ambulâncias e bombeiros antes da triagem detalhada."
      },
      {
        "id": "C",
        "texto": "Mencionar apenas que houve um acidente muito grave e desligar rapidamente para poder voltar ao cuidado e massagem nas vítimas.",
        "correta": false,
        "explicacao": "Informações incompletas (sem local exato ou número de vítimas) impossibilitam que o serviço de emergência localize a cena ou envie o número suficiente de unidades de suporte."
      },
      {
        "id": "D",
        "texto": "Descrever primeiramente as condições meteorológicas e o histórico de acidentes daquela estrada, aguardando que o atendente adivinhe o que ocorreu.",
        "correta": false,
        "explicacao": "Fornecer detalhes irrelevantes prejudica a comunicação assertiva e atrasa o socorro. A objetividade é um dos pilares no acionamento de emergências complexas."
      }
    ]
  },
  {
    "id": 37,
    "pergunta": "Em um cenário de Múltiplas Vítimas por explosão com estilhaços, seus recursos de primeiros socorros acabaram. Três vítimas têm hemorragia arterial severa em braços ou pernas. Dezenas de curiosos ilesos observam a cena. Como utilizar a 'Gestão de Recursos' do cenário como leigo capacitado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ignorar os curiosos, pois pessoas destreinadas apenas causam infecções e agravam o estado de choque se tocarem no sangue das vítimas.",
        "correta": false,
        "explicacao": "Em IMV com sangramento exsanguinante, o risco de morte por hipovolemia é imediato e suplanta largamente o risco de infecção secundária."
      },
      {
        "id": "B",
        "texto": "Exigir que todos os curiosos façam uma barreira humana de mãos dadas ao redor das vítimas para proteger contra a imprensa local.",
        "correta": false,
        "explicacao": "Embora a privacidade seja desejável, utilizar recursos humanos valiosos para fins secundários enquanto pessoas sangram até a morte é uma quebra brutal de prioridades vitais."
      },
      {
        "id": "C",
        "texto": "Recrutar os curiosos, dar instruções claras e breves e ordenar que apliquem forte pressão direta sobre as feridas que estão jorrando sangue.",
        "correta": true,
        "explicacao": "O conceito de 'First Care Provider' inclui liderar testemunhas. Qualquer pessoa orientada pode salvar uma vida aplicando pressão direta enquanto o socorrista principal gerencia a cena macro."
      },
      {
        "id": "D",
        "texto": "Pedir que os curiosos busquem os responsáveis pela explosão para entregá-los à justiça e garantir que a cena seja preservada intacta.",
        "correta": false,
        "explicacao": "Estimular comportamentos de perseguição transforma a área em um conflito civil e afasta completamente o foco do resgate e preservação das vidas em risco iminente."
      }
    ]
  },
  {
    "id": 38,
    "pergunta": "Você abre a porta de uma garagem mal ventilada e visualiza três pessoas caídas imóveis no chão. Um gerador de energia a gasolina está ligado e produzindo fumaça no interior do ambiente. Qual o primeiro passo técnico para um socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Correr rapidamente, prender a respiração, desligar o gerador e arrastar uma vítima de cada vez para o lado de fora em menos de dois minutos.",
        "correta": false,
        "explicacao": "A apneia voluntária não evita a absorção de gases tóxicos por via mucosa e uma respiração involuntária no ambiente causará o desmaio do socorrista (efeito cascata de vítimas)."
      },
      {
        "id": "B",
        "texto": "Manter-se fora do ambiente, deixar a porta amplamente aberta, evitar chamas ou faíscas e acionar o Corpo de Bombeiros (193) imediatamente.",
        "correta": true,
        "explicacao": "Intoxicação por Monóxido de Carbono (CO) exige intervenção de equipes HazMat (Materiais Perigosos). A regra de ouro é nunca entrar em espaços confinados não ventilados onde vítimas estão caídas."
      },
      {
        "id": "C",
        "texto": "Entrar engatinhando bem rente ao chão, pois gases venenosos provenientes de motores a combustão sempre sobem para o teto do local.",
        "correta": false,
        "explicacao": "Embora a fumaça visível suba, o Monóxido de Carbono tem densidade próxima à do ar e se mistura homogeneamente. Engatinhar não protege contra a intoxicação letal neste cenário."
      },
      {
        "id": "D",
        "texto": "Direcionar grandes jatos de água por debaixo da porta para resfriar as vítimas e apagar o motor do gerador de forma segura e rápida.",
        "correta": false,
        "explicacao": "Jogar água no maquinário não extingue a fumaça letal, pode causar choques elétricos, e retarda o acionamento essencial de uma força-tarefa de socorro estruturado."
      }
    ]
  },
  {
    "id": 39,
    "pergunta": "Em um cenário de Múltiplas Vítimas, você se depara com a necessidade de realizar estancamento de hemorragia severa, mas não possui nenhum torniquete comercial (tático). Ao improvisar um torniquete utilizando o material da cena, qual destas regras é inegociável?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Utilizar tiras extremamente finas (como fios de energia ou cadarços) para garantir que toda a força seja concentrada em uma área menor.",
        "correta": false,
        "explicacao": "Materiais estreitos geram força de cisalhamento em vez de compressão, agindo como garrotes ou 'fios de queijo' que fatiam os tecidos moles, músculos e nervos de forma irreparável."
      },
      {
        "id": "B",
        "texto": "Afrouxar gradativamente a estrutura do torniquete a cada quinze minutos para garantir que o membro afetado continue recebendo alguma oxigenação.",
        "correta": false,
        "explicacao": "A prática de afrouxar torniquetes causa choque secundário e microêmbolos. Uma vez aplicado e tendo cessado o sangramento venoso e arterial, o torniquete só pode ser removido no hospital."
      },
      {
        "id": "C",
        "texto": "Utilizar faixas ou panos largos, de preferência com mais de cinco centímetros, associados a uma barra de torção firme para aplicar compressão em 360 graus.",
        "correta": true,
        "explicacao": "A eficácia de um torniquete improvisado depende de uma banda suficientemente larga para ocluir os vasos sem dilacerar o tecido e uma alavanca (molinete) para atingir a pressão oclusiva arterial."
      },
      {
        "id": "D",
        "texto": "Aplicar o improviso exatamente sobre a articulação do cotovelo ou joelho, pois os ossos dessas áreas criam maior resistência mecânica contra o vaso rompido.",
        "correta": false,
        "explicacao": "É proibido aplicar torniquetes diretamente sobre articulações. Nelas, as artérias ficam abrigadas entre complexos ósseos, impedindo a compressão vascular efetiva contra um único osso subjacente."
      }
    ]
  },
  {
    "id": 40,
    "pergunta": "Você ouve disparos dentro de um shopping center e avista dezenas de pessoas correndo e vítimas caindo ao longe. O atirador ainda está se movendo no piso inferior, disparando indiscriminadamente. Baseando-se nas diretrizes de resposta a atirador ativo, qual a sua ação tática primária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Permanecer abaixado onde está e gritar para as vítimas que foram atingidas rastejarem em sua direção para iniciar os primeiros socorros.",
        "correta": false,
        "explicacao": "Gritar revela sua posição ao agressor e expõe você e as outras vítimas a novos disparos diretos e propositais. O ambiente tático ainda está na fase quente."
      },
      {
        "id": "B",
        "texto": "Avançar cuidadosamente pelos corredores visando identificar vítimas com hemorragias graves para aplicar curativos compressivos rápidos.",
        "correta": false,
        "explicacao": "A fase de 'Cuidado Sob Fogo' (Care Under Fire do TECC) estipula que a intervenção médica primária é se proteger e proteger a equipe; socorristas mortos ou alvejados não salvam feridos."
      },
      {
        "id": "C",
        "texto": "Atuar na estratégia 'Corra, Esconda-se, Lute', priorizando a evasão imediata do local de risco máximo antes de cogitar prestar atendimento a terceiros.",
        "correta": true,
        "explicacao": "Em cenários de atirador ativo ('Active Shooter'), protocolos internacionais e o TECC ditam que a segurança tática individual impera; apenas quando afastado da zona quente tenta-se o tratamento médico."
      },
      {
        "id": "D",
        "texto": "Remover sua própria camisa para usá-la como bandeira branca, sinalizando aos seguranças locais e ao atirador que você atua na área de saúde.",
        "correta": false,
        "explicacao": "Atiradores ativos não respeitam leis de neutralidade médica. Sinalizar-se como alvo destacado apenas aumenta exponencialmente suas chances de ser executado a sangue frio."
      }
    ]
  },
  {
    "id": 41,
    "pergunta": "Você é o primeiro a chegar em uma cena de descarrilamento de trem com dezenas de feridos. Seguindo o método de triagem simples (START) adaptado ao leigo, você grita: 'Todos que podem andar, venham até mim!'. Um grupo de 15 pessoas se aproxima. Qual a importância tática dessa ação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Garantir que essas pessoas recebam curativos imediatos, pois são as que têm maior chance de sobrevivência a longo prazo.",
        "correta": false,
        "explicacao": "Vítimas que andam são classificadas como 'verdes' (baixa prioridade). O foco inicial não é o tratamento delas, mas sim retirá-las para focar nos casos críticos."
      },
      {
        "id": "B",
        "texto": "Isolar essas pessoas em uma área segura (zona verde) para que não atrapalhem o acesso às vítimas graves e não se tornem novas vítimas.",
        "correta": true,
        "explicacao": "No IMV, separar os 'verdes' limpa o cenário, reduz o caos e permite que o socorrista identifique rapidamente quem realmente não consegue se mover e precisa de triagem urgente."
      },
      {
        "id": "C",
        "texto": "Pedir que essas pessoas voltem para dentro dos vagões para ajudar a carregar as vítimas que estão inconscientes ou presas nas ferragens.",
        "correta": false,
        "explicacao": "Vítimas 'verdes' podem estar em choque ou com lesões internas ocultas. Enviá-las de volta a um ambiente instável é um erro grave de segurança de cena."
      },
      {
        "id": "D",
        "texto": "Coletar o nome e contato de todos os que caminharam para preencher o relatório de ocorrência antes de verificar os outros feridos.",
        "correta": false,
        "explicacao": "A triagem de vida precede qualquer atividade burocrática ou administrativa. O tempo gasto com nomes pode custar a vida de uma vítima com hemorragia maciça."
      }
    ]
  },
  {
    "id": 42,
    "pergunta": "Em um cenário de múltiplas vítimas por explosão, você encontra uma criança de aproximadamente 6 anos que não está caminhando. Ela respira muito rápido (mais de 45 vezes por minuto). Seguindo a lógica do JumpSTART (triagem pediátrica), como você deve classificá-la?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Classificação Verde (Leve), pois a respiração rápida em crianças é comum devido ao susto e ao choro após o trauma.",
        "correta": false,
        "explicacao": "Uma frequência respiratória acima de 45 ou abaixo de 15 em crianças no trauma é um sinal de alerta grave, nunca devendo ser classificada como leve."
      },
      {
        "id": "B",
        "texto": "Classificação Amarela (Urgente), pois ela está estável o suficiente para aguardar que os adultos inconscientes sejam atendidos primeiro.",
        "correta": false,
        "explicacao": "A instabilidade respiratória severa em crianças exige intervenção imediata, não permitindo o retardo no atendimento para priorizar adultos."
      },
      {
        "id": "C",
        "texto": "Classificação Vermelha (Imediato), pois a frequência respiratória extrema indica insuficiência respiratória ou choque iminente.",
        "correta": true,
        "explicacao": "No JumpSTART, frequências respiratórias fora da faixa de 15 a 45 incursões por minuto em crianças indicam prioridade máxima (Vermelha) para tratamento e transporte."
      },
      {
        "id": "D",
        "texto": "Classificação Preta (Óbito), pois crianças com respiração tão acelerada raramente sobrevivem ao transporte prolongado.",
        "correta": false,
        "explicacao": "A cor preta é reservada apenas para quem não respira mesmo após manobras de abertura de via aérea e (em crianças) pulsos ausentes."
      }
    ]
  },
  {
    "id": 43,
    "pergunta": "Durante um incêndio em um edifício comercial, várias pessoas saem com queimaduras e tosse. Uma das vítimas, embora consciente, apresenta estridor (um ruído agudo ao puxar o ar) e queimaduras de pelos nasais. Qual a sua prioridade na triagem?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Classificar como Vermelha (Imediato), devido ao risco altíssimo de obstrução total das vias aéreas por edema decorrente da inalação de calor.",
        "correta": true,
        "explicacao": "Queimadura de vias aéreas superiores é uma emergência crítica. O estridor indica que a passagem de ar já está estreitada e pode fechar totalmente a qualquer momento."
      },
      {
        "id": "B",
        "texto": "Classificar como Amarela (Urgente), pois a vítima ainda consegue falar e caminhar, indicando que o pulmão ainda não foi afetado.",
        "correta": false,
        "explicacao": "Vítimas com sinais de inalação de calor são 'bombas-relógio'. A estabilidade aparente é enganosa e a obstrução ocorre de forma súbita e letal."
      },
      {
        "id": "C",
        "texto": "Classificar como Verde (Leve), focando primeiro em quem tem queimaduras externas visíveis em grandes áreas do corpo.",
        "correta": false,
        "explicacao": "Lesões internas (vias aéreas) matam muito mais rápido do que queimaduras de pele, mesmo que estas últimas pareçam mais impressionantes visualmente."
      },
      {
        "id": "D",
        "texto": "Classificar como Azul (Conforto), orientando a vítima a beber água gelada para resfriar a garganta enquanto aguarda os bombeiros.",
        "correta": false,
        "explicacao": "Água gelada não reverte o edema inflamatório de vias aéreas e pode induzir o vômito, agravando a situação de um paciente com respiração já comprometida."
      }
    ]
  },
  {
    "id": 44,
    "pergunta": "Você atende um engavetamento na rodovia com vazamento de um líquido químico desconhecido de um caminhão. Há vítimas presas nos carros próximas ao vazamento. Qual a primeira regra de segurança em IMV envolvendo produtos perigosos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aproximar-se rapidamente com um pano úmido no rosto para retirar as vítimas antes que o produto cause queimaduras químicas.",
        "correta": false,
        "explicacao": "Um pano úmido não protege contra vapores tóxicos. O socorrista se tornaria mais uma vítima, impedindo o socorro de chegar a outros."
      },
      {
        "id": "B",
        "texto": "Posicionar-se a favor do vento (costas para o vento) e em um nível mais alto que o vazamento, isolando a área imediatamente e acionando 192/193.",
        "correta": true,
        "explicacao": "Gases e líquidos perigosos tendem a seguir o vento e a gravidade. Manter-se 'upwind' (contra o vento) e 'uphill' (em terreno alto) é a regra básica de sobrevivência enquanto acionam-se os caneis de emergência."
      },
      {
        "id": "C",
        "texto": "Jogar terra sobre o líquido para tentar neutralizá-lo antes de iniciar a triagem das vítimas próximas ao caminhão.",
        "correta": false,
        "explicacao": "Reações químicas imprevisíveis podem ocorrer ao misturar substâncias desconhecidas com terra ou água, podendo gerar nuvens tóxicas ou explosões."
      },
      {
        "id": "D",
        "texto": "Pedir que as vítimas tentem lavar o próprio corpo com o combustível dos carros próximos para remover o produto químico.",
        "correta": false,
        "explicacao": "Combustíveis são solventes que facilitam a absorção de toxinas pela pele e aumentam drasticamente o risco de incêndio no local."
      }
    ]
  },
  {
    "id": 45,
    "pergunta": "Em um ataque com múltiplas vítimas em uma escola, você encontra um adolescente com uma hemorragia severa na perna e outro com um ferimento no peito que produz bolhas de sangue e som de 'assobio' ao respirar. Seguindo o PHTLS, quem você atende primeiro?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O ferimento no peito (pneumotórax aberto), pois a respiração ('B') é mais importante que o sangramento de extremidade.",
        "correta": false,
        "explicacao": "No XABCDE, o 'X' (Hemorragia Exsanguinante) vem antes do 'B' (Respiração). A morte por choque hipovolêmico é mais rápida que a por falência respiratória traumática."
      },
      {
        "id": "B",
        "texto": "A hemorragia severa na perna ('X'), aplicando um torniquete ou pressão direta imediata antes de tratar o ferimento no peito.",
        "correta": true,
        "explicacao": "Sangramentos massivos externos são a causa número 1 de morte evitável no trauma. O controle do 'X' deve ser a primeira intervenção física do socorrista."
      },
      {
        "id": "C",
        "texto": "Ambos simultaneamente, usando uma mão para tapar o ferimento do peito e a outra para apertar a perna da outra vítima.",
        "correta": false,
        "explicacao": "Intervenções parciais em duas vítimas ao mesmo tempo resultam em tratamento ineficaz para ambas. Deve-se controlar totalmente uma ameaça antes de passar à próxima."
      },
      {
        "id": "D",
        "texto": "O ferimento no peito, pois as bolhas indicam que a vítima está perdendo oxigênio para o ambiente externo.",
        "correta": false,
        "explicacao": "Embora grave, o ferimento aspirante de tórax é tratado no passo 'B'. A perda de volume sanguíneo total ('X') é uma prioridade superior de vida."
      }
    ]
  },
  {
    "id": 46,
    "pergunta": "Você está triando vítimas de uma explosão. Uma vítima está consciente, mas não consegue sentir ou mover as pernas. Ela não apresenta sangramentos ativos e sua respiração está normal. Qual a cor da etiqueta de triagem?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Vermelha (Imediato), porque lesões na medula espinhal exigem cirurgia neurológica imediata para evitar paralisia permanente.",
        "correta": false,
        "explicacao": "Embora grave, a lesão medular sem comprometimento de via aérea ou choque circulatório não é prioridade 'imediata' em relação a quem está morrendo por asfixia ou sangramento."
      },
      {
        "id": "B",
        "texto": "Amarela (Urgente), pois ela possui estabilidade hemodinâmica e respiratória no momento, mas tem uma lesão séria que requer transporte hospitalar.",
        "correta": true,
        "explicacao": "Vítimas estáveis com lesões severas (como fraturas ou déficits neurológicos) que não podem caminhar são classificadas como amarelas: precisam de cuidado, mas podem aguardar os 'vermelhos'."
      },
      {
        "id": "C",
        "texto": "Verde (Leve), já que ela está calma, conversando e não apresenta risco de morte nos próximos minutos ou horas.",
        "correta": false,
        "explicacao": "Vítimas que não conseguem caminhar por lesão física nunca são classificadas como verdes. O critério 'andar' é o primeiro filtro da triagem START."
      },
      {
        "id": "D",
        "texto": "Preta (Óbito), pois a perda de sensibilidade nas pernas em cenas de explosão indica que a lesão é irreversível e o socorro seria inútil.",
        "correta": false,
        "explicacao": "A classificação preta é para mortos ou feridos com lesões incompatíveis com a vida. Paraplegia não é uma sentença de morte e a vítima tem alto prognóstico de sobrevivência."
      }
    ]
  },
  {
    "id": 47,
    "pergunta": "Durante a gestão de um IMV, um grupo de familiares das vítimas começa a cercar você, gritando e exigindo que você atenda primeiro os parentes deles. Como o socorrista deve agir para manter o controle da cena?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Parar a triagem e explicar detalhadamente para cada familiar o protocolo START para que eles entendam a ciência por trás das suas decisões.",
        "correta": false,
        "explicacao": "Discussões prolongadas consomem tempo vital de salvamento. Em emergências, a comunicação deve ser diretiva e não explicativa acadêmica."
      },
      {
        "id": "B",
        "texto": "Ceder à pressão e atender quem os familiares indicarem como mais urgente para evitar agressões físicas contra você.",
        "correta": false,
        "explicacao": "Alterar a triagem por pressão externa causa a morte de vítimas silenciosas (inconscientes) que são tecnicamente mais graves do que as indicadas por parentes."
      },
      {
        "id": "C",
        "texto": "Atribuir tarefas simples a esses familiares (como segurar lanternas ou panos) para mantê-los ocupados e longe do foco direto da triagem crítica.",
        "correta": true,
        "explicacao": "O manejo de curiosos e familiares em IMV envolve 'dar uma função'. Isso reduz o sentimento de impotência, diminui a ansiedade e retira a pressão sobre o socorrista."
      },
      {
        "id": "D",
        "texto": "Gritar mais alto que eles e ameaçar abandonar a cena caso eles não se afastem imediatamente para uma distância de 50 metros.",
        "correta": false,
        "explicacao": "Posturas agressivas escalam a violência na cena e podem resultar em um motim, tornando o ambiente inseguro para o socorrista e para as vítimas."
      }
    ]
  },
  {
    "id": 48,
    "pergunta": "Ao final da triagem de um acidente com 10 vítimas, o primeiro veículo oficial de resgate chega. Qual deve ser o conteúdo do seu 'Passagem de Caso' para o chefe da equipe de socorro?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Um relato detalhado da história de vida de cada vítima que você conseguiu conversar durante a triagem.",
        "correta": false,
        "explicacao": "Informações biográficas são irrelevantes no momento agudo. O foco deve ser puramente clínico e logístico para agilizar o transporte."
      },
      {
        "id": "B",
        "texto": "Apenas entregar as etiquetas e afastar-se da cena para não atrapalhar o trabalho dos profissionais que chegaram.",
        "correta": false,
        "explicacao": "O socorrista que iniciou a cena possui informações valiosas sobre a evolução das vítimas. Abandonar a cena sem um 'briefing' prejudica a continuidade do cuidado."
      },
      {
        "id": "C",
        "texto": "Informar o número total de vítimas, quantas foram classificadas em cada cor (Vermelha, Amarela, Verde e Preta) e onde os casos mais críticos estão localizados.",
        "correta": true,
        "explicacao": "Um relatório SBAR (Situação, Antecedentes, Avaliação, Recomendação) simplificado permite que a equipe oficial priorize seus recursos imediatamente onde eles são mais necessários."
      },
      {
        "id": "D",
        "texto": "Pedir que eles assumam a triagem do zero, pois o trabalho de um leigo não tem validade técnica para o serviço de saúde oficial.",
        "correta": false,
        "explicacao": "Refazer todo o trabalho atrasa o transporte. Profissionais de saúde utilizam a triagem inicial do socorrista como base para a sua própria avaliação secundária."
      }
    ]
  },
  {
    "id": 49,
    "pergunta": "Os ______ são sensações que a vítima experimenta e é capaz de descrever (ex: dor). Já os ______ são detalhes que você poderá descobrir fazendo o uso dos sentidos, como visão, tato e audição, durante a avaliação da vítima.",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sentimentos e Sintomas",
        "correta": false,
        "explicacao": "Sentimentos referem-se a estados emocionais, não sendo a terminologia técnica padrão no Atendimento Pré-Hospitalar (APH) para descrever achados clínicos."
      },
      {
        "id": "B",
        "texto": "Sinais e Saúde",
        "correta": false,
        "explicacao": "Sinais são achados objetivos, porém 'saúde' é um estado geral e não um termo utilizado para descrever a queixa subjetiva do paciente."
      },
      {
        "id": "C",
        "texto": "Sinais e Sintomas",
        "correta": false,
        "explicacao": "A ordem está invertida. Sinais são achados objetivos (vistos/sentidos pelo socorrista) e sintomas são subjetivos (relatados pela vítima)."
      },
      {
        "id": "D",
        "texto": "Sintomas e Sinais",
        "correta": true,
        "explicacao": "Correto. Segundo o PHTLS (10ª edição), na anamnese (SAMPLE), 'Sintomas' são relatados pela vítima (subjetivos, como dor), e 'Sinais' são verificáveis pelo socorrista (objetivos, como palidez ou deformidade)."
      }
    ]
  },
  {
    "id": 50,
    "pergunta": "No Atendimento Pré-Hospitalar, quais são os achados que indicam uma respiração adequada em uma vítima?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O socorrista não escuta o ar sair pela boca e pelo nariz do paciente.",
        "correta": false,
        "explicacao": "A ausência de som e fluxo de ar é indicativo de apneia ou obstrução severa de vias aéreas, necessitando de intervenção imediata (AHA 2020)."
      },
      {
        "id": "B",
        "texto": "O socorrista pode sentir e ouvir o ar saindo pela boca e pelo nariz do paciente de forma harmônica.",
        "correta": true,
        "explicacao": "Correto. Uma respiração adequada é caracterizada por expansão torácica bilateral simétrica, frequência normal e fluxo de ar perceptível, sem esforço ou ruídos adventícios (PHTLS 10ª edição)."
      },
      {
        "id": "C",
        "texto": "O peito e o abdômen se elevam e abaixam unilateralmente conforme a vítima inspira ou expira o ar.",
        "correta": false,
        "explicacao": "A elevação unilateral do tórax indica trauma torácico grave (como pneumotórax ou hemitórax), não sendo um sinal de respiração adequada."
      },
      {
        "id": "D",
        "texto": "O socorrista percebe a ausência dos movimentos respiratórios.",
        "correta": false,
        "explicacao": "A ausência de movimentos respiratórios indica parada respiratória ou parada cardiorrespiratória (PCR), exigindo ventilação de resgate ou RCP imediata (AHA 2020)."
      }
    ]
  },
  {
    "id": 51,
    "pergunta": "Qual das seguintes alternativas NÃO corresponde a uma característica ou situação associada a uma fratura óssea (aberta ou fechada)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pode existir perfuração ou não dos tecidos.",
        "correta": false,
        "explicacao": "Isto descreve a diferença entre fraturas fechadas (sem rompimento da pele) e fraturas abertas ou expostas (com rompimento da pele), o que é correto para fraturas."
      },
      {
        "id": "B",
        "texto": "Escoriação e avulsão.",
        "correta": true,
        "explicacao": "Correto (é a exceção). Escoriações e avulsões são lesões de tecidos moles (pele e tecido subcutâneo), não sendo classificações de fraturas ósseas, segundo o manejo de traumas (PHTLS 10ª ed)."
      },
      {
        "id": "C",
        "texto": "Deformidade no membro lesionado.",
        "correta": false,
        "explicacao": "A deformidade é um dos principais sinais clínicos indicativos de uma fratura ou luxação subjacente."
      },
      {
        "id": "D",
        "texto": "Dor, edema e impotência funcional.",
        "correta": false,
        "explicacao": "Estes são os sinais cardinais clássicos de uma fratura. O paciente apresenta dor local, inchaço (edema) e incapacidade de usar o membro (impotência funcional)."
      }
    ]
  },
  {
    "id": 52,
    "pergunta": "Após constatar a parada cardiopulmonar (PCR), acionar o serviço de emergência e posicionar a vítima adequadamente em uma superfície rígida, qual o próximo procedimento a ser feito em termos de posicionamento para iniciar a RCP?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aguardar a chegada do Desfibrilador Externo Automático (DEA) sem tocar na vítima.",
        "correta": false,
        "explicacao": "Atrasar as compressões reduz drasticamente as chances de sobrevida. O socorrista deve iniciar a RCP imediatamente após constatar a PCR e acionar ajuda (Diretrizes AHA 2020)."
      },
      {
        "id": "B",
        "texto": "Posicionar-se atrás da cabeça da vítima para realizar compressões.",
        "correta": false,
        "explicacao": "Esta posição é utilizada apenas para ventilação com bolsa-válvula-máscara (BVM). As compressões torácicas não são eficazes a partir da cabeceira."
      },
      {
        "id": "C",
        "texto": "Posicionar-se ao lado da vítima (lateral ao ombro).",
        "correta": true,
        "explicacao": "Correto. As diretrizes da AHA (2020) instruem que o socorrista deve ajoelhar-se ao lado do tórax da vítima para aplicar as compressões torácicas com a mecânica corporal adequada."
      },
      {
        "id": "D",
        "texto": "Elevar os membros inferiores da vítima para melhorar o retorno venoso.",
        "correta": false,
        "explicacao": "A elevação de membros inferiores (posição de choque) não é o tratamento para PCR. O foco imediato são as compressões torácicas de alta qualidade (AHA 2020)."
      }
    ]
  },
  {
    "id": 53,
    "pergunta": "Na avaliação primária do trauma (XABCDE), os procedimentos são ordenados para identificar riscos iminentes à vida. Qual das alternativas abaixo apresenta um procedimento INCORRETO nesta etapa?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Acionar, se necessário, um serviço de emergência.",
        "correta": false,
        "explicacao": "Acionar o serviço médico de emergência (SME) precocemente faz parte da base do atendimento e é um passo fundamental na cadeia de sobrevivência."
      },
      {
        "id": "B",
        "texto": "Deixar as vias aéreas impermeáveis e deixar a coluna cervical como encontrar.",
        "correta": true,
        "explicacao": "Correto (é o procedimento errado). Vias aéreas devem estar 'permeáveis' (abertas e limpas), não impermeáveis. Além disso, a coluna cervical deve ser estabilizada/restrita manualmente (etapa A do PHTLS 10ª ed), não simplesmente ignorada."
      },
      {
        "id": "C",
        "texto": "Formar a impressão geral do paciente.",
        "correta": false,
        "explicacao": "A impressão geral rápida (identificar sangramentos massivos, estado de consciência e aparência do paciente) é a etapa inicial ('X' ou 'A') essencial da avaliação do trauma."
      },
      {
        "id": "D",
        "texto": "Avaliar o nível de consciência do paciente.",
        "correta": false,
        "explicacao": "Avaliar a responsividade (método AVDI) é um passo mandatório logo na abordagem inicial para guiar os próximos passos do socorro."
      }
    ]
  },
  {
    "id": 54,
    "pergunta": "A ________ é o desalinhamento das extremidades ósseas fazendo com que as superfícies articulares percam o contato entre si. Já o(a) ________ é caracterizado pela distensão brusca de uma articulação, além de seu grau normal de amplitude.",
    "alternativas": [
      {
        "id": "A",
        "texto": "Entorse e Fratura",
        "correta": false,
        "explicacao": "Fratura é a quebra do osso. Entorse é a lesão ligamentar. A definição de perda de contato articular é luxação."
      },
      {
        "id": "B",
        "texto": "Fratura e Luxação",
        "correta": false,
        "explicacao": "A ordem não atende as descrições. Fratura envolve a quebra da continuidade óssea, não apenas distensão de articulação."
      },
      {
        "id": "C",
        "texto": "Luxação e Entorse",
        "correta": true,
        "explicacao": "Correto. Luxação é a perda de contato entre as superfícies articulares. Entorse é a lesão dos ligamentos por um movimento além da amplitude normal da articulação, sem deslocamento ósseo permanente (PHTLS 10ª ed)."
      },
      {
        "id": "D",
        "texto": "Entorse e Luxação",
        "correta": false,
        "explicacao": "Os conceitos estão invertidos. Entorse não causa perda de contato permanente das superfícies articulares, quem faz isso é a luxação."
      }
    ]
  },
  {
    "id": 55,
    "pergunta": "Ao deparar-se com uma situação de Obstrução de Vias Aéreas por Corpo Estranho (OVACE) grave em bebês (lactentes) conscientes, qual é o procedimento correto?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Usar uma pinça para retirar o corpo estranho da garganta da criança independentemente de visualizá-lo.",
        "correta": false,
        "explicacao": "Nunca se deve realizar a varredura digital às cegas ou inserir instrumentos sem visualização direta, pois isso pode empurrar o objeto ainda mais fundo, piorando a obstrução (AHA 2020)."
      },
      {
        "id": "B",
        "texto": "Posicionar-se atrás da criança e realizar a Manobra de Heimlich com os braços abraçando-a na altura do peito.",
        "correta": false,
        "explicacao": "A Manobra de Heimlich (compressões abdominais) não é recomendada para bebês (menores de 1 ano) devido ao alto risco de lesão em órgãos internos severos, como o fígado."
      },
      {
        "id": "C",
        "texto": "Pedir que a criança olhe para cima e eleve os braços até que o desconforto passe.",
        "correta": false,
        "explicacao": "Elevar os braços é um mito sem eficácia fisiológica para desobstrução de vias aéreas, além de atrasar a conduta de salvamento adequada."
      },
      {
        "id": "D",
        "texto": "Virar o bebê de barriga para baixo apoiado no antebraço, com a cabeça mais baixa, e aplicar 5 golpes nas costas, seguidos de 5 compressões torácicas.",
        "correta": true,
        "explicacao": "Correto. O protocolo da AHA (2020) para lactentes engasgados conscientes consiste em ciclos de 5 golpes interescapulares (tapotagem) seguidos de 5 compressões torácicas, alternando até a desobstrução ou perda de consciência."
      }
    ]
  },
  {
    "id": 56,
    "pergunta": "Qual alternativa demonstra a sequência convencional mais adequada de tratamento para controlar uma hemorragia externa severa nos membros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Elevação do ponto de sangramento, compressão sobre os pontos arteriais, compressão direta sobre o ferimento.",
        "correta": false,
        "explicacao": "As evidências atuais descartaram o uso de elevação do membro ou compressão em pontos de pressão à distância por ineficácia. A compressão deve ser diretamente no ferimento."
      },
      {
        "id": "B",
        "texto": "Compressão direta sobre o ferimento, curativo compressivo e torniquete.",
        "correta": true,
        "explicacao": "Correto. O padrão ouro (PHTLS 10ª edição) é iniciar com compressão direta firme. Caso não seja suficiente ou a hemorragia seja massiva/exsanguinante em extremidades, o uso precoce do torniquete comercial é a intervenção de escolha."
      },
      {
        "id": "C",
        "texto": "Curativo compressivo, torniquete e depois compressão direta sobre o ferimento.",
        "correta": false,
        "explicacao": "A ordem está invertida. A compressão manual direta é a primeira e mais rápida medida, procedida de outras técnicas se a hemorragia não for controlada."
      },
      {
        "id": "D",
        "texto": "Aplicação de gelo, seguida de compressão sobre os pontos arteriais.",
        "correta": false,
        "explicacao": "Gelo não estanca hemorragias externas massivas, e a compressão indireta de pontos arteriais não é mais recomendada pelas diretrizes internacionais de trauma."
      }
    ]
  },
  {
    "id": 57,
    "pergunta": "Sobre as compressões torácicas no procedimento de RCP em crianças e lactentes, qual é a conduta correta quanto à profundidade e técnica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Para crianças usar 2 mãos a 5 cm de profundidade; para lactentes, usar a palma de uma mão.",
        "correta": false,
        "explicacao": "A palma da mão inteira é inadequada e muito grande para o tórax de um lactente (menor de 1 ano). Para lactentes devem ser usados 2 dedos ou 2 polegares."
      },
      {
        "id": "B",
        "texto": "Crianças: cerca de 5 cm com 1 ou 2 mãos. Lactentes: cerca de 4 cm (1/3 do diâmetro) com 2 dedos no centro do tórax.",
        "correta": true,
        "explicacao": "Correto. Segundo a AHA (2020), deprime-se o tórax de crianças em cerca de 5 cm (utilizando a região hipotenar de 1 ou 2 mãos) e de lactentes em cerca de 4 cm (usando 2 dedos isolados ou os 2 polegares com mãos circundando o tórax)."
      },
      {
        "id": "C",
        "texto": "Para lactentes é recomendado utilizar 3 dedos no centro do tórax, logo abaixo da linha mamilar.",
        "correta": false,
        "explicacao": "O uso de 3 dedos não é a técnica padrão. O recomendado pela AHA são 2 dedos (em socorrista único) ou técnica dos 2 polegares (quando há 2 socorristas)."
      },
      {
        "id": "D",
        "texto": "A profundidade para todas as faixas etárias pediátricas deve ser de apenas 2 a 3 cm para evitar fraturas.",
        "correta": false,
        "explicacao": "A profundidade de 2 a 3 cm é insuficiente para gerar débito cardíaco. Devem ser alcançados ao menos 1/3 do diâmetro ântero-posterior do tórax (4 cm em lactentes, 5 cm em crianças)."
      }
    ]
  },
  {
    "id": 58,
    "pergunta": "Do nascimento até a fase adulta, o Suporte Básico de Vida (BLS) da AHA possui delimitações de idade específicas para adaptar as manobras. Para o Atendimento Pré-hospitalar, quais as faixas etárias corretas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lactente até 2 anos, Criança de 2 anos até 12 anos e Adulto a partir de 12 anos.",
        "correta": false,
        "explicacao": "A definição de lactente para fins de RCP vai desde o nascimento (excluindo recém-nascidos na sala de parto) até 1 ano de idade."
      },
      {
        "id": "B",
        "texto": "Lactente até 1 ano, Criança de 1 ano até 8 anos e Adulto a partir de 8 anos.",
        "correta": false,
        "explicacao": "Embora diretrizes mais antigas usassem a idade de 8 anos como corte absoluto para DEA, as diretrizes da AHA mais recentes definem 'criança' de 1 ano até o início da puberdade (sinais como desenvolvimento de mamas ou pelos axilares)."
      },
      {
        "id": "C",
        "texto": "Lactente até 1 ano, Criança de 1 ano até o início da puberdade e Adulto a partir da puberdade.",
        "correta": true,
        "explicacao": "Correto. Para fins de RCP (AHA 2020), lactentes são < 1 ano de idade, crianças vão de 1 ano até o início da puberdade, e adultos são considerados a partir do início da puberdade."
      },
      {
        "id": "D",
        "texto": "Lactente até 6 meses, Criança de 6 meses a 18 anos, e Adulto a partir de 18 anos.",
        "correta": false,
        "explicacao": "Esta divisão pediátrica/adolescente pode servir para prescrição medicamentosa clínica, mas não é a padronização de faixas etárias do BLS para reanimação."
      }
    ]
  },
  {
    "id": 59,
    "pergunta": "Analise as afirmações sobre a função do sistema respiratório:\nI - Na inspiração, o ar entra nos pulmões trazendo oxigênio para nosso organismo.\nII - Na expiração, o gás carbônico é expelido juntamente com outros componentes do ar que não foram aproveitados.\nIII - A respiração é dispensável para a vida celular por curtos períodos sem causar danos.\nQuais estão corretas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Somente a I está correta.",
        "correta": false,
        "explicacao": "A afirmação II também está correta, pois a expiração elimina o subproduto do metabolismo celular (CO2)."
      },
      {
        "id": "B",
        "texto": "Somente a II está correta.",
        "correta": false,
        "explicacao": "A afirmação I também está correta. A hematose capta O2 e elimina CO2 simultaneamente na troca gasosa."
      },
      {
        "id": "C",
        "texto": "Somente a I e a II estão corretas.",
        "correta": true,
        "explicacao": "Correto. Inspiração traz O2 aos alvéolos e expiração elimina o CO2. A afirmativa III é incorreta porque a respiração (e a oxigenação celular) é indispensável; danos cerebrais irreversíveis ocorrem em poucos minutos sem oxigênio (AHA 2020)."
      },
      {
        "id": "D",
        "texto": "Todas as afirmativas estão corretas.",
        "correta": false,
        "explicacao": "A afirmativa III é falsa. As células nervosas não toleram a falta de oxigênio (anóxia), e a respiração contínua é um requisito vital ininterrupto."
      }
    ]
  },
  {
    "id": 60,
    "pergunta": "Referente às recomendações e prevenções quanto aos perigos com eletricidade no ambiente, assinale a alternativa INCORRETA:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ficar atento às instalações elétricas improvisadas ou desencapadas.",
        "correta": false,
        "explicacao": "Esta é uma ação de prevenção correta, e a questão pede a incorreta. As fiações precárias são causas frequentes de eletrocussão."
      },
      {
        "id": "B",
        "texto": "Orientar para que se solte pipas longe de postes e fios elétricos de alta tensão.",
        "correta": false,
        "explicacao": "Esta é uma atitude de segurança e prevenção essencial, não sendo a alternativa incorreta procurada."
      },
      {
        "id": "C",
        "texto": "Usar protetor de tomadas para evitar acidentes com crianças.",
        "correta": false,
        "explicacao": "É uma recomendação correta e padrão de segurança doméstica. A questão pede a atitude incorreta."
      },
      {
        "id": "D",
        "texto": "É permitido manusear secadores e aquecedores com fio desencapado dentro de qualquer ambiente.",
        "correta": true,
        "explicacao": "Correto (é a afirmação errada/perigosa). Equipamentos com fios desencapados geram alto risco de choque elétrico e incêndio, agravando-se ainda mais em áreas com umidade ou água (PHTLS 10ª edição - Riscos Ambientais)."
      }
    ]
  },
  {
    "id": 61,
    "pergunta": "Em uma situação de emergência, é necessário avaliar a cena para verificar riscos, ameaças potenciais e os fatores que causaram a ocorrência. Sobre a avaliação da cena, qual das atitudes NÃO corresponde a uma conduta segura?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Localizar pregos enferrujados, vidros e outros materiais cortantes nos arredores.",
        "correta": false,
        "explicacao": "Isto faz parte da verificação de segurança (scene safety), portanto é uma atitude correta."
      },
      {
        "id": "B",
        "texto": "Verificar a existência de produtos perigosos vazando, como químicos ou combustíveis.",
        "correta": false,
        "explicacao": "A identificação de vazamentos (HazMat) é fundamental para evitar que o socorrista se torne a próxima vítima (PHTLS 10ª ed)."
      },
      {
        "id": "C",
        "texto": "Concentrar atenção total na vítima desconsiderando os perigos no entorno da cena.",
        "correta": true,
        "explicacao": "Correto (é a atitude incorreta). A primeira regra do Atendimento Pré-Hospitalar (AHA e PHTLS) é garantir a segurança do local. O socorrista nunca deve se colocar em risco ou obter visão de túnel, ignorando a cena ao seu redor."
      },
      {
        "id": "D",
        "texto": "Observar a existência de espaços com desnível acentuado com risco de queda.",
        "correta": false,
        "explicacao": "Identificar riscos de desabamento ou queda livre é parte essencial de garantir a segurança do cenário para o socorrista e para a vítima."
      }
    ]
  },
  {
    "id": 62,
    "pergunta": "Ao ser acionado para prestar socorro a uma vítima e chegar ao local da emergência, a sua primeiríssima atitude deve ser:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Correr para a vítima tão logo seja informado da ocorrência e verificar seu pulso.",
        "correta": false,
        "explicacao": "Correr diretamente para a vítima sem olhar ao redor ('visão em túnel') fere o princípio universal de segurança e pode levar o socorrista a se acidentar."
      },
      {
        "id": "B",
        "texto": "Certificar-se de que o local esteja seguro, antes de aproximar-se dele.",
        "correta": true,
        "explicacao": "Correto. O princípio básico do suporte de vida e trauma (AHA e PHTLS) exige que a avaliação de segurança da cena venha antes de qualquer contato com o paciente, para não gerar novas vítimas."
      },
      {
        "id": "C",
        "texto": "Não chamar auxílio imediato se você possuir um kit básico de primeiros socorros.",
        "correta": false,
        "explicacao": "Nenhum socorrista atua de forma autossuficiente em emergências graves. Acionar ajuda especializada é um dos primeiros elos da cadeia de sobrevivência."
      },
      {
        "id": "D",
        "texto": "Gritar para que os curiosos ajudem a levantar a vítima do chão.",
        "correta": false,
        "explicacao": "A vítima não deve ser movida, a menos que haja risco iminente no local (como fogo ou explosão), para evitar o agravamento de lesões na coluna."
      }
    ]
  },
  {
    "id": 63,
    "pergunta": "Animais peçonhentos (como cobras, escorpiões e aranhas) são comuns em várias regiões e causam acidentes em busca de abrigos ou alimentos. Para evitar esses acidentes, deve-se:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remexer montes de lixo, folhas secas, lenha ou palha sem o uso de luvas de raspa e botas.",
        "correta": false,
        "explicacao": "Esses locais são esconderijos comuns e remexê-los sem Equipamento de Proteção Individual (EPI) aumenta muito o risco de ser picado."
      },
      {
        "id": "B",
        "texto": "Introduzir a mão em frestas ou buracos no chão, como tocas de tatus e cupinzeiros.",
        "correta": false,
        "explicacao": "Estes são abrigos clássicos para serpentes e outros animais peçonhentos. A atitude coloca a pessoa em perigo extremo."
      },
      {
        "id": "C",
        "texto": "Fechar buracos de muros, frestas nas portas e vedações nas janelas.",
        "correta": true,
        "explicacao": "Correto. A prevenção baseia-se em manter o ambiente limpo, isolar a residência (usar telas e soleiras), fechar rachaduras e remover acúmulos que atraem as presas (como roedores) e servem de abrigo para os peçonhentos."
      },
      {
        "id": "D",
        "texto": "Manusear animais peçonhentos que pareçam mortos com as próprias mãos.",
        "correta": false,
        "explicacao": "É altamente contraindicado. O animal pode estar em estado de letargia ou, devido aos reflexos neuromusculares residuais, inocular o veneno mesmo horas após a morte aparente."
      }
    ]
  },
  {
"id": 64,
"pergunta": "Sobre os fatores de risco de doenças cardíacas, correlacione as colunas abaixo e encontre a alternativa correta:\n( ) Herança Genética\n( ) Obesidade\n( ) Sexo\n( ) Tabagismo\n( ) Hipertensão\n( ) Estresse excessivo\n( ) Colesterol alto\n\n1 Fator que pode ser alterado\n2 Fator que não pode ser alterado\n3 Fator que contribui",
"alternativas": [
{
"id": "A",
"texto": "1, 3, 2, 1, 2, 1 e 2",
"correta": false,
"explicacao": "Incorreto. A herança genética e o sexo são fatores não modificáveis (2), logo a sequência iniciando com '1' está errada."
},
{
"id": "B",
"texto": "1, 2, 1, 3, 1, 3 e 1",
"correta": false,
"explicacao": "Incorreto. A herança genética e o sexo não podem ser alterados (são fatores inerentes), o que invalida a classificação como '1' (pode ser alterado)."
},
{
"id": "C",
"texto": "2, 3, 2, 1, 1, 3 e 1",
"correta": true,
"explicacao": "Correto. Segundo a AHA, idade, sexo biológico e genética não podem ser alterados (2). Tabagismo, hipertensão e colesterol podem ser controlados (1). Obesidade e estresse atuam como fatores contribuintes ao risco global (3)."
},
{
"id": "D",
"texto": "2, 1, 3, 2, 2, 1 e 3",
"correta": false,
"explicacao": "Incorreto. O sexo (3º item) não é um 'fator que contribui' de forma variável (3), mas sim um fator de base inalterável (2)."
}
]
},
  {
    "id": 65,
    "pergunta": "O estado de choque (hipoperfusão tecidual) ocorre quando o sistema circulatório não consegue fornecer oxigênio adequado aos órgãos. Fisiologicamente, quais as três falhas principais do sistema que causam o choque?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estresse mental agudo, pulso fraco e sudorese intensa.",
        "correta": false,
        "explicacao": "Isso descreve sinais periféricos do choque ou reações vasovagais leves, e não a origem fisiológica (as causas subjacentes) do estado de choque."
      },
      {
        "id": "B",
        "texto": "Perda de líquidos, respiração rápida e sede.",
        "correta": false,
        "explicacao": "A respiração rápida e a sede são sintomas compensatórios (sinais) resultantes do choque hipovolêmico, e não suas causas primárias estruturais."
      },
      {
        "id": "C",
        "texto": "Falha no coração (bomba), perda de volume líquido (sangue/plasma) e dilatação excessiva dos vasos sanguíneos.",
        "correta": true,
        "explicacao": "Correto. Segundo o PHTLS (10ª ed), o choque é classificado fisiologicamente por problemas na bomba (cardiogênico), problemas de volume do fluido (hipovolêmico) ou problemas no 'recipiente' que dilata exageradamente (distributivo - ex: anafilaxia/séptico)."
      },
      {
        "id": "D",
        "texto": "Asfixia por gás, falência do sistema nervoso central e parada respiratória.",
        "correta": false,
        "explicacao": "Enquanto a hipóxia extrema leve ao colapso do sistema, a tríade clássica do estado de choque envolve disfunções de bomba, volume ou tônus vascular."
      }
    ]
  },
  {
    "id": 66,
    "pergunta": "O atendimento realizado pelo SAMU (Serviço de Atendimento Móvel de Urgência) é pautado em diversos objetivos de prestação de serviço. Assinale a alternativa INCORRETA sobre as atribuições do SAMU:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Regulação do sistema de vagas de urgência em hospitais.",
        "correta": false,
        "explicacao": "A Central de Regulação Médica do SAMU tem a função de organizar e encaminhar adequadamente os pacientes para as vagas hospitalares referenciadas. Esta alternativa é verdadeira."
      },
      {
        "id": "B",
        "texto": "Atendimento de casos clínicos agudos (infartos, AVCs, crises convulsivas).",
        "correta": false,
        "explicacao": "Esta é uma atribuição central do serviço; as unidades de suporte básico ou avançado respondem a todo tipo de urgência clínica, traumática ou obstétrica. A alternativa é verdadeira."
      },
      {
        "id": "C",
        "texto": "Coordenação das ações estaduais de ajuda humanitária nacional e internacional.",
        "correta": true,
        "explicacao": "Correto (é a afirmação falsa). A gestão de ajuda humanitária em larga escala internacional e defesa civil não é papel principal e direto do SAMU, que foca no atendimento e regulação médica de urgências e emergências em âmbito regional."
      },
      {
        "id": "D",
        "texto": "Educação em urgência e emergência por meio de Núcleos de Educação Permanente.",
        "correta": false,
        "explicacao": "Os NEU/NEP (Núcleos de Educação Permanente) são de fato pilares obrigatórios do componente SAMU para atualização das equipes e comunidade. Esta alternativa é verdadeira."
      }
    ]
  },
  {
"id": 67,
"pergunta": "Sobre os principais tipo de choque, relacione corretamente as colunas:\n( ) Reação alérgica severa\n( ) Causado pela perda de fluídos corpóreos intensos (diarreias e vômitos)\n( ) É choque do desfalecimento. Ocorre quando por algum fator, como por exemplo um forte estresse ou medo\n( ) Por hemorragias graves\n( ) Por insuficiência cardíaca\n( ) Pode ter diversas causas, mas todas devido à danificação do sistema nervoso autônomo\n( ) Por falência do sistema respiratório\n( ) Por falência circulatória aguda de causa infecciosa\n\n1 Choque hemorrágico ou hipovolêmico\n2 Choque cardiogênico\n3 Choque neurogênico\n4 Choque anafilático\n5 Choque metabólico\n6 Choque psicogênico\n7 Choque séptico\n8 Choque respiratório",
"alternativas": [
{
"id": "A",
"texto": "4, 5, 6, 1, 2, 3, 8 e 7",
"correta": true,
"explicacao": "Correto. A sequência mapeia perfeitamente a etiologia de cada choque segundo os protocolos de APH: anafilático (alergia - 4), metabólico (perda de fluidos não-sanguíneos - 5), psicogênico (desmaio/síncope - 6), hemorrágico/hipovolêmico (perda de sangue - 1), cardiogênico (falha da bomba - 2), neurogênico (falha de tônus vascular - 3), respiratório (hipóxia - 8) e séptico (infecção severa - 7)."
},
{
"id": "B",
"texto": "5, 4, 6, 1, 2, 3, 8 e 7",
"correta": false,
"explicacao": "Incorreto. O item inicial (reação alérgica severa) corresponde ao choque anafilático (4) e não ao metabólico (5)."
},
{
"id": "C",
"texto": "5, 4, 7, 1, 3, 2, 8 e 6",
"correta": false,
"explicacao": "Incorreto. Além de inverter o choque anafilático e metabólico, classifica a infecção generalizada como psicogênico (6), o que é um erro de conceito."
},
{
"id": "D",
"texto": "4, 5, 7, 1, 3, 2, 8 e 6",
"correta": false,
"explicacao": "Incorreto. Embora acerte os primeiros itens, associa o 'choque do desfalecimento/síncope' a séptico (7) e a 'falência infecciosa' a psicogênico (6), invertendo as etiologias."
}
]
},  
  {
    "id": 68,
    "pergunta": "Para o controle de vias aéreas em uma vítima de trauma (com suspeita de lesão na coluna cervical), utiliza-se a manobra de Elevação do Ângulo da Mandíbula (Jaw Thrust / tração mandibular). Qual procedimento NÃO faz parte dessa técnica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Com uma mão de cada lado da cabeça do paciente, colocar os dedos indicador e médio sob o ângulo da mandíbula.",
        "correta": false,
        "explicacao": "Este posicionamento manual faz parte da técnica correta para aplicar a força de tração no maxilar inferior."
      },
      {
        "id": "B",
        "texto": "Colocar o paciente em decúbito dorsal horizontal e posicionar-se atrás de sua cabeça.",
        "correta": false,
        "explicacao": "Este é o posicionamento correto do socorrista para a aplicação segura e simétrica da tração mandibular, mantendo a estabilização em linha da cabeça."
      },
      {
        "id": "C",
        "texto": "Com os dedos posicionados, impulsionar a mandíbula para cima e para a frente, minimizando o movimento da coluna.",
        "correta": false,
        "explicacao": "Este é o objetivo exato da manobra: abrir a via aérea empurrando a língua e estruturas moles para longe da retrofaringe, sem estender o pescoço."
      },
      {
        "id": "D",
        "texto": "Colocar uma das mãos na testa, para empurrar a cabeça para trás, enquanto a outra mão levanta o queixo.",
        "correta": true,
        "explicacao": "Correto (é o erro). Este movimento descreve a manobra de 'Inclinação da Cabeça e Elevação do Queixo' (Head-Tilt/Chin-Lift), que causa hiperextensão cervical e é absolutamente contraindicada para vítimas de trauma (PHTLS 10ª edição)."
      }
    ]
  },
  {
    "id": 69,
    "pergunta": "Nas diretrizes da American Heart Association, a cadeia de sobrevivência do Atendimento Cardiovascular de Emergência Intra-Hospitalar (PCRIH) é composta por elos sequenciais essenciais para o salvamento. Considerando a base dessa cadeia, qual alternativa apresenta a sequência correta dos procedimentos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "(1º ELO) Reconhecimento e Acionamento do Serviço de Emergência; (2º ELO) RCP imediata de alta qualidade; (3º ELO) Rápida Desfibrilação; (4º ELO) Serviços Médicos Básicos e Avançados; (5º ELO) Suporte Avançado e cuidados pós-PCR.",
        "correta": false,
        "explicacao": "Incorreta. Esta sequência descreve parcialmente a cadeia Extra-Hospitalar (PCREH), e não a Intra-Hospitalar, que possui o reconhecimento preventivo (vigilância) como primeiro elo."
      },
      {
        "id": "B",
        "texto": "(1º ELO) Reconhecimento e acionamento da equipe de resposta rápida; (2º ELO) Rápida Desfibrilação; (3º ELO) RCP contínua de alta qualidade; (4º ELO) Suporte Avançado de Vida; (5º ELO) Cuidados pós-PCR.",
        "correta": false,
        "explicacao": "Incorreta. A ordem está invertida. A RCP de alta qualidade (3º elo) deve anteceder a desfibrilação (4º elo) na sistematização do atendimento."
      },
      {
        "id": "C",
        "texto": "(1º ELO) Vigilância e prevenção; (2º ELO) Reconhecimento e Acionamento do Serviço Médico de Emergência; (3º ELO) RCP imediata de alta qualidade; (4º ELO) Rápida Desfibrilação; (5º ELO) Suporte Avançado de Vida e cuidados pós-PCR.",
        "correta": true,
        "explicacao": "Correta. Segundo a AHA (com atualização referenciada desde 2015 e mantida nas bases de 2020), a cadeia Intra-Hospitalar começa com a vigilância e prevenção da PCR, seguida de acionamento, RCP, desfibrilação e cuidados pós-PCR. Vale ressaltar que a diretriz AHA 2020 adicionou um sexto elo a ambas as cadeias: a Recuperação."
      },
      {
        "id": "D",
        "texto": "(1º ELO) Prevenção da PCR; (2º ELO) RCP precoce de alta qualidade; (3º ELO) Rápido acionamento da equipe de resposta rápida; (4º ELO) Suporte Avançado de Vida eficaz; (5º ELO) Cuidados pós-PCR integrados.",
        "correta": false,
        "explicacao": "Incorreta. O acionamento da equipe de resposta rápida (2º elo) deve vir imediatamente após a prevenção/reconhecimento (1º elo), antes do início da RCP."
      }
    ]
  },
  {
    "id": 70,
    "pergunta": "Durante o atendimento a uma vítima que colapsou subitamente e apresenta queixas prévias de dor intensa no peito, quais os sinais clínicos exatos que um profissional de saúde deve verificar para o reconhecimento imediato de uma Parada Cardiorrespiratória (PCR)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Inconsciência, cianose central e ausência de respiração.",
        "correta": false,
        "explicacao": "Incorreta. A cianose central (arroxeamento) é um sinal de hipóxia severa, mas não é um dos critérios fundamentais do SBV para determinação de PCR em tempo hábil (menos de 10 segundos)."
      },
      {
        "id": "B",
        "texto": "Ausência de respiração normal, palidez da face e pulso radial ausente.",
        "correta": false,
        "explicacao": "Incorreta. A palidez não é critério diagnóstico de PCR. Além disso, o pulso verificado por profissionais de saúde em adultos deve ser o central (carotídeo ou femoral), e não o periférico (radial), pois este último some rapidamente em estados de choque antes mesmo da parada."
      },
      {
        "id": "C",
        "texto": "Inconsciência, ausência de respiração normal e ausência de pulso central.",
        "correta": true,
        "explicacao": "Correta. Segundo as diretrizes da AHA (2020), a tríade para reconhecimento da PCR por um profissional de saúde é: vítima não responsiva (inconsciente), ausência de respiração ou respiração anormal (gasping) e ausência de pulso central palpável em no máximo 10 segundos."
      },
      {
        "id": "D",
        "texto": "Midríase bilateral, ausência de respiração e ausência de pulso.",
        "correta": false,
        "explicacao": "Incorreta. Embora a midríase (pupilas dilatadas) ocorra devido à hipóxia cerebral pós-PCR, procurar esse sinal atrasa o início das compressões e não faz parte do algoritmo de reconhecimento rápido do SBV."
      }
    ]
  },
  {
    "id": 71,
    "pergunta": "Você está sozinho e acabou de reconhecer os sinais de PCR em um paciente adulto (inconsciência, ausência de pulso e ausência de respiração). Qual é o próximo passo imediato no atendimento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Acionar o serviço médico de emergência (192) e iniciar 15 compressões torácicas e 2 ventilações.",
        "correta": false,
        "explicacao": "Incorreta. A relação de 15:2 é exclusiva para atendimento pediátrico e neonatal quando há 2 socorristas profissionais. Para adultos, a proporção é sempre 30:2."
      },
      {
        "id": "B",
        "texto": "Acionar o serviço médico de emergência (192 + DEA) com o celular no viva voz, e iniciar as compressões torácicas.",
        "correta": true,
        "explicacao": "Correta. As diretrizes da AHA (2020) recomendam que o socorrista único com celular acione o SME imediatamente em viva voz e inicie as compressões torácicas."
      },
      {
        "id": "C",
        "texto": "Acionar o serviço médico de emergência, colocar o celular no viva voz e realizar 2 ventilações de resgate antes das compressões.",
        "correta": false,
        "explicacao": "Incorreta. O protocolo CAB (Compressões, Vias Aéreas, Boa Respiração) prioriza iniciar a RCP pelas compressões torácicas para restaurar o fluxo sanguíneo o mais rápido possível, não pelas ventilações."
      },
      {
        "id": "D",
        "texto": "Realizar 5 ciclos de 30 compressões para 2 ventilações e, somente em seguida, acionar o serviço médico de urgência.",
        "correta": false,
        "explicacao": "Incorreta. Para adultos com PCR súbita presumida de origem cardíaca, o acionamento do SME e a solicitação de um DEA devem ser feitos imediatamente, antes de iniciar a RCP. A regra de fazer RCP por 2 minutos antes de chamar ajuda aplica-se a paradas asfíxicas (como afogamento) ou pediátricas não presenciadas."
      }
    ]
  },
  {
    "id": 72,
    "pergunta": "Durante a execução da Ressuscitação Cardiopulmonar (RCP) em um adulto, qual deve ser a frequência e a profundidade corretas das compressões torácicas para garantir alta qualidade, segundo as diretrizes?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Frequência de 80 a 100 compressões/minuto; profundidade de no mínimo 5 cm.",
        "correta": false,
        "explicacao": "Incorreta. Uma frequência abaixo de 100 compressões por minuto é ineficaz para gerar o débito cardíaco mínimo necessário para perfusão cerebral e coronariana."
      },
      {
        "id": "B",
        "texto": "Frequência de, aproximadamente, 100 compressões/minuto; profundidade de 5 a 6 cm.",
        "correta": false,
        "explicacao": "Incorreta. 'Aproximadamente 100' não é a métrica atual. As diretrizes estabelecem um intervalo rígido de limite inferior e superior para a frequência."
      },
      {
        "id": "C",
        "texto": "Frequência mínima de 100 compressões/minuto; profundidade de no mínimo 5 cm.",
        "correta": false,
        "explicacao": "Incorreta. Embora seja próxima de diretrizes muito antigas, a atualização estipula um limite máximo para evitar fadiga do socorrista e lesões orgânicas não intencionais, logo 'mínima' sem teto de limite é incorreto."
      },
      {
        "id": "D",
        "texto": "Frequência de 100 a 120 compressões/minuto; profundidade de pelo menos 5 cm, não devendo ultrapassar 6 cm.",
        "correta": true,
        "explicacao": "Correta. A Diretriz da AHA (2020) determina que uma RCP de alta qualidade em adultos requer compressões a uma frequência de 100 a 120 por minuto e uma profundidade de pelo menos 5 cm (2 polegadas), não excedendo 6 cm (2,4 polegadas), permitindo o retorno completo do tórax."
      }
    ]
  },
  {
    "id": 73,
    "pergunta": "Um bebê de 8 meses (lactente), internado em uma enfermaria, para de responder subitamente. Dois profissionais de saúde chegam imediatamente para o atendimento e iniciam a RCP em equipe. Nesse caso, a conduta inicial adequada é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Avaliar pulso braquial, constatar PCR, e iniciar ressuscitação na relação 30 compressões para 2 ventilações.",
        "correta": false,
        "explicacao": "Incorreta. Como há 2 profissionais de saúde atuando na reanimação do lactente, a relação compressão-ventilação muda de 30:2 para 15:2."
      },
      {
        "id": "B",
        "texto": "Avaliar pulso carotídeo, constata PCR, e iniciar ressuscitação na relação 30 compressões para 2 ventilações.",
        "correta": false,
        "explicacao": "Incorreta. Além da proporção estar errada para dois socorristas, o pulso carotídeo não deve ser checado em lactentes menores de 1 ano devido à anatomia cervical curta e gordinha; o local correto é o braquial."
      },
      {
        "id": "C",
        "texto": "Realizar duas ventilações de resgate antes de avaliar o pulso.",
        "correta": false,
        "explicacao": "Incorreta. O protocolo CAB estipula que a avaliação (checagem de responsividade e pulso) sempre precede a intervenção terapêutica. A ventilação não é a primeira conduta na PCR."
      },
      {
        "id": "D",
        "texto": "Avaliar pulso braquial, constatar PCR, e iniciar ressuscitação na relação 15 compressões para 2 ventilações.",
        "correta": true,
        "explicacao": "Correta. Segundo a AHA (2020) para lactentes (menores de 1 ano), o pulso central a ser checado é o braquial (ou femoral). Quando a RCP é realizada por 2 socorristas profissionais de saúde, altera-se a relação para 15 compressões e 2 ventilações, usando a técnica dos dois polegares."
      }
    ]
  },
  {
    "id": 74,
    "pergunta": "Durante a RCP em um bebê de 8 meses, surge a necessidade do uso do Desfibrilador Externo Automático (DEA). Como os profissionais devem proceder em relação ao uso do aparelho nessa faixa etária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Não aceitar a sugestão de uso, pois não é apropriado ou seguro o uso de DEA em lactentes em nenhuma circunstância.",
        "correta": false,
        "explicacao": "Incorreta. O uso do DEA é seguro e vital para o tratamento de ritmos chocáveis (FV/TVSP) em todas as idades, incluindo lactentes."
      },
      {
        "id": "B",
        "texto": "Solicitar que se instale o DEA apenas se tiver pás estritamente pediátricas ou atenuador de carga, abortando o choque caso não existam.",
        "correta": false,
        "explicacao": "Incorreta. O choque nunca deve ser negado a um paciente que precise. Se pás pediátricas não estiverem disponíveis, as pás de adulto devem ser usadas como alternativa."
      },
      {
        "id": "C",
        "texto": "Não usar o DEA da enfermaria se este tiver apenas pás adultas, pois a carga de energia é letal para bebês.",
        "correta": false,
        "explicacao": "Incorreta. A fibrilação ventricular não tratada é o evento letal; o uso de pás de adulto é preferível a não oferecer a desfibrilação."
      },
      {
        "id": "D",
        "texto": "Solicitar a instalação do DEA com pás pediátricas e/ou atenuador de carga. Se estes não estiverem disponíveis, utilizar as pás de adulto.",
        "correta": true,
        "explicacao": "Correta. As Diretrizes AHA (2020) orientam o uso de desfibrilador manual ou DEA com atenuador de dose em lactentes. Na ausência destes equipamentos pediátricos, deve-se utilizar o DEA com pás de adulto na configuração anteroposterior (uma no centro do peito e outra nas costas) para evitar que as pás se toquem."
      }
    ]
  },
  {
    "id": 75,
    "pergunta": "Você é socorrista profissional e está com um Desfibrilador Externo Automático (DEA) imediatamente ao seu lado. Uma vítima adulta colapsa de forma súbita na sua frente (PCR presenciada). Você checa os sinais vitais e constata a parada. Qual deve ser seu primeiro passo com o equipamento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar 2 minutos de RCP, checar pulso e somente após esse ciclo aplicar o DEA.",
        "correta": false,
        "explicacao": "Incorreta. Em paradas súbitas presenciadas de adultos, a chance de ser Fibrilação Ventricular (FV) é altíssima. Atrasar o choque diminui exponencialmente as chances de sobrevida."
      },
      {
        "id": "B",
        "texto": "Realizar 1 ciclo de 30 compressões e 2 ventilações antes de ligar o DEA para otimizar o fluxo coronariano.",
        "correta": false,
        "explicacao": "Incorreta. O acesso ao DEA presenciado dita a prioridade da desfibrilação imediata, sem necessidade de 'preparar' o coração com RCP antes, se a PCR acabou de acontecer sob seus olhos."
      },
      {
        "id": "C",
        "texto": "Realizar 2 ventilações para oxigenar o miocárdio, checar o pulso e aplicar o DEA.",
        "correta": false,
        "explicacao": "Incorreta. A oxigenação inicial (ventilação) deixou de ser a prioridade há anos (fim do protocolo ABC, início do CAB). A primeira ação é elétrica quando o DEA está ali."
      },
      {
        "id": "D",
        "texto": "Aplicar o DEA e prosseguir imediatamente de acordo com as instruções recomendadas pelo aparelho.",
        "correta": true,
        "explicacao": "Correta. De acordo com o protocolo AHA (2020), se um socorrista presencia uma PCR em um adulto e tem um DEA disponível no exato momento, ele deve ligar o aparelho e aplicar as pás o mais rapidamente possível para desfibrilação precoce."
      }
    ]
  },
  {
    "id": 76,
    "pergunta": "Você encontra uma criança inconsciente num parque (PCR NÃO presenciada). Você está sozinho, sem telefone celular e sem acesso a um DEA. Nesse cenário específico, qual é a atitude preconizada pelos protocolos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Abandonar a vítima imediatamente, correr para pedir ajuda (ligar 192) e buscar um DEA para retornar ao local.",
        "correta": false,
        "explicacao": "Incorreta. Diferente do adulto (que costuma parar por causa cardíaca e requer choque rápido), a criança geralmente entra em PCR por asfixia/hipóxia. Abandoná-la sem RCP anula suas chances."
      },
      {
        "id": "B",
        "texto": "Realizar dois minutos de RCP contínua; em seguida, deixar a vítima brevemente para pedir ajuda e buscar um DEA.",
        "correta": true,
        "explicacao": "Correta. Segundo as diretrizes da AHA (2020), se a PCR na criança ou lactente NÃO for presenciada e você estiver sozinho e sem comunicação, deve-se prover oxigenação e fluxo através de 2 minutos (cerca de 5 ciclos) de RCP antes de abandonar a vítima para acionar o Serviço Médico de Emergência."
      },
      {
        "id": "C",
        "texto": "Fazer apenas um ciclo de 30 compressões e 2 ventilações e, logo em seguida, pedir ajuda.",
        "correta": false,
        "explicacao": "Incorreta. Apenas um ciclo leva cerca de 24 segundos, o que é insuficiente para reverter um quadro agudo de hipóxia (causa provável da PCR pediátrica não presenciada). O preconizado são 2 minutos."
      },
      {
        "id": "D",
        "texto": "Executar duas ventilações de resgate de 1 segundo cada, procurar sinais de vida e, não havendo, pedir ajuda.",
        "correta": false,
        "explicacao": "Incorreta. Apenas ventilar não reverte a PCR se não houver compressões torácicas atreladas durante o período de 2 minutos exigido para reanimação asfíxica."
      }
    ]
  },
  {
    "id": 77,
    "pergunta": "Durante as manobras de Reanimação Cardiopulmonar (RCP), o suporte avançado de vida chega e estabelece uma via aérea avançada (como um tubo endotraqueal) no paciente adulto. Qual das seguintes afirmações descreve corretamente como as ventilações devem ser aplicadas a partir desse momento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar 2 ventilações para cada 30 compressões torácicas, mantendo a sincronia de pausas.",
        "correta": false,
        "explicacao": "Incorreta. A relação sincronizada (30:2) com pausas para compressão é utilizada exclusivamente quando não há via aérea avançada (uso de máscara de bolso ou BVM simples)."
      },
      {
        "id": "B",
        "texto": "Aplicar 10 ventilações por minuto (sendo uma ventilação a cada 6 segundos) de forma contínua, sem pausas nas compressões torácicas.",
        "correta": true,
        "explicacao": "Correta. Segundo a AHA (2020), ao se estabelecer uma via aérea avançada no adulto em PCR, as compressões torácicas tornam-se ininterruptas (frequência de 100-120/min) e a ventilação é aplicada na taxa de 1 a cada 6 segundos (10 ventilações por minuto) assincronamente."
      },
      {
        "id": "C",
        "texto": "Aplicar ventilações rápidas e hiperventiladas numa taxa de 15 a 20 por minuto, para saturar a oxigenação cerebral, parando a compressão a cada ciclo.",
        "correta": false,
        "explicacao": "Incorreta. A hiperventilação é estritamente contraindicada na RCP, pois aumenta a pressão intratorácica, diminuindo o retorno venoso e o débito cardíaco."
      },
      {
        "id": "D",
        "texto": "Aplicar 1 ventilação a cada 3 a 5 segundos sem pausas para as compressões torácicas.",
        "correta": false,
        "explicacao": "Incorreta. Esta métrica (1 respiração a cada 2 a 3 segundos, ou 20-30/min) reflete a diretriz atualizada da AHA 2020 para vias aéreas avançadas exclusivamente em pediatria, não em adultos."
      }
    ]
  },
  {
    "id": 78,
    "pergunta": "Você identifica um homem adulto engasgando gravemente em um restaurante. Ele está consciente, de pé, leva as mãos ao pescoço (sinal universal de asfixia) e não consegue tossir, falar ou emitir sons. Como profissional qualificado, a conduta correta imediata é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Não intervir fisicamente; encorajar a tosse e esperar até que a vítima fique inconsciente para iniciar a RCP.",
        "correta": false,
        "explicacao": "Incorreta. Em casos de Obstrução de Vias Aéreas por Corpo Estranho (OVACE) grave (sem som, sem tosse efetiva), a intervenção física imediata é obrigatória para evitar a inconsciência e a PCR."
      },
      {
        "id": "B",
        "texto": "Apresentar-se para a vítima e aplicar 5 golpes rítmicos vigorosos nas costas entre as escápulas.",
        "correta": false,
        "explicacao": "Incorreta. Embora seja conduta padrão em muitos protocolos internacionais (como o ERC europeu) combinar golpes e compressões, os protocolos PHTLS e AHA baseados no modelo americano padronizam exclusivamente a Manobra de Heimlich (compressões abdominais) como primeira linha para adultos engasgados e conscientes."
      },
      {
        "id": "C",
        "texto": "Apresentar-se à vítima, posicionar-se atrás dela, envolver completamente sua cintura com os braços e iniciar compressões abdominais vigorosas (Manobra de Heimlich) para dentro e para cima.",
        "correta": true,
        "explicacao": "Correta. De acordo com as diretrizes da AHA (2020) para engasgo severo em vítimas conscientes acima de 1 ano de idade (não grávidas e não obesas extremas), a técnica correta e padrão é a aplicação das compressões subdiafragmáticas (Heimlich) até a desobstrução ou perda de consciência."
      },
      {
        "id": "D",
        "texto": "Apresentar-se à vítima, deitá-la imediatamente no chão em decúbito dorsal horizontal e iniciar as compressões torácicas.",
        "correta": false,
        "explicacao": "Incorreta. As compressões torácicas com a vítima deitada são o tratamento preconizado apenas quando a vítima de engasgo perde a consciência e torna-se irresponsiva."
      }
    ]
  },
  {
    "id": 79,
    "pergunta": "Como as compressões torácicas devem ser realizadas durante a Ressuscitação Cardiopulmonar (RCP) em adultos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "As compressões devem ter entre 5 e 6 cm de profundidade, com uma frequência de 100 a 120 compressões por minuto.",
        "correta": true,
        "explicacao": "Correto. De acordo com as diretrizes da AHA (2020) para adultos, as compressões devem ter profundidade de pelo menos 5 cm, sem ultrapassar 6 cm, garantindo o retorno total do tórax, a um ritmo de 100 a 120 por minuto."
      },
      {
        "id": "B",
        "texto": "As compressões devem ter 7,5 cm de profundidade, com uma frequência de 90 compressões por minuto.",
        "correta": false,
        "explicacao": "Incorreto. Uma frequência de 90 compressões por minuto é muito lenta (o mínimo é 100) e 7,5 cm é muito profundo, o que pode causar lesões internas graves aos órgãos torácicos (AHA 2020)."
      },
      {
        "id": "C",
        "texto": "As compressões devem ser realizadas em dez ciclos de 15 compressões para 1 ventilação (15:1).",
        "correta": false,
        "explicacao": "Incorreto. A relação correta de compressões por ventilação para adultos em Suporte Básico de Vida (socorrista único ou leigo) é de 30:2, e não 15:1."
      },
      {
        "id": "D",
        "texto": "As compressões devem ter 6,25 cm de profundidade, com uma frequência de 150 compressões por minuto.",
        "correta": false,
        "explicacao": "Incorreto. Uma frequência de 150 por minuto é excessivamente rápida, não permitindo o enchimento adequado do coração entre as compressões, resultando em baixo débito cardíaco (AHA 2020)."
      }
    ]
  },
  {
    "id": 80,
    "pergunta": "O que você deve fazer quando o Desfibrilador Externo Automático (DEA) analisa o ritmo da vítima e recomenda que um choque seja administrado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pressionar imediatamente o botão de choque sem precauções adicionais para não perder tempo.",
        "correta": false,
        "explicacao": "Incorreto. Pressionar o botão sem verificar a segurança pode resultar em choque elétrico para o socorrista ou para outras pessoas que estejam encostadas na vítima."
      },
      {
        "id": "B",
        "texto": "Ignorar a recomendação do DEA e continuar apenas com as compressões torácicas.",
        "correta": false,
        "explicacao": "Incorreto. O choque elétrico (desfibrilação) é o tratamento definitivo e prioritário para reverter ritmos chocáveis (como Fibrilação Ventricular). Ignorar a recomendação zera as chances de sobrevivência da vítima."
      },
      {
        "id": "C",
        "texto": "Afastar-se, pedir em voz alta para que todos se afastem da vítima, certificar-se de que ninguém a toca e, em seguida, pressionar o botão de choque.",
        "correta": true,
        "explicacao": "Correto. O protocolo de segurança universal (AHA 2020) exige que o socorrista garanta a segurança visualizando a cena e verbalizando o afastamento de todos antes de acionar o choque."
      },
      {
        "id": "D",
        "texto": "Tentar acordar a vítima verbalmente e tranquilizá-la antes de aplicar o choque.",
        "correta": false,
        "explicacao": "Incorreto. Se o DEA recomendou um choque, a vítima está em Parada Cardiorrespiratória (PCR) e, portanto, inconsciente. Tentar comunicação atrasa o choque vital."
      }
    ]
  },
  {
    "id": 81,
    "pergunta": "Qual é o primeiro passo absoluto para a restrição de movimento da coluna cervical em um paciente com suspeita de trauma?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar o colar cervical imediatamente, antes de realizar qualquer outra avaliação ou contato.",
        "correta": false,
        "explicacao": "Incorreto. O colar cervical nunca é o primeiro passo. A sua colocação sem a prévia estabilização manual pode agravar uma lesão espinhal existente."
      },
      {
        "id": "B",
        "texto": "Realizar a estabilização manual da cabeça do paciente em posição neutra e alinhada.",
        "correta": true,
        "explicacao": "Correto. De acordo com o PHTLS (10ª edição), o primeiro passo no manejo de trauma com suspeita de lesão raquimedular é aproximar-se e assumir a estabilização manual imediata da cabeça do paciente, imobilizando-a antes mesmo da colocação de qualquer dispositivo."
      },
      {
        "id": "C",
        "texto": "Avaliar a sensibilidade e a motricidade dos membros inferiores para decidir se a imobilização é necessária.",
        "correta": false,
        "explicacao": "Incorreto. Embora a avaliação neurológica rápida faça parte do exame primário, ela não precede a proteção imediata (estabilização manual) da coluna cervical frente à cinemática de trauma."
      },
      {
        "id": "D",
        "texto": "Posicionar a vítima sentada para facilitar a colocação do equipamento de imobilização.",
        "correta": false,
        "explicacao": "Incorreto. Mover uma vítima de trauma deitada para a posição sentada pode causar secção da medula espinhal em caso de fraturas cervicais."
      }
    ]
  },
  {
    "id": 82,
    "pergunta": "Quais são as etapas fundamentais para garantir o posicionamento correto e eficaz de um torniquete em uma hemorragia massiva de extremidade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar o torniquete diretamente sobre as articulações (cotovelos ou joelhos) para maximizar a compressão da artéria.",
        "correta": false,
        "explicacao": "Incorreto. Os torniquetes nunca devem ser aplicados sobre articulações, pois a estrutura óssea impede a compressão uniforme e adequada dos vasos sanguíneos contra os ossos."
      },
      {
        "id": "B",
        "texto": "Posicionar o torniquete 5 a 7 centímetros acima do sangramento, apertar até o sangramento parar e não afrouxar no ambiente pré-hospitalar.",
        "correta": true,
        "explicacao": "Correto. O PHTLS (10ª edição) orienta a aplicação do torniquete proximalmente à ferida (cerca de 5 a 7 cm ou 'alto e apertado' em situações táticas), apertando a haste até a cessação do pulso/sangramento e mantendo-o travado até atendimento definitivo."
      },
      {
        "id": "C",
        "texto": "Posicionar o torniquete bem acima da lesão, afrouxando-o a cada 10 minutos para evitar isquemia no membro.",
        "correta": false,
        "explicacao": "Incorreto. Afrouxar o torniquete de forma intermitente causará perda de volume sanguíneo letal e pode deslocar coágulos formados. Uma vez aplicado, o leigo nunca deve soltá-lo."
      },
      {
        "id": "D",
        "texto": "Aplicar o torniquete como última opção, apenas se a elevação do membro e a aplicação de gelo não funcionarem.",
        "correta": false,
        "explicacao": "Incorreto. A elevação de membro não é mais preconizada. Em hemorragias exsanguinantes de extremidades, o torniquete é a intervenção inicial de escolha e não deve ser postergado."
      }
    ]
  },
  {
    "id": 83,
    "pergunta": "Por que é crucial remover roupas molhadas e secar completamente o tórax de uma vítima (como em um afogamento) antes de aplicar as pás do DEA?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Para evitar que a água conduza a eletricidade, o que reduz a eficácia do choque e pode causar queimaduras, além de garantir a aderência correta das pás.",
        "correta": true,
        "explicacao": "Correto. A água é excelente condutora. Se o tórax estiver molhado, a corrente elétrica fluirá pela água na superfície da pele, não atravessando o coração, o que anula a desfibrilação e queima a pele (AHA 2020)."
      },
      {
        "id": "B",
        "texto": "Para melhorar a visibilidade do tórax e facilitar a contagem dos movimentos respiratórios.",
        "correta": false,
        "explicacao": "Incorreto. O DEA não precisa de visibilidade torácica para avaliar respiração, ele analisa a atividade elétrica do coração através dos eletrodos colados à pele."
      },
      {
        "id": "C",
        "texto": "Para prevenir que a vítima desenvolva hipotermia severa durante os ciclos de compressões torácicas.",
        "correta": false,
        "explicacao": "Incorreto. Embora evitar hipotermia seja importante, a secagem do tórax no contexto imediato do uso do DEA tem o propósito exclusivo de condutividade elétrica e fixação dos adesivos."
      },
      {
        "id": "D",
        "texto": "Para facilitar o trabalho dos socorristas na realização de ventilações boca a boca e compressões mais fundas.",
        "correta": false,
        "explicacao": "Incorreto. A secagem do tórax não influencia a mecânica das ventilações ou a profundidade física das compressões torácicas."
      }
    ]
  },
  {
    "id": 84,
    "pergunta": "Qual é a conduta inicial recomendada quando uma criança apresenta uma obstrução leve (parcial) das vias aéreas por um alimento, permanecendo consciente e tossindo ativamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar a Manobra de Heimlich (compressões abdominais) imediatamente para evitar que ela piore.",
        "correta": false,
        "explicacao": "Incorreto. Se a vítima está tossindo ou falando, há fluxo de ar. A Manobra de Heimlich deve ser usada apenas na obstrução severa (quando não há som, tosse efetiva ou choro)."
      },
      {
        "id": "B",
        "texto": "Oferecer água, pão ou outro alimento para ajudar a empurrar a obstrução para o estômago.",
        "correta": false,
        "explicacao": "Incorreto. Oferecer água ou alimentos pode empurrar o objeto para a traqueia ou causar engasgo severo secundário, agravando a situação de forma letal."
      },
      {
        "id": "C",
        "texto": "Aplicar golpes vigorosos nas costas da criança imediatamente até que ela pare de tossir.",
        "correta": false,
        "explicacao": "Incorreto. Golpes nas costas de vítimas em pé com obstrução parcial podem transformar um engasgo parcial em um engasgo total, deslocando o objeto."
      },
      {
        "id": "D",
        "texto": "Encorajar a criança a continuar tossindo vigorosamente e monitorar de perto a situação sem intervir fisicamente.",
        "correta": true,
        "explicacao": "Correto. Segundo a AHA (2020), a tosse natural e ativa é o mecanismo mais eficaz e seguro para expelir um corpo estranho em obstruções leves. A intervenção física (compressões abdominais) é contraindicada enquanto a tosse for eficaz."
      }
    ]
  },
  {
    "id": 85,
    "pergunta": "Ao prestar Primeiros Socorros Psicológicos (PSP) a uma vítima de trauma ou crise no local do evento, qual deve ser a postura correta e imediata do socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Forçar a vítima a contar os detalhes minuciosos do que acabou de acontecer para que ela 'desabafe'.",
        "correta": false,
        "explicacao": "Incorreto. Forçar alguém a relatar o evento traumático pode causar revitimização e agravar o estado de choque emocional no momento agudo."
      },
      {
        "id": "B",
        "texto": "Ouvir atentamente, sendo paciente e empático, mantendo a calma e não pressionando a vítima a falar se ela não quiser.",
        "correta": true,
        "explicacao": "Correto. O princípio básico do PSP (apoio psicológico em crises) é fornecer uma presença compassiva e escuta ativa, validando os sentimentos da vítima sem invadir seu espaço ou forçar interações."
      },
      {
        "id": "C",
        "texto": "Dizer à pessoa que ela não deve chorar ou ficar triste, pois outras pessoas estão em situações piores.",
        "correta": false,
        "explicacao": "Incorreto. Invalidar os sentimentos da vítima ou minimizar o seu sofrimento com comparações é uma conduta prejudicial e quebra o elo de empatia e confiança."
      },
      {
        "id": "D",
        "texto": "Tentar diagnosticar a vítima com Transtorno de Estresse Pós-Traumático para relatar aos paramédicos.",
        "correta": false,
        "explicacao": "Incorreto. Leigos (e mesmo socorristas operacionais) não têm qualificação nem função para diagnosticar transtornos psiquiátricos, focando-se apenas no acolhimento humano imediato."
      }
    ]
  },
  {
    "id": 86,
    "pergunta": "Qual é o papel da Ressuscitação Cardiopulmonar (RCP) imediatamente após uma desfibrilação bem-sucedida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A RCP não é mais necessária após um choque bem-sucedido.",
        "correta": false,
        "explicacao": "Incorreto. Parar a RCP imediatamente após o choque é um erro crítico, pois o coração geralmente não retoma um ritmo forte ou perfusão adequada nos primeiros minutos."
      },
      {
        "id": "B",
        "texto": "A RCP ajuda o coração a organizar seu ritmo e restaurar os níveis de ATP (energia) após a desfibrilação.",
        "correta": true,
        "explicacao": "Correto. Segundo a AHA (2020), nos primeiros minutos após um choque bem-sucedido, o ritmo espontâneo costuma ser lento e incapaz de gerar pulso ou perfusão adequados (coração 'atordoado'). A RCP imediata garante o fluxo sanguíneo e a oxigenação miocárdica necessários para a recuperação celular."
      },
      {
        "id": "C",
        "texto": "A RCP é necessária exclusivamente para gerar um ritmo espontâneo caso o desfibrilador falhe.",
        "correta": false,
        "explicacao": "Incorreto. A RCP é obrigatória mesmo quando o choque é bem-sucedido, não sendo apenas um 'plano B' para falha do aparelho."
      },
      {
        "id": "D",
        "texto": "A RCP só é necessária se o paciente permanecer inconsciente após a desfibrilação.",
        "correta": false,
        "explicacao": "Incorreto. A avaliação de consciência ou pulso logo após o choque atrasa as compressões. O protocolo exige o retorno imediato à RCP por 2 minutos antes de qualquer nova checagem."
      }
    ]
  },
  {
    "id": 87,
    "pergunta": "Qual é a sequência correta para realizar a manobra de desobstrução (Heimlich) em um paciente lactente (bebê menor de 1 ano) engasgado e consciente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Iniciar com 5 golpes nas costas, em seguida apoiar a mão livre nas costas e virar o bebê de lado.",
        "correta": false,
        "explicacao": "Incorreto. Virar o bebê de lado não gera a pressão intratorácica necessária para expelir o corpo estranho."
      },
      {
        "id": "B",
        "texto": "Começar com 5 compressões torácicas rápidas, seguidas por virar o bebê e dar 5 golpes nas costas.",
        "correta": false,
        "explicacao": "Incorreto. A sequência estabelecida pelas diretrizes de Suporte Básico de Vida inverte essa ordem, iniciando sempre pela tapotagem (golpes nas costas)."
      },
      {
        "id": "C",
        "texto": "Iniciar com 5 golpes nas costas, depois colocar a mão livre sobre as costas do bebê (girando-o em bloco) e finalizar com 5 compressões torácicas rápidas.",
        "correta": true,
        "explicacao": "Correto. O protocolo da AHA (2020) para lactentes conscientes com obstrução grave de vias aéreas determina ciclos contínuos de 5 golpes interescapulares (costas) seguidos de 5 compressões torácicas (usando 2 dedos no centro do peito), até a desobstrução ou perda de consciência."
      },
      {
        "id": "D",
        "texto": "Começar virando o bebê de barriga para cima, aplicar 5 golpes nas costas e depois 5 compressões abdominais.",
        "correta": false,
        "explicacao": "Incorreto. Além da posição inicial estar errada (golpes nas costas exigem decúbito ventral), compressões abdominais (Heimlich tradicional) são contraindicadas em bebês pelo alto risco de lesão hepática."
      }
    ]
  },
  {
    "id": 88,
    "pergunta": "No Suporte Básico de Vida, qual técnica é descrita corretamente para a realização das compressões torácicas em lactentes (bebês menores de 1 ano) por um único socorrista?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Técnica de compressão com a mão inteira: apoiar toda a palma da mão no tórax do bebê e comprimir o esterno.",
        "correta": false,
        "explicacao": "Incorreto. A palma da mão inteira exerce força excessiva e abrange uma área muito grande do frágil tórax do bebê, podendo causar fraturas de costelas e lesões internas."
      },
      {
        "id": "B",
        "texto": "Técnica dos dois dedos: utilizar os dedos indicador e médio para comprimir a metade inferior do esterno.",
        "correta": true,
        "explicacao": "Correto. A diretriz da AHA (2020) preconiza que, para um único socorrista leigo ou profissional atendendo um lactente, a técnica padrão é posicionar 2 dedos (indicador e médio) no centro do tórax, logo abaixo da linha dos mamilos, deprimindo cerca de 4 cm."
      },
      {
        "id": "C",
        "texto": "Técnica de uma mão: utilizar apenas a região hipotenar de uma das mãos na metade inferior do esterno.",
        "correta": false,
        "explicacao": "Incorreto. A técnica da região hipotenar de uma (ou duas) mãos é a recomendação para a RCP em crianças maiores (de 1 ano até a puberdade), e não em lactentes."
      },
      {
        "id": "D",
        "texto": "Técnica das duas mãos entrelaçadas: posicionar as duas mãos no centro do peito e aplicar força com o peso do corpo.",
        "correta": false,
        "explicacao": "Incorreto. Esta é a técnica clássica de compressão torácica para adultos. Aplicar esse método em um bebê causaria esmagamento torácico severo."
      }
    ]
  },
  {
    "id": 89,
    "pergunta": "O que as evidências científicas atuais sugerem em relação à segurança da aplicação do torniquete em hemorragias massivas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O torniquete é seguro apenas nos primeiros 30 minutos de aplicação, devendo ser retirado após esse período.",
        "correta": false,
        "explicacao": "Incorreto. Retirar o torniquete no ambiente pré-hospitalar é estritamente contraindicado, pois libera toxinas (síndrome de esmagamento/isquemia) e reinicia a hemorragia letal."
      },
      {
        "id": "B",
        "texto": "O torniquete deve ser aplicado por no máximo 1 hora para evitar amputação imediata do membro.",
        "correta": false,
        "explicacao": "Incorreto. A crença de que torniquetes causam amputação rápida é um mito ultrapassado. As evidências mostram margens de segurança muito maiores."
      },
      {
        "id": "C",
        "texto": "O torniquete é seguro em 100% dos casos nas primeiras 2 horas, e em 93% dos casos entre 2 e 6 horas após a aplicação.",
        "correta": true,
        "explicacao": "Correto. Segundo os preceitos do PHTLS e do TCCC, o uso de torniquetes comerciais apresenta altíssima segurança e taxa mínima de complicações isquêmicas permanentes se o paciente receber tratamento definitivo em até 2 horas."
      },
      {
        "id": "D",
        "texto": "O torniquete é completamente seguro em todos os casos, independentemente do tempo de aplicação.",
        "correta": false,
        "explicacao": "Incorreto. Embora muito seguros nas primeiras horas, tempos de isquemia prolongados (acima de 6 horas) aumentam progressiva e significativamente o risco de danos nervosos, musculares e necrose tecidual."
      }
    ]
  },
  {
    "id": 90,
    "pergunta": "No Atendimento Pré-Hospitalar avançado, qual é o objetivo principal da inserção de uma agulha no plexo venoso medular do tecido ósseo esponjoso (Acesso Intraósseo - IO)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manter a colocação da agulha para nutrição prolongada por um período máximo de 48 horas.",
        "correta": false,
        "explicacao": "Incorreto. O acesso intraósseo não é projetado para nutrição prolongada e não deve permanecer por 48 horas devido ao risco de osteomielite (infecção óssea)."
      },
      {
        "id": "B",
        "texto": "Administrar drogas e quimioterapia diretamente no tecido ósseo por duração ilimitada.",
        "correta": false,
        "explicacao": "Incorreto. O acesso é de duração limitada (emergencial) e a administração de substâncias altamente cáusticas como quimioterápicos geralmente não é o foco na emergência aguda."
      },
      {
        "id": "C",
        "texto": "Facilitar a administração de fluidos e vários medicamentos emergenciais por um período máximo recomendado de 24 horas.",
        "correta": true,
        "explicacao": "Correto. O acesso intraósseo (IO) é uma via de infusão rápida e vital em emergências quando o acesso venoso periférico falha. A rede venosa intraóssea não colaba em estado de choque. No entanto, é uma medida temporária que deve ser substituída por acesso intravenoso em até 24 horas para evitar complicações infecciosas (PHTLS 10ª edição)."
      },
      {
        "id": "D",
        "texto": "Drenar o excesso de sangue da medula óssea em pacientes com hipertensão intracraniana.",
        "correta": false,
        "explicacao": "Incorreto. O acesso intraósseo é utilizado exclusivamente para infusão de substâncias (fluidos, medicamentos, sangue) para dentro do corpo do paciente (via de entrada), não para drenagem venosa."
      }
    ]
  },
  {
    "id": 91,
    "pergunta": "De acordo com o algoritmo de Scott modificado para avaliação de trauma, quais são as indicações clínicas e cinemáticas para o posicionamento de um estabilizador pélvico (cinta pélvica)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Apenas quando há a presença de lesões distrativas graves nos membros superiores.",
        "correta": false,
        "explicacao": "Incorreto. Embora a lesão distrativa seja um critério de alerta, ela isoladamente não justifica a amarração pélvica sem suspeita direcionada à bacia."
      },
      {
        "id": "B",
        "texto": "Mecanismo de lesão sugestivo de fratura pélvica, presença de taquicardia e hipotensão, Escala de Coma de Glasgow < 13, lesões distrativas e dor na região pélvica.",
        "correta": true,
        "explicacao": "Correto. O PHTLS (10ª edição) orienta a estabilização pélvica precoce em vítimas de trauma contuso grave que apresentem cinemática compatível combinada com sinais de choque inexplicado (taquicardia/hipotensão), alteração do nível de consciência, dor à palpação do anel pélvico ou presença de dor intensa em outro local que mascare a dor na bacia (lesão distrativa)."
      },
      {
        "id": "C",
        "texto": "Exclusivamente diante da ausência de taquicardia e hipotensão em vítimas de atropelamento.",
        "correta": false,
        "explicacao": "Incorreto. A presença de choque (taquicardia/hipotensão) é justamente um dos maiores indicadores da necessidade urgente de fechar o anel pélvico para tentar conter hemorragias retroperitoneais massivas."
      },
      {
        "id": "D",
        "texto": "Presença de dor pélvica isolada, descartando a necessidade caso o paciente esteja inconsciente.",
        "correta": false,
        "explicacao": "Incorreto. Pacientes inconscientes (GCS baixo) não podem relatar dor, portanto a estabilização pélvica deve ser aplicada profilaticamente com base na cinemática do trauma e nos sinais vitais."
      }
    ]
  },
  {
    "id": 92,
    "pergunta": "No contexto dos Primeiros Socorros Psicológicos (PSP), quando uma vítima de trauma agudo entra na resposta de 'congelamento' (freeze) ou 'desligamento' (shutdown), quais sentimentos ou comportamentos são mais prevalentes?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Segurança, tranquilidade e desejo de interagir socialmente.",
        "correta": false,
        "explicacao": "Incorreto. Esses são estados associados à regulação nervosa normal (zona de engajamento social), o oposto do estado de choque traumático."
      },
      {
        "id": "B",
        "texto": "Raiva intensa, frustração, agressividade e comportamento de luta.",
        "correta": false,
        "explicacao": "Incorreto. Esses sintomas descrevem a resposta simpática de hiperativação (luta/fuga), não a de desligamento ou congelamento vagal."
      },
      {
        "id": "C",
        "texto": "Ansiedade extrema, hipervigilância e ataques de pânico.",
        "correta": false,
        "explicacao": "Incorreto. Assim como a raiva, o pânico é uma resposta hiperativa do sistema nervoso (fuga), diferindo do estado apático do 'congelamento'."
      },
      {
        "id": "D",
        "texto": "Sensação de depressão, desamparo, desesperança, paralisia ou dormência emocional.",
        "correta": true,
        "explicacao": "Correto. Durante um evento traumático ou crise aguda, a resposta de 'congelamento' (colapso ou hipoativação) leva a vítima a um estado de apatia, desconexão com a realidade (dissociação), sensação de impotência extrema e dormência física/emocional."
      }
    ]
  },
  {
    "id": 93,
    "pergunta": "O Transtorno de Estresse Pós-Traumático (TEPT) é uma possível consequência após eventos críticos. Qual das seguintes categorias de sintomas NÃO faz parte das categorias diagnósticas principais do TEPT?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sintomas de intrusão (ex: flashbacks e pesadelos do evento).",
        "correta": false,
        "explicacao": "Incorreto. Os sintomas intrusivos, onde o paciente revive o trauma involuntariamente, são uma das principais marcas diagnósticas do TEPT."
      },
      {
        "id": "B",
        "texto": "Sintomas de esquiva persistente (evitar locais ou pessoas que lembrem o trauma).",
        "correta": false,
        "explicacao": "Incorreto. A esquiva traumática faz parte do núcleo central do TEPT, sendo um comportamento de proteção psicológica mal adaptativa."
      },
      {
        "id": "C",
        "texto": "Obsessões (pensamentos recorrentes irracionais) e compulsões (comportamentos repetitivos).",
        "correta": true,
        "explicacao": "Correto. Obsessões e compulsões não são sintomas de TEPT, mas sim as características definidoras do Transtorno Obsessivo-Compulsivo (TOC). O TEPT é focado em intrusão, esquiva, alterações de humor/cognição e hiperestimulação."
      },
      {
        "id": "D",
        "texto": "Alterações negativas na cognição e no humor e mudanças na excitação/reatividade.",
        "correta": false,
        "explicacao": "Incorreto. Hipervigilância, sobressaltos exagerados e crenças negativas persistentes são categorias essenciais de sintomas confirmados do TEPT."
      }
    ]
  },
  {
    "id": 94,
    "pergunta": "Após vivenciar ou atuar em um evento traumático, o socorrista ou a vítima pode experimentar sofrimento psicológico. Qual alternativa representa uma condição onde a pessoa ainda pode gerenciar o sofrimento sozinha, SEM precisar acionar ajuda de saúde mental profissional imediatamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Quando a pessoa tem pensamentos sobre causar danos a si mesma ou a outras pessoas.",
        "correta": false,
        "explicacao": "Incorreto. Ideação suicida ou homicida é uma emergência psiquiátrica absoluta (bandeira vermelha), exigindo intervenção profissional imediata."
      },
      {
        "id": "B",
        "texto": "Quando a pessoa percebe que sua capacidade de funcionar nas tarefas do dia a dia está diminuindo drasticamente.",
        "correta": false,
        "explicacao": "Incorreto. A incapacidade funcional (não conseguir levantar da cama, trabalhar ou cuidar de si) indica um quadro clínico que requer suporte especializado."
      },
      {
        "id": "C",
        "texto": "Quando os sinais de sofrimento psicológico não apresentam melhora ao longo de várias semanas.",
        "correta": false,
        "explicacao": "Incorreto. A cronificação do trauma (quando o sofrimento não diminui com o tempo) é um fator de risco para transtornos que demanda tratamento clínico."
      },
      {
        "id": "D",
        "texto": "Nenhuma das anteriores. Todas as opções acima exigem busca por suporte profissional de saúde mental.",
        "correta": true,
        "explicacao": "Correto. Pensamentos de automutilação, perda da funcionalidade diária, ausência de melhora natural com o tempo ou dependência crescente de substâncias são sinais de alerta críticos de que o sofrimento ultrapassou a capacidade de autocura e exige intervenção profissional especializada."
      }
    ]
  },
  {
    "id": 95,
    "pergunta": "No contexto de desastres ou emergências, os Primeiros Socorros Psicológicos (PSP) consistem no apoio inicial e pragmático para estabilizar o bem-estar mental das vítimas. Quem está apto a fornecer os PSP?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Exclusivamente médicos psiquiatras.",
        "correta": false,
        "explicacao": "Incorreto. O modelo de PSP não é uma terapia clínica profunda, não sendo exclusivo de médicos."
      },
      {
        "id": "B",
        "texto": "Apenas profissionais de saúde mental com pós-graduação.",
        "correta": false,
        "explicacao": "Incorreto. A exigência de alto grau de especialização limitaria o número de pessoas capazes de ajudar na linha de frente de desastres."
      },
      {
        "id": "C",
        "texto": "Qualquer pessoa (socorristas, leigos, voluntários) que seja adequadamente treinada nas habilidades de PSP.",
        "correta": true,
        "explicacao": "Correto. Segundo os manuais da OMS e protocolos internacionais de resposta a desastres, os Primeiros Socorros Psicológicos não são aconselhamento profissional. Eles baseiam-se em princípios de escuta ativa ('Look, Listen, Link') e podem e devem ser aplicados por qualquer pessoa leiga ou socorrista previamente treinado."
      },
      {
        "id": "D",
        "texto": "Assistentes sociais vinculados ao Estado apenas.",
        "correta": false,
        "explicacao": "Incorreto. Limitar o atendimento a assistentes sociais restringe a capacidade de resposta comunitária imediata durante a fase aguda de uma crise."
      }
    ]
  },
  {
    "id": 96,
    "pergunta": "Dentre o tratamento do estado de choque relacionado abaixo, qual das atitudes NÃO deve ser tomada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Prevenir a perda de calor corporal.",
        "correta": false,
        "explicacao": "Incorreto. Aquecer a vítima é uma medida correta no tratamento do choque para prevenir a hipotermia."
      },
      {
        "id": "B",
        "texto": "Afrouxar roupas apertadas.",
        "correta": false,
        "explicacao": "Incorreto. Afrouxar as roupas facilita a circulação e o trabalho respiratório da vítima em choque."
      },
      {
        "id": "C",
        "texto": "Oferecer água para beber.",
        "correta": true,
        "explicacao": "Correto. Nunca se deve oferecer líquidos (ou alimentos) a uma vítima em estado de choque. Há grande risco de engasgo/broncoaspiração caso a vítima perca a consciência, e o estômago vazio é necessário caso ela precise de cirurgia de emergência hospitalar."
      },
      {
        "id": "D",
        "texto": "Controlar hemorragias externas.",
        "correta": false,
        "explicacao": "Incorreto. O controle de hemorragias externas massivas é a primeira e mais vital ação para tratar ou prevenir o choque hipovolêmico."
      }
    ]
  },
  {
    "id": 97,
    "pergunta": "Quais são as três principais causas do choque circulatório?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Perda de líquidos, respiração rápida e sede.",
        "correta": false,
        "explicacao": "Incorreto. Respiração rápida e sede são sintomas (consequências) do estado de choque, e não suas causas estruturais."
      },
      {
        "id": "B",
        "texto": "Stress, pulso fraco e falha no coração.",
        "correta": false,
        "explicacao": "Incorreto. O pulso fraco é um sintoma compensatório. Embora o choque psicogênico (estresse agudo) e a falha no coração existam, essa alternativa não resume as três categorias principais de causas do choque."
      },
      {
        "id": "C",
        "texto": "Falha do coração, perda de líquidos e dilatação excessiva dos vasos sanguíneos.",
        "correta": true,
        "explicacao": "Correto. Fisiologicamente, o choque ocorre devido à falha de um ou mais dos 3 componentes do sistema circulatório: a bomba (falha do coração / choque cardiogênico), o volume (perda de líquidos / choque hipovolêmico) ou os tubos (dilatação excessiva dos vasos sanguíneos / choque distributivo)."
      },
      {
        "id": "D",
        "texto": "Falha do coração, perda de líquidos e pulso rápido.",
        "correta": false,
        "explicacao": "Incorreto. O pulso rápido (taquicardia) é um sinal de que o corpo está tentando compensar o choque, não a causa do problema."
      }
    ]
  },
  {
    "id": 98,
    "pergunta": "Definimos o choque anafilático como uma reação alérgica a:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Insetos, bebidas alcoólicas, poeira, medicamentos.",
        "correta": false,
        "explicacao": "Incorreto. Embora medicamentos e insetos sejam causas comuns, bebidas alcoólicas e poeira são gatilhos muito raros para uma anafilaxia sistêmica grave com risco de morte."
      },
      {
        "id": "B",
        "texto": "Medicamentos, insetos, comida, substâncias tóxicas.",
        "correta": true,
        "explicacao": "Correto. O choque anafilático é a forma mais severa de reação alérgica, frequentemente desencadeada por picadas de insetos (como abelhas), alimentos (como amendoim ou frutos do mar) e certos medicamentos (como antibióticos)."
      },
      {
        "id": "C",
        "texto": "Substâncias tóxicas, inflamáveis, animais e pólen de flores.",
        "correta": false,
        "explicacao": "Incorreto. Substâncias inflamáveis causam dano por meios térmicos ou inalação, não por reações de hipersensibilidade do sistema imunológico."
      },
      {
        "id": "D",
        "texto": "Medicamentos, insetos, pólen de flores, substâncias corrosivas.",
        "correta": false,
        "explicacao": "Incorreto. Substâncias corrosivas causam lesões e queimaduras químicas locais, não choque anafilático."
      }
    ]
  },
  {
    "id": 99,
    "pergunta": "São sinais e sintomas de hemorragias, EXCETO:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pele fria, sudorese intensa, palidez.",
        "correta": false,
        "explicacao": "Incorreto. Esses são sinais compensatórios clássicos da hemorragia. O corpo restringe o sangue da pele (causando palidez e pele fria) para mantê-lo nos órgãos vitais."
      },
      {
        "id": "B",
        "texto": "Pulso acelerado, respiração rápida.",
        "correta": false,
        "explicacao": "Incorreto. A taquicardia e a taquipneia ocorrem porque o corpo tenta aumentar a entrega de oxigênio com o volume de sangue reduzido."
      },
      {
        "id": "C",
        "texto": "Pressão baixa, agitação.",
        "correta": false,
        "explicacao": "Incorreto. A pressão cai no choque descompensado por hemorragia, e a agitação ocorre devido à falta de oxigenação no cérebro."
      },
      {
        "id": "D",
        "texto": "Flacidez abdominal, sangue visível.",
        "correta": true,
        "explicacao": "Correto. Na hemorragia interna abdominal, o sangue irrita a cavidade, resultando no sintoma de rigidez abdominal (conhecido como abdome em tábua) e não em flacidez. Além disso, hemorragias internas frequentemente não apresentam 'sangue visível'."
      }
    ]
  },
{
"id": 100,
"pergunta": "Sobre o uso da pressão direta, assinale a incorreta:",
"alternativas": [
{
"id": "A",
"texto": "O primeiro contato deve ser sempre a pressão direta",
"correta": false,
"explicacao": "A afirmação é verdadeira no manejo geral de traumas. A compressão manual direta é o passo inicial e padrão-ouro para o controle da imensa maioria das hemorragias externas, portanto não é a alternativa incorreta."
},
{
"id": "B",
"texto": "Realizar somente em ferimentos que não possuem evidência de fratura exposta",
"correta": false,
"explicacao": "A afirmação é verdadeira. Não se deve aplicar pressão forte e direta sobre fragmentos de ossos fraturados e expostos, pois isso agrava a lesão neurovascular e a dor. Logo, não é a incorreta."
},
{
"id": "C",
"texto": "É feita para impedir que o sangue saia pelo ferimento e na maioria dos casos de sangramentos não ativos, é perfeitamente efetiva",
"correta": false,
"explicacao": "A afirmação é verdadeira. A pressão direta mecânica oclui os vasos sangrantes e permite a cascata de coagulação, sendo altamente eficaz para quase todos os sangramentos comuns."
},
{
"id": "D",
"texto": "Mutilação é um exemplo de situação que requer compressão direta",
"correta": true,
"explicacao": "Correto (esta é a afirmação falsa/incorreta). Em casos de mutilação ou amputação traumática de extremidades, onde a hemorragia é invariavelmente massiva e exsanguinante, a compressão direta falha em conter o fluxo arterial. O protocolo atual do PHTLS (10ª edição) determina a aplicação imediata e prioritária do torniquete."
}
]
},
  {
    "id": 101,
    "pergunta": "O trote passado por crianças é um problema que centrais de emergência enfrentam todos os dias, congestionam linhas telefônicas e induzem o despacho de viaturas e efetivo para ocorrências inexistentes. Diante disso, que providências tomar para a conscientização de crianças e adolescentes na escola?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Deixar que os pais conscientizem seus filhos, pois a responsabilidade não é da escola.",
        "correta": false,
        "explicacao": "A escola também tem papel fundamental na educação cidadã e na prevenção de comportamentos de risco social, não devendo se omitir."
      },
      {
        "id": "B",
        "texto": "Não fazer nada, pois a ocorrência não é tão relevante assim e pode ser facilmente contornada.",
        "correta": false,
        "explicacao": "Os trotes são de extrema gravidade, pois deslocam recursos vitais e limitados (como ambulâncias e viaturas de resgate) para ocorrências falsas, podendo custar a vida de vítimas reais que aguardam atendimento."
      },
      {
        "id": "C",
        "texto": "É papel dos órgãos desenvolverem programas de conscientização da população.",
        "correta": true,
        "explicacao": "Correto. É fundamental a integração entre as instituições de ensino e os órgãos de emergência (Bombeiros, SAMU, Defesa Civil) para a formulação de programas educativos e de conscientização (como o SAMU nas Escolas ou o Bombeiro Mirim), educando precocemente sobre as consequências do acionamento indevido."
      },
      {
        "id": "D",
        "texto": "Deixar as crianças de castigo quando souberem de uma situação de trote dentro da escola.",
        "correta": false,
        "explicacao": "Medidas puramente punitivas e isoladas não tratam o aspecto pedagógico e comunitário do problema da mesma forma que a educação preventiva."
      }
    ]
  },
  {
    "id": 102,
    "pergunta": "Sobre os serviços públicos de emergência, podemos citar como correto:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Os serviços privados e públicos de emergências são de responsabilidade do Estado e prestados de forma conjunta sempre.",
        "correta": false,
        "explicacao": "Serviços privados operam sob regime e contratação próprios, não sendo de provimento obrigatório e gratuito sob a responsabilidade do Estado."
      },
      {
        "id": "B",
        "texto": "Os serviços públicos de emergências são de responsabilidade do Estado e prestados por instituições governamentais de forma paga, mediante boleto.",
        "correta": false,
        "explicacao": "O acesso à saúde e à segurança no Brasil através do sistema público (SUS e Segurança Pública) baseia-se na universalidade e na não cobrança no momento do atendimento."
      },
      {
        "id": "C",
        "texto": "Os serviços públicos de emergências são de responsabilidade do Estado e prestados por instituições governamentais de forma gratuita, com a finalidade de preservar a vida dando assistência em emergências.",
        "correta": true,
        "explicacao": "Correto. O serviço de Atendimento Pré-Hospitalar (como o 192 e o 193) é financiado por tributos e deve ser provido pelas esferas governamentais gratuitamente no ato do socorro, constituindo um direito básico do cidadão em situações de risco à vida."
      },
      {
        "id": "D",
        "texto": "Os serviços públicos de emergências são de responsabilidade exclusiva dos municípios, não havendo participação Estadual ou Federal.",
        "correta": false,
        "explicacao": "O financiamento e a organização dos serviços de urgência (como o SAMU) funcionam de forma tripartite (União, Estado e Municípios), sendo um esforço conjunto."
      }
    ]
  },
  {
    "id": 103,
    "pergunta": "Em uma situação de emergência é necessário observar a cena para verificar de forma global os fatores que causaram a situação. É nessa fase também que verificamos os riscos e ameaças potenciais. Sobre a avaliação da cena, qual das alternativas NÃO corresponde a uma observação acertada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Concentrar atenção total na vítima desconsiderando os perigos no entorno da cena.",
        "correta": true,
        "explicacao": "Correto (é a alternativa incorreta para a prática do APH). A primeira regra internacional de salvamento (PHTLS / AHA) é garantir a segurança da cena ('Scene Safety'). O socorrista nunca deve se focar na vítima (visão de túnel) ao ponto de ignorar o entorno, pois pode se ferir e se tornar a próxima vítima."
      },
      {
        "id": "B",
        "texto": "Localizar pregos enferrujados, vidros e outros materiais cortantes e perfurantes nos arredores.",
        "correta": false,
        "explicacao": "Esta é uma ação correta na fase de dimensionamento da cena para proteger o socorrista e evitar agravos para a vítima."
      },
      {
        "id": "C",
        "texto": "Verificar a existência de produtos de limpeza ou tóxicos abertos ou vazando.",
        "correta": false,
        "explicacao": "Esta observação é fundamental. Ambientes com produtos químicos perigosos (HazMat) exigem recuo e acionamento de equipe especializada antes da intervenção humana."
      },
      {
        "id": "D",
        "texto": "Observar a existência de espaços com desnível acentuado ou locais com risco de queda e sem proteção.",
        "correta": false,
        "explicacao": "Identificar riscos iminentes (físicos, mecânicos e cinemáticos), como alturas e instabilidade do terreno, é um passo fundamental da avaliação primária do local."
      }
    ]
  },
  {
    "id": 104,
    "pergunta": "De acordo com a Lei nº 2848/1940 - Código Penal, em seu Art. 266 que trata sobre perturbação ou interrupção de serviço telefônico (no contexto de trotes aos números de emergência), cabe como pena:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Detenção de um a três anos e multa.",
        "correta": true,
        "explicacao": "Correto. O artigo 266 do Código Penal prevê que a conduta de interromper ou perturbar o serviço telegráfico, radiotelegráfico ou telefônico (frequentemente utilizado para enquadrar os trotes sistemáticos aos serviços de urgência) acarreta a pena de detenção de 1 a 3 anos e aplicação de multa."
      },
      {
        "id": "B",
        "texto": "Prisão de um a três anos e multa.",
        "correta": false,
        "explicacao": "O termo jurídico correto constante no artigo para este nível de penalidade é 'Detenção', e não 'Prisão' (reclusão), refletindo o rigor previsto no tipo penal."
      },
      {
        "id": "C",
        "texto": "Prestação obrigatória de serviços comunitários e notificação judicial.",
        "correta": false,
        "explicacao": "Embora penas alternativas possam ser aplicadas judicialmente como substituição posterior, a pena base capitulada no Código Penal é estritamente a detenção somada à multa."
      },
      {
        "id": "D",
        "texto": "Apenas advertência formal, não havendo implicação penal grave para trotes telefônicos.",
        "correta": false,
        "explicacao": "O trote aos serviços de urgência e segurança é um problema muito grave que expõe a população a risco letal, sendo tipificado penalmente e resultando em persecução criminal."
      }
    ]
  },
  {
    "id": 105,
    "pergunta": "O atendimento realizado pelo SAMU é baseado em diversos objetivos. Assinale a alternativa INCORRETA a respeito da prestação deste serviço:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Atendimento de casos clínicos agudos.",
        "correta": false,
        "explicacao": "A afirmação é verdadeira, portanto não é a resposta procurada. O SAMU é acionado diariamente para intervir em urgências clínicas graves, como suspeitas de infarto, acidentes vasculares cerebrais (AVC) e crises respiratórias, sendo um de seus objetivos centrais."
      },
      {
        "id": "B",
        "texto": "Regulação do sistema de vagas de urgência em hospitais secundários e terciários.",
        "correta": false,
        "explicacao": "A afirmação é verdadeira. Através da Central de Regulação Médica, o SAMU não apenas envia ambulâncias, mas organiza a rede de saúde, avaliando a gravidade e garantindo que o paciente seja direcionado ao hospital com o recurso adequado para o seu caso."
      },
      {
        "id": "C",
        "texto": "Coordenação das ações estaduais de ajuda humanitária nacional e internacional.",
        "correta": true,
        "explicacao": "Correto (esta é a afirmação incorreta sobre o SAMU). A gestão macro de ajuda humanitária em desastres e o envio de recursos internacionais são competências da Defesa Civil, Corpos de Bombeiros e Forças Armadas, e não a atribuição direta do serviço rotineiro do SAMU."
      },
      {
        "id": "D",
        "texto": "Educação em urgência e emergência.",
        "correta": false,
        "explicacao": "A afirmação é verdadeira. O SAMU atua de forma preventiva e educativa através dos Núcleos de Educação Permanente (NEP), que são responsáveis pelo treinamento contínuo de seus profissionais e por projetos de conscientização na comunidade (como o SAMU nas Escolas)."
      }
    ]
  },
  {
    "id": 106,
    "pergunta": "O(A) _________ é caracterizado(a) pela distensão brusca de uma articulação, além de seu grau normal de amplitude. Por sua vez, a _________ é o desalinhamento das extremidades ósseas fazendo com que as superfícies articulares percam o contato entre si. Estes dois tipos de lesão apresentam como sinais e sintomas: dor, edema, e _________, sendo que a luxação também apresenta _________. Assinale a alternativa que preenche corretamente as lacunas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Entorse; Luxação; impotência funcional; deformidade.",
        "correta": true,
        "explicacao": "Correto. Segundo os preceitos do PHTLS (10ª edição) no atendimento ao trauma musculoesquelético, a entorse afeta os ligamentos por distensão, enquanto a luxação é o deslocamento articular completo. Ambas causam dor, inchaço (edema) e perda de função (impotência funcional), mas a luxação se destaca pela deformidade anatômica visível."
      },
      {
        "id": "B",
        "texto": "Luxação; Entorse; impotência funcional; uniformidade.",
        "correta": false,
        "explicacao": "Incorreto. A alternativa inverte os conceitos de entorse e luxação. Além disso, utiliza o termo 'uniformidade' de maneira equivocada, pois a característica visual de uma luxação é justamente a perda da simetria e a presença de deformidade anatômica."
      },
      {
        "id": "C",
        "texto": "Luxação; Entorse; potência funcional; uniformidade.",
        "correta": false,
        "explicacao": "Incorreto. Além de inverter as definições anatômicas das lesões, sugere que a vítima teria 'potência funcional' (capacidade de mover o membro), o que contraria a clínica de dor intensa e limitação de movimento típica do trauma musculoesquelético."
      },
      {
        "id": "D",
        "texto": "Entorse; Luxação; potência funcional; deformidade.",
        "correta": false,
        "explicacao": "Incorreto. Embora a ordem de Entorse e Luxação esteja correta, o termo 'potência funcional' está errado. O trauma articular agudo causa 'impotência funcional' (incapacidade de usar a articulação), não o aumento ou manutenção de sua potência."
      }
    ]
  },
  {
    "id": 107,
    "pergunta": "No contexto da prevenção em Primeiros Socorros, assinale a alternativa que NÃO representa uma medida preventiva adequada para evitar acidentes com animais peçonhentos:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Utilizar luvas de proteção, preferencialmente de couro, para amontoar e recolher lixos ou entulhos.",
        "correta": false,
        "explicacao": "Incorreto (pois a afirmação é uma medida correta). O uso de Equipamentos de Proteção Individual (EPIs), como luvas de couro raspa, é amplamente recomendado para evitar picadas nas mãos ao manipular locais onde aranhas, escorpiões ou serpentes podem se abrigar."
      },
      {
        "id": "B",
        "texto": "Jamais colocar a mão desprotegida dentro de frestas, buracos no chão, tocas de tatus e cupinzeiros.",
        "correta": false,
        "explicacao": "Incorreto (pois a afirmação é uma medida correta). Inserir membros em locais escuros e abrigados é um dos principais fatores de risco para acidentes ofídicos e aracnídeos. Evitar essa ação é uma regra básica de segurança em áreas silvestres ou rurais."
      },
      {
        "id": "C",
        "texto": "Deixar lixo ou material de construção amontoado em áreas internas e externas da edificação.",
        "correta": true,
        "explicacao": "Correto (esta é a atitude que NÃO deve ser tomada). O acúmulo de lixo atrai roedores e insetos, que são a base da cadeia alimentar de serpentes, escorpiões e aranhas. Manter o ambiente limpo e livre de entulhos é a principal estratégia de controle ambiental."
      },
      {
        "id": "D",
        "texto": "Manter berços, camas e sofás afastados das paredes para evitar o acesso de animais rastejantes.",
        "correta": false,
        "explicacao": "Incorreto (pois a afirmação é uma medida correta). Escorpiões e aranhas frequentemente utilizam paredes para se deslocar. Afastar os móveis cria uma barreira física que dificulta o acesso do animal peçonhento à vítima durante o repouso."
      }
    ]
  },
  {
    "id": 108,
    "pergunta": "Na avaliação do trauma ortopédico, a _________ é o desalinhamento das extremidades ósseas, fazendo com que as superfícies articulares percam o contato entre si. O(A) _________ é caracterizado(a) pela distensão brusca de uma articulação, além de seu grau normal de amplitude. Assinale a alternativa que preenche corretamente as lacunas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fratura; Luxação.",
        "correta": false,
        "explicacao": "Incorreto. Fratura é a perda de continuidade do tecido ósseo (quebra), não o mero desalinhamento articular. A luxação, por sua vez, é a perda de contato articular, e não uma distensão de amplitude."
      },
      {
        "id": "B",
        "texto": "Entorse; Fratura.",
        "correta": false,
        "explicacao": "Incorreto. Entorse é a lesão ligamentar, não a perda de contato entre as superfícies ósseas. Fratura refere-se à quebra do osso, não à distensão brusca de uma articulação."
      },
      {
        "id": "C",
        "texto": "Entorse; Luxação.",
        "correta": false,
        "explicacao": "Incorreto. A alternativa inverte os conceitos. A entorse não gera perda de contato articular permanente (desalinhamento ósseo contínuo), e a luxação não é apenas uma distensão brusca, mas sim o desencaixe completo da junta."
      },
      {
        "id": "D",
        "texto": "Luxação; Entorse.",
        "correta": true,
        "explicacao": "Correto. O PHTLS define a Luxação como o deslocamento completo das superfícies articulares (perda de contato). Já a Entorse ocorre quando a articulação é forçada além de sua amplitude normal, estirando ou rompendo ligamentos, mas os ossos retornam à posição."
      }
    ]
  },
  {
    "id": 109,
    "pergunta": "A Cadeia de Sobrevivência do Afogamento destaca a prevenção como o elo mais importante. Quanto aos cuidados básicos e ambientais para evitar afogamentos, qual das atitudes abaixo NÃO devemos tomar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Deixar crianças desacompanhadas ou sob a supervisão de outra criança em áreas de risco aquático.",
        "correta": true,
        "explicacao": "Correto (esta é a atitude que NÃO deve ser tomada). A Diretriz da AHA (2020) é categórica: a supervisão visual ativa, ininterrupta e por um adulto capaz ('vigilante da água') é a medida isolada mais importante para prevenir o afogamento pediátrico. Lapsos de poucos segundos são fatais."
      },
      {
        "id": "B",
        "texto": "Manter tanques, baldes, bacias e vasos sanitários vazios, tampados ou com travas de proteção.",
        "correta": false,
        "explicacao": "Incorreto (pois esta é uma atitude correta). Crianças pequenas, especialmente bebês com a coordenação motora em desenvolvimento, podem se afogar em lâminas de água de apenas 3 a 5 centímetros, comuns em baldes e vasos sanitários domésticos."
      },
      {
        "id": "C",
        "texto": "Instalar cercas de isolamento contínuo em todos os perímetros de piscinas residenciais e clubes.",
        "correta": false,
        "explicacao": "Incorreto (pois esta é uma atitude correta). O isolamento perimetral de piscinas (cercas de 4 lados, com portão de fechamento automático) é uma das intervenções de engenharia mais comprovadas cientificamente para reduzir a mortalidade por afogamento."
      },
      {
        "id": "D",
        "texto": "Manter atenção visual constante à movimentação das pessoas e respeito à sinalização nas praias.",
        "correta": false,
        "explicacao": "Incorreto (pois esta é uma atitude correta). A prevenção em águas abertas envolve a supervisão contínua, o banho próximo a postos de guarda-vidas e o respeito estrito às bandeiras de sinalização sobre correntes de retorno ou áreas perigosas."
      }
    ]
  },
  {
    "id": 110,
    "pergunta": "Quais das situações descritas abaixo NÃO corresponde a um sintoma?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Palidez.",
        "correta": true,
        "explicacao": "Correto. A palidez é um 'sinal' clínico, ou seja, uma alteração objetiva que pode ser observada e verificada pelo socorrista. Sintomas (como dor ou tontura) são queixas subjetivas sentidas e relatadas exclusivamente pela vítima."
      },
      {
        "id": "B",
        "texto": "Tontura.",
        "correta": false,
        "explicacao": "A tontura é um sintoma, pois trata-se de uma percepção subjetiva do paciente que não pode ser medida ou vista diretamente por quem presta o socorro."
      },
      {
        "id": "C",
        "texto": "Fraqueza.",
        "correta": false,
        "explicacao": "A sensação de fraqueza é um sintoma, uma experiência interna relatada pela vítima durante a anamnese (entrevista)."
      },
      {
        "id": "D",
        "texto": "Enjoo.",
        "correta": false,
        "explicacao": "Náuseas e enjoos são sintomas clássicos, sentidos pelo paciente. Somente se tornam um sinal caso o paciente chegue a vomitar (êmese), o que é visível ao socorrista."
      }
    ]
  },
  {
    "id": 111,
    "pergunta": "Do nascimento até a fase adulta, existem entendimentos diversos sobre as idades que englobam a fase de lactente, criança e adulto. Para os protocolos de Suporte Básico de Vida no Atendimento Pré-Hospitalar (AHA), quais são as delimitações corretas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lactente até 1 ano; Criança de 1 ano até 10 anos; Adulto a partir de 10 anos.",
        "correta": false,
        "explicacao": "As diretrizes não utilizam a idade cronológica exata de 10 anos como limite para a fase adulta em ressuscitação."
      },
      {
        "id": "B",
        "texto": "Lactente até 2 anos; Criança de 2 anos até 12 anos; Adulto a partir de 12 anos.",
        "correta": false,
        "explicacao": "A fase de lactente, segundo os protocolos de RCP, estende-se apenas até 1 ano de idade, e não até os 2 anos."
      },
      {
        "id": "C",
        "texto": "Lactente até 1 ano; Criança de 1 ano até a puberdade; Adulto a partir da puberdade.",
        "correta": true,
        "explicacao": "Correto. Segundo a American Heart Association (AHA), para fins de manobras de RCP, lactentes são menores de 1 ano; crianças possuem de 1 ano até os primeiros sinais de puberdade (desenvolvimento de mamas nas meninas ou pelos axilares/peitorais nos meninos); e a partir daí são considerados adultos."
      },
      {
        "id": "D",
        "texto": "Lactente até 6 meses; Criança de 6 meses a 14 anos; Adulto a partir de 14 anos.",
        "correta": false,
        "explicacao": "Esta divisão não possui respaldo nas diretrizes de cardiologia e trauma de emergência, que utilizam marcos de desenvolvimento (puberdade) e o limite de 1 ano para bebês."
      }
    ]
  },
  {
    "id": 112,
    "pergunta": "Ao realizar a avaliação primária de uma vítima de trauma, qual das condutas abaixo você NÃO deve tomar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Avaliar o nível de consciência, checando se a vítima está responsiva ou não.",
        "correta": false,
        "explicacao": "Avaliar a responsividade é um passo correto e obrigatório logo no contato inicial com o paciente."
      },
      {
        "id": "B",
        "texto": "Acionar um serviço médico de emergência precocemente.",
        "correta": false,
        "explicacao": "Acionar o socorro especializado (SAMU/Bombeiros) assim que reconhecer a gravidade da situação é uma conduta correta e essencial na cadeia de sobrevivência."
      },
      {
        "id": "C",
        "texto": "Movimentar a vítima que está deitada para poder conversar melhor com ela.",
        "correta": true,
        "explicacao": "Correto (esta é a conduta que NÃO deve ser feita). Uma regra de ouro do APH é que vítimas de trauma não devem ser movidas, exceto em caso de risco iminente de morte no local (fogo, explosão). Movê-la desnecessariamente pode agravar lesões na coluna cervical e causar paralisia irreversível."
      },
      {
        "id": "D",
        "texto": "Formar uma impressão geral da vítima e da cena.",
        "correta": false,
        "explicacao": "Formar uma impressão geral rápida (identificar hemorragias massivas, idade aparente e estado geral) é uma conduta corretíssima e o primeiro passo do 'XABCDE' do trauma."
      }
    ]
  },
  {
    "id": 113,
    "pergunta": "Os ____________ são sensações que a vítima experimenta e é capaz de descrever. Quando a vítima estiver consciente, pergunte se sente dor e o local exato. Já os ______________ são detalhes que você poderá descobrir fazendo o uso dos sentidos - visão, tato, audição e olfato – durante a avaliação da vítima.",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sinais e Sintomas",
        "correta": false,
        "explicacao": "Incorreto. A ordem está invertida. Os sinais são os achados objetivos (vistos ou sentidos pelo socorrista) e os sintomas são os achados subjetivos (relatados pela vítima)."
      },
      {
        "id": "B",
        "texto": "Sinais e Saúde",
        "correta": false,
        "explicacao": "Incorreto. A terminologia técnica para a queixa da vítima não é 'saúde', e sim 'sintoma'. Além disso, a ordem do primeiro termo está errada."
      },
      {
        "id": "C",
        "texto": "Sentimentos e Sinais",
        "correta": false,
        "explicacao": "Incorreto. O termo clínico correto no APH para descrever as queixas físicas (como dor) é 'sintoma', e não 'sentimento', que remete ao estado emocional."
      },
      {
        "id": "D",
        "texto": "Sintomas e Sinais",
        "correta": true,
        "explicacao": "Correto. Segundo a base de avaliação de pacientes (PHTLS), 'sintomas' são subjetivos (o que o paciente sente e relata, como dor ou náusea), enquanto 'sinais' são objetivos (o que o socorrista observa, palpa ou ouve, como deformidades, palidez ou respiração ruidosa)."
      }
    ]
  },
  {
    "id": 114,
    "pergunta": "Quando você se depara com alguém em uma situação de emergência médica, seja dentro da escola ou fora dela, qual a primeira atitude a tomar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ligar 193 ou 192",
        "correta": false,
        "explicacao": "Incorreto. Embora acionar o socorro seja fundamental e uma das primeiras etapas, não deve preceder a avaliação de segurança do local. Se você ligar enquanto está em uma área de risco não percebida, pode se tornar uma vítima também."
      },
      {
        "id": "B",
        "texto": "Abordar a vítima",
        "correta": false,
        "explicacao": "Incorreto. Abordar a vítima diretamente (visão de túnel) sem olhar o entorno viola o princípio número um do socorrismo, colocando a vida do próprio socorrista em risco."
      },
      {
        "id": "C",
        "texto": "Conduzi-la até um local seguro",
        "correta": false,
        "explicacao": "Incorreto. Vítimas de emergências (especialmente trauma) não devem ser movidas a menos que haja risco iminente de morte (fogo, desabamento). Movimentá-la desnecessariamente pode agravar lesões na coluna."
      },
      {
        "id": "D",
        "texto": "Avaliar a cena",
        "correta": true,
        "explicacao": "Correto. De acordo com as diretrizes internacionais da AHA e do PHTLS, a primeiríssima atitude em qualquer emergência é a 'Avaliação de Segurança da Cena' (Scene Safety). O socorrista deve garantir que o local é seguro para ele, para os curiosos e para a vítima antes de qualquer outra ação."
      }
    ]
  },
  {
    "id": 115,
    "pergunta": "Sobre os principais tipos de choque, relacione corretamente as colunas:\n( ) Reação alérgica severa\n( ) Causado pela perda de fluidos corpóreos intensos (diarreias e vómitos)\n( ) É choque do desfalecimento. Ocorre quando por algum fator, como por exemplo um forte estresse ou medo\n( ) Por hemorragias graves\n( ) Por insuficiência cardíaca\n( ) Pode ter diversas causas, mas todas devido à danificação do sistema nervoso autônomo\n( ) Por falência do sistema respiratório\n( ) Por falência circulatória aguda de causa infecciosa\n\n1 Choque hemorrágico ou hipovolêmico\n2 Choque cardiogênico\n3 Choque neurogênico\n4 Choque anafilático\n5 Choque metabólico\n6 Choque psicogênico\n7 Choque séptico\n8 Choque respiratório\n\nAssinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "4, 5, 6, 1, 2, 3, 8 e 7",
        "correta": true,
        "explicacao": "Correto. O alinhamento exato é: Anafilático (reação alérgica - 4), Metabólico (perda de fluidos não-sanguíneos - 5), Psicogénico (síncope por stresse - 6), Hipovolémico/Hemorrágico (perda de sangue - 1), Cardiogénico (falha da bomba - 2), Neurogénico (perda do tónus vascular por dano nervoso - 3), Respiratório (hipóxia - 8) e Séptico (infecção grave - 7). Esta classificação reflete as etiologias ensinadas nos protocolos de trauma e emergência médica."
      },
      {
        "id": "B",
        "texto": "5, 4, 6, 1, 2, 3, 8 e 7",
        "correta": false,
        "explicacao": "Incorreto. A primeira afirmação refere-se a uma reação alérgica severa (choque anafilático - 4), e não a um choque metabólico (5)."
      },
      {
        "id": "C",
        "texto": "5, 4, 7, 1, 3, 2, 8 e 6",
        "correta": false,
        "explicacao": "Incorreto. Para além do erro inicial entre metabólico e anafilático, a falência circulatória infecciosa é o choque séptico (7), e não psicogénico (6)."
      },
      {
        "id": "D",
        "texto": "4, 5, 7, 1, 3, 2, 8 e 6",
        "correta": false,
        "explicacao": "Incorreto. O desfalecimento por medo (síncope) é o choque psicogénico (6), e não séptico (7). A falência infeciosa é séptica (7), e não psicogénica (6)."
      }
    ]
  },
  {
    "id": 116,
    "pergunta": "Dentre as alternativas abaixo, indique a que NÃO está relacionada às causas fisiológicas que levam um paciente ao estado de choque (hipoperfusão tecidual):",
    "alternativas": [
      {
        "id": "A",
        "texto": "Falha do coração",
        "correta": false,
        "explicacao": "Incorreto (pois é uma causa). A falha da bomba cardíaca resulta no chamado choque cardiogénico, uma das três causas clássicas do estado de choque sistémico."
      },
      {
        "id": "B",
        "texto": "Perda de peso súbita",
        "correta": true,
        "explicacao": "Correto (é a exceção). A perda de peso súbita pode indicar diversas patologias clínicas (como problemas endócrinos ou oncológicos), mas não é uma causa mecânica/fisiológica aguda para o estado de choque circulatório, que depende de volume, bomba ou tónus vascular."
      },
      {
        "id": "C",
        "texto": "Perda de líquidos",
        "correta": false,
        "explicacao": "Incorreto (pois é uma causa). A perda severa de fluidos (sangue, plasma ou água celular) leva ao choque hipovolémico, reduzindo o volume circulante."
      },
      {
        "id": "D",
        "texto": "Dilatação excessiva dos vasos sanguíneos",
        "correta": false,
        "explicacao": "Incorreto (pois é uma causa). A vasodilatação extrema (perda da resistência vascular periférica) causa o choque distributivo (ex: anafilaxia, sépsis, neurogénico), impedindo a manutenção da pressão arterial adequada."
      }
    ]
  },
  {
    "id": 117,
    "pergunta": "São técnicas e dispositivos validados para o controlo de hemorragias externas massivas, EXCETO:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Curativo compressivo",
        "correta": false,
        "explicacao": "Incorreto (pois é uma técnica válida). O curativo compressivo é o passo que se segue à pressão manual direta, mantendo a compressão sobre a ferida de forma contínua e libertando as mãos do socorrista."
      },
      {
        "id": "B",
        "texto": "Curativo oclusivo",
        "correta": true,
        "explicacao": "Correto (é a exceção). O curativo oclusivo (com plástico ou material impermeável selado em três lados) é utilizado especificamente para ferimentos abertos no tórax (pneumotórax aberto), com o objetivo de impedir a entrada de ar, e não para o controlo de hemorragias ativas."
      },
      {
        "id": "C",
        "texto": "Torniquete",
        "correta": false,
        "explicacao": "Incorreto (pois é uma técnica válida). O torniquete comercial é a técnica padrão de primeira linha (segundo o PHTLS 10ª edição) para o controlo imediato de hemorragias exsanguinantes em extremidades (braços e pernas)."
      },
      {
        "id": "D",
        "texto": "Pressão manual direta",
        "correta": false,
        "explicacao": "Incorreto (pois é uma técnica válida). A pressão firme, contínua e direta sobre o local do sangramento é a intervenção inicial e universal no algoritmo de controlo de hemorragias externas."
      }
    ]
  },
  {
    "id": 118,
    "pergunta": "Qual alternativa demonstra a sequência convencional mais adequada de tratamento para controlar uma hemorragia externa severa numa extremidade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Elevação do ponto de sangramento, compressão sobre os pontos arteriais, compressão direta sobre o ferimento.",
        "correta": false,
        "explicacao": "A elevação de membros e a compressão indireta de pontos arteriais à distância (ex: apertar a artéria braquial no braço para um corte na mão) foram removidas dos protocolos modernos de APH devido à sua ineficácia comprovada."
      },
      {
        "id": "B",
        "texto": "Compressão direta sobre o ferimento, curativo compressivo e, se necessário, torniquete.",
        "correta": true,
        "explicacao": "Correto. O protocolo padrão ensina a iniciar com pressão direta forte no local exato do sangramento. Caso esta falhe ou a hemorragia seja massiva desde o início numa extremidade, aplica-se o torniquete imediatamente (PHTLS 10ª ed)."
      },
      {
        "id": "C",
        "texto": "Aplicação de gelo, seguida de torniquete frouxo e compressão indireta.",
        "correta": false,
        "explicacao": "O uso de gelo não controla hemorragias massivas ativas e um torniquete frouxo piora o sangramento ao ocluir apenas o retorno venoso, devendo ser sempre aplicado de forma justa e apertada até à paragem do pulso distal."
      },
      {
        "id": "D",
        "texto": "Curativo oclusivo imediatamente selado, seguido de elevação do membro.",
        "correta": false,
        "explicacao": "Curativos oclusivos são exclusivos para lesões torácicas permeáveis ao ar, não possuindo a capacidade compressiva necessária para ocluir uma artéria rompida."
      }
    ]
  },
  {
    "id": 119,
    "pergunta": "Sobre os sinais e sintomas do choque anafilático assinale a alternativa incorreta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Bolhas de água na pele",
        "correta": true,
        "explicacao": "Correto (esta é a afirmação incorreta em relação ao quadro clínico). Bolhas de água (flictenas) são características fisiológicas de queimaduras de 2º grau ou lesões por atrito. As reações cutâneas típicas da anafilaxia envolvem placas avermelhadas, inchadas e com coceira (urticária), mas não formação de bolhas de líquido."
      },
      {
        "id": "B",
        "texto": "Edema generalizado",
        "correta": false,
        "explicacao": "Incorreto. O edema generalizado, especialmente o angioedema que afeta rosto, lábios, língua e glote, é um dos sinais clássicos e de maior risco de morte no choque anafilático, exigindo intervenção imediata para garantir a permeabilidade das vias aéreas (PHTLS 10ª edição)."
      },
      {
        "id": "C",
        "texto": "Sensação de queimação na pele",
        "correta": false,
        "explicacao": "Incorreto. A liberação maciça de histamina durante a crise alérgica causa vasodilatação periférica severa, resultando frequentemente em intenso prurido (coceira), vermelhidão (rubor) e sensação de calor ou queimação espalhada pela pele."
      },
      {
        "id": "D",
        "texto": "Perda de consciência e morte",
        "correta": false,
        "explicacao": "Incorreto. Sendo uma emergência extrema (choque distributivo), a hipotensão severa combinada com a restrição respiratória causa hipóxia cerebral rápida, resultando em rebaixamento do nível de consciência, parada cardiorrespiratória e morte em minutos se não houver administração precoce de epinefrina/adrenalina."
      }
    ]
  },
  {
    "id": 120,
    "pergunta": "Sobre os constituintes estruturais do sistema circulatório responsáveis por manter a perfusão tecidular no corpo humano, analise as afirmativas: I - Coração. II - Artérias. III - Veias e capilares. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Somente a I está correta.",
        "correta": false,
        "explicacao": "Incorreto. O coração, atuando isoladamente como bomba, não conseguiria distribuir o sangue oxigenado sem a rede vascular correspondente."
      },
      {
        "id": "B",
        "texto": "Somente a II está correta.",
        "correta": false,
        "explicacao": "Incorreto. As artérias são condutos eferentes fundamentais, mas dependem do coração para gerar pressão e das veias para o retorno venoso."
      },
      {
        "id": "C",
        "texto": "Estão corretas I, II e III.",
        "correta": true,
        "explicacao": "Correto. Fisiologicamente, o sistema cardiovascular é um circuito fechado composto por uma bomba mecânica (coração) e uma rede de tubagem (vasos sanguíneos: artérias, veias e capilares) que distribuem o oxigénio e os nutrientes."
      },
      {
        "id": "D",
        "texto": "Somente a III está correta.",
        "correta": false,
        "explicacao": "Incorreto. As veias e os capilares são apenas a parte de trocas e de retorno do sistema, sendo funcionalmente inúteis sem o coração e as artérias."
      }
    ]
  },
  {
    "id": 121,
    "pergunta": "No Suporte Básico de Vida, o reconhecimento precoce da Parada Cardiorrespiratória (PCR) é vital. Assinale a alternativa INCORRETA sobre os sinais clínicos que confirmam o diagnóstico de uma PCR:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ausência de movimentos respiratórios ou respiração agónica (gasping).",
        "correta": false,
        "explicacao": "Incorreto (pois é um sinal verdadeiro). A apneia ou a respiração anormal (gasping) são critérios primários para o diagnóstico clínico de PCR e início imediato das compressões."
      },
      {
        "id": "B",
        "texto": "Vítima não responsiva (inconsciente).",
        "correta": false,
        "explicacao": "Incorreto (pois é um sinal verdadeiro). A inconsciência total (falta de resposta a estímulos verbais e táteis) é o primeiro passo na cadeia de avaliação da PCR."
      },
      {
        "id": "C",
        "texto": "Taquipneia (respiração excessivamente rápida).",
        "correta": true,
        "explicacao": "Correto (é a afirmação falsa/incorreta). A taquipneia é o aumento da frequência respiratória. Numa vítima em Parada Cardiorrespiratória, a respiração está ausente ou restringe-se a movimentos reflexos ineficazes (gasping), nunca sendo rápida ou eficaz."
      },
      {
        "id": "D",
        "texto": "Ausência de batimentos cardíacos palpáveis em artérias centrais.",
        "correta": false,
        "explicacao": "Incorreto (pois é um sinal verdadeiro). A verificação da ausência de pulso central (carotídeo ou femoral) em menos de 10 segundos confirma a parada do débito cardíaco."
      }
    ]
  },
  {
    "id": 122,
    "pergunta": "O estado reversível em que cessa a respiração e o coração deixa de bater, proporcionando uma janela de alguns minutos onde as manobras de Suporte Básico de Vida ainda podem ser eficazes antes de ocorrer dano irreversível, é denominado:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Morte biológica.",
        "correta": false,
        "explicacao": "Incorreto. A morte biológica refere-se ao momento de necrose irreversível das células do sistema nervoso central devido a anóxia prolongada, estado este que a RCP já não consegue reverter."
      },
      {
        "id": "B",
        "texto": "Parada cardíaca parcial.",
        "correta": false,
        "explicacao": "Incorreto. Não existe o conceito de 'parada parcial'. Ou o coração gera débito cardíaco suficiente, ou está em parada (seja por assistolia, fibrilhação, etc)."
      },
      {
        "id": "C",
        "texto": "Parada respiratória.",
        "correta": false,
        "explicacao": "Incorreto. Na paradam puramente respiratória, o coração ainda bate e mantém circulação temporária de sangue não-oxigenado, não descrevendo o estado onde o coração também já parou."
      },
      {
        "id": "D",
        "texto": "Morte clínica.",
        "correta": true,
        "explicacao": "Correto. O conceito de morte clínica descreve os minutos iniciais (0 a 6 minutos) após o colapso respiratório e circulatório, onde as células do cérebro ainda permanecem viáveis, tornando o quadro clinicamente reversível através da Reanimação Cardiopulmonar (RCP) imediata."
      }
    ]
  },
  {
    "id": 123,
    "pergunta": "De acordo com os protocolos da American Heart Association (AHA), coloque na sequência cronológica correta os elos base da Cadeia de Sobrevivência Extra-Hospitalar (PCREH) aplicados a adultos:",
    "alternativas": [
      {
        "id": "A",
        "texto": "RCP imediata de alta qualidade; Reconhecimento e acionamento do SME; Rápida Desfibrilhação; Suporte Avançado de Vida.",
        "correta": false,
        "explicacao": "Incorreto. O socorrista deve primeiro garantir o reconhecimento e o pedido de ajuda (ativar o SME) antes de iniciar as compressões. Iniciar a RCP sem pedir ajuda é um erro logístico fatal."
      },
      {
        "id": "B",
        "texto": "Reconhecimento e acionamento do SME; Rápida Desfibrilhação; RCP imediata de alta qualidade; Suporte Avançado de Vida.",
        "correta": false,
        "explicacao": "Incorreto. Embora a desfibrilhação deva ser o mais precoce possível, a RCP manual com compressões torácicas antecede-a no tempo, iniciando-se enquanto o Desfibrilhador Automático Externo (DAE) é procurado e preparado."
      },
      {
        "id": "C",
        "texto": "Reconhecimento e acionamento do SME; RCP imediata de alta qualidade; Rápida Desfibrilhação; Serviços Médicos de Emergência (Suporte Avançado) e Cuidados pós-PCR.",
        "correta": true,
        "explicacao": "Correto. As diretrizes universais de Suporte de Vida estabelecem a fundação da cadeia em: 1) Reconhecimento e ativação do serviço de emergência (192/193); 2) RCP precoce centrada nas compressões torácicas; 3) Rápida desfibrilhação (DAE); e 4) Suporte Avançado, seguido dos cuidados de recuperação pós-parada."
      },
      {
        "id": "D",
        "texto": "Serviços Médicos de Suporte Avançado; Reconhecimento e acionamento do SME; RCP imediata de alta qualidade; Rápida Desfibrilhação.",
        "correta": false,
        "explicacao": "Incorreto. O Suporte Avançado é um elo posterior na cadeia (4º elo clássico), pois depende da chegada ao local da equipa médica para administrar fármacos e garantir o controlo de via aérea avançada."
      }
    ]
  },
  {
    "id": 124,
    "pergunta": "Durante uma RCP você NÃO deve:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Comprimir o tórax a uma profundidade de pelo menos 2 polegadas (5 cm).",
        "correta": false,
        "explicacao": "Incorreto (pois é uma ação correta). A diretriz da AHA (2020) para adultos estipula que a compressão deve atingir pelo menos 5 cm de profundidade, não ultrapassando 6 cm, para gerar fluxo sanguíneo efetivo."
      },
      {
        "id": "B",
        "texto": "Realizar compressões torácicas a uma frequência de 100 a 120/min.",
        "correta": false,
        "explicacao": "Incorreto (pois é uma ação correta). Manter o ritmo entre 100 e 120 compressões por minuto é o padrão-ouro atual (AHA 2020) para garantir a perfusão contínua de órgãos vitais durante a parada cardíaca."
      },
      {
        "id": "C",
        "texto": "Minimizar as interrupções nas compressões.",
        "correta": false,
        "explicacao": "Incorreto (pois é uma ação correta). Minimizar pausas (para menos de 10 segundos) é fundamental para manter a fração de compressão torácica alta e preservar a pressão de perfusão coronariana e cerebral."
      },
      {
        "id": "D",
        "texto": "Não permitir o retorno total do tórax após cada compressão.",
        "correta": true,
        "explicacao": "Correto (é o procedimento incorreto). O socorrista não deve apoiar o peso do corpo sobre o peito da vítima entre as compressões. Segundo a AHA (2020), o retorno total do tórax (recoil) é necessário para criar pressão negativa intratorácica, que promove o retorno venoso e o enchimento adequado do coração com sangue antes da próxima compressão."
      }
    ]
  },
  {
    "id": 125,
    [cite_start]"pergunta": "O pulso é mais facilmente palpável nos locais onde estão as artérias mais calibrosas. Tendo isso em vista, quais são as principais artérias utilizadas para palpação e aferição de sinais? [cite: 15, 16]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Carótida, braquial, femoral, radial, frontal do pé e tibial anterior [cite: 18]",
        "correta": false,
        "explicacao": "A palpação 'frontal do pé' não é uma terminologia ou local anatômico padrão no APH; a artéria tibial anterior não é rotineiramente utilizada para aferição primária de perfusão."
      },
      {
        "id": "B",
        [cite_start]"texto": "Carótida, braquial, femoral, radial, dorsal da mão e tibial posterior [cite: 20]",
        "correta": false,
        "explicacao": "Aferir o pulso na 'dorsal da mão' não é indicado pelos protocolos do PHTLS ou AHA, pois não há grandes artérias calibrosas superficiais ideais para palpação de emergência nessa região."
      },
      {
        "id": "C",
        [cite_start]"texto": "Carótida, braquial, femoral, radial, dorsal do pé e tibial posterior [cite: 22, 25]",
        "correta": true,
        "explicacao": "Correto segundo o PHTLS (10ª edição). Carótida e femoral são os principais pulsos centrais; radial e braquial são periféricos superiores; pedioso (dorsal do pé) e tibial posterior são periféricos inferiores cruciais para avaliar a perfusão distal em traumas."
      },
      {
        "id": "D",
        [cite_start]"texto": "Carótida, braquial, femoral, radial, frontal da mão e tibial anterior [cite: 23]",
        "correta": false,
        "explicacao": "A descrição 'frontal da mão' é anatomicamente imprecisa no contexto de verificação de sinais vitais, sendo a artéria radial o padrão correto para o membro superior distal."
      }
    ]
  },
  {
    "id": 126,
    "pergunta": "A pulsação é conceituada como a expansão e o ______ das paredes das artérias devido à propagação de uma onda de sangue ejetada pela contração do coração. O pulso é ______ em qualquer área na qual uma artéria passe sobre uma proeminência óssea ou se localize próxima à pele. [cite_start]As alterações na ______ e no volume do pulso representam dados importantes nos primeiros socorros. [cite: 27, 28, 30, 31, 33, 34, 38]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "relaxamento, maleável, ritmado [cite: 40]",
        "correta": false,
        "explicacao": "Os termos 'maleável' e 'ritmado' não preenchem a lacuna conceitual do que é o pulso semiologicamente (que deve ser 'palpável') nem o parâmetro vital mais medido ('frequência')."
      },
      {
        "id": "B",
        [cite_start]"texto": "relaxamento, palpável e frequência [cite: 41, 45]",
        "correta": true,
        "explicacao": "De acordo com a literatura de Suporte Básico de Vida, a onda de pulso reflete a expansão e o relaxamento arterial. Ela precisa ser palpável (sentida ao toque) para ser avaliada, e as variações na frequência cardíaca são o indicador mais rápido de instabilidade hemodinâmica."
      },
      {
        "id": "C",
        [cite_start]"texto": "relaxamento, pulsátil, frequência [cite: 42]",
        "correta": false,
        "explicacao": "Dizer que 'o pulso é pulsátil' é um pleonasmo redundante. O termo técnico correto para o exame físico é que ele é 'palpável'."
      },
      {
        "id": "D",
        [cite_start]"texto": "tremor, palpável, pressão [cite: 43]",
        "correta": false,
        "explicacao": "O fluxo sanguíneo gera uma expansão e relaxamento (onda de pressão), e não um 'tremor' nas paredes das artérias."
      }
    ]
  },
  {
    "id": 127,
    [cite_start]"pergunta": "Qual o valor de referência da pulsação de uma criança? [cite: 51]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "60-100 bpm [cite: 53]",
        "correta": false,
        "explicacao": "Este é o valor de referência fisiológico para adultos saudáveis em repouso, não para crianças, que naturalmente possuem um metabolismo basal e frequência cardíaca mais elevados."
      },
      {
        "id": "B",
        [cite_start]"texto": "80-120 bpm [cite: 54]",
        "correta": false,
        "explicacao": "Embora algumas diretrizes pediátricas estipulem 80-120 para faixas etárias muito específicas, o limite superior de normalidade para lactentes e pré-escolares costuma ser mais alto na prática do APH."
      },
      {
        "id": "C",
        [cite_start]"texto": "80-140 bpm [cite: 62, 64]",
        "correta": true,
        "explicacao": "Conforme o PALS/AHA, crianças de 1 a 3 anos (toddlers) e idade pré-escolar apresentam frequências cardíacas normais variando amplamente de 80 a 140 bpm. Valores fora dessa faixa exigem avaliação para choque ou hipóxia."
      },
      {
        "id": "D",
        [cite_start]"texto": "60-140 bpm [cite: 61]",
        "correta": false,
        "explicacao": "Uma frequência de 60 bpm em crianças pequenas é frequentemente tratada como bradicardia com má perfusão, indicando no Suporte de Vida Pediátrico da AHA o início de compressões torácicas se houver sinais de comprometimento cardiopulmonar."
      }
    ]
  },
  {
    "id": 128,
    "pergunta": "Sinal é tudo aquilo que o socorrista pode observar ou sentir no paciente enquanto o examina. [cite_start]Neste quesito, qual a frequência respiratória esperada em um adulto: [cite: 65, 66]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "25 a 30 mpm [cite: 68]",
        "correta": false,
        "explicacao": "Qualquer frequência respiratória acima de 20 incurssões por minuto em um adulto é classificada como taquipneia, sendo um sinal de alerta no PHTLS (potencial hipóxia ou compensação de choque)."
      },
      {
        "id": "B",
        [cite_start]"texto": "10 a 24 mpm [cite: 69]",
        "correta": false,
        "explicacao": "As diretrizes atuais de SBV não consideram 24 irpm como normal. O teto para eupneia no adulto é rigidamente estabelecido em 20 irpm."
      },
      {
        "id": "C",
        [cite_start]"texto": "12 a 20 mpm [cite: 74, 79]",
        "correta": true,
        "explicacao": "A American Heart Association (AHA) e o PHTLS (10ª edição) estabelecem universalmente a faixa de 12 a 20 ventilações por minuto como o padrão de normalidade (eupneia) para adultos em repouso."
      },
      {
        "id": "D",
        [cite_start]"texto": "08 a 12 mpm [cite: 78]",
        "correta": false,
        "explicacao": "Valores inferiores a 12 (especialmente 8 mpm) caracterizam bradipneia e insuficiência ventilatória, exigindo muitas vezes ventilação com pressão positiva (bolsa-válvula-máscara)."
      }
    ]
  },
  {
    "id": 129,
    [cite_start]"pergunta": "Pulso rápido e fraco é característica de: [cite: 81]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Frio [cite: 88]",
        "correta": false,
        "explicacao": "No frio extremo (hipotermia severa), o metabolismo desacelera e o pulso tende a ficar fraco e bradicárdico (lento), e não rápido."
      },
      {
        "id": "B",
        [cite_start]"texto": "Estado de Choque [cite: 92, 96]",
        "correta": true,
        "explicacao": "No estado de choque (principalmente hipovolêmico ou distributivo precoce), o PHTLS relata que o corpo compensa a queda da pressão arterial ativando o sistema nervoso simpático, gerando taquicardia (pulso rápido) e vasoconstrição periférica, o que torna o pulso palpável periférico filiforme (fraco)."
      },
      {
        "id": "C",
        [cite_start]"texto": "Parada Cardíaca [cite: 94]",
        "correta": false,
        "explicacao": "A característica definidora da Parada Cardiorrespiratória (PCR) no SBV da AHA é a ausência de pulso central palpável (apneia ou gasping e não responsividade), não um pulso rápido."
      },
      {
        "id": "D",
        [cite_start]"texto": "Ansiedade [cite: 95]",
        "correta": false,
        "explicacao": "Durante uma crise de ansiedade aguda, a descarga de adrenalina geralmente provoca taquicardia (pulso rápido), porém o pulso se mantém cheio (forte e amplo), e não tipicamente fraco."
      }
    ]
  },
  {
    "id": 130,
    [cite_start]"pergunta": "Sobre os tipos de Obstrução de Vias Aéreas por Corpo Estranho (OVACE), assinale a alternativa correta: [cite: 15]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "A OVACE é considerada grave quando não há obstrução das vias aéreas. [cite: 21]",
        "correta": false,
        "explicacao": "Conceitualmente incorreto. A ausência de obstrução não caracteriza OVACE. Segundo a AHA (2020), a obstrução grave é definida pela incapacidade da vítima de tossir efetivamente, falar ou respirar."
      },
      {
        "id": "B",
        [cite_start]"texto": "A OVACE é considerada leve quando não há passagem de ar pelas vias aéreas. [cite: 22]",
        "correta": false,
        "explicacao": "Incorreto. A incapacidade de trocar ar caracteriza uma obstrução de via aérea grave (severa), exigindo intervenção imediata (como a Manobra de Heimlich), não sendo classificada como leve."
      },
      {
        "id": "C",
        [cite_start]"texto": "A OVACE é considerada média quando há passagem parcial de ar pelas vias aéreas. [cite: 23]",
        "correta": false,
        "explicacao": "Os protocolos atuais de Suporte Básico de Vida (AHA 2020) não utilizam a classificação 'média'. O engasgo é clinicamente dividido apenas em obstrução leve ou grave."
      },
      {
        "id": "D",
        [cite_start]"texto": "A OVACE é considerada leve quando há passagem de ar pelas vias aéreas. [cite: 24]",
        "correta": true,
        "explicacao": "Correto de acordo com as diretrizes da AHA (2020). Na obstrução leve, a vítima consegue tossir de forma responsiva e emitir sons, indicando que ainda há troca de ar."
      }
    ]
  },
  {
    "id": 131,
    [cite_start]"pergunta": "São sinais de respiração adequada durante a avaliação de uma vítima: [cite: 31]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "O socorrista pode sentir e ouvir o ar saindo pela boca e pelo nariz do paciente de forma harmônica. [cite: 34]",
        "correta": true,
        "explicacao": "Correto. O PHTLS (10ª edição) orienta que uma ventilação adequada é caracterizada por um padrão respiratório regular (harmônico), com expansibilidade torácica simétrica e volume corrente suficiente."
      },
      {
        "id": "B",
        [cite_start]"texto": "O socorrista não escuta o ar sair pela boca e pelo nariz do paciente. [cite: 36]",
        "correta": false,
        "explicacao": "Incorreto. A ausência de ruídos respiratórios e de fluxo de ar indica apneia ou obstrução total de vias aéreas, caracterizando uma emergência com risco iminente de morte."
      },
      {
        "id": "C",
        [cite_start]"texto": "O socorrista percebe a ausência dos movimentos respiratórios. [cite: 37]",
        "correta": false,
        "explicacao": "A ausência de movimentos torácicos indica parada respiratória. No Suporte Básico de Vida (AHA), isso exige o início imediato de ventilações de resgate ou RCP se não houver pulso."
      },
      {
        "id": "D",
        [cite_start]"texto": "O peito e o abdômen se elevam e abaixam unilateralmente conforme a vítima inspira ou expira o ar. [cite: 38]",
        "correta": false,
        "explicacao": "Incorreto. A expansão unilateral do tórax é um sinal de trauma grave (como pneumotórax ou hemotórax) ou intubação seletiva, não sendo um sinal de respiração normal ou adequada segundo o PHTLS."
      }
    ]
  },
  {
    "id": 132,
    [cite_start]"pergunta": "A Obstrução de Vias Aéreas por Corpo Estranho (OVACE) ocorre geralmente em adultos na seguinte situação: [cite: 41]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Durante a ingestão de alimentos. [cite: 46]",
        "correta": true,
        "explicacao": "Correto. As diretrizes da AHA destacam que engasgos em adultos ocorrem mais comumente durante as refeições, frequentemente envolvendo pedaços de carne mal mastigados associados ou não ao consumo de álcool."
      },
      {
        "id": "B",
        [cite_start]"texto": "Por trauma local contuso ou penetrante. [cite: 49]",
        "correta": false,
        "explicacao": "Embora traumas na região cervical possam comprometer e obstruir a via aérea (por edema ou fratura, segundo o PHTLS), essa não é a causa geral ou mais comum da OVACE clássica no adulto."
      },
      {
        "id": "C",
        [cite_start]"texto": "No momento da amamentação. [cite: 50]",
        "correta": false,
        "explicacao": "A amamentação é um risco potencial de engasgo por líquidos em lactentes (bebês), e não se enquadra na epidemiologia de OVACE em pacientes adultos."
      },
      {
        "id": "D",
        [cite_start]"texto": "Sugando ou brincando com pequenos objetos. [cite: 51]",
        "correta": false,
        "explicacao": "Engasgos com peças pequenas (brinquedos, moedas, botões) são as causas primárias de OVACE em crianças e lactentes, não refletindo a estatística principal em adultos."
      }
    ]
  },
  {
    "id": 133,
    "pergunta": "'Antes de realizar uma manobra subdiafragmática você deve estar atento e verificar se a vítima respira, ainda que com dificuldade.' [cite_start]Qual a atitude correta a se tomar diante dessa afirmação? [cite: 55, 56]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Caso esteja respirando, peça que a vítima coloque o dedo na boca para incentivar o vômito. [cite: 62]",
        "correta": false,
        "explicacao": "Totalmente contraindicado. Induzir vômito ou tentar buscas às cegas na boca pode empurrar o corpo estranho ainda mais para baixo, agravando uma obstrução leve para uma grave."
      },
      {
        "id": "B",
        [cite_start]"texto": "Caso ela esteja respirando, você não deve aplicar manobra alguma, deve-se apenas estimular a vítima a tossir. [cite: 63]",
        "correta": true,
        "explicacao": "Correto segundo a AHA (2020). Se a vítima consegue tossir com força, trata-se de uma obstrução leve. A conduta é não interferir fisicamente, apenas acalmar e encorajar a tosse contínua."
      },
      {
        "id": "C",
        [cite_start]"texto": "Caso esteja respirando, realizar a manobra subdiafragmática com menos força. [cite: 65]",
        "correta": false,
        "explicacao": "Incorreto. As compressões abdominais (Heimlich) não devem ser realizadas em vítimas de obstrução leve que conseguem respirar e tossir, independentemente da força aplicada."
      },
      {
        "id": "D",
        [cite_start]"texto": "Caso não esteja respirando, esperar a chegada exclusiva do atendimento pré-hospitalar sem agir. [cite: 66]",
        "correta": false,
        "explicacao": "Incorreto. Se a vítima não respira ou tem obstrução grave (não consegue tossir), o socorrista leigo deve intervir imediatamente com a Manobra de Heimlich, e caso evolua para inconsciência, iniciar RCP (AHA 2020)."
      }
    ]
  },
  {
    "id": 134,
    [cite_start]"pergunta": "Qual dos procedimentos abaixo NÃO corresponde a uma etapa da manobra de impulsão/empurre mandibular (Jaw-Thrust)? [cite: 77]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Colocar o paciente em decúbito dorsal horizontal e posicionar-se atrás de sua cabeça. [cite: 79]",
        "correta": false,
        "explicacao": "Incorreto assinalar esta, pois este passo FAZ PARTE da técnica de tração mandibular. O socorrista se posiciona atrás da cabeça do paciente para alinhar o eixo cervical."
      },
      {
        "id": "B",
        [cite_start]"texto": "Com uma mão de cada lado da cabeça do mesmo, colocar as pontas dos dedos indicador e médio sob o ângulo da mandíbula. [cite: 80]",
        "correta": false,
        "explicacao": "Incorreto assinalar esta. O posicionamento dos dedos sob o ângulo da mandíbula de forma bilateral é uma etapa essencial e correta da técnica de Jaw-Thrust (PHTLS 10ª edição)."
      },
      {
        "id": "C",
        [cite_start]"texto": "Com os dedos posicionados, impulsionar a mandíbula para cima, mantendo a cabeça estabilizada com a palma das mãos. [cite: 81]",
        "correta": false,
        "explicacao": "Incorreto assinalar esta, pois também é um passo correto da tração mandibular. Essa elevação desobstrui a via aérea sem movimentar a coluna cervical, ideal para vítimas de trauma."
      },
      {
        "id": "D",
        [cite_start]"texto": "Colocar uma das mãos na testa, para estender a cabeça para trás, e a ponta dos dedos por baixo da mandíbula para levantá-la. [cite: 82]",
        "correta": true,
        "explicacao": "Correto assinalar esta alternativa. O procedimento descrito (extensão da cabeça e elevação do queixo / Head-Tilt Chin-Lift) não pertence ao Jaw-Thrust. É uma manobra distinta e contraindicada em suspeitas de trauma raquimedular segundo o PHTLS."
      }
    ]
  },
  {
    "id": 135,
    "pergunta": "Sobre as compressões torácicas no procedimento de Suporte Básico de Vida (SBV) em crianças e lactentes, respectivamente, assinale a alternativa correta segundo as diretrizes da AHA (2020):",
    "alternativas": [
      {
        "id": "A",
        "texto": "Para lactentes, é recomendado utilizar 3 dedos no centro do tórax, deprimindo cerca de 5 cm. Para crianças, a profundidade indicada é de 3 cm.",
        "correta": false,
        "explicacao": "A técnica de 3 dedos não é padrão no SBV. Em lactentes, usam-se 2 dedos ou a técnica dos 2 polegares, deprimindo cerca de 4 cm. A profundidade de 3 cm é ineficaz para crianças."
      },
      {
        "id": "B",
        "texto": "O indicado para crianças é deprimir o tórax em cerca de 4 cm. Para lactentes, a compressão deve ser feita com uma mão na metade superior do esterno.",
        "correta": false,
        "explicacao": "A profundidade de 4 cm é indicada para lactentes, e não para crianças (que necessitam de cerca de 5 cm). A posição para lactentes é na metade inferior do esterno, logo abaixo da linha mamilar, usando 2 dedos ou polegares."
      },
      {
        "id": "C",
        "texto": "Para crianças, deve-se deprimir o tórax em cerca de 3 cm utilizando as duas mãos. Para lactentes, recomenda-se o uso da palma de uma mão, deprimindo cerca de 4 cm.",
        "correta": false,
        "explicacao": "Profundidade de 3 cm não garante perfusão em crianças. O uso da palma da mão em lactentes gera risco elevado de trauma torácico e não é recomendado pelos protocolos."
      },
      {
        "id": "D",
        "texto": "Para o atendimento a crianças, indica-se deprimir o tórax em cerca de 5 cm, utilizando 1 ou 2 mãos. Para lactentes, recomenda-se utilizar 2 dedos no centro do tórax, logo abaixo da linha mamilar, deprimindo cerca de 4 cm.",
        "correta": true,
        "explicacao": "Segundo protocolos científicos da AHA 2020: Crianças requerem compressões de pelo menos um terço do diâmetro anteroposterior (cerca de 5 cm) com 1 ou 2 mãos. Lactentes requerem compressões de cerca de 4 cm com 2 dedos ou a técnica dos 2 polegares."
      }
    ]
  },
  {
    "id": 136,
    "pergunta": "Sobre os fatores de risco de doenças cardíacas, correlacione as colunas abaixo e encontre a alternativa correta:\n() Herança Genética\n() Obesidade\n() Sexo\n() Tabagismo\n() Hipertensão\n() Estresse excessivo\n() Colesterol alto\n\n(1) Fator que pode ser alterado\n(2) Fator que não pode ser alterado\n(3) Fator que contribui.",
    "alternativas": [
      {
        "id": "A",
        "texto": "1, 2, 1, 3, 1, 3 e 1.",
        "correta": false,
        "explicacao": "A alternativa classifica erroneamente a herança genética como um fator que pode ser alterado, o que contraria as diretrizes de prevenção primária da AHA."
      },
      {
        "id": "B",
        "texto": "1, 3, 2, 1, 2, 1 e 2.",
        "correta": false,
        "explicacao": "A sequência de correlação está desordenada. Fatores como herança e sexo biológico são inerentes e imutáveis, enquanto hipertensão e tabagismo são clinicamente modificáveis."
      },
      {
        "id": "C",
        "texto": "2, 3, 2, 1, 1, 3 e 1.",
        "correta": true,
        "explicacao": "Correto. A AHA classifica idade, sexo e genética como fatores imutáveis (2). Tabagismo, hipertensão e colesterol são fatores de risco maiores e modificáveis (1). Obesidade e estresse atuam como fatores contribuintes importantes."
      },
      {
        "id": "D",
        "texto": "2, 1, 3, 2, 2, 1 e 3.",
        "correta": false,
        "explicacao": "Inverte a classificação clínica padrão dos fatores de risco maiores e fatores contribuintes, desalinhando-se com os protocolos de estratificação de risco da AHA."
      }
    ]
  },
  {
    "id": 137,
    "pergunta": "O risco de um ataque cardíaco aumenta de acordo com o número de fatores apresentados pelo paciente. Os indivíduos que apresentam mais de um fator de risco podem ter muito mais chances de desenvolver uma doença. Marque, dentre as opções abaixo, qual fator não pode ser alterado:",
    "alternativas": [
      {
        "id": "A",
        "texto": "tabagismo",
        "correta": false,
        "explicacao": "O tabagismo é apontado como o principal fator de risco cardiovascular modificável. A cessação do fumo é altamente encorajada pelas diretrizes da AHA para reduzir o risco de isquemia miocárdica."
      },
      {
        "id": "B",
        "texto": "hipertensão arterial",
        "correta": false,
        "explicacao": "A hipertensão arterial sistêmica é um fator amplamente modificável e controlável através de mudanças no estilo de vida e tratamento farmacológico."
      },
      {
        "id": "C",
        "texto": "herança genética",
        "correta": true,
        "explicacao": "A herança genética, que inclui o histórico familiar de doença cardiovascular prematura, é categorizada universalmente nas diretrizes médicas como um fator de risco não modificável, pois é inerente à biologia do paciente."
      },
      {
        "id": "D",
        "texto": "sedentarismo",
        "correta": false,
        "explicacao": "O sedentarismo é um fator de risco completamente modificável. As diretrizes da AHA recomendam fortemente a prática regular de atividade física como prevenção primária."
      }
    ]
  },
  {
    "id": 138,
    "pergunta": "Após constatar a parada cardiopulmonar, acionar o serviço de emergência e posicionar a vítima adequadamente em uma superfície rígida, qual o próximo procedimento a se fazer?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar compressões rápidas (100 a 120 compressões/min)",
        "correta": false,
        "explicacao": "Embora aplicar compressões de alta qualidade (100 a 120 cpm) seja o objetivo principal na RCP segundo a AHA, o socorrista precisa primeiro se posicionar corretamente em relação à vítima antes de tocar seu tórax."
      },
      {
        "id": "B",
        "texto": "Posicionar-se ao lado da vítima (lateral ao ombro)",
        "correta": true,
        "explicacao": "Correto. As diretrizes de Suporte Básico de Vida orientam que, antes de iniciar as compressões, o socorrista deve se ajoelhar e se posicionar ao lado da vítima (na altura dos ombros e do tórax). Isso garante uma base biomecânica sólida para usar o peso do corpo e evitar fadiga precoce."
      },
      {
        "id": "C",
        "texto": "Verificar a respiração",
        "correta": false,
        "explicacao": "A verificação da respiração já ocorre simultaneamente com a avaliação de responsividade no passo anterior, ao \"constatar a parada cardiopulmonar\", não sendo a ação subsequente ao posicionamento da vítima."
      },
      {
        "id": "D",
        "texto": "Localizar o ponto para iniciar as compressões torácicas (linha intermamilar)",
        "correta": false,
        "explicacao": "A localização do ponto de compressão (metade inferior do osso esterno) só deve ser feita depois que o socorrista adotar a posição ergonômica correta ao lado da vítima."
      }
    ]
  },
  {
    "id": 139,
    "pergunta": "O risco de um ataque cardíaco aumenta de acordo com o número de fatores apresentados pelo paciente. Os indivíduos que apresentam mais de um fator de risco podem ter muito mais chances de desenvolver uma doença. Marque, dentre as opções abaixo, qual fator pode ser alterado:",
    "alternativas": [
      {
        "id": "A",
        "texto": "idade",
        "correta": false,
        "explicacao": "O envelhecimento causa alterações anatômicas e fisiológicas cumulativas no sistema cardiovascular, sendo classificado como um fator de risco inalterável (não modificável)."
      },
      {
        "id": "B",
        "texto": "tabagismo",
        "correta": true,
        "explicacao": "Correto. O tabagismo lesiona o endotélio vascular e é um fator de risco maior totalmente passível de ser alterado. A AHA coloca a interrupção do tabagismo como foco primário na prevenção de síndromes coronarianas agudas."
      },
      {
        "id": "C",
        "texto": "sexo",
        "correta": false,
        "explicacao": "O sexo biológico do paciente impacta estatisticamente a idade de início do risco cardiovascular, porém faz parte dos fatores de risco biológicos não modificáveis."
      },
      {
        "id": "D",
        "texto": "herança genética",
        "correta": false,
        "explicacao": "Junto com a idade e o sexo biológico, o histórico genético/familiar compõe os fatores de risco intrínsecos sobre os quais não é possível aplicar intervenções modificadoras de hábito."
      }
    ]
  },
  {
    "id": 140,
    [cite_start]"pergunta": "Qual dos sinais e sintomas listados abaixo não estão relacionados a uma intercorrência clínica: [cite: 9]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Cortes superficiais [cite: 14]",
        "correta": true,
        "explicacao": "Correta. [cite_start]Cortes superficiais são traumas mecânicos (lesões físicas externas), não se enquadrando como intercorrência clínica (emergências médicas não traumáticas como IAM, AVC ou síncope)[cite: 14, 22]."
      },
      {
        "id": "B",
        [cite_start]"texto": "Dor [cite: 18]",
        "correta": false,
        "explicacao": "Incorreta. A dor (especialmente torácica ou abdominal) é um dos sintomas clínicos mais clássicos de emergências médicas no APH, como infarto ou cólica renal."
      },
      {
        "id": "C",
        [cite_start]"texto": "Fraqueza [cite: 20]",
        "correta": false,
        "explicacao": "Incorreta. A fraqueza súbita é um sinal clínico importante de quadros neurológicos (como AVC) ou metabólicos (como hipoglicemia)."
      },
      {
        "id": "D",
        [cite_start]"texto": "Formigamento [cite: 21]",
        "correta": false,
        "explicacao": "Incorreta. Parestesia (formigamento) é um sintoma neurológico clínico que pode indicar problemas circulatórios, nervosos ou descompensação clínica."
      }
    ]
  },
  {
    "id": 141,
    [cite_start]"pergunta": "O empurre mandibular (manobra modificada) é a única manobra ______ para ser realizada em paciente ______ com possibilidade de lesão na coluna. [cite: 27, 28, 29, 30]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "recomendada; inconsciente [cite: 35]",
        "correta": true,
        "explicacao": "Correta. [cite_start]Segundo o PHTLS (10ª edição), a tração mandibular (Jaw-Thrust) sem extensão da cabeça é a técnica padrão-ouro para abrir vias aéreas em vítimas inconscientes com suspeita de trauma raquimedular[cite: 35, 39]."
      },
      {
        "id": "B",
        [cite_start]"texto": "não recomendada; inconsciente [cite: 36]",
        "correta": false,
        "explicacao": "Incorreta. A manobra é fortemente recomendada (e não 'não recomendada') para pacientes inconscientes vítimas de trauma."
      },
      {
        "id": "C",
        [cite_start]"texto": "recomendada; consciente [cite: 37]",
        "correta": false,
        "explicacao": "Incorreta. Pacientes conscientes mantêm o próprio tônus muscular da via aérea e não necessitam de manobras de abertura manual por parte do socorrista."
      },
      {
        "id": "D",
        [cite_start]"texto": "não recomendada; consciente [cite: 38]",
        "correta": false,
        "explicacao": "Incorreta. Além de não ser indicada para pacientes conscientes, a afirmação de ser 'não recomendada' no contexto geral de trauma inverte o protocolo de proteção cervical."
      }
    ]
  },
  {
    "id": 142,
    "pergunta": "Como você sabe, a respiração é o processo de troca gasosa no organismo, composta por dois movimentos: a inspiração, quando há entrada de oxigênio nos pulmões e a expiração, que é a saída de gás carbônico e outros componentes não aproveitados pelo organismo. [cite_start]Sobre respiração, assinale a alternativa incorreta. [cite: 43, 44]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Os músculos respiratórios são o diafragma e os músculos intercostais [cite: 50]",
        "correta": false,
        "explicacao": "Afirmação anatomicamente correta. O diafragma e os intercostais são os principais músculos da ventilação no corpo humano."
      },
      {
        "id": "B",
        [cite_start]"texto": "Quando o diafragma relaxa, produz uma pressão positiva na cavidade torácica e o ar externo entra nos pulmões [cite: 51]",
        "correta": true,
        "explicacao": "Alternativa INCORRETA (gabarito). Quando o diafragma relaxa, ele sobe, diminuindo o volume torácico e expulsando o ar (expiração). [cite_start]Para o ar entrar (inspiração), o diafragma precisa se CONTRAIR, criando pressão negativa[cite: 51, 61]."
      },
      {
        "id": "C",
        [cite_start]"texto": "O diafragma e os músculos intercostais estão localizados entre as costelas e realizam a parte mecânica da respiração [cite: 52, 53]",
        "correta": false,
        "explicacao": "Afirmação fisiologicamente aceita no contexto do APH. Estes músculos alteram o volume da caixa torácica, promovendo o fole mecânico da ventilação."
      },
      {
        "id": "D",
        [cite_start]"texto": "Quando os músculos se relaxam, produzem uma pressão positiva na caixa torácica e o ar é forçado a sair dos pulmões [cite: 54]",
        "correta": false,
        "explicacao": "Afirmação correta. O relaxamento da musculatura respiratória diminui a expansão do tórax, aumentando a pressão intrapulmonar em relação à atmosfera, forçando a expiração."
      }
    ]
  },
  {
    "id": 143,
    "pergunta": "O peito e o abdômen se elevam e abaixam bilateralmente conforme a vítima inspira ou expira o ar. Durante o atendimento é possível sentir e ouvir o ar saindo pela boca e pelo nariz da vítima de forma harmônica. [cite_start]A definição corresponde a: [cite: 62, 63, 64]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Vítima com respiração anormal/irregular [cite: 66]",
        "correta": false,
        "explicacao": "Incorreta. A descrição de elevação bilateral simétrica e ruídos harmônicos indica um padrão fisiológico normal, não irregular."
      },
      {
        "id": "B",
        [cite_start]"texto": "Vítima que respira [cite: 67]",
        "correta": true,
        "explicacao": "Correta. [cite_start]A expansão simétrica do tórax associada à passagem audível e tátil de ar caracteriza semiologicamente uma ventilação espontânea e eficaz no protocolo de Suporte Básico de Vida[cite: 67, 75]."
      },
      {
        "id": "C",
        [cite_start]"texto": "Vítima em sofrimento respiratório [cite: 68]",
        "correta": false,
        "explicacao": "Incorreta. O sofrimento respiratório seria marcado por uso de musculatura acessória, batimento de asa de nariz, cianose, sons anormais (estridor/sibilos) ou assimetria."
      },
      {
        "id": "D",
        [cite_start]"texto": "Vítima que não respira [cite: 74]",
        "correta": false,
        "explicacao": "Incorreta. Se houvesse apneia (parada respiratória), o tórax estaria imóvel e não haveria fluxo de ar palpável ou audível para o socorrista avaliar."
      }
    ]
  },
  {
    "id": 144,
    [cite_start]"pergunta": "Em pacientes com engasgo que respiram, ainda que com dificuldade, deve-se: [cite: 77]",
    "alternativas": [
      {
        "id": "A",
        [cite_start]"texto": "Estimular a tosse [cite: 83]",
        "correta": true,
        "explicacao": "Correta. Conforme a AHA (2020), se a vítima de Obstrução de Vias Aéreas por Corpo Estranho (OVACE) consegue tossir ou respirar, trata-se de obstrução leve. [cite_start]A conduta do socorrista é apenas encorajar a tosse vigorosa e observar[cite: 83, 90]."
      },
      {
        "id": "B",
        [cite_start]"texto": "Iniciar RCP [cite: 86]",
        "correta": false,
        "explicacao": "Incorreta. A Ressuscitação Cardiopulmonar (RCP) só é iniciada se a vítima com obstrução grave de via aérea evoluir para irresponsividade (perda de consciência)."
      },
      {
        "id": "C",
        [cite_start]"texto": "Aplicar manobra de desobstrução de vias aéreas [cite: 88]",
        "correta": false,
        "explicacao": "Incorreta. Manobras de desobstrução (como a de Heimlich) são contraindicadas na obstrução leve, pois o impacto pode deslocar o corpo estranho e agravar o quadro para uma obstrução total."
      },
      {
        "id": "D",
        [cite_start]"texto": "Dar um susto [cite: 89]",
        "correta": false,
        "explicacao": "Incorreta. 'Dar um susto' é uma crença popular sem respaldo científico que pode causar pico adrenérgico, piorando a ansiedade, a frequência cardíaca e a dificuldade respiratória do paciente."
      }
    ]
  },
  {
    "id": 145,
    "pergunta": "Um homem de 65 anos apresenta confusão mental súbita durante o jantar. Você suspeita de Acidente Vascular Cerebral (AVC). Qual dos seguintes achados durante sua avaliação rápida é o indicador mais forte segundo a escala pré-hospitalar (Cincinnati/FAST), e qual a ação prioritária para um socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Perda de força em ambos os braços e pernas de forma simétrica; deve-se oferecer água com açúcar para descartar hipoglicemia antes de ligar para emergência.",
        "correta": false,
        "explicacao": "A fraqueza do AVC costuma ser unilateral. Ofertar líquidos a uma pessoa com alteração neurológica contraria as diretrizes de primeiros socorros pelo alto risco de broncoaspiração."
      },
      {
        "id": "B",
        "texto": "Assimetria facial, queda de um dos braços ao tentar mantê-los elevados e fala arrastada; acionar imediatamente o serviço de emergência informando o horário do início dos sintomas.",
        "correta": true,
        "explicacao": "Esses são os pilares da escala FAST (Face, Arms, Speech, Time). A identificação precoce e o registro do tempo exato do início dos sintomas são vitais para a elegibilidade do tratamento trombolítico no hospital."
      },
      {
        "id": "C",
        "texto": "Dor torácica que irradia para o braço esquerdo acompanhada de sudorese fria; a conduta imediata é deitar a vítima e elevar suas pernas para facilitar o retorno venoso.",
        "correta": false,
        "explicacao": "Esses são sintomas sugestivos de Infarto Agudo do Miocárdio (IAM), não de AVC. Elevar as pernas não é a conduta padrão de conforto para pacientes com queixa coronariana."
      },
      {
        "id": "D",
        "texto": "Pupilas dilatadas e ausência de resposta verbal à dor; a conduta é iniciar ventilações de resgate imediatamente, pois indica parada respiratória iminente de origem bulbar.",
        "correta": false,
        "explicacao": "Ausência de resposta não é exclusiva de AVC e iniciar ventilações em pacientes que apenas não respondem verbalmente (sem checar o pulso ou respiração normal) viola o algoritmo de SBV."
      }
    ]
  },
  {
    "id": 146,
    "pergunta": "Você se depara com um lactente (bebê de 8 meses) que se engasgou com um pequeno brinquedo. Ele está consciente, mas não consegue chorar, tossir ou emitir sons, apresentando cianose (arroxeamento) labial. Qual a técnica exata recomendada pelas diretrizes atualizadas (AHA) para a desobstrução das vias aéreas nesta faixa etária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar a Manobra de Heimlich (compressões abdominais) de forma suave, utilizando apenas dois dedos logo acima da cicatriz umbilical, até a expulsão completa do objeto.",
        "correta": false,
        "explicacao": "A Manobra de Heimlich (compressões abdominais) é absolutamente contraindicada para lactentes (menores de 1 ano) devido ao elevado risco de lesão grave nos órgãos internos não protegidos pela caixa torácica."
      },
      {
        "id": "B",
        "texto": "Aplicar 5 golpes nas costas entre as escápulas com a região tenar da mão, alternando com 5 compressões torácicas no centro do peito usando dois dedos, mantendo a cabeça do bebê inclinada para baixo.",
        "correta": true,
        "explicacao": "Esta é a conduta técnica precisa da AHA para OVACE grave em lactentes conscientes. A gravidade auxilia a manobra mecânica, e alterna-se pressão nas vias aéreas pela região dorsal e torácica."
      },
      {
        "id": "C",
        "texto": "Inserir o dedo indicador em forma de gancho na boca da criança, independentemente de visualizar o objeto, em uma tentativa de realizar a varredura às cegas e liberar a passagem de ar.",
        "correta": false,
        "explicacao": "A varredura às cegas é estritamente proibida em qualquer faixa etária, pois pode empurrar o corpo estranho ainda mais profundamente na via aérea, agravando a obstrução."
      },
      {
        "id": "D",
        "texto": "Segurar o lactente pelos pés de cabeça para baixo e dar leves sacudidas seguidas de tapinhas nas nádegas, aproveitando a ação severa da gravidade para expelir o corpo estranho.",
        "correta": false,
        "explicacao": "Sacudir o bebê ou segurá-lo pelos pés não faz parte dos protocolos de SBV, apresenta baixa eficácia e alto risco de trauma cranioencefálico, luxações e piora clínica estrutural."
      }
    ]
  },
  {
    "id": 147,
    "pergunta": "Durante um acidente em uma marcenaria, um trabalhador sofre uma amputação traumática do braço direito no nível do antebraço. Ele está inconsciente e com sangramento em jato (arterial) massivo. Um colega tenta realizar a abertura das vias aéreas do ferido. Aplicando o protocolo de trauma pré-hospitalar atualizado (PHTLS - XABCDE), qual deve ser a sua intervenção inicial como socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Auxiliar o colega na abertura das vias aéreas e iniciar respiração boca a boca imediatamente, pois a oxigenação cerebral é a prioridade absoluta em todas as vítimas inconscientes.",
        "correta": false,
        "explicacao": "O PHTLS estabelece que o X (hemorragia exsanguinante externa) tem precedência sobre o A (vias aéreas). Uma via aérea patente não salvará um paciente que morrer por perda massiva de sangue em minutos."
      },
      {
        "id": "B",
        "texto": "Realizar a contenção do sangramento usando compressas limpas diretamente sobre o coto e elevar o membro acima da altura do coração para diminuir gradativamente o fluxo sanguíneo local.",
        "correta": false,
        "explicacao": "Em amputações com sangramento arterial massivo (em jato), a compressão direta e elevação costumam ser ineficazes. Essa abordagem atrasa o uso da intervenção definitiva de emergência."
      },
      {
        "id": "C",
        "texto": "Interromper a ação do colega e aplicar imediatamente um torniquete no membro afetado, cerca de 7 cm acima da amputação e o apertado possível para controlar a hemorragia exsanguinante antes de focar na via aérea.",
        "correta": true,
        "explicacao": "O 'X' no mnemônico XABCDE (PHTLS 10ª Ed) prioriza o controle de hemorragias externas graves. O uso de torniquetes é a intervenção de escolha para sangramentos exsanguinantes em extremidades."
      },
      {
        "id": "D",
        "texto": "Estabilizar a coluna cervical da vítima manualmente para evitar lesões medulares secundárias, aguardando a chegada do serviço médico de emergência para lidar com o sangramento ativo.",
        "correta": false,
        "explicacao": "Embora a estabilização cervical seja importante no trauma (letra A), atrasar o controle do sangramento massivo resultará no choque irreversível e morte da vítima antes do resgate."
      }
    ]
  },
  {
    "id": 148,
    "pergunta": "Ao utilizar um Desfibrilador Externo Automático (DEA) em um adulto que sofreu uma Parada Cardiorrespiratória (PCR) logo após ser retirado de uma piscina, a vítima encontra-se com o peito nu e excessivamente molhado. Qual é o princípio técnico correto sobre a aplicação dos eletrodos neste cenário?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O DEA não deve ser utilizado em nenhuma hipótese em ambientes úmidos pelo risco de choque no socorrista; deve-se manter apenas compressões manuais contínuas até a chegada da ambulância.",
        "correta": false,
        "explicacao": "O DEA pode e deve ser utilizado em vítimas retiradas da água. Atrasar a desfibrilação em um ritmo chocável reduz drasticamente as chances de sobrevivência da vítima."
      },
      {
        "id": "B",
        "texto": "A água conduz eletricidade, o que pode dissipar a energia do choque superficialmente pelo tórax e reduzir a eficácia da desfibrilação. Deve-se secar o peito da vítima rapidamente antes de colar as pás.",
        "correta": true,
        "explicacao": "Se o tórax estiver coberto de água, o choque pode fluir pela água entre as pás em vez de atravessar o coração, anulando o tratamento. Secar rapidamente o tórax é a orientação técnica da AHA."
      },
      {
        "id": "C",
        "texto": "As pás adesivas do DEA moderno são projetadas para aderir em superfícies molhadas. O choque deve ser administrado imediatamente, sem perda de tempo secando a vítima, para não atrasar as compressões.",
        "correta": false,
        "explicacao": "As pás não fixam adequadamente na pele molhada, o que gera impedância alta, queima térmica na vítima e falha na liberação apropriada de energia ao miocárdio."
      },
      {
        "id": "D",
        "texto": "O peito deve ser coberto com uma toalha grossa e seca e, em seguida, as pás devem ser fixadas firmemente por cima do tecido, garantindo assim o isolamento elétrico necessário para proteger o socorrista.",
        "correta": false,
        "explicacao": "As pás do DEA devem aderir DIRETAMENTE na pele nua da vítima. Colar pás sobre roupas ou toalhas impede completamente a leitura do ritmo cardíaco e a entrega da terapia de choque."
      }
    ]
  },
  {
    "id": 149,
    "pergunta": "Uma criança de 5 anos sofreu uma queimadura térmica extensa no tronco ao derramar água fervente sobre si. A pele apresenta bolhas, vermelhidão extrema e forte dor. Qual a conduta técnica apropriada para um socorrista leigo visando interromper o processo de queimadura e proteger a lesão sistemicamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estourar cuidadosamente as bolhas maiores para aliviar a pressão dolorosa e aplicar uma camada espessa de pomada cicatrizante antibacteriana para isolar a ferida do ambiente externo e patógenos.",
        "correta": false,
        "explicacao": "Romper bolhas deforma a barreira biológica natural, aumentando muito o risco de infecção grave. O uso de pomadas por leigos prejudica a avaliação médica posterior."
      },
      {
        "id": "B",
        "texto": "Cobrir a área afetada rapidamente com compressas embebidas em gelo ou água extremamente gelada, mantendo-as por pelo menos 30 minutos para garantir o resfriamento profundo e inibir a necrose.",
        "correta": false,
        "explicacao": "Gelo ou água congelante causam vasoconstrição severa e podem aprofundar a lesão queimando os tecidos adjacentes por congelamento, além de induzir hipotermia perigosa na criança."
      },
      {
        "id": "C",
        "texto": "Interromper o processo de queimadura resfriando a área com água corrente em temperatura ambiente (ou levemente morna) e cobrir a lesão com um curativo limpo e seco para prevenir hipotermia e infecção.",
        "correta": true,
        "explicacao": "Esta conduta segue o protocolo de trauma (PHTLS). A água corrente em temperatura ambiente cessa a propagação do calor de forma segura. Curativos secos e limpos minimizam riscos secundários de hipotermia associados a curativos úmidos extensos."
      },
      {
        "id": "D",
        "texto": "Remover imediatamente todas as peças de roupa da criança, inclusive aquelas que estejam derretidas e firmemente grudadas à pele queimada, para evitar que o tecido continue transmitindo calor latente.",
        "correta": false,
        "explicacao": "Embora tecidos quentes soltos devam ser retirados, roupas GRUDADAS à pele não devem ser tracionadas pelo leigo, pois arrancam a epiderme, causando sangramento e agravando a lesão (desbridamento acidental severo)."
      }
    ]
  },
  {
    "id": 150,
    "pergunta": "Você atende uma gestante (aparentemente no final do terceiro trimestre) que desmaiou repentinamente em um shopping e constata que ela está em Parada Cardiorrespiratória (PCR). Você está sozinho, sem DEA, e iniciará a RCP. O que as diretrizes atualizadas (AHA 2020) recomendam sobre a técnica principal para esta vítima?",
    "alternativas": [
      {
        "id": "A",
        "texto": "As compressões devem ser feitas no terço inferior do esterno, porém a vítima deve ser posicionada em decúbito lateral esquerdo durante todo o processo para aliviar inteiramente a compressão da veia cava.",
        "correta": false,
        "explicacao": "Realizar compressões torácicas com a vítima deitada de lado é mecanicamente ineficaz, pois não há uma superfície rígida contra a qual o coração possa ser comprimido."
      },
      {
        "id": "B",
        "texto": "A vítima deve permanecer deitada de costas (decúbito dorsal) em uma superfície rígida e as compressões devem ser realizadas no centro do peito da mesma forma e velocidade que em adultos não gestantes.",
        "correta": true,
        "explicacao": "Na ausência de mais socorristas para fazer o deslocamento manual do útero para a esquerda, a RCP de alta qualidade (compressões fortes e rápidas no centro do peito em superfície rígida) mantém a técnica tradicional e é a absoluta prioridade (AHA 2020)."
      },
      {
        "id": "C",
        "texto": "Devido à elevação do diafragma provocada pela gestação, as compressões torácicas devem ser realizadas em um ponto mais alto, exatamente sobre o manúbrio esternal superior, utilizando menos força física.",
        "correta": false,
        "explicacao": "Não há alteração na localização do posicionamento das mãos (metade inferior do osso esterno) ou na força requerida para a massagem cardíaca em gestantes. Diminuir a força resulta em RCP ineficaz."
      },
      {
        "id": "D",
        "texto": "A RCP padrão com compressões torácicas é contraindicada pelo risco eminente de trauma fetal fatal. O socorrista leigo deve limitar-se a fornecer apenas ventilações de resgate até o suporte avançado chegar.",
        "correta": false,
        "explicacao": "Não realizar compressões resultará na morte inequívoca da mãe e, consequentemente, do feto. O risco de morte pela parada cardíaca é infinitamente maior do que os eventuais riscos de trauma fetal durante as compressões."
      }
    ]
  },
  {
    "id": 151,
    "pergunta": "Um adolescente sofre uma crise convulsiva tônico-clônica generalizada na rua. Um transeunte tenta segurar firmemente os braços do jovem e tenta introduzir uma carteira dobrada entre seus dentes para evitar que ele engula a própria língua. Como socorrista treinado, como você identifica e corrige essas falhas técnicas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A conduta está correta quanto à proteção da língua, mas errada ao imobilizar os braços; o procedimento correto é segurar as pernas do jovem para evitar fraturas articulares durantes os abalos motores intensos.",
        "correta": false,
        "explicacao": "Ambas as condutas iniciais estão erradas e restringir fisicamente qualquer parte do corpo (incluindo pernas) durante uma convulsão pode causar distensões e luxações no paciente."
      },
      {
        "id": "B",
        "texto": "A imobilização dos braços é fundamental, mas não se deve usar uma carteira de couro na boca; o ideal é que o socorrista utilize os próprios dedos indicador e polegar para tracionar a língua do paciente para fora.",
        "correta": false,
        "explicacao": "Colocar os dedos na boca de uma vítima com abalos motores intensos resultará em uma amputação traumática e grave mordedura dos dedos do socorrista."
      },
      {
        "id": "C",
        "texto": "A conduta está totalmente errada. É anatomicamente impossível engolir a língua e inserir objetos pode causar fraturas dentárias e asfixia. Restringir movimentos gera luxações. O correto é afastar os objetos perigosos e proteger a cabeça.",
        "correta": true,
        "explicacao": "Durante convulsões, o manejo leigo foca inteiramente em evitar lesões traumáticas secundárias por meio da proteção cefálica, sem contenção agressiva ou introdução de objetos na cavidade oral."
      },
      {
        "id": "D",
        "texto": "A conduta falha gravemente ao não jogar água fria ou álcool no rosto da vítima para tentar interromper o ciclo neurológico da convulsão. A carteira deve ser substituída rapidamente por um pedaço de pano ou borracha macia.",
        "correta": false,
        "explicacao": "Nenhum estímulo tátil doloroso, térmico ou de cheiro interrompe a descarga elétrica anormal cerebral. Inserir panos também oferece grande risco de broncoaspiração."
      }
    ]
  },
  {
    "id": 152,
    "pergunta": "Durante um acidente doméstico com serra elétrica, um homem tem seu dedo indicador completamente amputado. Após o socorrista leigo estancar o sangramento do coto do paciente de forma eficaz, qual é o protocolo técnico correto para o acondicionamento e transporte exclusivo da parte amputada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar o dedo amputado diretamente dentro de um copo, tigela ou saco plástico com gelo e água, garantindo que a parte cortada fique completamente submersa para evitar a morte dos tecidos por isquemia prolongada.",
        "correta": false,
        "explicacao": "O contato direto dos tecidos não protegidos com a água ou o gelo provoca uma severa lesão térmica por congelamento e maceração tecidual celular, inviabilizando cirurgias de reimplante."
      },
      {
        "id": "B",
        "texto": "Envolver o dedo amputado em gaze limpa ou estéril levemente umedecida, colocá-lo em um saco plástico bem vedado e fechado, e inserir este saco dentro de outro recipiente externo contendo água e gelo misturados.",
        "correta": true,
        "explicacao": "Essa é a técnica de preservação ideal defendida pelo PHTLS. O tecido fica resfriado, aumentando o tempo de viabilidade isquêmica orgânica, mas protegido de lesões térmicas (gelo direto) e contaminação hídrica."
      },
      {
        "id": "C",
        "texto": "Lavar rigorosa e vigorosamente o dedo amputado com álcool 70% ou outro antisséptico forte para descontaminar a área de corte, e depois mantê-lo totalmente seco e exposto ao ar ambiente durante o transporte hospitalar.",
        "correta": false,
        "explicacao": "Álcool e antissépticos fortes são extremamente tóxicos para o endotélio, destruindo os microvasos sanguíneos cruciais para o reimplante microcirúrgico pelo cirurgião."
      },
      {
        "id": "D",
        "texto": "Realizar a sutura provisória ou fixação mecânica do dedo amputado de volta ao coto do paciente utilizando fita adesiva robusta ou bandagem compressiva apertada, visando manter a perfusão capilar mínima ativa pela proximidade.",
        "correta": false,
        "explicacao": "Tentativas de reanexação improvisadas por leigos são impossíveis de gerar perfusão, pois faltam anastomoses arteriais e venosas. Essa técnica contamina a ferida e destrói partes viáveis."
      }
    ]
  },
  {
    "id": 153,
    "pergunta": "Você é o primeiro a chegar em uma cena de acidente automobilístico envolvendo dois carros à noite. Há vazamento de combustível visível na pista, um motorista vagando atordoado com sangramento nasal, e outro motorista debruçado inconsciente sobre o volante no carro da frente que está esfumaçado. Qual a sequência de decisões prioritárias de um socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Correr imediatamente até o veículo esfumaçado para extrair a vítima inconsciente com a manobra de extricação rápida, pois o vazamento de combustível indica um risco extremo de explosão iminente com perigo de vida inquestionável.",
        "correta": false,
        "explicacao": "A regra de ouro é: 'não se torne a próxima vítima'. Entrar em cena insegura precipitadamente pode expor o socorrista ao risco letal do vazamento, tráfego da rodovia e incêndio, antes de haver ajuda técnica."
      },
      {
        "id": "B",
        "texto": "Atender primeiro a vítima que está vagando confusa pela rodovia, instruindo-a imediatamente a sentar-se na via e pinçar o nariz para estancar a hemorragia, antes de acionar as equipes de resgate especializadas para a vítima presa.",
        "correta": false,
        "explicacao": "Atender a vítima de menor gravidade (sangramento nasal) que perambula na via enquanto ignora falhas de segurança do ambiente e retarda o acionamento de emergência inverte as prioridades de triagem primária."
      },
      {
        "id": "C",
        "texto": "Garantir a própria segurança parando à distância, sinalizando o local adequadamente e acionando o socorro (193/192) relatando as vítimas, o local exato e os perigos aparentes (fumaça e fluidos na pista), sem invadir as zonas de risco extremo.",
        "correta": true,
        "explicacao": "As diretrizes estabelecem que a avaliação da segurança da cena e solicitação de ajuda adicional são o passo número 1 para o socorrista leigo frente a múltiplos riscos estruturais incontroláveis."
      },
      {
        "id": "D",
        "texto": "Pegar o pequeno extintor de pó químico do seu veículo e tentar debelar o foco primário do vazamento de combustível de perto. Em seguida, abrir as portas do veículo danificado e iniciar RCP na vítima inconsciente ali mesmo.",
        "correta": false,
        "explicacao": "Extintores automotivos comuns não são dimensionados para grandes derramamentos, o que submete o socorrista a riscos. Realizar RCP com o paciente sentado dentro do carro é ineficaz e inviável."
      }
    ]
  },
  {
    "id": 154,
    "pergunta": "Um homem foi esfaqueado na região do abdômen há cerca de 15 minutos e a faca foi sacada e levada pelo agressor, resultando em um forte sangramento interno não compressível visivelmente grave. Ele agora está consciente, porém extremamente pálido, com estado mental alterado, respiração rápida e pele gelada e suada. Essa apresentação clínica indica que patologia sistêmica perigosa, e qual a ação correta em primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Indica o desenvolvimento de uma síncope vasovagal profunda devido ao estresse emocional; o tratamento é tranquilizar intensamente a vítima, oferecer goles de água para manter a hidratação e mantê-la sentada e respirando fundo.",
        "correta": false,
        "explicacao": "A síncope vasovagal é transitória e não combina com trauma penetrante. Oferecer água a um paciente confuso e politraumatizado que fatalmente irá para bloco cirúrgico causa altíssimo risco e é vetado."
      },
      {
        "id": "B",
        "texto": "Indica um choque anafilático progressivo e letal provocado pelo contato sanguíneo com ligas metálicas da faca; a conduta de emergência é investigar pertences e injetar autoinjetor de epinefrina no músculo da coxa lateral.",
        "correta": false,
        "explicacao": "Choque anafilático cursa com reações alérgicas severas (edema, urticária, estridor). A clínica descrita é o reflexo clássico da ausência aguda de volume sanguíneo devido à hemorragia intracavitária contínua."
      },
      {
        "id": "C",
        "texto": "Indica que o paciente está entrando em estado iminente de parada cardiorrespiratória por falência nervosa; a conduta prioritária é deitar a vítima na posição lateral de segurança e administrar cinco ventilações de resgate forçadas.",
        "correta": false,
        "explicacao": "O paciente não está em parada respiratória primária (ainda respira rápido) e intervir com ventilações desnecessárias apenas expõe o socorrista a fluidos sem reverter a perda de volume mecânica."
      },
      {
        "id": "D",
        "texto": "Indica uma franca evolução para choque hipovolêmico grave devido à descompensação da perfusão; a conduta é mantê-lo deitado de costas, cobri-lo ativamente com uma manta limpa para prevenir hipotermia e monitorar as vias aéreas sem ofertar líquidos.",
        "correta": true,
        "explicacao": "Sinais de hipoperfusão após trauma (pele fria, taquicardia, alteração mental) caracterizam choque hemorrágico interno. Em ambiente leigo, as medidas profiláticas contra tríade letal envolvem manter aquecimento global corporal e aceleração cirúrgica hospitalar (SAMU urgente)."
      }
    ]
  },
  {
    "id": 155,
    "pergunta": "Você depara-se com um adulto caído no chão de um centro comercial, sem movimento. Ao aproximar-se e garantir que a cena é segura, qual é a sequência de avaliação inicial imediata (até 10 segundos) preconizada pela AHA (2020) para um socorrista leigo identificar uma Parada Cardiorrespiratória (PCR)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar estímulos dolorosos no esterno, abrir as vias aéreas usando a manobra de inclinação da cabeça e observar o movimento do tórax por até 30 segundos antes de pedir ajuda.",
        "correta": false,
        "explicacao": "Atrasa o diagnóstico e o socorro. A AHA recomenda não perder tempo com estímulos de dor prolongados ou avaliação demorada; a verificação deve durar no máximo 10 segundos."
      },
      {
        "id": "B",
        "texto": "Chamar a vítima pelos ombros em voz alta; se não responder, verificar simultaneamente a respiração (observando se há apneia ou respiração agônica/gasping) e acionar a emergência.",
        "correta": true,
        "explicacao": "Segundo a AHA (2020), o reconhecimento precoce da PCR baseia-se na ausência de resposta e na ausência de respiração normal (ou presença de gasping). A verificação simultânea otimiza o tempo."
      },
      {
        "id": "C",
        "texto": "Posicionar o ouvido próximo à boca e nariz da vítima para ouvir e sentir o fluxo de ar (Ver, Ouvir e Sentir), procurando ativamente o pulso radial no braço mais próximo.",
        "correta": false,
        "explicacao": "O antigo passo 'Ver, Ouvir e Sentir' foi removido das diretrizes da AHA por atrasar as compressões. Além disso, leigos não devem procurar pulso periférico (radial) para atestar PCR."
      },
      {
        "id": "D",
        "texto": "Verificar o tamanho das pupilas (se estão dilatadas) e o pulso carotídeo; em caso de ausência, iniciar o protocolo aplicando 2 ventilações de resgate antes das compressões.",
        "correta": false,
        "explicacao": "Avaliação pupilar não é critério rápido para PCR. O protocolo atual prioriza compressões primeiro (C-A-B), não ventilações, sendo o pulso opcional para socorristas leigos."
      }
    ]
  },
  {
    "id": 156,
    "pergunta": "Uma gestante no terceiro trimestre de gravidez está engasgada em um restaurante. Ela encontra-se consciente, mas apresenta cianose e incapacidade de tossir, falar ou respirar. Como socorrista, qual a adaptação técnica obrigatória para desobstrução das vias aéreas (OVACE) neste cenário específico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar compressões torácicas rápidas e vigorosas sobre a metade inferior do osso esterno, posicionando-se por trás da vítima, em substituição às compressões abdominais.",
        "correta": true,
        "explicacao": "Para gestantes em fase adiantada ou pessoas obesas, a Manobra de Heimlich (abdominal) é contraindicada. As diretrizes orientam compressões torácicas para criar a pressão artificial necessária."
      },
      {
        "id": "B",
        "texto": "Aplicar a Manobra de Heimlich tradicional, posicionando as mãos ligeiramente mais abaixo do umbigo, para que a pressão desloque o diafragma sem encostar diretamente no útero.",
        "correta": false,
        "explicacao": "Não se devem realizar compressões em nenhuma região abdominal em gestantes no terceiro trimestre pelo risco imediato de trauma fetal, descolamento de placenta e ruptura uterina."
      },
      {
        "id": "C",
        "texto": "Deitar a vítima em decúbito lateral esquerdo para aliviar a compressão da veia cava e desferir golpes vigorosos nas costas até que o corpo estranho seja expulso pela gravidade.",
        "correta": false,
        "explicacao": "Deitar a vítima consciente e engasgada anula a mecânica adequada de pressão para desobstrução e não faz parte do algoritmo para OVACE em adultos ou gestantes responsivas."
      },
      {
        "id": "D",
        "texto": "Estimular a tosse e aguardar que a vítima perca a consciência; nesse momento, deve-se realizar a varredura digital às cegas para retirar o objeto visando evitar parto prematuro por trauma.",
        "correta": false,
        "explicacao": "Esperar a vítima desmaiar é omissão de socorro. A varredura digital às cegas é expressamente proibida em qualquer protocolo de emergência pelo risco de agravar a obstrução."
      }
    ]
  },
  {
    "id": 157,
    "pergunta": "Durante um atendimento de emergência, você, como socorrista leigo único, identifica que um lactente (bebé de 6 meses) está em Parada Cardiorrespiratória. Ao iniciar as compressões torácicas, quais são a técnica, a profundidade e a taxa de frequência exatas recomendadas (AHA 2020)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Usar o calcanhar de uma mão no centro do tórax, comprimindo cerca de 5 cm de profundidade, a uma frequência de 80 a 100 compressões por minuto, sem ventilações.",
        "correta": false,
        "explicacao": "O uso do calcanhar da mão e a profundidade de 5 cm (ou mais) são adequados para crianças maiores e adultos, podendo causar trauma torácico severo num lactente. A frequência também está desatualizada."
      },
      {
        "id": "B",
        "texto": "Utilizar dois dedos (indicador e médio) no centro do tórax logo abaixo da linha dos mamilos, comprimindo cerca de 4 cm (um terço do diâmetro torácico), a uma frequência de 100 a 120 por minuto.",
        "correta": true,
        "explicacao": "Esta é a diretriz precisa da AHA para RCP em lactentes por um socorrista único. A profundidade segura é de aproximadamente 4 cm (1/3 do tórax), mantendo o ritmo de alta qualidade (100-120/min)."
      },
      {
        "id": "C",
        "texto": "Posicionar a mão em formato de concha sobre o esterno inferior, aplicando uma leve pressão de até 2 cm de profundidade, a uma frequência de 120 a 140 compressões por minuto.",
        "correta": false,
        "explicacao": "Compressões superficiais (2 cm) não geram débito cardíaco suficiente para perfusão encefálica. A frequência de 140 bpm ultrapassa a recomendação, impedindo o enchimento ventricular."
      },
      {
        "id": "D",
        "texto": "Utilizar a técnica dos dois polegares circundando o tórax, apertando profundamente o abdómen em conjunto com o tórax, numa cadência contínua de 100 compressões por minuto estáticas.",
        "correta": false,
        "explicacao": "Comprimir o abdómen em conjunto com o tórax está errado e causa danos hepáticos graves no lactente. Embora a técnica de dois polegares seja aceitável, não deve envolver a área abdominal."
      }
    ]
  },
  {
    "id": 158,
    "pergunta": "Um jovem que foi picado por uma abelha há 10 minutos num parque começa a apresentar inchaço no rosto, urticária generalizada, estridor respiratório ruidoso e tontura severa, caindo de joelhos no chão. Ele informa que tem alergia grave e possui um autoinjetor de epinefrina na mochila. Como você deve intervir em primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Oferecer muita água para diluir a toxina no sangue, sentá-lo numa cadeira para facilitar a respiração e aguardar o serviço de emergência chegar antes de usar qualquer medicação.",
        "correta": false,
        "explicacao": "A anafilaxia é rapidamente fatal (choque e asfixia). Oferecer líquidos a quem tem estridor respiratório causará broncoaspiração. Adiar o uso do autoinjetor piora drasticamente o prognóstico."
      },
      {
        "id": "B",
        "texto": "Deitar o jovem no chão de barriga para cima, realizar uma incisão de emergência na traqueia com uma caneta para garantir a via aérea (traqueostomia) e aplicar o injetor no peito.",
        "correta": false,
        "explicacao": "Procedimentos cirúrgicos como cricotireoidostomia são estritamente proibidos para leigos (mito de cinema). O autoinjetor de epinefrina não deve ser aplicado no peito, mas sim no músculo vasto lateral da coxa."
      },
      {
        "id": "C",
        "texto": "Auxiliar o jovem a aplicar o autoinjetor de epinefrina na face externa da coxa (mesmo sobre a roupa), deitá-lo de costas com as pernas elevadas para prevenir o choque e ligar para o 192.",
        "correta": true,
        "explicacao": "O uso imediato da epinefrina intramuscular é a primeira linha para anafilaxia. A posição supina com elevação das pernas compensa a vasodilatação profunda provocada pelo choque anafilático."
      },
      {
        "id": "D",
        "texto": "Lavar o local da picada com álcool, administrar imediatamente comprimidos anti-histamínicos triturados sob a língua e fazer massagem cardíaca para forçar a circulação do medicamento.",
        "correta": false,
        "explicacao": "Medicamentos orais demoram muito para agir e trazem risco de asfixia. Fazer compressões torácicas num paciente que ainda tem pulso e respira (mesmo com dificuldade) é uma violação gravíssima do SBV."
      }
    ]
  },
  {
    "id": 159,
    "pergunta": "Após um desabamento parcial de um telhado, um trabalhador da construção civil encontra-se inconsciente deitado sobre um cabo elétrico de alta tensão que se partiu. Há faíscas visíveis no solo húmido perto do corpo. Avaliando a segurança e o protocolo de trauma, qual a sua atitude imediata e fundamentada no local?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aproximar-se rapidamente com botas de borracha para puxar a vítima pelas roupas secas, tirando-a da fonte de energia, para iniciar a RCP imediatamente e garantir a oxigenação.",
        "correta": false,
        "explicacao": "O solo húmido e a alta tensão formam um arco voltaico mortal. Roupas e botas comuns não isolam o socorrista de altas voltagens. Essa ação resultará numa segunda vítima fatal."
      },
      {
        "id": "B",
        "texto": "Isolar totalmente a área, não tocar na vítima ou em qualquer objeto próximo, acionar o corpo de bombeiros (193) e a companhia elétrica para corte da energia antes de qualquer contato.",
        "correta": true,
        "explicacao": "A segurança da cena é a premissa máxima do PHTLS. Em emergências envolvendo alta tensão e solo condutor, o salvamento só ocorre após o bloqueio e certificação oficial da rede elétrica."
      },
      {
        "id": "C",
        "texto": "Utilizar um longo pedaço de madeira seca ou um cabo de vassoura para afastar o cabo elétrico do corpo da vítima com um movimento rápido, permitindo o acesso seguro ao paciente.",
        "correta": false,
        "explicacao": "A madeira (mesmo aparentemente seca) pode conter humidade interna ou sujidade, tornando-se condutora em caso de alta tensão. Leigos não devem manipular cabos caídos sob nenhuma hipótese."
      },
      {
        "id": "D",
        "texto": "Avançar cuidadosamente pisando apenas nos pontos secos do solo, aplicar pó químico do extintor sobre as faíscas para anular a condutividade e realizar a avaliação do pulso carotídeo.",
        "correta": false,
        "explicacao": "O pó químico não extingue a corrente elétrica ativa e não torna o solo seguro contra choques elétricos fulminantes. Ignora completamente o princípio primário de segurança da cena isolada."
      }
    ]
  },
  {
    "id": 160,
    "pergunta": "Num acidente numa oficina mecânica, uma chapa metálica causa um corte profundo na perna de um funcionário, resultando num sangramento vermelho vivo, jorrando pulsátilmente em grande volume (exsanguinante). A compressão direta falhou. Você decide aplicar um torniquete comercial que estava no kit de primeiros socorros. Qual é a conduta técnica correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar o torniquete 5 a 7 centímetros acima do ferimento, apertar o torniquete até que o sangramento vermelho pulsátil pare completamente, anotar o horário de aplicação e nunca o desapertar.",
        "correta": true,
        "explicacao": "O controle de hemorragia massiva de extremidades (o 'X' do XABCDE) exige que o torniquete seja apertado até obliterar o fluxo arterial, devendo permanecer apertado até à intervenção cirúrgica definitiva."
      },
      {
        "id": "B",
        "texto": "Aplicar o torniquete a cerca de 10 centímetros acima do ferimento, apertá-lo levemente para reduzir a dor da vítima, e afrouxá-lo rigorosamente a cada 15 minutos para restaurar a perfusão celular.",
        "correta": false,
        "explicacao": "Afrouxar o torniquete faz com que coágulos formados se soltem, reiniciando o choque hemorrágico, além de liberar toxinas isquémicas subitamente na corrente sanguínea. O torniquete deve causar dor se bem aplicado."
      },
      {
        "id": "C",
        "texto": "Posicionar o torniquete exatamente em cima do joelho (ou da articulação mais próxima do corte) para comprimir a artéria contra as estruturas ósseas largas, facilitando a hemostasia imediata.",
        "correta": false,
        "explicacao": "É proibido aplicar torniquetes diretamente sobre articulações (joelhos, cotovelos), pois os ossos impedem a compressão eficaz dos vasos subjacentes, não interrompendo o sangramento interno."
      },
      {
        "id": "D",
        "texto": "Girar a haste do torniquete até que a pele abaixo dele fique vermelha e quente, indicando que a hemorragia venosa foi controlada sem causar necrose à artéria principal da perna.",
        "correta": false,
        "explicacao": "Pele vermelha e quente abaixo da lesão indica fluxo sanguíneo preservado e represamento venoso (garrote venoso). O torniquete arterial correto deixa o membro distal pálido, frio e sem pulso."
      }
    ]
  },
  {
    "id": 161,
    "pergunta": "Um menino de 7 anos cai de uma altura de 3 metros (de cima de uma árvore) batendo violentamente com a cabeça no asfalto. Ele está sonolento, confuso e você nota que há saída contínua de um líquido claro e sanguinolento pelos ouvidos. De acordo com o raciocínio de trauma (PHTLS), o que esta clínica sugere e qual a conduta prioritária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sugere ruptura leve do tímpano pela pressão do ar; a conduta é tamponar o ouvido com algodão hidrófilo bem compactado para evitar a perda sanguínea e dar-lhe um analgésico.",
        "correta": false,
        "explicacao": "Quedas de grandes alturas com rebaixamento de consciência e saída de líquor são incompatíveis com lesões leves. Tamponar o ouvido retém o líquido craniano e eleva fatalmente a pressão intracraniana."
      },
      {
        "id": "B",
        "texto": "Sugere Traumatismo Cranioencefálico (TCE) grave com possível fratura de base de crânio; a conduta é manter a coluna cervical estabilizada manualmente, não bloquear a saída do líquido e acionar o 192 urgente.",
        "correta": true,
        "explicacao": "A saída de líquido cefalorraquidiano (LCR) é sinal clássico de fratura na base do crânio. Tamponar aumenta a pressão no cérebro. A estabilização da coluna cervical é mandatória devido à cinemática do trauma (A de vias aéreas e cervical)."
      },
      {
        "id": "C",
        "texto": "Sugere hemorragia subdural massiva; a conduta de emergência exige sentar a criança com as pernas cruzadas para baixar a pressão sanguínea na cabeça e realizar a hiperventilação de resgate.",
        "correta": false,
        "explicacao": "Sentar uma vítima de trauma contuso grave com alto risco de lesão medular viola o princípio básico de imobilização neutra alinhada. Hiperventilação profilática em leigos não é indicada."
      },
      {
        "id": "D",
        "texto": "Sugere um choque neurogénico em curso; a conduta imediata é lavar o interior do ouvido com água morna para limpar detritos ósseos e deitar a vítima na posição lateral de segurança à força.",
        "correta": false,
        "explicacao": "Lavar ouvidos lesados introduz agentes infecciosos diretamente no cérebro, originando meningite traumática fulminante. Mover vigorosamente um paciente traumatizado aumenta a lesão cervical primária."
      }
    ]
  },
  {
    "id": 162,
    "pergunta": "Uma criança de 2 anos apresenta febre alta (39,5°C) e subitamente inicia um quadro de convulsão febril tónico-clónica (com abalos do corpo e perda de consciência). Familiares em pânico começam a preparar uma banheira com gelo. Qual a conduta técnica baseada em evidências que você, como socorrista capacitado, deve implementar e comunicar à família?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Permitir o uso do banho de gelo imediatamente para quebrar a febre de forma abrupta, pois a alta temperatura é o gatilho da convulsão e sua reversão imediata protegerá os neurónios.",
        "correta": false,
        "explicacao": "O resfriamento abrupto (choque térmico por gelo) causa intensa vasoconstrição periférica, que impede a dissipação do calor central, além de induzir tremores musculares severos que aumentam ainda mais a febre interna."
      },
      {
        "id": "B",
        "texto": "Inserir uma colher ou pano dobrado entre os dentes da criança para proteger a língua, suspendê-la de cabeça para baixo para evitar broncoaspiração e mergulhá-la na água fria.",
        "correta": false,
        "explicacao": "Nunca introduza objetos na boca de alguém convulsionando (risco de quebrar dentes e asfixiar). Suspender a criança e mergulhá-la em água durante a crise oferece risco iminente de afogamento e luxações."
      },
      {
        "id": "C",
        "texto": "Impedir o banho de gelo. Proteger a cabeça da criança durante os abalos, cronometrar a crise e não tentar contê-la. Após o término da convulsão, aplicar compressas com água tépida/morna e acionar socorro.",
        "correta": true,
        "explicacao": "O foco na convulsão é evitar traumas secundários e monitorizar o tempo. O resfriamento de uma criança após convulsão febril deve ser gradual (água tépida/ambiente) para não gerar resposta de tremor ou choque térmico."
      },
      {
        "id": "D",
        "texto": "A convulsão febril indica infeção no líquido cefalorraquidiano. Deve-se imobilizar os braços e pernas rigorosamente, não abaixar a febre de modo algum, e administrar paracetamol líquido via oral durante os abalos.",
        "correta": false,
        "explicacao": "Dar líquidos ou medicamentos via oral para alguém em crise convulsiva resulta inevitavelmente na aspiração pulmonar do fluido. Conter fisicamente o paciente acarreta o risco de distensões e fraturas articulares."
      }
    ]
  },
  {
    "id": 163,
    "pergunta": "Você presencia um motociclista colidir contra um poste em alta velocidade. Ele encontra-se caído de costas, de capacete, totalmente inconsciente, flácido e não apresenta movimentos respiratórios (em apneia). Ao avaliar a situação com base nas diretrizes modernas (AHA e PHTLS), qual é a sua prioridade e manobra de decisão?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Preservar a coluna cervical mantendo o capacete intacto na cabeça. Aguardar rigorosamente pela equipa avançada, pois o risco de paraplegia anula a necessidade de compressões torácicas.",
        "correta": false,
        "explicacao": "Entre a possível lesão na medula espinhal e a morte certa por Parada Cardiorrespiratória (ausência de respiração), o suporte de vida cardiovascular tem absoluta prioridade. Esperar garante o óbito encefálico do paciente."
      },
      {
        "id": "B",
        "texto": "Não remover o capacete, mas iniciar imediatamente ventilações boca-a-boca através da viseira aberta, sem compressões torácicas, até que a respiração espontânea seja reestabelecida gradualmente.",
        "correta": false,
        "explicacao": "Fazer ventilações eficazes com o capacete integral posicionado é mecanicamente impossível. Além disso, vítima inconsciente e sem respiração requer compressões torácicas primárias (Algoritmo CAB), e não apenas ventilação."
      },
      {
        "id": "C",
        "texto": "Remover o capacete cuidadosamente (preferencialmente em dupla para manter o eixo cabeça-pescoço-tronco) e iniciar de imediato as compressões torácicas contínuas fortes e rápidas no centro do peito.",
        "correta": true,
        "explicacao": "Em cenários de PCR induzida por trauma sistémico grave, a regra universal é 'vida sobre membro'. O capacete deve ser retirado para permitir compressões/ventilações adequadas, sendo a reanimação a prioridade máxima e inadiável."
      },
      {
        "id": "D",
        "texto": "Sentar o paciente para facilitar o fluxo de oxigénio para os pulmões, retirar o capacete de forma rápida puxando-o por trás, e aplicar palmadas fortes entre as omoplatas para desobstrução pulmonar.",
        "correta": false,
        "explicacao": "Sentar um doente de trauma severo acentua lesões cervicais, puxar o capacete isoladamente lesa a coluna e pancadas nas costas só se aplicam em OVACE (engasgo) em vítimas conscientes, não em vítimas paradas."
      }
    ]
  },
  {
    "id": 164,
    "pergunta": "Um familiar portador de Diabetes Tipo 1 passa horas sem comer e começa a apresentar sudorese fria, palidez, confusão mental intensa e tremores visíveis (hipoglicemia severa). Subitamente, ele revira os olhos e fica completamente inconsciente e irresponsivo no sofá. Qual é o procedimento exato de primeiros socorros neste instante?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Preparar um copo de água com três colheres de açúcar e forçar o paciente a beber entornando o líquido pela boca, visto que a restauração da glicose encefálica deve ser instantânea.",
        "correta": false,
        "explicacao": "A administração de qualquer alimento sólido ou líquido (incluindo água com açúcar) para uma pessoa que perdeu a consciência, independentemente da causa, é uma das principais falhas críticas pelo alto e iminente risco de asfixia pulmonar."
      },
      {
        "id": "B",
        "texto": "Nada de líquidos por via oral. Verificar a respiração; se estiver a respirar normalmente, colocá-lo na Posição Lateral de Segurança (PLS) e acionar imediatamente o serviço de emergência médica (192/112).",
        "correta": true,
        "explicacao": "A regra de ouro de SBV dita que vítimas inconscientes não engolem em segurança. Na perda de consciência por hipoglicemia, previne-se a queda da base da língua (via PLS) e solicita-se socorro médico para via intravenosa avançada."
      },
      {
        "id": "C",
        "texto": "Procurar imediatamente a caneta de insulina na bagagem do paciente e aplicar uma dose elevada no abdómen, visto que quadros diabéticos com perda de sentidos são exclusivamente por picos altos de glicose (hiperglicemia).",
        "correta": false,
        "explicacao": "O diagnóstico situacional aponta para hipoglicemia severa (jejum, tremores, suor frio). Administrar insulina agravaria fatalmente e rapidamente a falta de glicose cerebral, levando a choque insulínico e morte irreversível."
      },
      {
        "id": "D",
        "texto": "Deitá-lo de costas em superfície rígida e iniciar imediatamente o protocolo de compressões torácicas, pois a ausência de resposta ao chamado num paciente diabético confirma clinicamente uma Parada Cardíaca Silenciosa.",
        "correta": false,
        "explicacao": "Inconsciência não é sinónimo automático de Parada Cardíaca. O socorrista deve obrigatoriamente verificar a ausência de respiração antes de iniciar RCP. Compressões em alguém vivo e a respirar agravam o estado de stress sistémico."
      }
    ]
  },
  {
    "id": 165,
    "pergunta": "Você testemunha o colapso súbito de um adulto em uma praça. Ele está irresponsivo e sem respiração normal. Com base na Cadeia de Sobrevivência Extra-hospitalar (AHA 2020) aplicada no Brasil, qual é a ordem cronológica e técnica exata dos dois primeiros elos que você, como socorrista leigo, deve executar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Iniciar compressões torácicas imediatas de alta qualidade e, em seguida, acionar o serviço de emergência (192 ou 193) para não atrasar a perfusão miocárdica.",
        "correta": false,
        "explicacao": "A ordem está invertida. A AHA preconiza que, para adultos, o acionamento precoce do serviço médico de emergência (192/193) antecede a RCP, garantindo que o socorro avançado e o DEA estejam a caminho."
      },
      {
        "id": "B",
        "texto": "Acionar o serviço de emergência (SAMU 192 ou Bombeiros 193) imediatamente e iniciar a RCP de alta qualidade, focada em compressões torácicas contínuas.",
        "correta": true,
        "explicacao": "Os dois primeiros elos da Cadeia de Sobrevivência para adultos em ambiente extra-hospitalar são o Acionamento Imediato do Serviço de Emergência e a RCP Precoce com ênfase nas compressões (AHA 2020)."
      },
      {
        "id": "C",
        "texto": "Aplicar duas ventilações de resgate para reoxigenar o sangue estagnado e, logo após, solicitar a um transeunte que ligue para o 190 (Polícia Militar) para registrar a ocorrência.",
        "correta": false,
        "explicacao": "O protocolo atual (C-A-B) prioriza compressões e não ventilações iniciais. Além disso, a Polícia (190) não é o serviço primário de regulação médica e envio de ambulâncias de suporte avançado."
      },
      {
        "id": "D",
        "texto": "Procurar um Desfibrilador Externo Automático (DEA) pelo bairro por até 3 minutos e, caso não o encontre, ligar para o 192 e iniciar as massagens cardíacas profundas.",
        "correta": false,
        "explicacao": "Abandonar uma vítima de PCR por vários minutos para procurar um DEA reduz as chances de sobrevivência a quase zero. O acionamento do 192 deve ser imediato, no local, preferencialmente via celular no viva-voz."
      }
    ]
  },
  {
    "id": 166,
    "pergunta": "Durante uma reforma, um operário cai de um andaime e uma haste de vergalhão de ferro transfixa profundamente seu peito (objeto empalado). O paciente está consciente, com dor extrema e dificuldade respiratória. O que o protocolo de trauma (PHTLS) determina como conduta absoluta para o socorrista neste cenário?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remover o objeto empalado com um movimento rápido e contínuo para minimizar a dor, selando o orifício imediatamente com um curativo plástico adesivo de três pontas.",
        "correta": false,
        "explicacao": "É estritamente proibido remover objetos empalados (exceto em obstruções respiratórias na bochecha/via aérea). O objeto atua como um 'tampão' para os vasos rompidos; removê-lo causa hemorragia interna letal."
      },
      {
        "id": "B",
        "texto": "Envolver o vergalhão com gazes, ataduras ou panos limpos para estabilizá-lo firmemente no lugar, evitando que qualquer movimento do objeto cause novas lesões internas, e acionar o 192/193.",
        "correta": true,
        "explicacao": "A estabilização mecânica de um objeto empalado é a conduta padrão. Usa-se curativos volumosos ao redor da base do objeto para imobilizá-lo e transferir o paciente para o centro cirúrgico com o objeto in loco."
      },
      {
        "id": "C",
        "texto": "Cortar a parte externa do vergalhão rentemente à pele com uma serra elétrica para facilitar o transporte da vítima na maca da ambulância que está a caminho.",
        "correta": false,
        "explicacao": "Cortar o objeto transmite intensas vibrações e calor diretamente para os órgãos internos da vítima, aumentando massivamente a hemorragia e a lesão tecidual (efeito de serra interna)."
      },
      {
        "id": "D",
        "texto": "Despejar água oxigenada ou iodo diretamente no ferimento ao redor do metal para prevenir infecções por tétano, e manter o paciente sentado com as pernas cruzadas.",
        "correta": false,
        "explicacao": "Soluções antissépticas são tóxicas para os tecidos profundos expostos. A prioridade não é a assepsia profilática, mas sim a prevenção do choque hemorrágico e o transporte seguro e estabilizado (supino)."
      }
    ]
  },
  {
    "id": 167,
    "pergunta": "Um lactente (bebê de 9 meses) que estava engasgado e consciente subitamente perde a consciência e fica mole em seus braços, parando de responder. Qual a transição imediata e correta do protocolo de desobstrução (OVACE) para o Suporte Básico de Vida (AHA 2020)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Continuar a aplicar os 5 golpes nas costas seguidos de 5 compressões torácicas, porém agora com o bebê deitado de lado no chão para facilitar a saída passiva do objeto.",
        "correta": false,
        "explicacao": "A técnica de 5 golpes e 5 compressões é exclusiva para lactentes CONSCIENTES. Uma vez inconsciente, a vítima exige a transição imediata para o protocolo de RCP (compressões e ventilações)."
      },
      {
        "id": "B",
        "texto": "Abrir a boca do bebê e realizar uma varredura rigorosa com o dedo mindinho para extrair o objeto, para então iniciar duas ventilações de resgate forçadas e massagem cardíaca.",
        "correta": false,
        "explicacao": "A varredura digital às cegas é permanentemente proibida, pois em vítimas inconscientes (cujo tônus muscular relaxou) o dedo frequentemente empurra o objeto ainda mais fundo, selando a via aérea."
      },
      {
        "id": "C",
        "texto": "Deitar o bebê em uma superfície rígida e iniciar imediatamente a RCP com 30 compressões torácicas. Ao abrir as vias aéreas para ventilar, olhar a boca e retirar o objeto apenas se for claramente visível e alcançável.",
        "correta": true,
        "explicacao": "Na vítima inconsciente por OVACE, as compressões torácicas atuam aumentando a pressão intratorácica (podendo expelir o objeto). A inspeção visual da cavidade oral antes de ventilar substitui a varredura às cegas."
      },
      {
        "id": "D",
        "texto": "Pegar o lactente pelos pés, suspendê-lo de ponta-cabeça e dar três palmadas fortes nos glúteos, aproveitando o relaxamento muscular causado pela inconsciência para ejetar a obstrução.",
        "correta": false,
        "explicacao": "Sacudir ou suspender o bebê pelos pés é perigoso, causa lesões cervicais/cranianas e não está previsto em nenhuma diretriz atualizada de reanimação ou OVACE."
      }
    ]
  },
  {
    "id": 168,
    "pergunta": "Um familiar relata uma sensação de 'peso de elefante' no peito, que irradia para o braço esquerdo e mandíbula, acompanhado de suor frio e náusea. Suspeitando de Infarto Agudo do Miocárdio (IAM), e enquanto outra pessoa liga para o SAMU (192), qual a sua conduta de posicionamento e suporte até a chegada do resgate?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Deitar a vítima imediatamente no chão de barriga para cima e erguer suas pernas a 45 graus para garantir a circulação cerebral caso ele desmaie.",
        "correta": false,
        "explicacao": "A elevação das pernas aumenta o retorno venoso, sobrecarregando mecanicamente o coração que já está em sofrimento isquêmico severo (pré-carga aumentada), piorando o quadro do IAM."
      },
      {
        "id": "B",
        "texto": "Ajudar o paciente a ficar em pé e estimulá-lo a caminhar lentamente pelo ambiente, instruindo-o a tossir com força repetidamente para forçar a desobstrução das artérias coronárias.",
        "correta": false,
        "explicacao": "Esforço físico (caminhar) aumenta a demanda de oxigênio do miocárdio, agravando o infarto. O 'tossir para reverter infarto' (CPR por tosse) é um mito de internet sem validade para leigos."
      },
      {
        "id": "C",
        "texto": "Oferecer muita água gelada para reduzir a sudorese e administrar remédios para gases, visto que os sintomas do infarto e indigestão gástrica são idênticos em 90% dos casos.",
        "correta": false,
        "explicacao": "Dar líquidos a alguém com suspeita de IAM e náusea tem alto risco de vômito e broncoaspiração, além do risco do paciente evoluir rapidamente para PCR ou síncope."
      },
      {
        "id": "D",
        "texto": "Colocar a vítima em uma posição de repouso confortável (sentada ou semissentada em 'W'), afrouxar roupas apertadas e mantê-la o mais calma e imóvel possível, aguardando o 192 e buscando o DEA mais próximo.",
        "correta": true,
        "explicacao": "A posição sentada ou reclinada diminui o esforço cardíaco, facilita a respiração e reduz a pré-carga. O repouso absoluto, ambiente calmo e a preparação do DEA são os pilares corretos para leigos no IAM."
      }
    ]
  },
  {
    "id": 169,
    "pergunta": "Um acidente industrial ocorre e um pó químico altamente reativo (como soda cáustica seca ou cal virgem) é derramado abundantemente sobre o braço de um trabalhador, causando queimação grave imediata. Qual é o protocolo técnico rigoroso para o manejo inicial deste tipo de queimadura química?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lavar a área imediatamente e de forma abundante com jatos de água fria sob pressão por no mínimo 20 minutos, para diluir o produto tóxico o mais rápido possível.",
        "correta": false,
        "explicacao": "Molhar substâncias químicas SECAS (como a cal virgem) gera uma violenta reação exotérmica (liberação de calor extremo), agravando severamente a queimadura em vez de tratá-la."
      },
      {
        "id": "B",
        "texto": "Escovar rigorosamente a maior quantidade possível do pó seco para fora da pele usando panos, escovas macias ou luvas, ANTES de iniciar a lavagem contínua com grandes volumes de água corrente.",
        "correta": true,
        "explicacao": "A prioridade nas queimaduras por pó químico é a remoção mecânica segura da substância a seco. Só após remover o pó é seguro irrigar copiosamente com água para diluir o agente residual sem causar reações térmicas graves."
      },
      {
        "id": "C",
        "texto": "Aplicar imediatamente uma solução neutralizante oposta (ex: suco de limão ou vinagre para bases, ou bicarbonato para ácidos) para anular a capacidade destrutiva do pó antes da lavagem.",
        "correta": false,
        "explicacao": "Tentar neutralizar agentes químicos na pele gera reações térmicas (calor) fortíssimas devido ao choque ácido-base, piorando imensamente a extensão e profundidade das lesões dos tecidos."
      },
      {
        "id": "D",
        "texto": "Cobrir o braço acidentado com plásticos transparentes e apertados para selar o oxigênio e abafar o pó químico, impedindo sua penetração sistêmica até a chegada no pronto-socorro.",
        "correta": false,
        "explicacao": "Cobrir um agente corrosivo ativo o mantém em íntimo contato prolongado com a pele do paciente, garantindo o aprofundamento contínuo da queimadura química até a derme profunda e fáscia."
      }
    ]
  },
  {
    "id": 170,
    "pergunta": "Durante uma briga com facas, uma pessoa sofre um corte profundo na região da virilha (zona juncional pélvica). Há sangue vermelho e rutilante saindo em grande volume. Como o ferimento é muito alto e próximo ao tronco, é impossível aplicar um torniquete. Qual técnica validada o socorrista deve utilizar para controlar essa hemorragia exsanguinante?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Apertar um cinto firmemente ao redor da cintura do paciente, passando por cima da virilha machucada, criando um torniquete abdominal improvisado de contenção.",
        "correta": false,
        "explicacao": "Torniquetes na cintura/abdome comprimem a cavidade abdominal e seus órgãos internos moles de forma catastrófica, sendo inúteis para fechar grandes artérias profundas ilíacas ou femorais."
      },
      {
        "id": "B",
        "texto": "Elevar a perna afetada o mais alto possível para inverter a gravidade e aplicar compressas geladas sobre a pelve para causar vasoconstrição da artéria ilíaca.",
        "correta": false,
        "explicacao": "Elevação de membros e gelo são completamente ineficazes contra sangramentos arteriais massivos em grandes calibres, atrasando as técnicas que salvam a vida do doente chocado."
      },
      {
        "id": "C",
        "texto": "Realizar o preenchimento da ferida (wound packing) introduzindo gaze limpa (ou tecido) ativamente para dentro do orifício até enchê-lo por completo, seguido de compressão manual direta e vigorosa por vários minutos.",
        "correta": true,
        "explicacao": "Para hemorragias exsanguinantes em áreas juncionais (axilas e virilhas) onde o torniquete não se aplica, o 'wound packing' combinado com pressão direta contínua é o padrão ouro no PHTLS e Hartford Consensus."
      },
      {
        "id": "D",
        "texto": "Pincetar a artéria rompida internamente usando os próprios dedos em formato de pinça e aplicar supercola no orifício externo para selar o vaso de forma impermeável.",
        "correta": false,
        "explicacao": "Tentar pinçar artérias às cegas sem instrumentos cirúrgicos é impossível em áreas hemorrágicas escorregadias, e o uso de cola não contém pressão arterial alta, sendo condutas proibidas."
      }
    ]
  },
  {
    "id": 171,
    "pergunta": "Um adulto é retirado de uma piscina após sofrer um afogamento e encontra-se inconsciente, sem responder, sem respirar e roxo. Segundo as diretrizes da AHA (2020) focadas também em afogamento, qual a conduta para um leigo treinado ao intervir nesta Parada Cardiorrespiratória específica de origem hipóxica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Apoiar a vítima de bruços sobre o joelho do socorrista e realizar repetidas compressões no estômago para retirar a água dos pulmões antes de fazer o ar entrar.",
        "correta": false,
        "explicacao": "Não se deve tentar retirar a água dos pulmões (como manobras de Heimlich ou de bruços). Essa água é rapidamente absorvida ou está em pouca quantidade, e manobras do tipo atrasam a RCP e induzem a vômitos severos."
      },
      {
        "id": "B",
        "texto": "Iniciar a RCP convencional focando no padrão exclusivo de compressões torácicas contínuas (Hands-Only CPR), uma vez que a ventilação boca a boca está proscrita e banida para vítimas na água.",
        "correta": false,
        "explicacao": "Para PCR por asfixia/afogamento, a falta primária é o oxigênio (hipóxia). As diretrizes da AHA enfatizam fortemente que, nestes casos, as ventilações de resgate SÃO cruciais e devem ser realizadas em conjunto com as compressões (30:2)."
      },
      {
        "id": "C",
        "texto": "Aplicar a RCP fornecendo compressões torácicas e, fundamentalmente, ventilações de resgate (na proporção 30:2), pois reverter a hipóxia severa é vital para a retomada do ritmo cardíaco neste paciente.",
        "correta": true,
        "explicacao": "Em PCR de origem não cardíaca primária (afogamentos, asfixia), o suprimento de oxigênio é o diferencial na sobrevivência. A AHA preconiza fortemente a RCP tradicional (compressão + ventilação) nesses cenários."
      },
      {
        "id": "D",
        "texto": "Verificar os batimentos no pulso radial do pescoço, aquecer o corpo com cobertores grossos no peito e aguardar os bombeiros (193), não interferindo fisicamente no paciente molhado.",
        "correta": false,
        "explicacao": "Aguardar o resgate e não realizar a RCP em uma vítima ausente de respiração sela inevitavelmente o óbito (falha no elo de Suporte Básico Imediato)."
      }
    ]
  },
  {
    "id": 172,
    "pergunta": "Uma jovem estava muito tempo em pé numa fila ensolarada e, repentinamente, teve uma síncope (desmaio por hipoperfusão cerebral transitória). Ao cair, amparada por amigos, ela acorda em menos de 1 minuto, parecendo pálida e confusa. Qual a conduta correta de primeiros socorros logo após a recuperação da consciência?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Erguê-la rapidamente, colocá-la em pé novamente sob forte amparo físico e forçá-la a andar para estimular de volta o fluxo do sangue nas pernas.",
        "correta": false,
        "explicacao": "Levantar uma pessoa imediatamente após uma síncope vasovagal causa o retorno brusco do sangue para as pernas por gravidade, ocasionando inevitavelmente um segundo desmaio, frequentemente com trauma cefálico associado."
      },
      {
        "id": "B",
        "texto": "Mantê-la deitada no chão ou recostada confortavelmente em ambiente fresco, e se não houver suspeita de trauma ou dor forte, elevar levemente suas pernas para ajudar o retorno venoso, acalmando-a.",
        "correta": true,
        "explicacao": "O decúbito dorsal associado à elevação dos membros inferiores combate a hipotensão postural momentânea. O repouso em ambiente ventilado permite a autorregulação circulatória gradual e segura do paciente."
      },
      {
        "id": "C",
        "texto": "Oferecer imediatamente um copo de água mineral com sal ou açúcar misturado, instruindo-a a beber rápido, para repor a pressão arterial em queda e a energia térmica.",
        "correta": false,
        "explicacao": "Oferecer bebidas para uma pessoa recém-acordada (ainda confusa neurológicamente) oferece imenso risco de engasgo e broncoaspiração grave. O reflexo de deglutição demora a ficar 100% competente."
      },
      {
        "id": "D",
        "texto": "Iniciar ciclos curtos de 10 compressões torácicas no centro do peito para impulsionar fisicamente o sangue estagnado para o encéfalo e acelerar o retorno das cores vitais.",
        "correta": false,
        "explicacao": "Compressões torácicas são manobras extremas, indicadas exclusivamente para vítimas sem pulso e sem respiração. Realizá-las em um paciente vivo, acordado e com pulso causa danos estruturais imensos."
      }
    ]
  },
  {
    "id": 173,
    "pergunta": "Durante um jogo de dardos, um participante sofre um trauma perfurante ocular, e o dardo acerta e fica alojado em seu olho esquerdo. A dor é excruciante e o sangramento é ativo. Levando em conta as complexidades anatômicas visuais, qual o curativo e conduta ideais de um socorrista prestando os primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tentar tracionar cuidadosamente o dardo em linha reta perfeita e cobrir o globo ocular machucado com esparadrapo para forçar o fechamento da pálpebra lesionada.",
        "correta": false,
        "explicacao": "Não se removem objetos empalados do globo ocular, sob pena de perda total de líquidos internos (humor aquoso/vítreo) e destruição estrutural do olho afetado."
      },
      {
        "id": "B",
        "texto": "Instilar soro fisiológico sob altíssima pressão para forçar o objeto metálico a sair por escorregamento e aplicar compressas geladas sobre o olho exposto.",
        "correta": false,
        "explicacao": "Pressão e líquidos agitação deslocam o objeto alojado, e a água sob pressão agrava a evisceração de tecidos finos oculares, piorando o trauma permanentemente."
      },
      {
        "id": "C",
        "texto": "Aplicar pressão contínua e forte no osso acima do olho e fazer o doente sentar com a cabeça baixa entre os joelhos para o sangue escoar para o chão.",
        "correta": false,
        "explicacao": "Nunca se deve aplicar pressão sobre ou perto de um olho traumatizado e aberto; além disso, abaixar a cabeça aumenta perigosamente a pressão intraocular pela gravidade venosa."
      },
      {
        "id": "D",
        "texto": "Proteger o dardo alojado com um copo rígido apoiado nos ossos da face, imobilizá-lo, e vendar também o olho SAUDÁVEL simultaneamente, acionando o SAMU (192) urgente.",
        "correta": true,
        "explicacao": "Ao vendar também o olho bom, anula-se o 'movimento simpático/conjugado' (os olhos movem-se sempre juntos e sincronizados). O copo cria um escudo rígido, evitando que o objeto empalado mova-se e lacere mais o encéfalo ou o globo."
      }
    ]
  },
  {
    "id": 174,
    "pergunta": "Ao ligar um Desfibrilador Externo Automático (DEA) para usar numa vítima de Parada Cardíaca (que está deitada no chão), você observa que o homem apresenta um adesivo de medicação forte (ex: nitrato ou fentanil) exatamente no local superior direito do peito, onde uma das pás deve ser aplicada. Qual a abordagem preconizada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remover o adesivo de medicação (utilizando luvas para proteger-se), limpar rapidamente a área da pele para retirar resíduos e aplicar a pá do DEA na pele seca do local apropriado.",
        "correta": true,
        "explicacao": "As diretrizes (AHA) instruem a remover adesivos transdérmicos antes da aplicação das pás. Se o choque incidir sobre o adesivo metálico/medicado, haverá impedância da corrente e graves queimaduras cutâneas na vítima."
      },
      {
        "id": "B",
        "texto": "Fixar a pá adesiva do DEA exatamente em cima do adesivo de medicação sem removê-lo, visto que tentar retirá-lo perderá os segundos de ouro necessários para reverter a fibrilação.",
        "correta": false,
        "explicacao": "Colar a pá do DEA sobre o adesivo não permite que o choque passe pelo tórax e anula a terapia elétrica, além de incendiar ou vaporizar compostos químicos do emplastro de medicamentos."
      },
      {
        "id": "C",
        "texto": "Colocar as pás do DEA na área abdominal inferior ou nas costas da vítima, fugindo integralmente de toda a região torácica para evitar interações medicamentosas elétricas indesejáveis.",
        "correta": false,
        "explicacao": "Mudar radicalmente o eixo de posicionamento das pás impede que a carga atinja adequadamente os ventrículos cardíacos, reduzindo bruscamente a probabilidade de reanimação."
      },
      {
        "id": "D",
        "texto": "Descartar o uso do DEA completamente e depender exclusivamente das massagens cardíacas com as mãos, já que correntes elétricas potencializam venenos contidos nos adesivos cutâneos.",
        "correta": false,
        "explicacao": "Não usar o DEA quando disponível em uma PCR extra-hospitalar é o maior erro de conduta possível, diminuindo em cerca de 10% a chance de sobrevida por cada minuto atrasado no choque de desfibrilação."
      }
    ]
  },
  {
    "id": 175,
    "pergunta": "Durante um almoço familiar, um idoso subitamente deixa cair o talher e apresenta fala arrastada. Ao pedir para ele sorrir, um lado do rosto não se move. Qual é a conduta prioritária e a justificativa fisiopatológica adequada para um socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Oferecer um copo de água com açúcar para descartar hipoglicemia severa, que frequentemente simula os mesmos sintomas.",
        "correta": false,
        "explicacao": "Oferecer via oral para um paciente com provável déficit neurológico e fala arrastada gera alto risco de broncoaspiração fatal."
      },
      {
        "id": "B",
        "texto": "Acionar o SAMU (192) imediatamente, informando o horário exato do início dos sintomas para avaliar a janela terapêutica.",
        "correta": true,
        "explicacao": "A identificação rápida via escala SAMU/FAST e a notificação do tempo de início são críticas para o tratamento trombolítico hospitalar."
      },
      {
        "id": "C",
        "texto": "Deitar a vítima com as pernas elevadas para aumentar o fluxo sanguíneo cerebral até a chegada das equipes de resgate.",
        "correta": false,
        "explicacao": "Elevar as pernas em caso de suspeita de Acidente Vascular Cerebral (AVC) pode aumentar a Pressão Intracraniana (PIC), agravando o quadro."
      },
      {
        "id": "D",
        "texto": "Iniciar a aferição de sinais vitais e aguardar cerca de 15 minutos para confirmar se os sintomas regridem espontaneamente.",
        "correta": false,
        "explicacao": "Tempo é cérebro. Aguardar qualquer melhora espontânea atrasa o acionamento do serviço de emergência e reduz as chances de sobrevida sem sequelas."
      }
    ]
  },
  {
    "id": 176,
    "pergunta": "Um trabalhador sofreu um corte profundo na coxa com uma serra circular, apresentando sangramento em jato contínuo e volumoso. Você decide aplicar um torniquete comercial. Qual das seguintes técnicas descreve a aplicação correta baseada no protocolo XABCDE?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar o torniquete exatamente sobre a articulação do joelho para garantir a compressão direta e eficaz da artéria poplítea.",
        "correta": false,
        "explicacao": "O torniquete nunca deve ser aplicado sobre uma articulação, pois a mecânica óssea impede a compressão arterial adequada."
      },
      {
        "id": "B",
        "texto": "Posicionar o dispositivo cerca de 5 a 7 centímetros acima do ferimento, apertando a haste de torção até que o sangramento cesse completamente.",
        "correta": true,
        "explicacao": "Conforme o PHTLS, o torniquete deve ser colocado proximal à lesão (5-7 cm) e ajustado firmemente até a oclusão total do sangramento arterial."
      },
      {
        "id": "C",
        "texto": "Apertar o torniquete até diminuir o fluxo, afrouxando-o cuidadosamente a cada 15 minutos para evitar isquemia permanente do membro.",
        "correta": false,
        "explicacao": "É um mito perigoso. O leigo nunca deve afrouxar um torniquete após aplicado, pois isso pode liberar toxinas (síndrome de reperfusão) e retomar a hemorragia letal."
      },
      {
        "id": "D",
        "texto": "Colocar o torniquete diretamente sobre o ferimento sangrante e cobrir o dispositivo com várias ataduras para mantê-lo bem aquecido.",
        "correta": false,
        "explicacao": "O torniquete deve ficar acima do ferimento, não diretamente sobre ele, e nunca deve ser escondido sob curativos ou roupas."
      }
    ]
  },
  {
    "id": 177,
    "pergunta": "Um bebê de 8 meses engasgou com um pequeno brinquedo. Durante a aplicação das manobras de desengasgo (tapotagem e compressões torácicas), a criança perde a consciência e fica totalmente flácida. Qual é o próximo passo imediato para o socorrista?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Continuar aplicando as 5 pancadas nas costas e 5 compressões no tórax com mais força para expelir o objeto, agora que a criança relaxou a musculatura.",
        "correta": false,
        "explicacao": "Quando o bebê engasgado se torna irresponsivo, as manobras de desobstrução (tapotagem) devem ser imediatamente descontinuadas."
      },
      {
        "id": "B",
        "texto": "Posicionar o bebê em uma superfície plana e rígida e iniciar imediatamente as compressões torácicas da RCP, verificando a boca antes de cada tentativa de ventilação.",
        "correta": true,
        "explicacao": "Diretriz AHA 2020: Engasgo que evolui para inconsciência exige transição imediata para RCP, inspecionando a boca visivelmente antes de ventilar, sem varreduras às cegas."
      },
      {
        "id": "C",
        "texto": "Realizar uma varredura digital às cegas na garganta do bebê na tentativa de alcançar o objeto antes de iniciar o protocolo de reanimação cardiopulmonar.",
        "correta": false,
        "explicacao": "A varredura digital às cegas é estritamente contraindicada, pois pode empurrar o corpo estranho ainda mais profundamente nas vias aéreas do lactente."
      },
      {
        "id": "D",
        "texto": "Suspender o bebê pelas pernas de cabeça para baixo e aplicar leves golpes no dorso, aproveitando a ação da gravidade para tentar desalojar o objeto obstrutivo.",
        "correta": false,
        "explicacao": "Suspender a criança pelas pernas não faz parte das diretrizes científicas e apresenta risco iminente de queda grave e trauma craniano."
      }
    ]
  },
  {
    "id": 178,
    "pergunta": "Um telhador cai de uma altura de 4 metros e atinge as costas no chão de cimento. Ele está consciente, mas queixa-se de intensa dor no pescoço e ausência de sensibilidade nas pernas. Ao avaliar a cena segura, o que o leigo deve priorizar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tracionar suavemente a cabeça do paciente alinhando-a ao eixo do corpo para descomprimir a medula espinhal antes da chegada do resgate.",
        "correta": false,
        "explicacao": "O socorrista leigo nunca deve tracionar ou tentar realinhar o pescoço, pois qualquer movimentação inadequada pode seccionar completamente a medula espinhal."
      },
      {
        "id": "B",
        "texto": "Orientar a vítima a não se mover, estabilizar manualmente a cabeça na posição em que foi encontrada e acionar o 193 informando a alta energia da cinemática.",
        "correta": true,
        "explicacao": "A restrição de movimento da coluna (estabilização manual em posição neutra/encontrada) e o acionamento de suporte avançado (Bombeiros) são as prioridades absolutas no trauma raquimedular."
      },
      {
        "id": "C",
        "texto": "Pedir para a vítima tentar mover agressivamente os dedos dos pés para confirmar o grau exato da lesão medular antes de realizar a ligação de emergência.",
        "correta": false,
        "explicacao": "Incentivar movimentos desnecessários pode agravar a lesão primária, e retardar o acionamento para fazer avaliações neurológicas é um erro crítico no APH leigo."
      },
      {
        "id": "D",
        "texto": "Retirar o capacete do trabalhador rapidamente para garantir que as vias aéreas permaneçam totalmente pérvias, caso ele perca a consciência abruptamente.",
        "correta": false,
        "explicacao": "A remoção de capacete por leigos não é recomendada a menos que haja risco iminente à vida (ex: parada cardiorrespiratória), pois compromete a estabilização cervical."
      }
    ]
  },
  {
    "id": 179,
    "pergunta": "Um adulto é retirado de uma piscina inconsciente e sem respiração normal (apresenta apenas gasping). Um DEA (Desfibrilador Externo Automático) é trazido até você. Como proceder corretamente com o uso do equipamento nesta situação específica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar as pás do DEA diretamente sobre o tórax molhado para não atrasar a análise do ritmo, visto que o aparelho atual possui isolamento elétrico contra água.",
        "correta": false,
        "explicacao": "A água no tórax pode impedir a adesão das pás ou conduzir a eletricidade pelo líquido, reduzindo a carga entregue ao coração e gerando risco de queimadura ou choque acidental."
      },
      {
        "id": "B",
        "texto": "Enxugar rapidamente o tórax do paciente com uma toalha seca antes de colar as pás adesivas e seguir imediatamente os comandos de voz emitidos pelo aparelho.",
        "correta": true,
        "explicacao": "Diretriz AHA: Em vítimas retiradas da água, o tórax deve ser rapidamente enxugado para garantir a aderência correta dos eletrodos e a eficácia da entrega do choque terapêutico."
      },
      {
        "id": "C",
        "texto": "Chocar o paciente na borda molhada da piscina, certificando-se apenas de que ninguém está tocando na vítima diretamente no exato momento da desfibrilação.",
        "correta": false,
        "explicacao": "A vítima não precisa estar completamente seca, mas o tórax sim. Estar em uma superfície com poças de água aumenta os riscos de dispersão elétrica e acidentes com a equipe."
      },
      {
        "id": "D",
        "texto": "Aguardar a equipe do SAMU chegar ao local, pois o uso do DEA por socorristas leigos é estritamente contraindicado em vítimas de afogamento devido ao alto risco elétrico.",
        "correta": false,
        "explicacao": "É um mito. O DEA é seguro para uso por leigos em vítimas de afogamento, desde que o paciente seja removido da água e o tórax seja previamente enxugado."
      }
    ]
  },
  {
    "id": 180,
    "pergunta": "Em uma briga de bar, um homem sofre um ferimento por arma branca na região abdominal. Você nota que há presença de alças intestinais expostas para fora do ferimento. A cena já foi garantida e está segura com a chegada da PM (190). Como manejar esta lesão de forma técnica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Recolocar cuidadosamente as alças intestinais na cavidade abdominal utilizando luvas descartáveis e cobrir firmemente com uma bandagem compressiva.",
        "correta": false,
        "explicacao": "Nunca se deve reintroduzir órgãos eviscerados, pois isso aumenta drasticamente o risco de contaminação intra-abdominal, infecção severa e danos aos vasos mesentéricos."
      },
      {
        "id": "B",
        "texto": "Não tentar reintroduzir os órgãos expostos. Cobrir a exposição imediatamente com curativos limpos e mantê-los úmidos, acionando o SAMU (192).",
        "correta": true,
        "explicacao": "O PHTLS preconiza que órgãos eviscerados sejam protegidos por curativos estéreis ou limpos umedecidos (para evitar ressecamento e isquemia do tecido), sem aplicar pressão no local."
      },
      {
        "id": "C",
        "texto": "Limpar vigorosamente a área exposta com álcool ou antisséptico forte para prevenir infecção intra-abdominal e cobrir o ferimento com um pano completamente seco.",
        "correta": false,
        "explicacao": "Produtos químicos em tecidos internos causam danos irreversíveis. Além disso, usar um curativo seco fará com que o tecido grude, dificultando o manejo cirúrgico posterior."
      },
      {
        "id": "D",
        "texto": "Oferecer pequenos goles de água limpa para a vítima manter a hidratação constante, visto que ela perderá muito líquido pela exposição da cavidade.",
        "correta": false,
        "explicacao": "Pacientes com traumas penetrantes ou abdominais devem ser mantidos em jejum absoluto devido ao altíssimo risco de broncoaspiração e necessidade iminente de anestesia cirúrgica."
      }
    ]
  },
  {
    "id": 181,
    "pergunta": "Um jovem sofreu uma crise convulsiva tônico-clônica generalizada no corredor de uma escola. Os fortes abalos musculares cessaram após 2 minutos. Agora, ele respira de forma ruidosa, está bastante confuso e salivando em excesso. Qual a intervenção correta nesta fase pós-ictal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Inserir um pedaço de pano dobrado ou um lenço enrolado entre os dentes do jovem para evitar que ele acabe mordendo ou engolindo a própria língua.",
        "correta": false,
        "explicacao": "Mito perigoso. Inserir objetos na boca pode quebrar dentes do paciente, machucar o socorrista ou obstruir completamente a via aérea. A língua não é 'engolida'."
      },
      {
        "id": "B",
        "texto": "Rolar o paciente em bloco e gentilmente para a posição lateral de segurança (PLS) com o intuito de facilitar a drenagem da saliva e manter a via aérea aberta.",
        "correta": true,
        "explicacao": "No período pós-ictal, a vítima fica rebaixada e relaxada. A PLS previne a queda da língua contra a faringe e permite a drenagem de fluídos (saliva/vômito), evitando broncoaspiração."
      },
      {
        "id": "C",
        "texto": "Oferecer imediatamente a medicação anticonvulsivante de resgate via oral que ele carrega na mochila para evitar categoricamente que uma nova crise se inicie.",
        "correta": false,
        "explicacao": "Oferecer medicamentos via oral a uma pessoa letárgica ou confusa após uma crise (pós-ictal) é um erro gravíssimo que levará a asfixia ou pneumonia aspirativa."
      },
      {
        "id": "D",
        "texto": "Restringir os movimentos dos braços e pernas da vítima utilizando força física considerável para evitar que ele se machuque com espasmos residuais e involuntários.",
        "correta": false,
        "explicacao": "Restringir uma vítima de crise convulsiva, seja durante os abalos ou na recuperação, pode resultar em luxações ósseas, distensões musculares e agitação extrema."
      }
    ]
  },
  {
    "id": 182,
    "pergunta": "Uma panela pesada com água fervente tomba sobre o antebraço de uma cozinheira, gerando bolhas imediatas e pele intensamente vermelha. Qual é o tratamento de primeiros socorros adequado para minimizar a gravidade desta lesão térmica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Furar propositalmente as bolhas maiores com uma agulha esterilizada para aliviar a tensão da pele e aplicar qualquer pomada cicatrizante disponível.",
        "correta": false,
        "explicacao": "Bolhas (flictenas) nunca devem ser rompidas por leigos, pois servem como barreira biológica estéril. Rompê-las aumenta drasticamente o risco de infecção grave da pele."
      },
      {
        "id": "B",
        "texto": "Resfriar a área afetada abundantemente com água corrente em temperatura ambiente por 10 a 20 minutos e, a seguir, cobrir levemente com pano limpo e seco.",
        "correta": true,
        "explicacao": "Água limpa em temperatura ambiente cessa a progressão térmica da queimadura na pele. Proteger com pano limpo e solto reduz a dor por exposição e minimiza a contaminação."
      },
      {
        "id": "C",
        "texto": "Aplicar gelo diretamente sobre a queimadura por 5 minutos para causar vasoconstrição periférica e interromper rapidamente as vias de dor neurológica profunda.",
        "correta": false,
        "explicacao": "Aplicar gelo ou água congelante em queimaduras provoca uma nova injúria celular (queimadura por frio) somada à térmica, destruindo tecidos viáveis e aprofundando a lesão."
      },
      {
        "id": "D",
        "texto": "Remover imediatamente toda a roupa sintética que porventura tenha derretido e aderido à pele antes de resfriar, para evitar o risco de contaminação residual.",
        "correta": false,
        "explicacao": "Roupas grudadas na queimadura não devem ser tracionadas ou arrancadas pelo socorrista, pois esse ato arrancará junto camadas de pele íntegras, causando hemorragia e choque."
      }
    ]
  },
  {
    "id": 183,
    "pergunta": "Durante uma caminhada em trilha, um campista com histórico de alergia severa é picado por uma abelha. Ele começa a apresentar rápido inchaço nos lábios, chiado estridente no peito (estridor) e extrema dificuldade para respirar. Ele relata possuir uma caneta de autoinjeção de epinefrina. Como você deve atuar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ajudar a administrar a epinefrina no músculo deltoide do braço, aguardar deitado por 30 minutos e ligar para o 192 apenas se os sintomas de asfixia não melhorarem.",
        "correta": false,
        "explicacao": "A aplicação no deltoide não tem a mesma taxa de absorção muscular. Além disso, em casos de anafilaxia, o socorro deve ser acionado simultaneamente ao uso da medicação."
      },
      {
        "id": "B",
        "texto": "Auxiliar imediatamente o paciente a aplicar o autoinjetor de epinefrina no músculo vasto lateral da coxa (face externa superior) e acionar o resgate logo em seguida.",
        "correta": true,
        "explicacao": "As diretrizes da AHA recomendam que o leigo ajude na autoadministração rápida da epinefrina na face externa da coxa em casos de anafilaxia com risco de vida, ligando para o resgate."
      },
      {
        "id": "C",
        "texto": "Evitar o uso da caneta de epinefrina por ser um procedimento médico restrito e arriscado, aplicando compressas frias e gelo no pescoço para reduzir o inchaço obstrutivo.",
        "correta": false,
        "explicacao": "Compressas frias não revertem choque anafilático. A anafilaxia mata em minutos e a hesitação em usar ou ajudar com a epinefrina autoinjetável disponível é um erro fatal."
      },
      {
        "id": "D",
        "texto": "Oferecer um comprimido de anti-histamínico via oral de uso contínuo e pedir para o paciente caminhar rapidamente de volta ao acampamento base em busca de ajuda de terceiros.",
        "correta": false,
        "explicacao": "Dar comprimido para alguém com edema de glote causará asfixia obstrutiva total. Fazer a vítima caminhar acelera o choque distributivo pela falência circulatória."
      }
    ]
  },
  {
    "id": 184,
    "pergunta": "Uma explosão severa em um galpão industrial arremessa uma vítima ao chão, que se encontra irresponsiva. Ao avaliar a cena, você nota que a vítima está com uma respiração muito lenta e agônica (gasping) e tem o braço direito parcialmente amputado, jorrando sangue de forma pulsátil. Com base na abordagem XABCDE de trauma, qual é a sua primeira intervenção de suporte de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Iniciar as compressões torácicas profundas imediatamente, pois a presença da respiração agônica (gasping) é o sinal universal claro de Parada Cardiorrespiratória (PCR).",
        "correta": false,
        "explicacao": "Fazer RCP em um paciente com hemorragia exsanguinante ativa sem controlar o sangramento fará com que o sangue seja bombeado para fora do corpo, resultando em morte inevitável."
      },
      {
        "id": "B",
        "texto": "Aplicar um torniquete tático alto e apertado no membro amputado para conter a hemorragia exsanguinante antes de iniciar qualquer manejo das vias aéreas ou ventilações.",
        "correta": true,
        "explicacao": "Segundo a 10ª edição do PHTLS, o passo primário e vital no trauma letal é o controle de hemorragias exsanguinantes (X) antes mesmo de abrir vias aéreas (A) ou observar respiração (B)."
      },
      {
        "id": "C",
        "texto": "Realizar rapidamente a abertura manual das vias aéreas com elevação do queixo (chin-lift) e fornecer duas ventilações de resgate eficazes para estabilizar os níveis de oxigênio sanguíneo.",
        "correta": false,
        "explicacao": "Priorizar a ventilação sobre um controle de hemorragia massiva contradiz o protocolo XABCDE; o paciente perderá todo o volume de sangue antes que o oxigênio chegue às células."
      },
      {
        "id": "D",
        "texto": "Elevar o membro amputado bem acima da linha do nível do coração e realizar uma compressão direta de forma suave e contínua para evitar maiores danos aos tecidos viáveis.",
        "correta": false,
        "explicacao": "Hemorragias arteriais jorrantes e maciças provenientes de amputações requerem intervenção contundente imediata (torniquete), visto que elevação e compressão suave falharão irremediavelmente."
      }
    ]
  },
  {
    "id": 185,
    "pergunta": "Você encontra um lactente (6 meses) no berço, pálido, cianótico e totalmente sem resposta a estímulos. Após checar rapidamente, constata que ele não respira. Você está absolutamente sozinho e não possui celular à mão. Qual a sequência técnica correta segundo a AHA 2020?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Correr para fora de casa para pedir ajuda aos vizinhos imediatamente antes de iniciar qualquer manobra, garantindo que o SAMU (192) seja acionado de pronto.",
        "correta": false,
        "explicacao": "Para lactentes/crianças (comum PCR por asfixia), se socorrista único e sem comunicação, a AHA preconiza realizar cerca de 2 minutos de RCP antes de abandonar a vítima para chamar ajuda."
      },
      {
        "id": "B",
        "texto": "Iniciar a RCP realizando 30 compressões no centro do tórax (usando 2 dedos) seguidas de 2 ventilações, mantendo a proporção por 2 minutos antes de ir buscar ajuda.",
        "correta": true,
        "explicacao": "AHA 2020: Socorrista leigo solitário deve focar na relação 30:2 (compressão-ventilação) com dois dedos logo abaixo da linha mamilar por 5 ciclos antes de acionar o resgate."
      },
      {
        "id": "C",
        "texto": "Aplicar 5 fortes pancadas nas costas seguidas de 5 compressões torácicas, visto que a causa mais estatisticamente comum de PCR em bebês é o engasgo noturno.",
        "correta": false,
        "explicacao": "O protocolo de 5 tapotagens/5 compressões é exclusivo para lactentes conscientes engasgados. Em PCR confirmada (irresponsivo e sem respiração), a conduta é iniciar RCP (compressão torácica ininterrupta e ventilação)."
      },
      {
        "id": "D",
        "texto": "Ventilar a boca e o nariz da criança 15 vezes seguidas para reverter a grave hipóxia tecidual antes de iniciar as compressões torácicas profundas.",
        "correta": false,
        "explicacao": "A sequência atual de reanimação é C-A-B (Compressão, Vias Aéreas, Boa Respiração). Retardar o início das compressões torácicas para realizar múltiplas ventilações zera a pressão de perfusão cerebral."
      }
    ]
  },
  {
    "id": 186,
    "pergunta": "Um marceneiro sofre um acidente de trabalho e tem uma longa farpa de madeira (20 cm) encravada profundamente no globo ocular direito. Ele está consciente e gritando de dor. O socorro (193) já foi chamado. Qual a conduta técnica adequada no manejo imediato dessa lesão?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Retirar a farpa o mais rápido possível e de forma reta, evitando que substâncias tóxicas da madeira penetrem ainda mais e atinjam o nervo óptico.",
        "correta": false,
        "explicacao": "Objetos empalados nunca devem ser removidos no ambiente pré-hospitalar, pois a retirada causará hemorragia incontrolável e avulsão (destruição) total dos tecidos oculares."
      },
      {
        "id": "B",
        "texto": "Quebrar a extremidade externa da farpa para facilitar o transporte na ambulância e aplicar uma bandagem apertada diretamente sobre a pálpebra lesionada.",
        "correta": false,
        "explicacao": "Qualquer pressão no globo ocular lesionado causará a extrusão (vazamento) do humor vítreo e perda permanente do olho. Além disso, tentar quebrar o objeto transferirá força mecânica letal ao olho."
      },
      {
        "id": "C",
        "texto": "Estabilizar manualmente ou com curativos volumosos o objeto sem aplicar pressão no olho, e colocar um curativo frouxo sobre o olho não afetado (saudável).",
        "correta": true,
        "explicacao": "PHTLS: Objetos empalados devem ser estabilizados. Tampar ambos os olhos previne o 'movimento ocular conjugado' (quando um olho se move, o outro acompanha), evitando que a lesão se agrave com os espasmos."
      },
      {
        "id": "D",
        "texto": "Orientar o trabalhador a piscar continuamente para que a lubrificação lacrimal natural expulse o corpo estranho, deixando o olho são aberto para evitar pânico.",
        "correta": false,
        "explicacao": "Piscar agita fisicamente a estrutura do globo ocular contra o objeto perfurante, lacerando tecidos milimetricamente a cada movimento. A imobilização deve ser o mais passiva possível."
      }
    ]
  },
  {
    "id": 187,
    "pergunta": "Uma jovem de 20 anos desmaia subitamente (síncope) na fila sob forte calor, mas recupera a consciência por completo em cerca de 20 segundos. Ela permanece caída, pálida, levemente confusa e relata jejum prolongado. Qual a conduta correta durante a avaliação primária da cena?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fornecer imediatamente um copo de refrigerante e fazê-la beber de forma rápida, visando reverter velozmente uma crise hipoglicêmica severa instalada.",
        "correta": false,
        "explicacao": "Oferecer bebidas para uma pessoa com o nível de consciência ainda alterado ou confusa pós-desmaio acarreta risco altíssimo de broncoaspiração fatal."
      },
      {
        "id": "B",
        "texto": "Puxá-la rapidamente pelos braços até a posição sentada e empurrar sua cabeça entre os joelhos para forçar o sangue de volta ao cérebro usando a gravidade mecânica.",
        "correta": false,
        "explicacao": "Mudar a postura bruscamente para sentado/em pé causará hipotensão postural severa, fazendo a vítima desmaiar novamente de imediato, correndo risco de trauma craniano secundário."
      },
      {
        "id": "C",
        "texto": "Mantê-la deitada de costas, elevar suas pernas acima do nível do coração e afrouxar roupas apertadas enquanto ela se recupera, avaliando a necessidade do 192.",
        "correta": true,
        "explicacao": "A elevação dos membros inferiores em vítimas sem suspeita de trauma aumenta o retorno venoso passivo, melhorando rapidamente a perfusão cerebral na síncope comum."
      },
      {
        "id": "D",
        "texto": "Umedecer um algodão com álcool isopropílico 70% e colocar fixamente sob as narinas da vítima para garantir a reativação prolongada do sistema nervoso central.",
        "correta": false,
        "explicacao": "Inalar álcool, amônia ou perfumes fortes é um mito perigoso que irrita as vias aéreas, pode provocar espasmo de glote ou crises de asma, e não trata a fisiopatologia do desmaio."
      }
    ]
  },
  {
    "id": 188,
    "pergunta": "Vítima de acidente envolvendo maquinário agrícola apresenta grande laceração na virilha esquerda (zona juncional) com esguicho rítmico de sangue vivo (sangramento arterial massivo). A aplicação de torniquete clássico é anatomicamente impossível. Qual a conduta imediata para salvar a vida desta vítima?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Posicionar a vítima virada de bruços para que a pressão natural contra o solo sirva de efeito tamponante sobre a bacia e aguardar a chegada das unidades médicas avançadas.",
        "correta": false,
        "explicacao": "A pressão passiva contra o chão é insuficiente contra a pressão sistólica arterial (esguicho jorrante). A vítima morrerá por choque hipovolêmico em menos de 3 minutos."
      },
      {
        "id": "B",
        "texto": "Realizar o preenchimento firme da ferida (wound packing) com gaze hemostática ou pano limpo, aplicando pressão direta, forte e contínua no interior da cavidade ferida.",
        "correta": true,
        "explicacao": "Segundo o PHTLS 10ª edição, sangramentos exsanguinantes em zonas juncionais (axila, virilha, pescoço) exigem o preenchimento compressivo profundo (wound packing) seguido de pressão direta manual contínua."
      },
      {
        "id": "C",
        "texto": "Abster-se do manejo hemorrágico tático para priorizar categoricamente a liberação das vias aéreas (chin-lift), pois tecidos da virilha contêm alta carga de patógenos.",
        "correta": false,
        "explicacao": "O protocolo moderno inicia com 'X' (Hemorragias exsanguinantes) antes do 'A' (Vias aéreas). Garantir oxigênio é inútil se o corpo perder todo o volume sanguíneo circulante capaz de transportá-lo."
      },
      {
        "id": "D",
        "texto": "Fazer um torniquete abdominal largo, apertando um cinto vigorosamente acima da linha do umbigo, na tentativa de comprimir a artéria aorta e cortar o fluxo distal.",
        "correta": false,
        "explicacao": "Torniquetes em membros (braços/pernas) são eficientes. Tentar garrotear o abdome de forma improvisada é ineficaz para oclusão aórtica e esmagará órgãos vitais internos."
      }
    ]
  },
  {
    "id": 189,
    "pergunta": "Você presencia um adolescente tendo uma convulsão tônico-clônica no pátio do shopping. Ele se debate intensamente e espuma pela boca. Populares se aglomeram; uma mulher tenta imobilizar as pernas dele com o próprio corpo e outro homem tenta inserir um pedaço de madeira entre os dentes dele. Qual a sua ação de liderança e conduta técnica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Permitir apenas que o homem insira o pedaço de madeira rapidamente, pois evitar a laceração da língua é a maior urgência neurológica a ser prevenida nessa situação de emergência.",
        "correta": false,
        "explicacao": "Tentar inserir qualquer objeto durante o trismo mandibular (espamo maxilar) da convulsão resulta na fratura dos dentes da vítima e asfixia mecânica imediata."
      },
      {
        "id": "B",
        "texto": "Ajudar a mulher a deitar sobre as pernas do adolescente para impedir as contusões ósseas secundárias, orientando os demais a abrirem bastante espaço para a ventilação do local.",
        "correta": false,
        "explicacao": "Conter os movimentos físicos de uma vítima em crise convulsiva provoca lesões musculoesqueléticas graves, como luxações de ombro e rompimento de ligamentos."
      },
      {
        "id": "C",
        "texto": "Afastar as pessoas, impedir a contenção dos membros ou a inserção de objetos na boca, proteger a cabeça do jovem com algo macio (ex: uma bolsa) e monitorar a duração da crise.",
        "correta": true,
        "explicacao": "O manejo seguro envolve exclusão de riscos (cena limpa), proteção do crânio contra impactos recorrentes e cronometragem da crise. Nenhuma contenção ou manipulação oral é aceitável."
      },
      {
        "id": "D",
        "texto": "Levantar a cabeça da vítima abruptamente e jogar água fria em seu rosto repetidamente com a finalidade médica de provocar o choque térmico e resetar as sinapses elétricas cerebrais.",
        "correta": false,
        "explicacao": "Mito perigoso. Água jogada no rosto será facilmente broncoaspirada enquanto a vítima está sem controle de vias aéreas, causando sufocamento obstrutivo imediato."
      }
    ]
  },
  {
    "id": 190,
    "pergunta": "Uma criança de 5 anos puxou uma panela no fogão e derramou água fervente sobre o peito e abdome. A criança está chorando compulsivamente, e a camisa de tecido sintético está derretida e firmemente colada à pele, que já apresenta extensas áreas avermelhadas e bolhas abertas. Qual a primeira intervenção adequada de primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Arrancar a camisa da criança num único movimento firme para garantir que o plástico derretido não prolongue a lesão térmica queimando as camadas mais profundas da derme.",
        "correta": false,
        "explicacao": "Remover tecidos grudados/derretidos arranca severamente as camadas da epiderme e derme, agravando profundamente a lesão, causando dor alucinante e hemorragia maciça."
      },
      {
        "id": "B",
        "texto": "Espalhar generosamente pastas à base de óleo mineral ou compostos hidratantes comuns sobre as flictenas (bolhas) rompidas para evitar contaminações bacterianas pelo ar ambiente.",
        "correta": false,
        "explicacao": "Pomadas e óleos em queimaduras agudas retêm o calor tecidual (piorando a queimadura), exigem remoção mecânica dolorosa no hospital e aumentam de forma crônica a incidência de infecção."
      },
      {
        "id": "C",
        "texto": "Resfriar as áreas lesadas jogando água limpa em temperatura ambiente (corrente contínua) mesmo por cima das roupas grudadas, cortando apenas as partes soltas da blusa com tesoura.",
        "correta": true,
        "explicacao": "A água corrente resfria o tecido e interrompe a propagação do dano térmico celular. Cortar o redor do tecido aderido sem tracionar a pele evita o agravamento irreversível (avulsão) da lesão térmica."
      },
      {
        "id": "D",
        "texto": "Aplicar compressas rígidas de gelo envoltas em plástico diretamente sobre a pele crua do tórax por no mínimo meia hora, aliviando de forma permanente os nociceptores de dor da vítima.",
        "correta": false,
        "explicacao": "Gelo causa intensa vasoconstrição e queimadura secundária (lesão térmica por frio), destruindo as células viáveis que restaram ao redor da queimadura original primária."
      }
    ]
  },
  {
    "id": 191,
    "pergunta": "Um homem de 65 anos, participando de um churrasco regado a bastante bebida, subitamente deixa a lata de cerveja escorregar da mão direita, fala de modo ininteligível e repuxa a comissura labial (boca torta) unilateralmente. Os amigos afirmam: 'Ele só bebeu rápido demais, logo passa'. Qual o perigo fatal de acatar essa dedução popular?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Perder a oportunidade vital de deitá-lo e elevar suas pernas de forma tática para tratar o nítido choque vasovagal precipitado pelo consumo excessivo e rápido de bebida destilada.",
        "correta": false,
        "explicacao": "Esses não são sinais característicos de síncope vasovagal. Elevar pernas em um paciente que pode vomitar por embriaguez aumenta imensamente o risco asfíxico."
      },
      {
        "id": "B",
        "texto": "Atribuir sinais evidentes e cardinais de um Acidente Vascular Cerebral (escala SAMU/FAST) apenas à intoxicação, perdendo a janela restrita de tempo exigida para a reversão trombolítica no hospital.",
        "correta": true,
        "explicacao": "Apresentar perda de força súbita unilateral, fala arrastada e desvio de rima facial são indicadores de AVC. O maior erro leigo é o viés de confirmação atribuindo tais sinais apenas ao álcool e atrasando o chamado ao 192."
      },
      {
        "id": "C",
        "texto": "Não visualizar que a vítima já entrou num processo patológico irreversível de Parada Cardiorrespiratória e negligenciar a aplicação mecânica do Suporte Básico de Vida (RCP na calçada).",
        "correta": false,
        "explicacao": "A vítima apresenta déficits neurológicos, mas se mantém desperta e respirando (estava com o copo na mão, conversando ininteligivelmente), logo não encontra-se em PCR clínica para receber RCP."
      },
      {
        "id": "D",
        "texto": "Focar demasiadamente em chamar o SAMU (192) e esquecer de induzir mecanicamente o vômito do idoso com o dedo para desintoxicar rapidamente todo seu sistema gastrointestinal inferior.",
        "correta": false,
        "explicacao": "Induzir vômito em vítima com déficit neurológico/motor e engolimento prejudicado (disfagia do AVC) levará obrigatoriamente à aspiração pulmonar do conteúdo gástrico e morte precoce."
      }
    ]
  },
  {
    "id": 192,
    "pergunta": "Uma mulher sofre grave esmagamento no tórax contra o painel do veículo. Ela está consciente mas relata falta de ar sufocante. Ao expor o tórax da paciente (Cena Segura), você percebe um 'movimento paradoxal': uma seção específica das costelas afunda para dentro do corpo quando ela puxa o ar, e projeta-se para fora quando ela solta o ar. O que este sinal sugere e o que se deve fazer?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sugere enfisema subcutâneo global. A conduta é realizar compressões torácicas firmes e contínuas sobre as costelas afetadas para obrigar o pulmão a expandir no compasso correto.",
        "correta": false,
        "explicacao": "Compressões torácicas são usadas unicamente na Parada Cardiorrespiratória. Fazer compressões mecânicas em vítima consciente com costelas quebradas rasgará pulmões e coração."
      },
      {
        "id": "B",
        "texto": "Sugere que a vítima já sofreu morte cerebral e perdeu o centro autônomo. A conduta exigida é apenas cobri-la com um lençol térmico e aguardar pericialmente pelo socorro primário.",
        "correta": false,
        "explicacao": "A vítima está consciente, queixando-se de dor e lutando para respirar, descartando completamente o quadro de morte cerebral clínica. Necessita assistência passiva imediata."
      },
      {
        "id": "C",
        "texto": "Sugere o quadro cinemático de Tórax Instável (várias costelas fraturadas em mais de um ponto). A conduta deve ser chamar o resgate (193/192) e não imobilizar ou comprimir a falha óssea, mantendo a vítima em posição confortável para oxigenar.",
        "correta": true,
        "explicacao": "O movimento paradoxal define o Tórax Instável (PHTLS). Antigamente se ensinava a apertar ou enfaixar o local; hoje, a restrição de expansão do hemitórax é contraindicada. A prioridade é suporte avançado e mínima manipulação."
      },
      {
        "id": "D",
        "texto": "Sugere hiperventilação de pânico isolado. A conduta do leigo é mandar a vítima respirar lenta e profundamente dentro de um saco de papel pardo para aumentar cirurgicamente os níveis de CO2.",
        "correta": false,
        "explicacao": "O movimento anatômico paradoxal da caixa torácica evidencia um dano estrutural gravíssimo dos ossos, não sendo algo gerado por transtornos de ansiedade ou quadros conversivos psicogênicos."
      }
    ]
  },
  {
    "id": 193,
    "pergunta": "Durante uma exploração em mata fechada, um ecologista é picado no tornozelo por uma serpente oculta. O membro rapidamente incha, apresentando dor urente e marcas dos dois dentes (presas) injetores. Sabendo que o resgate especializado na trilha levará algumas horas, qual o procedimento científico atual que você, como primeiro respondedor, adotará?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar duas incisões longitudinais com estilete no formato de cruz sobre o ponto de inoculação e fazer fortes sucções repetidas com a boca para drenar todo o conteúdo tóxico da peçonha.",
        "correta": false,
        "explicacao": "Cortar e sugar é um procedimento deletério e reprovado cientificamente. Aumenta gravemente infecções, destrói tecidos viáveis, acarreta perda de sangue, e a sucção não remove a peçonha já sistêmica."
      },
      {
        "id": "B",
        "texto": "Garantir a tranquilidade da vítima evitando seu deslocamento contínuo a pé, lavar os orifícios da picada superficialmente com água, manter a perna afetada no nível do coração e buscar suporte médico para administração soroterápica.",
        "correta": true,
        "explicacao": "Diretrizes de áreas remotas / MS: Acelerar os batimentos cardíacos dissemina a peçonha. O tratamento baseia-se em repouso absoluto, higienização básica e evacuação calma do paciente para que receba soro antiofídico no hospital."
      },
      {
        "id": "C",
        "texto": "Instalar de imediato um torniquete comercial estreito cinco centímetros acima dos furos das presas, ajustando-o letalmente apertado a fim de confinar e isolar a necrose tóxica da área.",
        "correta": false,
        "explicacao": "Garrotear ou aplicar torniquetes em membros acidentados por serpentes (especialmente jararaca/cascavel) confina o veneno proteolítico e isquemia o tecido conjuntamente, garantindo amputação precoce."
      },
      {
        "id": "D",
        "texto": "Aplicar diretamente sobre as marcas de presas substâncias cauterizadoras orgânicas, como café em pó quente ou folhas nativas maceradas, para destruir biologicamente a enzima da cobra pelo calor abrasivo.",
        "correta": false,
        "explicacao": "Substâncias químicas caseiras, vegetais orgânicos e fezes de animais esfregados sobre orifícios de entrada venosa originam infecções bacterianas devastadoras e tétano severo para o paciente."
      }
    ]
  },
  {
    "id": 194,
    "pergunta": "Durante a avaliação primária de uma vítima de atropelamento, você nota uma hemorragia volumosa na coxa direita, enquanto a vítima apresenta-se agitada e com respiração rápida. De acordo com a lógica do XABCDE (PHTLS 10ª Edição), qual deve ser sua prioridade absoluta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Abrir as vias aéreas com controle cervical para garantir a oxigenação cerebral imediata.",
        "correta": false,
        "explicacao": "Embora a via aérea seja vital, o protocolo XABCDE prioriza o controle de hemorragias exsanguinantes (X) antes do manejo das vias aéreas (A)."
      },
      {
        "id": "B",
        "texto": "Realizar a contenção da hemorragia exsanguinante através de pressão direta ou torniquete.",
        "correta": true,
        "explicacao": "O 'X' representa a hemorragia externa grave, que deve ser tratada antes de qualquer outro passo, pois pode levar ao choque irreversível em poucos minutos."
      },
      {
        "id": "C",
        "texto": "Avaliar o nível de consciência para descartar um traumatismo cranioencefálico grave.",
        "correta": false,
        "explicacao": "A avaliação neurológica (D) é o quarto passo do protocolo e só deve ocorrer após o controle de sangramentos, vias aéreas e ventilação."
      },
      {
        "id": "D",
        "texto": "Verificar se há deformidades no membro afetado antes de aplicar qualquer técnica de pressão.",
        "correta": false,
        "explicacao": "A verificação de fraturas e deformidades pertence à exposição da vítima (E) ou avaliação secundária, não devendo atrasar o controle da hemorragia."
      }
    ]
  },
  {
    "id": 195,
    "pergunta": "Ao realizar a Ressuscitação Cardiopulmonar (RCP) em uma criança (1 ano até a puberdade) com apenas um socorrista leigo presente, qual é a recomendação técnica correta para a profundidade das compressões?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pelo menos um terço do diâmetro anteroposterior do tórax, cerca de 4 cm (1,5 polegada).",
        "correta": false,
        "explicacao": "A profundidade de 4 cm é específica para lactentes (menores de 1 ano), não para crianças acima dessa idade."
      },
      {
        "id": "B",
        "texto": "Pelo menos dois terços do diâmetro anteroposterior do tórax, cerca de 6 cm (2,4 polegadas).",
        "correta": false,
        "explicacao": "Esta profundidade é excessiva para crianças e pode causar lesões internas graves; 6 cm é o limite superior para adultos."
      },
      {
        "id": "C",
        "texto": "Pelo menos um terço do diâmetro anteroposterior do tórax, cerca de 5 cm (2 polegadas).",
        "correta": true,
        "explicacao": "Segundo a AHA, para crianças, a compressão deve atingir 1/3 do diâmetro do tórax, o que equivale a aproximadamente 5 cm."
      },
      {
        "id": "D",
        "texto": "Apenas o suficiente para notar o movimento das costelas, evitando compressões profundas.",
        "correta": false,
        "explicacao": "Compressões superficiais não geram fluxo sanguíneo suficiente para manter a perfusão dos órgãos vitais como o cérebro e o coração."
      }
    ]
  },
  {
    "id": 196,
    "pergunta": "Você presencia uma pessoa sofrendo uma crise convulsiva em um local público. A vítima está caída no chão, com movimentos bruscos de membros e salivação intensa. Qual a conduta correta a ser adotada por um leigo capacitado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Inserir um objeto rígido ou pano entre os dentes para evitar que a vítima morda a língua.",
        "correta": false,
        "explicacao": "Introduzir objetos na boca da vítima é contraindicado, pois pode causar fraturas dentárias, obstrução das vias aéreas ou ferimentos ao socorrista."
      },
      {
        "id": "B",
        "texto": "Restringir os movimentos da vítima, segurando braços e pernas para evitar fraturas ósseas.",
        "correta": false,
        "explicacao": "Tentar conter a força da convulsão pode causar lesões musculares ou fraturas na própria vítima; o foco deve ser a proteção contra objetos próximos."
      },
      {
        "id": "C",
        "texto": "Proteger a cabeça da vítima e aguardar o término da crise sem interferir nos movimentos.",
        "correta": true,
        "explicacao": "A prioridade é a segurança da vítima (afastar objetos, acolchoar a cabeça) e monitorar a duração da crise, mantendo as vias aéreas livres após o término."
      },
      {
        "id": "D",
        "texto": "Aplicar estímulos dolorosos ou jogar água no rosto para tentar fazer a vítima retomar a consciência.",
        "correta": false,
        "explicacao": "Essas ações são ineficazes, perigosas e não interrompem a atividade elétrica cerebral responsável pela crise convulsiva."
      }
    ]
  },
  {
    "id": 197,
    "pergunta": "As novas atualizações das Diretrizes da AHA de 2025 (Highlights) trazem uma recomendação específica sobre o uso de 'auxílios cognitivos' (cartões de referência, algoritmos escritos) durante uma emergência. Qual é a recomendação para socorristas LEIGOS?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O uso é recomendado, pois reduz o estresse do socorrista e melhora a precisão da técnica.",
        "correta": false,
        "explicacao": "Pelo contrário, as evidências mostram que o uso de auxílios cognitivos por leigos causa atrasos significativos no início da RCP."
      },
      {
        "id": "B",
        "texto": "Não é recomendado o uso de auxílios cognitivos por leigos durante a ressuscitação.",
        "correta": true,
        "explicacao": "As diretrizes de 2025 afirmam que, para leigos, esses recursos causam atrasos no tratamento; são aceitáveis apenas para profissionais de saúde treinados."
      },
      {
        "id": "C",
        "texto": "O uso é obrigatório se o leigo estiver sozinho, para garantir que nenhum passo seja esquecido.",
        "correta": false,
        "explicacao": "A prioridade do leigo é o reconhecimento imediato e o início rápido das compressões, e não a consulta a materiais de apoio."
      },
      {
        "id": "D",
        "texto": "É recomendado apenas se o auxílio cognitivo for digital, como aplicativos de smartphone.",
        "correta": false,
        "explicacao": "A recomendação contra o uso por leigos abrange todos os tipos de auxílios cognitivos que distraiam do início imediato das manobras de SBV."
      }
    ]
  },
  {
    "id": 198,
    "pergunta": "Uma vítima sofreu uma queimadura térmica no antebraço. Ao avaliar, você percebe a presença de dor intensa, vermelhidão e diversas bolhas íntegras. Segundo a classificação técnica, esta queimadura é de:",
    "alternativas": [
      {
        "id": "A",
        "texto": "1º Grau, atingindo apenas a epiderme e exigindo aplicação imediata de pomadas anestésicas.",
        "correta": false,
        "explicacao": "A presença de bolhas indica comprometimento da derme (2º grau). Pomadas não devem ser aplicadas no atendimento inicial."
      },
      {
        "id": "B",
        "texto": "2º Grau (espessura parcial), caracterizada pelo comprometimento da epiderme e derme.",
        "correta": true,
        "explicacao": "Queimaduras de 2º grau são marcadas por dor intensa e flictenas (bolhas), resultantes da lesão em camadas mais profundas da pele."
      },
      {
        "id": "C",
        "texto": "3º Grau (espessura total), pois a formação de bolhas indica a destruição total dos tecidos.",
        "correta": false,
        "explicacao": "Queimaduras de 3º grau costumam ser indolores (destruição de nervos) e apresentam aspecto esbranquiçado ou carbonizado, sem bolhas predominantes."
      },
      {
        "id": "D",
        "texto": "4º Grau, uma vez que a dor intensa sugere que a lesão atingiu estruturas musculares e ósseas.",
        "correta": false,
        "explicacao": "Queimaduras de 4º grau envolvem tecidos profundos como músculos e ossos, sendo geralmente indolores e de aspecto muito grave."
      }
    ]
  },
  {
    "id": 199,
    "pergunta": "No suporte básico de vida pediátrico, após confirmar que o ambiente está seguro e que o lactente (menos de 1 ano) não responde aos estímulos, qual é o próximo passo técnico para a avaliação circulatória?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Verificar o pulso carotídeo, no pescoço, por um período de 5 a 10 segundos.",
        "correta": false,
        "explicacao": "O pescoço do lactente é curto e gordo, dificultando a localização confiável do pulso carotídeo por socorristas."
      },
      {
        "id": "B",
        "texto": "Verificar o pulso braquial, na face interna do braço, por um período de 5 a 10 segundos.",
        "correta": true,
        "explicacao": "O pulso braquial é o local de escolha para avaliação circulatória em lactentes devido à facilidade de acesso anatômico."
      },
      {
        "id": "C",
        "texto": "Observar o enchimento capilar no tórax; se for maior que 2 segundos, iniciar RCP.",
        "correta": false,
        "explicacao": "O enchimento capilar é um sinal de perfusão, mas não substitui a verificação formal de pulso/respiração na identificação da PCR."
      },
      {
        "id": "D",
        "texto": "Verificar o pulso radial, no pulso, utilizando os dedos indicador e médio.",
        "correta": false,
        "explicacao": "O pulso radial é muito periférico e difícil de detectar em situações de choque ou parada cardíaca em lactentes."
      }
    ]
  },
  {
    "id": 200,
    "pergunta": "Você encontra uma vítima inconsciente após cair de uma escada. Ao examinar a cabeça, nota a saída de um líquido claro e límpido pelo ouvido direito (otorréia). Qual a interpretação técnica e a conduta leiga correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Trata-se de sinal de fratura de base de crânio; deve-se estancar o canal auditivo com gaze.",
        "correta": false,
        "explicacao": "Nunca se deve estancar ou tamponar a saída de líquor/sangue pelo ouvido em traumas de crânio, pois isso aumenta a pressão intracraniana."
      },
      {
        "id": "B",
        "texto": "Indica apenas uma lesão superficial do conduto auditivo; deve-se limpar o local com álcool.",
        "correta": false,
        "explicacao": "A saída de líquido cefalorraquidiano (líquor) é um sinal grave de lesão interna e o uso de álcool é contraindicado em feridas abertas."
      },
      {
        "id": "C",
        "texto": "Sugere traumatismo cranioencefálico grave; deve-se manter o controle cervical e não obstruir o fluxo.",
        "correta": true,
        "explicacao": "A otorréia indica ruptura de meninges e fratura craniana. A conduta é imobilização e deixar o líquido fluir livremente sobre um curativo frouxo."
      },
      {
        "id": "D",
        "texto": "É um sinal comum de desmaio simples; deve-se elevar as pernas da vítima para melhorar o fluxo.",
        "correta": false,
        "explicacao": "Saída de líquidos pelo ouvido nunca é sinal de desmaio; em traumas, elevar as pernas é perigoso se houver suspeita de lesão na coluna."
      }
    ]
  },
  {
    "id": 201,
    "pergunta": "De acordo com o PHTLS 10ª Edição e os protocolos de trauma, a hipotensão (pressão arterial sistólica abaixo de 90 mmHg em adultos) deve ser considerada como:",
    "alternativas": [
      {
        "id": "A",
        "texto": "O primeiro sinal confiável de que a vítima entrou em estado de choque hemorrágico.",
        "correta": false,
        "explicacao": "O corpo compensa a perda de sangue inicialmente; a hipotensão é um sinal tardio de choque, indicando falha dos mecanismos compensatórios."
      },
      {
        "id": "B",
        "texto": "Um sinal de choque descompensado, indicando que os mecanismos compensatórios falharam.",
        "correta": true,
        "explicacao": "Quando a pressão arterial cai, significa que o organismo não consegue mais manter o débito cardíaco através da taquicardia e vasoconstrição."
      },
      {
        "id": "C",
        "texto": "Um sinal positivo de que o sistema nervoso está protegendo o coração de uma sobrecarga.",
        "correta": false,
        "explicacao": "A queda de pressão em trauma nunca é protetiva; ela indica hipoperfusão tecidual e risco iminente de morte."
      },
      {
        "id": "D",
        "texto": "Um parâmetro irrelevante para o leigo, que deve focar apenas na frequência respiratória.",
        "correta": false,
        "explicacao": "Embora o leigo muitas vezes não meça a PA, reconhecer sinais de choque (pele fria, palidez, hipotensão detectada pelo pulso radial fraco) é essencial."
      }
    ]
  },
  {
    "id": 202,
    "pergunta": "Ao ligar para o número de emergência 193 (Bombeiros) para relatar um atropelamento com múltiplas vítimas, qual deve ser a primeira informação transmitida para otimizar o atendimento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O nome completo do socorrista e o seu grau de parentesco com as vítimas.",
        "correta": false,
        "explicacao": "Embora a identificação seja feita, ela não é a prioridade zero para o despacho de viaturas em cena."
      },
      {
        "id": "B",
        "texto": "O endereço exato da ocorrência e um ponto de referência próximo.",
        "correta": true,
        "explicacao": "Sem o local exato, o socorro não pode ser enviado. É a informação mais crítica em qualquer chamada de emergência."
      },
      {
        "id": "C",
        "texto": "A descrição detalhada de todas as lesões visíveis em cada uma das vítimas.",
        "correta": false,
        "explicacao": "A descrição detalhada vem após a localização e natureza do evento; o excesso de detalhes iniciais pode atrasar o despacho inicial."
      },
      {
        "id": "D",
        "texto": "Uma reclamação sobre a demora do atendimento em ocorrências passadas na região.",
        "correta": false,
        "explicacao": "O tempo de linha deve ser usado exclusivamente para informações que ajudem no atendimento da ocorrência atual."
      }
    ]
  },
  {
    "id": 203,
    "pergunta": "Em um cenário de PCR em adulto, você está utilizando um Desfibrilador Externo Automático (DEA). O aparelho analisa o ritmo e emite a mensagem: 'Choque não recomendado'. Qual deve ser sua ação imediata?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Reiniciar imediatamente as compressões torácicas, começando pelas ventilações.",
        "correta": false,
        "explicacao": "A RCP deve ser retomada imediatamente pelas compressões, não pelas ventilações, para manter a pressão de perfusão coronariana."
      },
      {
        "id": "B",
        "texto": "Retomar as compressões torácicas imediatamente, sem aguardar novas instruções do DEA.",
        "correta": true,
        "explicacao": "Minimizar interrupções é crucial. Se o choque não é indicado, a RCP deve ser reiniciada instantaneamente por 2 minutos até nova análise."
      },
      {
        "id": "C",
        "texto": "Remover os eletrodos do peito da vítima para verificar se houve erro de leitura do sensor.",
        "correta": false,
        "explicacao": "Os eletrodos nunca devem ser removidos até a chegada do serviço especializado (SAMU/Bombeiros)."
      },
      {
        "id": "D",
        "texto": "Verificar novamente o pulso carotídeo por 10 segundos antes de decidir se continua a RCP.",
        "correta": false,
        "explicacao": "As diretrizes atuais recomendam não perder tempo verificando pulsos após a análise do DEA, a menos que a vítima apresente sinais claros de vida."
      }
    ]
  },
  {
    "id": 204,
    "pergunta": "Ao chegar em uma cena de acidente automobilístico em uma via de alta velocidade, antes de iniciar qualquer contato com as vítimas, qual é a primeira e mais crítica ação do socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sinalizar o local com o triângulo e ligar o pisca-alerta do próprio veículo para evitar novos acidentes.",
        "correta": true,
        "explicacao": "A segurança da cena é a prioridade absoluta. Sem a sinalização adequada, o socorrista torna-se uma nova vítima, impedindo o atendimento e agravando a emergência."
      },
      {
        "id": "B",
        "texto": "Retirar as vítimas de dentro dos veículos imediatamente para evitar explosões ou incêndios repentinos.",
        "correta": false,
        "explicacao": "A movimentação de vítimas de trauma sem imobilização só é permitida em situações de risco iminente de morte (fogo/explosão), e nunca antes de garantir a segurança da via."
      },
      {
        "id": "C",
        "texto": "Verificar o nível de consciência do motorista para informar com precisão a gravidade ao atendente do 193.",
        "correta": false,
        "explicacao": "A avaliação da vítima é o passo seguinte. Antes disso, o socorrista deve garantir que ele mesmo não será atropelado enquanto realiza essa avaliação."
      },
      {
        "id": "D",
        "texto": "Desligar a ignição de todos os veículos envolvidos e desconectar as baterias para neutralizar riscos elétricos.",
        "correta": false,
        "explicacao": "Embora desligar a ignição seja recomendado, desconectar baterias exige conhecimento técnico e ferramentas, não sendo a prioridade inicial em relação à sinalização da via."
      }
    ]
  },
  {
    "id": 205,
    "pergunta": "Uma vítima apresenta amputação traumática do nível do punho após acidente com maquinário. Há sangramento pulsátil e maciço. Após falha da pressão direta inicial, você decide aplicar um torniquete comercial. Qual a regra técnica correta para a aplicação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar o torniquete diretamente sobre a articulação do cotovelo para garantir o estancamento total.",
        "correta": false,
        "explicacao": "O torniquete nunca deve ser aplicado sobre articulações, pois a estrutura óssea impede a compressão eficaz das artérias contra o osso longo."
      },
      {
        "id": "B",
        "texto": "Posicionar o dispositivo de 5 a 7 cm (2 a 3 polegadas) acima do ferimento, diretamente sobre a pele.",
        "correta": true,
        "explicacao": "De acordo com o PHTLS 10ª Edição, o torniquete deve ser colocado proximal ao ferimento (entre a ferida e o coração), evitando articulações e preferencialmente sobre a pele."
      },
      {
        "id": "C",
        "texto": "Afrouxar o torniquete a cada 15 minutos para permitir a reperfusão do membro e evitar a necrose.",
        "correta": false,
        "explicacao": "Uma vez aplicado, o torniquete não deve ser afrouxado por leigos. O afrouxamento pode causar choque hipovolêmico e liberação de toxinas na circulação (síndrome de reperfusão)."
      },
      {
        "id": "D",
        "texto": "Aplicar o torniquete abaixo do local do sangramento para impedir que o sangue venoso retorne ao coração.",
        "correta": false,
        "explicacao": "O objetivo do torniquete em hemorragias arteriais é interromper o fluxo que vem do coração para a ferida; portanto, ele deve ser aplicado acima (proximal) da lesão."
      }
    ]
  },
  {
    "id": 206,
    "pergunta": "Durante a Ressuscitação Cardiopulmonar (RCP) em um adulto, o socorrista deve garantir que o tórax retorne totalmente à posição original entre cada compressão. Qual a justificativa fisiológica para essa técnica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Evitar que as costelas da vítima sofram fraturas por fadiga óssea durante as manobras contínuas.",
        "correta": false,
        "explicacao": "Embora fraturas ocorram, o retorno do tórax não visa preveni-las, mas sim garantir a dinâmica do fluxo sanguíneo."
      },
      {
        "id": "B",
        "texto": "Permitir que o ar saia completamente dos pulmões, facilitando a próxima ventilação de resgate.",
        "correta": false,
        "explicacao": "O retorno do tórax tem foco na hemodinâmica cardíaca e não primariamente na exalação pulmonar passiva durante a compressão."
      },
      {
        "id": "C",
        "texto": "Garantir o enchimento das câmaras cardíacas (retorno venoso) para que a próxima compressão seja eficaz.",
        "correta": true,
        "explicacao": "Se o socorrista não permitir o retorno total do tórax, o coração não se enche de sangue adequadamente, reduzindo drasticamente o volume ejetado na compressão seguinte."
      },
      {
        "id": "D",
        "texto": "Reduzir o cansaço físico do socorrista, utilizando o rebote elástico do tórax para economizar energia.",
        "correta": false,
        "explicacao": "Embora o retorno ajude no ritmo, a técnica é mandatória para a eficácia da perfusão cerebral e coronariana da vítima, não para o conforto do socorrista."
      }
    ]
  },
  {
    "id": 207,
    "pergunta": "Você identifica que uma vítima está sofrendo uma reação anafilática grave após picada de inseto. Ela apresenta edema de glote (dificuldade respiratória com ruído) e urticária. Ela possui um auto-injetor de epinefrina. Como o leigo deve proceder tecnicamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Administrar o medicamento via oral para garantir que a absorção pelo trato digestivo seja mais lenta e segura.",
        "correta": false,
        "explicacao": "A epinefrina em auto-injetores é projetada exclusivamente para uso intramuscular devido à necessidade de ação imediata."
      },
      {
        "id": "B",
        "texto": "Injetar a medicação na região glútea, garantindo que o músculo grande absorva todo o conteúdo rapidamente.",
        "correta": false,
        "explicacao": "A recomendação técnica para auto-injetores é a face anterolateral da coxa (músculo vasto lateral), que possui absorção mais previsível em emergências."
      },
      {
        "id": "C",
        "texto": "Auxiliar a vítima na aplicação ou aplicar o injetor na face lateral da coxa, pressionando por cerca de 3 a 10 segundos.",
        "correta": true,
        "explicacao": "A conduta correta é aplicar no terço médio lateral da coxa. O tempo de retenção garante que todo o medicamento seja expelido pelo dispositivo para o músculo."
      },
      {
        "id": "D",
        "texto": "Aguardar a chegada do SAMU (192) antes de usar o injetor, pois leigos não podem administrar drogas injetáveis.",
        "correta": false,
        "explicacao": "Em anafilaxia, o tempo é crítico. Leigos capacitados são encorajados a auxiliar no uso de medicamentos de emergência da própria vítima para salvar sua vida."
      }
    ]
  },
  {
    "id": 208,
    "pergunta": "Em um acidente doméstico, uma pessoa sofre a amputação traumática de um dedo. Qual a técnica correta de primeiros socorros para o transporte da parte amputada visando uma possível rimplantação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lavar o dedo com álcool e submergi-lo diretamente em um recipiente com gelo picado.",
        "correta": false,
        "explicacao": "O contato direto com o gelo causa queimaduras térmicas e congelamento dos tecidos, inviabilizando o reimplante. O álcool também lesa as células."
      },
      {
        "id": "B",
        "texto": "Envolver o dedo em gaze úmida (soro ou água), colocá-lo em um saco plástico vedado e este saco dentro de outro com gelo.",
        "correta": true,
        "explicacao": "A técnica de 'resfriamento indireto' preserva a viabilidade do tecido sem causar lesão por congelamento, mantendo a parte amputada em ambiente protegido e frio."
      },
      {
        "id": "C",
        "texto": "Manter o dedo em um frasco com soro fisiológico morno para simular a temperatura corporal interna.",
        "correta": false,
        "explicacao": "O calor acelera o metabolismo e a decomposição dos tecidos sem suprimento sanguíneo; o resfriamento é necessário para retardar a morte celular."
      },
      {
        "id": "D",
        "texto": "Envolver em papel toalha seco e transportar no bolso da vestimenta para evitar o contato com o ambiente externo.",
        "correta": false,
        "explicacao": "O tecido seco desidrata rapidamente e a falta de resfriamento reduz drasticamente o tempo de viabilidade para cirurgia."
      }
    ]
  },
  {
    "id": 209,
    "pergunta": "Diferenciar a Exaustão pelo Calor da Insolação (Heatstroke) é vital. Qual sinal clínico é considerado patognomônico de Insolação e indica uma emergência extrema?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sudorese abundante acompanhada de palidez e náuseas intensas.",
        "correta": false,
        "explicacao": "Estes são sinais típicos de exaustão pelo calor, onde os mecanismos de resfriamento (suor) ainda estão funcionando."
      },
      {
        "id": "B",
        "texto": "Cãibras musculares nos membros inferiores e sede excessiva após exercício físico.",
        "correta": false,
        "explicacao": "Cãibras de calor são a forma mais leve de emergência térmica e não indicam a falha sistêmica da insolação."
      },
      {
        "id": "C",
        "texto": "Alteração do estado mental (confusão, agressividade ou coma) e pele geralmente quente e seca.",
        "correta": true,
        "explicacao": "A insolação caracteriza-se pela falha do centro termorregulador. A alteração neurológica é o divisor de águas que define a gravidade extrema do quadro."
      },
      {
        "id": "D",
        "texto": "Frequência cardíaca levemente aumentada com pressão arterial dentro da normalidade.",
        "correta": false,
        "explicacao": "Na insolação, a frequência cardíaca costuma estar muito elevada (taquicardia severa) e pode haver colapso circulatório iminente."
      }
    ]
  },
  {
    "id": 210,
    "pergunta": "Ao prestar socorro a uma criança de 6 anos em parada cardiorrespiratória (PCR), você está sozinho e é um socorrista leigo. Qual a relação correta entre compressões e ventilações a ser adotada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "15 compressões para 2 ventilações, focando na oxigenação rápida da criança.",
        "correta": false,
        "explicacao": "A relação 15:2 é recomendada para profissionais de saúde com dois socorristas. Para o leigo, a regra é simplificada."
      },
      {
        "id": "B",
        "texto": "30 compressões para 2 ventilações, seguindo o padrão universal para um único socorrista.",
        "correta": true,
        "explicacao": "Segundo a AHA 2020, para manter a simplicidade e eficácia, socorristas leigos devem utilizar a relação 30:2 em adultos, crianças e lactentes."
      },
      {
        "id": "C",
        "texto": "Apenas compressões contínuas (Hands-Only), pois ventilações não são recomendadas para crianças.",
        "correta": false,
        "explicacao": "Diferente do adulto, a causa da PCR em crianças é geralmente respiratória. Portanto, ventilações são fundamentais e altamente recomendadas."
      },
      {
        "id": "D",
        "texto": "5 compressões para 1 ventilação, buscando sincronizar com o ritmo respiratório natural da idade.",
        "correta": false,
        "explicacao": "Este protocolo está obsoleto há décadas e não faz parte das diretrizes modernas de suporte básico de vida."
      }
    ]
  },
  {
    "id": 211,
    "pergunta": "Uma vítima ingeriu acidentalmente um produto de limpeza corrosivo (soda cáustica). Ela apresenta queimaduras nos lábios e dor intensa na garganta. Qual a conduta imediata correta enquanto aguarda o socorro especializado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Provocar o vômito imediatamente para retirar a substância do estômago antes da absorção.",
        "correta": false,
        "explicacao": "Em ingestão de corrosivos, o vômito causa uma segunda queimadura no esôfago e orofaringe, além do risco de aspiração pulmonar."
      },
      {
        "id": "B",
        "texto": "Oferecer leite ou vinagre para tentar neutralizar o pH da substância química ingerida.",
        "correta": false,
        "explicacao": "A neutralização química produz calor (reação exotérmica), o que pode causar queimaduras térmicas internas graves além das químicas."
      },
      {
        "id": "C",
        "texto": "Não oferecer líquidos nem induzir o vômito; manter a vítima em repouso, monitorar a respiração e acionar a emergência.",
        "correta": true,
        "explicacao": "A conduta padrão em intoxicações por corrosivos é 'nada por via oral'. O foco é estabilização e transporte rápido para ambiente hospitalar."
      },
      {
        "id": "D",
        "texto": "Administrar carvão ativado caseiro para absorver as toxinas e impedir que cheguem ao intestino.",
        "correta": false,
        "explicacao": "O carvão ativado não tem eficácia contra ácidos ou bases fortes e seu uso é restrito ao ambiente hospitalar sob protocolos específicos."
      }
    ]
  },
  {
    "id": 212,
    "pergunta": "Ao suspeitar de uma fratura fechada no fêmur de uma vítima de queda, qual o princípio técnico fundamental para uma imobilização provisória correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Imobilizar apenas o local exato da dor, utilizando talas curtas para permitir o movimento das articulações vizinhas.",
        "correta": false,
        "explicacao": "Imobilizar apenas o foco da fratura permite que o osso se mova, causando dor, lesão de vasos e nervos."
      },
      {
        "id": "B",
        "texto": "Realizar a tração vigorosa do membro para alinhar o osso antes de fixar qualquer tala ou material rígido.",
        "correta": false,
        "explicacao": "Leigos não devem realizar manobras de tração ou redução de fraturas, pois podem romper artérias importantes (como a femoral)."
      },
      {
        "id": "C",
        "texto": "Imobilizar as articulações acima (quadril) e abaixo (joelho) do local da suspeita de fratura.",
        "correta": true,
        "explicacao": "O princípio da imobilização de ossos longos exige o bloqueio das articulações adjacentes para impedir que o movimento muscular desloque os fragmentos ósseos."
      },
      {
        "id": "D",
        "texto": "Apertar as amarrações da tala o máximo possível para garantir que não haja nenhum fluxo sanguíneo no local afetado.",
        "correta": false,
        "explicacao": "O garroteamento acidental pela imobilização pode causar isquemia do membro. Deve-se manter a circulação distal preservada e monitorada."
      }
    ]
  },
  {
    "id": 213,
    "pergunta": "Você presencia um desabamento com três vítimas. Vítima 1: Gritando por socorro com dor no braço. Vítima 2: Inconsciente, não respira. Vítima 3: Silenciosa, com sangramento massivo na perna. Segundo a prioridade de vida, qual ordem de atendimento você deve seguir?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Atender primeiro a Vítima 1, pois ela é a única consciente e capaz de colaborar com o socorro.",
        "correta": false,
        "explicacao": "Vítimas que gritam estão com vias aéreas pérvias e respirando; não são a prioridade máxima em um cenário de risco de morte iminente."
      },
      {
        "id": "B",
        "texto": "Atender primeiro a Vítima 2, iniciando RCP imediatamente, pois a parada respiratória é a prioridade zero.",
        "correta": false,
        "explicacao": "Em triagem de múltiplas vítimas, a Vítima 2 (em PCR) muitas vezes é classificada como 'expectante' se houver vítimas com chances maiores de sobrevivência imediata (como hemorragias controláveis)."
      },
      {
        "id": "C",
        "texto": "Atender primeiro a Vítima 3, focando no controle da hemorragia exsanguinante (X), que pode matá-la em segundos.",
        "correta": true,
        "explicacao": "O 'X' (hemorragia grave) precede o 'A' e o 'B'. Controlar o sangramento da Vítima 3 oferece a maior chance de salvar uma vida viável rapidamente."
      },
      {
        "id": "D",
        "texto": "Aguardar o SAMU e não tocar em ninguém, pois a triagem é uma função exclusiva de médicos e enfermeiros.",
        "correta": false,
        "explicacao": "Embora a triagem formal seja profissional, o leigo deve agir nas prioridades óbvias (como estancar um sangramento crítico) para evitar mortes evitáveis antes da chegada do suporte."
      }
    ]
  },
  {
    "id": 214,
    "pergunta": "Você entra em uma cozinha e encontra uma pessoa caída próxima a um fogão com cheiro forte de gás. Qual é a sequência lógica e prioritária de ações conforme os protocolos de segurança de cena?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Entrar rapidamente, fechar o registro de gás e iniciar a avaliação da responsividade da vítima no local.",
        "correta": false,
        "explicacao": "O socorrista nunca deve entrar em uma atmosfera perigosa sem proteção adequada. O risco de explosão ou asfixia torna a cena insegura para o atendimento no local."
      },
      {
        "id": "B",
        "texto": "Abrir janelas para ventilar, ligar para o 193 e aguardar o dissipamento do gás antes de se aproximar da vítima.",
        "correta": true,
        "explicacao": "A segurança do socorrista é a prioridade. Deve-se isolar a área, acionar o socorro especializado (Bombeiros) e garantir que a cena esteja segura antes de qualquer intervenção direta."
      },
      {
        "id": "C",
        "texto": "Acionar o interruptor de luz para enxergar melhor a vítima e verificar se há sangramentos externos visíveis.",
        "correta": false,
        "explicacao": "Acionar interruptores em ambientes com vazamento de gás pode gerar uma centelha elétrica e causar uma explosão imediata."
      },
      {
        "id": "D",
        "texto": "Arrastar a vítima imediatamente para fora da cozinha e iniciar manobras de RCP, independentemente do cheiro de gás.",
        "correta": false,
        "explicacao": "Entrar em um ambiente saturado por gás coloca a vida do socorrista em risco crítico de asfixia ou morte por explosão antes mesmo de conseguir mover a vítima."
      }
    ]
  },
  {
    "id": 215,
    "pergunta": "Ao realizar a compressão torácica em um adulto em parada cardiorrespiratória, qual é a frequência recomendada pela AHA (2020) para otimizar a perfusão cerebral e coronariana?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Exatamente 100 compressões por minuto, mantendo um ritmo constante e pausado.",
        "correta": false,
        "explicacao": "A diretriz estabelece uma faixa de frequência, e não um número fixo, para garantir a eficácia da bomba cardíaca."
      },
      {
        "id": "B",
        "texto": "Entre 80 e 100 compressões por minuto, priorizando a força sobre a velocidade.",
        "correta": false,
        "explicacao": "Esta frequência é considerada lenta para os padrões atuais e não gera pressão de perfusão suficiente para os órgãos vitais."
      },
      {
        "id": "C",
        "texto": "Entre 100 e 120 compressões por minuto, permitindo o retorno total do tórax.",
        "correta": true,
        "explicacao": "Esta faixa de velocidade (aproximadamente 2 compressões por segundo) é a ideal para maximizar o fluxo sanguíneo sem comprometer o enchimento cardíaco."
      },
      {
        "id": "D",
        "texto": "O mais rápido possível, ultrapassando 140 compressões por minuto para compensar a falta de oxigênio.",
        "correta": false,
        "explicacao": "Frequências acima de 120 bpm reduzem a eficácia, pois o tórax não retorna totalmente e o coração não tem tempo de se encher de sangue entre as batidas."
      }
    ]
  },
  {
    "id": 216,
    "pergunta": "Um adulto consciente apresenta sinais de engasgo grave (manobra de obstrução de via aérea por corpo estranho), não conseguindo tossir ou falar. Onde devem ser posicionadas as mãos para a manobra de Heimlich?",
    "alternativas": [
      {
        "id": "A",
        "texto": "No centro do peito, sobre o osso esterno, realizando pressões para trás.",
        "correta": false,
        "explicacao": "Compressões torácicas no esterno são indicadas para gestantes ou pessoas obesas onde o braço do socorrista não alcança o abdome."
      },
      {
        "id": "B",
        "texto": "Na altura do umbigo, realizando movimentos circulares para relaxar o diafragma.",
        "correta": false,
        "explicacao": "Movimentos circulares não geram a pressão subdiafragmática necessária para expulsar o objeto da via aérea."
      },
      {
        "id": "C",
        "texto": "Entre o umbigo e o apêndice xifoide, realizando compressões para dentro e para cima.",
        "correta": true,
        "explicacao": "Este posicionamento permite comprimir o ar residual nos pulmões para cima, criando uma tosse artificial potente para deslocar o objeto."
      },
      {
        "id": "D",
        "texto": "Nas costas, entre as escápulas, aplicando golpes secos com a palma da mão voltada para baixo.",
        "correta": false,
        "explicacao": "Golpes nas costas em adultos conscientes não são a primeira escolha técnica nas diretrizes da AHA, sendo a manobra abdominal a mais eficaz."
      }
    ]
  },
  {
    "id": 217,
    "pergunta": "Você presencia uma vítima com um corte profundo na região da virilha (junção inguinal) apresentando sangramento em jato (arterial). Como deve ser feito o controle desta hemorragia em local onde não se pode usar torniquete?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar pressão direta e contínua com gaze ou pano limpo, mantendo a pressão sem interrupções.",
        "correta": true,
        "explicacao": "Em áreas de junção (virilha, axila, pescoço), a pressão direta manual forte e ininterrupta é a técnica padrão para conter hemorragias graves."
      },
      {
        "id": "B",
        "texto": "Lavar a ferida com água corrente para identificar o vaso rompido antes de tentar estancar.",
        "correta": false,
        "explicacao": "Lavar feridas com sangramento massivo é contraindicado, pois remove coágulos em formação e retarda o controle crítico da perda sanguínea."
      },
      {
        "id": "C",
        "texto": "Elevar os membros inferiores da vítima para que o sangue retorne ao tronco e pare de sair pela ferida.",
        "correta": false,
        "explicacao": "A elevação de membros não é mais recomendada como técnica primária de controle de hemorragia e não substitui a pressão direta no foco do sangramento."
      },
      {
        "id": "D",
        "texto": "Colocar gelo diretamente dentro do corte para promover a vasoconstrição imediata do vaso arterial.",
        "correta": false,
        "explicacao": "O uso de gelo em feridas abertas profundas pode causar lesão tecidual e hipotermia, não sendo eficaz para conter sangramentos arteriais de grande volume."
      }
    ]
  },
  {
    "id": 218,
    "pergunta": "Uma vítima foi atingida nos olhos por um jato de produto químico de limpeza (alcalino). Qual é o procedimento técnico de primeiros socorros mais adequado durante os primeiros minutos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pingar colírio lubrificante ou soro fisiológico gelado para aliviar a ardência e fechar os olhos.",
        "correta": false,
        "explicacao": "Fechar os olhos mantém o agente químico em contato com a córnea. O foco deve ser a irrigação, não apenas o alívio sintomático."
      },
      {
        "id": "B",
        "texto": "Irrigar o olho afetado com água limpa corrente por pelo menos 20 minutos, inclinando a cabeça para o lado do olho atingido.",
        "correta": true,
        "explicacao": "A irrigação prolongada e abundante é necessária para diluir o químico. Inclinar a cabeça evita que o produto contamine o outro olho saudável."
      },
      {
        "id": "C",
        "texto": "Tentar neutralizar o produto químico lavando o olho com uma solução de vinagre diluído em água.",
        "correta": false,
        "explicacao": "Neutralização química nos olhos é extremamente perigosa e pode causar queimaduras térmicas adicionais pela reação química no globo ocular."
      },
      {
        "id": "D",
        "texto": "Ocluir ambos os olhos com curativos secos e encaminhar imediatamente para o hospital sem lavar.",
        "correta": false,
        "explicacao": "Atrasar a lavagem em queimaduras químicas oculares pode resultar em cegueira permanente em poucos minutos; a descontaminação deve ser imediata."
      }
    ]
  },
  {
    "id": 219,
    "pergunta": "No Suporte Básico de Vida para crianças (de 1 ano até a puberdade), se o socorrista leigo estiver sozinho e não conseguir realizar a compressão com as duas mãos devido ao tamanho da criança, qual é a alternativa técnica aceitável?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Utilizar apenas a técnica de dois dedos no centro do tórax, como se fosse um lactente.",
        "correta": false,
        "explicacao": "A técnica de dois dedos não gera força suficiente para atingir a profundidade de 5 cm necessária em crianças acima de 1 ano."
      },
      {
        "id": "B",
        "texto": "Utilizar apenas uma mão (o calcanhar da mão) posicionada sobre a metade inferior do esterno.",
        "correta": true,
        "explicacao": "Para crianças pequenas, o uso de uma ou duas mãos é aceitável, desde que a profundidade da compressão atinja pelo menos 1/3 do diâmetro do tórax."
      },
      {
        "id": "C",
        "texto": "Realizar apenas ventilações de resgate, pois o coração da criança é muito forte para parar sem causa respiratória.",
        "correta": false,
        "explicacao": "Se não houver pulso ou sinais de vida, as compressões são obrigatórias para manter o fluxo sanguíneo, independentemente da causa da parada."
      },
      {
        "id": "D",
        "texto": "Comprimir o abdome superior para aproveitar a elasticidade das costelas flutuantes.",
        "correta": false,
        "explicacao": "Compressões abdominais não substituem a RCP e podem causar lesões graves em órgãos como fígado e baço."
      }
    ]
  },
  {
    "id": 220,
    "pergunta": "Durante a avaliação de uma vítima de queda de altura que está consciente, você utiliza a escala AVPU (ou Alerta, Voz, Dor, Sem Resposta). A vítima responde apenas quando você a chama pelo nome, mas parece confusa. Como ela deve ser classificada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Classificada no nível 'A' (Alerta), pois ela abriu os olhos e está falando.",
        "correta": false,
        "explicacao": "O nível 'Alerta' é para vítimas que respondem espontaneamente e estão orientadas no tempo e espaço."
      },
      {
        "id": "B",
        "texto": "Classificada no nível 'V' (Voz), pois ela necessitou de um estímulo verbal para apresentar resposta.",
        "correta": true,
        "explicacao": "Se a vítima só interage ou abre os olhos após ser solicitada verbalmente, seu nível de consciência é 'V' (Resposta ao Estímulo Verbal)."
      },
      {
        "id": "C",
        "texto": "Classificada no nível 'P' (Dor), devido à confusão mental que indica sofrimento cerebral.",
        "correta": false,
        "explicacao": "O nível 'P' é reservado para vítimas que não respondem à voz, mas reagem a estímulos dolorosos (como pressão no esterno)."
      },
      {
        "id": "D",
        "texto": "Classificada no nível 'U' (Sem Resposta), pois a confusão mental equivale à inconsciência técnica.",
        "correta": false,
        "explicacao": "O nível 'U' é a ausência total de resposta a qualquer estímulo (verbal ou doloroso)."
      }
    ]
  },
  {
    "id": 221,
    "pergunta": "Uma pessoa apresenta-se com pele muito quente e vermelha, sem suor, temperatura corporal elevada e confusão mental após exposição prolongada ao sol. Qual a conduta prioritária para este quadro de Insolação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fornecer grandes quantidades de água gelada para a vítima beber rapidamente.",
        "correta": false,
        "explicacao": "Vítimas com alteração de consciência não devem ingerir líquidos pelo risco de aspiração pulmonar."
      },
      {
        "id": "B",
        "texto": "Envolver a vítima em cobertores térmicos para evitar que a temperatura caia bruscamente.",
        "correta": false,
        "explicacao": "O objetivo na insolação é o resfriamento rápido; cobertores agravariam o quadro de hipertermia maligna."
      },
      {
        "id": "C",
        "texto": "Remover para local fresco e iniciar o resfriamento rápido com compressas úmidas e ventilação.",
        "correta": true,
        "explicacao": "A insolação é uma emergência onde o corpo perdeu a capacidade de resfriar-se. O resfriamento externo imediato é vital para proteger o cérebro."
      },
      {
        "id": "D",
        "texto": "Aplicar álcool sobre a pele da vítima para acelerar a evaporação e o resfriamento.",
        "correta": false,
        "explicacao": "O uso de álcool pode causar intoxicação por absorção cutânea e resfriamento excessivo da superfície, causando tremores que aumentam a temperatura interna."
      }
    ]
  },
  {
    "id": 222,
    "pergunta": "Ao aplicar as pás de um Desfibrilador Externo Automático (DEA) em um adulto, você nota que o tórax da vítima está excessivamente peludo, impedindo a aderência. Qual é a recomendação técnica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Colocar as pás sobre os pelos e pressionar com força durante o choque.",
        "correta": false,
        "explicacao": "Pelos em excesso impedem o contato elétrico, podendo causar arcos voltaicos (faíscas) e queimaduras, além de falha na análise do ritmo."
      },
      {
        "id": "B",
        "texto": "Raspar rapidamente a área onde as pás serão fixadas utilizando o barbeador que acompanha o kit do DEA.",
        "correta": true,
        "explicacao": "A maioria dos DEAs acompanha um kit de preparo com barbeador justamente para garantir que as pás tenham contato direto com a pele."
      },
      {
        "id": "C",
        "texto": "Aplicar as pás nas costas da vítima para evitar a área com pelos no tórax.",
        "correta": false,
        "explicacao": "A posição padrão das pás em adultos (Anterolateral) deve ser respeitada para que o vetor de choque atravesse o coração corretamente."
      },
      {
        "id": "D",
        "texto": "Desistir do uso do DEA e continuar apenas com as compressões manuais.",
        "correta": false,
        "explicacao": "O uso do DEA é o fator que mais aumenta a sobrevida em ritmos chocáveis; deve-se preparar o tórax rapidamente para permitir seu uso."
      }
    ]
  },
  {
    "id": 223,
    "pergunta": "Você presencia um acidente onde um fio de alta tensão caiu sobre o capô de um carro com um ocupante dentro. A vítima parece consciente, mas assustada. Qual a orientação técnica correta a ser dada à vítima enquanto aguarda os bombeiros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Orientar a vítima a sair do carro imediatamente, saltando com os dois pés juntos o mais longe possível.",
        "correta": false,
        "explicacao": "A saída só é recomendada em caso de risco iminente de incêndio. Caso contrário, o interior do veículo é o local mais seguro devido à Gaiola de Faraday."
      },
      {
        "id": "B",
        "texto": "Instruir a vítima a permanecer dentro do veículo e não tocar em nenhuma parte metálica externa.",
        "correta": true,
        "explicacao": "Enquanto os pneus isolarem o carro e a rede não for desligada, a vítima está segura dentro dele. Tocar o chão e o carro simultaneamente criaria um caminho para a descarga elétrica."
      },
      {
        "id": "C",
        "texto": "Pedir para a vítima abrir a porta e colocar um pé no chão para descarregar a energia estática do chassi.",
        "correta": false,
        "explicacao": "Isso causaria uma eletrocussão imediata, pois o corpo da vítima fecharia o curto-circuito entre o veículo energizado e a terra."
      },
      {
        "id": "D",
        "texto": "Aproximar-se do veículo com passos curtos para tentar puxar o fio utilizando um pedaço de madeira seca.",
        "correta": false,
        "explicacao": "Fios de alta tensão podem criar arcos elétricos. Madeira seca não é isolante confiável para tensões de rede pública; o socorrista deve manter distância mínima de 10 metros."
      }
    ]
  },
  {
    "id": 224,
    "pergunta": "Durante a aplicação da técnica de compressões torácicas em um adulto, o socorrista leigo deve posicionar as mãos em qual ponto anatômico específico para garantir a eficácia e minimizar riscos de lesões orgânicas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sobre a parte superior do osso esterno, próximo à junção com as clavículas.",
        "correta": false,
        "explicacao": "Compressões na parte superior são ineficazes para comprimir o coração contra a coluna vertebral e podem causar lesões no pescoço."
      },
      {
        "id": "B",
        "texto": "Sobre o apêndice xifoide (ponta inferior do esterno), para aproveitar a flexibilidade da cartilagem.",
        "correta": false,
        "explicacao": "Comprimir o xifoide é perigoso, pois pode quebrá-lo e perfurar órgãos vitais como o fígado ou o diafragma."
      },
      {
        "id": "C",
        "texto": "No centro do tórax, especificamente na metade inferior do osso esterno.",
        "correta": true,
        "explicacao": "Este posicionamento, preconizado pela AHA, permite que o coração seja comprimido de forma eficiente entre o esterno e a coluna, maximizando o volume de sangue ejetado."
      },
      {
        "id": "D",
        "texto": "Sobre o lado esquerdo do peito, diretamente sobre a projeção anatômica do ápice cardíaco.",
        "correta": false,
        "explicacao": "Comprimir lateralmente aumenta o risco de fraturas de costelas e pneumotórax, além de não comprimir o coração contra a base óssea da coluna."
      }
    ]
  },
  {
    "id": 225,
    "pergunta": "Ao prestar primeiros socorros a uma vítima com queimadura térmica de 2º grau no braço, causada por água fervente, qual é a recomendação técnica atual para o resfriamento da lesão?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar gelo diretamente sobre a queimadura até que a dor desapareça por completo.",
        "correta": false,
        "explicacao": "O gelo causa vasoconstrição severa e queimadura por frio (geladura), agravando a lesão tecidual pré-existente."
      },
      {
        "id": "B",
        "texto": "Lavar a área com água corrente em temperatura ambiente por, no mínimo, 10 a 20 minutos.",
        "correta": true,
        "explicacao": "O resfriamento prolongado com água corrente ajuda a dissipar o calor residual nas camadas profundas da pele, limitando a progressão da lesão."
      },
      {
        "id": "C",
        "texto": "Mergulhar o membro em uma solução de água com bicarbonato de sódio para neutralizar o calor.",
        "correta": false,
        "explicacao": "Substâncias químicas, mesmo as domésticas, não devem ser usadas em queimaduras térmicas; a água limpa é o único agente recomendado."
      },
      {
        "id": "D",
        "texto": "Cobrir a lesão com algodão seco para absorver o líquido das bolhas que possam estourar.",
        "correta": false,
        "explicacao": "O algodão adere à ferida e suas fibras dificultam a limpeza hospitalar; bolhas nunca devem ser estouradas pelo socorrista."
      }
    ]
  },
  {
    "id": 226,
    "pergunta": "Por que a manobra de inclinação da cabeça e elevação do queixo (head-tilt/chin-lift) é fundamental na avaliação de uma vítima inconsciente que não apresenta sinais de trauma cervical?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Para alinhar o esôfago e facilitar a saída de gases estomacais que impedem a respiração.",
        "correta": false,
        "explicacao": "O objetivo da manobra é liberar a via aérea respiratória, não o trato digestivo."
      },
      {
        "id": "B",
        "texto": "Para esticar os músculos do pescoço e estimular o centro respiratório no tronco encefálico.",
        "correta": false,
        "explicacao": "A manobra é puramente mecânica e visa desobstruir a passagem do ar, não possui efeito de estímulo neurológico direto."
      },
      {
        "id": "C",
        "texto": "Para afastar a base da língua da parede posterior da faringe, liberando a passagem do ar.",
        "correta": true,
        "explicacao": "Em vítimas inconscientes, o relaxamento muscular faz com que a língua caia para trás, sendo esta a causa mais comum de obstrução respiratória."
      },
      {
        "id": "D",
        "texto": "Para facilitar a visualização de objetos estranhos localizados profundamente na laringe.",
        "correta": false,
        "explicacao": "Embora ajude na visualização, o propósito principal é anatômico: evitar que a própria língua bloqueie a entrada de ar."
      }
    ]
  },
  {
    "id": 227,
    "pergunta": "Uma pessoa começa a se queixar de tontura, escurecimento da visão e sudorese fria. Ela ainda está consciente e em pé. Qual a conduta preventiva correta para evitar a síncope (desmaio)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sentar a pessoa em uma cadeira e pedir para que ela coloque a cabeça entre os joelhos.",
        "correta": false,
        "explicacao": "Embora comum, essa posição pode dificultar a expansão torácica e, se a pessoa desmaiar, ela pode cair da cadeira e sofrer trauma craniano."
      },
      {
        "id": "B",
        "texto": "Deitar a vítima em decúbito dorsal (costas no chão) e elevar as pernas acima do nível do coração.",
        "correta": true,
        "explicacao": "A elevação das pernas facilita o retorno venoso e aumenta o fluxo sanguíneo cerebral, o que frequentemente reverte os sintomas pré-sinfonia."
      },
      {
        "id": "C",
        "texto": "Oferecer sal ou álcool para cheirar, visando despertar os sentidos e elevar a pressão arterial.",
        "correta": false,
        "explicacao": "Substâncias de cheiro forte podem causar espasmos respiratórios e o sal não tem efeito imediato na pressão arterial sistêmica."
      },
      {
        "id": "D",
        "texto": "Manter a pessoa em pé e incentivá-la a caminhar para ativar a circulação das pernas.",
        "correta": false,
        "explicacao": "Manter a pessoa em pé agrava a hipoperfusão cerebral e aumenta drasticamente o risco de queda súbita com lesão traumática."
      }
    ]
  },
  {
    "id": 228,
    "pergunta": "Em caso de epistaxe (sangramento nasal) espontâneo e sem sinais de trauma, qual a técnica correta de primeiros socorros para estancar o fluxo sanguíneo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Inclinar a cabeça da vítima para trás e aplicar pressão na parte óssea do nariz.",
        "correta": false,
        "explicacao": "Inclinar para trás faz com que o sangue seja deglutido ou aspirado para os pulmões, o que pode causar náuseas ou asfixia."
      },
      {
        "id": "B",
        "texto": "Colocar gazes embebidas em álcool dentro das narinas para promover a cauterização química.",
        "correta": false,
        "explicacao": "O álcool irrita a mucosa nasal e causa vasodilatação inicial, podendo piorar o sangramento e causar dor intensa."
      },
      {
        "id": "C",
        "texto": "Inclinar a cabeça levemente para frente e comprimir as narinas (parte mole) por 5 a 10 minutos.",
        "correta": true,
        "explicacao": "A inclinação para frente evita a ingestão de sangue e a pressão direta na parte mole (área de Kiesselbach) é onde ocorre a maioria dos sangramentos."
      },
      {
        "id": "D",
        "texto": "Pedir para a vítima assoar o nariz com força para expelir os coágulos e depois lavar com água quente.",
        "correta": false,
        "explicacao": "Assoar o nariz remove o coágulo que está tentando fechar o vaso, e a água quente causa vasodilatação, prolongando o sangramento."
      }
    ]
  },
  {
    "id": 230,
    "pergunta": "Durante a avaliação de uma vítima inconsciente, você percebe que ela apresenta movimentos respiratórios curtos, ruidosos, ineficazes e irregulares (conhecidos como 'gasping'). Tecnicamente, como esse sinal deve ser interpretado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Como um sinal de que a vítima está tentando retornar da inconsciência; deve-se apenas monitorar.",
        "correta": false,
        "explicacao": "O gasping é um reflexo de tronco encefálico e não indica recuperação ou respiração funcional."
      },
      {
        "id": "B",
        "texto": "Como sinal de respiração presente; deve-se colocar a vítima em posição lateral de segurança.",
        "correta": false,
        "explicacao": "Considerar gasping como respiração normal é um erro comum que atrasa o início da RCP em vítimas de parada cardíaca."
      },
      {
        "id": "C",
        "texto": "Como um sinal de parada cardiorrespiratória; deve-se iniciar a RCP imediatamente.",
        "correta": true,
        "explicacao": "Segundo a AHA, o gasping não é respiração normal. Na ausência de resposta e presença de gasping, o socorrista deve tratar como PCR."
      },
      {
        "id": "D",
        "texto": "Como uma obstrução parcial por corpo estranho; deve-se aplicar a manobra de Heimlich.",
        "correta": false,
        "explicacao": "A manobra de Heimlich é para vítimas conscientes com obstrução. Gasping em vítima inconsciente é sinal de colapso circulatório/respiratório iminente."
      }
    ]
  },
  {
    "id": 230,
    "pergunta": "Ao utilizar um DEA (Desfibrilador Externo Automático) em uma vítima adulta, você percebe que o kit só possui pás pediátricas (para crianças). Qual a orientação técnica para este caso?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Utilizar as pás pediátricas normalmente, pois a carga de choque é a mesma, mudando apenas o tamanho da pá.",
        "correta": false,
        "explicacao": "Pás pediátricas geralmente possuem atenuadores de carga ou instruem o DEA a entregar uma dose de energia insuficiente para desfibrilar um coração adulto."
      },
      {
        "id": "B",
        "texto": "Não utilizar o DEA e manter apenas a RCP manual até a chegada do socorro especializado.",
        "correta": true,
        "explicacao": "Embora pás de adultos possam ser usadas em crianças (com cuidado), pás pediátricas não devem ser usadas em adultos por não fornecerem energia suficiente para o sucesso da desfibrilação."
      },
      {
        "id": "C",
        "texto": "Utilizar quatro pás pediátricas simultaneamente para somar as cargas elétricas e atingir a voltagem de adulto.",
        "correta": false,
        "explicacao": "DEAs não são projetados para funcionar com mais de duas pás; essa ação é tecnicamente impossível e perigosa."
      },
      {
        "id": "D",
        "texto": "Cortar as pás pediátricas para aumentar a superfície de contato com a pele do adulto.",
        "correta": false,
        "explicacao": "Danificar os eletrodos impede a leitura do ritmo cardíaco pelo aparelho e anula qualquer possibilidade de choque."
      }
    ]
  },
  {
    "id": 231,
    "pergunta": "Uma vítima apresenta um objeto encravado (uma faca) no tórax após uma briga. Ela está consciente e com dor. Qual é a conduta técnica de primeiros socorros correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remover o objeto rapidamente para permitir que a ferida seja limpa e comprimida.",
        "correta": false,
        "explicacao": "A remoção pode causar hemorragia maciça incontrolável, pois o objeto atua como um tampão no vaso ou órgão lesionado."
      },
      {
        "id": "B",
        "texto": "Estabilizar o objeto no local com curativos volumosos, impedindo qualquer movimentação da faca.",
        "correta": true,
        "explicacao": "A prioridade é evitar que o objeto se mova e cause novas lesões internas. Ele só deve ser removido em ambiente cirúrgico hospitalar."
      },
      {
        "id": "C",
        "texto": "Girar o objeto em 90 graus para verificar se ele atingiu a pleura ou o pulmão.",
        "correta": false,
        "explicacao": "Manipular o objeto encravado é extremamente perigoso e agrava severamente as lesões internas e a dor da vítima."
      },
      {
        "id": "D",
        "texto": "Pedir para a vítima segurar o objeto com força enquanto você a transporta para o hospital.",
        "correta": false,
        "explicacao": "A vítima pode perder a consciência ou ter espasmos de dor, movendo o objeto e piorando o quadro clínico."
      }
    ]
  },
  {
    "id": 232,
    "pergunta": "Na avaliação secundária de uma vítima consciente, o socorrista deve coletar informações rápidas. No Brasil, utiliza-se comumente o mnemônico 'SAMU' (adaptado do SAMPLE). O que a letra 'M' representa nesta avaliação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Mecanismo do trauma: Identificar como o acidente ocorreu.",
        "correta": false,
        "explicacao": "O mecanismo do trauma é avaliado na cena e na avaliação primária, não sendo o foco da letra M no histórico médico."
      },
      {
        "id": "B",
        "texto": "Medicamentos em uso: Saber se a vítima utiliza remédios regularmente.",
        "correta": true,
        "explicacao": "Identificar medicamentos (como anticoagulantes ou para diabetes) é crucial para prever complicações e informar a equipe médica."
      },
      {
        "id": "C",
        "texto": "Movimentação distal: Testar se a vítima consegue mover as extremidades.",
        "correta": false,
        "explicacao": "Isso faz parte do exame físico neurológico, não da coleta do histórico médico simplificado."
      },
      {
        "id": "D",
        "texto": "Monitoramento cardíaco: Verificar a frequência de batimentos por minuto.",
        "correta": false,
        "explicacao": "Frequência cardíaca é um sinal vital, coletado de forma separada do histórico médico da vítima."
      }
    ]
  },
  {
    "id": 233,
    "pergunta": "Durante a avaliação das pupilas de uma vítima de trauma craniano, você observa 'Anisocoria' (uma pupila maior que a outra). O que esse sinal clínico geralmente indica em um contexto de emergência?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Um estado normal de relaxamento ocular após um susto intenso.",
        "correta": false,
        "explicacao": "Pupilas normais (isocóricas) devem ter o mesmo diâmetro e reagir igualmente à luz."
      },
      {
        "id": "B",
        "texto": "Possível aumento da pressão intracraniana ou lesão cerebral focal no lado da pupila dilatada.",
        "correta": true,
        "explicacao": "A anisocoria é um sinal de alerta crítico que sugere compressão de nervos cranianos por edema, hemorragia ou massa dentro do crânio."
      },
      {
        "id": "C",
        "texto": "Exposição excessiva a gases tóxicos como o monóxido de carbono.",
        "correta": false,
        "explicacao": "No envenenamento por CO, as pupilas costumam estar normais ou dilatadas bilateralmente (midríase), acompanhadas de pele rosada."
      },
      {
        "id": "D",
        "texto": "Uso recente de colírios lubrificantes comuns ou fadiga ocular.",
        "correta": false,
        "explicacao": "Colírios lubrificantes não causam assimetria pupilar significativa; tal sinal em trauma nunca deve ser ignorado."
      }
    ]
  },
  {
    "id": 234,
    "pergunta": "Uma vítima de trauma apresenta um ferimento penetrante no tórax (pneumotórax aberto) que emite um som de 'sucção' a cada respiração. Qual a técnica correta para o curativo de emergência?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ocluir o ferimento totalmente com um plástico fixado nos quatro lados para impedir a entrada de ar.",
        "correta": false,
        "explicacao": "Fechar os quatro lados pode transformar um pneumotórax aberto em um pneumotórax hipertensivo, uma condição fatal onde o ar fica preso e comprime o coração."
      },
      {
        "id": "B",
        "texto": "Aplicar um curativo de gaze seca e frouxa para permitir a limpeza da ferida no hospital.",
        "correta": false,
        "explicacao": "Gazes secas e frouxas permitem que o ar continue entrando na cavidade pleural, mantendo o colapso do pulmão."
      },
      {
        "id": "C",
        "texto": "Utilizar um curativo oclusivo (plástico) fixado em apenas três lados (curativo valvulado).",
        "correta": true,
        "explicacao": "O curativo de três pontas funciona como uma válvula: impede a entrada de ar durante a inspiração, mas permite a saída do ar aprisionado durante a expiração."
      },
      {
        "id": "D",
        "texto": "Inserir um dedo limpo no orifício para tentar tapar a perfuração até a chegada do cirurgião.",
        "correta": false,
        "explicacao": "Nunca se deve inserir objetos ou dedos em cavidades corporais penetradas; isso aumenta o risco de infecção e lesão interna."
      }
    ]
  },
  {
    "id": 235,
    "pergunta": "Uma pessoa com diabetes começa a apresentar confusão mental, fala arrastada, sudorese fria e tremores. Ela está consciente e consegue deglutir. Qual a conduta imediata indicada para este quadro de hipoglicemia?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar uma dose de insulina para estabilizar os níveis de açúcar no sangue.",
        "correta": false,
        "explicacao": "Insulina reduz o açúcar. Em uma crise de hipoglicemia (açúcar baixo), a insulina pode levar à morte imediata."
      },
      {
        "id": "B",
        "texto": "Oferecer cerca de 15g de carboidratos simples (como uma colher de açúcar ou meio copo de suco de laranja).",
        "correta": true,
        "explicacao": "Se a vítima está consciente e consegue engolir, a administração oral de açúcar rápido é a intervenção padrão para reverter a hipoglicemia."
      },
      {
        "id": "C",
        "texto": "Fornecer uma refeição pesada e completa para garantir que o açúcar não caia novamente.",
        "correta": false,
        "explicacao": "Refeições pesadas demoram para ser digeridas; o cérebro precisa de glicose de absorção imediata durante a crise."
      },
      {
        "id": "D",
        "texto": "Dar um banho gelado para despertar a vítima e melhorar seu estado de alerta.",
        "correta": false,
        "explicacao": "O banho gelado causa estresse térmico e não resolve a falta de combustível (glicose) no cérebro."
      }
    ]
  },
  {
    "id": 236,
    "pergunta": "Em caso de picada de cobra (ofidismo) em uma extremidade (mão ou pé), quais são as recomendações técnicas corretas de primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fazer um corte em forma de 'X' sobre a picada e sugar o veneno com a boca.",
        "correta": false,
        "explicacao": "Cortes e sucção são ineficazes, aumentam o risco de infecção e podem causar envenenamento ao socorrista por feridas na boca."
      },
      {
        "id": "B",
        "texto": "Lavar o local apenas com água e sabão, manter a vítima em repouso e o membro imobilizado.",
        "correta": true,
        "explicacao": "O repouso e a imobilização retardam a circulação linfática do veneno. O tratamento definitivo é apenas o soro específico no hospital."
      },
      {
        "id": "C",
        "texto": "Aplicar borra de café ou querosene sobre a ferida para neutralizar as toxinas.",
        "correta": false,
        "explicacao": "Substâncias caseiras contaminam a ferida e dificultam a avaliação médica, não possuindo efeito sobre o veneno injetado."
      },
      {
        "id": "D",
        "texto": "Capturar o animal vivo e levá-lo dentro do carro para que o médico possa identificá-lo.",
        "correta": false,
        "explicacao": "Tentar capturar o animal aumenta o risco de uma segunda picada. Recomenda-se apenas tirar uma foto ou descrever as características à distância."
      }
    ]
  },
  {
    "id": 237,
    "pergunta": "Ao avaliar uma vítima consciente utilizando o mnemônico SAMPLE (ou SAMU), o socorrista pergunta sobre 'Alergias'. Qual a importância técnica dessa informação para o atendimento subsequente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Saber se a vítima tem alergia a poeira para decidir se deve usar máscara na cena.",
        "correta": false,
        "explicacao": "Alergias ambientais leves são irrelevantes em emergências agudas comparadas a alergias a medicamentos."
      },
      {
        "id": "B",
        "texto": "Evitar que a equipe médica administre medicamentos (como dipirona ou penicilina) que possam causar choque anafilático.",
        "correta": true,
        "explicacao": "Informar alergias medicamentosas é vital para a segurança do paciente durante a continuidade do cuidado no hospital ou unidade avançada."
      },
      {
        "id": "C",
        "texto": "Descobrir se a vítima tem alergia a animais para identificar a causa de uma possível queda.",
        "correta": false,
        "explicacao": "Embora útil, o foco principal do SAMPLE é fornecer dados que impactem o tratamento clínico imediato."
      },
      {
        "id": "D",
        "texto": "Verificar se a vítima pode comer alimentos oferecidos pelo socorrista durante o transporte.",
        "correta": false,
        "explicacao": "Vítimas de trauma ou emergências clínicas não devem receber alimentos por via oral devido ao risco de aspiração e cirurgia iminente."
      }
    ]
  },
  {
    "id": 238,
    "pergunta": "Antes e depois de imobilizar uma suspeita de fratura ou luxação em um membro, o socorrista deve verificar o 'PMS'. O que significa essa verificação técnica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pressão, Movimento e Simetria.",
        "correta": false,
        "explicacao": "A simetria é avaliada no início, mas não é o foco do monitoramento da perfusão e função após a imobilização."
      },
      {
        "id": "B",
        "texto": "Pulso, Motricidade e Sensibilidade.",
        "correta": true,
        "explicacao": "Verificar o Pulso distal, a capacidade de Movimento e a Sensibilidade garante que a imobilização não está muito apertada e que o trauma não rompeu vasos ou nervos."
      },
      {
        "id": "C",
        "texto": "Posicionamento, Manuseio e Segurança.",
        "correta": false,
        "explicacao": "Estes são princípios gerais do atendimento, não uma técnica de avaliação neurológica e vascular de membros."
      },
      {
        "id": "D",
        "texto": "Palidez, Musculatura e Sangramento.",
        "correta": false,
        "explicacao": "Embora a palidez seja um sinal vascular, o acrônimo PMS refere-se especificamente à tríade Pulso/Motor/Sensorial."
      }
    ]
  },
  {
    "id": 239,
    "pergunta": "Uma vítima sofreu uma luxação (deslocamento de osso da articulação) visível no ombro. Qual a conduta correta de primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fazer uma manobra rápida para colocar o osso de volta no lugar (redução).",
        "correta": false,
        "explicacao": "Leigos nunca devem tentar reduzir luxações, pois podem causar lesões permanentes em nervos e vasos sanguíneos adjacentes."
      },
      {
        "id": "B",
        "texto": "Imobilizar a articulação na posição em que foi encontrada, sem tentar realinhá-la.",
        "correta": true,
        "explicacao": "A regra de ouro é imobilizar como está. Isso previne dor adicional e protege estruturas internas até a avaliação radiográfica hospitalar."
      },
      {
        "id": "C",
        "texto": "Pedir para a vítima realizar movimentos circulares para 'soltar' a musculatura travada.",
        "correta": false,
        "explicacao": "Movimentar uma articulação luxada agrava a lesão de ligamentos e cápsula articular, aumentando a dor e o edema."
      },
      {
        "id": "D",
        "texto": "Aplicar compressas de água quente para facilitar o relaxamento e o retorno espontâneo do osso.",
        "correta": false,
        "explicacao": "O calor aumenta o fluxo sanguíneo local, piorando o inchaço (edema) e a inflamação na fase aguda do trauma."
      }
    ]
  },
  {
    "id": 240,
    "pergunta": "Você presencia uma vítima que sofreu um choque elétrico doméstico (110v/220v) e ainda está em contato com a fonte de energia. Qual a primeira ação técnica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Puxar a vítima pelas mãos para interromper o contato elétrico o mais rápido possível.",
        "correta": false,
        "explicacao": "O corpo humano é condutor. Se você tocar na vítima, também sofrerá o choque e se tornará uma segunda vítima."
      },
      {
        "id": "B",
        "texto": "Tentar cortar o fio elétrico utilizando uma tesoura metálica comum.",
        "correta": false,
        "explicacao": "O metal da tesoura conduzirá a eletricidade para o socorrista, causando um acidente grave."
      },
      {
        "id": "C",
        "texto": "Desligar a chave geral (disjuntor) ou retirar o plugue da tomada sem tocar na vítima.",
        "correta": true,
        "explicacao": "Interromper o fluxo de energia na fonte é a única maneira segura de garantir que a cena se torne apta para o socorro."
      },
      {
        "id": "D",
        "texto": "Utilizar uma vassoura de metal para afastar o fio do corpo da vítima.",
        "correta": false,
        "explicacao": "Materiais metálicos conduzem eletricidade; apenas materiais isolantes (madeira seca, plástico) poderiam ser usados, mas desligar a fonte é preferível."
      }
    ]
  },
  {
    "id": 241,
    "pergunta": "Em um cenário de incêndio, você precisa mover uma vítima inconsciente de um local perigoso para um seguro. Qual técnica de transporte por um único socorrista é mais indicada para evitar a inalação de fumaça?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Transporte de cadeirinha (com auxílio de outra pessoa).",
        "correta": false,
        "explicacao": "O transporte de cadeirinha exige dois socorristas e mantém a vítima em um nível onde a fumaça é mais densa."
      },
      {
        "id": "B",
        "texto": "Arrasto pela roupa ou pelos ombros, mantendo a vítima próxima ao chão.",
        "correta": true,
        "explicacao": "Arrastar a vítima permite que o socorrista e a vítima fiquem abaixo da camada de fumaça tóxica, além de exigir menos força física para mover um corpo inerte."
      },
      {
        "id": "C",
        "texto": "Carregamento tipo 'bombeiro' (sobre os ombros).",
        "correta": false,
        "explicacao": "Embora clássico, esse transporte eleva a vítima para o nível do teto, onde o calor e a fumaça são letais, além de ser instável."
      },
      {
        "id": "D",
        "texto": "Transporte de apoio (vítima caminhando com o socorrista).",
        "correta": false,
        "explicacao": "Vítimas inconscientes não conseguem caminhar; esta técnica é exclusiva para vítimas conscientes e colaborativas."
      }
    ]
  },
  {
    "id": 242,
    "pergunta": "Qual é a definição correta de 'Sinais Vitais' no contexto do atendimento pré-hospitalar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "São indicadores que refletem o funcionamento das funções básicas do organismo (respiração, circulação, temperatura).",
        "correta": true,
        "explicacao": "Sinais vitais são parâmetros objetivos que permitem avaliar o estado de saúde imediato e a estabilidade de uma pessoa."
      },
      {
        "id": "B",
        "texto": "São as perguntas que fazemos para saber o nome e a idade da vítima.",
        "correta": false,
        "explicacao": "Identificação pessoal faz parte da anamnese/histórico, não são sinais vitais fisiológicos."
      },
      {
        "id": "C",
        "texto": "É a contagem de fraturas e ferimentos visíveis no corpo da vítima.",
        "correta": false,
        "explicacao": "A contagem de lesões faz parte do exame físico/avaliação secundária de trauma."
      },
      {
        "id": "D",
        "texto": "São os equipamentos eletrônicos usados para monitorar o coração no hospital.",
        "correta": false,
        "explicacao": "Os sinais vitais são as medidas em si (ex: frequência cardíaca), e não os aparelhos utilizados para medi-las."
      }
    ]
  },
  {
    "id": 243,
    "pergunta": "Durante a avaliação da circulação periférica de uma vítima, o socorrista pressiona o leito ungueal (unha) até que ele fique branco e observa o tempo que o sangue leva para retornar. Como se chama essa técnica e qual o tempo considerado normal para um adulto?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Teste de sensibilidade distal; tempo normal até 5 segundos.",
        "correta": false,
        "explicacao": "O teste de sensibilidade avalia o sistema nervoso, não o enchimento vascular."
      },
      {
        "id": "B",
        "texto": "Avaliação de pressão arterial sistólica; tempo normal de 1 segundo.",
        "correta": false,
        "explicacao": "A pressão arterial não pode ser medida apenas pela compressão da unha."
      },
      {
        "id": "C",
        "texto": "Teste do enchimento capilar; tempo normal de até 2 segundos.",
        "correta": true,
        "explicacao": "O retorno da cor rosada em até 2 segundos indica que a perfusão tecidual está adequada. Tempos maiores sugerem choque ou má circulação."
      },
      {
        "id": "D",
        "texto": "Manobra de Allen; tempo normal entre 3 e 4 segundos.",
        "correta": false,
        "explicacao": "A manobra de Allen é um teste específico para artérias radial e ulnar, e 4 segundos já é considerado um tempo de alerta."
      }
    ]
  },
  {
    "id": 244,
    "pergunta": "Uma vítima apresenta uma queimadura profunda que atingiu todas as camadas da pele, apresentando aspecto esbranquiçado e textura coriácea (parecida com couro). Surpreendentemente, ela afirma não sentir dor no local da lesão. Como se classifica essa queimadura e por que não há dor?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Queimadura de 1º grau; a dor é ausente pois o calor cauterizou os poros.",
        "correta": false,
        "explicacao": "Queimaduras de 1º grau atingem apenas a epiderme e são muito dolorosas."
      },
      {
        "id": "B",
        "texto": "Queimadura de 2º grau; a dor cessa quando as bolhas (flictenas) se rompem.",
        "correta": false,
        "explicacao": "Queimaduras de 2º grau são extremamente dolorosas devido à exposição das terminações nervosas."
      },
      {
        "id": "C",
        "texto": "Queimadura de 3º grau; não há dor porque as terminações nervosas foram destruídas pelo calor.",
        "correta": true,
        "explicacao": "Nas queimaduras de 3º grau (espessura total), os receptores de dor na derme são destruídos, resultando em insensibilidade local (embora a área ao redor, de 2º grau, doa muito)."
      },
      {
        "id": "D",
        "texto": "Queimadura química; a ausência de dor indica que o produto foi neutralizado pelo organismo.",
        "correta": false,
        "explicacao": "Queimaduras químicas costumam ser progressivas e muito dolorosas enquanto o agente não for removido."
      }
    ]
  },
  {
    "id": 245,
    "pergunta": "Você encontra uma vítima de acidente de trânsito com uma fratura exposta na perna (o osso está visível). Qual a conduta correta de primeiros socorros em relação ao ferimento e ao osso?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tentar empurrar a extremidade óssea para dentro da pele para evitar infecção externa.",
        "correta": false,
        "explicacao": "Nunca se deve tentar reposicionar ossos em fraturas expostas; isso causa danos graves a tecidos, vasos e nervos."
      },
      {
        "id": "B",
        "texto": "Cobrir o ferimento e o osso exposto com um curativo estéril e úmido, sem pressionar o osso.",
        "correta": true,
        "explicacao": "O curativo úmido (com soro ou água limpa) evita o ressecamento do osso e protege contra contaminação externa até o hospital."
      },
      {
        "id": "C",
        "texto": "Lavar o osso com álcool 70% para garantir a esterilização total antes de enfaixar.",
        "correta": false,
        "explicacao": "O álcool é citotóxico e causa dor extrema, além de lesionar ainda mais os tecidos profundos expostos."
      },
      {
        "id": "D",
        "texto": "Aplicar pó antisséptico sobre o osso para estancar possíveis micro-sangramentos ósseos.",
        "correta": false,
        "explicacao": "Produtos em pó aderem à ferida e dificultam a limpeza cirúrgica necessária no hospital."
      }
    ]
  },
  {
    "id": 246,
    "pergunta": "Uma vítima relata que um cisco ou pequeno fragmento de areia entrou em seu olho. O olho está vermelho e lacrimejando. Qual a orientação técnica correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pedir para a vítima esfregar o olho vigorosamente para que as lágrimas expulsem o objeto.",
        "correta": false,
        "explicacao": "Esfregar pode fazer com que o objeto arranhe a córnea, causando uma lesão muito mais grave."
      },
      {
        "id": "B",
        "texto": "Utilizar uma pinça de sobrancelha para tentar remover o objeto caso ele esteja sobre a pupila.",
        "correta": false,
        "explicacao": "Instrumentos pontiagudos nunca devem ser usados perto dos olhos por leigos; o risco de perfuração ocular é altíssimo."
      },
      {
        "id": "C",
        "texto": "Lavar o olho com água limpa em abundância e, se o objeto persistir, cobrir o olho sem pressionar e encaminhar ao médico.",
        "correta": true,
        "explicacao": "A lavagem suave é a técnica segura. Se o objeto estiver encravado ou não sair, a oclusão evita o movimento palpebral que agravaria a lesão."
      },
      {
        "id": "D",
        "texto": "Assuprar o olho da vítima com força para deslocar o fragmento pelo fluxo de ar.",
        "correta": false,
        "explicacao": "Assuprar introduz bactérias da boca no olho da vítima e raramente remove objetos que já aderiram à mucosa."
      }
    ]
  },
  {
    "id": 247,
    "pergunta": "Na avaliação do 'B' (Boa Ventilação) do protocolo XABCDE, o que o socorrista deve observar prioritariamente para identificar uma insuficiência respiratória?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A cor da íris da vítima e a capacidade de fala articulada.",
        "correta": false,
        "explicacao": "A cor da íris não muda em emergências respiratórias agudas."
      },
      {
        "id": "B",
        "texto": "A expansão torácica, a frequência respiratória e a presença de cianose (cor azulada).",
        "correta": true,
        "explicacao": "Estes sinais indicam se o oxigênio está entrando nos pulmões e atingindo a corrente sanguínea de forma eficaz."
      },
      {
        "id": "C",
        "texto": "Apenas se a vítima consegue contar de 1 a 10 sem parar para respirar.",
        "correta": false,
        "explicacao": "Embora ajude a avaliar a fala, não substitui a observação direta do esforço respiratório e da coloração da pele."
      },
      {
        "id": "D",
        "texto": "O cheiro do hálito da vítima em busca de sinais de intoxicação alimentar.",
        "correta": false,
        "explicacao": "O hálito pode indicar algumas condições clínicas, mas não é a prioridade na avaliação da mecânica respiratória."
      }
    ]
  },
  {
    "id": 248,
    "pergunta": "Uma pessoa 'virou o pé' (entorse de tornozelo) enquanto caminhava. Há inchaço imediato e dor, mas ela ainda consegue movimentar os dedos. Qual o protocolo básico de atendimento inicial (RICE/PRICE)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Fazer massagens fortes no local com pomada aquecedora para estimular o sangue.",
        "correta": false,
        "explicacao": "Massagens e calor pioram o inchaço e a inflamação nas primeiras 48 horas de um trauma articular."
      },
      {
        "id": "B",
        "texto": "Repouso, aplicação de gelo (protegido), compressão suave e elevação do membro.",
        "correta": true,
        "explicacao": "O gelo causa vasoconstrição (diminuindo o inchaço) e a elevação facilita o retorno venoso, reduzindo a dor e o edema."
      },
      {
        "id": "C",
        "texto": "Incentivar a vítima a caminhar forçando o pé no chão para o osso 'voltar para o lugar'.",
        "correta": false,
        "explicacao": "Forçar o membro lesionado pode transformar um entorse leve em uma ruptura completa de ligamentos ou até uma fratura por estresse."
      },
      {
        "id": "D",
        "texto": "Aplicar faixas gessadas imediatas para impedir qualquer milímetro de movimento.",
        "correta": false,
        "explicacao": "O gesso só deve ser aplicado após avaliação médica e radiográfica para descartar fraturas."
      }
    ]
  },
  {
    "id": 249,
    "pergunta": "Qual a principal finalidade do uso de luvas de procedimento (EPI) pelo socorrista ao atender uma vítima com ferimentos sangrentos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Evitar que as digitais do socorrista contaminem a cena do crime.",
        "correta": false,
        "explicacao": "A finalidade dos primeiros socorros é a saúde; questões forenses são secundárias à segurança biológica."
      },
      {
        "id": "B",
        "texto": "Manter as mãos do socorrista aquecidas para não causar desconforto à vítima.",
        "correta": false,
        "explicacao": "Luvas de látex ou nitrílicas são finas e não possuem função térmica."
      },
      {
        "id": "C",
        "texto": "Barreira de proteção contra doenças infectocontagiosas transmitidas pelo sangue e fluidos corporais.",
        "correta": true,
        "explicacao": "O uso de luvas protege o socorrista de patógenos como HIV e Hepatites, além de proteger a vítima de bactérias presentes nas mãos do socorrista."
      },
      {
        "id": "D",
        "texto": "Aumentar a aderência das mãos para conseguir segurar a vítima com mais força.",
        "correta": false,
        "explicacao": "Pelo contrário, luvas com sangue podem ficar escorregadias; sua função é estritamente de biossegurança."
      }
    ]
  },
  {
    "id": 250,
    "pergunta": "Uma criança ingeriu acidentalmente um produto de limpeza cáustico (soda cáustica). Ela apresenta queimaduras nos lábios e dor de garganta. Qual é a recomendação técnica fundamental de primeiros socorros para ingestão de substâncias corrosivas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Provocar o vômito imediatamente para retirar o produto do estômago.",
        "correta": false,
        "explicacao": "Se o produto queimou ao descer, queimará novamente ao subir, aumentando o risco de perfuração do esôfago e aspiração pulmonar."
      },
      {
        "id": "B",
        "texto": "Não induzir o vômito e não oferecer líquidos (como leite ou água) sem orientação médica específica.",
        "correta": true,
        "explicacao": "Em ingestão de corrosivos, induzir o vômito é contraindicado. A diluição caseira também pode causar reações químicas térmicas no estômago."
      },
      {
        "id": "C",
        "texto": "Oferecer suco de limão ou vinagre para neutralizar a base (soda) no estômago.",
        "correta": false,
        "explicacao": "A neutralização química produz calor (reação exotérmica), o que pode causar queimaduras térmicas internas gravíssimas."
      },
      {
        "id": "D",
        "texto": "Dar bastante pão ou miolo de pão para absorver o líquido corrosivo.",
        "correta": false,
        "explicacao": "Sólidos não impedem a ação química do corrosivo e podem dificultar procedimentos médicos como a endoscopia."
      }
    ]
  },
  {
    "id": 251,
    "pergunta": "Em um acidente com ferimento abdominal grave, ocorre a exposição de órgãos internos (evisceração). Qual deve ser a atitude do socorrista?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Recolocar cuidadosamente os órgãos para dentro da cavidade abdominal.",
        "correta": false,
        "explicacao": "Nunca tente reintroduzir órgãos; isso introduz infecção e pode causar torção das alças intestinais."
      },
      {
        "id": "B",
        "texto": "Lavar os órgãos com água oxigenada para matar as bactérias do ambiente.",
        "correta": false,
        "explicacao": "Água oxigenada é agressiva aos tecidos internos e não deve ser usada em órgãos expostos."
      },
      {
        "id": "C",
        "texto": "Cobrir os órgãos com um curativo estéril (ou pano muito limpo) úmido e fixá-lo sem comprimir.",
        "correta": true,
        "explicacao": "Os órgãos expostos não podem secar (desidratação tecidual). O curativo úmido mantém a viabilidade do tecido até a cirurgia."
      },
      {
        "id": "D",
        "texto": "Manter os órgãos secos e expostos ao sol para evitar a proliferação de fungos.",
        "correta": false,
        "explicacao": "A exposição ao ar e ao sol acelera a necrose (morte) dos tecidos viscerais expostos."
      }
    ]
  },
  {
    "id": 252,
    "pergunta": "Ao palpar suavemente a região de uma suspeita de fratura, o socorrista ouve ou sente um ruído semelhante ao de 'atrito entre pedras' ou 'estalar de dedos'. Como se chama esse sinal e o que ele indica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pulsação braquial; indica que a artéria está rompida.",
        "correta": false,
        "explicacao": "Pulsação é o batimento cardíaco sentido nas artérias, não um ruído de atrito."
      },
      {
        "id": "B",
        "texto": "Crepitação óssea; indica o atrito entre as extremidades dos ossos fraturados.",
        "correta": true,
        "explicacao": "A crepitação é um sinal clássico de fratura, causado pelo roçamento das partes quebradas do osso."
      },
      {
        "id": "C",
        "texto": "Sinal de Murphy; indica que a inflamação atingiu os nervos motores.",
        "correta": false,
        "explicacao": "O sinal de Murphy é um teste específico para inflamação na vesícula biliar."
      },
      {
        "id": "D",
        "texto": "Edema subcutâneo; indica que há acúmulo de ar sob a pele.",
        "correta": false,
        "explicacao": "O acúmulo de ar sob a pele é o enfisema subcutâneo, que produz uma sensação de 'plástico bolha', diferente do atrito ósseo."
      }
    ]
  },
  {
    "id": 253,
    "pergunta": "Durante a avaliação do nível de consciência, o socorrista utiliza a escala ASDI (conhecida internacionalmente como AVPU). O que a letra 'S' representa nesta escala?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sinais vitais: verificar se o pulso está forte ou fraco.",
        "correta": false,
        "explicacao": "Sinais vitais são avaliados em outra etapa; a escala ASDI foca apenas na responsividade neurológica."
      },
      {
        "id": "B",
        "texto": "Som (Voz): a vítima responde apenas quando chamada ou estimulada verbalmente.",
        "correta": true,
        "explicacao": "ASDI significa: Alerta, Som (voz), Dor e Inconsciente. A letra 'S' indica que a vítima não está alerta, mas reage a estímulos sonoros."
      },
      {
        "id": "C",
        "texto": "Sangramento: observar se há hemorragias ativas no crânio.",
        "correta": false,
        "explicacao": "Hemorragias são tratadas no 'X' ou 'C' do protocolo, não na escala de consciência."
      },
      {
        "id": "D",
        "texto": "Sensibilidade: testar se a vítima sente toques nos braços e pernas.",
        "correta": false,
        "explicacao": "O teste de sensibilidade faz parte do exame físico detalhado, não da triagem rápida de consciência."
      }
    ]
  },
  {
    "id": 254,
    "pergunta": "Qual é a primeira técnica recomendada para controlar uma hemorragia externa abundante em um ferimento no antebraço, antes de considerar métodos mais invasivos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar pressão direta sobre o ferimento utilizando uma compressa limpa ou gaze.",
        "correta": true,
        "explicacao": "A pressão direta é a manobra inicial mais eficaz para estancar a maioria das hemorragias externas, permitindo o início da coagulação."
      },
      {
        "id": "B",
        "texto": "Elevar o membro acima do nível da cabeça e aguardar o sangue parar naturalmente.",
        "correta": false,
        "explicacao": "A elevação sozinha raramente estanca hemorragias abundantes e nunca deve substituir a compressão direta."
      },
      {
        "id": "C",
        "texto": "Lavar o ferimento com água corrente para localizar o vaso rompido antes de apertar.",
        "correta": false,
        "explicacao": "Em hemorragias graves, não se perde tempo lavando; a prioridade é estancar o sangramento para evitar o choque hipovolêmico."
      },
      {
        "id": "D",
        "texto": "Fazer pressão no ponto arterial da axila para interromper o fluxo total do braço.",
        "correta": false,
        "explicacao": "A pressão em pontos arteriais (distantes do ferimento) caiu em desuso por ser pouco eficaz comparada à pressão direta no local da lesão."
      }
    ]
  },
  {
    "id": 255,
    "pergunta": "Ao realizar o exame físico (avaliação secundária) de uma vítima de queda, o socorrista deve seguir qual sequência lógica para garantir que nenhuma lesão seja esquecida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Avaliar primeiro as extremidades (pés e mãos) e terminar na cabeça.",
        "correta": false,
        "explicacao": "A sequência deve priorizar áreas onde lesões ocultas podem ser mais letais."
      },
      {
        "id": "B",
        "texto": "Avaliar apenas as regiões onde a vítima se queixa de dor.",
        "correta": false,
        "explicacao": "Vítimas em estado de choque ou com 'lesões de distração' podem não sentir dor em áreas gravemente feridas."
      },
      {
        "id": "C",
        "texto": "Sequência céfalo-caudal (da cabeça aos pés).",
        "correta": true,
        "explicacao": "A avaliação sistemática da cabeça aos pés permite identificar traumas cranianos, cervicais, torácicos e abdominais antes das lesões em membros."
      },
      {
        "id": "D",
        "texto": "Avaliar primeiro o abdômen e depois o tórax.",
        "correta": false,
        "explicacao": "O tórax deve ser avaliado antes do abdômen, pois compromete a função respiratória e circulatória de forma mais imediata."
      }
    ]
  },
  {
    "id": 256,
    "pergunta": "A Posição Lateral de Segurança (PLS) é indicada para qual situação específica em primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Vítimas com suspeita de fratura de coluna cervical para facilitar o transporte.",
        "correta": false,
        "explicacao": "A PLS é contraindicada em casos de trauma de coluna, onde o alinhamento deve ser mantido rigorosamente."
      },
      {
        "id": "B",
        "texto": "Vítimas inconscientes que respiram e possuem pulso, para evitar a aspiração de vômito e queda da língua.",
        "correta": true,
        "explicacao": "A PLS mantém as vias aéreas livres e permite que fluidos saiam da boca pela ação da gravidade, prevenindo a asfixia."
      },
      {
        "id": "C",
        "texto": "Vítimas em parada cardiorrespiratória enquanto o DEA não chega.",
        "correta": false,
        "explicacao": "Vítimas em parada devem ser mantidas em decúbito dorsal (costas no chão) para a realização da RCP."
      },
      {
        "id": "D",
        "texto": "Vítimas com ferimentos graves no abdômen.",
        "correta": false,
        "explicacao": "Ferimentos abdominais graves geralmente requerem que a vítima fique de costas com os joelhos levemente flexionados para reduzir a tensão muscular."
      }
    ]
  },
  {
    "id": 257,
    "pergunta": "Um adolescente sofre um trauma na boca durante um jogo e um dente permanente é totalmente arrancado (avulsão dentária). Qual a técnica correta para preservar o dente até o dentista?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lavar o dente com sabão e escovar a raiz para remover qualquer sujeira.",
        "correta": false,
        "explicacao": "Escovar a raiz destrói as células do ligamento periodontal, impedindo que o dente seja reimplantado com sucesso."
      },
      {
        "id": "B",
        "texto": "Segurar o dente pela coroa (parte branca) e mantê-lo em um recipiente com leite ou saliva da própria vítima.",
        "correta": true,
        "explicacao": "O leite ou a saliva possuem pH e nutrientes que mantêm as células da raiz vivas por mais tempo até o atendimento profissional."
      },
      {
        "id": "C",
        "texto": "Embrulhar o dente em um papel toalha seco para que ele não escorregue.",
        "correta": false,
        "explicacao": "O dente nunca deve secar; a desidratação mata as células necessárias para a reintegração ao osso."
      },
      {
        "id": "D",
        "texto": "Mergulhar o dente em álcool ou antisséptico bucal para evitar infecção.",
        "correta": false,
        "explicacao": "Substâncias químicas agressivas matam os tecidos vivos da raiz do dente."
      }
    ]
  },
  {
    "id": 258,
    "pergunta": "Ao prestar socorro a uma vítima de queda de altura que está consciente, por que é tecnicamente recomendado realizar a estabilização manual da cabeça antes de qualquer outra ação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Para evitar que a vítima sinta tontura ao olhar para os lados.",
        "correta": false,
        "explicacao": "A tontura é um sintoma, mas não é o risco vital que motiva a estabilização."
      },
      {
        "id": "B",
        "texto": "Para impedir movimentos que possam causar ou agravar uma lesão na medula espinhal.",
        "correta": true,
        "explicacao": "Em traumas de alto impacto, a coluna cervical deve ser protegida para evitar a tetraplegia ou parada respiratória por lesão medular alta."
      },
      {
        "id": "C",
        "texto": "Para facilitar a visualização das pupilas durante o exame físico.",
        "correta": false,
        "explicacao": "A avaliação pupilar pode ser feita sem estabilização, mas a segurança da medula é prioridade absoluta no trauma."
      },
      {
        "id": "D",
        "texto": "Porque a cabeça é a parte mais pesada do corpo e ajuda a fixar os ombros no chão.",
        "correta": false,
        "explicacao": "A estabilização visa a proteção nervosa e óssea, não o equilíbrio de peso do corpo."
      }
    ]
  },
  {
    "id": 259,
    "pergunta": "Quais são os sinais e sintomas clássicos que indicam que uma vítima está entrando em 'Estado de Choque' (hipoperfusão)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pele quente e avermelhada, pulso lento e forte, euforia.",
        "correta": false,
        "explicacao": "Estes sinais são opostos ao choque; no choque a pele esfria e o pulso acelera."
      },
      {
        "id": "B",
        "texto": "Pele pálida e fria, sudorese, pulso rápido e fraco (filiforme), sede e agitação.",
        "correta": true,
        "explicacao": "O corpo desvia o sangue dos órgãos periféricos (pele) para os vitais, causando palidez, frio e aceleração cardíaca compensatória."
      },
      {
        "id": "C",
        "texto": "Pressão arterial muito alta, pupilas contraídas e sono profundo.",
        "correta": false,
        "explicacao": "No choque, a tendência é a queda da pressão arterial (sinal tardio) e não o aumento."
      },
      {
        "id": "D",
        "texto": "Fome excessiva, dor nas articulações e visão colorida.",
        "correta": false,
        "explicacao": "Estes não são sinais clínicos relacionados à falha do sistema circulatório."
      }
    ]
  },
  {
    "id": 260,
    "pergunta": "Ao chegar em uma cena de acidente, o socorrista deve realizar a 'Avaliação da Cena'. Qual é o objetivo principal desta etapa, antes de tocar na vítima?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Identificar quem foi o culpado pelo acidente para informar a polícia.",
        "correta": false,
        "explicacao": "A responsabilidade legal não é função do socorrista de primeiros socorros."
      },
      {
        "id": "B",
        "texto": "Garantir a própria segurança e a de terceiros, identificando riscos como tráfego, fogo ou eletricidade.",
        "correta": true,
        "explicacao": "Um socorrista ferido torna-se uma nova vítima e impede o socorro da primeira. A segurança da cena é a regra número 1."
      },
      {
        "id": "C",
        "texto": "Verificar se a vítima possui plano de saúde ou documentos de identificação.",
        "correta": false,
        "explicacao": "Informações burocráticas são secundárias e só avaliadas após a estabilização da vítima."
      },
      {
        "id": "D",
        "texto": "Começar a fotografar o local para registrar a ocorrência.",
        "correta": false,
        "explicacao": "Registros visuais não devem atrasar a avaliação de segurança e o atendimento às funções vitais."
      }
    ]
  },
  {
    "id": 261,
    "pergunta": "Na avaliação da pele de uma vítima, o socorrista observa 'Cianose'. O que é este sinal e o que ele sugere?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pele amarelada, sugerindo problemas graves no fígado ou pâncreas.",
        "correta": false,
        "explicacao": "O tom amarelado é chamado de icterícia."
      },
      {
        "id": "B",
        "texto": "Pele com manchas roxas dispersas, sugerindo alergia a medicamentos.",
        "correta": false,
        "explicacao": "Manchas roxas de trauma são hematomas ou equimoses."
      },
      {
        "id": "C",
        "texto": "Coloração azulada/arroxeada (lábios e extremidades), sugerindo falta de oxigenação no sangue.",
        "correta": true,
        "explicacao": "A cianose ocorre quando a hemoglobina está mal oxigenada, sendo um sinal crítico de insuficiência respiratória ou circulatória."
      },
      {
        "id": "D",
        "texto": "Pele extremamente branca e seca, sugerindo desidratação severa.",
        "correta": false,
        "explicacao": "A palidez indica má perfusão, mas a cianose é especificamente o tom azulado pela hipóxia."
      }
    ]
  },
  {
    "id": 262,
    "pergunta": "Uma pessoa teve os olhos atingidos por um jato de produto químico de limpeza. Qual a primeira conduta técnica correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pingar colírio anestésico para aliviar a dor imediatamente.",
        "correta": false,
        "explicacao": "Socorristas leigos não devem administrar medicamentos; o foco deve ser a remoção do contaminante."
      },
      {
        "id": "B",
        "texto": "Irrigar os olhos com água corrente de forma contínua por pelo menos 20 minutos.",
        "correta": true,
        "explicacao": "A lavagem prolongada e imediata é essencial para diluir e remover o agente químico, minimizando a queimadura ocular."
      },
      {
        "id": "C",
        "texto": "Vendar os olhos com gazes secas e levar ao hospital sem lavar, para não espalhar o produto.",
        "correta": false,
        "explicacao": "Não lavar permite que o produto continue reagindo com os tecidos oculares, agravando a lesão permanentemente."
      },
      {
        "id": "D",
        "texto": "Pedir para a vítima manter os olhos bem fechados até chegar ao pronto-socorro.",
        "correta": false,
        "explicacao": "Fechar os olhos aprisiona o produto químico contra a córnea, aumentando o dano tecidual."
      }
    ]
  },
{
"id": 263,
"pergunta": "Você está socorrendo um adulto com obstrução grave de via aérea por corpo estranho (engasgo). Após várias manobras de Heimlich, a vítima perde a consciência nos seus braços. Qual deve ser sua próxima ação imediata?",
"alternativas": [
{
"id": "A",
"texto": "Tentar realizar a varredura digital às cegas na boca da vítima para localizar o objeto antes de qualquer manobra.",
"correta": false,
"explicacao": "A varredura às cegas é contraindicada pois pode empurrar o objeto ainda mais profundamente na via aérea."
},
{
"id": "B",
"texto": "Posicionar a vítima em solo e iniciar imediatamente os ciclos de 30 compressões torácicas.",
"correta": true,
"explicacao": "No engasgo que evolui para inconsciência, o protocolo determina o início da RCP. As compressões ajudam a expulsar o objeto pela pressão positiva."
},
{
"id": "C",
"texto": "Realizar 5 ventilações de resgate com força máxima para tentar empurrar o objeto para o pulmão direito.",
"correta": false,
"explicacao": "As ventilações só devem ser tentadas após as compressões, e nunca com o objetivo de empurrar o objeto para o pulmão."
},
{
"id": "D",
"texto": "Aplicar cinco golpes firmes nas costas (manobra de desobstrução de lactentes) com a vítima deitada.",
"correta": false,
"explicacao": "Golpes nas costas em adultos inconscientes não fazem parte do protocolo de suporte básico de vida."
}
]
},
{
"id": 264,
"pergunta": "Uma vítima apresenta um corte profundo na coxa com sangramento pulsante e abundante. Você aplica uma compressa limpa e faz pressão direta, mas o sangue atravessa o curativo rapidamente. Como proceder?",
"alternativas": [
{
"id": "A",
"texto": "Remover o curativo encharcado para localizar o ponto exato da artéria e aplicar uma nova compressa seca.",
"correta": false,
"explicacao": "Remover o curativo destrói o coágulo em formação, agravando a hemorragia."
},
{
"id": "B",
"texto": "Lavar a ferida com água corrente para limpar os debris antes de aplicar um curativo compressivo final.",
"correta": false,
"explicacao": "A limpeza não é prioridade em hemorragias exsanguinantes; a perda de volume sanguíneo é o risco imediato."
},
{
"id": "C",
"texto": "Manter o primeiro curativo e aplicar novos panos limpos por cima, exercendo pressão ainda mais forte.",
"correta": true,
"explicacao": "A sobreposição de curativos preserva a coagulação inicial enquanto aumenta a pressão mecânica sobre o vaso rompido."
},
{
"id": "D",
"texto": "Afrouxar a pressão por 30 segundos para permitir que o membro receba oxigênio e depois apertar novamente.",
"correta": false,
"explicacao": "Interromper a pressão direta em uma hemorragia arterial permite que a vítima perca mais sangue e entre em choque rapidamente."
}
]
},
{
"id": 265,
"pergunta": "Ao socorrer uma vítima de queimadura térmica causada por vapor de água quente no braço, você nota a presença de pele avermelhada e várias bolhas íntegras. Qual a classificação e a conduta imediata correta?",
"alternativas": [
{
"id": "A",
"texto": "Queimadura de 1º grau; deve-se aplicar gelo diretamente nas bolhas para reduzir a inflamação.",
"correta": false,
"explicacao": "A presença de bolhas indica 2º grau. Gelo causa vasoconstrição excessiva e pode aprofundar a lesão por frio."
},
{
"id": "B",
"texto": "Queimadura de 3º grau; deve-se romper as bolhas para drenar o fluido e aplicar pomada cicatrizante.",
"correta": false,
"explicacao": "3º grau envolve tecidos profundos e carbonização. Nunca se deve romper bolhas, pois elas protegem contra infecções."
},
{
"id": "C",
"texto": "Queimadura de 2º grau; deve-se resfriar o local com água corrente em temperatura ambiente por cerca de 20 minutos.",
"correta": true,
"explicacao": "O resfriamento prolongado interrompe o processo de 'cozimento' dos tecidos e alivia a dor sem causar novos danos."
},
{
"id": "D",
"texto": "Queimadura química; deve-se neutralizar o calor com vinagre ou pasta de dente para evitar a progressão.",
"correta": false,
"explicacao": "Condimentos ou pastas não possuem propriedades medicinais para queimaduras e aumentam o risco de infecção grave."
}
]
},
{
"id": 266,
"pergunta": "Um colega de trabalho sente-se mal, fica pálido e desmaia (síncope) na sua frente. Ele está caído de costas e você confirma que ele respira normalmente e tem pulso. Qual a melhor estratégia de manejo até a recuperação total?",
"alternativas": [
{
"id": "A",
"texto": "Sentá-lo em uma cadeira e oferecer um copo de água com açúcar para tratar uma possível hipoglicemia.",
"correta": false,
"explicacao": "Nunca se oferece líquidos a vítimas com nível de consciência alterado pelo risco de aspiração pulmonar."
},
{
"id": "B",
"texto": "Mantê-lo deitado de costas e elevar os membros inferiores cerca de 30 cm, se não houver suspeita de trauma.",
"correta": true,
"explicacao": "A elevação das pernas favorece o retorno venoso e a perfusão cerebral, acelerando a recuperação da consciência na síncope simples."
},
{
"id": "C",
"texto": "Dar tapas leves no rosto e utilizar álcool sob o nariz para que o odor forte o desperte imediatamente.",
"correta": false,
"explicacao": "Estímulos agressivos ou substâncias irritantes podem causar reações reflexas perigosas e não tratam a causa do desmaio."
},
{
"id": "D",
"texto": "Iniciar manobras de RCP preventivas, pois todo desmaio é um prenúncio de parada cardíaca iminente.",
"correta": false,
"explicacao": "RCP só deve ser realizada em vítimas que NÃO respiram ou possuem apenas gasp (respiração agônica)."
}
]
},
{
"id": 267,
"pergunta": "Em um Trauma Cranioencefálico (TCE), o socorrista observa as pupilas da vítima. Ao incidir luz, a pupila direita permanece dilatada (midríase), enquanto a esquerda se contrai (miose). Tecnicamente, como se chama esse sinal e o que ele indica?",
"alternativas": [
{
"id": "A",
"texto": "Isocoria; indica que o cérebro está funcionando perfeitamente apesar do impacto.",
"correta": false,
"explicacao": "Isocoria é quando as pupilas são iguais. Pupilas desiguais são um sinal de alerta grave."
},
{
"id": "B",
"texto": "Anisocoria; sugere um aumento da pressão intracraniana ou lesão cerebral focal do lado da pupila dilatada.",
"correta": true,
"explicacao": "A anisocoria é um sinal clínico clássico de compressão de nervos cranianos por edema ou hemorragia dentro do crânio."
},
{
"id": "C",
"texto": "Midríase bilateral; indica que a vítima está em estado de choque hipovolêmico severo.",
"correta": false,
"explicacao": "Midríase bilateral (as duas dilatadas) indica hipóxia cerebral global ou morte encefálica, não sendo o caso descrito."
},
{
"id": "D",
"texto": "Fotofobia traumática; indica apenas que a luz está incomodando a retina após a pancada.",
"correta": false,
"explicacao": "A fotofobia é a sensibilidade à luz, mas não explica a diferença de diâmetro entre as pupilas no trauma."
}
]
},
{
"id": 268,
"pergunta": "Ao ligar para o serviço de emergência (SAMU 192 ou Bombeiros 193), o atendente solicita informações sobre a vítima. Qual a prioridade de informação para garantir que o recurso enviado seja o adequado?",
"alternativas": [
{
"id": "A",
"texto": "Nome completo, CPF da vítima e histórico de doenças na família dos últimos 10 anos.",
"correta": false,
"explicacao": "Dados burocráticos e históricos longos não são vitais para o envio imediato da ambulância."
},
{
"id": "B",
"texto": "Localização exata, número de vítimas, estado de consciência e se elas respiram.",
"correta": true,
"explicacao": "Estas informações permitem ao médico regulador decidir se envia uma Unidade de Suporte Básico (USB) ou Avançado (USA)."
},
{
"id": "C",
"texto": "A descrição detalhada da marca e cor dos veículos envolvidos para facilitar a perícia policial.",
"correta": false,
"explicacao": "A perícia é secundária ao atendimento médico; o foco deve ser o estado clínico das vítimas."
},
{
"id": "D",
"texto": "Apenas o endereço, desligando rapidamente para voltar a ajudar a vítima sem distrações.",
"correta": false,
"explicacao": "Nunca se deve desligar antes do atendente; orientações vitais podem ser passadas por telefone enquanto a equipe se desloca."
}
]
},
  {
    "id": 269,
    "pergunta": "Durante a avaliação primária de uma vítima de queda de nível, você observa que a pele está pálida, fria e com sudorese abundante. Ao pressionar a ponta do dedo da vítima e soltar, a coloração original demora 4 segundos para retornar. Qual a interpretação técnica correta para esse achado em um contexto de suporte básico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Indica um estado de perfusão periférica adequada, sendo um achado comum em situações de estresse agudo pós-trauma.",
        "correta": false,
        "explicacao": "O tempo de enchimento capilar acima de 2 segundos, associado à pele fria e pálida, indica má perfusão, não sendo um estado adequado."
      },
      {
        "id": "B",
        "texto": "Sugere uma possível desidratação severa ou hipotermia leve, sem necessidade de priorização imediata no protocolo XABCDE.",
        "correta": false,
        "explicacao": "Embora possa ocorrer na hipotermia, no trauma esses sinais são marcadores clássicos de choque circulatório, exigindo prioridade máxima."
      },
      {
        "id": "C",
        "texto": "Representa um sinal de má perfusão tecidual, sugerindo que o organismo está direcionando o sangue para órgãos vitais.",
        "correta": true,
        "explicacao": "O enchimento capilar lento (>2s) e a palidez/sudorese são sinais de choque, onde o corpo realiza vasoconstrição periférica para manter o fluxo central."
      },
      {
        "id": "D",
        "texto": "Aponta para uma crise de ansiedade com hiperventilação, o que justifica o redirecionamento do fluxo sanguíneo para os músculos.",
        "correta": false,
        "explicacao": "Na ansiedade, a pele costuma estar corada ou apenas levemente fria; os sinais descritos são clínicos de choque e não meramente psicológicos."
      }
    ]
  },
  {
    "id": 270,
    "pergunta": "Ao realizar compressões torácicas em um adulto em PCR, o socorrista deve permitir o retorno total do tórax após cada compressão. Qual é a justificativa fisiológica fundamental para essa recomendação, segundo as diretrizes da AHA 2020?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Evitar a fadiga precoce do socorrista, garantindo que o peso do corpo não fique sobre a vítima durante a fase de relaxamento.",
        "correta": false,
        "explicacao": "Embora ajude no descanso, o motivo principal é fisiológico e cardíaco, relacionado ao fluxo sanguíneo e não apenas ao cansaço físico."
      },
      {
        "id": "B",
        "texto": "Maximizar o enchimento cardíaco, permitindo que o sangue retorne às câmaras do coração para ser bombeado na compressão seguinte.",
        "correta": true,
        "explicacao": "O retorno total do tórax cria uma pressão negativa intratorácica que facilita o retorno venoso e o enchimento das câmaras cardíacas."
      },
      {
        "id": "C",
        "texto": "Garantir a expansão pulmonar completa, facilitando a troca gasosa passiva mesmo sem o uso de ventilações artificiais no momento.",
        "correta": false,
        "explicacao": "A troca gasosa passiva ocorre, mas o objetivo primordial do retorno é o enchimento sanguíneo das cavidades cardíacas (débito cardíaco)."
      },
      {
        "id": "D",
        "texto": "Prevenir lesões ósseas graves, como fraturas de costelas e esterno, ao reduzir a pressão contínua sobre a estrutura do gradil costal.",
        "correta": false,
        "explicacao": "Fraturas podem ocorrer independentemente do retorno; a recomendação foca na eficácia da hemodinâmica da ressuscitação."
      }
    ]
  },
  {
    "id": 271,
    "pergunta": "Você presencia um acidente doméstico onde uma pessoa sofre um corte profundo no antebraço com vidro. O sangramento é pulsátil e de cor vermelho vivo. Você está sem luvas de procedimento. Qual a conduta correta e prioritária para o controle desta hemorragia?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lavar o ferimento com água e sabão para evitar infecções antes de tentar qualquer manobra de contenção do fluxo sanguíneo.",
        "correta": false,
        "explicacao": "Em hemorragias exsanguinantes, o controle do sangramento (X) precede qualquer cuidado com limpeza ou higiene do ferimento."
      },
      {
        "id": "B",
        "texto": "Solicitar que a própria vítima aplique pressão direta e firme sobre a ferida usando um pano limpo enquanto você aciona o 192.",
        "correta": true,
        "explicacao": "A pressão direta é a primeira linha no trauma. Sem EPI, instruir a vítima a comprimir o próprio ferimento protege o socorrista e inicia o controle."
      },
      {
        "id": "C",
        "texto": "Elevar o membro acima do nível do coração e realizar compressão em pontos arteriais distantes da lesão, como na região axilar.",
        "correta": false,
        "explicacao": "A elevação e pontos de pressão não são mais recomendados como prioridade; a pressão direta sobre o foco do sangramento é mais eficaz."
      },
      {
        "id": "D",
        "texto": "Aplicar um curativo frouxo para permitir que o sangue coagule naturalmente, monitorando o nível de consciência da vítima continuamente.",
        "correta": false,
        "explicacao": "Hemorragias pulsáteis não cessam com curativos frouxos; a pressão deve ser forte e contínua para interromper o fluxo arterial."
      }
    ]
  },
  {
    "id": 272,
    "pergunta": "No atendimento a uma criança de 8 anos que se encontra em parada cardiorrespiratória (PCR), qual deve ser a profundidade técnica das compressões torácicas para garantir a eficácia do suporte básico de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aproximadamente 4 cm, o que corresponde a um terço do diâmetro ântero-posterior do tórax, independentemente do porte físico.",
        "correta": false,
        "explicacao": "4 cm é a profundidade recomendada para lactentes (bebês com menos de 1 ano), não para crianças de 8 anos."
      },
      {
        "id": "B",
        "texto": "Pelo menos 5 cm, não devendo ultrapassar 6 cm, seguindo o mesmo padrão rigoroso estabelecido para o atendimento de adultos.",
        "correta": false,
        "explicacao": "5 a 6 cm é a meta para adultos. Para crianças, a recomendação é 'cerca de 5 cm' ou um terço do diâmetro torácico."
      },
      {
        "id": "C",
        "texto": "Cerca de 5 cm (ou um terço do diâmetro do tórax), utilizando uma ou duas mãos dependendo da resistência torácica da criança.",
        "correta": true,
        "explicacao": "Segundo a AHA, em crianças a profundidade é de cerca de 5 cm. A técnica pode ser adaptada com uma ou duas mãos para atingir essa meta."
      },
      {
        "id": "D",
        "texto": "Exatamente 2 cm, para evitar traumas em órgãos internos e minimizar o risco de pneumotórax traumático durante as manobras.",
        "correta": false,
        "explicacao": "2 cm é insuficiente para gerar fluxo sanguíneo em uma criança de 8 anos, tornando a ressuscitação ineficaz."
      }
    ]
  },
  {
    "id": 273,
    "pergunta": "Você é o primeiro a chegar em uma cena de atropelamento. A cena é segura, mas há muitos curiosos ao redor. Um deles, visivelmente agitado, tenta levantar a vítima para 'ver se ela consegue andar'. Qual deve ser sua postura como socorrista leigo treinado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Permitir que o curioso ajude, desde que ele segure a cabeça da vítima enquanto ela tenta se levantar para testar a mobilidade.",
        "correta": false,
        "explicacao": "Movimentar vítimas de trauma sem necessidade extrema pode agravar lesões na coluna vertebral; o leigo deve impedir essa ação."
      },
      {
        "id": "B",
        "texto": "Aguardar a chegada da polícia para intervir, pois o socorrista leigo não possui autoridade legal para dar ordens a terceiros em via pública.",
        "correta": false,
        "explicacao": "Embora não tenha autoridade policial, o socorrista deve agir para proteger a vítima de danos adicionais causados por leigos despreparados."
      },
      {
        "id": "C",
        "texto": "Assumir o controle da cena, solicitando firmemente que ninguém mova a vítima, explicando o risco de lesão na coluna enquanto aguarda o 193.",
        "correta": true,
        "explicacao": "Gerenciar curiosos e impedir movimentos desnecessários na vítima é parte crucial da segurança e do atendimento no trauma (estabilização)."
      },
      {
        "id": "D",
        "texto": "Remover a vítima imediatamente para dentro de um estabelecimento comercial próximo para protegê-la do assédio dos curiosos presentes.",
        "correta": false,
        "explicacao": "A remoção só é indicada em caso de risco iminente na cena (incêndio, explosão). O isolamento deve ser feito ao redor da vítima, não movendo-a."
      }
    ]
  },
  {
    "id": 274,
    "pergunta": "Um adulto consciente apresenta sinais de obstrução grave de vias aéreas (engasgo), levando as mãos ao pescoço e sendo incapaz de tossir ou falar. Ao iniciar a manobra de Heimlich, onde exatamente o socorrista deve posicionar as mãos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "No centro do esterno, na mesma posição utilizada para compressões cardíacas, realizando compressões rápidas e profundas.",
        "correta": false,
        "explicacao": "Compressões torácicas são indicadas para engasgo em gestantes, obesos mórbidos ou quando a vítima fica inconsciente."
      },
      {
        "id": "B",
        "texto": "Diretamente sobre o apêndice xifoide, para aproveitar a rigidez óssea e aumentar a pressão interna necessária para expulsar o objeto.",
        "correta": false,
        "explicacao": "Comprimir o apêndice xifoide pode causar fraturas e lesões internas graves; a compressão deve ser na região mole do abdômen."
      },
      {
        "id": "C",
        "texto": "Ligeiramente acima do umbigo e bem abaixo do apêndice xifoide, realizando pressões para dentro e para cima (movimento em 'J').",
        "correta": true,
        "explicacao": "Esta é a posição correta para a Manobra de Heimlich em adultos e crianças, visando elevar o diafragma e forçar a saída do ar."
      },
      {
        "id": "D",
        "texto": "Na região infraumbilical, utilizando a base da mão para empurrar o conteúdo abdominal para baixo, facilitando a passagem do ar.",
        "correta": false,
        "explicacao": "A pressão deve ser supraumbilical e direcionada para cima para simular a tosse; empurrar para baixo é ineficaz e tecnicamente incorreto."
      }
    ]
  },
  {
    "id": 275,
    "pergunta": "Uma pessoa sofre uma queimadura térmica no braço ao derrubar água fervente. A pele apresenta vermelhidão intensa e algumas bolhas já formadas. Dentro das atribuições de primeiros socorros, qual a conduta imediata mais adequada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar gelo diretamente sobre as bolhas para reduzir a inflamação e anestesiar a dor de forma rápida e eficiente no local.",
        "correta": false,
        "explicacao": "O gelo causa vasoconstrição extrema e pode agravar a lesão tecidual por frio; o resfriamento deve ser com água corrente."
      },
      {
        "id": "B",
        "texto": "Resfriar a área com água corrente em temperatura ambiente por pelo menos 10 a 20 minutos para interromper o processo de queima.",
        "correta": true,
        "explicacao": "O resfriamento prolongado com água corrente é a medida padrão para reduzir a profundidade da lesão e aliviar a dor em queimaduras térmicas."
      },
      {
        "id": "C",
        "texto": "Romper as bolhas cuidadosamente com uma agulha esterilizada e cobrir a área com pomada antibiótica antes de encaminhar ao hospital.",
        "correta": false,
        "explicacao": "Bolhas (flictenas) não devem ser rompidas no APH leigo, pois servem como barreira natural contra infecções. Pomadas não são indicadas no socorro inicial."
      },
      {
        "id": "D",
        "texto": "Envolver o membro em filme plástico bem apertado para evitar o contato com o ar e prevenir a perda de calor corporal da vítima.",
        "correta": false,
        "explicacao": "O curativo deve ser frouxo e não deve aderir à ferida; o foco inicial é o resfriamento e não apenas o isolamento térmico apertado."
      }
    ]
  },
  {
    "id": 276,
    "pergunta": "As diretrizes atuais de SBV preconizam a sequência C-A-B em vez da antiga A-B-C. Qual a principal fundamentação técnica para priorizar as compressões torácicas no início do atendimento da PCR em adultos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Garantir que a via aérea seja limpa passivamente pela pressão gerada no tórax, eliminando a necessidade de manobras de abertura.",
        "correta": false,
        "explicacao": "As compressões não limpam a via aérea; a abertura manual (A) ainda é necessária se houver ventilação, mas vem após as compressões iniciais."
      },
      {
        "id": "B",
        "texto": "Reduzir o tempo até a primeira compressão, mantendo a pressão de perfusão cerebral e coronariana com o oxigênio ainda presente no sangue.",
        "correta": true,
        "explicacao": "No momento da parada, o sangue ainda contém oxigênio. A prioridade é circular esse sangue imediatamente para o cérebro e coração."
      },
      {
        "id": "C",
        "texto": "Evitar o risco de contaminação do socorrista por doenças infectocontagiosas durante a realização das ventilações de resgate precoces.",
        "correta": false,
        "explicacao": "A proteção do socorrista é feita com EPI/barreiras; a mudança para C-A-B visa a sobrevivência da vítima pela manutenção do fluxo sanguíneo."
      },
      {
        "id": "D",
        "texto": "Simplificar o treinamento para leigos, visto que a maioria das paradas cardíacas em adultos é causada por obstrução das vias aéreas.",
        "correta": false,
        "explicacao": "A maioria das PCRs em adultos tem origem cardíaca, não respiratória; por isso as compressões são iniciadas primeiro."
      }
    ]
  },
  {
    "id": 277,
    "pergunta": "Após uma queda de bicicleta, um adolescente apresenta dor intensa e uma deformidade visível na perna direita (tíbia). Não há sangramento externo. Como o socorrista leigo deve proceder em relação à imobilização?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tentar realinhar o osso com uma tração suave para restaurar a circulação sanguínea no membro antes de colocar qualquer tala.",
        "correta": false,
        "explicacao": "O realinhamento de fraturas é um procedimento médico/técnico avançado. O leigo nunca deve tentar reduzir uma fratura ou deformidade."
      },
      {
        "id": "B",
        "texto": "Manter a perna na posição em que foi encontrada, utilizando materiais rígidos improvisados que imobilizem as articulações acima e abaixo da lesão.",
        "correta": true,
        "explicacao": "A regra de ouro da imobilização no trauma é imobilizar na posição encontrada, abrangendo a articulação superior e inferior ao foco da lesão."
      },
      {
        "id": "C",
        "texto": "Solicitar que a vítima tente dobrar o joelho para descartar uma possível luxação, procedendo com a imobilização apenas se ela não conseguir.",
        "correta": false,
        "explicacao": "Movimentos forçados em suspeita de fratura podem causar danos a nervos e vasos sanguíneos; a imobilização deve ser feita sem testes de carga."
      },
      {
        "id": "D",
        "texto": "Aplicar uma bandagem compressiva apertada sobre a deformidade para conter um possível sangramento interno e reduzir o edema local.",
        "correta": false,
        "explicacao": "Bandagens apertadas em fraturas podem causar síndrome compartimental ou comprometer o fluxo distal; a imobilização deve ser firme, mas não compressiva."
      }
    ]
  },
  {
    "id": 278,
    "pergunta": "Você encontra uma pessoa caída em um shopping. Ela está inconsciente. Ao observar a respiração, você nota que ela emite ruídos sonoros ocasionais, como suspiros curtos e irregulares (gasping). Qual a interpretação correta desse sinal?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A vítima está respirando, embora com dificuldade; deve-se apenas monitorar e colocá-la em posição lateral de segurança.",
        "correta": false,
        "explicacao": "O gasping não é considerado respiração eficaz; é um sinal reflexo que ocorre frequentemente nos primeiros minutos de uma parada cardíaca."
      },
      {
        "id": "B",
        "texto": "Trata-se de um sinal de recuperação espontânea da consciência, indicando que o coração voltou a bater de forma rítmica e funcional.",
        "correta": false,
        "explicacao": "Pelo contrário, o gasping costuma preceder a parada total da atividade respiratória e cardíaca se não houver intervenção imediata."
      },
      {
        "id": "C",
        "texto": "O sinal deve ser interpretado como parada cardiorrespiratória (PCR), devendo o socorrista iniciar imediatamente as compressões torácicas.",
        "correta": true,
        "explicacao": "Diretrizes AHA: Se a vítima estiver inconsciente e não respirar ou apresentar apenas 'gasping', o leigo deve iniciar a RCP imediatamente."
      },
      {
        "id": "D",
        "texto": "Indica uma obstrução de vias aéreas por corpo estranho, sendo necessária a realização imediata da manobra de Heimlich com a vítima deitada.",
        "correta": false,
        "explicacao": "O gasping é um padrão respiratório neurológico de PCR; em engasgos graves com inconsciência, o protocolo correto é iniciar a RCP, não o Heimlich."
      }
    ]
  },
  {
    "id": 279,
    "pergunta": "A Cadeia de Sobrevivência da AHA (2020) para Parada Cardiorrespiratória Extra-hospitalar (PCREH) define as etapas críticas para o sucesso do atendimento. Qual é o primeiro elo desta cadeia que deve ser acionado pelo socorrista leigo ao identificar uma vítima adulta que não responde e não respira?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Início imediato das compressões torácicas de alta qualidade para manter a perfusão cerebral.",
        "correta": false,
        "explicacao": "As compressões são o terceiro elo da cadeia. O primeiro elo foca no reconhecimento e no acionamento do sistema de emergência."
      },
      {
        "id": "B",
        "texto": "Reconhecimento da emergência e acionamento do serviço médico de emergência (192 ou 193).",
        "correta": true,
        "explicacao": "O primeiro elo é o reconhecimento da PCR e a ativação rápida do serviço de emergência para trazer suporte avançado ao local."
      },
      {
        "id": "C",
        "texto": "Realização de ventilações de resgate com barreira para oxigenar o sangue da vítima.",
        "correta": false,
        "explicacao": "Ventilações não são o primeiro elo e, em protocolos leigos modernos, a ênfase inicial é no acionamento e nas compressões (Hands-Only)."
      },
      {
        "id": "D",
        "texto": "Transporte imediato da vítima em veículo particular para a unidade de saúde mais próxima.",
        "correta": false,
        "explicacao": "O transporte por leigos em PCREH é contraindicado; o correto é aguardar o suporte especializado enquanto se realiza a RCP."
      }
    ]
  },
  {
    "id": 280,
    "pergunta": "Ao atender uma vítima inconsciente que não apresenta suspeita de trauma cervical, o socorrista deve realizar a abertura das vias aéreas para verificar a respiração. Qual é a técnica padrão recomendada para o leigo nesta situação?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manobra de Tração da Mandíbula (Jaw-Thrust), mantendo a cabeça em posição neutra e fixa.",
        "correta": false,
        "explicacao": "A tração da mandíbula é recomendada para profissionais de saúde em casos de suspeita de trauma; o leigo deve usar a manobra padrão."
      },
      {
        "id": "B",
        "texto": "Flexão do pescoço para frente, encostando o queixo da vítima no peito para liberar a garganta.",
        "correta": false,
        "explicacao": "Flexionar o pescoço (queixo no peito) obstrui ainda mais a via aérea, dificultando a passagem do ar."
      },
      {
        "id": "C",
        "texto": "Manobra de Inclinação da Cabeça e Elevação do Queixo (Head Tilt-Chin Lift).",
        "correta": true,
        "explicacao": "Esta é a técnica padrão para leigos: uma mão na testa inclina a cabeça e os dedos da outra mão elevam o queixo, afastando a língua da glote."
      },
      {
        "id": "D",
        "texto": "Hiperextensão forçada do pescoço associada à abertura máxima da boca com os dedos polegares.",
        "correta": false,
        "explicacao": "A hiperextensão forçada é desnecessária e pode causar lesões; o movimento deve ser firme, porém suave e anatômico."
      }
    ]
  },
  {
    "id": 281,
    "pergunta": "Uma criança de 6 anos está lanchando quando subitamente para de falar, leva as mãos ao pescoço e apresenta uma tosse muito fraca e silenciosa, com o rosto começando a ficar azulado (cianose). Qual a conduta correta conforme o protocolo de OVACE?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Incentivar a criança a tossir com mais força e oferecer pequenos goles de água para empurrar o objeto.",
        "correta": false,
        "explicacao": "Tosse silenciosa e cianose indicam obstrução grave. Oferecer líquidos ou apenas incentivar a tosse é ineficaz e perigoso neste estágio."
      },
      {
        "id": "B",
        "texto": "Realizar compressões abdominais (Manobra de Heimlich) imediatamente até que o objeto seja expelido ou a vítima desmaie.",
        "correta": true,
        "explicacao": "Em crianças acima de 1 ano com sinais de obstrução grave (tosse ineficaz, incapacidade de falar), a manobra de Heimlich é a conduta prioritária."
      },
      {
        "id": "C",
        "texto": "Virar a criança de cabeça para baixo e desferir 5 golpes firmes entre as escápulas (costas).",
        "correta": false,
        "explicacao": "Golpes nas costas como manobra isolada são indicados para lactentes (bebês < 1 ano). Em crianças maiores, usa-se a Manobra de Heimlich."
      },
      {
        "id": "D",
        "texto": "Introduzir o dedo indicador na boca da criança para tentar localizar e retirar o objeto por varredura às cegas.",
        "correta": false,
        "explicacao": "Varredura às cegas é proibida, pois pode empurrar o objeto mais profundamente na via aérea."
      }
    ]
  },
  {
    "id": 282,
    "pergunta": "Segundo as atualizações da AHA de 2020, o que é recomendado ao socorrista leigo no momento de verificar se uma vítima adulta inconsciente está em Parada Cardiorrespiratória (PCR)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Verificar o pulso carotídeo por no mínimo 10 segundos antes de iniciar qualquer manobra.",
        "correta": false,
        "explicacao": "Leigos têm dificuldade em localizar o pulso. A recomendação é não checar o pulso e basear a decisão na consciência e respiração."
      },
      {
        "id": "B",
        "texto": "Não verificar o pulso; avaliar apenas se a vítima responde e se ela respira normalmente (ou se apenas apresenta gasping).",
        "correta": true,
        "explicacao": "Para leigos, a verificação de pulso é imprecisa e causa atrasos. Se a vítima não responde e não respira (ou apenas 'gaspeia'), a RCP deve começar."
      },
      {
        "id": "C",
        "texto": "Utilizar a técnica do 'Ver, Ouvir e Sentir' por 15 segundos para garantir que não há fluxo de ar.",
        "correta": false,
        "explicacao": "A técnica de 'ouvir e sentir' foi removida para simplificar o algoritmo e focar na observação visual da expansão do tórax."
      },
      {
        "id": "D",
        "texto": "Checar a reação das pupilas à luz; se estiverem dilatadas (midríase), a PCR está confirmada.",
        "correta": false,
        "explicacao": "Avaliação pupilar não faz parte do protocolo de suporte básico para leigos identificarem uma parada cardíaca."
      }
    ]
  },
  {
    "id": 283,
    "pergunta": "Uma pessoa derrama acidentalmente um produto de limpeza industrial corrosivo na perna. A pele apresenta dor intensa e começa a mudar de cor. Como socorrista leigo, qual deve ser a sua ação imediata após garantir a sua própria segurança?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aplicar vinagre ou limão sobre a área para neutralizar quimicamente o produto corrosivo.",
        "correta": false,
        "explicacao": "Neutralização química pode gerar calor (reação exotérmica) e agravar a queimadura. Use apenas água corrente."
      },
      {
        "id": "B",
        "texto": "Lavar a região com água corrente em abundância por pelo menos 20 minutos para remover o resíduo químico.",
        "correta": true,
        "explicacao": "A irrigação prolongada com água limpa é a conduta correta para diluir e remover o agente químico da pele."
      },
      {
        "id": "C",
        "texto": "Cobrir a lesão com um pano seco e apertado para impedir que o produto se espalhe para outras partes do corpo.",
        "correta": false,
        "explicacao": "Cobrir sem lavar mantém o produto em contato com a pele, aprofundando a lesão química."
      },
      {
        "id": "D",
        "texto": "Passar gel de lidocaína ou creme hidratante para acalmar a dor antes de realizar qualquer limpeza.",
        "correta": false,
        "explicacao": "Cremes e géis podem reter o produto químico na pele e dificultar a remoção hospitalar; a prioridade é a lavagem."
      }
    ]
  },
  {
    "id": 284,
    "pergunta": "Durante a execução da Ressuscitação Cardiopulmonar (RCP) em um adulto, a frequência das compressões torácicas é um fator determinante para a sobrevivência. Qual é a frequência recomendada pelas diretrizes atuais?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Exatamente 80 compressões por minuto, para garantir que o coração tenha tempo de relaxar totalmente.",
        "correta": false,
        "explicacao": "80 bpm é uma frequência baixa demais para manter a pressão de perfusão necessária durante a parada."
      },
      {
        "id": "B",
        "texto": "Entre 100 e 120 compressões por minuto, mantendo um ritmo constante e sem interrupções desnecessárias.",
        "correta": true,
        "explicacao": "Esta faixa (100-120 bpm) é a ideal para otimizar o débito cardíaco artificial, conforme a AHA 2020."
      },
      {
        "id": "C",
        "texto": "O mais rápido possível, ultrapassando 150 compressões por minuto para compensar a falta de batimentos naturais.",
        "correta": false,
        "explicacao": "Acima de 120 bpm, as compressões tornam-se superficiais e o coração não tem tempo de se encher de sangue entre elas."
      },
      {
        "id": "D",
        "texto": "Exatamente 60 compressões por minuto, seguindo o ritmo normal de um coração em repouso.",
        "correta": false,
        "explicacao": "60 bpm é insuficiente para gerar fluxo sanguíneo efetivo durante as manobras de ressuscitação."
      }
    ]
  },
  {
    "id": 285,
    "pergunta": "Uma pessoa sente-se mal em um ambiente fechado, fica pálida e desmaia (síncope) na sua frente. Ela está respirando e você não suspeita de trauma. Qual a posição recomendada para auxiliar na recuperação da consciência?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sentar a vítima em uma cadeira e baixar a cabeça dela entre os joelhos até que ela desperte.",
        "correta": false,
        "explicacao": "Sentar a vítima pode dificultar o retorno venoso ao cérebro. A posição deitada é mais segura para evitar quedas e melhorar o fluxo."
      },
      {
        "id": "B",
        "texto": "Colocar a vítima deitada de costas e elevar as pernas acima do nível do coração (cerca de 30 cm).",
        "correta": true,
        "explicacao": "A elevação das pernas (se não houver trauma) ajuda o sangue a retornar ao cérebro, acelerando a recuperação em casos de síncope simples."
      },
      {
        "id": "C",
        "texto": "Mantê-la em pé, amparada por dois socorristas, e caminhar com ela para 'estimular a circulação'.",
        "correta": false,
        "explicacao": "Forçar uma vítima de desmaio a ficar em pé pode causar um novo desmaio e reduzir drasticamente a oxigenação cerebral."
      },
      {
        "id": "D",
        "texto": "Deitá-la de bruços (posição ventral) para evitar que ela sufoque caso venha a vomitar.",
        "correta": false,
        "explicacao": "A posição ventral dificulta a respiração. Se houver risco de vômito e a vítima estiver inconsciente, usa-se a posição lateral de segurança."
      }
    ]
  },
  {
    "id": 286,
    "pergunta": "Você presencia um acidente onde há sangue no chão. Você pretende ajudar, mas não possui luvas de procedimento no momento. Segundo os princípios de segurança da cena e proteção biológica, como você deve agir?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Evitar o contato direto com o sangue, utilizando barreiras improvisadas como sacos plásticos limpos ou panos grossos.",
        "correta": true,
        "explicacao": "Na ausência de EPI padrão (luvas), o socorrista deve usar barreiras físicas disponíveis para minimizar o risco de contaminação por patógenos."
      },
      {
        "id": "B",
        "texto": "Ajudar normalmente, pois o risco de contrair doenças por contato com sangue na pele íntegra é inexistente no APH.",
        "correta": false,
        "explicacao": "Existe risco real de contaminação através de microlesões na pele ou mucosas; a proteção nunca deve ser negligenciada."
      },
      {
        "id": "C",
        "texto": "Lavar as mãos com álcool em gel antes de tocar na vítima, o que garante esterilização total contra vírus como HIV e Hepatite.",
        "correta": false,
        "explicacao": "O álcool em gel não substitui a barreira física das luvas e não protege durante o contato direto com fluidos biológicos."
      },
      {
        "id": "D",
        "texto": "Aguardar o serviço de emergência sem fazer nada, pois o socorrista leigo é proibido por lei de ajudar se não tiver EPI completo.",
        "correta": false,
        "explicacao": "O leigo não é proibido de ajudar; ele deve ajudar de forma segura, adaptando-se à cena e protegendo-se com o que estiver disponível."
      }
    ]
  },
  {
    "id": 287,
    "pergunta": "Um trabalhador cai de uma escada e reclama de muita dor no braço esquerdo. Você observa um inchaço acentuado e o braço parece 'torto' (angulado), mas a pele não foi rompida. Qual o procedimento correto de primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Massagear o local com pomada anti-inflamatória para reduzir o inchaço antes da chegada do socorro.",
        "correta": false,
        "explicacao": "Massagens em locais de suspeita de fratura podem causar dor intensa e agravar lesões em tecidos moles e vasos sanguíneos."
      },
      {
        "id": "B",
        "texto": "Puxar o braço com força para alinhar o osso e facilitar o transporte da vítima até o hospital.",
        "correta": false,
        "explicacao": "Manobras de redução (alinhamento) são estritamente hospitalares ou médicas; o leigo deve apenas imobilizar."
      },
      {
        "id": "C",
        "texto": "Imobilizar o membro na posição em que foi encontrado, usando talas improvisadas (papelão, revistas) e uma tipoia.",
        "correta": true,
        "explicacao": "A imobilização correta no suporte básico visa impedir o movimento do osso fraturado, reduzindo a dor e o risco de lesões secundárias."
      },
      {
        "id": "D",
        "texto": "Pedir para a vítima realizar movimentos circulares com o punho para verificar se houve lesão nervosa grave.",
        "correta": false,
        "explicacao": "Forçar movimentos em um membro com suspeita de fratura é contraindicado, pois aumenta o trauma local."
      }
    ]
  },
  {
    "id": 288,
    "pergunta": "Você depara-se com um ciclista que caiu de um barranco. A vítima está consciente, mas confusa, com respiração rápida, pele muito pálida, fria e suada. Não há sangramento externo visível. Qual é o significado clínico destes sinais e a conduta prioritária do socorrista leigo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Indicam estado de hipoglicemia severa. A conduta é oferecer bebida açucarada imediatamente e manter a vítima sentada.",
        "correta": false,
        "explicacao": "Vítimas de trauma com confusão mental não devem receber líquidos via oral devido ao risco de broncoaspiração e necessidade de cirurgia."
      },
      {
        "id": "B",
        "texto": "Indicam choque hipovolêmico por provável hemorragia interna. A conduta é deitá-la, aquecê-la e acionar o 192/193.",
        "correta": true,
        "explicacao": "Pele pálida, fria, sudorese e confusão mental após trauma sugerem choque. O aquecimento previne a hipotermia, essencial na tríade letal do trauma."
      },
      {
        "id": "C",
        "texto": "Sugerem traumatismo craniano leve. A conduta é elevar as pernas em 45 graus para melhorar a oxigenação cerebral e aguardar.",
        "correta": false,
        "explicacao": "Elevar as pernas de uma vítima de trauma sem descartar fraturas de pelve, fêmur ou coluna pode agravar lesões severamente."
      },
      {
        "id": "D",
        "texto": "Trata-se de uma crise de ansiedade pós-traumática. A conduta é acalmar a vítima, ajudá-la a levantar e incentivar a caminhada.",
        "correta": false,
        "explicacao": "Ignorar sinais clássicos de choque compensado e movimentar uma vítima de trauma contuso pode levar ao colapso circulatório rápido."
      }
    ]
  },
  {
    "id": 289,
    "pergunta": "Um marceneiro sofre um corte profundo no antebraço com uma serra. O sangue flui de forma contínua e abundante, mas sem esguichos pulsáteis. Você aplica compressão direta com um pano limpo, porém, após alguns minutos, o pano fica completamente encharcado de sangue. Qual é o procedimento técnico correto?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remover o pano encharcado para avaliar a ferida, lavar com água limpa e aplicar um novo curativo com compressão máxima.",
        "correta": false,
        "explicacao": "Remover o primeiro curativo destrói os coágulos que estão começando a se formar, reiniciando e agravando a hemorragia."
      },
      {
        "id": "B",
        "texto": "Manter o pano original, adicionar novos panos limpos por cima do primeiro e aplicar ainda mais pressão direta no local.",
        "correta": true,
        "explicacao": "A adição de novos curativos sobre os antigos preserva a cascata de coagulação inicial, enquanto o aumento da pressão estanca o fluxo."
      },
      {
        "id": "C",
        "texto": "Aplicar um pó hemostático ou café em pó sobre o pano original para acelerar a coagulação e aguardar o socorro especializado.",
        "correta": false,
        "explicacao": "O uso de substâncias caseiras ou pós não médicos em feridas profundas causa contaminação grave e dificulta a limpeza no hospital."
      },
      {
        "id": "D",
        "texto": "Realizar a elevação do membro acima do nível do coração e massagear as bordas da ferida para fechar os vasos rompidos.",
        "correta": false,
        "explicacao": "A elevação tem eficácia mínima e não substitui a compressão direta. Massagear a ferida causará mais dor e destruição tecidual."
      }
    ]
  },
  {
    "id": 290,
    "pergunta": "Um trabalhador cai de um andaime de 3 metros e bate a cabeça. Ele está inconsciente de barriga para cima, e você ouve um som de ronco forte a cada tentativa de respiração dele. Ao acionar o 193, o atendente pede que você libere as vias aéreas. Qual é a técnica recomendada para este cenário?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Inclinação da cabeça para trás e elevação do queixo (Head tilt-chin lift), pois a oxigenação imediata supera qualquer risco.",
        "correta": false,
        "explicacao": "Em vítimas de trauma, a hiperextensão do pescoço pode agravar uma lesão na coluna cervical, causando danos neurológicos permanentes."
      },
      {
        "id": "B",
        "texto": "Rolamento em bloco para a posição lateral de segurança, para que a língua caia para o lado e o ronco cesse imediatamente.",
        "correta": false,
        "explicacao": "A posição de recuperação sem imobilização prévia em vítima de queda de altura compromete a coluna. O rolamento requer equipe treinada."
      },
      {
        "id": "C",
        "texto": "Tração anterior da mandíbula (Jaw thrust), puxando os ângulos da mandíbula para cima sem movimentar a coluna cervical.",
        "correta": true,
        "explicacao": "A manobra de tração da mandíbula (Jaw thrust) afasta a língua da parede posterior da faringe, liberando a via aérea sem estender o pescoço."
      },
      {
        "id": "D",
        "texto": "Introdução dos dedos em formato de pinça na boca para tracionar a língua para fora, segurando-a com um pano limpo.",
        "correta": false,
        "explicacao": "A varredura às cegas ou tracionamento manual da língua é ineficaz, expõe o socorrista a mordeduras e pode empurrar corpos estranhos."
      }
    ]
  },
  {
    "id": 291,
    "pergunta": "Em um laboratório escolar, um frasco com um produto químico em formato de pó seco cai e espalha-se sobre o braço de um aluno. O aluno queixa-se de queimação intensa e a pele começa a ficar vermelha. Qual deve ser a primeira ação do professor ao prestar os primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lavar o braço imediatamente com água corrente abundante por 20 minutos para diluir o produto.",
        "correta": false,
        "explicacao": "Alguns produtos químicos em pó (como cal virgem) reagem violentamente em contato com a água, causando queimaduras térmicas graves."
      },
      {
        "id": "B",
        "texto": "Aplicar uma pomada hidratante neutra sobre o pó para isolar a pele do produto químico corrosivo.",
        "correta": false,
        "explicacao": "Pomadas e cremes retêm o calor e o agente químico na pele, agravando a lesão e dificultando a limpeza hospitalar."
      },
      {
        "id": "C",
        "texto": "Escovar ou varrer o pó seco da pele usando luvas ou um pano seco, e somente depois lavar com água abundante.",
        "correta": true,
        "explicacao": "Deve-se remover a maior quantidade possível do pó químico a seco para evitar reações exotérmicas antes da irrigação copiosa com água."
      },
      {
        "id": "D",
        "texto": "Neutralizar a reação química aplicando vinagre (se o pó for básico) ou bicarbonato (se o pó for ácido).",
        "correta": false,
        "explicacao": "Tentar neutralizar agentes químicos na pele gera reações exotérmicas (liberação de calor) que agravam severamente a queimadura."
      }
    ]
  },
  {
    "id": 292,
    "pergunta": "Durante um jogo de futebol de várzea, um jogador sofre um chute forte na canela. Ele apresenta dor extrema, incapacidade de apoiar o pé e uma deformidade visível (angulação) no meio da perna, mas a pele está intacta. O resgate do SAMU (192) vai demorar 40 minutos. Qual a conduta correta para imobilização?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Alinhar a perna tracionando o pé com firmeza até a deformidade desaparecer, e então aplicar uma tala reta.",
        "correta": false,
        "explicacao": "Leigos nunca devem tentar realinhar fraturas. A tração pode rasgar artérias, veias e nervos que estejam próximos aos fragmentos ósseos."
      },
      {
        "id": "B",
        "texto": "Imobilizar a perna na exata posição em que foi encontrada, englobando a articulação do joelho e do tornozelo.",
        "correta": true,
        "explicacao": "A imobilização correta de uma fratura de osso longo exige fixar a articulação acima e abaixo da lesão, na posição original, para evitar danos."
      },
      {
        "id": "C",
        "texto": "Amarrar duas talas curtas cobrindo apenas o local exato da fratura, deixando o joelho e o tornozelo livres para movimentação.",
        "correta": false,
        "explicacao": "Se as articulações adjacentes não forem imobilizadas, o movimento delas causará o atrito dos cotos ósseos no local da fratura."
      },
      {
        "id": "D",
        "texto": "Fazer uma massagem leve ao redor da deformidade para reduzir o inchaço antes de enfaixar com atadura elástica apertada.",
        "correta": false,
        "explicacao": "Massagens ou ataduras elásticas apertadas em fraturas aumentam a dor, pioram o trauma tecidual e podem comprometer a perfusão (síndrome compartimental)."
      }
    ]
  },
  {
    "id": 293,
    "pergunta": "Você encontra um colega de trabalho, sabidamente diabético, suando frio, pálido, com tremores nas mãos e fala confusa. Ele consegue sentar e engolir, mas parece desorientado. Qual é a intervenção de primeiros socorros mais segura e eficaz para o leigo realizar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ajudá-lo a administrar uma dose de insulina da caneta dele, pois a confusão indica excesso de açúcar no sangue.",
        "correta": false,
        "explicacao": "Sintomas agudos com sudorese e tremor sugerem hipoglicemia. Administrar insulina agravaria o quadro rapidamente, podendo levar ao coma."
      },
      {
        "id": "B",
        "texto": "Oferecer uma bala dura ou chiclete para que ele chupe lentamente, garantindo uma absorção segura de glicose.",
        "correta": false,
        "explicacao": "Oferecer alimentos sólidos ou duros a uma pessoa confusa apresenta um altíssimo risco de engasgo e obstrução de vias aéreas."
      },
      {
        "id": "C",
        "texto": "Dar a ele um copo de suco com açúcar ou refrigerante não dietético, já que ele ainda consegue engolir sob comando.",
        "correta": true,
        "explicacao": "A hipoglicemia é uma emergência rápida. Líquidos açucarados são absorvidos rapidamente e seguros se a vítima mantém reflexo de deglutição."
      },
      {
        "id": "D",
        "texto": "Deitar a vítima imediatamente e realizar compressões torácicas para manter o açúcar circulando para o cérebro.",
        "correta": false,
        "explicacao": "A vítima está consciente e respirando; a RCP é indicada exclusivamente para vítimas em Parada Cardiorrespiratória."
      }
    ]
  },
  {
    "id": 294,
    "pergunta": "Um trabalhador da construção civil é atingido por um prego disparado por uma pistola de ar. O prego encontra-se cravado no olho direito da vítima. Ele está consciente e com dor intensa. Como o socorrista deve proceder até a chegada do 192?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Retirar o prego puxando-o num ângulo reto, lavar o olho com soro fisiológico e cobrir com uma gaze estéril.",
        "correta": false,
        "explicacao": "Jamais remova objetos empalados, especialmente nos olhos. A remoção pode causar a evisceração do globo ocular e perda permanente da visão."
      },
      {
        "id": "B",
        "texto": "Estabilizar o prego com um curativo volumoso (como um copo de plástico cortado) e ocluir (tampar) ambos os olhos.",
        "correta": true,
        "explicacao": "A oclusão de ambos os olhos evita o movimento conjugado (quando um olho se move, o outro acompanha), prevenindo mais danos internos no olho afetado."
      },
      {
        "id": "C",
        "texto": "Tampar apenas o olho direito com uma atadura apertada por cima do prego, deixando o olho esquerdo livre para a vítima se orientar.",
        "correta": false,
        "explicacao": "Deixar o olho saudável destampado fará com que a vítima olhe ao redor, movimentando também o olho ferido e agravando a lesão."
      },
      {
        "id": "D",
        "texto": "Pingar colírio anestésico no olho afetado para alívio da dor e orientar a vítima a piscar repetidamente para expelir sujeiras.",
        "correta": false,
        "explicacao": "O leigo não deve instilar medicamentos. Piscar repetidamente aumentará o atrito com o objeto cravado, rasgando as estruturas oculares."
      }
    ]
  },
  {
    "id": 295,
    "pergunta": "Dois socorristas leigos treinados estão realizando Ressuscitação Cardiopulmonar (RCP) em um adulto. Para garantir a eficácia hemodinâmica e minimizar a fadiga, qual é a conduta técnica correta em relação ao revezamento das compressões torácicas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O revezamento deve ocorrer a cada 2 minutos ou 5 ciclos de 30:2, e a troca deve durar menos de 10 segundos.",
        "correta": true,
        "explicacao": "A AHA orienta o revezamento a cada 2 minutos para evitar a queda na qualidade das compressões por fadiga, minimizando as interrupções ao máximo."
      },
      {
        "id": "B",
        "texto": "O socorrista só deve ser substituído quando verbalizar que está exausto, para não interromper o fluxo de sangue desnecessariamente.",
        "correta": false,
        "explicacao": "A fadiga do socorrista diminui a profundidade e o retorno do tórax muito antes dele perceber estar exausto, tornando a RCP ineficaz."
      },
      {
        "id": "C",
        "texto": "O revezamento deve ser feito após cada choque do DEA, independentemente do tempo de compressão decorrido.",
        "correta": false,
        "explicacao": "O revezamento idealmente coincide com a análise do DEA (a cada 2 min), mas basear-se 'após cada choque' é falho, pois o DEA pode não indicar choque."
      },
      {
        "id": "D",
        "texto": "Um socorrista deve fazer compressões exclusivas por 5 minutos enquanto o outro apenas ventila, trocando de papel em seguida.",
        "correta": false,
        "explicacao": "Compressões por 5 minutos contínuos geram fadiga extrema. A janela de tempo recomendada para manter compressões de alta qualidade é de 2 minutos."
      }
    ]
  },
  {
    "id": 296,
    "pergunta": "Uma criança de 4 anos encontra uma garrafa de limpador de vaso sanitário (produto altamente corrosivo) e ingere um grande gole. A mãe a encontra chorando, com salivação excessiva e queimaduras ao redor da boca. Qual a intervenção imediata mais adequada no ambiente doméstico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Induzir o vômito imediatamente introduzindo o dedo na garganta da criança para expulsar o produto tóxico.",
        "correta": false,
        "explicacao": "Induzir o vômito de substâncias corrosivas faz com que o produto queime o esôfago e a garganta uma segunda vez, além de alto risco de aspiração para os pulmões."
      },
      {
        "id": "B",
        "texto": "Dar 2 copos de leite integral para neutralizar a química do produto e criar uma barreira protetora no estômago.",
        "correta": false,
        "explicacao": "O leite não neutraliza venenos, pode acelerar a absorção de algumas substâncias e dificulta a visualização por endoscopia no hospital."
      },
      {
        "id": "C",
        "texto": "Acionar o 192 ou o Centro de Informação e Assistência Toxicológica (CIATOX) imediatamente, tendo o frasco do produto em mãos.",
        "correta": true,
        "explicacao": "Em ingestão de cáusticos, a regulação médica (SAMU/CIATOX) determinará a conduta correta baseada no agente químico exato relatado na embalagem."
      },
      {
        "id": "D",
        "texto": "Oferecer carvão ativado em pó diluído em água para adsorver as toxinas e evitar que cheguem à corrente sanguínea.",
        "correta": false,
        "explicacao": "O carvão ativado não é eficaz contra cáusticos/corrosivos (não se liga a eles) e seu uso por leigos sem indicação médica é contraindicado."
      }
    ]
  },
  {
    "id": 297,
    "pergunta": "Um adulto em um restaurante começa a tossir vigorosamente e apresenta chiado ao respirar após se engasgar com um pedaço de bife. O socorrista leigo o incentiva a tossir. Repentinamente, a vítima para de tossir, leva as mãos ao pescoço, não consegue falar e seus lábios ficam azulados (cianose). Qual é a justificativa fisiológica e a conduta correta agora?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A obstrução, antes leve, tornou-se severa (total). A conduta agora é aplicar golpes nas costas e compressões abdominais (Manobra de Heimlich).",
        "correta": true,
        "explicacao": "A ausência de tosse, fala e a cianose indicam que o ar não passa mais pelas vias aéreas. A Manobra de Heimlich deve ser iniciada imediatamente."
      },
      {
        "id": "B",
        "texto": "A tosse causou fadiga nos músculos respiratórios. Deve-se deitá-lo, oferecer um copo de água e mantê-lo em repouso absoluto.",
        "correta": false,
        "explicacao": "Sinal universal de engasgo com incapacidade de tossir é obstrução total. Oferecer água a quem não consegue respirar levará à broncoaspiração imediata."
      },
      {
        "id": "C",
        "texto": "A vítima evoluiu para Parada Cardiorrespiratória por hipóxia. A conduta é deitá-lo no chão e iniciar apenas compressões torácicas contínuas.",
        "correta": false,
        "explicacao": "A vítima está consciente (levou as mãos ao pescoço). RCP só é indicada se e quando a vítima se tornar inconsciente/irresponsiva."
      },
      {
        "id": "D",
        "texto": "O corpo estranho desceu para o estômago causando espasmo esofágico. Deve-se fazer massagem no pescoço para relaxar a musculatura.",
        "correta": false,
        "explicacao": "A cianose e a incapacidade de falar provam que o corpo estranho bloqueou a traqueia/glote, não o esôfago. Massagem cervical não tem utilidade."
      }
    ]
  },
  {
    "id": 298,
    "pergunta": "Um trabalhador tem ambas as pernas esmagadas sob uma pesada viga de concreto há cerca de 5 horas. Socorristas leigos sugerem usar um macaco hidráulico para remoção imediata antes da chegada do SAMU (192) ou Bombeiros (193). Qual é o risco fisiológico crítico dessa remoção não assistida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A descompressão brusca libera toxinas, como a mioglobina, e altas taxas de potássio na circulação, podendo causar arritmias letais imediatas e falência renal aguda grave.",
        "correta": true,
        "explicacao": "Na Síndrome de Esmagamento (Rabdomiólise traumática), o músculo esmagado libera potássio e mioglobina. A retirada súbita do peso permite que essas substâncias inundem a corrente sanguínea, causando parada cardíaca por hipercalemia e falência renal."
      },
      {
        "id": "B",
        "texto": "A descompressão brusca gera uma expansão torácica reflexa que hiperventila a vítima, causando uma alcalose respiratória severa, desmaio imediato e parada respiratória secundária.",
        "correta": false,
        "explicacao": "O risco imediato da síndrome de esmagamento é de ordem metabólica e tóxica sistêmica (íons e proteínas musculares na circulação), e não uma alcalose respiratória por expansão torácica mecânica distal."
      },
      {
        "id": "C",
        "texto": "A remoção do peso causa a síndrome do compartimento profilática, impedindo subitamente que o sangue arterial oxigenado chegue aos membros inferiores, gerando gangrena seca.",
        "correta": false,
        "explicacao": "A síndrome compartimental ocorre pelo aumento de pressão dentro do compartimento muscular fechado (edema). A descompressão em si não a causa 'subitamente' para bloquear o fluxo, mas sim expõe o corpo aos metabólitos retidos."
      },
      {
        "id": "D",
        "texto": "A elevação do escombro promove um retorno venoso abrupto e excessivo ao coração direito, resultando em um edema agudo de pulmão instantâneo e afogamento interno.",
        "correta": false,
        "explicacao": "Na verdade, com o alívio da pressão, há um grande sequestro de fluidos (sangue e plasma) para o membro afetado (edema severo) que pode causar choque hipovolêmico, e não uma sobrecarga de volume ao coração direito."
      }
    ]
  },
  {
    "id": 299,
    "pergunta": "Um motociclista, após colisão a 80 km/h, está deitado no asfalto queixando-se de dor excruciante na região pélvica. As pernas apresentam rotação externa. Considerando a priorização do XABCDE no trauma para leigos, qual a conduta mecânica correta até a chegada do 192?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Avaliar os reflexos patelares para descartar lesão medular alta e posicionar a vítima de lado, minimizando o risco de broncoaspiração de fluidos gástricos e saliva.",
        "correta": false,
        "explicacao": "Testar reflexos não é conduta leiga emergencial. Além disso, lateralizar uma vítima com fratura pélvica pode exacerbar o sangramento retroperitoneal grave."
      },
      {
        "id": "B",
        "texto": "Solicitar que a vítima tente mover as pernas lentamente para avaliar a estabilidade óssea da fratura, decidindo assim sobre o uso de talas rígidas improvisadas na via.",
        "correta": false,
        "explicacao": "Avaliar a 'estabilidade óssea' solicitando movimentação intencional em suspeita de fratura grave de pelve aumenta exponencialmente o risco de romper vasos ilíacos e agravar a dor e hemorragia."
      },
      {
        "id": "C",
        "texto": "Restringir totalmente a movimentação da vítima e do quadril para não agravar a lesão óssea, o que poderia romper plexos venosos e artérias, gerando hemorragia interna maciça.",
        "correta": true,
        "explicacao": "A pelve abriga uma vasta rede vascular. O movimento de ossos pélvicos fraturados pode dilacerar vasos e desfazer coágulos precoces, resultando em exsanguinação interna rápida. A imobilização deve ser absoluta."
      },
      {
        "id": "D",
        "texto": "Tracionar manualmente ambas as pernas até que fiquem perfeitamente alinhadas, imobilizando-as juntas com faixas para reduzir a dor crônica e conter o sangramento no local.",
        "correta": false,
        "explicacao": "Manobras de tração manual em fraturas pélvicas por leigos são contraindicadas, pois podem deslocar os fragmentos ósseos e lacerar vasos sanguíneos cruciais, transformando uma fratura estável em letal."
      }
    ]
  },
  {
    "id": 300,
    "pergunta": "Você se depara com um engavetamento grave e inicia a triagem simplificada (START). Uma vítima adulta está caída e inconsciente. Ao avaliar a respiração, você nota ausência de movimentos torácicos. Você realiza a abertura manual das vias aéreas (elevação do queixo) e, mesmo assim, a vítima não respira. Qual a classificação e conduta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Classificada como VERMELHA (Imediata). O socorrista deve iniciar manobras de reanimação cardiopulmonar (RCP) imediatamente por 2 minutos antes de ir para a próxima vítima.",
        "correta": false,
        "explicacao": "No método de triagem START, não se realiza RCP em vítimas em apneia irreversível à abertura de vias aéreas, pois isso gastaria tempo crítico necessário para salvar múltiplas vítimas viáveis."
      },
      {
        "id": "B",
        "texto": "Classificada como PRETA (Óbito/Expectante). Em incidentes com múltiplas vítimas, não se aplica RCP em pacientes em apneia após abertura de via aérea, focando nos viáveis.",
        "correta": true,
        "explicacao": "Pelo fluxograma START (Simple Triage and Rapid Treatment), se um adulto não retorna a respirar espontaneamente após manobras manuais de via aérea, é classificado como Preto (Expectante/Óbito) para otimização de recursos."
      },
      {
        "id": "C",
        "texto": "Classificada como AMARELA (Urgente). A vítima deve ser colocada na posição de recuperação lateral e reavaliada somente após a estabilização de todos os casos vermelhos.",
        "correta": false,
        "explicacao": "Vítimas amarelas têm função respiratória preservada (menos de 30 irpm) e perfusão adequada, mas não conseguem andar. Apneia nunca classifica paciente como Amarelo."
      },
      {
        "id": "D",
        "texto": "Classificada como VERDE (Menor). Como não há sangramentos visíveis ou deformidades óbvias, a prioridade máxima de atendimento deve ser direcionada aos pacientes que pedem ajuda.",
        "correta": false,
        "explicacao": "Verde é a classificação exclusiva para vítimas capazes de deambular (andar) e seguir comandos na cena, independentemente de lesões ocultas. Alguém em apneia não se enquadra."
      }
    ]
  },
  {
    "id": 301,
    "pergunta": "Um skatista sofre uma queda de dorso e bate a cabeça. Ele levanta rapidamente, conversa normalmente e recusa ajuda. Vinte minutos depois, torna-se letárgico, apresenta vômitos em jato e respiração bastante irregular. Fisiologicamente, o que esse 'intervalo lúcido' seguido de piora repentina indica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ocorre uma liberação tardia e massiva de adrenalina simpática, causando fadiga muscular extrema e espasmos diafragmáticos que simulam danos neurológicos estruturais graves.",
        "correta": false,
        "explicacao": "A liberação de adrenalina após o trauma tem efeitos imediatos sistêmicos (taquicardia, palidez), não causando um declínio neurológico progressivo e sintomas focais como vômito em jato."
      },
      {
        "id": "B",
        "texto": "O aumento severo da pressão intracraniana, devido a um sangramento em expansão, está comprimindo fisicamente o tecido cerebral e os centros vitais no tronco encefálico.",
        "correta": true,
        "explicacao": "O 'intervalo lúcido' é a marca clínica de sangramentos agudos como o hematoma epidural. A expansão do sangramento no crânio eleva a Pressão Intracraniana (PIC), deprimindo o nível de consciência e vitais (Tríade de Cushing)."
      },
      {
        "id": "C",
        "texto": "A vítima desenvolveu uma resposta reflexa parassimpática exagerada ao estresse do acidente, resultando em uma queda benigna e totalmente transitória da pressão arterial sistêmica.",
        "correta": false,
        "explicacao": "Uma síndrome vasovagal (parassimpática) causaria desmaio imediato e palidez, não uma deterioração grave, progressiva e tardia (20 minutos depois) associada a vômitos neurológicos em jato."
      },
      {
        "id": "D",
        "texto": "O impacto craniano gerou uma concussão simples que bloqueia temporariamente a absorção de glicose plasmática pelo cérebro, exigindo apenas a oferta imediata de açúcar.",
        "correta": false,
        "explicacao": "Uma concussão pode causar confusão passageira, mas não bloqueia a captação de glicose nem cursa com piora severa súbita tardia. Não se deve dar alimento a pacientes rebaixados devido ao risco de broncoaspiração."
      }
    ]
  },
  {
    "id": 302,
    "pergunta": "Um marceneiro sofre amputação traumática parcial do braço por uma serra circular, resultando em hemorragia arterial massiva (em esguicho). A vítima está consciente, porém extremamente agitada e com respiração ruidosa. Pelo protocolo PHTLS (XABCDE), qual a primeiríssima intervenção?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Desobstruir a via aérea (A), pois a respiração ruidosa indica risco de asfixia iminente por queda da língua, fenômeno que leva ao óbito mais rápido que o sangramento distal.",
        "correta": false,
        "explicacao": "Na atual abordagem do PHTLS e suporte tático de vida, o descontrole de hemorragia externa massiva leva à morte (exsanguinação) muito mais rápido do que uma obstrução parcial (A) se estabelece totalmente."
      },
      {
        "id": "B",
        "texto": "Imobilizar a coluna cervical (A), garantindo o alinhamento anatômico antes de mover a vítima do local, prevenindo lesões medulares irreversíveis devido ao estresse da dor.",
        "correta": false,
        "explicacao": "Trauma isolado por serra circular nos membros geralmente não necessita de imobilização cervical. Mesmo que fosse trauma fechado generalizado, a prioridade 'X' vem sempre antes de qualquer estabilização espinhal."
      },
      {
        "id": "C",
        "texto": "Avaliar rigorosamente o nível de consciência (D), conversando com a vítima para entender a cinemática exata do trauma e acalmá-la antes de aplicar curativos compressivos.",
        "correta": false,
        "explicacao": "A etapa 'D' (Déficit Neurológico) é tardia na avaliação primária. Avaliar o histórico antes de controlar uma artéria seccionada levará a vítima à morte por choque hemorrágico."
      },
      {
        "id": "D",
        "texto": "Controlar a hemorragia externa massiva (X) com torniquete, pois a exsanguinação de grandes vasos arteriais leva à morte mais rapidamente do que a obstrução parcial de via aérea.",
        "correta": true,
        "explicacao": "A inclusão da letra 'X' (eXsanguination) antes do 'A' no protocolo PHTLS reconheceu que hemorragias massivas de extremidades são a causa número um de morte evitável no trauma precoce, devendo ser estancadas de imediato."
      }
    ]
  },
  {
    "id": 303,
    "pergunta": "Um ciclista atropelado por um carro, com fratura exposta grave na perna esquerda, está lúcido e recusa veementemente qualquer ajuda, impedindo que encostem nele. Minutos depois, ele desmaia subitamente pela perda de sangue. Qual o amparo legal e ético para o socorrista leigo atuar agora?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O princípio fundamental da autonomia do paciente determina que a recusa verbal inicial é absoluta e irrevogável, tornando qualquer toque posterior um crime de lesão corporal.",
        "correta": false,
        "explicacao": "A recusa de um paciente consciente tem peso imediato, mas ela não se sustenta automaticamente para o momento em que a vida corre risco crítico e a pessoa perde a capacidade cognitiva e de expressão."
      },
      {
        "id": "B",
        "texto": "A doutrina do consentimento implícito assume que, ao perder a capacidade cognitiva de decisão, a vítima racionalmente aceitaria manobras imediatas para a preservação de sua vida.",
        "correta": true,
        "explicacao": "Quando uma vítima entra em inconsciência ou não pode mais decidir sob risco de morte (risco iminente), a lei e a ética médica invocam o 'consentimento implícito', permitindo o socorro salvador sem incorrer em crime."
      },
      {
        "id": "C",
        "texto": "O socorrista deve obrigatoriamente solicitar a presença da Polícia Militar (190) no local para que assinem um termo de responsabilidade judicial antes de realizar ligações ao SAMU.",
        "correta": false,
        "explicacao": "Não existe exigência legal de envolver a polícia para atestar consentimento em situação de emergência com risco à vida, isso apenas geraria um atraso letal no acionamento do 192 e no controle do sangramento."
      },
      {
        "id": "D",
        "texto": "A lei constitucional de omissão de socorro obriga a intervenção física coercitiva desde o início, mesmo contra a vontade de vítimas plenamente conscientes e orientadas na via pública.",
        "correta": false,
        "explicacao": "Não se pode usar coerção física contra um paciente perfeitamente lúcido que recusa assistência (consentimento explícito negado), isso constituiria constrangimento ilegal. O amparo ocorre apenas após a inconsciência."
      }
    ]
  },
  {
    "id": 304,
    "pergunta": "Durante a busca por um explorador perdido na mata sob chuva gelada por mais de 12 horas, a equipe o encontra apático, letárgico, com pele pálida e sem tremores musculares (hipotermia severa). Qual o perigo fisiológico de manipular essa vítima com movimentos bruscos ao transportá-la?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O movimento abrupto eleva perigosamente o atrito intracelular, causando um aumento rebote e descontrolado da temperatura central que resulta em choque térmico cerebral.",
        "correta": false,
        "explicacao": "Não há mecanismo fisiológico pelo qual o 'atrito intracelular' por simples transporte resulte em rebote de temperatura central ou choque térmico. O dano é elétrico e cardiovascular."
      },
      {
        "id": "B",
        "texto": "A agitação mecânica transfere o sangue quente dos órgãos centrais diretamente para as extremidades, acelerando a necrose isquêmica e causando amputações espontâneas.",
        "correta": false,
        "explicacao": "Embora o sangue frio periférico possa retornar ao centro (after-drop) piorando o quadro do núcleo central, não é isso que causa a letalidade imediata nem provoca 'amputações espontâneas'."
      },
      {
        "id": "C",
        "texto": "O músculo cardíaco profundamente resfriado torna-se extremamente irritável, de forma que qualquer choque ou movimentação abrupta pode desencadear uma fibrilação ventricular letal.",
        "correta": true,
        "explicacao": "Em hipotermia profunda (abaixo de 32°C a 28°C), o miocárdio fica extremamente propício a arritmias instáveis. O manuseio brusco, intubações inábeis ou transporte conturbado podem jogar o coração em fibrilação ventricular (PCR)."
      },
      {
        "id": "D",
        "texto": "O impacto mecânico contínuo rompe as redes de pequenos vasos sanguíneos capilares subcutâneos que estão contraídos, resultando em hemorragia interna generalizada fatal.",
        "correta": false,
        "explicacao": "Vasos superficiais sofrem vasoconstrição em hipotermia, mas um manuseio grosseiro não tem força física para romper redes capilares a ponto de causar uma hemorragia exsanguinante fatal interna."
      }
    ]
  },
  {
    "id": 305,
    "pergunta": "Um trabalhador cai do telhado de costas, fica inconsciente e com forte ruído de ronco (indicando obstrução da via aérea pela língua). O socorrista leigo treinado aplica a 'tração da mandíbula' para proteger a cervical, mas a técnica falha e a vítima começa a ficar cianótica (roxa). O que priorizar?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manter estritamente a técnica de tração da mandíbula e aguardar o SAMU, pois o risco mecânico de secção da medula espinhal é sempre prioritário sobre a cianose tissular transitória.",
        "correta": false,
        "explicacao": "Cianose em paciente não responsivo significa asfixia progressiva, o que leva a uma PCR letal muito antes de a ajuda chegar. O protocolo não apoia deixar a via aérea obstruída pelo medo da lesão cervical."
      },
      {
        "id": "B",
        "texto": "Realizar a inclinação da cabeça e elevação do queixo para garantir a oxigenação, pois a permeabilidade da via aérea tem primazia absoluta sobre a suspeita de lesão da coluna cervical.",
        "correta": true,
        "explicacao": "Segundo diretrizes de APH e Suporte Básico (AHA/PHTLS), se a manobra segura para cervical (jaw-thrust) falhar em abrir a via aérea e paciente corre risco asfíxico, a manutenção da respiração sobrepõe o risco cervical. Usa-se a manobra tradicional."
      },
      {
        "id": "C",
        "texto": "Iniciar imediatamente as compressões torácicas profundas, já que a coloração roxa na face indica parada cardíaca secundária ao choque medular neurogênico provocado pelo trauma.",
        "correta": false,
        "explicacao": "A cianose e roncos indicam via aérea fechada, não necessariamente parada cardíaca (ainda). Iniciar compressões sem antes tentar desobstruir a VA com a manobra correta não trata a causa base imediata de hipóxia."
      },
      {
        "id": "D",
        "texto": "Lateralizar completamente a vítima em bloco para que a ação da gravidade desloque a base da língua, alinhando simultaneamente a faringe sem a necessidade de estender o pescoço.",
        "correta": false,
        "explicacao": "A lateralização é usada na 'posição de recuperação' para manter a VA pérvia e evitar broncoaspiração, mas em trauma cervical severo com apneia iminente a manobra inicial correta é a extensão manual seletiva."
      }
    ]
  },
  {
    "id": 306,
    "pergunta": "Um biólogo foi picado por uma cobra jararaca no membro inferior, apresentando rápido edema, dor intensa e sangramento local. De acordo com os protocolos de toxicologia em APH, por que a aplicação de um torniquete é estritamente contraindicada neste cenário ambiental?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O torniquete aumenta severamente a pressão do fluxo sanguíneo arterial, projetando o veneno em alta velocidade para o sistema nervoso central, resultando em apneia neurotóxica.",
        "correta": false,
        "explicacao": "O objetivo de um torniquete é justamente barrar o fluxo, ele não projeta o sangue com mais velocidade para o cérebro. Veneno de jararaca é primariamente proteolítico e coagulante, não de ação neurotóxica aguda veloz."
      },
      {
        "id": "B",
        "texto": "A compressão obstrui o fluxo sanguíneo, concentrando o efeito proteolítico do veneno no membro, o que acelera a necrose e risco de amputação, sem deter a absorção sistêmica da toxina.",
        "correta": true,
        "explicacao": "O veneno butrópico (jararaca) destrói ativamente o tecido local (necrose). Bloquear a circulação concentra essa degradação destrutiva sem nenhum benefício sistêmico, pois grande parte do veneno dissemina precocemente por vias linfáticas."
      },
      {
        "id": "C",
        "texto": "A restrição circulatória aguda desativa os leucócitos e os anticorpos naturais circulantes, permitindo que as toxinas ofídicas se reproduzam de forma viral na área delimitada pelo cinto.",
        "correta": false,
        "explicacao": "Toxinas ofídicas não são seres vivos nem patógenos com capacidade reprodutiva (como vírus ou bactérias), são compostos químicos, enzimas e peptídeos nocivos elaborados por glândulas."
      },
      {
        "id": "D",
        "texto": "O uso de garrotes e torniquetes bloqueia fisicamente a saída fisiológica espontânea do veneno através dos poros cutâneos, que é a principal via natural de excreção corporal ofídica.",
        "correta": false,
        "explicacao": "O corpo humano não excreta veneno proteico de cobra pelos poros sudoríparos. Ele é metabolizado e excretado por complexos caminhos renais ou hepáticos, exigindo neutralização por soroterapia."
      }
    ]
  },
  {
    "id": 307,
    "pergunta": "Em uma colisão veicular frontal, o tórax do motorista bateu violentamente contra o volante. O socorrista percebe que, ao inspirar, uma seção das costelas no lado direito afunda visivelmente, e, ao expirar, essa mesma seção é empurrada para fora (Tórax Instável). Qual o problema mecânico-fisiológico que causa a falência respiratória?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A fratura central do osso esterno induz a um espasmo rígido do músculo diafragma, comprimindo fisicamente os lobos pulmonares inferiores contra a coluna vertebral torácica.",
        "correta": false,
        "explicacao": "O evento visível e descrito se chama movimento paradoxal, não sendo um 'espasmo' do diafragma contra a coluna, mas sim uma deficiência da estrutura óssea do gradil costal."
      },
      {
        "id": "B",
        "texto": "A fratura de múltiplas costelas consecutivas desconecta esse segmento da caixa torácica, fazendo-o responder à pressão negativa contrariando a expansão pulmonar efetiva natural.",
        "correta": true,
        "explicacao": "O Tórax Instável ocorre com fraturas em múltiplas costelas contíguas. Ao inspirar (criar pressão negativa torácica para puxar o ar), esse segmento 'solto' é sugado para dentro (movimento paradoxal), impedindo a correta insuflação do pulmão."
      },
      {
        "id": "C",
        "texto": "A energia cinética do impacto do volante provoca hiperinsuflação imediata de todos os alvéolos direitos, retendo ar residual sob pressão e travando as trocas gasosas capilares.",
        "correta": false,
        "explicacao": "A cinética não causa 'hiperinsuflação'; pelo contrário, o trauma causará o colapso do parênquima e contusão pulmonar grave, atrapalhando justamente as trocas por acúmulo de sangue/líquido nos alvéolos afetados."
      },
      {
        "id": "D",
        "texto": "O trauma mecânico agudo rasga o tecido pleural, injetando subitamente todo o volume sanguíneo da aorta na cavidade torácica, o que puxa a pele e as costelas simultaneamente.",
        "correta": false,
        "explicacao": "O afundamento do segmento costal não tem relação direta mecânica com a ruptura da aorta (que seria fatal em instantes antes de o achado clínico evoluir estavelmente). A causa do afundamento é física externa/negativa, e não hemodinâmica."
      }
    ]
  },
  {
    "id": 308,
    "pergunta": "Em um capotamento, o motorista ejetado está inconsciente. Ele apresenta um corte profundo na coxa jorrando sangue vermelho vivo em jatos sincronizados com o pulso, além de respiração ruidosa (roncos) indicando queda da base da língua. Pela fisiopatologia do trauma e protocolo PHTLS (XABCDE), qual o primeiro passo fisiológico do socorrista?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Abertura das vias aéreas (A) com elevação da mandíbula, pois o cérebro tolera apenas 4 minutos sem oxigênio antes da morte encefálica, sobrepondo-se ao sangramento periférico.",
        "correta": false,
        "explicacao": "Embora a hipóxia seja crítica, a morte por exsanguinação arterial grave ocorre em menos tempo (2 a 3 minutos) do que o dano cerebral irreversível por obstrução parcial ou apneia aguda."
      },
      {
        "id": "B",
        "texto": "Oclusão imediata da hemorragia exsanguinante da coxa (X) com torniquete ou compressão direta, pois a perda acelerada de volume intravascular leva a um choque irreversível mais rápido que a hipóxia por obstrução parcial.",
        "correta": true,
        "explicacao": "A atualização para o XABCDE estabeleceu que hemorragias externas maciças (X) esgotam o volume de sangue crítico em instantes, invalidando qualquer esforço respiratório subsequente se o paciente estiver exsanguinado."
      },
      {
        "id": "C",
        "texto": "Alinhamento imediato da coluna cervical (C), seguido do rolamento da vítima, pois o impacto da ejeção garante lesão medular alta e perda do impulso elétrico para o diafragma.",
        "correta": false,
        "explicacao": "O controle da coluna cervical integra a etapa A (e atualmente compartilha espaço com as prioridades respiratórias), mas nunca antecede o controle de uma hemorragia maciça externa (X)."
      },
      {
        "id": "D",
        "texto": "Avaliação do nível de consciência através de estímulo doloroso (D) para verificar se o paciente pode auto-proteger a sua própria via aérea e conter seu próprio sangramento.",
        "correta": false,
        "explicacao": "A avaliação neurológica (D) é tardia no protocolo. Realizá-la antes de estancar a artéria jorrando sangue resultará na perda rápida da vítima por choque hipovolêmico letal."
      }
    ]
  },
  {
    "id": 309,
    "pergunta": "Um poste de alta tensão cai sobre um carro após um temporal, mantendo os cabos energizados em contato direto com a lataria. O motorista, em pânico, liga para o 193 querendo sair do veículo imediatamente por medo de incêndio. Qual o embasamento físico-fisiológico para a conduta correta do resgate?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Orientar o abandono do veículo em saltos curtos, com um pé de cada vez, evitando a formação de um circuito elétrico completo com o solo molhado pela chuva.",
        "correta": false,
        "explicacao": "Saltar com um pé de cada vez desequilibra a vítima. Se ela cair e tocar as mãos no chão, criará um diferencial de potencial letal. A vítima deve ficar no carro se não houver fogo."
      },
      {
        "id": "B",
        "texto": "Instruir a vítima a abrir a porta e pisar no solo sem segurar na lataria, dissipando gradativamente a carga estática pelos membros inferiores sem afetar o coração.",
        "correta": false,
        "explicacao": "Tocar o veículo e a terra ao mesmo tempo (tensão de toque) fecha um caminho de baixíssima resistência para a corrente elétrica de alta tensão, atravessando o corpo em direção à terra."
      },
      {
        "id": "C",
        "texto": "Recomendar que segure o volante de plástico com as duas mãos e recline o banco, evitando que o campo eletromagnético induza convulsões no córtex cerebral.",
        "correta": false,
        "explicacao": "O campo eletromagnético ao redor do carro não induz convulsões de forma passiva. O risco é o choque elétrico direto ao fechar o circuito com o solo."
      },
      {
        "id": "D",
        "texto": "Instruir a vítima a permanecer imóvel dentro do veículo, pois os pneus e a estrutura isolam o solo e a lataria atua como uma Gaiola de Faraday, mantendo a carga na superfície externa.",
        "correta": true,
        "explicacao": "Enquanto o ocupante não tocar simultaneamente o solo e a estrutura do carro, não há diferença de potencial (d.d.p) atravessando seu corpo. O carro energizado atua protegendo o interior, sendo vital aguardar o desligamento da rede."
      }
    ]
  },
  {
    "id": 310,
    "pergunta": "Após um mergulho em águas rasas, o banhista sofre secção medular alta e apresenta pressão arterial em queda acentuada. Durante a avaliação leiga, nota-se que a pele dele está anormalmente quente, rosada e seca do pescoço para baixo, contrastando com o trauma grave. Qual a explicação fisiopatológica para este choque neurogênico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A lesão medular cortou as vias do sistema nervoso simpático, impedindo a vasoconstrição periférica compensatória, resultando num represamento anormal de sangue quente nas extremidades.",
        "correta": true,
        "explicacao": "No choque neurogênico, a interrupção do tônus simpático causa vasodilatação massiva. Sem vasoconstrição, o sangue fica 'parado' nos vasos dilatados da pele, deixando-a quente e rosada, causando hipotensão por aumento do continente vascular."
      },
      {
        "id": "B",
        "texto": "A medula rompida ativa o nervo vago de forma descontrolada, causando aumento súbito e extremo da frequência cardíaca, o que superaquece fisicamente o tecido muscular liso sob a derme.",
        "correta": false,
        "explicacao": "A lesão simpática deixa o nervo vago (parassimpático) atuar sem oposição, o que causa bradicardia (coração lento), e não taquicardia ou superaquecimento muscular."
      },
      {
        "id": "C",
        "texto": "A água induziu um reflexo de mergulho mamífero tardio, forçando o sangue dos órgãos vitais de volta para a periferia cutânea na tentativa de reverter a paralisia motora temporária.",
        "correta": false,
        "explicacao": "O reflexo de mergulho mamífero faz exatamente o oposto: bradicardia e centralização do fluxo sanguíneo (vasoconstrição periférica) para poupar oxigênio para cérebro e coração."
      },
      {
        "id": "D",
        "texto": "O impacto da cabeça liberou histamina dos mastócitos cranianos, gerando uma reação anafilática traumática que dilata seletivamente os poros capilares para extravasamento de plasma.",
        "correta": false,
        "explicacao": "O trauma mecânico da medula não induz anafilaxia. A vasodilatação neste caso é pura e exclusivamente por perda do controle nervoso vasomotor (tônus), não por reação química de histamina."
      }
    ]
  },
  {
    "id": 311,
    "pergunta": "Em um tombamento de ônibus com 40 passageiros, você é o primeiro socorrista e aplica o método START. Dezenas de vítimas classificadas como VERDES (capazes de andar) caminham desorientadas e em pânico pela rodovia. Visando a triagem, qual a tática de gerenciamento de cena mais eficiente com este grupo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Orientá-los a buscar carona imediatamente ou caminhar até o hospital mais próximo, esvaziando a cena do acidente para que o SAMU (192) foque nas vítimas deitadas.",
        "correta": false,
        "explicacao": "Vítimas verdes podem apresentar lesões ocultas graves que descompensarão tardiamente (ex: trauma esplênico). Eles não podem abandonar a cena sem avaliação formal das equipes de resgate."
      },
      {
        "id": "B",
        "texto": "Agrupar as vítimas verdes em um local seguro, mantendo-os concentrados, e designar os fisicamente ilesos para auxiliar com curativos compressivos simples nos pacientes amarelos ou vermelhos.",
        "correta": true,
        "explicacao": "O controle da cena exige tirar as vítimas verdes da via de risco e agrupá-las (Área de Concentração de Vítimas). Utilizar os ilesos e calmos como força de trabalho amplia muito a capacidade de socorro inicial enquanto as viaturas não chegam."
      },
      {
        "id": "C",
        "texto": "Forçá-los a se deitarem em decúbito dorsal na pista para facilitar a reavaliação secundária, proibindo qualquer movimentação para não agravar prováveis lesões cervicais encobertas pela adrenalina.",
        "correta": false,
        "explicacao": "Se eles são classificados como verdes, é porque já deambularam (andaram). Deitá-los à força na via ocupa espaço crítico de operação, expõe ao frio e atrasa a logística de triagem de prioridades."
      },
      {
        "id": "D",
        "texto": "Alocar todos os materiais de primeiros socorros diretamente nas mãos dos verdes, para que eles façam a própria automedicação e liberem o socorrista para fazer RCP nas vítimas pretas.",
        "correta": false,
        "explicacao": "Vítimas em START Preto não recebem RCP em incidentes com múltiplas vítimas. Além disso, entregar equipamentos para automedicação sem supervisão viola preceitos básicos de atendimento ao trauma."
      }
    ]
  },
  {
    "id": 312,
    "pergunta": "Uma criança é picada por um escorpião amarelo (Tityus serrulatus). Diferente das serpentes que causam necrose visível, a criança não tem grande inchaço local, mas rapidamente apresenta vômitos em jato, suor extremo, tremores e batimentos cardíacos violentos. Qual a fisiologia deste veneno que embasa a extrema urgência médica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A toxina atua coagulando o sangue nas grandes artérias pediátricas, causando microinfartos múltiplos em órgãos periféricos que simulam um ataque de ansiedade e febre.",
        "correta": false,
        "explicacao": "Veneno de escorpião não possui ação coagulante massiva como o veneno de serpentes botrópicas (jararaca). O mecanismo letal dele é estritamente neurotóxico autônomo."
      },
      {
        "id": "B",
        "texto": "O veneno ataca os centros respiratórios do tronco encefálico, paralisando a mecânica do diafragma e forçando o coração a bater acelerado apenas para compensar a asfixia em curso.",
        "correta": false,
        "explicacao": "Paralisia flácida e apneia são típicas de cobras corais ou toxina botulínica. O escorpião causa superestimulação neurológica, gerando edema agudo de pulmão por falência cardíaca, não asfixia diafragmática primária."
      },
      {
        "id": "C",
        "texto": "O veneno promove a destruição acelerada dos glóbulos vermelhos circulantes, gerando uma anemia aguda fulminante que obriga o corpo a suar e hiperventilar para tentar captar oxigênio.",
        "correta": false,
        "explicacao": "A hemólise (destruição de glóbulos vermelhos) é característica de acidentes loxoscélicos (aranha marrom) ou crotálicos tardios, não sendo o mecanismo imediato de morte em picadas de escorpião."
      },
      {
        "id": "D",
        "texto": "As neurotoxinas causam uma 'tempestade autonômica', forçando a liberação maciça e descontrolada de adrenalina e acetilcolina, sobrecarregando o sistema cardiovascular até o colapso (edema agudo de pulmão).",
        "correta": true,
        "explicacao": "O veneno do escorpião despolariza os nervos repetidamente, causando descargas simpáticas e parassimpáticas extremas. A pressão arterial dispara e o coração sobrecarrega e falha rapidamente, especialmente em crianças pela relação dose/peso corporal."
      }
    ]
  },
  {
    "id": 313,
    "pergunta": "Em colisão frontal a 100 km/h, o passageiro do banco de trás usava apenas o cinto de segurança subabdominal (de dois pontos) solto sobre o umbigo. Na avaliação leiga, ele apresenta extrema dor lombar e o abdômen está tenso e duro (abdômen em tábua). Pela biomecânica do trauma, qual a principal suspeita fisiopatológica de lesão?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A força rotacional ejetou os pulmões contra o diafragma superior, rasgando o pericárdio pericárdico e simulando rigidez abdominal pela estagnação sanguínea na pelve.",
        "correta": false,
        "explicacao": "A descrição é anatomicamente fantasiosa. Os pulmões não são ejetados contra o diafragma gerando rigidez abdominal."
      },
      {
        "id": "B",
        "texto": "O corpo dobrou-se violentamente sobre a faixa abdominal, gerando ruptura por esmagamento de vísceras ocas (intestinos) e tensão de tração severa fraturando a coluna lombar (Fratura de Chance).",
        "correta": true,
        "explicacao": "O uso incorreto do cinto de 2 pontos atua como um fulcro rígido no impacto frontal. A porção superior do corpo é atirada para frente, separando as vértebras lombares posteriormente (Fratura de Chance) e esmagando os intestinos contra a espinha."
      },
      {
        "id": "C",
        "texto": "O passageiro escorregou sob o cinto (efeito submarino), transferindo a força G diretamente para os fêmures, sendo a rigidez abdominal um reflexo benigno à dor nas pernas.",
        "correta": false,
        "explicacao": "Se houvesse o efeito submarino grave, o padrão de lesão seria predominantemente nos membros inferiores e bacia inferior, mas a rigidez em tábua evidencia peritonite severa por ruptura de órgão, não uma dor reflexa benigna."
      },
      {
        "id": "D",
        "texto": "O impacto criou onda de choque retrógrada pelas artérias ilíacas, rompendo a aorta torácica sem lesar as vértebras, enchendo o peritônio de sangue em segundos.",
        "correta": false,
        "explicacao": "Ruptura traumática de aorta geralmente ocorre pelo cisalhamento rápido no ligamento arterioso perto do coração, mais associado a impactos torácicos, não à compressão do cinto abdominal de dois pontos."
      }
    ]
  },
  {
    "id": 314,
    "pergunta": "Um socorrista presencia uma queda de moto em que a vítima reclama de dor cervical. Querendo ajudar além de sua formação leiga, ele improvisa um colar cervical amarrando fitas rígidas com tanta força no pescoço que bloqueia as veias jugulares, piorando a perfusão cerebral da vítima e agravando a lesão. No contexto legal brasileiro de primeiros socorros, como essa atitude é tipificada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Omissão de socorro, uma vez que, por não possuir o equipamento homologado correto, o socorrista perdeu imediatamente a autoridade civil para interagir com a vítima.",
        "correta": false,
        "explicacao": "Omissão de socorro é deixar de prestar ajuda ou deixar de acionar o socorro quando possível. Tentar ajudar de forma ativa, mesmo que prejudicial, caracteriza crime de ação, não de omissão."
      },
      {
        "id": "B",
        "texto": "Estado de necessidade justificante, pois qualquer atitude improvisada para salvar a coluna vertebral anula automaticamente a responsabilidade sobre lesões colaterais transitórias.",
        "correta": false,
        "explicacao": "O estado de necessidade não isenta da responsabilização por técnicas mal aplicadas que excedem a competência da pessoa e geram danos corporais diretos totalmente evitáveis."
      },
      {
        "id": "C",
        "texto": "Imprudência e imperícia, pois o socorrista executou manobra para a qual não tem habilitação técnica, agravando o estado do paciente ao exceder o escopo da assistência básica não invasiva.",
        "correta": true,
        "explicacao": "A imperícia é a falta de conhecimento técnico e a imprudência é a atitude precipitada. O suporte básico leigo ensina estabilização manual da cabeça e acionamento do 192. Improvisos danosos podem levar a processo penal por lesão corporal culposa."
      },
      {
        "id": "D",
        "texto": "Isenção pelo Princípio do Bom Samaritano, norma absoluta na lei brasileira que proíbe totalmente processos legais contra civis bem-intencionados em vias públicas.",
        "correta": false,
        "explicacao": "Não existe Lei do Bom Samaritano com proteção absoluta no Brasil como nos EUA. Se o leigo assumir procedimentos técnicos para os quais não tem preparo e causar agravamento, responderá civil e penalmente (Art. 18 e 129 do Código Penal)."
      }
    ]
  },
  {
    "id": 315,
    "pergunta": "Um atleta de artes marciais sofre uma luxação anatômica grosseira do joelho (fêmur totalmente desencaixado da tíbia). A perna da vítima, abaixo do joelho, está gelada, pálida e sem pulso. Socorristas leigos debatem se devem tracionar e recolocar o osso no lugar para aliviar a dor. Por que essa redução de fratura/luxação por leigos é rigorosamente contraindicada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O realinhamento leigo pode distender irreversivelmente os nervos sensoriais motores da coxa, resultando na formação permanente de neuromas hiperalgésicos incapacitantes.",
        "correta": false,
        "explicacao": "Embora o dano neural seja possível, o risco de morte do membro por secção total da artéria (risco vascular isquêmico imediato) é a principal razão pela qual a redução não é feita no local sem avaliação criteriosa."
      },
      {
        "id": "B",
        "texto": "Tracionar a articulação rompe instantaneamente os ligamentos cruzados pré-estirados, o que exige a introdução cirúrgica imediata de pinos metálicos impossíveis em ambiente pré-hospitalar.",
        "correta": false,
        "explicacao": "Numa luxação franca, os ligamentos já foram gravemente lesionados no momento do trauma. O perigo agudo não é o ligamento, mas a artéria principal que corre exatamente atrás da articulação."
      },
      {
        "id": "C",
        "texto": "A cápsula sinovial do joelho estourada atrai potássio, logo, tracionar o osso injeta líquido sinovial na corrente sanguínea resultando em hipercalemia sistêmica e parada cardíaca.",
        "correta": false,
        "explicacao": "Líquido sinovial não causa hipercalemia letal nem embolia massiva se injetado na circulação dessa forma; o problema mecânico é estritamente isquêmico e hemorrágico."
      },
      {
        "id": "D",
        "texto": "A articulação luxada costuma comprimir ou torcer a artéria poplítea. Tracionar a perna à força pode lacerar o vaso rasgando-o de vez, garantindo a amputação isquêmica do membro ou choque hemorrágico interno.",
        "correta": true,
        "explicacao": "O feixe neurovascular do joelho (artéria e veia poplíteas) fica prensado nos ossos deslocados. A ausência de pulso significa artéria obstruída. Qualquer tração malfeita atuará como uma faca sobre os vasos sob tensão, dilacerando-os permanentemente."
      }
    ]
  },
  {
    "id": 316,
    "pergunta": "Durante o exame físico e visual de um operário que caiu de um andaime batendo fortemente a cabeça, o socorrista leigo levanta as pálpebras do paciente inconsciente e nota anisocoria severa: uma pupila está muito grande (midríase fixa) e a outra está em tamanho normal. No contexto da cinemática craniana, qual o evento fisiopatológico associado a esse sinal neurológico crítico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A energia do impacto rompeu o globo ocular internamente, preenchendo a câmara anterior de humor aquoso e simulando visualmente uma pupila dilatada, sem relação neurológica.",
        "correta": false,
        "explicacao": "O sinal pupilar unilateral fixo associado a trauma e rebaixamento do nível de consciência não se deve primariamente a rompimento ocular local (hipema), mas a comprometimento das vias neurais centrais."
      },
      {
        "id": "B",
        "texto": "O aumento severo de sangue dentro do crânio fechado eleva a pressão interna, forçando a base do cérebro a herniar (descer) e comprimir fisicamente o terceiro nervo craniano oculomotor.",
        "correta": true,
        "explicacao": "A anisocoria aguda após trauma craniano aponta para hematoma intracraniano em expansão. O cérebro sem espaço é esmagado para baixo (herniação uncal), imprensando o nervo oculomotor (responsável por contrair a pupila), anulando seu funcionamento no lado afetado."
      },
      {
        "id": "C",
        "texto": "O nervo óptico foi parcialmente rompido pela força contusa da queda e não consegue transmitir o reflexo da luz ambiente para o hemisfério esquerdo cerebral de maneira eficaz.",
        "correta": false,
        "explicacao": "A falha na via aferente (nervo óptico) causaria falta de percepção luminosa (cegueira no olho), mas ambas as pupilas manteriam tamanho simétrico se o nervo oculomotor (via eferente pupilar) estivesse intacto, pois uma iluminada fecharia ambas."
      },
      {
        "id": "D",
        "texto": "As pupilas desiguais indicam que o paciente evoluiu para um Acidente Vascular Cerebral Isquêmico periférico antes da queda, justificando não só o desmaio estrutural como o evento ocupacional.",
        "correta": false,
        "explicacao": "Em um cenário de trauma violento com anisocoria isolada e inconsciência, o protocolo sempre trata o caso como Trauma Crânio-Encefálico e lesão de massa expansiva (hemorragia), nunca descartando o traumatismo atestando que a falha foi química periférica prévia."
      }
    ]
  },
  {
    "id": 317,
    "pergunta": "Um trabalhador rural cai sobre sacos rompidos de defensivos agrícolas (composto químico alcalino em pó), cobrindo boa parte das suas roupas e pele. Ele começa a sentir extrema ardência e o pó está aderido ao suor do pescoço. O que o protocolo de biossegurança e química avançada determina aos socorristas antes do transporte?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Despejar imediatamente galões de soro fisiológico ou água doce sobre o corpo inteiro, diluindo o máximo de concentração possível antes da queima epidérmica ser concluída.",
        "correta": false,
        "explicacao": "Jogar água diretamente sobre grande quantidade de pó químico ativo sem remover o grosso antes pode ativar o produto ou desencadear uma grave reação exotérmica, causando queimaduras térmicas profundas e espalhando a substância química."
      },
      {
        "id": "B",
        "texto": "Escovar vigorosamente o excesso de pó seco das roupas e da pele usando equipamentos de proteção (luvas), removendo roupas contaminadas, antes de aplicar água corrente em abundância.",
        "correta": true,
        "explicacao": "O protocolo para compostos químicos secos (como cal virgem e alguns pós corrosivos) é escovar vigorosamente e varrer o agente seco antes de iniciar a irrigação por pelo menos 15 a 20 minutos debaixo de jato brando de água natural."
      },
      {
        "id": "C",
        "texto": "Embalar e fechar hermeticamente o corpo do paciente com uma lona de polietileno limpa, privando o agente químico do oxigênio atmosférico essencial para sua reação cáustica destrutiva.",
        "correta": false,
        "explicacao": "Cobrir um paciente com um produto químico altamente tóxico não interrompe o contato nem neutraliza. Pior: ao selar com lona, o socorrista bloqueia a evaporação e aeração, potencializando o superaquecimento do agente na pele, acelerando a queima."
      },
      {
        "id": "D",
        "texto": "Aplicar rapidamente substâncias ácidas leves (como vinagre diluído ou suco de cítricos) na área onde está o pó, gerando a neutralização química exata exigida para compostos alcalinos pesados.",
        "correta": false,
        "explicacao": "Nunca se tenta fazer neutralização química na rua ou no resgate. Neutralizar ácido com base, ou base com ácido, provoca reações extremamente violentas que liberam calor severo e gases tóxicos locais. A solução primária no APH é remoção física e dispersão aquosa."
      }
    ]
  },
  {
    "id": 318,
    "pergunta": "Um jovem sofre um ferimento por arma branca no hemitórax direito. O socorrista leigo percebe que a vítima apresenta extrema dificuldade respiratória, veias do pescoço estufadas (ingurgitamento jugular) e a traqueia parece levemente desviada para a esquerda. Fisiopatologicamente, por que esse quadro (Pneumotórax Hipertensivo) leva à parada cardíaca iminente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O ar acumulado sob pressão no espaço pleural esmaga o coração e os grandes vasos (veia cava), bloqueando o retorno do sangue venoso ao coração direito e causando choque obstrutivo fatal.",
        "correta": true,
        "explicacao": "No pneumotórax hipertensivo, o ar entra e não sai. A pressão intratorácica positiva extrema comprime a veia cava, impedindo que o sangue retorne ao coração. O coração bate 'vazio', a pressão arterial despenca e ocorre parada em AESP (Atividade Elétrica Sem Pulso)."
      },
      {
        "id": "B",
        "texto": "O ferimento cortante seccionou diretamente os nervos frênicos bilaterais, paralisando instantaneamente o músculo diafragma e impedindo a fase ativa da inspiração celular.",
        "correta": false,
        "explicacao": "O ingurgitamento jugular e o desvio de traqueia são sinais clássicos de alteração de pressão intratorácica e desvio de mediastino, não de lesão neurológica do nervo frênico."
      },
      {
        "id": "C",
        "texto": "A perfuração pulmonar libera uma cascata de histamina que incha as vias aéreas superiores, causando asfixia mecânica na laringe antes mesmo do colapso pulmonar total.",
        "correta": false,
        "explicacao": "A liberação de histamina está ligada à anafilaxia (choque anafilático) e não ao trauma mecânico penetrante no tórax."
      },
      {
        "id": "D",
        "texto": "O sangue do ferimento inunda os alvéolos do pulmão intacto (esquerdo), criando um afogamento interno rápido que destrói a fina membrana alvéolo-capilar por toxicidade do ferro.",
        "correta": false,
        "explicacao": "A morte imediata no pneumotórax hipertensivo não é primariamente por hipóxia alveolar ou 'afogamento' contralateral, mas sim por falência hemodinâmica (choque obstrutivo crasso)."
      }
    ]
  },
  {
    "id": 319,
    "pergunta": "Em uma colisão veicular de alta energia, o passageiro sem cinto choca o rosto contra o painel, resultando em trauma facial maxilofacial grave. Ele está gemente e há um sangramento maciço ativo para dentro da própria boca e garganta. Pelo protocolo XABCDE, qual a decisão crítica do socorrista leigo ao notar engasgos e gorgolejos intensos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manter a vítima estritamente em decúbito dorsal (barriga para cima) com a cabeça imobilizada em posição neutra, pois a fratura cervical associada é estatisticamente mais letal que a aspiração de sangue.",
        "correta": false,
        "explicacao": "Uma via aérea repleta de sangue levará o paciente à morte asfíxica em minutos. A proteção da coluna (A) nunca deve impedir a desobstrução imediata de uma via aérea inundada."
      },
      {
        "id": "B",
        "texto": "Realizar a rolagem em bloco para a posição lateral (decúbito lateral), permitindo que a gravidade drene o sangue da faringe, priorizando a patência da via aérea sobre o risco de lesão espinhal.",
        "correta": true,
        "explicacao": "Conforme o PHTLS, sangue ou vômito abundante na via aérea de paciente rebaixado que não pode ser aspirado exige rolamento imediato para lateralização. A permeabilidade da via aérea (vida) tem primazia absoluta sobre a suspeita de lesão cervical (função)."
      },
      {
        "id": "C",
        "texto": "Inserir os dedos em forma de gancho profundamente na garganta para retirar os coágulos e estancar a artéria palatina manualmente, independentemente do reflexo de vômito.",
        "correta": false,
        "explicacao": "A varredura digital às cegas é proscrita, pois pode empurrar fragmentos ósseos ou dentes para a traqueia, além de expor o socorrista a mordeduras reflexas graves."
      },
      {
        "id": "D",
        "texto": "Iniciar ventilações de resgate boca a boca imediatamente para forçar o oxigênio através da barreira de sangue, garantindo que a hipóxia cerebral seja contida até a chegada do 192.",
        "correta": false,
        "explicacao": "Ventilar uma via aérea cheia de sangue forçará o líquido diretamente para os pulmões (broncoaspiração letal), causando pneumonia química ou asfixia mecânica imediata nos alvéolos."
      }
    ]
  },
  {
    "id": 320,
    "pergunta": "Em um acidente envolvendo um ônibus rodoviário, você inicia o método de triagem START. Ao avaliar um passageiro adulto, percebe que ele não consegue andar (não é Verde) e está respirando a uma frequência ofegante de 38 incursões por minuto. Qual é o próximo passo exato na triagem desta vítima específica?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Avaliar a perfusão capilar apertando o leito ungueal; se retornar em menos de 2 segundos, ele será rebaixado para a classificação Amarela.",
        "correta": false,
        "explicacao": "No START, as etapas são excludentes. Se a vítima falha no critério respiratório (> 30 irpm), o processo para nela."
      },
      {
        "id": "B",
        "texto": "Classificar imediatamente como VERMELHA (Imediata) e colocar uma fita correspondente, movendo-se em seguida para a próxima vítima sem avaliar pulso radial ou nível de consciência.",
        "correta": true,
        "explicacao": "No fluxograma START (Respiração, Perfusão, Nível de Consciência - 'RPM'), qualquer adulto com frequência respiratória superior a 30 irpm é automaticamente classificado como Vermelho. Não se perde tempo avaliando os próximos passos (perfusão ou cognição) nessa vítima."
      },
      {
        "id": "C",
        "texto": "Realizar a abertura das vias aéreas (tração da mandíbula). Se a frequência cair para menos de 20 irpm com a manobra, ele é classificado como Verde e mandado para a área segura.",
        "correta": false,
        "explicacao": "A abertura de vias aéreas no START só é feita se a vítima estiver em apneia (não respira). Se já respira a 38 irpm, o problema é compensatório de choque grave (Vermelho), não de obstrução posicional."
      },
      {
        "id": "D",
        "texto": "Classificar como PRETA (Expectante), pois uma frequência respiratória tão alta indica grave lesão de tronco cerebral incompatível com a vida em um cenário de múltiplos feridos.",
        "correta": false,
        "explicacao": "Tacipneia (> 30 irpm) é sinal clássico de choque hipovolêmico ou insuficiência respiratória tratável, garantindo classificação Vermelha, não Preta. Preta é apenas apneia irresponsiva à abertura de via aérea."
      }
    ]
  },
  {
    "id": 321,
    "pergunta": "Um raio atinge um campo de futebol, derrubando seis jogadores simultaneamente. De acordo com as diretrizes da AHA e do PHTLS para incidentes com múltiplas vítimas em cenários de descarga atmosférica, qual é o conceito da 'Triagem Reversa' que deve ser aplicado pelos socorristas leigos na cena?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Priorizar o atendimento e a RCP nas vítimas que estão em parada cardiorrespiratória (aparentemente mortas), pois a fisiologia do raio causa uma paralisia respiratória primária altamente reversível.",
        "correta": true,
        "explicacao": "Ao contrário da triagem START tradicional (onde os em PCR são dados como mortos/Pretos), no acidente com raio aplica-se a 'triagem reversa'. O choque despolariza o miocárdio causando PCR, mas o coração pode voltar. A apneia persiste por mais tempo. RCP imediata nessas vítimas tem altíssima taxa de sobrevida. Os que estão gritando e vivos já sobreviveram ao pior."
      },
      {
        "id": "B",
        "texto": "Isolar totalmente a área e aguardar pelo menos 30 minutos antes de tocar em qualquer vítima, para garantir que a carga eletrostática residual do solo tenha se dissipado por completo.",
        "correta": false,
        "explicacao": "O corpo humano não armazena carga elétrica após a passagem do raio. É perfeitamente seguro tocar nas vítimas imediatamente. O único perigo ambiental é a queda de um segundo raio no mesmo local."
      },
      {
        "id": "C",
        "texto": "Focar o atendimento imediato nas vítimas que estão convulsionando e gritando de dor por queimaduras graves, deixando os que não respiram para as equipes médicas avançadas.",
        "correta": false,
        "explicacao": "Esta seria a lógica fria de uma triagem START comum onde os 'vivos' têm prioridade sobre os 'mortos', mas no acidente por raio, a regra inverte-se. Vítimas que respiram sobreviverão; os em PCR precisam de reanimação imediata."
      },
      {
        "id": "D",
        "texto": "Tratar inicialmente apenas as queimaduras de entrada e saída nas extremidades distais, visto que o tecido carbonizado libera toxinas que causam falência renal fulminante em minutos.",
        "correta": false,
        "explicacao": "Queimaduras por raio (figuras de Lichtenberg ou puntiformes) raramente são a causa de morte imediata. A prioridade absoluta é o status cardiovascular e respiratório."
      }
    ]
  },
  {
    "id": 322,
    "pergunta": "Uma vítima é resgatada do interior de uma casa em chamas. Ela está alerta, sem grandes queimaduras corporais visíveis, mas apresenta fuligem no rosto, sobrancelhas chamuscadas e voz intensamente rouca. Fisiologicamente, por que este paciente exige acionamento de suporte avançado (SAMU com médico) de forma imediata, mesmo estando 'bem' no momento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A inalação de monóxido de carbono (CO) transforma o sangue em uma substância hipercoagulável, o que invariavelmente causará um infarto agudo do miocárdio em cerca de 30 minutos.",
        "correta": false,
        "explicacao": "O CO causa hipóxia tecidual profunda ao se ligar à hemoglobina, mas não cria um estado hipercoagulável gerador de IAM mecânico inevitável como justificativa principal da rouquidão."
      },
      {
        "id": "B",
        "texto": "A rouquidão e os pelos chamuscados são 'bandeiras vermelhas' para lesão térmica inalatória. O edema (inchaço) das vias aéreas superiores, como a glote, avança rapidamente, podendo causar obstrução total e asfixia em pouco tempo.",
        "correta": true,
        "explicacao": "O ar superaquecido queima a mucosa faríngea e laríngea. Diferente da pele, esse tecido interno incha (edema de glote) de forma muito acelerada. A rouquidão indica que a via aérea já está fechando, exigindo intubação endotraqueal precoce antes que o tubo não passe mais."
      },
      {
        "id": "C",
        "texto": "As cinzas e fuligens depositadas nos brônquios sofrem ignição espontânea quando em contato com altas concentrações de oxigênio fornecidas pelas máscaras de resgate do 193.",
        "correta": false,
        "explicacao": "Fuligem inalada não sofre combustão espontânea interna. O risco é inflamatório e de edema obstrutivo, não de fogo pulmonar."
      },
      {
        "id": "D",
        "texto": "A fumaça destrói imediatamente as cordas vocais, o que impede a vítima de pedir ajuda adequadamente caso sofra um agravo secundário, sendo a rouquidão um fator logístico e não fisiológico de risco.",
        "correta": false,
        "explicacao": "A rouquidão não é apenas um problema de comunicação (logístico); é um sinal fisiológico letal indicando que a coluna de ar (via aérea) está criticamente estreitada por inflamação térmica."
      }
    ]
  },
  {
    "id": 323,
    "pergunta": "Após uma briga em um bar, um homem sofre um corte profundo no abdômen, resultando em evisceração (alças intestinais expostas fora da cavidade). O paciente, em pânico, tenta empurrar os órgãos de volta com as mãos sujas. Qual a conduta exata do socorrista leigo e o seu respectivo embasamento fisiológico?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Impedir que a vítima empurre as vísceras e cobri-las com compressas estéreis umedecidas em soro ou água limpa, isolando com plástico, pois recolocá-las eleva a pressão abdominal, comprime grandes vasos e carrega contaminação maciça para o peritônio.",
        "correta": true,
        "explicacao": "Nunca se reintroduz vísceras expostas. Forçá-las para dentro através de um pequeno rasgo causa estrangulamento vascular da alça (necrose). Além disso, introduz-se sujidade extrema na cavidade estéril (peritonite fatal) e o aumento da pressão intra-abdominal pode comprimir a veia cava, reduzindo o retorno cardíaco."
      },
      {
        "id": "B",
        "texto": "Auxiliar a vítima a empurrar as vísceras rapidamente para dentro, a fim de evitar o choque térmico e a secagem do peritônio, suturando ou lacrando o corte externo firmemente com fita adesiva larga.",
        "correta": false,
        "explicacao": "Totalmente contraindicado. A tentativa de reintrodução de órgãos abdominais no ambiente pré-hospitalar agrava o choque, corta a perfusão do órgão pressionado e causa infecção peritoneal massiva."
      },
      {
        "id": "C",
        "texto": "Lavar os órgãos expostos abundantemente com antissépticos fortes, como álcool ou iodo, antes de envolvê-los em tecido seco, visando esterilizar o tecido intestinal e evitar a sepse cirúrgica.",
        "correta": false,
        "explicacao": "Álcool e iodo são altamente citotóxicos para os delicados tecidos internos das vísceras. O curativo deve ser apenas umedecido com soro ou água limpa potável e recoberto para não secar."
      },
      {
        "id": "D",
        "texto": "Aplicar pressão direta rigorosa em cima das alças intestinais expostas com curativos compressivos elásticos pesados para interromper imediatamente a hemorragia mesentérica subjacente.",
        "correta": false,
        "explicacao": "A compressão direta forte sobre órgãos eviscerados irá esmagá-los e cortar o suprimento sanguíneo deles (isquemia), causando a perda irremediável do intestino. Eviscerações abdominais raramente têm sangramento externo maciço o suficiente para justificar o esmagamento."
      }
    ]
  },
  {
    "id": 324,
    "pergunta": "Um motorista envolve-se em um capotamento severo. Ele sai do carro com um afundamento no crânio, sangramento no ouvido (otorragia) e extremamente combativo, xingando os socorristas e exigindo ir embora a pé. Com base na bioética do APH e na fisiopatologia do trauma craniano grave, os socorristas e a PM no local devem permitir que ele vá?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sim. O princípio da autonomia garante que qualquer adulto, ao expressar sua recusa de forma verbal e fisicamente ativa (andando e falando alto), não pode ser contido, sob pena de crime de sequestro.",
        "correta": false,
        "explicacao": "Para que a recusa (autonomia) seja válida, o paciente deve estar plenamente lúcido, orientado e capaz de entender as consequências de seus atos. O paciente em questão tem sinais claros de grave alteração neurológica."
      },
      {
        "id": "B",
        "texto": "Não. A presença de agressividade aguda e sinais de fratura de base de crânio indicam hipóxia ou lesão cerebral traumática (TCE), o que invalida sua capacidade legal de recusa, acionando o consentimento implícito.",
        "correta": true,
        "explicacao": "No trauma, confusão mental, agressividade ou letargia severa indicam oxigenação cerebral deficiente (choque) ou lesão cerebral direta. O paciente perde sua 'capacidade decisória'. Legalmente e eticamente, as equipes (incluindo PM/192) devem contê-lo e socorrê-lo baseados no consentimento implícito."
      },
      {
        "id": "C",
        "texto": "Sim, desde que assine um termo de responsabilidade de próprio punho ou seja gravado em vídeo recusando o socorro do SAMU, o que isenta totalmente o Estado de qualquer complicação jurídica posterior.",
        "correta": false,
        "explicacao": "Um termo assinado por alguém clinicamente incapaz (com confusão mental por TCE grave) não tem qualquer validade legal. O Estado responderia por negligência ao aceitar a recusa de alguém não orientado no tempo e espaço."
      },
      {
        "id": "D",
        "texto": "Não, mas a intervenção só pode ocorrer se houver a constatação formal de embriaguez ou uso de drogas ilícitas através de teste do bafômetro pela Polícia Rodoviária Federal no local.",
        "correta": false,
        "explicacao": "A incapacidade de decidir não se limita ao uso de substâncias; o próprio trauma físico cranioencefálico altera a cognição. O socorro coercitivo para proteção da vida aplica-se independentemente da presença de álcool."
      }
    ]
  },
  {
    "id": 325,
    "pergunta": "Durante a avaliação secundária de uma vítima de agressão, o socorrista observa equimose (mancha roxa) atrás das orelhas (Sinal de Battle) e um líquido claro e rosado escorrendo pelo nariz da vítima, que apresenta nível de consciência flutuante. Qual a suspeita fisiopatológica desse vazamento e por que o socorrista leigo NÃO deve tamponar o nariz?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Suspeita-se de ruptura da artéria facial superficial. Tamponar o nariz aumenta o fluxo de sangue retroativo para a órbita ocular, podendo causar cegueira irreversível por glaucoma agudo traumático.",
        "correta": false,
        "explicacao": "O vazamento claro/rosado não é sangue arterial puramente, mas sim líquido cefalorraquidiano misturado. Não tem relação fisiológica com retorno venoso ocular causando glaucoma."
      },
      {
        "id": "B",
        "texto": "Trata-se de plasma proveniente das queimaduras de fricção na face interna da mucosa nasal. O tamponamento impediria a formação da crosta fibrinoide necessária para a cicatrização aeróbica.",
        "correta": false,
        "explicacao": "Esta descrição é infundada para trauma craniano fechado com sinal de Battle. O plasma não vaza copiosamente pelas narinas dessa forma."
      },
      {
        "id": "C",
        "texto": "O sinal indica Fratura de Base de Crânio com fístula liquórica (vazamento do fluido que banha o cérebro). Tamponar o nariz acumularia a pressão intracraniana e criaria um caminho retrógrado para infecções severas (meningite).",
        "correta": true,
        "explicacao": "O Sinal de Battle e a rinorreia/otorreia de fluido claro indicam fratura do osso temporal ou placa cribriforme. O Líquido Cefalorraquidiano (LCR) está vazando. Tamponar as saídas (ouvido/nariz) com gaze força o acúmulo interno (aumentando a pressão intracraniana) e cria uma ponte direta para bactérias invadirem as meninges."
      },
      {
        "id": "D",
        "texto": "Reflete um rompimento agudo dos seios da face repletos de muco sinusal crônico purulento. O tamponamento comprimiria o nervo olfatório, privando a vítima permanentemente do sentido do paladar e olfato.",
        "correta": false,
        "explicacao": "Embora o nervo olfatório possa ser lesado na fratura de base de crânio, o perigo de morte iminente ao tamponar o orifício é a infecção do SNC (meningite) e o aumento da PIC por acúmulo de sangue/LCR, e não apenas uma questão sensorial."
      }
    ]
  },
  {
    "id": 326,
    "pergunta": "Um trabalhador rural entra em um poço desativado profundo e desmaia subitamente sem gritar. O colega acima, desesperado, quer descer prendendo a respiração para resgatá-lo rapidamente. Com base na biossegurança em espaços confinados, qual o risco fisiológico letal dessa conduta bem-intencionada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O esforço de arrastar um corpo denso sem respirar criará uma pressão intratorácica altíssima (Manobra de Valsalva involuntária), estourando os alvéolos pulmonares do socorrista no ambiente pressurizado do poço.",
        "correta": false,
        "explicacao": "Embora a manobra de Valsalva crie pressão, poços não são ambientes hiperbáricos que causam barotrauma espontâneo. O problema real é a contaminação ou falta de oxigênio do ar ambiente."
      },
      {
        "id": "B",
        "texto": "Gases tóxicos invisíveis e pesados (como H2S - Gás Sulfídrico) ou a completa falta de oxigênio no fundo causam colapso do sistema nervoso em segundos. Ao exalar ou não resistir a respirar pelo esforço, o socorrista inalará a toxina e também morrerá (Efeito 'Segunda Vítima').",
        "correta": true,
        "explicacao": "Espaços confinados agrícolas ou cloacais acumulam gases mais pesados que o ar (H2S, CO2, metano) que deslocam o oxigênio. A perda de consciência é súbita (1 a 2 respirações). Ninguém consegue fazer força de resgate prendendo a respiração; o reflexo respiratório forçará a inalação do gás letal. O resgate exige equipamento autônomo de respiração (EPR) operado pelo Bombeiro (193)."
      },
      {
        "id": "C",
        "texto": "O ambiente escuro e o cheiro forte de fezes animais do poço acionam um forte reflexo vasovagal no socorrista leigo não treinado, causando uma síncope emocional que simula envenenamento químico.",
        "correta": false,
        "explicacao": "O risco letal de poços não é emocional/psicológico (síncope vagal), mas estritamente químico e respiratório (asfixia simples ou química). Atribuir a morte a 'susto' ignora a letalidade do espaço confinado."
      },
      {
        "id": "D",
        "texto": "O fundo do poço atua como uma antena parabólica natural para radiações telúricas do lençol freático, que despolarizam imediatamente as sinapses elétricas cardíacas do socorrista ao tocar na água contaminada.",
        "correta": false,
        "explicacao": "Completamente pseudocientífico. O risco fisiopatológico real é o deslocamento de oxigênio ou a presença de gases asfixiantes como monóxido de carbono e ácido sulfídrico."
      }
    ]
  },
  {
    "id": 327,
    "pergunta": "Uma vítima sofreu forte compressão pélvica em um acidente com trator. Ela está consciente, queixa-se de sede intensa e apresenta pulso radial muito rápido (taquicardia - 120 bpm) e pele fria. Ao observar esses sinais vitais sutis antes da pressão arterial sistólica cair (choque descompensado), qual a explicação fisiológica para o corpo ainda estar compensando a hemorragia interna?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O coração aumenta sua frequência devido a uma infecção maciça instaurada pela perfuração intestinal, gerando a taquicardia térmica característica do choque séptico precoce.",
        "correta": false,
        "explicacao": "Embora a ruptura intestinal seja possível, no cenário agudo de trauma fechado grave o choque precoce é invariavelmente hipovolêmico (hemorragia pélvica/retroperitoneal). O choque séptico leva horas ou dias para se instalar."
      },
      {
        "id": "B",
        "texto": "A dor excruciante na pelve fraturada ativa o sistema parassimpático, que tenta diminuir a frequência cardíaca para poupar oxigênio cerebral, mas falha resultando no escape taquicárdico.",
        "correta": false,
        "explicacao": "A dor ativa o sistema *simpático* (adrenalina), não o parassimpático (que causaria bradicardia). Além disso, a taquicardia ali é prioritariamente uma resposta à perda de volume de sangue, não apenas à dor."
      },
      {
        "id": "C",
        "texto": "A liberação maciça de catecolaminas (adrenalina) estreita fortemente os vasos periféricos (vasoconstrição), desviando o sangue da pele (deixando-a fria) para órgãos vitais e acelerando o coração para manter a pressão momentaneamente normal.",
        "correta": true,
        "explicacao": "Na Fase 1 e 2 do choque hipovolêmico (Compensado), a pressão arterial ainda não caiu porque o sistema nervoso simpático detecta a perda de sangue e libera adrenalina/noradrenalina. Isso 'espreme' as veias periféricas (causando pele fria/suada) e faz o coração bater mais rápido para compensar o baixo volume. Reconhecer isso antecipa o colapso iminente."
      },
      {
        "id": "D",
        "texto": "O baço libera todas as suas reservas imediatas de glóbulos brancos, o que engrossa substancialmente a viscosidade do sangue e exige que o coração bata muito mais rápido apenas para conseguir bombeá-lo pelas veias.",
        "correta": false,
        "explicacao": "O baço pode contrair-se levemente, mas a reserva humana não é suficiente para alterar drasticamente a viscosidade sanguínea a ponto de causar taquicardia por esforço de bombeamento; a taquicardia é cronotrópica pura por estímulo nervoso."
      }
    ]
  },
  {
    "id": 328,
    "pergunta": "Uma vítima de 40 anos sofreu queimaduras de 2º e 3º graus em 40% do corpo após a explosão de um botijão de gás. Ela está consciente, com as vias aéreas preservadas, mas queixa-se de sede extrema e implora por água. Por que os protocolos avançados de APH contraindicam rigorosamente a hidratação via oral (dar água para beber) na fase aguda do grande queimado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A água ingerida dilui rapidamente o sódio remanescente no sangue, causando uma hiponatremia letal que leva a convulsões e edema cerebral em poucos minutos.",
        "correta": false,
        "explicacao": "A hiponatremia aguda por ingestão de água é rara nesse intervalo curto. O grande risco imediato é gastrointestinal e hemodinâmico."
      },
      {
        "id": "B",
        "texto": "A queimadura extensa causa extravasamento capilar sistêmico (choque hipovolêmico) e o corpo desvia o sangue dos órgãos não vitais. Isso gera um 'íleo paralítico' (parada do estômago e intestino). A água ficará acumulada, provocando vômitos e broncoaspiração fatal.",
        "correta": true,
        "explicacao": "No grande queimado, o choque distributivo/hipovolêmico desliga o sistema digestivo. Tudo o que for ingerido via oral não será absorvido, acumulando-se no estômago paralisado, o que invariavelmente resulta em vômito. Em uma vítima deitada, isso causa aspiração para os pulmões."
      },
      {
        "id": "C",
        "texto": "O corpo na fase aguda de queimadura necessita exclusivamente de proteínas sintéticas para reconstruir a derme, sendo a água um bloqueador da cascata de coagulação da escara.",
        "correta": false,
        "explicacao": "A reposição volêmica é, na verdade, a principal intervenção no grande queimado (Fórmula de Parkland), mas deve ser feita por via intravenosa, e não oral."
      },
      {
        "id": "D",
        "texto": "A água reage endotermicamente com as proteínas desnaturadas pelo calor que circulam no sangue, criando um subproduto tóxico que sobrecarrega os rins.",
        "correta": false,
        "explicacao": "Não existe essa reação química endotérmica com proteínas no sangue. O dano renal na queimadura ocorre pela mioglobina (se houver dano muscular profundo) e pela falta de perfusão (choque), não por reação com água ingerida."
      }
    ]
  },
  {
    "id": 329,
    "pergunta": "Um morador de rua é encontrado inconsciente em uma madrugada de inverno rigoroso. Ele apresenta pulso muito lento (30 bpm), respiração superficial e pele gelada (hipotermia severa). Um leigo bem-intencionado sugere esfregar vigorosamente os braços e pernas da vítima para 'esquentar o sangue'. Qual o perigo fisiológico mortal dessa manobra?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A fricção destrói mecanicamente os capilares subcutâneos que estão congelados e quebradiços, causando gangrena gasosa instantânea e necrose da pele.",
        "correta": false,
        "explicacao": "Embora tecidos congelados (frostbite) não devam ser esfregados para evitar dano celular local, a gangrena não é instantânea. O risco iminente de morte por fricção em hipotermia sistêmica é cardíaco."
      },
      {
        "id": "B",
        "texto": "Esfregar ou massagear os membros causa vasodilatação periférica. Isso empurra o sangue estagnado, extremamente frio e rico em ácido lático das extremidades de volta para o centro do corpo, atingindo o coração e desencadeando Fibrilação Ventricular (choque de reaquecimento).",
        "correta": true,
        "explicacao": "O sangue nos braços e pernas de um hipotérmico está muito frio, ácido e cheio de toxinas metabólicas. Se os membros são movimentados ou esfregados bruscamente (ou reaquecidos antes do tronco), essa massa de sangue tóxico e gelado volta para o coração de uma vez ('Afterdrop'), causando arritmias letais quase imediatas."
      },
      {
        "id": "C",
        "texto": "O aquecimento pelo atrito descongela o plasma muito mais rápido que os glóbulos vermelhos, causando a separação do sangue e embolia gordurosa massiva nos pulmões.",
        "correta": false,
        "explicacao": "O sangue não se separa dessa forma por causa de fricção na pele, e embolia gordurosa é complicação de fraturas de ossos longos, não de reaquecimento."
      },
      {
        "id": "D",
        "texto": "A massagem remove bruscamente a camada de gordura e suor endurecido que isolava o corpo, expondo os poros ao vento frio e causando um choque térmico anafilático.",
        "correta": false,
        "explicacao": "Choque térmico anafilático por exposição dos poros é uma invenção. O risco principal de manipulação brusca em hipotermia é a irritabilidade do miocárdio, levando à parada cardíaca."
      }
    ]
  },
  {
    "id": 330,
    "pergunta": "Durante um desabamento, as pernas de um operário ficam prensadas sob uma viga de concreto por 4 horas. Ele está consciente e seus sinais vitais estão estáveis enquanto ele está preso. A equipe de resgate se prepara para içar a viga. Qual é a complicação fisiopatológica (Síndrome de Esmagamento) que deve ser antecipada pelas equipes médicas no EXATO momento da descompressão?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Uma crise hipertensiva fulminante, pois a dor da liberação dos membros forçará o cérebro a liberar uma carga letal de noradrenalina, rompendo vasos cerebrais.",
        "correta": false,
        "explicacao": "A liberação da compressão geralmente causa hipotensão profunda (queda de pressão) porque o sangue corre para preencher os vasos dilatados do membro esmagado, não hipertensão."
      },
      {
        "id": "B",
        "texto": "O músculo esmagado, ao ser liberado, despeja imediatamente potássio, mioglobina e ácido lático na circulação sistêmica. Isso pode causar parada cardíaca imediata por hipercalemia e falência renal aguda.",
        "correta": true,
        "explicacao": "A Síndrome do Esmagamento (Rabdomiólise traumática) ocorre porque as células musculares mortas rompem-se, vazando seu conteúdo tóxico (especialmente o potássio, que é letal para o ritmo do coração, e mioglobina, que entope os rins). Enquanto a viga aperta o membro, o veneno fica retido. Ao levantar a viga, a circulação é restaurada e a toxina lava o corpo. Protocolos médicos exigem hidratação intensa, alcalinização e, às vezes, torniquetes *antes* da descompressão."
      },
      {
        "id": "C",
        "texto": "A formação instantânea de múltiplos trombos nos membros inferiores, que se desprendem e viajam para o cérebro causando Acidente Vascular Cerebral Isquêmico agudo.",
        "correta": false,
        "explicacao": "Embora a estase sanguínea possa favorecer trombos, a causa de morte súbita em segundos/minutos após a liberação em esmagamento prolongado é a hipercalemia (excesso de potássio desorganizando a parte elétrica do coração)."
      },
      {
        "id": "D",
        "texto": "O ar entrando rapidamente nos ossos fraturados e expostos criará um vácuo interno, gerando uma embolia gasosa que asfixiará o paciente silenciosamente.",
        "correta": false,
        "explicacao": "Ossos fraturados não aspiram ar do ambiente para criar embolias gasosas letais após a retirada de compressão. A embolia gasosa ocorre mais em traumas pulmonares barotraumáticos ou ferimentos cervicais venosos."
      }
    ]
  },
  {
    "id": 331,
    "pergunta": "Um marceneiro sofre amputação total dos dedos indicador e médio em uma serra circular. O socorrista leigo recolhe os dedos decepados, coloca-os diretamente sobre pedras de gelo dentro de uma caixa térmica e corre para o hospital. Pela fisiologia do reimplante, por que colocar a parte amputada DIRETAMENTE no gelo é um erro grave?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O gelo inibe completamente o processo natural de coagulação dos vasos seccionados na parte amputada, fazendo com que ela continue vazando plasma até secar.",
        "correta": false,
        "explicacao": "A parte amputada não tem pressão arterial bombeando sangue para 'sangrar até secar'. O problema do gelo é térmico/celular."
      },
      {
        "id": "B",
        "texto": "A temperatura extremante baixa e o contato direto com a água do gelo causam queimadura térmica (frostbite) e destruição por cristais de gelo nas células dos microvasos e nervos, inviabilizando cirurgicamente o reimplante.",
        "correta": true,
        "explicacao": "O resfriamento ajuda a diminuir o metabolismo do tecido amputado, preservando-o, mas o congelamento direto destrói as células (a água dentro da célula vira cristal de gelo e rompe a membrana). O correto é embrulhar a parte em gaze limpa e levemente úmida, colocar em um saco plástico vedado, e colocar *esse saco* em um recipiente com água e gelo."
      },
      {
        "id": "C",
        "texto": "A umidade da pedra de gelo age por osmose, sugando a medula óssea das falanges expostas, deixando o osso oco e impossível de ser pinado ortopedicamente.",
        "correta": false,
        "explicacao": "A medula óssea não é drenada por osmose por gelo. A falha no reimplante por mau transporte deve-se à necrose tecidual e inviabilidade vascular."
      },
      {
        "id": "D",
        "texto": "O resfriamento direto causa uma dilatação anormal das veias do dedo, fazendo com que inchem a ponto de não caberem mais na matriz vascular da mão durante a cirurgia.",
        "correta": false,
        "explicacao": "O frio causa vasoconstrição extrema (encolhimento dos vasos), não vasodilatação. O dano que inviabiliza a cirurgia é a ruptura da parede celular das estruturas microscópicas que precisam ser suturadas."
      }
    ]
  },
  {
    "id": 332,
    "pergunta": "Um ciclista cai de um barranco e tem uma barra de ferro transfixando seu abdômen. Ele está acordado e sentindo muita dor, pedindo para que arranquem a barra. Pelo protocolo de trauma pré-hospitalar, por que a regra de ouro é NUNCA remover um objeto empalado?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O objeto atua como um 'tampão' mecânico. Ele pode ter perfurado grandes vasos, mas a sua própria presença exerce pressão sobre a ferida interna. Removê-lo libera a pressão e causa hemorragia interna maciça instantânea e incontrolável.",
        "correta": true,
        "explicacao": "O efeito tamponamento é a principal razão. O objeto empalado está estancando, em grande parte, o sangramento que ele mesmo causou. Se for retirado fora de um centro cirúrgico preparado, o paciente sangrará até a morte em questão de minutos. O objeto só deve ser estabilizado onde está."
      },
      {
        "id": "B",
        "texto": "O metal do objeto está esterilizado pelo atrito da entrada. Retirá-lo arrastaria as bactérias do ar ambiente para dentro do peritônio, causando sepse fulminante antes de chegar ao hospital.",
        "correta": false,
        "explicacao": "A barra de ferro já está contaminada, o perigo de morte em minutos não é infeccioso (sepse demora horas ou dias), mas sim puramente mecânico (choque hemorrágico)."
      },
      {
        "id": "C",
        "texto": "A barra metálica atua como um condutor aterrando o paciente. Retirá-la geraria uma carga estática que poderia despolarizar as células do coração, causando parada cardíaca.",
        "correta": false,
        "explicacao": "O aterramento estático não tem qualquer relevância em traumas mecânicos empalados. A justificativa é hemodinâmica."
      },
      {
        "id": "D",
        "texto": "Ao ser puxado, a ponta do objeto criará um vácuo na cavidade abdominal (efeito êmbolo), arrancando os intestinos para o lado de fora através da pele (evisceração por pressão negativa).",
        "correta": false,
        "explicacao": "Não existe vácuo forte o suficiente no abdômen para ejetar as vísceras pela mera remoção de uma barra. O problema real e letal é a artéria ou veia cortada que voltará a jorrar sangue."
      }
    ]
  },
  {
    "id": 333,
    "pergunta": "Uma idosa de 82 anos sofre uma queda de própria altura e apresenta sinais de fratura pélvica grave, com suspeita de hemorragia interna extensa. Curiosamente, durante a triagem, o socorrista nota que a frequência cardíaca dela está normal (70 bpm), sem a taquicardia clássica de um choque hipovolêmico compensado. Qual é a principal explicação farmacológica para a ausência desse sinal vital de alerta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O uso crônico de anticoagulantes, que afinam o sangue a ponto de não estimularem os receptores de volume nas artérias.",
        "correta": false,
        "explicacao": "Anticoagulantes pioram o sangramento porque impedem a coagulação, mas não têm efeito bloqueador sobre a frequência cardíaca (cronotropismo)."
      },
      {
        "id": "B",
        "texto": "A ingestão diária de estatinas (remédios para colesterol), que tornam a parede das artérias excessivamente rígidas, impedindo que o coração consiga bater mais rápido contra a resistência.",
        "correta": false,
        "explicacao": "Estatinas reduzem placas de gordura a longo prazo, não imobilizam as artérias nem bloqueiam os impulsos elétricos cardíacos gerados pela adrenalina."
      },
      {
        "id": "C",
        "texto": "O uso de medicamentos Betabloqueadores (como propranolol, atenolol) para controle de hipertensão, que bloqueiam quimicamente a ação da adrenalina no coração, impedindo o aumento compensatório da frequência cardíaca.",
        "correta": true,
        "explicacao": "O trauma geriátrico é extremamente traiçoeiro porque muitos idosos tomam betabloqueadores. Esses medicamentos bloqueiam os receptores beta-1 no coração. Assim, mesmo que o cérebro libere adrenalina desesperadamente por causa do sangramento, o coração não consegue acelerar para compensar. A vítima entra em choque profundo com uma falsa aparência de pulso 'tranquilo'."
      },
      {
        "id": "D",
        "texto": "A utilização de analgésicos opioides para artrite, que anestesiam o cérebro, impedindo-o de perceber que há sangue faltando no corpo.",
        "correta": false,
        "explicacao": "Os sensores de pressão (barorreceptores) não dependem da percepção consciente da dor para atuar. O problema está na ação do coração sob bloqueio medicamentoso específico do sistema simpático."
      }
    ]
  },
  {
    "id": 334,
    "pergunta": "Uma vítima foi esfaqueada no tórax e apresenta um ferimento que emite um som de sucção a cada respiração (Pneumotórax Aberto). Um socorrista leigo pega um quadrado de plástico limpo, cobre o ferimento e prende com fita adesiva firmemente pelos quatro lados, selando totalmente o buraco. Qual a consequência letal dessa ação equivocada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O curativo oclusivo total aumenta o calor na ferida, acelerando o metabolismo das bactérias do objeto agressor e gerando necrose local antes da chegada ao hospital.",
        "correta": false,
        "explicacao": "Infecção é uma preocupação secundária a longo prazo. O erro técnico afeta imediatamente a mecânica respiratória, não a proliferação bacteriana."
      },
      {
        "id": "B",
        "texto": "Ao selar totalmente o buraco, o ar que continua escapando do pulmão lesionado não tem por onde sair. Ele se acumula sob pressão dentro do peito, convertendo um pneumotórax aberto em um Pneumotórax Hipertensivo letal (choque obstrutivo).",
        "correta": true,
        "explicacao": "A correção improvisada para feridas torácicas aspirantes é o Curativo de Três Pontas (válvula de flutter). Ao colar os 4 lados, cria-se uma armadilha. O ar vaza do pulmão ferido para o espaço pleural (dentro do peito), mas como o buraco externo está tapado, a pressão sobe sem controle, esmagando o coração e matando a vítima rapidamente."
      },
      {
        "id": "C",
        "texto": "A fita adesiva, ao colar nos quatro cantos, restringe o movimento de expansão das costelas, paralisando os músculos intercostais de ambos os lados e causando apneia mecânica.",
        "correta": false,
        "explicacao": "Um pequeno pedaço de plástico com fita não tem força física para impedir a expansão das costelas como uma armadura rígida. O problema é interno (pressão intratorácica do ar)."
      },
      {
        "id": "D",
        "texto": "O selamento impede que o sangue escoe. O sangue vai preencher rapidamente o espaço pleural, causando um Hemotórax Massivo restrito que afoga a vítima internamente.",
        "correta": false,
        "explicacao": "Embora o sangramento ocorra, o perigo iminente em selar feridas 'aspirantes' (que sugam e assobiam) é o acúmulo de ar pressurizado (Pneumotórax Hipertensivo), que é muito mais rápido e letal que o acúmulo de sangue nessa mecânica específica."
      }
    ]
  },
  {
    "id": 335,
    "pergunta": "Um jovem é encontrado desmaiado em um banheiro. Ele apresenta a clássica 'tríade opioide': inconsciência, pupilas puntiformes (miose severa) e depressão respiratória crítica (apenas 4 incursões por minuto). Antes do antídoto (Naloxona/Narcan) chegar, qual é a prioridade absoluta de Suporte Básico de Vida baseada na fisiopatologia da morte por opioides?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar compressões torácicas vigorosas sem interrupção, pois o opioide é primariamente cardiotóxico e induz o coração a espasmos fulminantes antes mesmo da parada respiratória.",
        "correta": false,
        "explicacao": "Opioides de abuso (como heroína ou fentanil) não matam o coração primeiro por toxicidade direta. Eles matam o cérebro desligando o centro da respiração."
      },
      {
        "id": "B",
        "texto": "Fornecer ventilações de resgate (respiração artificial com dispositivo de barreira/bolsa-válvula-máscara) imediatamente. A morte na overdose de opioides ocorre por hipóxia severa (falta de oxigênio pela parada respiratória central), não por falha direta do coração.",
        "correta": true,
        "explicacao": "As drogas opioides inibem o centro respiratório no tronco cerebral. A pessoa para de respirar, o oxigênio cai e só então o coração para por asfixia secundária. Ventilar o paciente fornece o oxigênio necessário para manter o cérebro e o coração vivos enquanto o antídoto medicamentoso não é administrado."
      },
      {
        "id": "C",
        "texto": "Oferecer estímulo doloroso contínuo (esfregar o esterno) para manter a vítima acordada, uma vez que a ventilação artificial empurraria o vapor residual da droga para as bases pulmonares.",
        "correta": false,
        "explicacao": "Se o paciente está respirando 4 vezes por minuto e profundamente inconsciente, o estímulo doloroso já não é suficiente. Ele precisa de suporte ventilatório mecânico (A e B do protocolo). Droga injetada ou inalada já está na corrente sanguínea, não há 'vapor residual' sendo empurrado."
      },
      {
        "id": "D",
        "texto": "Elevar os membros inferiores e iniciar hidratação via oral à força, pois a hipovolemia por sudorese induzida pelo opioide causa o rebaixamento de consciência e o fechamento pupilar.",
        "correta": false,
        "explicacao": "Vítimas de overdose de opioides estão profundamente inconscientes; dar líquidos via oral causará aspiração garantida e morte. Além disso, a causa do rebaixamento é toxicológica neurológica, não hipovolêmica."
      }
    ]
  },
  {
    "id": 336,
    "pergunta": "Um mecânico sofreu um respingo direto de ácido de bateria (substância química altamente corrosiva) no olho direito e instintivamente o mantém firmemente fechado de dor. Qual é a conduta pré-hospitalar prioritária para tentar salvar a visão do paciente, embasada na reação química tecidual?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manter o olho fechado para privar o ácido de oxigênio ambiente, impedindo a reação química, e vendar ambos os olhos até a chegada ao especialista.",
        "correta": false,
        "explicacao": "A reação de ácidos e álcalis com a córnea não depende de oxigênio ambiente para acontecer. Manter o olho fechado aprisiona a substância contra a superfície ocular, acelerando a queimação e aprofundando a lesão."
      },
      {
        "id": "B",
        "texto": "Pingar imediatamente um colírio alcalino (base) ou solução de bicarbonato para neutralizar o pH ácido dentro do olho, anulando quimicamente o corrosivo.",
        "correta": false,
        "explicacao": "Nunca se faz neutralização química no APH ocular. A reação entre ácido e base libera enorme quantidade de energia térmica (calor), que ferveria a lágrima e causaria uma queimadura térmica além da química."
      },
      {
        "id": "C",
        "texto": "Forçar a abertura das pálpebras, mesmo contra a resistência da dor, e irrigar o olho de forma contínua e abundante com água limpa ou soro fisiológico por no mínimo 20 minutos.",
        "correta": true,
        "explicacao": "O contato químico oftalmológico (especialmente bases e ácidos fortes) destrói a córnea enquanto estiver presente. A única forma de interromper o dano é diluir e remover o agente através de irrigação volumosa e contínua. Para isso, o socorrista deve usar os dedos enluvados para manter as pálpebras afastadas enquanto joga água."
      },
      {
        "id": "D",
        "texto": "Secar imediatamente a superfície ocular com gazes estéreis para absorver o ácido puro antes que ele se misture com a lágrima e se espalhe para o ducto lacrimal.",
        "correta": false,
        "explicacao": "Esfregar ou tocar a córnea química e fisicamente injuriada com gaze vai arrancar o epitélio de forma mecânica irreversível. A remoção deve ser unicamente por fluxo de fluidos (irrigação)."
      }
    ]
  },
  {
    "id": 337,
    "pergunta": "Uma gestante no 3º trimestre (oito meses) sofre um acidente de carro e é estabilizada em uma prancha rígida totalmente reta (decúbito dorsal plano). Em poucos minutos, ela empalidece, fica tonta e a pressão arterial despenca. Considerando o contexto obstétrico e fisiológico, qual a causa do choque e qual a ação para revertê-lo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Choque medular tardio: o bebê bateu contra a coluna da mãe, desligando o sistema simpático. A prancha deve ser removida imediatamente para relaxar a lordose lombar.",
        "correta": false,
        "explicacao": "Embora o trauma na coluna seja sempre uma preocupação, a queda de pressão abrupta ao deitar uma gestante reta tem uma explicação anatômica compressiva muito mais comum e imediata."
      },
      {
        "id": "B",
        "texto": "Embolia por fluido amniótico: o impacto injetou líquido na circulação materna. A conduta é elevar as pernas em posição de Trendelenburg para empurrar o êmbolo para fora do cérebro.",
        "correta": false,
        "explicacao": "A embolia amniótica é uma tragédia grave, mas rara. Além disso, a posição de Trendelenburg não a resolve, e a piora da paciente ocorreu explicitamente após ser colocada deitada de barriga para cima."
      },
      {
        "id": "C",
        "texto": "Síndrome Hipotensiva Supina: o peso do útero grávido esmaga a Veia Cava Inferior contra a coluna vertebral, impedindo que o sangue volte das pernas para o coração. A prancha deve ser inclinada, elevando o lado direito em cerca de 15 a 30 graus.",
        "correta": true,
        "explicacao": "A veia cava inferior passa do lado direito da coluna. Ao deitar uma grávida de barriga para cima, o peso do bebê bloqueia esse tubo venoso macio. O coração fica sem receber sangue e a pressão da mãe despenca. Inclinar a mulher inteira (junto com a prancha) para a esquerda (elevando o lado direito) tira o peso do útero de cima da veia, restaurando a circulação instantaneamente."
      },
      {
        "id": "D",
        "texto": "Síndrome de Exaustão Glicêmica: o metabolismo acelerado do feto consome todo o açúcar do sangue da mãe em estresse. A conduta é esfregar glicose ou açúcar debaixo da língua da mãe, mesmo deitada.",
        "correta": false,
        "explicacao": "A tontura e palidez abrupta descritas relacionam-se ao bloqueio mecânico do retorno venoso induzido pela postura, uma das reações circulatórias mais clássicas da fisiopatologia do trauma na gestante."
      }
    ]
  },
{
"id": 338,
"pergunta": "Um trabalhador da construção civil sofre uma queda de aproximadamente 4 metros de altura (cinemática de trauma grave). Ao ser avaliado por um socorrista leigo treinado, a vítima queixa-se de dor intensa no abdômen e na pelve, apresentando pulso acelerado, pele pálida e fria, mas sem qualquer sinal de sangramento externo. Baseado na fisiopatologia do trauma, qual a principal suspeita clínica e a conduta recomendada?",
"alternativas": [
{
"id": "A",
"texto": "Deve-se realizar curativos compressivos ao redor do tórax e da bacia, exercendo pressão indireta para tamponar a hemorragia interna antes de acionar o socorro especializado.",
"correta": false,
"explicacao": "Não existe procedimento de curativo compressivo externo que tampone adequadamente hemorragia interna nessas cavidades. O foco deve ser o transporte rápido."
},
{
"id": "B",
"texto": "Há forte suspeita de hemorragia interna severa (choque hipovolêmico em evolução), devendo o socorrista priorizar a imobilização total, evitar movimentação desnecessária e acionar rapidamente os serviços de emergência (192 ou 193) para transporte célere.",
"correta": true,
"explicacao": "As cavidades abdominal e pélvica podem abrigar volumes massivos de sangue. Sinais de choque sem sangramento visível indicam hemorragia interna, exigindo acionamento rápido e transporte urgente para centro cirúrgico."
},
{
"id": "C",
"texto": "Oferecer água ou líquidos doces em pequenos goles para repor o volume de fluidos perdido internamente, visando manter a perfusão até a chegada da ambulância.",
"correta": false,
"explicacao": "Vítimas de trauma grave com suspeita de cirurgia iminente jamais devem ingerir líquidos devido ao risco de broncoaspiração e complicações anestésicas."
},
{
"id": "D",
"texto": "A ausência de sangramento externo descarta o risco de choque hipovolêmico. Os sinais como taquicardia e palidez refletem unicamente o estresse psicológico e a dor aguda provocada pela queda.",
"correta": false,
"explicacao": "O sangramento interno em áreas como abdômen e pelve (grandes compartimentos) é frequentemente invisível de fora, sendo uma das principais causas de choque hipovolêmico."
}
]
},
{
"id": 339,
"pergunta": "Durante a etapa de exposição e ambiente (fase E) da avaliação secundária, você identifica uma extensa queimadura em um funcionário de uma indústria química. O local da lesão apresenta coloração branca nacarada. O paciente encontra-se lúcido, relata dor nas bordas da ferida, mas afirma sentir surpreendente ausência de dor no centro branco da lesão. Como a fisiologia explica esse quadro de dor ausente?",
"alternativas": [
{
"id": "A",
"texto": "Trata-se de uma queimadura de segundo grau, na qual o intenso calor paralisou transitoriamente a condução nervosa térmica, gerando analgesia temporária sem danos estruturais.",
"correta": false,
"explicacao": "Queimaduras de segundo grau são marcadas por bolhas e dor extremamente intensa, e não pela ausência de dor em centro esbranquiçado."
},
{
"id": "B",
"texto": "Essa alteração ocorre devido ao estado de choque neurogênico secundário, no qual o fluxo sanguíneo é cortado de toda a periferia, paralisando todas as terminações nervosas do membro afetado.",
"correta": false,
"explicacao": "O choque neurogênico causa vasodilatação sistêmica por perda do tônus simpático (geralmente por lesão raquimedular), e não uma analgesia focal no centro de uma queimadura."
},
{
"id": "C",
"texto": "A ausência focal de dor indica que se trata de uma queimadura de primeiro grau, onde a rápida descamação da epiderme expõe as células mortas que não conduzem o sinal de dor.",
"correta": false,
"explicacao": "Queimadura de primeiro grau (epiderme apenas) apresenta eritema (vermelhidão) e bastante ardência/dor."
},
{
"id": "D",
"texto": "Trata-se de uma queimadura de terceiro grau, que penetrou profundamente comprometendo todas as camadas da pele, resultando na destruição física das terminações nervosas que captariam a sensação dolorosa no local.",
"correta": true,
"explicacao": "Queimaduras de terceiro grau destroem a epiderme, derme e hipoderme, calcinando as terminações nervosas sensoriais, o que justifica o aspecto esbranquiçado e a indoloridade na região central."
}
]
},
{
"id": 340,
"pergunta": "Em relação aos dilemas legais no atendimento pré-hospitalar, um indivíduo passa mal em uma via pública e cai ao solo, encontrando-se totalmente inconsciente e sem acompanhantes. Você decide intervir, mas não há como obter permissão da vítima. De acordo com os fundamentos do direito brasileiro no socorro de urgência, a sua atuação está resguardada por qual princípio ético-legal?",
"alternativas": [
{
"id": "A",
"texto": "Pelo princípio da beneficência irrestrita, que exige que o socorrista inicie manobras invasivas independentemente de capacitação, desde que não haja familiares no entorno.",
"correta": false,
"explicacao": "Manobras invasivas são vedadas a leigos, e o princípio não exige intervenção irrestrita se o socorrista não estiver seguro."
},
{
"id": "B",
"texto": "Pela ausência de dolo explícito, permitindo que qualquer lesão subsequente causada pelo atendimento incorreto seja automaticamente isenta de responsabilização civil.",
"correta": false,
"explicacao": "A ausência de dolo (intenção) não exime o socorrista de responder por imperícia, imprudência ou negligência no âmbito civil e penal."
},
{
"id": "C",
"texto": "Pelo consentimento implícito, pois presume-se legalmente que a vítima concordaria em receber assistência se estivesse lúcida, dada a situação de risco à vida ou invalidez.",
"correta": true,
"explicacao": "O consentimento implícito é a base legal que permite agir em pacientes inconscientes, confusos ou incapazes, presumindo que uma pessoa sensata desejaria que sua vida fosse salva."
},
{
"id": "D",
"texto": "Pelo princípio da recusa suprida, que determina que um juiz de direito deve ser contactado via telefone para emitir um mandado verbal antes do toque físico na vítima.",
"correta": false,
"explicacao": "Em emergências não há tempo para mandados judiciais; a lei autoriza a intervenção na figura do consentimento implícito sem necessidade burocrática."
}
]
},
{
"id": 341,
"pergunta": "Ao examinar o tórax e o dorso de uma vítima de colisão, você nota que o paciente, embora responsivo e orientado, relata incapacidade total de movimentar ambas as pernas e ausência de sensibilidade cutânea na região abdominal para baixo. Esse sinal neurológico sugere uma lesão de elevada suspeição clínica. Fisiologicamente, o que isso determina sobre o cuidado ao paciente no local?",
"alternativas": [
{
"id": "A",
"texto": "Sugere fraturas múltiplas da bacia com choque neurogênico secundário, exigindo a tração firme dos membros inferiores para restaurar o fluxo sanguíneo rapidamente.",
"correta": false,
"explicacao": "A tração de membros não trata choque neurogênico e fraturas de bacia não causam perda imediata de sensibilidade bilateral por compressão sistêmica, sendo o dano medular a causa clássica."
},
{
"id": "B",
"texto": "Indica uma forte suspeita de traumatismo grave na medula espinhal, reforçando que a vítima deve ser mantida absolutamente imóvel para prevenir danos neurológicos permanentes por secção secundária da medula.",
"correta": true,
"explicacao": "Perda bilateral de movimento e sensibilidade após trauma aponta para dano medular. Movimentar a vítima pode transformar uma lesão incompleta em secção total e paralisia permanente."
},
{
"id": "C",
"texto": "Trata-se de uma contratura muscular defensiva severa associada a síndrome de ansiedade, indicando que a elevação passiva das pernas em 45 graus fará o fluxo reativar a placa motora.",
"correta": false,
"explicacao": "Sinais de paralisia em trauma nunca devem ser menosprezados ou tratados como fator psicológico primário de proteção."
},
{
"id": "D",
"texto": "Determina que a vítima se encontra em um infarto agudo do miocárdio atípico induzido por estresse traumático, o qual interrompeu o bombeamento de sangue para os nervos ciáticos.",
"correta": false,
"explicacao": "A fisiopatologia descrita é de uma disfunção de transmissão nervosa oriunda da coluna, e não uma falha na bomba cardíaca (IAM)."
}
]
},
{
"id": 342,
"pergunta": "Em um episódio de primeiros socorros em ambiente esportivo escolar, um aluno sofre uma entorse de tornozelo grave, e outro estudante, treinado em emergências, oferece ajuda. O aluno lesionado, porém, grita expressamente recusando qualquer tipo de auxílio por parte do colega e proíbe a verificação do seu pulso. Frente às leis de omissão de socorro versus autonomia pessoal, como proceder eticamente e legalmente?",
"alternativas": [
{
"id": "A",
"texto": "O socorrista deve avaliar que a recusa provém da dor, devendo conter fisicamente o aluno até a aplicação de bandagem compressiva, visando a beneficência em detrimento da autonomia temporariamente abalada.",
"correta": false,
"explicacao": "Conter um paciente consciente, orientado e contra sua vontade configura crime de agressão e constrangimento ilegal, desrespeitando o direito à recusa."
},
{
"id": "B",
"texto": "Ignorar a recusa, pois a legislação do Art. 135 penaliza com multa ou prisão a falta de contato físico direto com a vítima quando se domina técnicas de APH, seja qual for a vontade dela.",
"correta": false,
"explicacao": "O crime de omissão de socorro descaracteriza-se quando a pessoa recusa ajuda expressamente; forçar atendimento em pessoas lúcidas é ilegal."
},
{
"id": "C",
"texto": "Respeitar inteiramente o direito à recusa, mantendo-se em vigilância, conversando e tentando convencer a vítima dos riscos da não imobilização, além de arrolar testemunhas e acionar o socorro profissional para respaldo jurídico.",
"correta": true,
"explicacao": "Pessoas lúcidas e conscientes têm direito garantido à autonomia corporal de recusar o atendimento. O procedimento padrão é acionar os bombeiros/SAMU, relatar riscos e buscar testemunhas da negativa."
},
{
"id": "D",
"texto": "Afastar-se totalmente do local e não registrar o fato, visto que qualquer recusa desobriga integralmente o indivíduo capacitado até mesmo da realização de uma ligação telefônica para o 192.",
"correta": false,
"explicacao": "Embora haja recusa da intervenção física, o socorrista deve registrar e manter vigilância ou informar autoridades, se julgar que a não assistência evoluirá para risco de vida futuro iminente."
}
]
},
{
"id": 343,
"pergunta": "Uma vítima é resgatada após passar três horas perdida em uma trilha de serra com temperatura ambiente de 4 graus Celsius. Ao examinar sinais secundários (pele), o socorrista constata palidez, calafrios severos e dificuldade cognitiva da vítima em responder perguntas simples. Com foco na termorregulação e fisiologia básica descrita em emergências ambientais, a alteração das funções vitais nesse quadro corresponde a:",
"alternativas": [
{
"id": "A",
"texto": "A um processo de desidratação isonatrêmica aguda em que o ar frio evapora rapidamente o sangue celular, resultando em retardo do fluxo sináptico.",
"correta": false,
"explicacao": "O mecanismo central da hipotermia em climas frios envolve a perda de calor superando a produção metabólica corpórea, e não uma rápida evaporação sanguínea extracelular."
},
{
"id": "B",
"texto": "Um processo de febre severa sistêmica, em que a vasoconstrição eleva a temperatura dos órgãos internos desativando temporariamente as glândulas sudoríparas.",
"correta": false,
"explicacao": "Febre (hipertermia) se contrapõe às baixas temperaturas. O cenário descreve claro e clássico quadro de estado térmico sub-normal (hipotermia severa)."
},
{
"id": "C",
"texto": "Ao quadro de insolação atípica com intermação secundária, devido à falta de barreira protetora contra o vento serrano somada à exaustão física prolongada.",
"correta": false,
"explicacao": "Insolação ocorre em exposição severa ao calor ou raios solares. Os sinais apontam fisiopatologicamente ao extremo oposto climático."
},
{
"id": "D",
"texto": "A uma diminuição substancial da temperatura corporal (abaixo do estado térmico normal de 36ºC), afetando as reações metabólicas sistêmicas, incluindo o retardo acentuado das funções neurológicas por exposição prolongada ao frio.",
"correta": true,
"explicacao": "Conforme o referencial, temperaturas reduzidas e exposição ao frio diminuem a temperatura corporal basal (abaixo de 36-34ºC), desacelerando funções vitais e gerando déficit na atividade metabólica e cognitiva (hipotermia)."
}
]
},
  {
    "id": 344,
    "pergunta": "Um brigadista depara-se com um adulto que sofreu uma queda grave e apresenta deformidade no membro inferior. A vítima está consciente, orientada e, alegando motivos religiosos, recusa peremptoriamente qualquer contato físico. Não há sangramento visível. Considerando os princípios éticos e legais, qual a conduta correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Explicar os riscos e, diante da recusa, imobilizar a perna à força para evitar choque neurogênico secundário ao trauma.",
        "correta": false,
        "explicacao": "O erro consiste em forçar o atendimento. Segundo as diretrizes, apenas oficiais de justiça podem coibir uma pessoa; forçar o atendimento configura violação de direitos e possível agressão."
      },
      {
        "id": "B",
        "texto": "Acionar o 192 (SAMU) ou 190 (Polícia Militar), vigiar a vítima sem tocá-la e buscar um diálogo focado na confiança.",
        "correta": true,
        "explicacao": "A diretriz estabelece que, diante da recusa consciente, o socorrista não deve impor contato, devendo acionar as autoridades, monitorar a cena e tentar o convencimento empático."
      },
      {
        "id": "C",
        "texto": "Respeitar a recusa afastando-se da cena imediatamente para não configurar constrangimento ilegal e isentar-se da omissão.",
        "correta": false,
        "explicacao": "O abandono da cena configura negligência e omissão de socorro. O correto é manter vigilância e garantir que o socorro especializado (192 ou 193) seja acionado."
      },
      {
        "id": "D",
        "texto": "Solicitar que testemunhas contenham a vítima fisicamente apenas até a chegada do resgate, visando resguardar a sua vida.",
        "correta": false,
        "explicacao": "A falha técnica está em promover a contenção física por terceiros. Qualquer intervenção física contra a vontade de vítima consciente e lúcida é ilegal no atendimento pré-hospitalar."
      }
    ]
  },
  {
    "id": 345,
    "pergunta": "Durante uma reforma, um trabalhador sofre um ferimento por um vergalhão metálico, que permanece encravado em seu antebraço. A vítima está pálida e com pulso radial acelerado, com sangramento ao redor do objeto. Como socorrista leigo, qual a técnica para controle desta hemorragia?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remover o vergalhão rapidamente num ângulo reto para não aumentar a lesão, aplicando em seguida pressão direta firme.",
        "correta": false,
        "explicacao": "O risco letal aqui é a hemorragia massiva. O objeto encravado atua como um tampão nos vasos lesionados; sua remoção causa sangramento incontrolável."
      },
      {
        "id": "B",
        "texto": "Realizar pressão direta sobre o próprio vergalhão para estancar o sangramento, fixando-o firmemente contra a estrutura óssea inferior.",
        "correta": false,
        "explicacao": "Pressionar diretamente o objeto encravado empurra-o ainda mais para o interior dos tecidos, agravando a lesão muscular, vascular e possivelmente óssea."
      },
      {
        "id": "C",
        "texto": "Expor a área lesionada, estabilizar o objeto encravado utilizando curativos ao seu redor e evitar movimentação até a chegada do 192.",
        "correta": true,
        "explicacao": "Conduta baseada em protocolo: objetos encravados não devem ser removidos. A estabilização com curativos volumosos ao redor do objeto previne a movimentação e controla a hemorragia."
      },
      {
        "id": "D",
        "texto": "Aplicar um torniquete improvisado três dedos acima do ferimento antes de tracionar o objeto metálico de forma lenta e segura.",
        "correta": false,
        "explicacao": "A falha está na remoção do objeto e no uso precipitado de torniquete improvisado, quando a prioridade inicial em ferimentos perfurantes é estabilizar o corpo estranho."
      }
    ]
  },
  {
    "id": 346,
    "pergunta": "Após um princípio de incêndio, uma vítima apresenta ausência de cílios, fuligem nas narinas e queimaduras no tórax com roupas aderidas. Ela demonstra forte confusão mental. Considerando a avaliação e intervenção inicial, qual a conduta prioritária e segura?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Puxar as roupas aderidas para avaliar a extensão da queimadura e aplicar pomada cicatrizante genérica antes de imobilizá-la no solo.",
        "correta": false,
        "explicacao": "É terminantemente contraindicado remover roupas grudadas na lesão ou aplicar pomadas, pois isso remove tecido viável e aumenta dramaticamente o risco de infecção."
      },
      {
        "id": "B",
        "texto": "Resfriar o tórax com água gelada em abundância para analgesia, remover a roupa solta e aguardar a melhora do estado cognitivo.",
        "correta": false,
        "explicacao": "O uso de água gelada ou gelo é proibido por causar rápida hipotermia e agravamento da lesão tecidual; a água deve ser limpa e em temperatura ambiente."
      },
      {
        "id": "C",
        "texto": "Suspeitar de comprometimento respiratório devido à fuligem, resfriar a área com água em temperatura ambiente, manter a roupa aderida e acionar 193.",
        "correta": true,
        "explicacao": "Sinais na face e fuligem indicam possível queimadura de vias aéreas (risco iminente à vida). O resfriamento usa água ambiente e roupas aderidas nunca são tracionadas."
      },
      {
        "id": "D",
        "texto": "Tratar primeiro as queimaduras do tórax cobrindo-as com curativos úmidos apertados e, em seguida, oferecer hidratação imediata via oral.",
        "correta": false,
        "explicacao": "Oferecer hidratação oral a uma vítima com confusão mental traz altíssimo risco de broncoaspiração, além de não abordar o risco respiratório evidenciado pela fuligem."
      }
    ]
  },
  {
    "id": 347,
    "pergunta": "Você é o primeiro a chegar a uma cena segura onde um indivíduo encontra-se inconsciente com amputação traumática na perna direita, apresentando sangramento arterial exsanguinante. Com base no protocolo XABCDE (NAEMT, 2023), qual é a sua ação inicial?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O manejo das vias aéreas (A) precede qualquer ação, pois a hipóxia cerebral leva ao óbito mais rápido que o choque vascular.",
        "correta": false,
        "explicacao": "O erro está na inversão da prioridade atual. O trauma com sangramento exsanguinante causa morte em minutos, antes mesmo da hipóxia por obstrução de via aérea se concretizar."
      },
      {
        "id": "B",
        "texto": "A contenção do sangramento externo grave (X) é a prioridade absoluta após a segurança da cena, antes mesmo da avaliação respiratória.",
        "correta": true,
        "explicacao": "O protocolo XABCDE moderno coloca a hemorragia exsanguinante (X) como a intervenção prioritária em ambientes com recursos limitados, para evitar a morte iminente por perda de volume."
      },
      {
        "id": "C",
        "texto": "A avaliação neurológica rápida (D) guiará o atendimento, visto que o estado inconsciente descarta dor limitante na estabilização de fraturas.",
        "correta": false,
        "explicacao": "A etapa neurológica (D) é tardia no protocolo. Realizá-la primeiro ignora a perda de sangue fatal que está ocorrendo e que gerou a inconsciência."
      },
      {
        "id": "D",
        "texto": "A elevação do membro amputado associada à ventilação de resgate imediata (B) assegura de imediato a oxigenação do sistema nervoso central.",
        "correta": false,
        "explicacao": "Focar na ventilação sem controlar o sangramento exsanguinante é ineficaz, pois o oxigênio administrado não terá glóbulos vermelhos (perdidos no sangramento) para ser transportado."
      }
    ]
  },
  {
    "id": 348,
    "pergunta": "Um bebê (lactente) de 8 meses engasga-se com uma peça de plástico. Ele apresenta cianose labial, ausência de choro e incapacidade de tossir, mas segue responsivo (OVACE grave). Qual a intervenção mecânica estritamente correta a ser realizada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Posicionar o lactente em decúbito dorsal plano e aplicar a Manobra de Heimlich com dois dedos logo acima da região umbilical.",
        "correta": false,
        "explicacao": "A Manobra de Heimlich (compressão subdiafragmática) não é indicada para lactentes devido ao alto risco de ruptura de órgãos internos, como fígado e baço."
      },
      {
        "id": "B",
        "texto": "Inspecionar a cavidade oral e realizar varredura às cegas com o dedo em gancho para tentar extrair o objeto obstrutor rapidamente.",
        "correta": false,
        "explicacao": "A varredura às cegas é proscrita pois pode empurrar o corpo estranho ainda mais profundamente na via aérea, convertendo uma obstrução parcial em total."
      },
      {
        "id": "C",
        "texto": "Posicionar o lactente em decúbito ventral, com a cabeça mais baixa, e aplicar até cinco golpes firmes nas costas, intercalados com compressões.",
        "correta": true,
        "explicacao": "A técnica protocolar para lactentes responsivos é a sequência de 5 golpes interescapulares nas costas seguida de 5 compressões torácicas, mantendo a cabeça levemente declinada."
      },
      {
        "id": "D",
        "texto": "Segurar a vítima exclusivamente pelas pernas, mantendo-a de cabeça para baixo, e sacudir vigorosamente visando a expulsão por pura ação gravitacional.",
        "correta": false,
        "explicacao": "Conduta popular perigosa que não gera pressão intratorácica suficiente para desobstrução e impõe risco extremo de lesão na coluna cervical e crânio do bebê."
      }
    ]
  },
  {
    "id": 349,
    "pergunta": "Em um acidente automobilístico durante forte tempestade, um carro atinge um poste e fios elétricos energizados caem sobre o veículo. Há ocupantes responsivos no interior. Observando a avaliação de cena e o Art. 135 do Código Penal, identifique o erro em tentar retirá-los imediatamente:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A tentativa direta sem isolar o local configura crime de imperícia, pois apenas bombeiros possuem permissão legal de tocar as portas do veículo.",
        "correta": false,
        "explicacao": "A falha primária não é uma proibição legal arbitrária de tocar o veículo, mas sim o desprezo pela própria segurança diante da eletricidade ativa."
      },
      {
        "id": "B",
        "texto": "Ao tentar o resgate sob risco iminente de choque elétrico letal, o socorrista viola a premissa da segurança da cena e torna-se nova vítima.",
        "correta": true,
        "explicacao": "A legislação e os protocolos isentam o indivíduo de ação direta quando há risco pessoal. A conduta correta é acionar o 193/190 e aguardar, descaracterizando a omissão."
      },
      {
        "id": "C",
        "texto": "O abandono do veículo pelas vítimas, instigado pelo socorrista sem treinamento, impede a confecção adequada do boletim de ocorrência de trânsito.",
        "correta": false,
        "explicacao": "A preocupação com registros policiais é irrelevante frente ao risco iminente de morte por choque elétrico na cena de emergência."
      },
      {
        "id": "D",
        "texto": "O leigo deixa de realizar a triagem inicial pelo método XABCDE, pulando a etapa vital de estabilização cervical dos ocupantes do veículo acidentado.",
        "correta": false,
        "explicacao": "Não se aplica avaliação clínica (XABCDE) antes de a cena estar completamente segura. Aproximar-se para avaliar os ocupantes causaria a eletrocussão do socorrista."
      }
    ]
  },
  {
    "id": 350,
    "pergunta": "Um indivíduo cai de um andaime. Durante a avaliação, você nota que a pele do seu abdome está pálida, fria e pegajosa, com pulso muito acelerado. O tempo de preenchimento capilar nas unhas ultrapassa os 3 segundos. Esse quadro sugere fortemente qual complicação fisiológica aguda?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Intermação ou choque térmico imediato, justificado pela alteração térmica cutânea e sudorese pegajosa que aprisiona todo o calor metabólico profundo.",
        "correta": false,
        "explicacao": "A intermação cursa tipicamente com pele quente e, geralmente, avermelhada. Pele fria, pálida e pegajosa após um trauma indica má perfusão sistêmica aguda."
      },
      {
        "id": "B",
        "texto": "Estado de choque, possivelmente hemorrágico, evidenciado pelo retardo no preenchimento capilar superior a 2 segundos e sinais clássicos de hipoperfusão periférica.",
        "correta": true,
        "explicacao": "Tempo capilar prolongado (> 2s), associado à taquicardia e pele pálida, fria e úmida, formam a tríade clássica do estado de choque, sinalizando falha circulatória grave."
      },
      {
        "id": "C",
        "texto": "Parada cardiorrespiratória de origem neurológica, uma vez que o tempo de perfusão prolongado reflete a total e imediata ausência de débito sistólico.",
        "correta": false,
        "explicacao": "A vítima não está em PCR, pois possui pulso radial perceptível, ainda que acelerado. Na parada cardíaca, o pulso estaria ausente."
      },
      {
        "id": "D",
        "texto": "Lesão irreversível na medula espinhal cervical, que causa constrição extrema e instantânea dos vasos superficiais, bloqueando o reflexo de preenchimento capilar.",
        "correta": false,
        "explicacao": "O choque neurogênico (lesão medular) tipicamente gera vasodilatação, resultando em pele quente e seca abaixo do nível da lesão, e não pálida e fria (choque hipovolêmico)."
      }
    ]
  },
  {
    "id": 351,
    "pergunta": "Você identifica uma parada cardiorrespiratória (PCR) em um adulto de grande porte. Ao iniciar as compressões torácicas, qual deve ser a técnica exata aplicada pelo socorrista leigo, de acordo com as diretrizes da AHA?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Posicionar as mãos no terço superior do osso esterno, comprimindo de 3 a 4 cm, a uma frequência de 80 a 100 por minuto.",
        "correta": false,
        "explicacao": "A profundidade de 3 a 4 cm é insuficiente para um adulto, e o terço superior do esterno não comprime adequadamente os ventrículos cardíacos."
      },
      {
        "id": "B",
        "texto": "Posicionar as mãos diretamente sobre o mamilo esquerdo, comprimindo no mínimo 6 cm, garantindo o esvaziamento total.",
        "correta": false,
        "explicacao": "Comprimir sobre o lado esquerdo do peito (sobre as costelas) não gera débito cardíaco eficaz e causa fraturas graves que podem perfurar o pulmão."
      },
      {
        "id": "C",
        "texto": "Posicionar as mãos no centro do peito (metade inferior do esterno), comprimindo no mínimo 5 cm, permitindo o retorno total do tórax.",
        "correta": true,
        "explicacao": "A técnica correta foca no centro do peito com profundidade de 5 a 6 cm e frequência de 100 a 120 compressões por minuto, permitindo o retorno venoso."
      },
      {
        "id": "D",
        "texto": "Posicionar as mãos no centro do abdome, logo abaixo das costelas, aplicando força para elevar o diafragma a cada compressão.",
        "correta": false,
        "explicacao": "Comprimir o abdome (manobra de Heimlich) é indicado apenas para desobstrução de vias aéreas, sendo inútil e lesivo em uma reanimação cardiopulmonar."
      }
    ]
  },
  {
    "id": 352,
    "pergunta": "Uma gestante no terceiro trimestre sofre uma convulsão tônico-clônica generalizada em via pública. Após cerca de dois minutos, os tremores cessam e ela fica inconsciente e com respiração ruidosa. Qual a melhor conduta situacional?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Manter a vítima em decúbito dorsal plano e tracionar a mandíbula com força para evitar a queda da base da língua.",
        "correta": false,
        "explicacao": "O decúbito dorsal no terceiro trimestre causa a compressão da veia cava inferior pelo útero, reduzindo o retorno venoso e agravando a hipóxia fetal e materna."
      },
      {
        "id": "B",
        "texto": "Inserir rapidamente um lenço ou objeto macio entre os dentes da vítima para impedir a laceração involuntária da língua.",
        "correta": false,
        "explicacao": "Nunca se deve introduzir objetos na boca de alguém convulsionando ou no período pós-ictal, devido ao alto risco de quebra de dentes e obstrução das vias aéreas."
      },
      {
        "id": "C",
        "texto": "Lateralizar a vítima imediatamente para o decúbito lateral esquerdo, facilitando a respiração e a circulação sanguínea.",
        "correta": true,
        "explicacao": "A posição lateral esquerda (PLS) previne a broncoaspiração de saliva/vômito e alivia a compressão da veia cava inferior, sendo a postura ideal para gestantes."
      },
      {
        "id": "D",
        "texto": "Realizar compressões torácicas imediatas de forma lenta, pois a respiração ruidosa indica parada respiratória iminente.",
        "correta": false,
        "explicacao": "A respiração ruidosa (estertorosa) é comum no período pós-ictal devido ao relaxamento muscular. Compressões torácicas em quem tem pulso são contraindicadas."
      }
    ]
  },
  {
    "id": 353,
    "pergunta": "Ao chegar em uma cena de acidente com motosserra, você observa que outro leigo aplicou um torniquete tático no braço da vítima, que apresentava sangramento exsanguinante. O torniquete está apertado e a hemorragia parou. O que constitui um erro grave a partir desse momento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Registrar com uma caneta ou marcador o horário exato da aplicação na fita do torniquete ou na testa do acidentado.",
        "correta": false,
        "explicacao": "Isso não é um erro. Anotar o horário é uma conduta protocolar obrigatória para guiar a equipe médica na avaliação da viabilidade do membro."
      },
      {
        "id": "B",
        "texto": "Deixar o torniquete exposto, sem cobri-lo com bandagens volumosas, permitindo que a equipe do 192 o visualize rapidamente.",
        "correta": false,
        "explicacao": "Isso não é um erro. Torniquetes nunca devem ser escondidos sob cobertores ou curativos, pois a equipe de resgate precisa identificá-los de imediato."
      },
      {
        "id": "C",
        "texto": "Arouxar a haste do torniquete por dez segundos a cada quinze minutos para garantir a oxigenação mínima do tecido distal.",
        "correta": true,
        "explicacao": "Afrouxar o torniquete é um erro crítico e letal. Isso destrói o coágulo recém-formado e libera toxinas acumuladas na corrente sanguínea (síndrome do esmagamento)."
      },
      {
        "id": "D",
        "texto": "Instalar um segundo torniquete logo acima do primeiro caso a hemorragia voltasse a se manifestar antes da chegada do resgate.",
        "correta": false,
        "explicacao": "Isso não é um erro. A aplicação de um segundo torniquete proximal é a conduta correta caso o primeiro falhe em conter o sangramento arterial."
      }
    ]
  },
  {
    "id": 354,
    "pergunta": "Uma criança de 3 anos (pré-escolar) é retirada inconsciente do fundo de uma piscina e evolui para parada cardiorrespiratória. Alguém traz um DEA (Desfibrilador Externo Automático) contendo apenas pás (eletrodos) do tamanho adulto. Qual a conduta correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Dobrar as pás adultas ao meio para reduzir a área de contato, ajustando a carga elétrica à superfície corporal da criança.",
        "correta": false,
        "explicacao": "Dobrar, cortar ou modificar as pás danifica os filamentos condutores e impede a leitura e a distribuição uniforme do choque elétrico."
      },
      {
        "id": "B",
        "texto": "Aplicar uma pá no centro do peito (anterior) e a outra pá no centro das costas (posterior), evitando que se toquem.",
        "correta": true,
        "explicacao": "O posicionamento anteroposterior é a técnica padrão quando pás pediátricas não estão disponíveis ou as pás adultas correm o risco de se tocar no tórax pequeno."
      },
      {
        "id": "C",
        "texto": "Posicionar ambas as pás no tórax anterior, permitindo que as bordas se sobreponham ligeiramente para garantir aderência.",
        "correta": false,
        "explicacao": "Pás que se tocam criam um arco elétrico sobre a pele, causando queimaduras severas e impedindo que a energia atravesse o miocárdio."
      },
      {
        "id": "D",
        "texto": "Abortar o uso do equipamento, pois o choque de um DEA adulto causará parada cardíaca irreversível em crianças pequenas.",
        "correta": false,
        "explicacao": "Um choque com dose adulta é preferível a nenhum choque em caso de ritmo chocável. A omissão do uso do DEA reduz a sobrevida drasticamente."
      }
    ]
  },
  {
    "id": 355,
    "pergunta": "Um homem com obesidade mórbida levanta-se abruptamente num restaurante, levando as mãos ao pescoço. Ele está cianótico e incapaz de tossir ou emitir sons (Obstrução de Vias Aéreas por Corpo Estranho grave). Ao tentar a manobra de Heimlich, o socorrista não consegue abraçar o abdome da vítima. Qual é a adaptação correta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Posicionar as mãos na metade inferior do osso esterno e realizar compressões torácicas firmes para trás e para baixo.",
        "correta": true,
        "explicacao": "Para pessoas obesas e gestantes no terço final, as compressões abdominais são substituídas por compressões torácicas, que comprimem os pulmões e geram pressão na via aérea."
      },
      {
        "id": "B",
        "texto": "Deitar a vítima no chão imediatamente e aplicar fortes pressões pélvicas bilaterais cruzadas para forçar a expiração.",
        "correta": false,
        "explicacao": "A compressão pélvica não altera a pressão intratorácica de forma significativa e a posição deitada dificulta a dinâmica respiratória sem compressões no local correto."
      },
      {
        "id": "C",
        "texto": "Golpear a região lombar inferior repetidas vezes com a palma da mão espalmada para estimular o reflexo vagal do vômito.",
        "correta": false,
        "explicacao": "Golpes na lombar são inúteis para vias aéreas. A técnica correta envolveria golpes entre as escápulas, associados a compressões torácicas adequadas."
      },
      {
        "id": "D",
        "texto": "Pedir a duas pessoas que comprimam simultaneamente o abdome da vítima usando as costas de uma cadeira como alavanca.",
        "correta": false,
        "explicacao": "Esta é uma manobra improvisada perigosa, sem base em protocolos (como a AHA 2020), que resultará em laceração hepática ou ruptura esplênica severa."
      }
    ]
  },  
  {
    "id": 356,
    "pergunta": "Um colega de trabalho diabético começa a suar frio, apresenta palidez acentuada, tremores finos nas mãos e confusão mental incipiente. Ele afirma não ter se alimentado. Sabendo que ele consegue engolir adequadamente, qual a resposta imediata em primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Procurar na bolsa da vítima a sua caneta de insulina e aplicar uma dose rápida ao redor do umbigo para estabilizar a glicose.",
        "correta": false,
        "explicacao": "Os sintomas indicam hipoglicemia aguda. Aplicar insulina reduzirá ainda mais a glicemia, precipitando coma hipoglicêmico letal em questão de minutos."
      },
      {
        "id": "B",
        "texto": "Fornecer uma refeição rica em proteínas e gorduras, como ovos e queijos, para que a elevação da glicemia seja lenta e controlada.",
        "correta": false,
        "explicacao": "Gorduras e proteínas retardam o esvaziamento gástrico. A vítima precisa de açúcar de absorção imediata, caso contrário o dano neurológico se instalará rapidamente."
      },
      {
        "id": "C",
        "texto": "Oferecer um copo com água diluída em três colheres de açúcar ou suco de frutas adoçado, reavaliando os sintomas em quinze minutos.",
        "correta": true,
        "explicacao": "A conduta padrão para hipoglicemia em vítima consciente é fornecer de 15 a 20 gramas de carboidrato de rápida absorção, monitorando a melhora neurológica."
      },
      {
        "id": "D",
        "texto": "Inserir uma bala dura ou cubo de açúcar debaixo da língua do colega, orientando-o a deitar-se de barriga para cima de olhos fechados.",
        "correta": false,
        "explicacao": "Balas duras representam altíssimo risco de engasgo (OVACE) em vítimas com confusão mental progressiva, devendo-se preferir líquidos ou sachês em gel."
      }
    ]
  },
  {
    "id": 357,
    "pergunta": "Durante o preparo do café, um recipiente com água fervente vira sobre a perna de um jovem, causando eritema extenso e bolhas. Um parente sugere aplicar pasta de dente e pedras de gelo diretamente sobre as feridas. Qual o equívoco fisiológico dessas práticas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O gelo derrete e causa choque elétrico se o piso estiver molhado, enquanto a pasta de dente hidrata excessivamente a epiderme.",
        "correta": false,
        "explicacao": "A explicação não tem embasamento clínico. O problema do gelo é a temperatura extrema que destrói células, não o risco elétrico na cena descrita."
      },
      {
        "id": "B",
        "texto": "O gelo provoca vasoconstrição e isquemia, aprofundando a necrose, enquanto a pasta atua como isolante térmico e carreia bactérias.",
        "correta": true,
        "explicacao": "Substâncias extremamente frias agravam a morte celular da área queimada. Produtos químicos caseiros abafam o calor residual no tecido e geram infecções severas."
      },
      {
        "id": "C",
        "texto": "A pasta de dente retira todo o cálcio da lesão tecidual, mas o gelo é a conduta universal recomendada para estancar o dano inflamatório.",
        "correta": false,
        "explicacao": "O gelo nunca é recomendado em queimaduras térmicas pelo risco de congelamento tecidual. A indicação protocolar é utilizar água corrente em temperatura ambiente."
      },
      {
        "id": "D",
        "texto": "Ambas as condutas são excelentes para o alívio da dor; o único erro fisiológico possível seria o de tentar estourar as bolhas precocemente.",
        "correta": false,
        "explicacao": "As condutas são totalmente proscritas. Afirmar que são excelentes contraria todas as diretrizes de primeiros socorros de instituições como a AHA ou a OMS."
      }
    ]
  },
  {
    "id": 358,
    "pergunta": "Você flagra o momento exato em que um jovem mergulha na parte rasa de uma piscina, chocando a cabeça contra o fundo. Ele emerge flutuando de bruços, inconsciente. Qual deve ser o fluxo de ação coordenado em primeiros socorros aquáticos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Tracionar a vítima pelos cabelos até a borda de forma acelerada para iniciar manobras abdominais visando a expulsão da água engolida.",
        "correta": false,
        "explicacao": "A tração abrupta agravará a lesão na coluna cervical decorrente do mergulho raso. Manobras abdominais para expulsar água de afogados são obsoletas e perigosas."
      },
      {
        "id": "B",
        "texto": "Aguardar o resgate especializado na borda da piscina, proibindo que qualquer leigo toque na vítima para garantir a preservação da coluna cervical.",
        "correta": false,
        "explicacao": "A vítima está de bruços e inconsciente na água. Aguardar o resgate sem intervir resultará em morte certa por asfixia decorrente da submersão (afogamento)."
      },
      {
        "id": "C",
        "texto": "Entrar na água com cuidado, estabilizar a cabeça e o pescoço da vítima no próprio eixo, virá-la de barriga para cima e checar a respiração.",
        "correta": true,
        "explicacao": "A cinemática indica alto risco de trauma raquimedular. A imobilização manual na água com rotação em bloco prioriza a liberação das vias aéreas com menor dano espinhal possível."
      },
      {
        "id": "D",
        "texto": "Puxar a vítima pelos braços até a calçada seca, colocá-la sentada e instigar o vômito batendo repetidamente entre suas omoplatas.",
        "correta": false,
        "explicacao": "Movimentar a vítima pelos braços descarta o alinhamento cervical, e colocar uma vítima inconsciente sentada gera ocluso de via aérea e risco extremo de aspiração de vômito."
      }
    ]
  }
  {
    "id": 359,
    "pergunta": "Durante uma trilha ecológica, um adulto é picado na panturrilha por uma serpente peçonhenta (jararaca). Ele apresenta dor intensa, inchaço rápido no local e nervosismo extremo. Ao iniciar os primeiros socorros, qual é a conduta técnica correta aplicável a leigos?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Realizar um garroteamento leve (torniquete venoso) logo acima do joelho para retardar a absorção sistêmica do veneno até a chegada ao hospital.",
        "correta": false,
        "explicacao": "Torniquetes ou garrotes em picadas de cobras peçonhentas no Brasil agravam severamente a necrose local e são absolutamente contraindicados pelos protocolos oficiais."
      },
      {
        "id": "B",
        "texto": "Fazer uma pequena incisão no local das presas e realizar sucção mecânica ou bucal para extrair o máximo de veneno nos primeiros minutos.",
        "correta": false,
        "explicacao": "Cortes e sucção não removem veneno clinicamente relevante, além de introduzirem bactérias e aumentarem drasticamente o risco de infecção secundária e hemorragia."
      },
      {
        "id": "C",
        "texto": "Lavar o local com água e sabão, manter o membro picado em posição neutra de repouso, tranquilizar a vítima e buscar socorro ou acionar o 192.",
        "correta": true,
        "explicacao": "A conduta padrão visa não agravar a lesão. Lavar o local previne infecções, e a posição neutra associada ao repouso retarda o metabolismo sem causar isquemia tecidual."
      },
      {
        "id": "D",
        "texto": "Oferecer bebida alcoólica para promover vasodilatação e analgesia periférica, seguida da aplicação de compressas de gelo diretamente sobre a picada.",
        "correta": false,
        "explicacao": "O uso de álcool mascara sintomas sistêmicos, e a aplicação de gelo piora a isquemia local gerada pelo veneno proteolítico, acelerando a destruição e perda do membro."
      }
    ]
  },
  {
    "id": 360,
    "pergunta": "Em uma escola, uma criança apresenta epistaxe (sangramento nasal) espontânea e abundante. Um professor prontamente orienta o aluno a inclinar a cabeça totalmente para trás e aplica um chumaço de algodão seco nas narinas. Qual é a falha técnica primária nessa conduta de primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O erro consiste em usar algodão seco, pois o protocolo exige a inserção de gaze embebida em água oxigenada profundamente na cavidade nasal.",
        "correta": false,
        "explicacao": "Leigos nunca devem introduzir objetos profundamente na cavidade nasal, independentemente do líquido, devido ao alto risco de lesão grave da mucosa e aspiração."
      },
      {
        "id": "B",
        "texto": "O equívoco está em não comprimir a base óssea do nariz simultaneamente à extensão do pescoço para garantir a total hemostasia do plexo venoso.",
        "correta": false,
        "explicacao": "A compressão deve ser feita nas asas do nariz (parte cartilaginosa mole), não na base óssea superior. Ademais, a extensão do pescoço continua sendo um erro grave."
      },
      {
        "id": "C",
        "texto": "A inclinação da cabeça para trás faz com que o sangue drene para a garganta e estômago, causando risco de engasgo, náuseas e asfixia.",
        "correta": true,
        "explicacao": "A técnica mundialmente correta para epistaxe é sentar a vítima, inclinar a cabeça levemente para a frente e comprimir as narinas (parte mole) continuamente por 10 minutos."
      },
      {
        "id": "D",
        "texto": "A falha é não deitar a criança imediatamente em decúbito dorsal plano, o que garantiria a estabilização da pressão arterial cerebral durante a perda sanguínea.",
        "correta": false,
        "explicacao": "Deitar uma vítima com sangramento nasal ativo direciona o sangue em grande volume para as vias aéreas e digestivas, aumentando severamente o risco de vômito induzido e broncoaspiração."
      }
    ]
  },
  {
    "id": 361,
    "pergunta": "Ao chegar ao local de um atropelamento, um socorrista leigo depara-se com uma vítima letárgica e confusa. Imediatamente, ele avalia a reatividade das pupilas e o nível de consciência na tentativa de identificar um traumatismo cranioencefálico, antes de verificar outras lesões. À luz do protocolo XABCDE, qual é a falha técnica desta conduta inicial?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O protocolo exige que a avaliação neurológica (D) seja realizada por médicos; o leigo deve apenas administrar oxigênio suplementar de imediato.",
        "correta": false,
        "explicacao": "A administração de oxigênio suplementar transcende as funções de um leigo e a avaliação não está restrita a médicos, sendo o erro real a inversão de prioridades vitais."
      },
      {
        "id": "B",
        "texto": "Avaliar o estado neurológico (D) antes de procurar e controlar hemorragias exsanguinantes (X) e garantir a via aérea (A) ignora o risco iminente de choque.",
        "correta": true,
        "explicacao": "A inclusão da letra X destaca a prioridade absoluta de controlar hemorragias externas graves logo após a segurança da cena, antes mesmo da avaliação das vias aéreas e do estado neurológico."
      },
      {
        "id": "C",
        "texto": "A falha consiste em não ter iniciado as compressões torácicas contínuas, visto que a letargia indica invariavelmente uma parada cardiorrespiratória oculta.",
        "correta": false,
        "explicacao": "A letargia indica alteração do estado de consciência, mas não atesta uma parada cardiorrespiratória (que se caracteriza pela ausência de respiração e de pulso)."
      },
      {
        "id": "D",
        "texto": "A avaliação das pupilas e do nível de consciência deve ser feita na etapa da Exposição (E), que é obrigatoriamente a primeira a ser realizada no trauma.",
        "correta": false,
        "explicacao": "A Exposição e controle do ambiente (E) constitui a etapa final da abordagem primária, e não a primeira, cabendo à fase D (Incapacidade) a avaliação neurológica rápida."
      }
    ]
  },
  {
    "id": 362,
    "pergunta": "Em um acidente de carpintaria, um trabalhador apresenta um formão cravado profundamente na coxa direita. Há sangramento visível ao redor da ferramenta. Um colega decide puxar o formão em um único movimento rápido e, em seguida, aplicar um curativo compressivo. Qual o risco desta intervenção e a conduta correta recomendada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Remover a ferramenta aumenta drasticamente o risco de hemorragia incontrolável, pois o objeto pode estar tamponando vasos seccionados; deve-se estabilizá-lo.",
        "correta": true,
        "explicacao": "Na ocorrência de ferimentos perfurantes, a conduta correta é estabilizar o objeto encravado com um curativo adequado, pois a sua remoção é perigosa devido ao risco severo de hemorragia por descompressão vascular."
      },
      {
        "id": "B",
        "texto": "A intervenção foi parcialmente correta, contudo, o erro foi não ter aplicado um torniquete tático imediatamente antes de tracionar a ferramenta da ferida.",
        "correta": false,
        "explicacao": "A aplicação do torniquete não torna a remoção do objeto segura ou recomendada. A intervenção principal em leigos perante objetos empalados é sempre a estabilização in situ."
      },
      {
        "id": "C",
        "texto": "O risco reside apenas na dor gerada; a conduta correta seria rodar o objeto lentamente durante a sua extração para evitar rasgar fibras musculares intactas.",
        "correta": false,
        "explicacao": "Rodar ou tentar extrair lentamente o objeto causará ainda mais dilaceração de tecidos, músculos e nervos subjacentes, agravando severamente a ferida originária."
      },
      {
        "id": "D",
        "texto": "A remoção do corpo estranho é obrigatória para desinfetar a ferida, mas a falha técnica foi não ter utilizado água oxigenada e gelo antes da compressão.",
        "correta": false,
        "explicacao": "Leigos não devem tentar realizar desinfecções profundas em feridas abertas com empalamento, e o gelo não possui indicação hemostática ou de desinfecção neste cenário clínico."
      }
    ]
  },
  {
    "id": 363,
    "pergunta": "Durante o preparo de uma refeição, óleo fervente atinge o antebraço de uma pessoa, gerando vermelhidão intensa e bolhas. Um familiar rapidamente coloca cubos de gelo sobre a lesão e rompe as bolhas para aliviar a pressão dolorosa. Qual é a contraindicação clínica destas ações segundo as diretrizes de primeiros socorros?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O gelo deve ser utilizado apenas em queimaduras elétricas; em queimaduras térmicas, o rompimento de bolhas é indicado, mas apenas com instrumentos esterilizados.",
        "correta": false,
        "explicacao": "As bolhas não devem ser rompidas sob nenhuma circunstância no atendimento pré-hospitalar, quer seja com materiais estéreis ou não, e o gelo é contraindicado em qualquer tipo de queimadura."
      },
      {
        "id": "B",
        "texto": "As bolhas funcionam como isolante térmico e o gelo, ao derreter, carreia bactérias para a derme profunda, provocando infecção sistêmica imediata e incurável.",
        "correta": false,
        "explicacao": "A justificativa médica recai no dano inflamatório e de isquemia provocado pelo gelo, e não em um suposto transporte bacteriano provocado pela água do degelo nas bolhas fechadas."
      },
      {
        "id": "C",
        "texto": "O uso de gelo provoca isquemia local e agrava o dano tecidual, enquanto o rompimento das bolhas destrói a barreira natural da pele e eleva o risco de infecção.",
        "correta": true,
        "explicacao": "Deve-se evitar o uso de gelo ou água gelada, pois podem agravar a lesão térmica inicial e induzir isquemia/congelamento tecidual. O rompimento das bolhas destrói a proteção estéril da lesão."
      },
      {
        "id": "D",
        "texto": "Estas ações estão perfeitamente alinhadas com os protocolos internacionais, sendo o único erro a ausência de aplicação de pomadas analgésicas no local afetado.",
        "correta": false,
        "explicacao": "As ações são completamente opostas aos protocolos estabelecidos e a aplicação de pomadas por leigos é expressamente proibida em queimaduras abertas."
      }
    ]
  },
  {
    "id": 364,
    "pergunta": "Uma mãe depara-se com o seu bebê (lactente de 6 meses) engasgando-se com um pequeno brinquedo. A criança não chora, apresenta cianose e não emite sons. Desesperada, a mãe levanta o bebê pelos pés e sacode-o de cabeça para baixo. Qual é a abordagem estritamente protocolar que substitui esta prática perigosa?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Deitar o bebê em uma superfície plana e rígida e aplicar imediatamente compressões abdominais vigorosas, semelhantes à Manobra de Heimlich dos adultos.",
        "correta": false,
        "explicacao": "A Manobra de Heimlich (compressões abdominais) é absolutamente contraindicada em lactentes devido ao elevado risco de lesão dos órgãos intra-abdominais, como o fígado e o baço."
      },
      {
        "id": "B",
        "texto": "Posicionar o lactente em decúbito ventral sobre o antebraço, com a cabeça rebaixada, e aplicar até cinco golpes nas costas seguidos de cinco compressões torácicas.",
        "correta": true,
        "explicacao": "O protocolo para desobstrução de lactentes responsivos exige intervenção sequencial: cinco golpes interescapulares nas costas alternados com cinco compressões torácicas."
      },
      {
        "id": "C",
        "texto": "Abrir a boca da criança e realizar uma varredura digital às cegas nas vias aéreas superiores, garantindo que o brinquedo seja extraído por via mecânica manual.",
        "correta": false,
        "explicacao": "A varredura digital às cegas não é encorajada, pois comporta o grande risco de empurrar ainda mais o corpo estranho para a traqueia, agravando a oclusão respiratória."
      },
      {
        "id": "D",
        "texto": "Estimular o reflexo do vômito mediante a administração de pequenos goles de água fria, mantendo o lactente na posição vertical apoiado firmemente no ombro.",
        "correta": false,
        "explicacao": "É terminantemente proibido oferecer água ou qualquer líquido a uma vítima que se encontre engasgada (obstrução de vias aéreas), o que agravaria imediatamente o cenário asfíxico."
      }
    ]
  },
  {
    "id": 365,
    "pergunta": "Um socorrista depara-se com uma vítima consciente e orientada que recusa terminantemente qualquer atendimento após uma colisão veicular leve, citando convicções religiosas. O socorrista, temendo por lesões internas não visíveis, imobiliza a vítima à força. Segundo os princípios éticos e a responsabilidade civil, como se avalia esta conduta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A conduta está amparada no princípio do consentimento implícito, uma vez que a suspeita de hemorragia interna sobrepõe-se à vontade da vítima em um cenário de emergência.",
        "correta": false,
        "explicacao": "O consentimento implícito aplica-se exclusivamente a vítimas inconscientes, desorientadas ou incapacitadas de manifestar vontade expressa, não se sobrepondo à decisão de uma vítima lúcida."
      },
      {
        "id": "B",
        "texto": "A intervenção foi adequada por impedir a evasão do local do acidente, assegurando a proteção legal do socorrista contra processos civis por omissão de socorro culposa.",
        "correta": false,
        "explicacao": "A recusa verbal liberta o socorrista do dever de intervir fisicamente. Acionar os serviços especializados é ação suficiente para descaracterizar integralmente o crime de omissão."
      },
      {
        "id": "C",
        "texto": "Constitui uma violação de direitos que pode resultar em acusação de agressão física, devendo o socorrista acionar as autoridades, vigiar a cena e tentar dialogar.",
        "correta": true,
        "explicacao": "Qualquer tentativa de atendimento ou imobilização contra a vontade expressa de uma pessoa lúcida configura uma violação de direitos. O aconselhável é respeitar, chamar as autoridades e tentar um diálogo prudente."
      },
      {
        "id": "D",
        "texto": "A imobilização forçada é permitida apenas se o socorrista leigo detiver um termo de responsabilidade assinado por duas testemunhas, isentando-o de acusações criminais.",
        "correta": false,
        "explicacao": "Nenhum documento assinado no momento permite que um leigo exerça coação física contra uma pessoa que se recusa a receber atendimento médico; a imposição violenta é de responsabilidade estrita da lei."
      }
    ]
  },
  {
    "id": 366,
    "pergunta": "Um pedestre presencia um acidente de trânsito com vítimas graves. Temendo agravar as lesões por não possuir treinamento (imperícia), ele decide abandonar rapidamente o local sem realizar nenhuma ação ou ligação telefônica. Sob a ótica do Artigo 135 do Código Penal Brasileiro, como essa conduta é avaliada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Justificável pela lei do Bom Samaritano, uma vez que o leigo não é obrigado a atuar fisicamente se não possuir equipamentos de proteção individual.",
        "correta": false,
        "explicacao": "Não existe impunidade por abandono. O medo de atuar fisicamente não isenta a pessoa do dever de pedir socorro às autoridades competentes."
      },
      {
        "id": "B",
        "texto": "Configura crime de omissão de socorro, pois o dever legal de assistência é plenamente satisfeito pelo acionamento do serviço de emergência (192 ou 193).",
        "correta": true,
        "explicacao": "A lei não exige que o leigo toque na vítima se houver risco ou imperícia, mas exige a prestação de socorro indireto, que é o acionamento do resgate."
      },
      {
        "id": "C",
        "texto": "Não configura ilícito penal, visto que o Código Penal brasileiro restringe a criminalização da omissão exclusivamente aos profissionais de saúde.",
        "correta": false,
        "explicacao": "A omissão de socorro é um crime comum no Brasil, aplicável a qualquer cidadão que deixe de prestar assistência direta ou indireta quando possível."
      },
      {
        "id": "D",
        "texto": "Configura homicídio culposo, dado que a ausência de intervenção física e direta pela testemunha atua como causa determinante para o óbito da vítima.",
        "correta": false,
        "explicacao": "A testemunha não causou o acidente. Ela responde pela omissão de socorro, e não pelo homicídio, a menos que tivesse o dever legal de garante."
      }
    ]
  },
  {
    "id": 367,
    "pergunta": "Um socorrista leigo depara-se com um homem caído na rua, inconsciente e com sangramento arterial severo no braço. Não há familiares presentes. O socorrista imediatamente aplica um torniquete tático para conter a hemorragia exsanguinante, sem pedir permissão. Qual é o respaldo ético e legal dessa intervenção?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Ilegal, visto que qualquer intervenção corporal exige a assinatura prévia de um termo de responsabilidade por testemunhas para evitar processos por lesão.",
        "correta": false,
        "explicacao": "A exigência de documentos assinados em uma emergência de risco de morte iminente é irreal e contraria os princípios do atendimento pré-hospitalar."
      },
      {
        "id": "B",
        "texto": "Legal, amparada pela doutrina do consentimento implícito, que presume que uma pessoa inconsciente em risco de vida aceitaria manobras salvadoras.",
        "correta": true,
        "explicacao": "O consentimento implícito (ou presumido) é a base legal que permite intervir em vítimas inconscientes, confusas ou severamente feridas que não podem responder."
      },
      {
        "id": "C",
        "texto": "Legal estritamente se o socorrista for um bombeiro militar, já que cidadãos civis devem aguardar a chegada do SAMU antes de tocar em vítimas graves.",
        "correta": false,
        "explicacao": "A restrição a profissionais não existe para manobras de salvamento básico. O leigo treinado tem o direito e o dever moral de agir para preservar a vida."
      },
      {
        "id": "D",
        "texto": "Ilegal, configurando lesão corporal grave, a menos que uma autoridade policial presente na cena autorize verbalmente o contato físico com a vítima.",
        "correta": false,
        "explicacao": "A autorização policial não é um pré-requisito médico ou legal para que um cidadão inicie os primeiros socorros em uma vítima inconsciente."
      }
    ]
  },
  {
    "id": 368,
    "pergunta": "Durante um jantar, uma pessoa engasga severamente (OVACE grave). Um leigo, que possui apenas treinamento básico em primeiros socorros, tenta a Manobra de Heimlich sem sucesso. A vítima perde a consciência. O leigo então utiliza uma faca limpa para realizar um corte no pescoço da vítima (cricotireoidostomia improvisada). Como a justiça brasileira avalia essa conduta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Amparada pelo estado de necessidade, excludente de ilicitude que absolve qualquer cidadão que provoque lesões corporais ao tentar salvar uma vida.",
        "correta": false,
        "explicacao": "O estado de necessidade não cobre atos de extrema imperícia (realizar cirurgias sem ser médico), pois o risco criado pela intervenção é desproporcional."
      },
      {
        "id": "B",
        "texto": "Classificável como exercício ilegal da medicina e lesão corporal, já que procedimentos cirúrgicos invasivos superam totalmente o escopo do socorrista leigo.",
        "correta": true,
        "explicacao": "Procedimentos invasivos, como incisões e acessos cirúrgicos de via aérea, são atos médicos. O leigo excede seu limite de atuação, configurando imperícia criminal."
      },
      {
        "id": "C",
        "texto": "Legalmente aceitável exclusivamente se o médico regulador do SAMU (192) autorizar o procedimento por telefone durante o desespero da emergência.",
        "correta": false,
        "explicacao": "Nenhum médico regulador está autorizado a delegar procedimentos cirúrgicos invasivos a pessoas leigas por telefone sob nenhuma circunstância."
      },
      {
        "id": "D",
        "texto": "Considerada uma infração administrativa leve, uma vez que a boa intenção (animus salvandi) anula o erro técnico de utilizar um objeto não hospitalar.",
        "correta": false,
        "explicacao": "A boa intenção não exime o indivíduo da responsabilidade criminal por lesões causadas ao ultrapassar os limites de seu conhecimento (imperícia extrema)."
      }
    ]
  },
  {
    "id": 369,
    "pergunta": "Um motociclista sofre uma queda e apresenta deformidade evidente no braço direito (fratura fechada). Ele está perfeitamente consciente, orientado no tempo e espaço, mas, por desconfiança, recusa expressamente qualquer tipo de ajuda ou aproximação. Qual a atitude correta do socorrista voluntário?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Imobilizar o membro da vítima à força utilizando o princípio do consentimento presumido, dado o evidente trauma ósseo e o risco iminente de choque.",
        "correta": false,
        "explicacao": "Consentimento presumido só se aplica a vítimas inconscientes. Forçar atendimento em pessoa lúcida configura crime de constrangimento ilegal e agressão."
      },
      {
        "id": "B",
        "texto": "Acionar o 192 (SAMU) ou 190 (Polícia Militar), manter-se a uma distância segura, vigiar a cena e respeitar a decisão da vítima que está lúcida.",
        "correta": true,
        "explicacao": "O direito de recusa de uma pessoa adulta, consciente e orientada é soberano. O socorrista cumpre seu dever legal acionando o resgate e monitorando o local."
      },
      {
        "id": "C",
        "texto": "Retirar-se do local imediatamente sem realizar ligações, pois a recusa verbal expressa transfere toda a responsabilidade criminal para a própria vítima.",
        "correta": false,
        "explicacao": "Abolir a cena sem acionar as autoridades configura abandono e omissão de socorro, pois a vítima, mesmo recusando, necessita de avaliação oficial."
      },
      {
        "id": "D",
        "texto": "Solicitar que outros transeuntes auxiliem a conter fisicamente o motociclista até a chegada do resgate, visando a garantia do bem maior da saúde.",
        "correta": false,
        "explicacao": "A contenção física por terceiros agrava a violação dos direitos do paciente e pode incitar violência, gerando múltiplas acusações criminais aos envolvidos."
      }
    ]
  },
  {
    "id": 370,
    "pergunta": "Você escuta disparos em uma praça e visualiza uma pessoa caída com um ferimento a bala. Os atiradores ainda estão nas proximidades, discutindo de forma agressiva. Ao avaliar o cenário sob a perspectiva legal da prestação de socorro e segurança da cena, qual é a sua obrigação primária?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A aproximação imediata é obrigatória segundo o Artigo 135 do Código Penal, visto que ferimentos por arma de fogo representam risco de morte iminente.",
        "correta": false,
        "explicacao": "O Código Penal não exige que cidadãos assumam riscos pessoais (como se expor a atiradores) para prestar socorro direto."
      },
      {
        "id": "B",
        "texto": "Buscar abrigo seguro e acionar imediatamente o 190 (Polícia Militar) e o 192 (SAMU) cumpre o dever legal, não configurando omissão de socorro.",
        "correta": true,
        "explicacao": "A segurança do socorrista é sempre a prioridade número um. Chamar as autoridades de um local seguro exime totalmente o leigo da acusação de omissão de socorro."
      },
      {
        "id": "C",
        "texto": "Gravar a cena do crime com o celular a uma distância segura é a única exigência legal para fornecer provas documentais às autoridades policiais.",
        "correta": false,
        "explicacao": "Gravar a cena não substitui a obrigação legal de acionar o serviço de emergência. Focar na gravação enquanto a vítima sangra caracteriza omissão."
      },
      {
        "id": "D",
        "texto": "Gritar para que os atiradores abandonem o local demonstra a intenção de ajudar e substitui legalmente a obrigatoriedade de acionar o socorro médico.",
        "correta": false,
        "explicacao": "Gritar atrai a atenção dos criminosos, colocando o socorrista em risco letal iminente, além de não configurar prestação de socorro efetiva."
      }
    ]
  },
  {
    "id": 371,
    "pergunta": "Uma criança de 8 anos é atropelada na saída da escola. Encontra-se consciente, com fratura fechada no braço, chorando e recusando firmemente que qualquer estranho a toque. Os responsáveis não estão presentes no local. Considerando os preceitos legais e éticos do atendimento pré-hospitalar, como o leigo deve proceder?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Respeitar a vontade da criança e não realizar qualquer imobilização, limitando-se a ligar para o 192 para não incorrer no crime de constrangimento ilegal.",
        "correta": false,
        "explicacao": "A recusa de atendimento é um direito absoluto apenas para adultos capazes. Menores de idade não possuem capacidade civil para recusar socorro em situações de emergência."
      },
      {
        "id": "B",
         "texto": "Deve acionar o socorro especializado e atuar de forma protetiva, podendo intervir com base no consentimento implícito apenas se houver necessidade imediata para evitar agravamento relevante, sobretudo considerando tratar-se de menor desacompanhado.",
  "correta": true,
  "explicacao": "Em menores desacompanhados, admite-se o consentimento implícito para intervenções necessárias à preservação da saúde, especialmente em situações de urgência. Contudo, se a vítima está consciente e recusa contato, o leigo deve, sempre que possível, respeitar essa manifestação, limitando-se a medidas não invasivas e à solicitação de socorro. A intervenção física mais incisiva se justifica quando houver risco concreto de agravamento ou impossibilidade de aguardar atendimento especializado."
      },
      {
        "id": "C",
        "texto": "Aguardar a chegada da Polícia Militar ou do Conselho Tutelar para obter a autorização formal do Estado antes de tocar na criança e iniciar os curativos.",
        "correta": false,
        "explicacao": "Aguardar autorização legal formal retarda o socorro vital e prolonga o sofrimento da vítima, configurando omissão de socorro, uma vez que a intervenção do leigo já está amparada."
      },
      {
        "id": "D",
        "texto": "Imobilizar a criança utilizando força excessiva se necessário, pois o consentimento implícito isenta o socorrista de qualquer responsabilização civil posterior.",
        "correta": false,
        "explicacao": "Embora o consentimento seja implícito, o uso de força excessiva ou brutalidade não é amparado pela lei e pode configurar lesão corporal culposa."
      }
    ]
  },
  {
    "id": 372,
    "pergunta": "Ao realizar compressões torácicas em uma vítima de parada cardiorrespiratória (PCR), um socorrista leigo treinado percebe crepitações que indicam a fratura de costelas. Após a reanimação bem-sucedida, a família ameaça processar o socorrista pela lesão óssea. Qual é o respaldo jurídico para o socorrista neste cenário?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O socorrista responderá civilmente por imperícia, visto que as diretrizes internacionais garantem que compressões aplicadas corretamente nunca provocam fraturas ósseas.",
        "correta": false,
        "explicacao": "É falso afirmar que compressões corretas não quebram costelas. Fraturas costais são complicações frequentes e esperadas mesmo quando a RCP é executada com perfeição."
      },
      {
        "id": "B",
         "texto": "A conduta está juridicamente amparada por excludente de ilicitude decorrente da atuação em primeiros socorros, no contexto de tentativa de salvamento em parada cardiorrespiratória, sendo a fratura de costelas uma intercorrência previsível e não imputável ao socorrista quando a técnica é corretamente aplicada.",
  "correta": true,
  "explicacao": "As fraturas costais são complicações frequentes durante manobras de reanimação cardiopulmonar e não configuram, por si só, ilícito penal ou civil quando decorrentes de procedimento adequado. O ordenamento jurídico protege a atuação do socorrista leigo que age conforme protocolos de emergência, afastando a ilicitude e a culpa. Nesses casos, não se trata propriamente de estado de necessidade, mas de atuação lícita em contexto de salvamento de vida."
}
      },
      {
        "id": "C",
        "texto": "Haverá condenação por lesão corporal culposa, uma vez que apenas os profissionais de saúde possuem a imunidade legal necessária para causar danos colaterais na RCP.",
        "correta": false,
        "explicacao": "A lei não reserva a excludente de ilicitude (estado de necessidade) apenas aos profissionais; qualquer cidadão de boa-fé que tente salvar uma vida está amparado legalmente."
      },
      {
        "id": "D",
        "texto": "A isenção de responsabilidade só ocorrerá se o socorrista leigo for capaz de apresentar a certificação válida e atualizada em um curso de Suporte Básico de Vida.",
        "correta": false,
        "explicacao": "A ausência de um certificado impresso ou formal não anula o estado de necessidade ou a boa intenção (animus salvandi) de um leigo que executa manobras vitais."
      }
    ]
  },
  {
    "id": 373,
    "pergunta": "Um professor da educação infantil presencia o engasgo severo de um aluno na sala de aula. Paralisado pelo medo de cometer erros, ele não atua fisicamente, limitando-se a ligar para o Corpo de Bombeiros (193). O aluno vem a óbito antes da chegada do resgate. Perante a legislação vigente e a posição que o docente ocupa, como se tipifica a sua conduta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Configura apenas omissão de socorro, pois o acionamento do serviço de emergência mitiga a responsabilidade, equiparando o professor a qualquer pedestre comum.",
        "correta": false,
        "explicacao": "O professor não é um transeunte comum. Durante o período letivo, ele possui obrigação legal de cuidado e vigilância, colocando-o em posição diferenciada."
      },
      {
        "id": "B",
          "texto": "Em tese, poderá responder por homicídio culposo, pois o professor ocupa posição de garantidor da criança, podendo configurar omissão imprópria (comissiva por omissão), desde que demonstrado que podia e devia agir para evitar o resultado.",
  "correta": true,
  "explicacao": "O docente, como garantidor, tem dever legal de cuidado, proteção e vigilância (art. 13, §2º do Código Penal). Assim, não basta acionar o socorro se havia possibilidade concreta de intervenção eficaz (como manobras de desengasgo). Contudo, a responsabilização penal depende da comprovação de que ele podia agir, que a ação era exigível nas circunstâncias e que haveria probabilidade de evitar o resultado. Ausentes esses elementos, pode-se afastar a imputação por falta de nexo causal ou inexigibilidade de conduta diversa."
      },
      {
        "id": "C",
        "texto": "Isenção total de responsabilidade criminal, visto que o Código Penal determina que pessoas sem formação médica não são obrigadas a intervir fisicamente em asfixias.",
        "correta": false,
        "explicacao": "O dever do garantidor exige que ele tome todas as medidas possíveis ao seu alcance (como a manobra de Heimlich básica), não se restringindo aos médicos."
      },
      {
        "id": "D",
        "texto": "Classifica-se como abandono de incapaz com resultado morte, independentemente de o professor ter permanecido ao lado do aluno durante a espera pelo socorro médico.",
        "correta": false,
        "explicacao": "O crime de abandono de incapaz exige o afastamento físico do local, deixando a vítima à própria sorte, o que não ocorreu, uma vez que o docente permaneceu na sala."
      }
    ]
  },
  {
    "id": 374,
    "pergunta": "Um leigo encontra um indivíduo caído na via pública, em parada cardiorrespiratória. Ao rasgar a camisa da vítima para iniciar a RCP, observa uma tatuagem com a inscrição 'DNR - Não Reanimar' no peito. Diante das questões legais sobre diretrizes antecipadas de vontade no ambiente extra-hospitalar, o que o leigo deve fazer?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Interromper a intervenção imediatamente e acionar as autoridades policiais para constatação do óbito, respeitando a autonomia expressa do paciente.",
        "correta": false,
        "explicacao": "No ambiente extra-hospitalar, um socorrista leigo (e muitas vezes até o SAMU) não tem meios de validar juridicamente uma tatuagem como documento médico e legal oficial."
      },
      {
        "id": "B",
        "texto": "Deve iniciar a RCP e acionar o SAMU (192), pois, no ambiente extra-hospitalar, não há segurança jurídica para reconhecer uma ordem de não reanimação baseada apenas em tatuagem, devendo prevalecer a presunção em favor da vida.",
  "correta": true,
  "explicacao": "Diretivas antecipadas de vontade, como ordens de não reanimar (DNR), exigem contexto clínico, documentação formal e validação por equipe de saúde. Uma tatuagem não constitui prova suficiente e confiável dessa vontade. Assim, o leigo deve agir dentro de suas possibilidades para tentar salvar a vítima e acionar o socorro, sob pena de, em caso de inação injustificada, poder caracterizar omissão de socorro. A conduta esperada é pautada pelo princípio da proteção à vida e pela ausência de exigibilidade de análise jurídica aprofundada pelo leigo."
      },
      {
        "id": "C",
        "texto": "Realizar apenas as ventilações de resgate, abstendo-se de fazer as compressões torácicas, para respeitar parcialmente o desejo gravado na pele da vítima.",
        "correta": false,
        "explicacao": "Esta é uma conduta bizarra e desprovida de qualquer base técnica ou legal. A RCP não deve ser fragmentada por interpretações leigas de tatuagens."
      },
      {
        "id": "D",
        "texto": "Fotografar a tatuagem como prova de isenção de responsabilidade e abandonar a cena para evitar possíveis processos civis por parte de familiares discordantes.",
        "correta": false,
        "explicacao": "Abandonar a cena configuraria omissão de socorro criminal. A tatuagem não exime a testemunha do dever de acionar a emergência e prestar os primeiros socorros."
      }
    ]
  },
  {
    "id": 375,
    "pergunta": "Durante um resgate aéreo na rodovia, um transeunte filma de perto o rosto e as vísceras expostas de uma vítima de acidente automobilístico fatal, enviando imediatamente o vídeo para grupos de mensagens. Qual o desdobramento jurídico direto desta atitude?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O ato é respaldado pelo direito fundamental à liberdade de informação e registro público, desde que o transeunte não obtenha lucro financeiro com as imagens.",
        "correta": false,
        "explicacao": "A liberdade de informação não se sobrepõe ao direito à dignidade da pessoa humana e ao respeito aos mortos, sendo irrelevante a finalidade lucrativa."
      },
      {
        "id": "B",
        "texto": "Se a vítima estiver em óbito, a conduta configura, em tese, crime de vilipêndio a cadáver. Se estiver viva, pode haver violação de direitos de imagem e dignidade, com repercussão principalmente na esfera civil, sem prejuízo de eventual enquadramento penal a depender do caso concreto.",
  "correta": true,
  "explicacao": "Divulgar imagens desrespeitosas de cadáver, especialmente com exposição de partes íntimas ou em situação degradante, caracteriza vilipêndio a cadáver (art. 212 do Código Penal). Por outro lado, se a pessoa ainda estiver viva, a conduta não se enquadra automaticamente como crime, podendo gerar responsabilidade civil por violação de imagem, honra e dignidade, e apenas em situações específicas configurar ilícito penal. A análise depende das circunstâncias concretas."
      },
      {
        "id": "C",
        "texto": "A responsabilização recai exclusivamente sobre as operadoras do aplicativo de mensagens por não terem bloqueado o conteúdo fotográfico sensível.",
        "correta": false,
        "explicacao": "O indivíduo que captura, divulga e compartilha o material é direta e criminalmente responsável por seus atos, independentemente da plataforma utilizada."
      },
      {
        "id": "D",
        "texto": "É considerada uma infração cível leve, punível apenas com multas, pois a via rodoviária é um espaço público onde não existe a expectativa de privacidade da vítima.",
        "correta": false,
        "explicacao": "O fato de estar em via pública não extingue a dignidade da vítima acidentada. A exposição aviltante de restos mortais atinge a esfera criminal, e não apenas cível."
      }
    ]
  },
  {
    "id": 376,
    "pergunta": "Um motorista atropela um motociclista. O motociclista reclama de forte dor no pescoço e formigamento nos braços, não conseguindo mexer as pernas. Embora o SAMU (192) tenha sido acionado, um popular decide colocar a vítima no banco de trás do seu carro particular para agilizar a chegada ao hospital. A vítima evolui para tetraplegia irreversível. Como o Direito avalia a ação do popular?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O popular está totalmente isento de dolo e culpa, pois agiu impulsionado pelo animus salvandi (vontade de salvar), o que afasta a ilicitude de danos colaterais.",
        "correta": false,
        "explicacao": "A boa intenção não blinda contra atos de extrema irresponsabilidade que causam dano previsível quando não havia risco imediato na cena."
      },
      {
        "id": "B",
         "texto": "Em tese, a conduta pode caracterizar imprudência e configurar lesão corporal culposa, caso se comprove que o transporte inadequado, sem necessidade urgente, agravou a lesão medular da vítima.",
  "correta": true,
  "explicacao": "A remoção de vítima com suspeita de trauma raquimedular sem técnica adequada pode ser considerada conduta imprudente. Contudo, a responsabilização penal depende da demonstração do nexo causal entre a ação e o agravamento da lesão, bem como da previsibilidade do resultado. Também devem ser consideradas as circunstâncias do caso concreto, como eventual percepção de urgência pelo agente, podendo haver discussão sobre inexigibilidade de conduta diversa ou erro na avaliação da situação."
}
      },
      {
        "id": "C",
        "texto": "A culpa pela tetraplegia recairá sobre o Estado, devido à demora presumida da ambulância, que justificou a remoção civil emergencial da via pública.",
        "correta": false,
        "explicacao": "A remoção de vítimas de trauma por leigos só é justificada se houver risco incontrolável na cena. O atraso da ambulância por si só não autoriza o transporte improvisado deletério."
      },
      {
        "id": "D",
        "texto": "A conduta caracteriza imperícia médica estrita, uma vez que o transporte de acidentados graves em automóveis comuns é proibido unicamente pela legislação de trânsito.",
        "correta": false,
        "explicacao": "O leigo não comete 'imperícia médica', pois não é médico. A falha decorre da imprudência (ação precipitada), e não de normativas exclusivas do trânsito."
      }
    ]
  },
  {
    "id": 377,
    "pergunta": "Em um parque, um indivíduo torce o tornozelo de forma muito dolorosa, incapaz de caminhar. Um socorrista leigo aproxima-se e oferece um forte analgésico de uso pessoal, sujeito a prescrição médica, para aliviar a dor da vítima enquanto aguardam os bombeiros. Minutos depois, a vítima entra em choque anafilático. Qual é o erro legal basilar desta conduta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A falha consiste em não ter questionado a vítima sobre o seu histórico prévio de alergias medicamentosas antes de ofertar o analgésico de alta potência.",
        "correta": false,
        "explicacao": "Mesmo questionando alergias, o leigo continua sem autorização legal para dispensar ou receitar medicamentos, sejam eles analgésicos ou não."
      },
      {
        "id": "B",
         "texto": "O leigo excedeu os limites de atuação ao administrar medicamento sujeito a prescrição, assumindo risco indevido sem conhecimento técnico, o que pode caracterizar conduta culposa em caso de dano.",
  "correta": true,
  "explicacao": "A administração de medicamentos por leigo, especialmente de uso controlado, configura imprudência ou imperícia, pois envolve riscos que exigem avaliação técnica. Não se trata, em regra, de exercício ilegal da medicina, que pressupõe habitualidade ou atuação profissional. Havendo resultado lesivo, como choque anafilático, a conduta pode ser enquadrada como lesão corporal culposa, desde que comprovados o nexo causal e a previsibilidade do resultado."
      },
      {
        "id": "C",
        "texto": "O erro foi ter ofertado medicação via oral; se a administração do fármaco tivesse sido tópica (em pomada), estaria plenamente albergada pelos protocolos de socorro.",
        "correta": false,
        "explicacao": "Leigos também não estão autorizados a aplicar pomadas anestésicas ou medicamentosas de uso restrito em vítimas de trauma."
      },
      {
        "id": "D",
        "texto": "Não houve erro jurídico. A anafilaxia é uma reação idiossincrática imprevisível e o Código Civil isenta de penalidades o socorro voluntário de urgência.",
        "correta": false,
        "explicacao": "Houve erro claro, pois a urgência (entorse) não justifica a ministração de substâncias restritas por pessoas não habilitadas, gerando um risco novo e letal para a vítima."
      }
    ]
  },
  {
    "id": 378,
    "pergunta": "Presenciando um acidente de motocicleta onde o condutor caiu sozinho e está inconsciente, uma testemunha tenta telefonar para o SAMU (192). Após três tentativas malsucedidas em que a chamada cai devido à falta de sinal, a testemunha vai embora frustrada. Como a justiça interpreta essa ação em relação ao crime de omissão de socorro?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A tentativa frustrada prova a intenção de ajudar, eximindo o indivíduo de responsabilidade penal, visto que a instabilidade da rede é um caso fortuito exterior à sua vontade.",
        "correta": false,
        "explicacao": "Embora seja um fator externo, a testemunha não pode simplesmente abandonar a vítima inconsciente sem esgotar outros meios de socorro possíveis e acessíveis."
      },
      {
        "id": "B",
        "texto": "A testemunha está isenta, dado que em acidentes em que a vítima cai sozinha, sem a participação de terceiros, a obrigação de socorrer recai unicamente sobre o Estado.",
        "correta": false,
        "explicacao": "O dever de solidariedade social obriga qualquer pessoa a prestar ou acionar o socorro para vítimas incapazes de se defenderem sozinhas, independentemente de quem causou a queda."
      },
      {
        "id": "C",
         "texto": "Em tese, a omissão pode se configurar, caso demonstrado que havia outros meios razoáveis e seguros de buscar socorro além das tentativas frustradas de ligação.",
  "correta": true,
  "explicacao": "O crime de omissão de socorro (art. 135 do Código Penal) exige que o agente deixe de prestar assistência quando possível fazê-lo sem risco pessoal. Assim, se a testemunha abandona o local mesmo podendo buscar alternativas viáveis, como procurar sinal em outro ponto ou solicitar ajuda de terceiros, pode incorrer no delito. Contudo, a responsabilização depende das circunstâncias concretas, especialmente da existência de meios acessíveis e da exigibilidade de conduta diversa."
      },
      {
        "id": "D",
        "texto": "A testemunha será indiciada por homicídio culposo pela falta de persistência no acionamento do socorro, dado o risco presumido do trauma craniano na queda de moto.",
        "correta": false,
        "explicacao": "A testemunha responderá por omissão de socorro e não por homicídio, visto que ela não era garantidora legal da vítima nem causadora do acidente."
      }
    ]
  },
  {
    "id": 379,
    "pergunta": "Um condutor, respeitando perfeitamente as leis de trânsito, é surpreendido por um pedestre que pula intencionalmente em frente ao seu veículo, resultando em um grave atropelamento. Assustado, mas fisicamente ileso, o condutor foge do local argumentando posteriormente não ter tido qualquer culpa no sinistro. Segundo o Código de Trânsito Brasileiro e a legislação penal, qual a implicação da fuga?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O fato de não ter dado causa ao atropelamento e tratar-se de uma suposta tentativa de suicídio isenta-o da obrigatoriedade legal de permanecer na via para prestar o socorro.",
        "correta": false,
        "explicacao": "A ausência de culpa no acidente não desobriga a prestação de assistência, nem legitima o abandono de pessoa ferida em via pública."
      },
      {
        "id": "B",
        "texto": "O motorista só é criminalmente penalizado pela fuga se houver provas testemunhais de que a sua evasão agravou especificamente o quadro clínico do pedestre lesionado.",
        "correta": false,
        "explicacao": "O crime de afastar-se do local do acidente para fugir à responsabilidade (Art. 305 do CTB) consuma-se no ato da fuga, independentemente da evolução do quadro médico da vítima."
      },
      {
        "id": "C",
        "texto": "A fuga configurará omissão de socorro apenas se a via estiver deserta; se houverem transeuntes capazes de ligar para o SAMU, o motorista é dispensado da sua presença.",
        "correta": false,
        "explicacao": "O condutor envolvido no acidente possui a obrigação direta de prestar socorro, não podendo delegar compulsoriamente essa obrigação de maneira evasiva aos demais."
      },
      {
        "id": "D",
          "texto": "A ausência de culpa pelo acidente não afasta o dever de prestar socorro; a evasão do local pode configurar crime autônomo previsto no Código de Trânsito Brasileiro, independentemente da responsabilidade pelo sinistro.",
  "correta": true,
  "explicacao": "O condutor envolvido em acidente deve prestar socorro ou assegurar que ele seja prestado, ainda que não tenha dado causa ao evento. A fuga do local caracteriza, em tese, o crime de afastar-se do local do acidente (art. 305 do CTB). Além disso, pode haver omissão de socorro (art. 304 do CTB), conforme as circunstâncias. Trata-se de infrações autônomas, não dependendo da existência de culpa pelo acidente."
      }
    ]
  },
  {
    "id": 380,
    "pergunta": "Um socorrista leigo liga para o SAMU devido a um desmaio seguido de crise convulsiva. Pelo telefone, o Médico Regulador orienta o leigo a lateralizar a vítima e a proteger a sua cabeça, assegurando-lhe que não necessita conter os espasmos. Caso o quadro piore inesperadamente, o leigo pode ser responsabilizado por ter seguido essas orientações a distância?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sim, pois a telemedicina em emergências só é válida legalmente entre profissionais de saúde; um leigo que acata ordens assume totalmente o risco de dano (imperícia).",
        "correta": false,
        "explicacao": "A regulação médica de urgência é um sistema projetado exatamente para guiar leigos em tempo real. Não é exclusiva para comunicação entre médicos."
      },
      {
        "id": "B",
         "texto": "Em regra, não, pois ao seguir fielmente as orientações do médico regulador do SAMU, o leigo atua de forma diligente, o que afasta a caracterização de culpa.",
  "correta": true,
  "explicacao": "O cumprimento das orientações fornecidas por profissional habilitado, no contexto da regulação médica de urgência, demonstra que o leigo adotou a conduta esperada nas circunstâncias. Isso tende a afastar a responsabilização penal por ausência de imprudência, negligência ou imperícia. Contudo, não há proteção absoluta: eventual responsabilização dependeria da comprovação de que o agente agiu em desacordo com as orientações ou de forma manifestamente inadequada."
}
      },
      {
        "id": "C",
        "texto": "Sim, responderá civilmente se a chamada não tiver sido devidamente gravada e armazenada no aparelho do próprio socorrista para comprovação em um inquérito.",
        "correta": false,
        "explicacao": "Todas as chamadas para o SAMU e Bombeiros são gravadas e armazenadas pelo próprio serviço estatal, não sendo encargo do cidadão possuir a prova documental da gravação."
      },
      {
        "id": "D",
        "texto": "Não, desde que o leigo tenha assinado digitalmente o termo de isenção de responsabilidade médica no portal do Ministério da Saúde antes de prestar a assistência.",
        "correta": false,
        "explicacao": "A assistência em emergência dispensa burocracias ou assinaturas prévias para legitimar a proteção de quem age sob instrução oficial."
      }
    ]
  },
  {
    "id": 381,
    "pergunta": "Realizando um resgate histórico, qual figura bíblica é associada a um dos primeiros registros de uma técnica de reanimação semelhante à respiração boca a boca?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O profeta Moisés, após retirar vítimas de afogamento do Mar Vermelho.",
        "correta": false,
        "explicacao": "A referência bíblica para a técnica de ventilação artificial é atribuída a outro profeta."
      },
      {
        "id": "B",
        "texto": "O apóstolo Paulo, durante o cuidado improvisado de feridos em conflitos.",
        "correta": false,
        "explicacao": "A referência bíblica para a técnica de ventilação artificial remete a uma figura do Antigo Testamento."
      },
      {
        "id": "C",
        "texto": "O profeta Eliseu, que teria realizado a técnica para salvar uma criança.",
        "correta": true,
        "explicacao": "Um dos primeiros registros de reanimação é descrito na Bíblia, no qual o profeta Eliseu teria realizado técnica semelhante à respiração boca a boca em uma criança."
      },
      {
        "id": "D",
        "texto": "O estudioso Vesalius, que deixou os primeiros relatos escritos no livro sagrado.",
        "correta": false,
        "explicacao": "Vesalius é um estudioso da Idade Média que explorou a ventilação artificial, e não uma figura bíblica."
      }
    ]
  },
  {
    "id": 382,
    "pergunta": "A busca por métodos de ressuscitação avançou historicamente. Durante a Idade Média, quais estudiosos se destacaram por explorar métodos de ventilação artificial?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Vesalius e Paracelso.",
        "correta": true,
        "explicacao": "Na Idade Média, estudiosos como Vesalius e Paracelso exploraram métodos de ventilação artificial como forma de ressuscitação."
      },
      {
        "id": "B",
        "texto": "Silvester e Schafer.",
        "correta": false,
        "explicacao": "Os métodos de Silvester e Schafer foram examinados posteriormente, no período entre 1850 e 1950, e não na Idade Média."
      },
      {
        "id": "C",
        "texto": "Kouwenhoven e Jude.",
        "correta": false,
        "explicacao": "Esses pesquisadores foram os responsáveis, em 1960, por demonstrar a eficácia das compressões torácicas externas, muito tempo depois da Idade Média."
      },
      {
        "id": "D",
        "texto": "Larrey e Farrington.",
        "correta": false,
        "explicacao": "Larrey atuou no exército de Napoleão Bonaparte (séc. XVIII) e Farrington ajudou a estruturar o sistema de emergência nos EUA a partir da década de 1950."
      }
    ]
  },
  {
    "id": 383,
    "pergunta": "A partir do século XVIII, sociedades humanitárias foram criadas em cidades como Amsterdã, Copenhague, Londres e Massachusetts. Qual era o objetivo dessas sociedades?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Estruturar o primeiro Corpo de Bombeiros da Europa focado em emergências de traumas de guerra.",
        "correta": false,
        "explicacao": "A criação de Corpo de Bombeiros no contexto europeu de traumas militares não foi o foco das sociedades humanitárias listadas."
      },
      {
        "id": "B",
        "texto": "Desenvolver técnicas sistematizadas de ressuscitação para emergências respiratórias e cardíacas.",
        "correta": true,
        "explicacao": "Essas sociedades humanitárias passaram a desenvolver técnicas sistematizadas de ressuscitação visando ampliar a sobrevida nesses casos específicos."
      },
      {
        "id": "C",
        "texto": "Criar as primeiras ambulâncias tracionadas a cavalos para uso no transporte rápido de civis.",
        "correta": false,
        "explicacao": "A inovação das ambulâncias móveis a cavalo foi obra do Barão Dominique Jean Larrey no final do século XVIII, não dessas sociedades específicas."
      },
      {
        "id": "D",
        "texto": "Incentivar a introdução da anestesia geral nos hospitais locais para diminuir as dores no campo.",
        "correta": false,
        "explicacao": "A anestesia geral em 1846 como algo que elevou os riscos de parada cardíaca, não como foco de desenvolvimento por parte das sociedades humanitárias."
      }
    ]
  },
  {
    "id": 384,
    "pergunta": "A evolução da ressuscitação cardiopulmonar (RCP) conta com a contribuição do cirurgião alemão Maass, no final do século XIX. Qual técnica inovadora ele propôs, mas que foi esquecida por décadas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O método de ventilação artificial conhecido como método de Holger-Nielsen.",
        "correta": false,
        "explicacao": "O método de Holger-Nielsen é citado como uma técnica de ventilação posicional estudada entre 1850 e 1950, mas não foi a grande proposta esquecida de Maass."
      },
      {
        "id": "B",
        "texto": "O uso de choques elétricos automatizados para a reversão da fibrilação ventricular.",
        "correta": false,
        "explicacao": "A desfibrilação automática (DEA) não faz parte da descrição do século XIX do trabalho do cirurgião alemão Maass apresentada no texto."
      },
      {
        "id": "C",
        "texto": "A liberação das vias aéreas superiores através do método de inclinação da cabeça.",
        "correta": false,
        "explicacao": "A importância da desobstrução das vias aéreas só foi compreendida posteriormente, não sendo esta a técnica de Maass."
      },
      {
        "id": "D",
        "texto": "A realização de compressões torácicas vigorosas com frequência de 100 a 120 por minuto.",
        "correta": true,
        "explicacao": "Maass propôs as compressões torácicas com essa frequência, obtendo resultados promissores, mas a técnica acabou esquecida até a década de 1960."
      }
    ]
  },
  {
    "id": 385,
    "pergunta": "A RCP moderna se consolidou cientificamente na década de 1960. Qual foi o marco comprovado pelos pesquisadores Kouwenhoven, Jude e Knickerbocker que transformou o suporte básico de vida?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Comprovaram que as compressões torácicas externas podiam gerar pressão arterial suficiente para manter a circulação sanguínea.",
        "correta": true,
        "explicacao": "Foi a partir dessa demonstração de Kouwenhoven, Jude e Knickerbocker que se consolidou o modelo moderno da RCP, unindo compressões e ventilação."
      },
      {
        "id": "B",
        "texto": "Demonstraram que apenas a respiração boca a boca era capaz de reverter uma parada cardíaca se iniciada no primeiro minuto.",
        "correta": false,
        "explicacao": "A inovação do trio foi voltada para as compressões torácicas que geravam fluxo sanguíneo, contrariando o foco exclusivo em vias aéreas da época."
      },
      {
        "id": "C",
        "texto": "Criaram as primeiras ambulâncias móveis e a Escala de Coma de Glasgow para triagem.",
        "correta": false,
        "explicacao": "Ambulâncias móveis foram criadas por Larrey, e a Escala de Glasgow surgiu apenas na Era Moderna, abordando aspectos do trauma neurológico."
      },
      {
        "id": "D",
        "texto": "Padronizaram a triagem de incidentes com múltiplas vítimas através do princípio do socorro neutro da Cruz Vermelha.",
        "correta": false,
        "explicacao": "Esses pesquisadores não atuaram na formulação da triagem neutra ou da Cruz Vermelha (fundada em 1864)."
      }
    ]
  },
  {
    "id": 386,
    "pergunta": "De acordo com a evolução histórica dividida pela NAEMT (2023), o 'período antigo' já continha registros de atendimentos a traumas. Qual documento com mais de quatro mil anos é citado como um dos registros mais antigos dessas práticas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O artigo científico Death in a Ditch.",
        "correta": false,
        "explicacao": "O artigo 'Death in a Ditch' foi escrito pelo médico Farrington na metade do século XX, não no mundo antigo."
      },
      {
        "id": "B",
        "texto": "O livro branco Morte Acidental e Deficiência.",
        "correta": false,
        "explicacao": "O livro branco foi publicado nos Estados Unidos em 1967, durante a chamada 'era Farrington', sendo um marco recente."
      },
      {
        "id": "C",
        "texto": "O Papiro Edwin Smith.",
        "correta": true,
        "explicacao": "O documento relata que o Papiro Edwin Smith, de civilizações da antiguidade (Egito), tem mais de quatro mil anos e trazia relatos de atendimentos a traumas."
      },
      {
        "id": "D",
        "texto": "Os manuscritos da Cruz Vermelha.",
        "correta": false,
        "explicacao": "A Cruz Vermelha foi fundada em 1864, consolidando a neutralidade médica em guerras modernas, muito após o período antigo."
      }
    ]
  },
  {
    "id": 387,
    "pergunta": "O Barão Dominique Jean Larrey, que atuou no exército de Napoleão Bonaparte, teve um papel revolucionário na história do atendimento pré-hospitalar. Qual foi sua principal contribuição citada no texto?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A invenção da Escala de Coma de Glasgow para a avaliação de soldados feridos na cabeça.",
        "correta": false,
        "explicacao": "A Escala de Glasgow só foi desenvolvida na era moderna, na década de 1970."
      },
      {
        "id": "B",
        "texto": "O desenvolvimento do protocolo de desobstrução de vias aéreas por corpo estranho (OVACE).",
        "correta": false,
        "explicacao": "Larrey não criou protocolos de OVACE, mas atuou na logística de resgate em campo de batalha."
      },
      {
        "id": "C",
        "texto": "A publicação do artigo 'Death in a Ditch' para promover a triagem entre os soldados.",
        "correta": false,
        "explicacao": "O artigo 'Death in a Ditch' foi publicado pelo médico Farrington no século XX, muito após as campanhas de Napoleão."
      },
      {
        "id": "D",
        "texto": "A implementação de ambulâncias móveis e princípios como a triagem e o transporte rápido.",
        "correta": true,
        "explicacao": "O texto atesta que Larrey implementou ambulâncias puxadas por cavalos e estabeleceu a triagem e o atendimento imediato no próprio deslocamento."
      }
    ]
  },
  {
    "id": 388,
    "pergunta": "A chamada 'era Farrington' (décadas de 1950 a 1970) marcou a estruturação dos serviços médicos de emergência modernos nos Estados Unidos. Qual documento de 1967 consolidou as bases desse atendimento pré-hospitalar contemporâneo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O relatório da Cruz Vermelha Internacional.",
        "correta": false,
        "explicacao": "A Cruz Vermelha é mencionada por ter sido criada em 1864 para garantir a neutralidade nos conflitos, e não como o documento de consolidação de 1967."
      },
      {
        "id": "B",
        "texto": "O livro branco Morte Acidental e Deficiência.",
        "correta": true,
        "explicacao": "A dissertação destaca claramente que o livro branco 'Morte Acidental e Deficiência', publicado em 1967, foi o responsável por consolidar as bases do atendimento pré-hospitalar nos EUA."
      },
      {
        "id": "C",
        "texto": "O Papiro Edwin Smith.",
        "correta": false,
        "explicacao": "O Papiro Edwin Smith é um documento milenar do período antigo que descreve atendimentos a traumas rudimentares, sem relação com os EUA no século XX."
      },
      {
        "id": "D",
        "texto": "As diretrizes do Projeto Resgate do Ministério da Saúde.",
        "correta": false,
        "explicacao": "O Projeto Resgate foi criado no Brasil em 1988, e não guarda relação com a era Farrington ocorrida nos Estados Unidos em 1967."
      }
    ]
  },
  {
    "id": 389,
    "pergunta": "No que diz respeito à evolução nacional, como se deu o início histórico do atendimento pré-hospitalar emergencial no Brasil em 1899?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Por meio de corporações militares, especificamente com o Corpo de Bombeiros do Rio de Janeiro prestando cuidados a traumas.",
        "correta": true,
        "explicacao": "O início no Brasil foi em 1899 com o Corpo de Bombeiros do Rio de Janeiro, vinculado inicialmente às corporações militares atuando em traumas e emergências."
      },
      {
        "id": "B",
        "texto": "Através de um acordo direto com os Estados Unidos para a adoção das ambulâncias móveis padronizadas na era moderna.",
        "correta": false,
        "explicacao": "A influência americana ocorreu de forma parcial na década de 1980 na fundação do SAMU, mas o início em 1899 foi ação puramente militar nacional com os bombeiros."
      },
      {
        "id": "C",
        "texto": "Com a implementação do Serviço de Atendimento Móvel de Urgência (SAMU) sob o modelo médico da França.",
        "correta": false,
        "explicacao": "O SAMU e o modelo francês chegaram ao Brasil apenas muito depois, com o Projeto Resgate criado no final da década de 1980."
      },
      {
        "id": "D",
        "texto": "Com a fundação da Cruz Vermelha Brasileira para o atendimento neutro em áreas periféricas das capitais.",
        "correta": false,
        "explicacao": "Embora a Cruz Vermelha internacional tenha sido fundada em 1864, o papel histórico pioneiro do Corpo de Bombeiros no Brasil em 1899."
      }
    ]
  },
  {
    "id": 390,
    "pergunta": "Com a intensificação da preocupação em qualificar o atendimento pré-hospitalar brasileiro a partir da década de 1980, surgiu o Projeto Resgate em 1988, que originou o SAMU. Esse sistema baseou-se predominantemente em qual modelo internacional?",
    "alternativas": [
      {
        "id": "A",
        "texto": "No modelo alemão do final do século XIX, baseado nos trabalhos do cirurgião Maass.",
        "correta": false,
        "explicacao": "O cirurgião Maass propôs compressões torácicas, mas o seu trabalho não influenciou o sistema operacional do resgate civil brasileiro."
      },
      {
        "id": "B",
        "texto": "No modelo francês, com influências do sistema norte-americano.",
        "correta": true,
        "explicacao": "O SAMU surgiu através de um acordo entre os governos do Brasil e da França, estruturando-se no modelo francês, mas com influências norte-americanas."
      },
      {
        "id": "C",
        "texto": "No modelo britânico, estruturado pelas sociedades humanitárias da Revolução Industrial.",
        "correta": false,
        "explicacao": "As sociedades humanitárias britânicas focavam em reanimação de leigos (séc XVIII), não sendo o modelo logístico operacional de ambulâncias adotado pelo SAMU."
      },
      {
        "id": "D",
        "texto": "No modelo canadense, no qual paramédicos exclusivos prestam atendimento na ausência de médicos no rádio.",
        "correta": false,
        "explicacao": "Não se trata do modelo canadense, mas sim do acordo e o espelhamento do modelo da França."
      }
    ]
  },
  {
    "id": 391,
    "pergunta": "O desenvolvimento da reanimação cardiopulmonar (RCP) moderna sofreu grande influência de um avanço médico ocorrido em 1846, o qual, paradoxalmente, aumentou a incidência de emergências letais na época. Qual foi esse advento?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A invenção das ambulâncias móveis para transporte rápido, que acelerou o resgate, mas induzia arritmias mortais nos pacientes vitimados por trauma mecânico severo.",
        "correta": false,
        "explicacao": "As ambulâncias móveis foram desenvolvidas por Larrey para uso militar e sua criação não gerou as complicações descritas em 1846."
      },
      {
        "id": "B",
        "texto": "A criação de sociedades humanitárias de ressuscitação, focadas em extrair vítimas de afogamento dos rios, cujas técnicas rústicas causavam lesões cervicais.",
        "correta": false,
        "explicacao": "As sociedades humanitárias surgiram a partir do século XVIII, mas não foram o evento médico deflagrador de complicações sistêmicas em 1846."
      },
      {
        "id": "C",
        "texto": "A introdução da anestesia geral, que representou um avanço cirúrgico significativo, mas elevou drasticamente os riscos de complicações, como apneia e parada cardíaca.",
        "correta": true,
        "explicacao": "A anestesia geral, introduzida em 1846, impulsionou o desenvolvimento da RCP devido à necessidade urgente de reverter as paradas respiratórias e cardíacas induzidas pelas drogas anestésicas em pacientes cirúrgicos."
      },
      {
        "id": "D",
        "texto": "A sistematização do método de ventilação de Holger-Nielsen, que, embora considerado avançado, era aplicado de forma indiscriminada e causava colapso pulmonar.",
        "correta": false,
        "explicacao": "O método de Holger-Nielsen foi estudado no período entre 1850 e 1950, contudo o marco gerador do aumento de complicações foi o uso da anestesia geral cirúrgica."
      }
    ]
  },
  {
    "id": 392,
    "pergunta": "Historicamente, a busca pela manutenção da vida levou estudiosos da Idade Média, como Vesalius e Paracelso, a desenvolverem pesquisas que fundamentam conceitos do suporte básico de vida atual. Qual foi a principal área explorada por esses precursores?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A exploração e o aperfeiçoamento de métodos de ventilação artificial como forma de ressuscitação em vítimas em iminência de morte.",
        "correta": true,
        "explicacao": "Na Idade Média, esses estudiosos exploraram métodos ventilatórios precoces, séculos antes de as vias aéreas se tornarem a base formal da cadeia de sobrevivência."
      },
      {
        "id": "B",
        "texto": "A introdução sistemática de compressões torácicas profundas em uma frequência ritmada de 100 a 120 incursões por minuto.",
        "correta": false,
        "explicacao": "As compressões torácicas nessa frequência foram propostas apenas no final do século XIX pelo cirurgião alemão Maass, e não na Idade Média."
      },
      {
        "id": "C",
        "texto": "A utilização de técnicas primitivas de desfibrilação por meio da estimulação miocárdica com agentes químicos naturais.",
        "correta": false,
        "explicacao": "Não existem registros de desfibrilação química ou intervenção elétrica atrelada ao trabalho de Vesalius e Paracelso."
      },
      {
        "id": "D",
        "texto": "O estabelecimento de princípios de triagem militar para categorizar e priorizar o atendimento de feridos com hemorragias exsanguinantes.",
        "correta": false,
        "explicacao": "A triagem de campo e priorização de vítimas militares surgiram com Dominique Jean Larrey, na transição do século XVIII para o século XIX."
      }
    ]
  },
  {
    "id": 393,
    "pergunta": "Na evolução da reanimação cardiopulmonar voltada ao ambiente extra-hospitalar, a década de 1960 foi marcada pela extensão dos treinamentos para paramédicos e cidadãos leigos. Qual entidade assumiu papel vital na padronização efetiva dessas técnicas na sociedade moderna?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O Comitê Internacional da Cruz Vermelha, responsável por difundir e atualizar protocolos bélicos adaptados para o socorro civil.",
        "correta": false,
        "explicacao": "A Cruz Vermelha consolidou a neutralidade e o socorro humanitário global em 1864, não assumindo o papel específico de padronização científica de manobras de RCP nos anos 60."
      },
      {
        "id": "B",
        "texto": "O Serviço de Atendimento Móvel de Urgência (SAMU), que traduziu e unificou as diretrizes francesas e norte-americanas para aplicação irrestrita nas vias públicas.",
        "correta": false,
        "explicacao": "O SAMU foca na logística e despacho avançado de socorro pré-hospitalar, estruturado no Brasil apenas no final da década de 1980."
      },
      {
        "id": "C",
        "texto": "O Colégio Americano de Cirurgiões, responsável pela elaboração da primeira cadeia de sobrevivência universal focada na prevenção do trauma cervical.",
        "correta": false,
        "explicacao": "O Colégio publicou o relatório sobre qualificação em 1965 para serviços de emergência e trauma, mas não estabeleceu a padronização das técnicas de RCP."
      },
      {
        "id": "D",
        "texto": "O International Liaison Committee on Resuscitation (ILCOR), que aliou a ampliação do acesso ao conhecimento à padronização rigorosa do suporte à vida.",
        "correta": true,
        "explicacao": "A padronização das técnicas de reanimação pelo ILCOR foi determinante para consolidar a RCP como prática mundial e efetiva, permitindo o ensino unificado a leigos."
      }
    ]
  },
  {
    "id": 394,
    "pergunta": "O atendimento de primeiros socorros em cenários de guerras e conflitos armados passou por uma profunda transformação ética e logística durante o século XIX. Qual evento específico, ocorrido em 1864, moldou definitivamente as bases do socorro humanitário?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A formulação da doutrina de Morte Acidental e Deficiência, transferindo a responsabilidade do socorro militar para as entidades civis organizadas.",
        "correta": false,
        "explicacao": "O livro branco 'Morte Acidental e Deficiência' foi publicado em 1967 nos Estados Unidos, marcando a Era Farrington, um século após o evento em questão."
      },
      {
        "id": "B",
        "texto": "A criação da Cruz Vermelha, que estabeleceu e consolidou internacionalmente a neutralidade do atendimento médico nos campos de batalha.",
        "correta": true,
        "explicacao": "A fundação da entidade em 1864 estabeleceu o princípio de que o socorro aos feridos de guerra deveria ocorrer de forma neutra e imparcial, protegendo as equipes de saúde."
      },
      {
        "id": "C",
        "texto": "A adoção oficial de ambulâncias tracionadas a cavalo pelos exércitos, revolucionando a extração sob fogo cruzado na linha de frente.",
        "correta": false,
        "explicacao": "O uso logístico de ambulâncias foi implementado anteriormente pelo Barão Dominique Jean Larrey durante o império de Napoleão."
      },
      {
        "id": "D",
        "texto": "A publicação dos protocolos de ressuscitação em afogamentos pelas sociedades humanitárias de Copenhague e Massachusetts.",
        "correta": false,
        "explicacao": "Essas sociedades surgiram no século XVIII para tratar prioritariamente da asfixia civil e mortes aparentes, não possuindo vínculo primário com o socorro em campo de guerra."
      }
    ]
  },
  {
    "id": 395,
    "pergunta": "A denominada 'Era Moderna' do atendimento pré-hospitalar, estabelecida a partir da década de 1970, caracterizou-se pelo reconhecimento de que pacientes traumatizados necessitam de abordagens diagnósticas diferenciadas em relação a emergências cardíacas. Qual ferramenta clínica surgiu nesse período como um marco global na avaliação do trauma?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A priorização do mnemônico XABCDE, criado para estancar hemorragias exsanguinantes imediatamente e reverter o choque volêmico de forma invasiva.",
        "correta": false,
        "explicacao": "A inclusão da letra 'X' no protocolo de suporte avançado de vida no trauma para controle imediato de hemorragia exsanguinante é uma atualização doutrinária muito recente, não um marco clínico da década de 1970."
      },
      {
        "id": "B",
        "texto": "A introdução das manobras de ventilação artificial posicional e desobstrução cega com base nos métodos estruturados de Schafer e Silvester.",
        "correta": false,
        "explicacao": "Tais técnicas mecânicas e posturais foram dominantes no período entre 1850 e 1950, perdendo força com o advento da moderna RCP."
      },
      {
        "id": "C",
        "texto": "A Escala de Coma de Glasgow, desenvolvida e disseminada com o propósito de avaliar, de forma padronizada e reprodutível, o nível de consciência das vítimas.",
        "correta": true,
        "explicacao": "A década de 1970 marcou a introdução de currículos formais e ferramentas diagnósticas agudas nas ruas, sendo a Escala de Glasgow a principal métrica neurológica inserida no cenário mundial."
      },
      {
        "id": "D",
        "texto": "O estabelecimento prático do conceito 'Death in a Ditch', voltado ao emprego de torniquetes improvisados e extração de vítimas presas nas ferragens.",
        "correta": false,
        "explicacao": "O artigo de referência 'Death in a Ditch' foi publicado pelo médico Farrington em um período anterior (nas décadas de 50 a 70), originando a 'Era Farrington' de profissionalização do sistema de ambulâncias."
      }
    ]
  },
{
"id": 396,
"pergunta": "O desenvolvimento da Reanimação Cardiopulmonar (RCP) moderna envolveu diferentes descobertas ao longo do tempo. Qual marco histórico foi decisivo para a consolidação do modelo atual de RCP, combinando compressões torácicas e ventilação artificial?",
"alternativas": [
{
"id": "A",
"texto": "A introdução exclusiva da ventilação mecânica sem compressões torácicas.",
"correta": false,
"explicacao": "Incorreto. A ventilação isolada não é suficiente para manter circulação sanguínea eficaz em parada cardíaca."
},
{
"id": "B",
"texto": "A demonstração, em 1960, de que compressões torácicas externas geravam circulação sanguínea adequada, associadas à ventilação.",
"correta": true,
"explicacao": "Correto. Estudos de Kouwenhoven, Jude e Knickerbocker demonstraram a eficácia das compressões torácicas, consolidando o modelo moderno de RCP."
},
{
"id": "C",
"texto": "A substituição total das compressões por medicamentos vasopressores.",
"correta": false,
"explicacao": "Incorreto. Medicamentos são complementares, não substituem compressões na RCP."
},
{
"id": "D",
"texto": "A proibição da ventilação boca a boca por motivos éticos.",
"correta": false,
"explicacao": "Incorreto. A ventilação ainda pode ser utilizada conforme protocolos, dependendo do contexto."
}
]
},
{
"id": 397,
"pergunta": "O Serviço de Atendimento Móvel de Urgência (SAMU) desempenha papel fundamental no sistema de saúde brasileiro. Qual é o principal objetivo desse serviço dentro da rede de atenção às urgências?",
"alternativas": [
{
"id": "A",
"texto": "Realizar apenas consultas médicas domiciliares agendadas.",
"correta": false,
"explicacao": "Incorreto. O SAMU atua em urgências e emergências, não em atendimentos eletivos."
},
{
"id": "B",
"texto": "Garantir atendimento rápido e qualificado em situações de emergência, com regulação e suporte pré-hospitalar.",
"correta": true,
"explicacao": "Correto. O SAMU integra a rede de urgência, realizando atendimento pré-hospitalar e transporte adequado."
},
{
"id": "C",
"texto": "Substituir integralmente os hospitais no atendimento de traumas graves.",
"correta": false,
"explicacao": "Incorreto. O SAMU estabiliza e transporta, mas não substitui o atendimento hospitalar."
},
{
"id": "D",
"texto": "Atuar exclusivamente em campanhas de vacinação.",
"correta": false,
"explicacao": "Incorreto. Vacinação não é função do SAMU."
}
]
},
{
"id": 398,
"pergunta": "De acordo com o Artigo 135 do Código Penal Brasileiro, a omissão de socorro pode configurar crime. Em qual situação essa infração se caracteriza corretamente?",
"alternativas": [
{
"id": "A",
"texto": "Quando uma pessoa tenta ajudar uma vítima e não obtém sucesso.",
"correta": false,
"explicacao": "Incorreto. A tentativa de ajuda não configura crime, mesmo sem sucesso."
},
{
"id": "B",
"texto": "Quando alguém deixa de prestar assistência ou de acionar ajuda a uma vítima em perigo, podendo agir sem risco pessoal.",
"correta": true,
"explicacao": "Correto. O artigo 135 pune a omissão quando é possível ajudar ou chamar socorro sem risco próprio."
},
{
"id": "C",
"texto": "Quando o socorrista realiza primeiros socorros e causa agravamento acidental do quadro.",
"correta": false,
"explicacao": "Incorreto. O agravamento acidental não caracteriza omissão de socorro."
},
{
"id": "D",
"texto": "Quando apenas profissionais de saúde deixam de atender pacientes fora do hospital.",
"correta": false,
"explicacao": "Incorreto. A obrigação de assistência se estende a qualquer cidadão, dentro dos limites legais."
}
]
},
{
"id": 399,
"pergunta": "Em situações de emergência, o consentimento da vítima é um princípio ético e legal importante. Qual conduta representa corretamente o consentimento implícito?",
"alternativas": [
{
"id": "A",
"texto": "A vítima consciente assina um termo autorizando o atendimento.",
"correta": false,
"explicacao": "Incorreto. Isso caracteriza consentimento expresso, não implícito."
},
{
"id": "B",
"texto": "A vítima inconsciente recebe atendimento presumido como autorizado, devido à impossibilidade de manifestação.",
"correta": true,
"explicacao": "Correto. O consentimento implícito ocorre quando se presume que a vítima aceitaria o atendimento em risco de vida."
},
{
"id": "C",
"texto": "A vítima recusa verbalmente o atendimento e mesmo assim é atendida sem justificativa.",
"correta": false,
"explicacao": "Incorreto. Ignorar recusa consciente pode gerar implicações legais."
},
{
"id": "D",
"texto": "O socorrista decide não atender sem avaliar a condição da vítima.",
"correta": false,
"explicacao": "Incorreto. A omissão sem avaliação não se relaciona ao conceito de consentimento."
}
]
},
{
"id": 400,
"pergunta": "Durante o atendimento pré-hospitalar, medidas de biossegurança são fundamentais para proteger o socorrista e a vítima. Qual das alternativas representa uma prática correta nesse contexto?",
"alternativas": [
{
"id": "A",
"texto": "Evitar qualquer contato físico com a vítima em qualquer situação.",
"correta": false,
"explicacao": "Incorreto. O contato pode ser necessário e seguro quando há proteção adequada."
},
{
"id": "B",
"texto": "Utilizar equipamentos de proteção individual, como luvas descartáveis, para evitar contato com fluidos corporais.",
"correta": true,
"explicacao": "Correto. O uso de EPIs reduz o risco de contaminação por agentes biológicos."
},
{
"id": "C",
"texto": "Priorizar o atendimento mesmo sem qualquer proteção para evitar atraso no socorro.",
"correta": false,
"explicacao": "Incorreto. A ausência de proteção aumenta riscos biológicos desnecessários."
},
{
"id": "D",
"texto": "Substituir equipamentos de proteção por improvisos não esterilizados.",
"correta": false,
"explicacao": "Incorreto. Improvisos aumentam risco de infecção e não seguem normas de biossegurança."
}
]
},
{
"id": 401,
"pergunta": "No contexto histórico da RCP, diversas técnicas de ventilação artificial foram utilizadas antes da consolidação do modelo atual. Qual foi uma das principais limitações dessas técnicas antigas (como Silvester, Schafer e Holger-Nielsen) que levou à sua substituição?",
"alternativas": [
{
"id": "A",
"texto": "Eram eficazes para manter a circulação sanguínea sem necessidade de compressões.",
"correta": false,
"explicacao": "Incorreto. Essas técnicas não garantiam circulação sanguínea adequada, pois focavam apenas na ventilação."
},
{
"id": "B",
"texto": "Não consideravam adequadamente a importância da desobstrução das vias aéreas e da circulação combinada.",
"correta": true,
"explicacao": "Correto. Posteriormente compreendeu-se que a combinação de vias aéreas desobstruídas e compressões torácicas é essencial."
},
{
"id": "C",
"texto": "Substituíam completamente a necessidade de atendimento hospitalar.",
"correta": false,
"explicacao": "Incorreto. Nenhuma técnica de ventilação substitui o atendimento hospitalar definitivo."
},
{
"id": "D",
"texto": "Eram baseadas exclusivamente em medicamentos intravenosos.",
"correta": false,
"explicacao": "Incorreto. Essas técnicas eram manuais, sem uso de medicamentos."
}
]
},
{
"id": 402,
"pergunta": "No atendimento pré-hospitalar ao trauma, o Barão Dominique Jean Larrey teve grande importância histórica. Qual foi uma de suas principais contribuições para a organização desse tipo de atendimento?",
"alternativas": [
{
"id": "A",
"texto": "Criação de hospitais especializados exclusivamente em cirurgia cardíaca.",
"correta": false,
"explicacao": "Incorreto. Isso não faz parte das contribuições de Larrey no contexto militar histórico."
},
{
"id": "B",
"texto": "Implementação de ambulâncias móveis para atendimento rápido em campo de batalha e introdução da triagem de feridos.",
"correta": true,
"explicacao": "Correto. Larrey criou ambulâncias móveis e estabeleceu princípios como triagem e atendimento rápido."
},
{
"id": "C",
"texto": "Desenvolvimento da Escala de Coma de Glasgow.",
"correta": false,
"explicacao": "Incorreto. A Escala de Coma de Glasgow foi desenvolvida no século XX."
},
{
"id": "D",
"texto": "Criação do sistema SAMU no Brasil.",
"correta": false,
"explicacao": "Incorreto. O SAMU foi criado no Brasil no século XX, muito após Larrey."
}
]
},
{
"id": 403,
"pergunta": "Em relação ao comportamento legal e ético no atendimento de primeiros socorros, qual situação pode gerar responsabilização jurídica do socorrista?",
"alternativas": [
{
"id": "A",
"texto": "Acionar o serviço de emergência ao invés de realizar atendimento direto por falta de capacitação.",
"correta": false,
"explicacao": "Incorreto. Acionar ajuda especializada é uma conduta correta e não gera responsabilidade."
},
{
"id": "B",
"texto": "Prestar socorro com uso adequado de técnicas e dentro dos limites de conhecimento do socorrista.",
"correta": false,
"explicacao": "Incorreto. Agir corretamente dentro da capacitação não gera responsabilização."
},
{
"id": "C",
"texto": "Omitir socorro a uma vítima em perigo quando era possível ajudar sem risco pessoal.",
"correta": true,
"explicacao": "Correto. A omissão de socorro, conforme o Art. 135 do Código Penal, pode gerar responsabilização legal."
},
{
"id": "D",
"texto": "Solicitar apoio de testemunhas durante o atendimento de emergência.",
"correta": false,
"explicacao": "Incorreto. Buscar apoio e testemunhas pode ser uma medida adequada e não implica infração."
}
]
}
];

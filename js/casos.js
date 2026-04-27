const bancoDeCasos = [
  {
    id: "cenario_01",
    titulo: "Almoço Interrompido (Engasgo severo)",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Você está almoçando em um restaurante lotado quando um homem na mesa ao lado levanta abruptamente, agarrando o pescoço com as duas mãos. Ele está com os olhos arregalados, o rosto avermelhado e não emite nenhum som.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual a sua primeira ação ao perceber a situação?",
        tag_visual_detalhe: "estado_engasgo_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Oferecer um copo de água imediatamente para ajudar a empurrar o alimento.",
            correta: false,
            feedback: "Mito perigoso. Dar líquidos a uma pessoa com obstrução severa (que não consegue tossir ou falar) pode piorar o engasgo e direcionar o líquido para os pulmões."
          },
          {
            id: "B",
            texto: "Bater forte nas costas dele com ele em pé e reto.",
            correta: false,
            feedback: "Bater nas costas de uma pessoa na posição ereta pode fazer com que o objeto desça ainda mais pelas vias aéreas, agravando a obstrução."
          },
          {
            id: "C",
            texto: "Perguntar 'Você está engasgado?' e, se ele não conseguir falar ou tossir, iniciar a Manobra de Heimlich (compressões abdominais).",
            correta: true,
            feedback: "Correto. O sinal universal de asfixia (mãos no pescoço) e a incapacidade de falar/tossir indicam obstrução severa. A Manobra de Heimlich deve ser iniciada imediatamente."
          },
          {
            id: "D",
            texto: "Deitá-lo no chão e iniciar massagem cardíaca.",
            correta: false,
            feedback: "Incorreto. A vítima ainda está consciente e em pé. A massagem cardíaca (RCP) só é indicada se a vítima perder a consciência e parar de respirar normalmente."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você aplicou algumas compressões abdominais, mas de repente o homem amolece, perde a consciência e desliza para o chão.",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Colocar o dedo na boca dele às cegas para tentar puxar o alimento.",
            correta: false,
            feedback: "Varredura às cegas não é recomendada pelas diretrizes, pois pode empurrar o corpo estranho ainda mais fundo nas vias aéreas."
          },
          {
            id: "B",
            texto: "Gritar por ajuda, pedir para alguém ligar para o SAMU (192) ou Bombeiros (193) e iniciar compressões torácicas (RCP).",
            correta: true,
            feedback: "Correto. Quando uma vítima de engasgo se torna irresponsiva (inconsciente), o protocolo orienta acionar o resgate e iniciar imediatamente a Reanimação Cardiopulmonar (RCP), começando pelas compressões torácicas."
          },
          {
            id: "C",
            texto: "Fazer respiração boca-a-boca contínua para forçar o ar passar pelo bloqueio.",
            correta: false,
            feedback: "Incorreto. Sem realizar as compressões torácicas, o sangue não circula. Além disso, as compressões torácicas aumentam a pressão intratorácica e podem ajudar a expelir o objeto."
          },
          {
            id: "D",
            texto: "Jogar água fria no rosto dele e usar álcool para ele cheirar.",
            correta: false,
            feedback: "Isso é um mito popular. Não tem nenhuma eficácia para reverter uma parada respiratória por obstrução de vias aéreas e apenas atrasa a RCP."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você pediu para ligarem para o 192 e se ajoelhou ao lado do paciente para iniciar as compressões torácicas. Como você deve realizá-las?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Com dois dedos sobre o estômago, empurrando levemente para não quebrar as costelas.",
            correta: false,
            feedback: "Incorreto. As compressões em adultos devem ser feitas no centro do peito (osso esterno) com o calcanhar das duas mãos."
          },
          {
            id: "B",
            texto: "No centro do peito, com força e rapidez (100 a 120 por minuto), permitindo o retorno total do peito após cada compressão.",
            correta: true,
            feedback: "Correto! Segundo as diretrizes da AHA, compressões de alta qualidade devem ter profundidade adequada (pelo menos 5 cm) e frequência de 100 a 120 compressões por minuto, permitindo o retorno total do tórax."
          },
          {
            id: "C",
            texto: "No lado esquerdo do peito, bem em cima do coração, num ritmo bem lento para o coração descansar.",
            correta: false,
            feedback: "Incorreto. As compressões são no centro do peito (esterno), e o ritmo deve ser rápido (100 a 120 por minuto), caso contrário não haverá fluxo sanguíneo suficiente para o cérebro."
          },
          {
            id: "D",
            texto: "Interromper a cada 5 segundos para verificar se ele voltou a respirar.",
            correta: false,
            feedback: "Incorreto. Interrupções constantes diminuem drasticamente a chance de sobrevivência. Você deve continuar as compressões até o SAMU chegar, a vítima reagir ou um DEA estar pronto."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_02",
    titulo: "Acidente na Avenida (Trauma e Hemorragia)",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você está voltando do trabalho e presencia um motociclista colidir contra um carro parado. Ele é arremessado e cai no meio da via. Há muito trânsito no local e os carros estão desviando dele perigosamente.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você para seu carro no acostamento. Qual a primeira atitude antes de se aproximar da vítima?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr até a vítima imediatamente para ver se ela está respirando.",
            correta: false,
            feedback: "Incorreto. Correr para uma via movimentada sem garantir a segurança da cena (sinalização) pode resultar em um novo acidente, tornando você uma segunda vítima."
          },
          {
            id: "B",
            texto: "Garantir a segurança da cena: ligar o pisca-alerta do seu carro, usar o triângulo de sinalização em distância segura e pedir para outros motoristas reduzirem a velocidade.",
            correta: true,
            feedback: "Correto. O protocolo básico de trauma ensina que a segurança da cena é a prioridade absoluta. Se a cena não é segura, o socorrista não deve intervir até que seja controlada."
          },
          {
            id: "C",
            texto: "Arrastar a vítima pelas pernas para a calçada o mais rápido possível.",
            correta: false,
            feedback: "Incorreto. Movimentar vítimas de trauma (exceto em risco iminente de explosão/fogo no local) pode agravar lesões na coluna cervical, causando paralisia irreversível."
          },
          {
            id: "D",
            texto: "Tirar o capacete do motociclista para facilitar a respiração dele.",
            correta: false,
            feedback: "Erro crítico. O capacete NUNCA deve ser retirado por pessoas leigas, pois a remoção inadequada pode causar lesão medular grave."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está sinalizada. Você se aproxima e percebe que o motociclista está consciente, mas tem um sangramento intenso e pulsante na perna direita (esguichando muito sangue).",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Lavar a ferida com água mineral para evitar infecções e aguardar o socorro.",
            correta: false,
            feedback: "Incorreto. Lavar não controla hemorragia exsanguinante (que mata em minutos). O controle do sangramento é a prioridade."
          },
          {
            id: "B",
            texto: "Ligar 192, pedir ajuda e fazer compressão direta firme sobre o ferimento usando um pano limpo.",
            correta: true,
            feedback: "Correto. Hemorragias intensas (massivas) devem ser controladas imediatamente com compressão direta, conforme os protocolos de contenção de hemorragias para leigos."
          },
          {
            id: "C",
            texto: "Dar um analgésico e um copo de água com açúcar para acalmá-lo.",
            correta: false,
            feedback: "Incorreto. Nunca dê alimentos, líquidos ou medicamentos a uma vítima de trauma grave. Ela pode precisar de cirurgia, além do risco de engasgo."
          },
          {
            id: "D",
            texto: "Amarrar um cinto frouxo na perna dele apenas para diminuir a circulação.",
            correta: false,
            feedback: "Incorreto. Torniquetes improvisados com cintos ou aplicados de forma frouxa são ineficazes e podem agravar o sangramento e causar lesão nos tecidos."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! O sangue rapidamente encharcou o primeiro pano que você colocou sobre o ferimento e continua vazando pela perna.",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Retirar o pano ensanguentado para avaliar a ferida e colocar um novo pano limpo.",
            correta: false,
            feedback: "Incorreto. Retirar o pano que já está lá destrói os coágulos que estavam começando a se formar, reiniciando o sangramento desde o início."
          },
          {
            id: "B",
            texto: "Colocar outro pano limpo POR CIMA do primeiro e aplicar ainda mais força com as duas mãos ou peso do corpo.",
            correta: true,
            feedback: "Correto! O protocolo dita que panos encharcados não devem ser removidos. Coloque mais panos sobre o primeiro e aumente a pressão."
          },
          {
            id: "C",
            texto: "Desistir de fazer pressão e jogar pó de café na ferida para estancar o sangue.",
            correta: false,
            feedback: "Mito. Substâncias estranhas na ferida causarão infecção grave, dificultarão a limpeza no hospital e não são eficientes contra sangramentos arteriais/severos."
          },
          {
            id: "D",
            texto: "Fazer uma massagem na perna para espalhar o sangue coagulado.",
            correta: false,
            feedback: "Incorreto. Massagem em áreas com trauma e hemorragia ativa só agrava a lesão e aumenta a perda de sangue."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_03",
    titulo: "Queda no Supermercado (Mal súbito e convulsão)",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Você está no corredor de enlatados quando um jovem cliente ao seu lado murmura que está tonto e desaba de forma repentina no chão.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "O que você faz nos primeiros segundos em que ele cai?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Joga água gelada no rosto dele e bate no rosto dele para acordá-lo.",
            correta: false,
            feedback: "Incorreto. Jogar água pode causar aspiração, e bater no rosto é agressão, não um método médico de avaliação."
          },
          {
            id: "B",
            texto: "O apoia no seu colo sentando-o encostado na prateleira e tenta dar água.",
            correta: false,
            feedback: "Incorreto. Tentar sentar e dar líquidos a alguém que desmaiou pode causar obstrução da via aérea e risco grave de engasgo."
          },
          {
            id: "C",
            texto: "Aproxima-se com cuidado, chama-o em voz alta ('Você está bem?') batendo levemente em seus ombros.",
            correta: true,
            feedback: "Correto. Esta é a técnica de avaliação de responsividade (verificar o nível de consciência) indicada pelas diretrizes internacionais."
          },
          {
            id: "D",
            texto: "Inicia compressões no peito dele imediatamente, antes mesmo de avaliar.",
            correta: false,
            feedback: "Incorreto. Ele pode apenas ter desmaiado e estar respirando e com pulso. A massagem cardíaca sem avaliação prévia não é indicada."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! Antes que você possa avaliar melhor, o corpo dele começa a ter contrações bruscas e descontroladas. A boca começa a salivar e os olhos viram para cima.",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Abrir a boca dele à força e puxar a língua para fora para evitar que ele se sufoque.",
            correta: false,
            feedback: "Mito gravíssimo! Puxar a língua ou colocar objetos na boca durante uma convulsão pode causar ferimentos graves nas mãos do socorrista e nos dentes/mandíbula da vítima. A língua não é 'engolida'."
          },
          {
            id: "B",
            texto: "Segurar firmemente os braços e as pernas da vítima contra o chão para tentar parar os tremores.",
            correta: false,
            feedback: "Incorreto. Conter os movimentos da vítima pode resultar em fraturas ósseas graves e lesões articulares."
          },
          {
            id: "C",
            texto: "Afastar os objetos ao redor (carrinhos, latas), proteger a cabeça dele com algo macio (uma blusa ou almofada) e aguardar a crise passar.",
            correta: true,
            feedback: "Correto. O atendimento à convulsão visa prevenir traumas secundários. Proteja a cabeça, afaste objetos perigosos e cronometre o tempo da crise."
          },
          {
            id: "D",
            texto: "Jogar sal embaixo da língua dele.",
            correta: false,
            feedback: "Mito perigoso. Além de não parar a convulsão, colocar substâncias na boca da pessoa em crise causa risco imediato de asfixia e aspiração para os pulmões."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Após cerca de 2 minutos, os tremores param. Ele está respirando de forma pesada e ruidosa, e ainda inconsciente (estado pós-ictal).",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Virar a vítima suavemente de lado (Posição Lateral de Segurança) enquanto aguarda o SAMU.",
            correta: true,
            feedback: "Correto. A Posição Lateral de Segurança (PLS) mantém as vias aéreas abertas e evita que a saliva ou vômito asfixiem a vítima inconsciente que respira."
          },
          {
            id: "B",
            texto: "Fazer respiração boca-a-boca até ele acordar totalmente.",
            correta: false,
            feedback: "Incorreto. Se a vítima está respirando (mesmo que pesado), ventilação de resgate ou massagem cardíaca não é necessária nem indicada."
          },
          {
            id: "C",
            texto: "Levantar a vítima rapidamente para ver se ela consegue andar.",
            correta: false,
            feedback: "Incorreto. Após a convulsão o cérebro precisa se recuperar (período pós-ictal). A pessoa estará desorientada e as pernas não terão força, havendo grande risco de queda."
          },
          {
            id: "D",
            texto: "Colocar o dedo na garganta dele para induzir o vômito.",
            correta: false,
            feedback: "Incorreto. Induzir o vômito em alguém inconsciente garante que o conteúdo estomacal vá para o pulmão (broncoaspiração), podendo ser letal."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_04",
    titulo: "O Café Quente (Acidente doméstico - Queimadura)",
    tag_visual_cenario: "cenario_cozinha",
    descricao_inicial: "Em casa, uma pessoa esbarra no fogão e derruba uma panela com água e café fervendo por cima do próprio antebraço. A pessoa grita de dor e a pele rapidamente começa a ficar vermelha e com bolhas aparecendo.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ouvindo os gritos, você entra na cozinha. Qual o seu primeiro passo para tratar a queimadura localmente?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Passar pasta de dente ou manteiga na área afetada para aliviar o calor e a dor.",
            correta: false,
            feedback: "Mito popular prejudicial. Produtos químicos e gordurosos isolam o calor na pele, aprofundam a queimadura e aumentam drasticamente o risco de infecção."
          },
          {
            id: "B",
            texto: "Colocar imediatamente a área afetada sob água corrente limpa e em temperatura ambiente por cerca de 10 a 15 minutos.",
            correta: true,
            feedback: "Correto. O resfriamento com água corrente e limpa interrompe a queima das camadas da pele e alivia a dor. Deve ser feito imediatamente."
          },
          {
            id: "C",
            texto: "Colocar gelo diretamente sobre a queimadura.",
            correta: false,
            feedback: "Incorreto. O gelo direto ou água excessivamente gelada pode causar isquemia (falta de sangue) e queimar a pele ainda mais pelo frio."
          },
          {
            id: "D",
            texto: "Esfregar sabão com bucha suavemente para tirar todo o café quente da pele.",
            correta: false,
            feedback: "Incorreto. Esfregar tecidos danificados agrava a lesão da pele e aumenta intensamente a dor e o risco de cicatrizes graves."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A vítima está usando um relógio de metal apertado e algumas pulseiras no braço queimado. O que fazer?",
        tag_visual_detalhe: "acao_resfriamento_agua",
        opcoes: [
          {
            id: "A",
            texto: "Remover cuidadosamente os adornos (relógio, anéis, pulseiras) o quanto antes, enquanto a pele esfria na água.",
            correta: true,
            feedback: "Correto. Áreas queimadas tendem a inchar muito rápido (edema). Adornos podem garrotear a circulação, agindo como torniquetes inadvertidos."
          },
          {
            id: "B",
            texto: "Deixar os adornos no local para ajudar a conter o inchaço.",
            correta: false,
            feedback: "Incorreto. Os adornos não contêm o inchaço, eles estrangulam a circulação local quando o membro incha, podendo causar necrose."
          },
          {
            id: "C",
            texto: "Aquecer os metais com um isqueiro para expandi-los e facilitar a retirada.",
            correta: false,
            feedback: "Incorreto e perigoso. Aquecer objetos perto da área queimada causará queimaduras de terceiro grau instantaneamente."
          },
          {
            id: "D",
            texto: "Puxar as roupas do braço que grudaram na pele queimada.",
            correta: false,
            feedback: "Incorreto. Nunca puxe roupas ou tecidos que tenham grudado (aderido) à queimadura. Isso arrancará a pele junto. Resfrie por cima ou corte o tecido ao redor."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Após os 15 minutos de resfriamento, grandes bolhas se formaram no braço da vítima. Qual o procedimento para protegê-las até chegar ao hospital?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Estourar as bolhas com uma agulha esterilizada com fogo para tirar a pressão da pele e depois enfaixar.",
            correta: false,
            feedback: "Mito grave. As bolhas são a barreira biológica natural do corpo contra infecções. Rompê-las deixa a carne viva exposta e suscetível à contaminação."
          },
          {
            id: "B",
            texto: "Cobrir a área com uma gaze ou pano limpo e seco, sem apertar (de forma frouxa), evitando romper as bolhas. Não furar nem remover as bolhas. Se possível, manter a região elevada e proteger contra atrito até chegar ao hospital.",
            correta: true,
            feedback: "Correto. Cobrir a ferida de forma limpa protege contra contaminação do ar, evita dor ao toque do vento e mantém a área limpa para o atendimento médico."
          },
          {
            id: "C",
            texto: "Passar bastante pomada antibiótica e enrolar com algodão apertado.",
            correta: false,
            feedback: "Incorreto. Não aplique pomadas sem prescrição. Além disso, o algodão grudará completamente na carne queimada e trará enorme sofrimento para remoção no hospital."
          },
          {
            id: "D",
            texto: "Apertar a ferida com um curativo muito firme para diminuir a dor e esconder o machucado.",
            correta: false,
            feedback: "Incorreto. A área queimada não deve ser comprimida devido à dor intensa e aumento da lesão térmica e edema."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_05",
    titulo: "Sorriso Torto (Suspeita de AVC)",
    tag_visual_cenario: "cenario_interno_comum",
    descricao_inicial: "Você está no almoço de domingo da família. De repente, seu avô deixa o garfo cair da mão direita, olha assustado para você e tenta falar, mas as palavras saem arrastadas e incompreensíveis.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "O que você suspeita e como você pode testar rapidamente essa suspeita?",
        tag_visual_detalhe: "estado_avc_assimetria",
        opcoes: [
          {
            id: "A",
            texto: "Suspeita de AVC. Realizo a escala de SAMU: Peço para ele dar um Sorriso, dar um Abraço e repetir uma Mensagem simples.",
            correta: true,
            feedback: "Correto. O teste do SAMU (Sorriso, Abraço/levantar braços, Mensagem/repetir frase, Urgência) é o método rápido para leigos identificarem os sinais clássicos do AVC (Acidente Vascular Cerebral)."
          },
          {
            id: "B",
            texto: "Suspeita de infarto. Coloco a mão no peito dele para checar dor e dou uma aspirina mastigável.",
            correta: false,
            feedback: "Incorreto. Os sintomas descritos (perda de força em um lado e fala arrastada) são sinais neurológicos típicos de AVC, não de infarto cardíaco."
          },
          {
            id: "C",
            texto: "Suspeita de cansaço agudo. Peço para ele deitar no sofá por 2 horas e observar.",
            correta: false,
            feedback: "Incorreto. Perda de função motora e da fala subitamente são emergências médicas absolutas, cada minuto esperando significa perda de neurônios irreversível (Tempo é cérebro)."
          },
          {
            id: "D",
            texto: "Suspeita de queda de pressão. Coloco um pouco de sal na língua dele.",
            correta: false,
            feedback: "Incorreto. Essa conduta não testa sintomas. Além disso, a maioria dos AVCs está ligada a pressão muito alta, e dar sal poderia agravar extremamente o quadro."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "O teste confirmou que o lado direito do rosto dele 'caiu' ao tentar sorrir, e ele não consegue erguer o braço direito. Qual a ação mais urgente agora?",
        tag_visual_detalhe: "estado_avc_assimetria",
        opcoes: [
          {
            id: "A",
            texto: "Dar o remédio de pressão diário dele o mais rápido possível.",
            correta: false,
            feedback: "Incorreto. O corpo muitas vezes eleva a pressão em um AVC na tentativa de enviar sangue para a área afetada do cérebro. Reduzir a pressão de forma abrupta sem orientação médica pode causar a morte celular."
          },
          {
            id: "B",
            texto: "Furar a ponta dos dedos dele com uma agulha para sangrar.",
            correta: false,
            feedback: "Mito muito comum e perigoso nas redes sociais. Isso não ajuda o cérebro em absolutamente nada e retarda o acionamento do socorro médico especializado."
          },
          {
            id: "C",
            texto: "Ligar imediatamente para o 192 (SAMU) e anotar o horário exato em que os sintomas começaram.",
            correta: true,
            feedback: "Correto. Ligar imediatamente para o 192 (SAMU) é essencial, pois o AVC é uma emergência médica tempo-dependente. Anotar o horário exato de início dos sintomas é fundamental, pois determina se o paciente pode receber tratamento como trombolíticos, que podem reduzir ou reverter os danos."
          },
          {
            id: "D",
            texto: "Colocá-lo debaixo do chuveiro frio para estimular os sentidos.",
            correta: false,
            feedback: "Incorreto. O choque térmico pode causar estresse, elevação súbita da pressão arterial ou queda com lesões adicionais, prejudicando o paciente."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! Uma tia apavorada vem correndo com um copo grande de água com açúcar e exige dar na boca do seu avô para ele 'voltar ao normal'. O que você diz a ela?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Pode dar um pouco, mas apenas se for aos goles e se ele estiver sentado e com a cabeça reta.",
            correta: false,
            feedback: "Incorreto. O risco se mantém altíssimo. A fraqueza muscular do lado direito afeta a garganta e a deglutição, engasgos podem ser mortais."
          },
          {
            id: "B",
            texto: "Não podemos dar nada pela boca! O AVC enfraquece os músculos da garganta e ele pode engasgar, enviar o líquido para os pulmões e morrer.",
            correta: true,
            feedback: "Correto. A restrição oral (nada pela boca) é regra de ouro em pacientes com suspeita de AVC devido à disfagia (dificuldade de engolir) e alto risco de broncoaspiração."
          },
          {
            id: "C",
            texto: "O açúcar puro embaixo da língua tem efeito mais rápido. Vamos usar açúcar cristal no lugar da água.",
            correta: false,
            feedback: "Incorreto. Apenas o fato de ter algo na boca já traz risco em paciente com suspeita neurológica grave. Além disso, o quadro não é de hipoglicemia aparente."
          },
          {
            id: "D",
            texto: "Vamos dar a água para tranquilizá-la, mas farei massagem cardíaca depois se algo der errado.",
            correta: false,
            feedback: "Incorreto. Jamais provoque uma situação de alto risco de morte sob pretexto de acalmar os familiares. O foco principal é a proteção da vida do seu avô."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_06",
    titulo: "A Bolada no Rosto (Sangramento Nasal - Epistaxe)",
    tag_visual_cenario: "quadra_esportes",
    descricao_inicial: "Durante um jogo de futsal na quadra do bairro, um jovem recebe uma bolada forte no rosto. Ele cai sentado e o nariz dele começa a sangrar intensamente, sujando toda a camisa. Ele está apavorado.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Como você orienta a vítima a se posicionar para controlar o sangramento?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Pedir para ele deitar no chão de barriga para cima até o sangue parar.",
            correta: false,
            feedback: "Incorreto. Deitar fará com que o sangue escorra para a garganta, podendo causar engasgo, náuseas e vômitos."
          },
          {
            id: "B",
            texto: "Pedir para ele inclinar a cabeça o máximo possível para trás, olhando para o teto.",
            correta: false,
            feedback: "Mito muito comum! Inclinar a cabeça para trás não para o sangramento, apenas direciona o sangue para o estômago e vias aéreas, causando risco de engasgo e vômito."
          },
          {
            id: "C",
            texto: "Pedir para ele sentar, inclinar a cabeça levemente para a frente e apertar a parte mole do nariz (narinas) como uma pinça.",
            correta: true,
            feedback: "Correto. Inclinar para frente evita que o sangue vá para a garganta. Pinçar a parte mole do nariz faz pressão direta sobre os vasos rompidos, estancando a hemorragia."
          },
          {
            id: "D",
            texto: "Enfiar algodão ou papel higiênico bem fundo dentro do nariz dele para absorver o sangue.",
            correta: false,
            feedback: "Incorreto. Colocar objetos no nariz pode machucar ainda mais a mucosa, e ao retirar o algodão, o coágulo formado será arrancado, reiniciando o sangramento."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você o posicionou corretamente apertando o nariz. Quanto tempo ele deve manter essa pressão antes de soltar para verificar se parou?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "1 a 2 minutos, soltando sempre para ver se já parou.",
            correta: false,
            feedback: "Incorreto. Soltar a pressão a todo momento impede a formação do coágulo sanguíneo."
          },
          {
            id: "B",
            texto: "10 a 15 minutos contínuos, respirando pela boca.",
            correta: true,
            feedback: "Correto. O corpo precisa de pelo menos 10 minutos de pressão ininterrupta para formar um coágulo firme o suficiente para estancar o sangramento."
          },
          {
            id: "C",
            texto: "Meia hora, no mínimo, sem exceção.",
            correta: false,
            feedback: "Incorreto. Se o sangramento forte não parar após 15 a 20 minutos de pressão contínua, é indicativo de buscar ajuda médica (pronto-socorro)."
          },
          {
            id: "D",
            texto: "Ele não deve apertar, deve assoar o nariz com força para tirar o sangue ruim.",
            correta: false,
            feedback: "Incorreto. Assoar o nariz aumentará a pressão nos vasos sanguíneos locais e destruirá qualquer coágulo em formação, piorando a situação."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "O sangramento parou após 12 minutos. Qual a principal recomendação que você dá a ele agora?",
        tag_visual_detalhe: "sangramento_nasal_controlado",
        opcoes: [
          {
            id: "A",
            texto: "Voltar imediatamente para o jogo de futsal para aquecer o corpo.",
            correta: false,
            feedback: "Incorreto. O esforço físico aumenta a pressão arterial e fará o nariz voltar a sangrar."
          },
          {
            id: "B",
            texto: "Tomar um banho bem quente e lavar o rosto com água morna.",
            correta: false,
            feedback: "Incorreto. O calor dilata (alarga) os vasos sanguíneos, o que pode dissolver o coágulo e reiniciar o sangramento."
          },
          {
            id: "C",
            texto: "Evitar assoar o nariz, não cutucar a narina e evitar esforço físico nas próximas horas. Manter a cabeça levemente elevada e evitar calor. Procurar avaliação médica se o sangramento voltar, for intenso, tiver ocorrido após trauma ou se houver suspeita de lesão mais grave.",
            correta: true,
            feedback: "Correto. O coágulo formado ainda está instável, e ações como assoar o nariz, cutucar a narina ou fazer esforço físico podem provocar novo sangramento. Medidas como manter a cabeça elevada e evitar calor ajudam a prevenir recidiva. Além disso, é importante orientar avaliação médica em casos de recorrência, sangramento intenso ou quando há suspeita de trauma, pois pode haver lesões associadas."
          },
          {
            id: "D",
            texto: "Passar pomada cicatrizante dentro do nariz com um cotonete.",
            correta: false,
            feedback: "Incorreto. Introduzir hastes flexíveis pode causar um novo trauma mecânico na área recém-lesionada."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_07",
    titulo: "Choque Elétrico e Resgate (PCR com DEA)",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Um pedreiro está consertando o telhado da área de serviço quando a escada escorrega e ele encosta em um fio desencapado de alta tensão. Ele toma um choque violento, cai no chão rígido e fica imóvel. Você é o dono da casa e corre para o quintal.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você chega na área e vê o pedreiro caído de costas, com a fiação arrebentada caída sobre a perna dele. O que você faz imediatamente?",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Correr e puxá-lo pelo braço para tirá-lo de perto do fio.",
            correta: false,
            feedback: "Erro fatal. O corpo humano conduz eletricidade. Tocar nele enquanto ele está em contato com a fonte elétrica fará de você a segunda vítima."
          },
          {
            id: "B",
            texto: "Pegar um cabo de vassoura úmido para afastar o fio.",
            correta: false,
            feedback: "Erro crítico. Objetos úmidos conduzem eletricidade de forma extremamente eficiente, colocando sua vida em alto risco."
          },
          {
            id: "C",
            texto: "Não tocar nele nem chegar perto do fio. Ir direto ao quadro de energia da casa e desligar a chave geral (disjuntor).",
            correta: true,
            feedback: "Correto! A prioridade no protocolo de trauma é a segurança da cena. Desligar a fonte de energia é o único meio 100% seguro de garantir que você não será eletrocutado ao ajudar."
          },
          {
            id: "D",
            texto: "Jogar areia sobre a vítima e o fio para isolar a corrente elétrica.",
            correta: false,
            feedback: "Incorreto e ineficaz. Isso não isola a tensão elétrica e você apenas perde tempo crucial."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! Você desligou a chave geral, mas a esposa do pedreiro, em desespero, entra correndo e quer jogar um balde de água no rosto dele para 'acordá-lo do desmaio'.",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Deixar ela jogar a água, pois a água fria estimula o sistema nervoso.",
            correta: false,
            feedback: "Incorreto. A água não tem efeito na recuperação de trauma elétrico e molhar a vítima pode interferir no uso futuro do Desfibrilador (DEA)."
          },
          {
            id: "B",
            texto: "Gritar com ela e mandá-la embora da casa.",
            correta: false,
            feedback: "Incorreto. Hostilizar familiares no local agrava o caos. Você precisa de ajuda."
          },
          {
            id: "C",
            texto: "Intervir com calma e firmeza, pedir para ela soltar o balde, ligar para o 192 (SAMU) e relatar o choque elétrico enquanto você avalia a vítima.",
            correta: true,
            feedback: "Correto. Impedir uma conduta errada gerenciando a cena e direcionar o desespero dela para uma ação útil (acionar o resgate) é a melhor postura de um socorrista leigo."
          },
          {
            id: "D",
            texto: "Bater no rosto dele você mesmo, provando para a esposa que não adianta.",
            correta: false,
            feedback: "Incorreto. Agressão física nunca é uma forma de avaliar responsividade."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você avalia o pedreiro: toca nos ombros, chama por ele e olha para o peito. Ele não responde e não respira (ou apenas dá 'suspiros' agônicos espasmódicos).",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Aguardar o SAMU e apenas observar a vítima para não agravar possíveis lesões da queda.",
            correta: false,
            feedback: "Incorreto. Ele está em Parada Cardiorrespiratória (PCR). A imobilidade não salva a vida na PCR. Sem compressões, o cérebro morre em poucos minutos."
          },
          {
            id: "B",
            texto: "Iniciar imediatamente as compressões torácicas no centro do peito (massagem cardíaca).",
            correta: true,
            feedback: "Correto. Vítima irresponsiva e sem respiração normal indica Parada Cardiorrespiratória. A RCP deve ser iniciada sem demora, focando nas compressões torácicas de alta qualidade."
          },
          {
            id: "C",
            texto: "Tentar respiração boca-a-boca contínua por 5 minutos.",
            correta: false,
            feedback: "Incorreto. Para leigos, as diretrizes da AHA recomendam a RCP apenas com as mãos (compressões contínuas), pois a oxigenação já no sangue precisa ser circulada pela massagem."
          },
          {
            id: "D",
            texto: "Fazer massagem cardíaca leve para não quebrar as costelas afetadas pelo choque.",
            correta: false,
            feedback: "Incorreto. Compressões eficazes precisam afundar o peito em pelo menos 5cm. Compressões rasas são ineficazes e equivalem a não fazer nada."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Reviravolta! Você está fazendo a massagem cardíaca há 2 minutos quando um vizinho médico, que estava de folga, chega trazendo um DEA (Desfibrilador Externo Automático) do condomínio.",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Pedir para ele esperar o SAMU chegar para usar o equipamento, pois é perigoso.",
            correta: false,
            feedback: "Incorreto. O DEA foi projetado especificamente para leigos usarem. Cada minuto de atraso na desfibrilação reduz a chance de sobrevivência em até 10%."
          },
          {
            id: "B",
            texto: "Ligar o DEA imediatamente, ouvir as instruções de voz, colar os adesivos (pás) no peito nu e seco do pedreiro, e seguir o comando da máquina.",
            correta: true,
            feedback: "Correto. Assim que o DEA chega, ligá-lo é a prioridade. Ele guiará todo o resto do atendimento, sendo crucial para reverter paradas causadas por choques elétricos (frequentemente fibrilação ventricular)."
          },
          {
            id: "C",
            texto: "Colar as pás sobre a camisa da vítima para ganhar tempo.",
            correta: false,
            feedback: "Incorreto. As pás do DEA devem ser coladas exclusivamente na pele nua e seca, caso contrário não farão a leitura correta e queimarão o tecido sem chocar o coração."
          },
          {
            id: "D",
            texto: "Parar as compressões, ler o manual de instruções inteiro e depois colar as pás.",
            correta: false,
            feedback: "Incorreto. Você não deve parar as compressões para ler manuais. O aparelho possui comando de voz claro. As compressões só param quando o DEA mandar 'Avaliando o ritmo cardíaco'."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O DEA termina a leitura e anuncia em voz alta: 'CHOQUE RECOMENDADO. CARREGANDO... PRESSIONE O BOTÃO DE CHOQUE'.",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Avisar em voz alta 'AFASTESEM!', garantir que ninguém encoste na vítima e apertar o botão.",
            correta: true,
            feedback: "Correto. Segurança em primeiro lugar! Se alguém estiver tocando a vítima durante o choque, essa pessoa também receberá a descarga elétrica."
          },
          {
            id: "B",
            texto: "Apertar o botão imediatamente enquanto o vizinho ainda está segurando a cabeça da vítima.",
            correta: false,
            feedback: "Erro crítico. Você acaba de eletrocutar o vizinho. A cena precisa ser liberada (clear) antes do choque."
          },
          {
            id: "C",
            texto: "Ignorar o DEA, pois a massagem manual é mais segura.",
            correta: false,
            feedback: "Incorreto. O DEA só recomenda choque se detectar um ritmo cardíaco fatal reversível. Ignorar o choque é negar a melhor chance de vida da vítima."
          },
          {
            id: "D",
            texto: "Apertar o peito do pedreiro junto com o botão para aumentar a força do choque.",
            correta: false,
            feedback: "Erro crítico. Você receberá uma descarga perigosa do desfibrilador."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_08",
    titulo: "Acidente na Marcenaria (Amputação e Hemorragia Severa)",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Você está visitando uma marcenaria quando ouve um grito agudo de um funcionário. A serra circular escorregou e ele amputou completamente os dedos indicador e médio da mão esquerda. O sangue está jorrando em grande quantidade.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ele está de pé, pálido, segurando o punho com a outra mão. Qual a sua conduta imediata para salvar a vida dele?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Procurar os dedos pelo chão da oficina imediatamente.",
            correta: false,
            feedback: "Incorreto. A prioridade máxima é conter o sangramento e evitar o choque hipovolêmico (morte por perda de sangue). Os dedos ficam para o segundo plano."
          },
          {
            id: "B",
            texto: "Lavar a mão dele em água corrente com sabão para evitar infecção do corte da serra.",
            correta: false,
            feedback: "Incorreto. Lavar uma hemorragia exsanguinante remove os coágulos e não estanca o sangramento ativo. Ele pode sangrar até a morte."
          },
          {
            id: "C",
            texto: "Usar um pano limpo ou gaze, aplicar forte compressão direta exatamente sobre a ferida amputada e pedir para ligarem para o 192.",
            correta: true,
            feedback: "Correto. O protocolo de contenção de hemorragias em leigos ensina que o método inicial mais efetivo é a compressão firme, profunda e direta no foco do sangramento."
          },
          {
            id: "D",
            texto: "Elevar o braço dele o mais alto possível e esperar.",
            correta: false,
            feedback: "Incorreto. Elevar o membro ajuda muito pouco se não for associado a uma forte pressão direta contínua no ferimento."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! O pano rapidamente fica completamente encharcado de sangue vermelho-vivo, e o sangue começa a escorrer pelos seus dedos. O que fazer?",
        tag_visual_detalhe: "acao_curativo_adicional",
        opcoes: [
          {
            id: "A",
            texto: "Tirar o pano sujo, observar como está o ferimento e trocar por um novo.",
            correta: false,
            feedback: "Incorreto. Nunca remova o primeiro curativo. Se você fizer isso, arranca a 'tampa' (coágulos iniciais) do vaso rompido, reiniciando o sangramento do zero."
          },
          {
            id: "B",
            texto: "Adicionar mais panos limpos por cima do primeiro, aumentando a pressão, e cogitar usar um torniquete comercial se disponível.",
            correta: true,
            feedback: "Correto. Adicione tecidos por cima (curativo compressivo) e aumente o peso. Em casos de amputação, se a compressão direta falhar, um torniquete verdadeiro na raiz do membro é indicado (caso saiba/tenha)."
          },
          {
            id: "C",
            texto: "Fazer um torniquete no pescoço do marceneiro.",
            correta: false,
            feedback: "Absurdo. Torniquetes no pescoço estrangulam e matam a vítima. Eles são usados exclusivamente em braços e pernas (membros)."
          },
          {
            id: "D",
            texto: "Esfregar pó de café ou farinha sobre a ferida aberta para colar o sangue.",
            correta: false,
            feedback: "Incorreto. Adicionar sujeira ou pó numa artéria aberta causará infecção gravíssima e dificulta a cirurgia."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! Enquanto você comprime a mão, um colega encontra os dedos no chão de serragem. Ele pega um copo plástico com água e gelo da geladeira e se prepara para jogar os dedos diretamente lá dentro. Como intervir?",
        tag_visual_detalhe: "acondicionamento_amputacao",
        opcoes: [
          {
            id: "A",
            texto: "Parabenizá-lo, pois congelar a peça diretamente é a melhor forma de conservá-la para o reimplante.",
            correta: false,
            feedback: "Incorreto. Contato direto com gelo causará queimadura térmica (necrose) nas bordas dos dedos, inviabilizando totalmente a cirurgia de reimplante."
          },
          {
            id: "B",
            texto: "Pará-lo! Orientar a enrolar os dedos em pano úmido ou gaze limpa, colocar num saco plástico lacrado, e só então colocar esse saco num recipiente com água e gelo.",
            correta: true,
            feedback: "Correto. A peça amputada deve ficar fria, mas NUNCA em contato direto com gelo ou submersa em água (para não destruir as células). O acondicionamento em plástico a isola termicamente."
          },
          {
            id: "C",
            texto: "Dizer para jogar os dedos fora, pois reimplante é lenda.",
            correta: false,
            feedback: "Incorreto. Reimplantes microcirúrgicos são uma realidade frequente se a parte for adequadamente preservada e entregue a tempo no hospital."
          },
          {
            id: "D",
            texto: "Colocar os dedos diretamente no bolso dele para ficarem na temperatura do corpo humano.",
            correta: false,
            feedback: "Incorreto. A temperatura ambiente fará o tecido necrótico (morrer) mais rápido. É preciso resfriamento indireto."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "O sangramento finalmente parece sob controle com a forte pressão que você está fazendo, mas o funcionário senta, fica extremamente pálido, com suor frio, tremendo e falando palavras confusas.",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Obrigá-lo a levantar e andar para o sangue circular.",
            correta: false,
            feedback: "Incorreto. Caminhar sem sangue suficiente agravará a falta de oxigênio no cérebro e ele vai desmaiar e bater a cabeça."
          },
          {
            id: "B",
            texto: "Dar bastante água para ele beber para repor os fluidos perdidos.",
            correta: false,
            feedback: "Incorreto. Vítimas de trauma em choque que provavelmente irão para o centro cirúrgico emergencial NUNCA devem ingerir líquidos. Há risco de broncoaspiração na anestesia."
          },
          {
            id: "C",
            texto: "Deitá-lo no chão com segurança, manter o ferimento elevado e comprimido, e cobri-lo com uma jaqueta para evitar que perca o calor corporal.",
            correta: true,
            feedback: "Correto. Estes são os sinais clássicos de choque hipovolêmico (queda severa de pressão e perfusão). Deitá-lo melhora o fluxo de sangue para o cérebro e cobri-lo previne a hipotermia grave."
          },
          {
            id: "D",
            texto: "Dar tapas no rosto dele para que não perca a consciência.",
            correta: false,
            feedback: "Incorreto. Agressão piora a ansiedade e não altera as razões físicas de ele estar desmaiando (falta de sangue)."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "A ambulância do SAMU chega. Qual a sua postura ao passar o caso para a equipe médica?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Ir embora discretamente, seu trabalho terminou e eles assumem.",
            correta: false,
            feedback: "Incorreto. Você detém informações vitais da dinâmica (quanto sangue foi perdido, que horas foi, onde estão os dedos). A passagem de plantão é fundamental."
          },
          {
            id: "B",
            texto: "Informar o que aconteceu, as ações feitas (pressão contínua), apontar os sinais de choque nele e entregar os dedos devidamente preservados à equipe.",
            correta: true,
            feedback: "Correto. Uma comunicação clara (handover) garante que a equipe de suporte avançado continue o tratamento exatamente de onde você parou, com todas as informações."
          },
          {
            id: "C",
            texto: "Soltar a mão do paciente e pegar o material médico na maleta do resgatista para ajudar.",
            correta: false,
            feedback: "Incorreto. Somente profissionais mexem nos materiais. Se você estava comprimindo um sangramento e ele não estava sangrando, aguarde a equipe assumir a compressão."
          },
          {
            id: "D",
            texto: "Esconder a parte do desmaio e palidez da equipe do SAMU para que eles não briguem com você.",
            correta: false,
            feedback: "Incorreto. Omitir dados piora o tratamento e atrasa intervenções importantes (como o pedido de sangue ou soro intravenoso)."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_09",
    titulo: "A Teimosia do Infarto (Mal Súbito -> Parada Cardíaca)",
    tag_visual_cenario: "cenario_interno_comum",
    descricao_inicial: "No escritório, um colega de 55 anos que fuma começa a suar muito e coloca a mão no peito fechada, respirando com dificuldade. Ele está muito pálido.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você desconfia da gravidade ao observar a palidez e a mão no peito. Qual a sua suspeita e ação?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Suspeito de dor muscular de má postura. Faço massagem nas costas dele.",
            correta: false,
            feedback: "Incorreto. Suor frio, palidez e aperto no peito são sinais vitais clássicos de um IAM (Infarto Agudo do Miocárdio) até que se prove o contrário."
          },
          {
            id: "B",
            texto: "Suspeito de gases. Dou um antiácido forte e mando ele ir ao banheiro.",
            correta: false,
            feedback: "Incorreto. Confundir infarto com queimação estomacal é uma das causas principais de atraso no socorro."
          },
          {
            id: "C",
            texto: "Suspeito de Infarto. Acalmo a vítima, a mantenho sentada de forma confortável, folgo as roupas apertadas (gravata) e peço para ligarem 192 (SAMU).",
            correta: true,
            feedback: "Correto. O protocolo de infarto para leigos foca no reconhecimento rápido e contato com o socorro especializado, reduzindo a ansiedade e esforço do músculo cardíaco."
          },
          {
            id: "D",
            texto: "Suspeito de ansiedade. Coloco a cabeça dele no meio das pernas com força.",
            correta: false,
            feedback: "Incorreto. Dobrar violentamente uma pessoa sobre si mesma dificulta a expansão do pulmão e piora a sensação de falta de ar."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! O seu colega, irritado, recusa ajuda. Diz que é só uma azia forte, pega a chave do carro e diz que vai dirigir sozinho até o hospital porque odeia ambulâncias.",
        tag_visual_detalhe: "vitima_infarto_recusa",
        opcoes: [
          {
            id: "A",
            texto: "Deixá-lo ir. Não se pode contrariar um adulto dono das suas ações.",
            correta: false,
            feedback: "Incorreto. Deixar uma pessoa infartando dirigir é sentenciá-la e sentenciar terceiros à morte, caso ela tenha uma parada cardíaca no trânsito."
          },
          {
            id: "B",
            texto: "Tomar as chaves dele à força física e bater nele.",
            correta: false,
            feedback: "Incorreto. Entrar em briga corporal causará pico extremo de estresse e adrenalina, o que rompe a artéria do coração de vez, piorando o infarto."
          },
          {
            id: "C",
            texto: "Tentar mantê-lo calmo, não deixá-lo dirigir argumentando os riscos e pedir a um segurança ou gerente para ajudá-lo a sentar até que o SAMU chegue ao local.",
            correta: true,
            feedback: "Correto. Negociar, remover os meios (como a chave do carro sutilmente) e acionar a rede de apoio local com firmeza são essenciais em pacientes em 'estado de negação'."
          },
          {
            id: "D",
            texto: "Aceitar a recusa e você mesmo ir dirigindo rápido o carro dele, ultrapassando os sinais vermelhos.",
            correta: false,
            feedback: "Incorreto. Transporte de leigo expõe todos ao risco de acidentes. O SAMU é equipado com médico e Desfibrilador, seu carro não."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta Crítica! Enquanto você discutia com ele tentando mantê-lo na cadeira, os olhos dele viram, ele tomba para frente e cai inerte no chão do escritório.",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Colocar um travesseiro debaixo da cabeça dele e esperar ele acordar.",
            correta: false,
            feedback: "Incorreto. Ele desmaiou devido ao agravamento do infarto. Colocar a cabeça para cima fecha as vias aéreas."
          },
          {
            id: "B",
            texto: "Gritar, bater no peito dele e jogar o café nele.",
            correta: false,
            feedback: "Incorreto. Reações emotivas intempestivas atrasam a avaliação que salva vidas."
          },
          {
            id: "C",
            texto: "Ajoelhar-se ao lado dele, tocar firmemente nos ombros chamando 'Senhor, você está bem?' e observar se o tórax se move (se ele respira).",
            correta: true,
            feedback: "Correto. Mal súbito seguido de desmaio obriga a avaliação rápida da Responsividade e Respiração, o pilar do Suporte Básico de Vida."
          },
          {
            id: "D",
            texto: "Tentar dar os remédios de coração dele guela abaixo para salvá-lo.",
            correta: false,
            feedback: "Erro crítico. Inserir medicamentos ou água na boca de uma pessoa inconsciente causará asfixia."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Ele não responde aos seus chamados e não está respirando (não há movimento no peito). Você confirma a PCR. Você aciona novamente o 192, mas eles relatam atraso no trânsito.",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Cruz os braços e esperar o resgate, já que você ligou.",
            correta: false,
            feedback: "Incorreto. Esperar o resgate sem fazer nada em uma PCR equivale à morte cerebral em 5 a 10 minutos. O primeiro elo de salvação é o leigo no local."
          },
          {
            id: "B",
            texto: "Expor o peito dele, colocar o calcanhar das mãos no centro do tórax e iniciar compressões fortes (no mínimo 5cm) e rápidas (100 a 120 por minuto).",
            correta: true,
            feedback: "Correto. RCP de alta qualidade iniciada imediatamente. Como um bombeiro mantendo o sangue circulando no lugar do coração, você está mantendo o cérebro vivo."
          },
          {
            id: "C",
            texto: "Soprar o nariz dele continuamente para o ar chegar ao cérebro.",
            correta: false,
            feedback: "Incorreto e sem base fisiológica. A ventilação de resgate deve ser boca-a-boca (ou boca-máscara), mas apenas profissionais ou leigos treinados a fazem."
          },
          {
            id: "D",
            texto: "Fazer 5 compressões e parar 2 minutos para descansar o paciente.",
            correta: false,
            feedback: "Incorreto. Qualquer interrupção drástica zera a pressão sanguínea que você construiu. As compressões devem ser contínuas e ininterruptas."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Reviravolta! Você já fez compressões torácicas intensas por quase 4 minutos e sente seus braços falharem de cansaço extremo (fadigado). Um colega que não sabe Primeiros Socorros está ao seu lado apavorado.",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Parar tudo, deitar no chão exausto e dizer para o colega que fez o que pôde.",
            correta: false,
            feedback: "Incorreto. A fada é natural, mas a interrupção significa o fim do suporte vital. Você deve usar a pessoa ao seu lado."
          },
          {
            id: "B",
            texto: "Mudar a massagem para uma mão só para descansar a outra.",
            correta: false,
            feedback: "Incorreto. Você não terá força para afundar 5cm usando apenas uma mão (a menos que a vítima seja criança pequena)."
          },
          {
            id: "C",
            texto: "Posicionar o colega de frente para você, ditar o ritmo e a posição correta rapidamente, e trocar de posição com ele sem parar as compressões por mais do que 5 a 10 segundos.",
            correta: true,
            feedback: "Correto! A fadiga afeta a profundidade da compressão. As diretrizes orientam instruir socorristas (mesmo leigos sem treino) no local e trocar de posição a cada 2 minutos (ou fadiga) para manter a eficiência."
          },
          {
            id: "D",
            texto: "Jogar água no colega para ele acordar pro choque e xingá-lo de incompetente.",
            correta: false,
            feedback: "Incorreto. Você perde tempo valioso e gera pânico desnecessário."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Desfecho: O segurança do prédio chega correndo trazendo o DEA (Desfibrilador Externo Automático) que fica na portaria. O SAMU ainda está a 3 minutos de distância. O que você faz?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Guardo o aparelho e continuo só nas compressões, pois não sou médico e posso dar um choque errado.",
            correta: false,
            feedback: "Incorreto. O DEA é feito especificamente para leigos. Ele fala as instruções e SÓ dá o choque se o coração realmente precisar. Você não consegue errar."
          },
          {
            id: "B",
            texto: "Ligo o aparelho imediatamente, colo os adesivos no peito nu do paciente conforme o desenho e sigo os comandos de voz do DEA.",
            correta: true,
            feedback: "Excelente! O DEA é a ferramenta mais importante para reverter uma parada cardíaca. Ligar o aparelho é o primeiro passo, e ele guiará todo o resto do atendimento até o SAMU chegar."
          },
          {
            id: "C",
            texto: "Coloco os adesivos por cima da camisa do paciente para não constrangê-lo e aperto o botão de choque.",
            correta: false,
            feedback: "Incorreto. Os adesivos (pás) do DEA devem ser colados diretamente na pele nua para ler o ritmo cardíaco. Roupas bloqueiam a corrente elétrica."
          },
          {
            id: "D",
            texto: "Ligo o DEA, mas paro as compressões para ler o manual de instruções inteiro antes de colar as pás.",
            correta: false,
            feedback: "Incorreto. O manual atrasa o socorro. O aparelho tem comandos de voz automáticos e intuitivos. As compressões não devem parar enquanto as pás são coladas."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_10",
    titulo: "Crise no Parque (Hipoglicemia e Engasgo)",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Você está caminhando no parque quando um jovem com uma pulseira vermelha ('Sou Diabético') senta no banco, começando a suar frio, tremer, apresentar tontura e ficar levemente agressivo e confuso.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ele está muito confuso, mas consegue se sentar firme e falar, engolindo saliva. O que você faz ao notar a crise (provável hipoglicemia - queda de açúcar)?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Oferecer um alimento rápido açucarado, como um suco, bala ou mel, já que ele está consciente e consegue engolir.",
            correta: true,
            feedback: "Correto. Em pacientes diabéticos com sinais de confusão/sudorese (hipoglicemia), a oferta imediata de glicose via oral, estando ele em condições de engolir, salva a vida e reverte o quadro."
          },
          {
            id: "B",
            texto: "Aplicar a caneta de insulina que ele carrega na mochila na perna dele para abaixar o açúcar.",
            correta: false,
            feedback: "Erro crítico. A insulina baixa a glicose. Ele provavelmente está sofrendo de falta de glicose, dar insulina o matará."
          },
          {
            id: "C",
            texto: "Dar um refrigerante zero (diet) para acalmar o estômago.",
            correta: false,
            feedback: "Incorreto. Refrigerantes sem açúcar/dietéticos não ajudam porque não possuem glicose para reverter a crise metabólica."
          },
          {
            id: "D",
            texto: "Aguardar que ele desmaie para só então dar a bala.",
            correta: false,
            feedback: "Incorreto e perigoso. Nunca dê sólidos/líquidos a pessoas desmaiadas, haverá obstrução total de via aérea."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! Você deu a ele uma bala dura. Por estar confuso e fraco, ele tenta engolir a bala inteira e, de repente, se levanta, agarra a própria garganta, arregala os olhos e não consegue tossir, respirar, nem falar.",
        tag_visual_detalhe: "estado_engasgo_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Dar bastante água para empurrar a bala.",
            correta: false,
            feedback: "Incorreto. Ele está sofrendo engasgo severo. Água passará para as vias aéreas ao invés do estômago."
          },
          {
            id: "B",
            texto: "Fazer ele se sentar e bater nas costas com ele reto.",
            correta: false,
            feedback: "Incorreto. Na posição reta sentada as batidas vão empurrar a bala mais para o fundo do trajeto."
          },
          {
            id: "C",
            texto: "Colocar-se imediatamente atrás dele e iniciar a Manobra de Heimlich (compressões abdominais) em pé.",
            correta: true,
            feedback: "Correto. O engasgo severo (sinal universal de asfixia) sobrepõe-se à emergência anterior (hipoglicemia). A desobstrução das vias aéreas com o Heimlich é a nova prioridade vital."
          },
          {
            id: "D",
            texto: "Fazer massagem cardíaca no peito com ele em pé.",
            correta: false,
            feedback: "Incorreto. Compressões torácicas de RCP em pessoa consciente em pé são impossíveis de gerar resultado eficaz."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Como realizar a Manobra de Heimlich corretamente neste rapaz?",
        tag_visual_detalhe: "acao_manobra_heimlich",
        opcoes: [
          {
            id: "A",
            texto: "Fecho a mão como um punho, coloco logo acima do umbigo, cubro com a outra mão e faço compressões rápidas e fortes para dentro e para cima, como uma letra 'J'.",
            correta: true,
            feedback: "Correto. Essa mecânica ('forma de gancho' ou em J) aumenta instantaneamente a pressão do pulmão contra as vias aéreas, expelindo a bala como uma rolha de champanhe."
          },
          {
            id: "B",
            texto: "Aperto as costelas flutuantes dele bem nas laterais do abdômen repetidamente.",
            correta: false,
            feedback: "Incorreto. Isso irá faturar as costelas sem causar a pressão diafragmática que expulsa o objeto."
          },
          {
            id: "C",
            texto: "Entrelaço meus dedos e faço forte pressão para baixo em direção ao osso pélvico.",
            correta: false,
            feedback: "Incorreto. Empurrar para baixo comprime a bexiga/intestino e em nada atua sobre o ar represado no pulmão."
          },
          {
            id: "D",
            texto: "Chacoalho a pessoa pelas pernas de cabeça para baixo.",
            correta: false,
            feedback: "Incorreto. Só se considera (parcialmente e de forma adaptada) inversão leve em bebês/recém-nascidos. Em adultos, causará lesão de coluna."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Reviravolta! A bala é expelida com força na terceira compressão! Porém, devido à confusão mental prévia e falta breve de oxigênio, ele desaba no gramado, inconsciente, mas você nota o peito subindo e descendo com uma respiração pesada. O que fazer?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Fazer RCP na mesma hora, porque ele desmaiou no engasgo.",
            correta: false,
            feedback: "Incorreto. A RCP só é para quem não respira. Você verificou que ele desobstruiu as vias e ESTÁ respirando, então não precisa de massagem."
          },
          {
            id: "B",
            texto: "Dar mais balas pela boca dele deitado mesmo, pois era falta de açúcar.",
            correta: false,
            feedback: "Erro crítico. Ele está inconsciente. A regra de ouro é 'nada por via oral se a pessoa não está sã e atenta'."
          },
          {
            id: "C",
            texto: "Virar o paciente levemente de lado na Posição Lateral de Segurança (PLS), proteger a área e aguardar o SAMU avaliando a respiração minuto a minuto.",
            correta: true,
            feedback: "Correto. A Posição Lateral de Segurança mantém a via aérea livre para a língua não cair e bloqueia risco se ele vomitar por conta das compressões. Ao mesmo tempo, permite que ele continue respirando até o socorro de base metabólica chegar."
          },
          {
            id: "D",
            texto: "Puxar as duas pernas dele dobrando sobre a barriga fortemente.",
            correta: false,
            feedback: "Incorreto. A dobra severa da barriga prejudica a respiração pulmonar em uma pessoa já rebaixada e fragilizada."
          }
        ]
      }
    ]
  }
  {
    id: "cenario_11",
    titulo: "O Piquenique (Reação Alérgica Grave - Anafilaxia)",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Durante um piquenique, uma jovem é picada por uma abelha. Em poucos minutos, ela começa a tossir, o rosto e os lábios incham rapidamente, e ela reclama que a garganta está fechando e não consegue respirar direito.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você percebe que o inchaço e a falta de ar estão piorando rápido. Qual a sua primeira ação?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Dar um copo de água gelada para diminuir o inchaço da garganta.",
            correta: false,
            feedback: "Incorreto. A garganta dela está fechando (edema de glote). Dar líquidos causará engasgo e asfixia imediata."
          },
          {
            id: "B",
            texto: "Ligar imediatamente para o 192 (SAMU) relatando suspeita de reação alérgica grave (anafilaxia) e perguntar se ela possui uma caneta de adrenalina autoinjetável.",
            correta: true,
            feedback: "Correto. A anafilaxia é uma emergência médica extrema que mata por asfixia em minutos. Acionar o socorro e verificar se ela tem a medicação prescrita (como EpiPen) é a prioridade."
          },
          {
            id: "C",
            texto: "Tentar chupar o veneno da abelha do braço dela com a boca.",
            correta: false,
            feedback: "Mito. Tentar sugar veneno de picadas não funciona, perde tempo e o veneno já está na corrente sanguínea causando a reação no corpo todo."
          },
          {
            id: "D",
            texto: "Mandar ela correr pelo parque para o coração bater mais rápido e espalhar o oxigênio.",
            correta: false,
            feedback: "Incorreto. O esforço físico aumenta a demanda por oxigênio, piorando a falta de ar e acelerando a reação alérgica."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Enquanto aguarda o SAMU, ela diz que não tem a caneta de adrenalina. Ela está muito cansada de tentar respirar. Como você deve posicioná-la?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Deitá-la de barriga para cima e levantar as pernas dela o mais alto possível.",
            correta: false,
            feedback: "Incorreto. Deitar uma pessoa com extrema dificuldade respiratória faz com que os órgãos do abdômen pressionem o pulmão, piorando a falta de ar."
          },
          {
            id: "B",
            texto: "Abraçá-la forte por trás e fazer a Manobra de Heimlich.",
            correta: false,
            feedback: "Incorreto. O Heimlich serve para desobstrução por corpo estranho (alimento/objeto). Na anafilaxia, a via aérea fecha por inchaço dos tecidos, a manobra não resolve e causa lesões."
          },
          {
            id: "C",
            texto: "Mantê-la sentada na posição que for mais confortável para ela respirar, afrouxar roupas apertadas e tentar acalmá-la.",
            correta: true,
            feedback: "Correto. A posição sentada ou semi-sentada facilita o trabalho dos músculos respiratórios. Manter a calma reduz o consumo de oxigênio do corpo."
          },
          {
            id: "D",
            texto: "Forçar a abertura da boca dela e puxar a língua para liberar o ar.",
            correta: false,
            feedback: "Incorreto. Não coloque os dedos na boca da vítima. O problema é o inchaço da via aérea inteira, não a posição da língua."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "O SAMU avisa que chegará em 2 minutos. Ela começa a ficar muito pálida, suando frio e diz que vai desmaiar. O que essa mudança indica?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Que a alergia está passando e ela está relaxando.",
            correta: false,
            feedback: "Incorreto. Palidez, suor frio e tontura são sinais de choque anafilático grave (queda drástica de pressão arterial), indicando piora crítica."
          },
          {
            id: "B",
            texto: "Sinais de choque anafilático. Devo deitá-la imediatamente, elevar as pernas se ela tolerar respirar assim, e me preparar para iniciar RCP se ela parar de respirar.",
            correta: true,
            feedback: "Correto. O choque anafilático derruba a pressão. Se ela não aguentar mais ficar sentada e desmaiar, a prioridade é deitar para o sangue ir ao cérebro e monitorar a respiração de perto."
          },
          {
            id: "C",
            texto: "Que ela precisa de açúcar urgente. Dou um doce para ela.",
            correta: false,
            feedback: "Incorreto. Dar alimento neste momento causará asfixia fatal."
          },
          {
            id: "D",
            texto: "Que devo fazer massagem cardíaca com ela ainda sentada.",
            correta: false,
            feedback: "Incorreto. RCP só é feita em pessoas irresponsivas e sem respiração, e sempre deitadas em superfície rígida."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: Um médico pediatra que estava de folga no parque percebe a movimentação. Ele tem a caneta de adrenalina (EpiPen) do seu próprio filho e faz a aplicação na coxa da jovem. A respiração dela começa a melhorar lentamente. Qual é o seu papel agora até a chegada do SAMU?",
        tag_visual_detalhe: "vitima_alergia_pos_adrenalina",
        opcoes: [
          {
            id: "A",
            texto: "Agradecer ao médico, ligar para cancelar a ambulância (192) e dizer para a jovem ir para casa descansar.",
            correta: false,
            feedback: "Incorreto. O efeito da adrenalina é temporário (cerca de 10 a 20 minutos) e a reação alérgica pode voltar ainda mais forte (reação bifásica). Ela precisa de avaliação hospitalar obrigatória."
          },
          {
            id: "B",
            texto: "Dar água e um lanche leve para ela repor as energias gastas durante a crise respiratória.",
            correta: false,
            feedback: "Incorreto. Embora ela esteja melhorando, o edema (inchaço) na garganta pode não ter cedido completamente. Dar alimentos ou líquidos ainda apresenta alto risco de engasgo."
          },
          {
            id: "C",
            texto: "Continuar monitorando a respiração e o nível de consciência dela de perto, prestando apoio ao médico até a transição de cuidados para a equipe do SAMU.",
            correta: true,
            feedback: "Correto! O socorro não termina com a medicação. O papel do leigo treinado é continuar o monitoramento (Protocolo XABCDE) garantindo a segurança até que a equipe especializada assuma o caso."
          },
          {
            id: "D",
            texto: "Pedir para o médico aplicar uma segunda dose de adrenalina imediatamente para garantir que ela fique curada antes do SAMU chegar.",
            correta: false,
            feedback: "Incorreto. A decisão sobre dosagens adicionais é estritamente médica. Excesso de adrenalina pode causar arritmias cardíacas severas."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_12",
    titulo: "Atropelamento e Fogo (Alta Complexidade - Cena Insegura)",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você presencia um carro em alta velocidade atropelar um pedestre e bater num poste. O motorista foge. O pedestre está caído de costas no asfalto, inconsciente. A via é escura e carros continuam passando perto.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual a sua primeiríssima atitude ao presenciar o acidente?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr até a vítima imediatamente e checar o pulso.",
            correta: false,
            feedback: "Incorreto. Em acidentes de trânsito em vias não sinalizadas, você será a próxima vítima de atropelamento se não garantir a segurança."
          },
          {
            id: "B",
            texto: "Garantir a segurança da cena (sinalizar com triângulo, pisca-alerta do seu carro), ligar para 192 (SAMU) e 193 (Bombeiros) antes de chegar perto do corpo.",
            correta: true,
            feedback: "Correto. O primeiro passo do protocolo de trauma (PHTLS) é a segurança da cena. Sem uma cena segura, o socorrista não atua."
          },
          {
            id: "C",
            texto: "Arrastar o corpo da vítima para a calçada para liberar o trânsito.",
            correta: false,
            feedback: "Incorreto. Movimentar vítimas de trauma sem necessidade extrema pode agravar lesões na medula espinhal, causando paralisia permanente."
          },
          {
            id: "D",
            texto: "Ir até o carro acidentado procurar documentos do motorista que fugiu.",
            correta: false,
            feedback: "Incorreto. O foco do socorrista é a vida da vítima e acionar o resgate, não fazer investigação policial."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está bem sinalizada. Você se aproxima do pedestre. Ele está inconsciente, mas você observa o peito subindo e descendo regularmente (está respirando). Como proceder?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Fazer massagem cardíaca por precaução.",
            correta: false,
            feedback: "Incorreto. Massagem cardíaca em quem tem pulso e respira pode causar arritmias fatais e fraturar costelas sem necessidade."
          },
          {
            id: "B",
            texto: "Sacudir os ombros dele com muita força para tentar acordá-lo.",
            correta: false,
            feedback: "Incorreto. Sacudir uma vítima de trauma agrava lesões cervicais."
          },
          {
            id: "C",
            texto: "Não movimentar a vítima. Ajoelhar-se atrás da cabeça dela e segurá-la firmemente com as duas mãos (estabilização cervical manual) enquanto aguarda o socorro.",
            correta: true,
            feedback: "Correto. Em trauma grave com vítima que respira, o leigo deve focar em não deixar a vítima se mover, protegendo a coluna cervical de danos secundários."
          },
          {
            id: "D",
            texto: "Virar o paciente de bruços para facilitar a saída de sangue pela boca.",
            correta: false,
            feedback: "Incorreto. Virar de bruços torce a coluna inteira da vítima e compromete a via aérea."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! O carro batido no poste começa a pegar fogo rapidamente. As chamas estão crescendo e o calor já atinge o local onde a vítima está caída. O risco de explosão e morte na cena é iminente. O que você faz?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Continuar segurando a cabeça dele. A regra diz que nunca posso mover vítima de trauma.",
            correta: false,
            feedback: "Incorreto. A regra de não mover tem a exceção do risco iminente de morte (fogo, desabamento). Entre uma possível lesão na coluna e a morte carbonizado, a prioridade é salvar a vida."
          },
          {
            id: "B",
            texto: "Ligar para os Bombeiros e ir embora para não se queimar.",
            correta: false,
            feedback: "Incorreto. Omitir socorro frente à possibilidade de ajudar (se você tiver rota de fuga segura) condena a vítima à morte."
          },
          {
            id: "C",
            texto: "Realizar uma extração de emergência: puxá-lo rapidamente e de forma alinhada pelos ombros/roupas ou usando um cobertor até uma distância segura.",
            correta: true,
            feedback: "Correto. Quando a cena se torna insustentável (fogo/explosão), o protocolo dita a movimentação de emergência. Arrastar a vítima no eixo do corpo (pelas roupas ou lençol) minimiza torções na coluna enquanto salva a vida."
          },
          {
            id: "D",
            texto: "Tentar apagar o incêndio do carro com uma garrafa de água.",
            correta: false,
            feedback: "Incorreto. Uma garrafa de água não apaga incêndio veicular e você perderá o tempo que tinha para arrastar a vítima para longe."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Reviravolta Crítica! Você arrastou a vítima para 30 metros de distância com segurança. Porém, ao reavaliar o paciente, você percebe que, devido ao movimento ou trauma, ele parou de respirar totalmente.",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Aguardar o SAMU, pois você já fez sua parte tirando ele do fogo.",
            correta: false,
            feedback: "Incorreto. Ele agora está em Parada Cardiorrespiratória (PCR). Se você não agir, o cérebro morrerá em poucos minutos."
          },
          {
            id: "B",
            texto: "Iniciar a RCP (massagem cardíaca) imediatamente no centro do peito, comprimindo forte e rápido.",
            correta: true,
            feedback: "Correto. O protocolo dita que, se a vítima não respira, as compressões torácicas são a prioridade absoluta, mesmo sendo vítima de trauma."
          },
          {
            id: "C",
            texto: "Fazer respiração boca-a-boca contínua por 3 minutos.",
            correta: false,
            feedback: "Incorreto. A diretriz foca em compressões torácicas para leigos. Fazer apenas ventilação não circula o sangue para o cérebro."
          },
          {
            id: "D",
            texto: "Procurar o pulso no pescoço por 5 minutos para ter certeza.",
            correta: false,
            feedback: "Incorreto. Leigos não devem perder mais de 10 segundos tentando checar pulso. Se não respira, assuma a parada e inicie a RCP."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Você está fazendo a massagem cardíaca há 1 minuto. Um curioso se aproxima gritando: 'Você vai quebrar a costela dele! Pare com isso e levante as pernas dele!' Como você reage?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Parar a massagem para não arrumar confusão com o curioso.",
            correta: false,
            feedback: "Erro crítico. Parar a RCP interrompe o fluxo de sangue vital. O curioso não deve ditar a conduta salva-vidas."
          },
          {
            id: "B",
            texto: "Levantar as pernas da vítima com uma mão e fazer massagem com a outra.",
            correta: false,
            feedback: "Incorreto. A RCP precisa de ambas as mãos sobrepostas e força do corpo para atingir 5cm de profundidade."
          },
          {
            id: "C",
            texto: "Ignorar o curioso ou orientá-lo firmemente ('Ele está sem respirar, afaste-se ou me ajude revezando as compressões!'), e NÃO parar a massagem cardíaca.",
            correta: true,
            feedback: "Correto. Manter o foco e a liderança da cena. Fraturas de costela podem acontecer durante uma RCP de qualidade, mas uma costela quebrada se cura; a morte cerebral, não."
          },
          {
            id: "D",
            texto: "Parar a massagem e explicar toda a teoria da AHA 2020 para o curioso.",
            correta: false,
            feedback: "Incorreto. Interrupções na RCP reduzem drasticamente as chances de sobrevivência. Não se dá aula durante o atendimento vital."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Desfecho: As sirenes se aproximam e as equipes do SAMU e do Corpo de Bombeiros chegam ao local. Você ainda está realizando as compressões torácicas. Como deve ser feita a transição do atendimento para os profissionais?",
        tag_visual_detalhe: "chegada_socorro_transicao_rcp",
        opcoes: [
          {
            id: "A",
            texto: "Parar a massagem cardíaca imediatamente assim que a ambulância estacionar e afastar-se, pois seu trabalho terminou.",
            correta: false,
            feedback: "Incorreto. Interromper as compressões antes que a equipe esteja fisicamente ao lado do paciente e pronta com os equipamentos (como o desfibrilador) reduz drasticamente as chances de sobrevida. Apenas pare quando eles assumirem o tórax."
          },
          {
            id: "B",
            texto: "Continuar as compressões torácicas focado apenas no paciente, ignorando a equipe médica, pois manter a RCP ininterrupta é a única prioridade.",
            correta: false,
            feedback: "Incorreto. A equipe profissional precisa de informações essenciais (o chamado 'handover' ou repasse) para guiar o suporte avançado de vida e entender a cinemática do trauma."
          },
          {
            id: "C",
            texto: "Manter as compressões torácicas até que a equipe traga os equipamentos e ordene a troca. Em seguida, afastar-se e relatar de forma clara o atropelamento, a extração devido ao risco de fogo e há quanto tempo a RCP está sendo feita.",
            correta: true,
            feedback: "Correto! A transição deve garantir o mínimo de interrupção nas compressões. Fornecer informações claras (cinemática do trauma, ações já realizadas e tempo estimado de parada) é fundamental para o sucesso do resgate."
          },
          {
            id: "D",
            texto: "Parar as compressões para ajudar os socorristas a retirar a maca, abrir as bolsas de trauma e preparar as medicações necessárias.",
            correta: false,
            feedback: "Incorreto. O manuseio de equipamentos de Suporte Avançado é exclusivo da equipe. Seu papel vital é garantir a circulação até ser substituído no tórax do paciente e, depois, atuar como fonte de informação."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_13",
    titulo: "O Afogamento na Piscina (Linear com DEA)",
    tag_visual_cenario: "clube_piscina",
    descricao_inicial: "No clube da cidade, você ouve gritos. Um salva-vidas amador acabou de retirar um homem desacordado do fundo da piscina e o colocou de barriga para cima na borda. O homem está imóvel e cianótico (roxo).",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você corre para ajudar. O paciente está na borda. Qual é a primeira coisa a fazer?",
        tag_visual_detalhe: "estado_molhada_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Apertar a barriga dele (Heimlich) para fazer vomitar a água.",
            correta: false,
            feedback: "Mito gravíssimo. Manobras no abdômen para retirar água não funcionam, atrasam a RCP e fazem a vítima vomitar água direto para os pulmões."
          },
          {
            id: "B",
            texto: "Chamar pela vítima tocando nos ombros e verificar visualmente se o peito sobe e desce (checagem de responsividade e respiração).",
            correta: true,
            feedback: "Correto. O protocolo de avaliação inicial é o mesmo: verificar se está consciente e se respira normalmente (gasps/suspiros não são respiração normal)."
          },
          {
            id: "C",
            texto: "Virar a pessoa de cabeça para baixo para esvaziar os pulmões.",
            correta: false,
            feedback: "Incorreto. A água não sai dos pulmões como num balde. A prioridade é reestabelecer o oxigênio e a circulação."
          },
          {
            id: "D",
            texto: "Fazer respiração boca-a-boca imediatamente antes de checar se ele está acordado.",
            correta: false,
            feedback: "Incorreto. Você deve avaliar primeiro. Se ele estiver apenas assustado e respirando, a ventilação é desnecessária e invasiva."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Ele não responde e não respira (parada cardiorrespiratória por afogamento). O que você e o salva-vidas devem fazer a seguir?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Pedir para chamarem o 192 (SAMU) e o 193 (Bombeiros), pedir um DEA e iniciar a RCP imediata (compressões torácicas contínuas).",
            correta: true,
            feedback: "Correto. O acionamento da emergência, pedido do Desfibrilador e início da Reanimação Cardiopulmonar (focada em compressões se você não tiver barreira para ventilar) salvam vidas no afogamento."
          },
          {
            id: "B",
            texto: "Deixar o homem descansando e aguardar o SAMU, pois afogados acordam sozinhos.",
            correta: false,
            feedback: "Incorreto. Sem oxigênio circulando pelas compressões, ele sofrerá morte cerebral e não acordará."
          },
          {
            id: "C",
            texto: "Levar a pessoa correndo para o carro para levá-la ao hospital.",
            correta: false,
            feedback: "Incorreto. Paradas cardíacas precisam de RCP no local. Transportar no carro impede a execução de massagem cardíaca de qualidade."
          },
          {
            id: "D",
            texto: "Bater nas costas da vítima com força.",
            correta: false,
            feedback: "Incorreto. Tapotagem não reverte parada cardiorrespiratória."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Alguém traz o DEA (Desfibrilador Externo Automático) do clube. Antes de colar as pás adesivas no tórax do paciente, o que é fundamental fazer em um caso de afogamento?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Secar rapidamente o peito da vítima com uma toalha ou camisa antes de colar as pás.",
            correta: true,
            feedback: "Correto. A água conduz eletricidade. Se o peito estiver molhado, o choque vai se espalhar pela água (não atingindo o coração) e pode dar choque no socorrista. O peito deve ser seco rapidamente."
          },
          {
            id: "B",
            texto: "Colar as pás por cima da pele molhada, o DEA é a prova d'água.",
            correta: false,
            feedback: "Incorreto. As pás não grudarão direito e a eletricidade escoará pela superfície molhada, tornando o choque inútil e perigoso."
          },
          {
            id: "C",
            texto: "Jogar pó de talco no peito para secar a água.",
            correta: false,
            feedback: "Incorreto. O pó impedirá a aderência correta do adesivo do DEA."
          },
          {
            id: "D",
            texto: "Não usar o DEA, pois é proibido o uso perto de piscinas.",
            correta: false,
            feedback: "Incorreto. É permitido e recomendado, desde que a vítima seja removida da poça de água e o tórax seja enxugado."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você secou o peito, ligou o DEA e colou as pás. O aparelho avisa: 'Analisando o ritmo cardíaco, não toque no paciente'. O que você faz?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Continua fazendo a massagem cardíaca para não perder tempo.",
            correta: false,
            feedback: "Incorreto. Se você tocar no paciente enquanto o DEA analisa, a máquina fará a leitura do SEU ritmo cardíaco e dos tremores da massagem, errando o diagnóstico."
          },
          {
            id: "B",
            texto: "Interrompe as compressões, afasta as mãos e garante que ninguém esteja encostado na vítima.",
            correta: true,
            feedback: "Correto. A análise do DEA exige que o paciente fique perfeitamente imóvel e sem interferências externas."
          },
          {
            id: "C",
            texto: "Tira as pás rapidamente e as coloca de volta.",
            correta: false,
            feedback: "Incorreto. Mexer nas pás interrompe a análise vital que pode salvar a vida."
          },
          {
            id: "D",
            texto: "Aperta o botão de choque.",
            correta: false,
            feedback: "Incorreto. O DEA ainda está analisando, o botão de choque não estará ativo."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O DEA termina a análise e diz: 'Choque não recomendado. Inicie a RCP'. O que isso significa e qual sua ação imediata?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Significa que o coração dele não está com um ritmo que o choque conserte. Devo reiniciar imediatamente a massagem cardíaca.",
            correta: true,
            feedback: "Correto. Um 'choque não recomendado' (como em casos de assistolia/linha reta) significa que o tratamento necessário é unicamente a massagem cardíaca (RCP) ininterrupta até o resgate chegar."
          },
          {
            id: "B",
            texto: "Significa que ele morreu e não há mais nada a fazer. Paro as compressões.",
            correta: false,
            feedback: "Incorreto. O DEA não declara óbito. Muitas vidas são salvas continuando a RCP mesmo quando não há choque indicado."
          },
          {
            id: "C",
            texto: "Significa que a máquina está quebrada. Devo arrancar os adesivos.",
            correta: false,
            feedback: "Incorreto. O DEA identificou um ritmo não-chocável. O procedimento é confiar na máquina e seguir com a RCP."
          },
          {
            id: "D",
            texto: "Significa que ele está curado e vivo. Posso colocá-lo sentado.",
            correta: false,
            feedback: "Incorreto. A menos que ele reaja (tussa, abra os olhos, respire normalmente), o 'não choque' não significa recuperação, significa apenas que o choque não é útil no momento."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Desfecho: Após mais alguns minutos de massagem cardíaca ininterrupta, a equipe de Suporte Avançado do SAMU chega ao local da piscina. O que você deve fazer para garantir a melhor transição de cuidados?",
        tag_visual_detalhe: "chegada_socorro_transicao_rcp",
        opcoes: [
          {
            id: "A",
            texto: "Parar imediatamente a RCP, recolher o DEA do clube e ir embora, pois os profissionais já estão na cena.",
            correta: false,
            feedback: "Incorreto. Nunca interrompa as compressões até que a equipe esteja ao seu lado e dê a ordem clara para você parar. O fluxo de sangue não pode cessar."
          },
          {
            id: "B",
            texto: "Arrancar os adesivos do DEA do paciente para que a equipe médica possa colocar os adesivos do monitor deles.",
            correta: false,
            feedback: "Incorreto. A remoção de equipamentos deve ser feita apenas pela equipe profissional. O seu papel é manter o suporte básico rolando."
          },
          {
            id: "C",
            texto: "Continuar as compressões até que a equipe assuma o tórax e informar rapidamente: 'É um afogamento, estamos fazendo RCP há cerca de 10 minutos e o DEA não recomendou choque'.",
            correta: true,
            feedback: "Correto! Manter a RCP até a troca física garante a sobrevida. Informar que a causa foi afogamento alerta a equipe para focar no manejo avançado das vias aéreas (oxigenação), o que é crítico neste tipo de parada."
          },
          {
            id: "D",
            texto: "Pedir para a equipe do SAMU esperar o DEA fazer mais uma análise antes deles começarem a trabalhar.",
            correta: false,
            feedback: "Incorreto. A equipe médica possui monitores multiparamétricos (desfibriladores manuais) que oferecem leitura instantânea e controle total, substituindo o DEA leigo imediatamente."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_14",
    titulo: "A Porta de Vidro (Alta Complexidade - Hemorragia e Torniquete)",
    tag_visual_cenario: "cenario_interno_comum",
    descricao_inicial: "Durante uma confraternização, um jovem tropeça e atravessa uma grande porta de vidro. Ele sofre um corte muito profundo no antebraço direito. O sangue jorra num ritmo pulsante (arterial) e se espalha rapidamente pelo chão.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você corre até ele. Qual o primeiro passo técnico para tentar conter esse sangramento exsanguinante?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Fazer um curativo leve com esparadrapo.",
            correta: false,
            feedback: "Incorreto. Laceracões arteriais destroem bandagens leves instantaneamente."
          },
          {
            id: "B",
            texto: "Jogar água oxigenada ou álcool para esterilizar a ferida e estancar.",
            correta: false,
            feedback: "Incorreto. Álcool e água oxigenada destroem os tecidos vivos, causam dor dilacerante e não estancam fluxo arterial."
          },
          {
            id: "C",
            texto: "Pegar um pano limpo e aplicar forte compressão direta exatamente no local do sangramento usando o peso do seu corpo.",
            correta: true,
            feedback: "Correto. O método de primeira escolha para qualquer hemorragia severa é a compressão direta firme. O bloqueio mecânico do vaso rompido salva vidas."
          },
          {
            id: "D",
            texto: "Apenas manter o braço erguido e esperar coagular.",
            correta: false,
            feedback: "Incorreto. Elevação sem compressão direta forte é ineficaz para sangramentos arteriais (pulsantes)."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! Você está aplicando compressão máxima há 3 minutos, mas o sangue continua escorrendo sem parar pelos lados do pano, ensopando tudo. A compressão direta falhou. O que fazer a seguir (considerando que você tem treinamento/kit básico)?",
        tag_visual_detalhe: "acao_curativo_adicional",
        opcoes: [
          {
            id: "A",
            texto: "Tirar o pano para ver onde está o buraco da artéria e apertar com o dedo.",
            correta: false,
            feedback: "Incorreto. Nunca remova o primeiro curativo, isso desfaz qualquer coágulo que esteja tentando se formar."
          },
          {
            id: "B",
            texto: "Usar um torniquete comercial verdadeiro (ou improvisar adequadamente) posicionado no braço, acima da ferida.",
            correta: true,
            feedback: "Correto. As diretrizes de contenção de hemorragia (Stop The Bleed/PHTLS) afirmam que se a compressão direta falhar em ferimentos nos membros, um torniquete deve ser aplicado rapidamente para evitar o choque hipovolêmico letal."
          },
          {
            id: "C",
            texto: "Costurar o ferimento com agulha e linha de roupa.",
            correta: false,
            feedback: "Absurdo. Apenas cirurgiões fazem suturas, e linha comum causará infecção severa."
          },
          {
            id: "D",
            texto: "Aplicar gelo em volta de todo o braço para congelar o sangue.",
            correta: false,
            feedback: "Incorreto. Gelo não age rápido o suficiente para conter uma hemorragia arterial e a perda continuará."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você pega um torniquete tático homologado (ex: CAT) da caixa de primeiros socorros. Como aplicá-lo?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Colocar cerca de 5 a 7 centímetros acima do ferimento, fechar a fita e girar a barra de torção (haste) até o sangramento vermelho-vivo parar completamente.",
            correta: true,
            feedback: "Correto. O torniquete deve ser colocado acima (proximal) da ferida e torcido até interromper a circulação arterial. A dor será imensa, mas a vida será salva."
          },
          {
            id: "B",
            texto: "Colocar exatamente sobre o corte profundo e girar.",
            correta: false,
            feedback: "Incorreto. Colocar sobre a ferida agravará a lesão mecânica e não fechará a artéria de forma eficiente."
          },
          {
            id: "C",
            texto: "Apertar o torniquete só um pouquinho para o paciente não sentir dor.",
            correta: false,
            feedback: "Erro crítico. Um torniquete mal apertado interrompe o retorno venoso, mas permite que a artéria continue bombeando, aumentando exponencialmente o sangramento. Ele deve ser apertado até oer muito."
          },
          {
            id: "D",
            texto: "Colocar o torniquete no pescoço do paciente para estancar o sangue geral.",
            correta: false,
            feedback: "Absurdo mortal. Torniquetes no pescoço causam morte imediata por asfixia."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Reviravolta! O torniquete parou totalmente o sangramento. Porém, devido ao sangue já perdido antes, o jovem deita no chão, fica extremamente pálido, confuso, com respiração ofegante e lábios roxos. O que é isso?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "É um infarto por causa da dor. Tiro o torniquete imediatamente.",
            correta: false,
            feedback: "Erro letal. Retirar o torniquete o fará sangrar até a morte em segundos. Leigos nunca retiram torniquetes já instalados."
          },
          {
            id: "B",
            texto: "Ele está entrando em Choque Hipovolêmico grave (falta de sangue nos órgãos). Mantenho ele deitado, cubro com um cobertor para não perder calor e peço urgência ao 192.",
            correta: true,
            feedback: "Correto. A perda massiva de sangue leva ao choque descompensado. Prevenir a hipotermia cobrindo o paciente e deitá-lo otimiza o sangue que restou para o cérebro e coração."
          },
          {
            id: "C",
            texto: "Ele está com sede. Dou uma garrafa de água para repor o sangue.",
            correta: false,
            feedback: "Incorreto. Em choque profundo e indo para o centro cirúrgico, dar água causa broncoaspiração grave."
          },
          {
            id: "D",
            texto: "Apenas fecho os olhos dele para ele dormir e descansar.",
            correta: false,
            feedback: "Incorreto. Ele está rebaixando a consciência por falta de oxigênio no cérebro. Você precisa avaliar continuamente se ele vai parar de respirar (entrar em PCR)."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O SAMU chega 15 minutos depois. O que é imprescindível informar à equipe médica ao repassar o caso (Handover)?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Dizer que você não fez nada além de colocar um pano para evitar broncas.",
            correta: false,
            feedback: "Incorreto. Mentir no repasse compromete o diagnóstico e as condutas invasivas da equipe médica."
          },
          {
            id: "B",
            texto: "Informar a dinâmica (corte de vidro), mostrar o torniquete instalado e declarar exatamente a HORA em que o torniquete foi apertado.",
            correta: true,
            feedback: "Correto. A hora exata da colocação do torniquete (Isquemia) é a informação mais vital para o médico cirurgião decidir as etapas de salvamento do membro no hospital."
          },
          {
            id: "C",
            texto: "Pedir para o médico tirar o torniquete ali mesmo no chão para ver a ferida.",
            correta: false,
            feedback: "Incorreto. O torniquete de um sangramento exsanguinante raramente será retirado no pré-hospitalar (na rua), mas sim em ambiente cirúrgico com reposição de sangue pronta."
          },
          {
            id: "D",
            texto: "Avisar que ele bebeu água, mesmo você não tendo dado.",
            correta: false,
            feedback: "Incorreto. O repasse deve conter dados verídicos e cruciais, sem achismos."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_15",
    titulo: "Desespero no Berço (Alta Complexidade - Engasgo em Lactente)",
    tag_visual_cenario: "cenario_quarto_infantil",
    descricao_inicial: "Você está na casa de amigos. O bebê de 8 meses deles está brincando no tapete com algumas moedas soltas de uma bolsa. De repente, o bebê para de fazer sons, começa a bater as perninhas de forma desesperada, os lábios ficam roxos (cianose) e ele não consegue chorar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A ausência de choro e o arroxeamento no bebê indicam engasgo severo. Qual é a sua ação imediata?",
        tag_visual_detalhe: "estado_engasgo_bebe",
        opcoes: [
          {
            id: "A",
            texto: "Enfiar os dedos na garganta do bebê para tentar pinçar a moeda.",
            correta: false,
            feedback: "Erro grave. A varredura às cegas (colocar dedos sem ver o objeto claramente) frequentemente empurra a moeda direto para a traqueia do bebê, cravando-a lá."
          },
          {
            id: "B",
            texto: "Fazer manobra de Heimlich (apertar a barriga) como num adulto.",
            correta: false,
            feedback: "Incorreto. Compressões abdominais em lactentes (bebês menores de 1 ano) lesionam órgãos internos vitais (como o fígado) severamente."
          },
          {
            id: "C",
            texto: "Pegar o bebê, posicioná-lo de bruços apoiado no seu antebraço, com a cabeça mais baixa que o tórax, e aplicar 5 golpes firmes nas costas (entre as escápulas).",
            correta: true,
            feedback: "Correto. O protocolo internacional para desobstrução de via aérea em lactentes (bebês < 1 ano) conscientes inicia com 5 tapotagens (golpes) vigorosas nas costas com a cabeça rebaixada."
          },
          {
            id: "D",
            texto: "Dar a mamadeira com água para descer o objeto.",
            correta: false,
            feedback: "Incorreto. Não se oferece líquidos para pessoas em obstrução severa de via aérea, pois a asfixia piora."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você deu os 5 golpes nas costas, mas o objeto não saiu. Qual o próximo passo do protocolo para lactentes?",
        tag_visual_detalhe: "acao_desobstrucao_bebe",
        opcoes: [
          {
            id: "A",
            texto: "Virar o bebê de barriga para cima, no seu outro antebraço (cabeça ainda mais baixa) e fazer 5 compressões no centro do peito, com 2 dedos.",
            correta: true,
            feedback: "Correto. O ciclo de engasgo no bebê consciente é: 5 golpes nas costas alternados com 5 compressões no tórax, repetindo até o objeto sair ou o bebê desmaiar."
          },
          {
            id: "B",
            texto: "Continuar batendo nas costas até sair, não importa quanto tempo dure.",
            correta: false,
            feedback: "Incorreto. Bater incessantemente sem alterar a pressão torácica é menos eficiente e pode causar trauma excessivo nas costas."
          },
          {
            id: "C",
            texto: "Segurar o bebê pelas pernas, de cabeça para baixo, e sacudir agressivamente.",
            correta: false,
            feedback: "Incorreto. Isso causa a 'Síndrome do Bebê Sacudido', gerando lesões cerebrais severas e hemorragias no cérebro."
          },
          {
            id: "D",
            texto: "Soprar ar na boca do bebê para jogar a moeda para o estômago.",
            correta: false,
            feedback: "Incorreto. O ar sob pressão muito possivelmente travará o objeto de vez na via aérea, impedindo a expulsão."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! Você fez 3 ciclos de golpes e compressões, mas o bebê perde o tônus muscular (amolece) e fica inconsciente. O que fazer agora?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Correr para o hospital de carro com o bebê nos braços.",
            correta: false,
            feedback: "Incorreto. Transporte precário num carro impede o socorro vital. Sem agir, o cérebro do bebê morrerá antes de chegar."
          },
          {
            id: "B",
            texto: "Pedir para alguém ligar 192 (SAMU), colocar o bebê numa superfície plana e rígida (mesa/chão) e iniciar a RCP (massagem cardíaca).",
            correta: true,
            feedback: "Correto. A conduta muda. Quando o lactente engasgado fica inconsciente, inicia-se imediatamente o Suporte Básico de Vida: pedir ajuda e começar a RCP."
          },
          {
            id: "C",
            texto: "Dar tapas fortes no rosto do bebê e jogar água fria.",
            correta: false,
            feedback: "Incorreto. Isso não remove o bloqueio na garganta, apenas agride a criança."
          },
          {
            id: "D",
            texto: "Continuar tentando fazer a manobra das costas com o bebê mole no seu braço.",
            correta: false,
            feedback: "Incorreto. Um bebê inconsciente não tem força muscular (tônus) para suportar a manobra no braço e sofrerá lesões. A abordagem agora é deitada no chão."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Reviravolta Crítica! A mãe, em pânico total, empurra você gritando 'Eu vou tirar isso com o dedo!' e tenta enfiar a unha na garganta da criança desacordada. Qual sua ação imediata?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Deixar a mãe tentar, pois o instinto materno pode resolver.",
            correta: false,
            feedback: "Erro letal. O instinto sob pânico leva à varredura às cegas, que com certeza vai empurrar o objeto para o pulmão."
          },
          {
            id: "B",
            texto: "Afastar as mãos dela de forma firme, dizer 'Varredura às cegas mata a criança! Se a moeda não estiver visível, só a RCP vai salvar, eu sei o que estou fazendo!' e voltar para as compressões.",
            correta: true,
            feedback: "Correto. Liderança da cena é vital. Impedir a ação letal da mãe enquanto assegura que o socorro está em andamento com a técnica médica correta é dever do socorrista."
          },
          {
            id: "C",
            texto: "Brigar fisicamente com ela e deixar a criança sozinha.",
            correta: false,
            feedback: "Incorreto. Batalha corporal aumenta o caos e o bebê fica sem atendimento."
          },
          {
            id: "D",
            texto: "Desistir e ir embora porque a mãe não deixou você ajudar.",
            correta: false,
            feedback: "Incorreto. A lei pune a omissão de socorro, e a moral exige que você tnte intervir verbalmente e manter o cuidado à vida."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Você acalmou a mãe e voltou à RCP no bebê. Como você realiza a massagem cardíaca no lactente no chão?",
        tag_visual_detalhe: "acao_rcp_bebe",
        opcoes: [
          {
            id: "A",
            texto: "Com as duas mãos inteiras no peito do bebê, empurrando bem fundo.",
            correta: false,
            feedback: "Incorreto. A força de duas mãos adultas vai esmagar a caixa torácica inteira da criança."
          },
          {
            id: "B",
            texto: "Usando dois dedos (indicador e médio) posicionados no centro do peito (esterno), comprimindo rápido (100 a 120 vezes por minuto) aprofundando cerca de 4 cm (1/3 do peito).",
            correta: true,
            feedback: "Correto. Para um único socorrista leigo, as compressões em lactentes são feitas com dois dedos centrais, no ritmo forte e rápido da AHA, permitindo o fluxo de sangue vital."
          },
          {
            id: "C",
            texto: "Comprimindo a barriga bem abaixo do umbigo com uma mão.",
            correta: false,
            feedback: "Incorreto. O coração fica no tórax. Comprimir a barriga causará danos intestinais massivos."
          },
          {
            id: "D",
            texto: "Soprando na boca sem parar e sem apertar o peito.",
            correta: false,
            feedback: "Incorreto. Ventilação sem circulação cardíaca garante falência orgânica e não empurra o coágulo de sangue para frente."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Desfecho: Durante as compressões torácicas, a pressão no peito faz a moeda subir até a boca do bebê e você consegue vê-la claramente. Você a retira, e no mesmo instante o bebê começa a chorar forte. O SAMU chega exatamente nesse momento. Qual é a conduta final correta?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Dispensar a equipe do SAMU, avisando aos pais que o perigo passou e o bebê já pode dormir em paz.",
            correta: false,
            feedback: "Incorreto. A criança sofreu hipóxia (falta de oxigênio) grave e pode ter lesões na via aérea causadas pelo objeto ou pelas manobras. Cancelar o socorro profissional agora é perigoso."
          },
          {
            id: "B",
            texto: "Entregar o bebê à equipe do SAMU, relatando o tempo de engasgo, a perda de consciência, a necessidade de RCP e a expulsão do objeto, para que eles avaliem e transportem a criança ao hospital.",
            correta: true,
            feedback: "Desfecho Perfeito! Qualquer vítima (especialmente bebês) que chegue à inconsciência e necessite de RCP devido a um engasgo DEVE ser avaliada em ambiente hospitalar, mesmo que o objeto tenha saído e a criança pareça bem."
          },
          {
            id: "C",
            texto: "Continuar as compressões torácicas por precaução até que o médico mande você parar.",
            correta: false,
            feedback: "Incorreto. Se o bebê está chorando, significa que o coração está batendo e ele está respirando. Fazer RCP em um bebê com pulso pode causar lesões graves ou parada cardíaca induzida por trauma."
          },
          {
            id: "D",
            texto: "Oferecer uma mamadeira com água para acalmar a garganta do bebê antes de entregá-lo aos socorristas.",
            correta: false,
            feedback: "Incorreto. Após um episódio de asfixia grave, a garganta pode estar inchada ou lesionada, e há risco altíssimo de broncoaspiração (líquido ir para o pulmão). A avaliação médica deve vir antes de qualquer alimentação."
          }
        ]
      }
    ]
   },
  {
id: "cenario_16",
    titulo: "Jantar de Aniversário e a Engasgada Silenciosa",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Durante um jantar de família, sua tia que estava rindo e comendo um pedaço de carne, de repente para de falar. Ela leva as duas mãos ao pescoço, arregala os olhos e começa a tossir fracamente, emitindo um chiado agudo.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Sua tia parece em apuros. Qual é a sua primeira ação ao ver os sinais de engasgo?",
        tag_visual_detalhe: "estado_engasgo_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Dou fortes tapas nas costas dela enquanto ela tosse para ajudar a descer a carne.",
            correta: false,
            feedback: "Incorreto. Se ela está tossindo, o engasgo é parcial. Dar tapas pode empurrar o alimento ainda mais para baixo, causando uma obstrução total."
          },
          {
            id: "B",
            texto: "Ofereço um copo de água grande para ela engolir e empurrar a comida.",
            correta: false,
            feedback: "Incorreto. Nunca dê líquidos para uma pessoa engasgada. A água pode ir para o pulmão, piorando o quadro."
          },
          {
            id: "C",
            texto: "Me aproximo e pergunto firmemente: 'Você está engasgada?'. Como ela tosse e emite som, eu apenas a incentivo a continuar tossindo com força.",
            correta: true,
            feedback: "Correto! Na obstrução parcial (a vítima tosse e emite som), a tosse é o mecanismo mais eficaz. Incentivar a tosse e observar é a conduta correta."
          },
          {
            id: "D",
            texto: "Coloco o dedo na garganta dela para tentar puxar a carne como uma pinça.",
            correta: false,
            feedback: "Incorreto. A 'varredura às cegas' com o dedo pode empurrar o corpo estranho mais para o fundo das vias aéreas."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! A tosse da sua tia cessa completamente. Ela fica com o rosto roxo (cianose), não emite nenhum som e continua com as mãos no pescoço, em pânico.",
        tag_visual_detalhe: "estado_engasgo_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Me posiciono atrás dela, abraço-a pela cintura e faço compressões abdominais para dentro e para cima (Manobra de Heimlich) enquanto peço para ligarem 193.",
            correta: true,
            feedback: "Correto! O silêncio e a cianose indicam Obstrução Total (OVACE). A Manobra de Heimlich cria uma tosse artificial para expulsar o objeto."
          },
          {
            id: "B",
            texto: "Faço compressões fortes direto no peito dela, como numa massagem cardíaca, com ela em pé.",
            correta: false,
            feedback: "Incorreto. Em adultos engasgados e conscientes, as compressões são na boca do estômago (abdômen), não no peito (exceto em gestantes ou obesos graves)."
          },
          {
            id: "C",
            texto: "Bato no peito dela e grito para ela respirar fundo pelo nariz.",
            correta: false,
            feedback: "Incorreto. A via aérea está bloqueada. Tentar inspirar fundo não vai funcionar e a vítima perderá a consciência rapidamente."
          },
          {
            id: "D",
            texto: "Deito-a no chão imediatamente e dou respiração boca-a-boca.",
            correta: false,
            feedback: "Incorreto. Enquanto a vítima de engasgo estiver consciente, ela deve permanecer em pé ou sentada para a realização da Manobra de Heimlich."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Mesmo após várias compressões abdominais, o pedaço de carne não sai. A sua tia amolece, perde a consciência e desaba nos seus braços.",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Amparo sua queda, coloco-a cuidadosamente no chão, aciono o resgate e inicio IMEDIATAMENTE as compressões torácicas (Massagem Cardíaca).",
            correta: true,
            feedback: "Correto! Se uma vítima de engasgo desmaia, o protocolo manda deitá-la no chão e iniciar a RCP (compressões torácicas). As compressões não só circulam sangue, mas ajudam a expulsar o objeto."
          },
          {
            id: "B",
            texto: "Apoio a vítima na cadeira e continuo fazendo a Manobra de Heimlich no abdômen.",
            correta: false,
            feedback: "Incorreto. A Manobra de Heimlich só é feita em vítimas conscientes. Em vítimas inconscientes, a musculatura relaxa e a compressão abdominal não é mais eficaz ou segura."
          },
          {
            id: "C",
            texto: "Deito-a no chão e começo a derramar água no rosto para ela acordar do desmaio.",
            correta: false,
            feedback: "Incorreto. Ela não desmaiou de calor, ela desmaiou por falta de oxigênio. Água no rosto não desobstrui a garganta."
          },
          {
            id: "D",
            texto: "Coloco ela de lado (Posição Lateral de Segurança) e espero a ambulância chegar.",
            correta: false,
            feedback: "Incorreto. A Posição Lateral é para quem respira. Sua tia não está respirando devido ao bloqueio total, ela precisa de compressões torácicas imediatas."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: Após o segundo ciclo de compressões torácicas, você percebe o pedaço de carne na boca dela. Você o retira com os dedo em pinça. Imediatamente, ela dá um suspiro profundo, tosse e volta a respirar, mas continua caída e exausta. O SAMU acaba de chegar ao local. Qual é a conduta final?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Cancelar o atendimento do SAMU, sentá-la na cadeira e dar um copo de água para limpar a garganta.",
            correta: false,
            feedback: "Incorreto. Ela sofreu hipóxia (falta de oxigênio) e pode ter lesões na garganta. Dar líquidos agora apresenta alto risco de um novo engasgo, e cancelar o socorro é perigoso."
          },
          {
            id: "B",
            texto: "Continuar fazendo as compressões torácicas vigorosamente até que o médico do SAMU mande parar.",
            correta: false,
            feedback: "Incorreto. Se ela voltou a respirar e tossir, o coração está batendo. Fazer RCP em uma pessoa que respira e tem pulso pode causar lesões graves, como fraturas desnecessárias nas costelas."
          },
          {
            id: "C",
            texto: "Colocá-la de lado (Posição Lateral de Segurança) para manter a via aérea aberta, relatar à equipe do SAMU o tempo de engasgo e que foi necessária RCP, entregando os cuidados.",
            correta: true,
            feedback: "Correto! A Posição Lateral de Segurança protege a via aérea de quem respira mas está confuso/exausto. Toda vítima de engasgo que chega a desmaiar e precisa de RCP deve obrigatoriamente ser avaliada no hospital."
          },
          {
            id: "D",
            texto: "Levantá-la rapidamente pelos braços e levá-la andando até a ambulância para agilizar o transporte.",
            correta: false,
            feedback: "Incorreto. Levantar subitamente uma pessoa que acabou de recuperar a consciência após asfixia pode causar uma queda brusca de pressão e um novo desmaio."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_17",
    titulo: "Acidente de Moto: A Importância do Controle",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você presencia um motociclista colidir com um carro em baixa velocidade. O motociclista cai no asfalto. Ele está acordado, gemendo de dor na perna direita, que sangra intensamente de forma pulsátil e contínua.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual é a PRIMEIRA coisa a fazer antes mesmo de chegar perto do motociclista?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr até a vítima o mais rápido possível para estancar o sangue.",
            correta: false,
            feedback: "Incorreto. Correr cegamente para o asfalto pode fazer você ser atropelado. A primeira regra do trauma é: Avaliar a segurança da cena."
          },
          {
            id: "B",
            texto: "Sinalizar o local (com triângulo, galhos), garantir que os carros pararam, pedir para alguém ligar 192/193 e então me aproximar com segurança.",
            correta: true,
            feedback: "Correto! A segurança da cena é a etapa primária no atendimento pré-hospitalar (PHTLS). Um socorrista morto ou ferido não salva ninguém."
          },
          {
            id: "C",
            texto: "Começar a filmar com o celular para ter provas para o seguro do carro.",
            correta: false,
            feedback: "Incorreto. O tempo gasto filmando é tempo que a vítima está perdendo sangue. Omissão de socorro é crime."
          },
          {
            id: "D",
            texto: "Gritar com o motorista do carro e culpá-lo pelo acidente.",
            correta: false,
            feedback: "Incorreto. Criar conflito aumenta a insegurança da cena e não ajuda o paciente."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Com a cena segura, você se aproxima. O motociclista tenta desesperadamente tirar o próprio capacete, chorando muito de dor.",
        tag_visual_detalhe: "acao_estabilizacao_cervical",
        opcoes: [
          {
            id: "A",
            texto: "Ajudo-o a puxar o capacete com força para ele respirar melhor.",
            correta: false,
            feedback: "Incorreto. Tirar o capacete incorretamente pode agravar uma lesão na coluna cervical, deixando a vítima tetraplégica."
          },
          {
            id: "B",
            texto: "Peço para ele se levantar e ir para a calçada mancando.",
            correta: false,
            feedback: "Incorreto. Movimentar vítimas de trauma antes da avaliação profissional pode transformar lesões simples em lesões fatais."
          },
          {
            id: "C",
            texto: "Peço para ele não se mexer, seguro o capacete firmemente para impedir que ele o tire e peço para ele ficar calmo, evitando que mova o pescoço.",
            correta: true,
            feedback: "Correto! A estabilização manual da cabeça e a orientação para não retirar o capacete são cruciais para proteger a coluna cervical (XABCDE - Letra A)."
          },
          {
            id: "D",
            texto: "Abro a viseira e jogo água no rosto dele por dentro do capacete.",
            correta: false,
            feedback: "Incorreto. Jogar água no rosto de uma vítima em decúbito dorsal pode causar afogamento/broncoaspiração."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! Enquanto você protege o pescoço dele, nota que o sangramento na perna direita formou uma grande poça no asfalto e está espirrando junto com os batimentos do coração. Ele começa a ficar pálido.",
        tag_visual_detalhe: "hemostasia_compressao",
        opcoes: [
          {
            id: "A",
            texto: "Peço a alguém para pegar um pano limpo e fazer compressão direta e forte sobre o ferimento sangrante, priorizando o controle da hemorragia.",
            correta: true,
            feedback: "Correto! Hemorragias massivas (Letra X do protocolo PHTLS) são a principal causa de morte evitável no trauma. Controlar o sangramento é urgente."
          },
          {
            id: "B",
            texto: "Não faço nada com a perna. O mais importante é o pescoço e esperar a ambulância.",
            correta: false,
            feedback: "Incorreto. A pessoa morrerá em minutos por choque hemorrágico se o sangramento pulsátil não for contido."
          },
          {
            id: "C",
            texto: "Tento amarrar um barbante fino ou cadarço de sapato em volta da coxa para cortar o sangue.",
            correta: false,
            feedback: "Incorreto. Fios finos cortam o tecido e não são eficazes como torniquete. Para leigos não treinados, a compressão direta contínua é a melhor opção."
          },
          {
            id: "D",
            texto: "Coloco terra ou pó de café no ferimento para estancar o sangue mais rápido.",
            correta: false,
            feedback: "Incorreto. Substâncias não estéreis causam infecções graves e não controlam hemorragias massivas."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: O sangramento diminuiu com a compressão direta contínua, mas o motociclista continua pálido e sentindo frio. O resgate (SAMU/Bombeiros) chega ao local com a sirene ligada. Qual é a sua atitude final ao entregar a vítima?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Solto a cabeça dele imediatamente, levanto as mãos e saio de perto rápido para não atrapalhar os socorristas.",
            correta: false,
            feedback: "Incorreto. Soltar a cabeça repentinamente pode fazer a vítima mover o pescoço bruscamente. Você deve aguardar que um socorrista posicione as mãos e diga 'assumi'."
          },
          {
            id: "B",
            texto: "Tiro o pano cheio de sangue da perna para mostrar aos paramédicos o tamanho do corte e o quanto sangrou.",
            correta: false,
            feedback: "Incorreto. Remover o curativo que está sob pressão pode romper o coágulo que começou a se formar, reiniciando a hemorragia grave que você lutou para controlar."
          },
          {
            id: "C",
            texto: "Mantenho a estabilização da cabeça (e a compressão na perna) até que a equipe assuma fisicamente. Relato rapidamente a cinemática (colisão), o sangramento pulsátil inicial e o que foi feito.",
            correta: true,
            feedback: "Desfecho Perfeito! A transição segura do cuidado exige manter as manobras salvadoras até a rendição profissional. Um relato focado e objetivo ajuda a equipe a priorizar o suporte avançado."
          },
          {
            id: "D",
            texto: "Peço para a equipe do resgate me dar um colar cervical para eu mesmo colocar na vítima, já que eu iniciei o atendimento.",
            correta: false,
            feedback: "Incorreto. A aplicação de dispositivos de imobilização e a extração devem ser feitas pela equipe treinada. O papel do primeiro respondente termina na transição da ocorrência."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_18",
    titulo: "A Pressa e o Óleo Quente",
    tag_visual_cenario: "cenario_cozinha",
    descricao_inicial: "Na cozinha, seu marido esbarra no cabo da frigideira e uma grande quantidade de óleo fervente cai sobre o seu antebraço direito. Ele grita de dor e a pele fica imediatamente vermelha e com bolhas surgindo.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ele está desesperado de dor. Qual deve ser sua primeira atitude em relação à queimadura?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Colocar bastante gelo direto em cima das bolhas para resfriar rápido.",
            correta: false,
            feedback: "Incorreto. O gelo aplicado diretamente causa queimaduras por frio (geladura), agravando a lesão no tecido já danificado."
          },
          {
            id: "B",
            texto: "Colocar o braço dele debaixo da água corrente fria (temperatura ambiente) por 10 a 15 minutos.",
            correta: true,
            feedback: "Correto! O resfriamento imediato com água corrente é a medida mais eficaz para cessar o dano térmico, aliviar a dor e evitar o aprofundamento da queimadura."
          },
          {
            id: "C",
            texto: "Estourar as bolhas imediatamente para liberar o líquido quente que ficou dentro.",
            correta: false,
            feedback: "Incorreto. As bolhas são um curativo natural do corpo (pele intacta). Rompê-las abre uma porta gigante para infecções graves."
          },
          {
            id: "D",
            texto: "Secar o braço com uma toalha áspera esfregando para tirar o óleo.",
            correta: false,
            feedback: "Incorreto. Esfregar removerá a pele lesionada, causando dor extrema e mais danos."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! A vizinha entra na cozinha ao ouvir os gritos, traz um pote de pasta de dente e borra de café, dizendo que é o melhor remédio para não deixar cicatriz.",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Passar a pasta de dente logo, pois ela é refrescante e ajuda na dor.",
            correta: false,
            feedback: "Incorreto. Pasta de dente, manteiga, ou café abafam a ferida, retêm calor, irritam a pele e terão que ser esfregados para sair no hospital, gerando muita dor."
          },
          {
            id: "B",
            texto: "Recusar a mistura da vizinha, manter na água corrente e cobrir suavemente a lesão com gaze ou pano limpo e úmido.",
            correta: true,
            feedback: "Correto! Prevenir o contato com agentes contaminantes externos e usar um tecido limpo, preferencialmente úmido, é o ideal antes do hospital."
          },
          {
            id: "C",
            texto: "Passar clara de ovo na queimadura, que é rica em proteínas.",
            correta: false,
            feedback: "Incorreto. Remédios caseiros, como a clara de ovo, expõem o paciente a bactérias (como a salmonela)."
          },
          {
            id: "D",
            texto: "Soprar a queimadura vigorosamente para secar o óleo.",
            correta: false,
            feedback: "Incorreto. A boca contém milhares de bactérias. Soprar a ferida aumenta o risco de contaminação."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "A dor do seu marido diminuiu com a água, mas você percebe que a blusa dele derreteu e grudou na pele perto da queimadura. O que fazer?",
        tag_visual_detalhe: "acao_resfriamento_agua",
        opcoes: [
          {
            id: "A",
            texto: "Puxar a blusa grudada o mais rápido possível como um band-aid.",
            correta: false,
            feedback: "Incorreto. Puxar tecido aderido vai arrancar a pele junto, aprofundando a queimadura e causando dor intensa."
          },
          {
            id: "B",
            texto: "Cortar o tecido ao redor da área queimada, sem mexer no que está grudado, e levá-lo ao pronto-socorro.",
            correta: true,
            feedback: "Correto! Apenas o médico deve remover tecidos ou plásticos fundidos à pele no ambiente hospitalar, com anestesia e ferramentas estéreis."
          },
          {
            id: "C",
            texto: "Passar óleo mineral para tentar soltar o tecido suavemente.",
            correta: false,
            feedback: "Incorreto. Aplicar mais óleos ou pomadas antes da avaliação médica é contraindicado."
          },
          {
            id: "D",
            texto: "Deixar ele dormir em casa, afinal a dor já passou.",
            correta: false,
            feedback: "Incorreto. Queimaduras extensas (de 2º grau ou mais) com óleo quente, especialmente envolvendo tecidos grudados, exigem avaliação médica urgente."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_19",
    titulo: "A Queda na Escada e a Crise Inesperada",
    tag_visual_cenario: "escadaria",
    descricao_inicial: "No shopping, um adolescente de 16 anos escorrega no topo de uma escada e cai rolando os degraus. Ele para no chão do patamar, parecendo desorientado, e bateu forte a cabeça.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "As pessoas ao redor começam a tentar levantar o jovem pelas axilas para ele sentar no degrau. Qual a sua conduta?",
        tag_visual_detalhe: "vitima_queda_escada",
        opcoes: [
          {
            id: "A",
            texto: "Ajudar as pessoas a levantá-lo logo para ele não passar vergonha no meio do shopping.",
            correta: false,
            feedback: "Incorreto. Vítimas de trauma contuso grave (como queda de altura) nunca devem ser movidas sem imobilização, pelo risco de dano medular irreversível."
          },
          {
            id: "B",
            texto: "Intervir rapidamente, pedir para ninguém movê-lo, ajoelhar ao lado e apoiar a cabeça dele para que não mexa o pescoço.",
            correta: true,
            feedback: "Correto! Em quedas com impacto na cabeça, deve-se suspeitar de lesão raquimedular (coluna). Estabilizar a cabeça manualmente é a prioridade."
          },
          {
            id: "C",
            texto: "Oferecer um remédio para dor de cabeça que você tem na bolsa, pois ele deve estar com dor.",
            correta: false,
            feedback: "Incorreto. Nunca administre medicamentos via oral em uma vítima de trauma, principalmente com rebaixamento de consciência (risco de engasgo e cirurgia futura)."
          },
          {
            id: "D",
            texto: "Dar tapas leves no rosto dele para ele acordar mais rápido da confusão mental.",
            correta: false,
            feedback: "Incorreto. Estimular o paciente com traumas pode causar movimentos bruscos na coluna."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! De repente, os olhos do jovem viram para cima. O corpo dele enrijece e ele começa a se debater violentamente no chão (uma convulsão).",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Segurar os braços e pernas dele com toda a sua força para tentar pará-lo de bater.",
            correta: false,
            feedback: "Incorreto. Conter os movimentos de uma convulsão pode causar fraturas nos ossos ou luxações articulares na vítima."
          },
          {
            id: "B",
            texto: "Colocar os dedos ou uma colher dentro da boca dele para ele não enrolar e engolir a própria língua.",
            correta: false,
            feedback: "Incorreto. Mito perigoso! É fisicamente impossível engolir a língua. Colocar os dedos resultará em amputação dos seus dedos pela força da mandíbula dele."
          },
          {
            id: "C",
            texto: "Afastar cadeiras/objetos próximos para ele não se machucar, e apoiar algo macio (uma blusa) debaixo da cabeça dele durante o abalo.",
            correta: true,
            feedback: "Correto! O socorro na convulsão é apenas proteção e segurança. Proteger a cabeça de impactos no chão enquanto espera a crise passar."
          },
          {
            id: "D",
            texto: "Jogar água gelada no rosto dele para quebrar o estado convulsivo.",
            correta: false,
            feedback: "Incorreto. A convulsão é uma descarga elétrica cerebral, água externa não tem nenhum efeito e pode causar asfixia."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "A convulsão dura cerca de 2 minutos e cessa sozinha. O jovem agora está inconsciente, molenga, mas você percebe o peito dele subindo e descendo (ele está respirando de forma ruidosa).",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Inicio a massagem cardíaca com força no peito, pois ele não está acordado.",
            correta: false,
            feedback: "Incorreto. Ele ESTÁ respirando, então não está em parada cardíaca. Fazer compressões num coração que bate pode causar danos graves."
          },
          {
            id: "B",
            texto: "Como ele bateu a cabeça antes de convulsionar, mantenho ele de barriga para cima imóvel e abro a boca para ele respirar.",
            correta: false,
            feedback: "Incorreto. Uma pessoa inconsciente de barriga para cima, especialmente após convulsão (salivando muito), pode engasgar com a própria saliva ou vômito e morrer asfixiada."
          },
          {
            id: "C",
            texto: "Rolo-o com cuidado em bloco para a Posição Lateral de Segurança (de lado), monitorando a respiração e aguardando o resgate chegar.",
            correta: true,
            feedback: "Correto! Apesar do trauma inicial, a via aérea (respirar) é a prioridade absoluta. A Posição Lateral de Segurança impede que a língua ou vômito obstruam a passagem de ar."
          },
          {
            id: "D",
            texto: "Dou boca-a-boca imediatamente porque ele está respirando de forma ruidosa.",
            correta: false,
            feedback: "Incorreto. A respiração ruidosa após a convulsão (fase pós-ictal) é normal ou devido a secreções. Virá-lo de lado resolve a passagem de ar."
          }
        ]
      }
    ]
  },
 {
    id: "cenario_20",
    titulo: "Mal súbito no parque",
    tag_visual_cenario: "cenario_publico_aberto", 
    descricao_inicial: "Você está caminhando em um parque quando vê um homem adulto de repente levar a mão ao peito e desabar no chão. Ele não se move e parece estar desacordado.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você se aproxima rapidamente. Qual deve ser a sua PRIMEIRA ação ao chegar perto da vítima?",
        tag_visual_detalhe: "estado_caida_inconsciente", 
        opcoes: [
          {
            id: "A",
            texto: "Colocar o ouvido no peito dele para tentar escutar o coração.",
            correta: false,
            feedback: "Tentar escutar o coração gasta tempo precioso e é ineficaz para leigos. O foco inicial deve ser a segurança e avaliar a responsividade."
          },
          {
            id: "B",
            texto: "Levantar as pernas da vítima para melhorar a circulação do sangue para a cabeça.",
            correta: false,
            feedback: "Elevar as pernas é usado para desmaios simples, mas sem saber se ele está respirando, isso pode atrasar o socorro adequado."
          },
          {
            id: "C",
            texto: "Avaliar a segurança do local e tocar nos ombros dele chamando-o em voz alta.",
            correta: true,
            feedback: "Correto! O primeiro passo é garantir que a cena é segura para você e, em seguida, checar se a vítima responde, tocando firmemente nos ombros e chamando-a."
          },
          {
            id: "D",
            texto: "Iniciar compressões torácicas imediatamente, pois ele caiu subitamente.",
            correta: false,
            feedback: "Antes de comprimir, você precisa ter certeza de que o local é seguro e que a pessoa realmente está inconsciente e não respira normalmente."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "O local é seguro. Você chama o homem, mas ele não responde, não se move e você nota que o peito dele não está subindo (não respira). O que você faz agora?",
        tag_visual_detalhe: "estado_caida_inconsciente", 
        opcoes: [
          {
            id: "A",
            texto: "Pede para alguém ligar para o SAMU (192) e trazer um DEA, e inicia compressões torácicas.",
            correta: true,
            feedback: "Excelente! Vítima inconsciente e que não respira (ou tem respiração agônica) está em Parada Cardiorrespiratória. Ligar para o 192, pedir um Desfibrilador (DEA) e iniciar compressões imediatamente salva vidas."
          },
          {
            id: "B",
            texto: "Aplica respiração boca a boca repetidas vezes para oxigenar o cérebro.",
            correta: false,
            feedback: "Para leigos, a respiração boca a boca não é o foco inicial e muitas vezes não é recomendada sem equipamento de proteção. A prioridade absoluta são as compressões torácicas contínuas."
          },
          {
            id: "C",
            texto: "Tenta procurar o pulso no pescoço ou pulso por pelo menos 1 minuto.",
            correta: false,
            feedback: "Leigos não devem perder tempo procurando pulso. Se a vítima não responde e não respira normalmente, assuma que é uma parada cardíaca e aja."
          },
          {
            id: "D",
            texto: "Coloca a vítima de lado para evitar que ela engasgue com a própria língua e aguarda.",
            correta: false,
            feedback: "A posição lateral de segurança é para quem está inconsciente MAS respirando normalmente. Se ele não respira, precisa de reanimação (RCP), não de ser virado de lado."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você começou as compressões no centro do peito. Como elas devem ser realizadas?",
        tag_visual_detalhe: "acao_rcp_adulto", 
        opcoes: [
          {
            id: "A",
            texto: "Compressões superficiais e lentas para não quebrar as costelas da vítima.",
            correta: false,
            feedback: "Compressões fracas não bombeiam sangue. A prioridade é a vida, não o risco (baixo) de lesão nas costelas."
          },
          {
            id: "B",
            texto: "Comprimir forte (pelo menos 5 cm) e rápido (100 a 120 por minuto), permitindo o retorno do peito.",
            correta: true,
            feedback: "Correto! O protocolo exige compressões de alta qualidade: profundidade de 5 a 6 cm, ritmo rápido (100-120/min) e deixando o peito voltar totalmente à posição original após cada compressão."
          },
          {
            id: "C",
            texto: "Fazer 10 compressões rápidas e parar 10 segundos para ver se ele acordou.",
            correta: false,
            feedback: "Você não deve interromper as compressões para checar se a vítima acordou. Interrupções drásticas diminuem a chance de sobrevivência."
          },
          {
            id: "D",
            texto: "Apoiar as mãos na barriga do paciente e empurrar para cima.",
            correta: false,
            feedback: "Apoiar as mãos na barriga é incorreto para RCP; as compressões devem ser feitas no centro do tórax, na metade inferior do osso esterno."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: A pessoa que você pediu ajuda retorna correndo com o DEA (Desfibrilador) da administração do parque. Ao longe, você ouve a sirene do SAMU se aproximando. Qual a sua atitude final?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Guardar o aparelho. Como o SAMU já está chegando, é melhor não mexer no DEA e focar apenas nas compressões manuais.",
            correta: false,
            feedback: "Incorreto. O tempo é o fator mais crítico. Em mal súbito (infarto que vira PCR), a fibrilação ventricular é muito comum. Cada minuto sem choque diminui a chance de sobrevivência em 10%. O DEA deve ser usado assim que chega."
          },
          {
            id: "B",
            texto: "Parar totalmente a massagem cardíaca, abrir o DEA, ler o manual de instruções impresso na tampa com calma e colocar os adesivos por cima da blusa dele.",
            correta: false,
            feedback: "Incorreto. A massagem não deve parar enquanto o aparelho é preparado. O DEA tem comandos de voz instintivos, e os adesivos devem obrigatoriamente ser colados na pele nua e seca, nunca sobre roupas."
          },
          {
            id: "C",
            texto: "Parar tudo, levantar os braços e se afastar do paciente para deixar o caminho livre para a ambulância que está estacionando.",
            correta: false,
            feedback: "Incorreto. Nunca interrompa o suporte básico de vida até que a equipe avançada esteja literalmente ao seu lado, com os equipamentos prontos, e diga claramente 'nós assumimos daqui'."
          },
          {
            id: "D",
            texto: "Ligar o DEA imediatamente, colar as pás no peito nu da vítima seguindo os desenhos e instruções de voz (minimizando as pausas na massagem) e continuar o atendimento até a equipe do SAMU assumir o tórax.",
            correta: true,
            feedback: "Desfecho Perfeito! A Desfibrilação Precoce acoplada à RCP de alta qualidade forma os elos cruciais da Corrente de Sobrevivência da AHA. Ligar o DEA não requer parar as compressões até o momento da análise, garantindo fluxo sanguíneo e choque rápido até o resgate chegar."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_21",
    titulo: "Sufoco no Restaurante",
    tag_visual_cenario: "cenario_publico_fechado", 
    descricao_inicial: "Você está jantando com amigos. Na mesa ao lado, uma mulher subitamente se levanta, arregala os olhos, leva as duas mãos ao pescoço e tenta tossir, mas nenhum som sai da sua boca. Ela está ficando com o rosto avermelhado/arroxeado.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ao perceber a cena, você se aproxima. O que você deve fazer para confirmar o engasgo grave antes de intervir fisicamente?",
        tag_visual_detalhe: "estado_engasgo_adulto", 
        opcoes: [
          {
            id: "A",
            texto: "Oferecer um copo de água rapidamente para empurrar o alimento.",
            correta: false,
            feedback: "Incorreto. Dar líquidos a alguém que está engasgado pode piorar a obstrução e fazer com que o líquido vá para os pulmões (broncoaspiração)."
          },
          {
            id: "B",
            texto: "Dar tapas fortes nas costas da mulher sem avisá-la, para assustá-la.",
            correta: false,
            feedback: "Incorreto. Tapas nas costas em um adulto em pé e reto podem fazer o corpo estranho descer ainda mais. O susto não tem efeito fisiológico na desobstrução."
          },
          {
            id: "C",
            texto: "Enfiar os dedos na garganta dela para tentar pinçar e puxar o alimento.",
            correta: false,
            feedback: "Incorreto. A manobra de 'varredura às cegas' (enfiar os dedos sem ver o objeto) pode empurrar o alimento ainda mais fundo, travando a via aérea de vez."
          },
          {
            id: "D",
            texto: "Perguntar em voz alta: 'Você está engasgada?'. Se ela acenar que sim e não conseguir falar, pedir a alguém para ligar para o 192 e intervir.",
            correta: true,
            feedback: "Perfeito! O sinal universal de engasgo grave é levar as mãos ao pescoço aliado à incapacidade de tossir, falar ou chorar. Confirmar com a vítima e acionar socorro é a primeira conduta."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A mulher confirma balançando a cabeça. Ela não consegue tossir e está ficando azulada (cianótica). Qual é a manobra física correta a ser feita neste momento?",
        tag_visual_detalhe: "acao_manobra_heimlich", 
        opcoes: [
          {
            id: "A",
            texto: "Abraçá-la por trás, posicionar uma mão fechada acima do umbigo e fazer compressões abdominais (Manobra de Heimlich) em formato de 'J' para dentro e para cima.",
            correta: true,
            feedback: "Correto! A Manobra de Heimlich comprime o diafragma e gera uma tosse artificial, aumentando a pressão nos pulmões para expulsar o objeto preso como uma rolha."
          },
          {
            id: "B",
            texto: "Deitá-la no chão de barriga para cima e pisar na barriga dela.",
            correta: false,
            feedback: "Incorreto. Isso causaria lesões massivas em órgãos internos (fígado, baço) e não é um protocolo de primeiros socorros válido."
          },
          {
            id: "C",
            texto: "Levantar os dois braços da vítima para cima até o objeto descer para o estômago.",
            correta: false,
            feedback: "Incorreto. Levantar os braços é um mito popular antigo e não tem nenhuma eficácia mecânica para desobstruir as vias aéreas."
          },
          {
            id: "D",
            texto: "Comprimir o centro do peito da vítima pelas costas, com ela em pé.",
            correta: false,
            feedback: "Incorreto. A compressão no centro do peito em vítimas em pé só é usada se a vítima for obesa mórbida ou gestante avançada. Na maioria das pessoas, as compressões são abdominais."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! Você realizou a Manobra de Heimlich repetidas vezes por quase 2 minutos, mas o pedaço de carne não saiu. O corpo da mulher fica completamente mole (perde o tônus) e ela desmaia em seus braços. O que fazer agora?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Mantê-la em pé escorada em você e continuar a Manobra de Heimlich com mais força.",
            correta: false,
            feedback: "Incorreto. Em pessoas inconscientes a musculatura relaxa. Continuar o Heimlich pode causar danos internos graves e não será efetivo. Ela precisa ir para o chão."
          },
          {
            id: "B",
            texto: "Amparar a queda, deitá-la de costas no chão duro, garantir que o SAMU (192) foi chamado e iniciar a Reanimação Cardiopulmonar (RCP) com compressões torácicas.",
            correta: true,
            feedback: "Correto! Toda vítima de engasgo que fica inconsciente entra no protocolo de Parada Cardiorrespiratória. As compressões no peito (RCP) vão fazer o sangue circular e ao mesmo tempo criar pressão para empurrar o objeto para fora."
          },
          {
            id: "C",
            texto: "Sentá-la em uma cadeira, jogar água fria no rosto e dar tapas no rosto para ela acordar.",
            correta: false,
            feedback: "Incorreto. Ela não desmaiou por queda de pressão comum, mas sim por asfixia severa (falta de oxigênio no cérebro). Água não desobstrui a via aérea."
          },
          {
            id: "D",
            texto: "Colocá-la em Posição Lateral de Segurança e esperar o SAMU chegar.",
            correta: false,
            feedback: "Incorreto. A posição lateral é exclusiva para vítimas inconscientes QUE ESTÃO RESPIRANDO. A via aérea dela está totalmente bloqueada, logo, ela precisa de RCP imediata."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Reviravolta Crítica! Você está fazendo as compressões no peito dela no chão do restaurante. O gerente do local chega apavorado com um garfo, dizendo que vai tentar 'pescar' a carne para ajudar. Qual sua atitude?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Parar as compressões, abrir a boca da vítima e deixar o gerente tentar.",
            correta: false,
            feedback: "Erro letal. Introduzir objetos pontiagudos às cegas na garganta vai ferir gravemente as vias aéreas, causar sangramento e empurrar a carne ainda mais para o pulmão."
          },
          {
            id: "B",
            texto: "Afastá-lo firmemente dizendo: 'Afaste-se! Colocar objetos na boca vai piorar o caso. Eu sei o que estou fazendo, a massagem cardíaca vai ajudar a soltar a carne!'. E não interromper a RCP.",
            correta: true,
            feedback: "Correto! O socorrista precisa liderar e proteger a cena de intervenções perigosas de terceiros em pânico, sem interromper o suporte vital (compressões)."
          },
          {
            id: "C",
            texto: "Pegar o garfo do gerente e você mesmo tentar tirar a carne, pois você está mais calmo.",
            correta: false,
            feedback: "Incorreto. A regra de ouro é: só retire objetos da boca de uma vítima de engasgo se você conseguir vê-los claramente e alcançá-los com o dedo em forma de gancho. Ferramentas não devem ser usadas."
          },
          {
            id: "D",
            texto: "Começar a brigar com o gerente, empurrando-o para longe do restaurante.",
            correta: false,
            feedback: "Incorreto. Entrar em conflito físico tira você de perto da vítima, que precisa de fluxo sanguíneo contínuo para manter o cérebro vivo."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Desfecho: Após mais de um minuto de fortes compressões torácicas, você percebe que o pedaço de carne foi ejetado pela pressão e está solto dentro da boca da mulher. Você usa o dedo mindinho para removê-lo. Ela dá um longo suspiro e volta a respirar com dificuldade. O SAMU chega. O que você faz?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Coloca a mulher de lado (Posição Lateral), repassa ao SAMU que ela sofreu engasgo total, perdeu a consciência e precisou de manobras e RCP até a desobstrução.",
            correta: true,
            feedback: "Desfecho Perfeito! Vítimas que desmaiaram por engasgo podem ter lesões na garganta ou sofrido danos pela falta temporária de oxigênio. Colocá-la de lado protege a via aérea e a transferência de informações à equipe médica garante que ela receba o suporte avançado adequado."
          },
          {
            id: "B",
            texto: "Pede para a equipe do SAMU ir embora, pois você já resolveu o problema e economizou o tempo deles.",
            correta: false,
            feedback: "Incorreto. Toda vítima de asfixia que chegou a níveis de inconsciência precisa de avaliação hospitalar obrigatória (risco de edema posterior ou trauma de via aérea)."
          },
          {
            id: "C",
            texto: "Puxa a mulher pelo braço para levantá-la rápido e oferecê-la um prato de comida para ela se acalmar.",
            correta: false,
            feedback: "Incorreto. Movimentos bruscos pós-retorno à consciência geram novos desmaios, e a garganta traumatizada não deve receber alimentos imediatamente."
          },
          {
            id: "D",
            texto: "Continua fazendo a massagem cardíaca até o médico mandar você parar.",
            correta: false,
            feedback: "Incorreto. Se ela suspirou, se moveu e respira, o coração está batendo. RCP não é feita em pessoas com batimentos cardíacos espontâneos presentes."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_22",
    titulo: "Acidente Doméstico com Faca",
    tag_visual_cenario: "cenario_cozinha",
    descricao_inicial: "Você está ajudando a preparar o almoço quando um amigo deixa uma faca grande escorregar e faz um corte profundo no próprio antebraço. O sangue jorra em grande quantidade, em esguichos que acompanham as batidas do coração (sangramento arterial).",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A cena é segura e não há risco de queda de outros objetos. Qual é a medida imediata e prioritária para tentar controlar essa hemorragia massiva (Letra X do protocolo)?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Aplicar pó de café, açúcar ou teia de aranha em cima da ferida para coagular o sangue mais rápido.",
            correta: false,
            feedback: "Incorreto. Nunca coloque pó de café, açúcar ou outras substâncias na ferida. Isso não para hemorragias arteriais e causará uma infecção gravíssima que dificultará o trabalho médico."
          },
          {
            id: "B",
            texto: "Pedir para alguém ligar para o 192/193, pegar um pano limpo ou toalha, colocar sobre a ferida e aplicar pressão direta com o peso do seu corpo.",
            correta: true,
            feedback: "Correto! Hemorragias massivas matam em poucos minutos. A pressão direta contínua e firme sobre a ferida é a técnica inicial mais eficaz e rápida para o leigo conter o fluxo de sangue."
          },
          {
            id: "C",
            texto: "Fazer um torniquete no braço usando um cadarço de sapato ou arame fino para fechar a circulação.",
            correta: false,
            feedback: "Incorreto. Torniquetes improvisados com cadarços e fios finos cortam a pele, causam lesões nos nervos e não bloqueiam a artéria adequadamente. A pressão direta manual deve ser a primeira ação."
          },
          {
            id: "D",
            texto: "Levar o braço dele para a pia e lavar a ferida com bastante água e sabão por 10 minutos para não infeccionar.",
            correta: false,
            feedback: "Incorreto. Em casos de hemorragia severa, o risco de morte por perda de sangue é imediato, enquanto a infecção é um risco tardio. Lavar a ferida fará a vítima sangrar até a morte."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você aplicou pressão forte, mas após uns dois minutos o pano que você colocou ficou completamente encharcado de sangue e começou a vazar. O que você faz agora?",
        tag_visual_detalhe: "acao_curativo_adicional",
        opcoes: [
          {
            id: "A",
            texto: "Tira o pano ensanguentado, joga no lixo e coloca um pano novo e bem seco no lugar para absorver melhor.",
            correta: false,
            feedback: "Erro crítico. Se você remover o primeiro pano, irá arrancar a 'rede' de coágulos que o corpo começou a formar na ferida, e o sangramento arterial voltará com força total."
          },
          {
            id: "B",
            texto: "Sem remover o pano encharcado de jeito nenhum, coloca mais um pano limpo por cima do primeiro e faz ainda mais pressão.",
            correta: true,
            feedback: "Correto! O protocolo manda adicionar camadas adicionais de curativo sobre o inicial. Isso preserva o coágulo que está se formando diretamente na ferida e aumenta o volume para a compressão."
          },
          {
            id: "C",
            texto: "Larga o pano, deixa o braço dele solto para baixo e vai buscar a caixa de primeiros socorros no banheiro.",
            correta: false,
            feedback: "Incorreto. Interromper a pressão direta, mesmo que por alguns segundos, permitirá que a pressão arterial expulse o sangue novamente. A pressão deve ser ininterrupta."
          },
          {
            id: "D",
            texto: "Coloca pedras de gelo diretamente em cima do pano encharcado para congelar a artéria.",
            correta: false,
            feedback: "Incorreto. O gelo não tem poder de parar uma hemorragia arterial severa e pode causar queimaduras por frio na pele. A força física da compressão é o que fecha o vaso rompido."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! Você conseguiu diminuir bem o sangramento com a pressão contínua. Porém, seu amigo começa a ficar extremamente pálido, com os lábios brancos, suando frio, e diz que está tonto e com muita sede. O que isso indica e como agir?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Ele está desidratado. Devo dar um copo grande de água ou suco para ele beber imediatamente.",
            correta: false,
            feedback: "Incorreto. Vítimas de trauma e hemorragia NUNCA devem receber líquidos via oral (boca). Ele provavelmente precisará de cirurgia de emergência e o estômago deve estar vazio para evitar broncoaspiração."
          },
          {
            id: "B",
            texto: "São sinais de choque hipovolêmico (falta de sangue no corpo). Devo ampará-lo para deitar no chão, cobri-lo com um cobertor para mantê-lo aquecido e continuar a pressão no braço.",
            correta: true,
            feedback: "Correto! Palidez, suor frio e tontura indicam que o cérebro e os órgãos estão recebendo pouco sangue (Choque Hipovolêmico). Deitá-lo evita quedas, e aquecê-lo previne a hipotermia, que piora a coagulação do sangue (Tríade Letal do Trauma)."
          },
          {
            id: "C",
            texto: "São sinais de que ele vai ter uma parada cardíaca. Devo soltar o braço e começar a fazer massagem cardíaca com ele sentado.",
            correta: false,
            feedback: "Incorreto. Ele está conversando e reclamando de sede, logo o coração está batendo. Fazer RCP em alguém consciente é um erro grave."
          },
          {
            id: "D",
            texto: "É apenas frescura por ver sangue. Devo dar uns tapas no rosto dele para ele 'acordar' e mandar ele ficar de pé.",
            correta: false,
            feedback: "Incorreto. A perda de muito sangue causa uma falência real do sistema circulatório. Forçá-lo a ficar de pé fará a gravidade puxar o resto do sangue para as pernas, causando um desmaio imediato."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: Com ele deitado e aquecido, você mantém a pressão no curativo volumoso. O sangramento está sob controle (apenas sujando o pano, sem pingar). O resgate do SAMU chega à cozinha. Como deve ser a transição do atendimento?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Soltar a pressão do braço imediatamente, jogar os panos no lixo para deixar a cena limpa e ir lavar as mãos.",
            correta: false,
            feedback: "Incorreto. Soltar a pressão antes da equipe assumir a ferida pode fazer o sangramento recomeçar subitamente. Além disso, os panos sujos ajudam o médico a estimar a quantidade de sangue perdido."
          },
          {
            id: "B",
            texto: "Tirar todos os curativos que você fez para mostrar ao médico exatamente o tamanho e a profundidade do corte da faca.",
            correta: false,
            feedback: "Incorreto. Remover os curativos destruirá os coágulos formados. A equipe de resgate tem tesouras e materiais adequados para avaliar a ferida no momento seguro, geralmente já dentro da ambulância."
          },
          {
            id: "C",
            texto: "Manter as mãos firmes no curativo até que o socorrista posicione a mão dele ou aplique um curativo compressivo profissional, relatando os sinais de choque (suor frio, palidez) que a vítima apresentou.",
            correta: true,
            feedback: "Desfecho Perfeito! A transição segura de um paciente com hemorragia exige que a pressão não seja aliviada até a troca física de mãos. Relatar os sintomas de choque hipovolêmico é vital para que a equipe inicie a reposição de fluidos (soro na veia) rapidamente."
          },
          {
            id: "D",
            texto: "Pedir para o médico lhe dar linha e agulha para que você mesmo dê os pontos, já que você controlou a situação até agora.",
            correta: false,
            feedback: "Incorreto. Suturas são procedimentos médicos invasivos que exigem anestesia, antissepsia profunda e avaliação de nervos e tendões cortados. O papel do leigo terminou com sucesso na hemostasia inicial."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_23",
    titulo: "Convulsão na Sala de Aula (Manejo e Fase Pós-Ictal)",
    tag_visual_cenario: "cenario_publico_fechado", 
    descricao_inicial: "Durante uma aula, um aluno de repente dá um grito abafado, cai da cadeira, perde a consciência e começa a se debater intensamente no chão (crise tônico-clônica). Ele apresenta contrações musculares fortes por todo o corpo, os olhos estão virados para cima e ele começa a espumar pela boca.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A cena gera pânico imediato na turma. Qual deve ser a sua PRIMEIRA ação física e de controle ao ver o aluno se debatendo no chão?",
        tag_visual_detalhe: "estado_espasmo_muscular", 
        opcoes: [
          {
            id: "A",
            texto: "Tentar imobilizar firmemente os braços e pernas dele com a ajuda de outros alunos para que ele pare de se debater e não se machuque.",
            correta: false,
            feedback: "Incorreto. Segurar a vítima durante as contrações não para a crise e a força do espasmo muscular contra a contenção pode causar fraturas ósseas ou luxações articulares graves."
          },
          {
            id: "B",
            texto: "Afastar as carteiras e cadeiras de perto dele, pedir para alguém marcar o tempo no relógio e colocar algo macio (uma blusa dobrada) debaixo da cabeça dele.",
            correta: true,
            feedback: "Correto! O objetivo prioritário durante a crise é evitar traumas secundários. Proteger a cabeça, afastar objetos perigosos e cronometrar o tempo da convulsão são as ações salvadoras essenciais."
          },
          {
            id: "C",
            texto: "Jogar água fria no rosto dele e sacudi-lo pelos ombros para tentar acordá-lo e interromper a convulsão.",
            correta: false,
            feedback: "Incorreto. Nenhum estímulo externo (água, álcool, tapas) é capaz de interromper um curto-circuito neurológico. Jogar água cria um alto risco de afogamento/broncoaspiração."
          },
          {
            id: "D",
            texto: "Correr para pegar o kit de primeiros socorros e preparar uma bandagem para amarrar a cabeça dele a uma cadeira.",
            correta: false,
            feedback: "Incorreto. A vítima deve permanecer no chão para evitar quedas piores, e a cabeça não deve ser amarrada, apenas amparada para não bater contra o piso duro."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! A crise já dura cerca de 1 minuto. O aluno está com os lábios levemente arroxeados e a respiração parece travada. Um outro professor entra correndo com uma caneta e grita: 'Abre a boca dele e puxa a língua para ele não engolir!'. Como você reage?",
        tag_visual_detalhe: "risco_pratica_incorreta", 
        opcoes: [
          {
            id: "A",
            texto: "Pego a caneta, forço a abertura dos dentes travados dele e tento segurar a língua.",
            correta: false,
            feedback: "Erro crítico. Tentar abrir a boca à força durante o espasmo maxilar vai quebrar os dentes da vítima e pode decepar seus dedos. É um mito: é anatomicamente impossível 'engolir' a própria língua."
          },
          {
            id: "B",
            texto: "Bloqueio a ação do professor, afirmando: 'Não coloque nada na boca dele! A língua não enrola. Ele está arroxeado pelo espasmo do diafragma, a crise já vai passar. Acione o SAMU (192) agora!'.",
            correta: true,
            feedback: "Perfeito! Você protegeu a vítima de uma intervenção leiga perigosa. A cianose (arroxeamento) temporária ocorre porque os músculos da respiração também estão em espasmo. O foco é manter a segurança e garantir o chamado médico."
          },
          {
            id: "C",
            texto: "Deixo o professor tentar, pois ele é mais velho e a falta de ar está deixando a vítima azul.",
            correta: false,
            feedback: "Incorreto. Omissão. Como primeiro respondedor que conhece o protocolo, você deve impedir ações que causem danos. Inserir objetos causará lacerações e risco de engasgo com dentes quebrados."
          },
          {
            id: "D",
            texto: "Inicio respiração boca a boca imediata enquanto ele convulsiona, para oxigená-lo.",
            correta: false,
            feedback: "Incorreto. É impossível e ineficaz ventilar alguém com a musculatura torácica contraída e a boca travada por espasmos tônico-clônicos."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Após cerca de 2 minutos e meio, as contrações param. O aluno fica completamente mole, parece dormir profundamente e sua respiração é pesada e ruidosa (ronco). Há muita saliva e espuma em sua boca. O que fazer agora?",
        tag_visual_detalhe: "estado_caida_inconsciente", 
        opcoes: [
          {
            id: "A",
            texto: "Deixar o paciente deitado de barriga para cima, afrouxar a roupa e colocar um travesseiro alto embaixo da nuca para ele respirar melhor.",
            correta: false,
            feedback: "Incorreto. Deitar de barriga para cima com a cabeça elevada dobra o pescoço e fecha a via aérea. Além disso, a saliva acumulada descerá direto para os pulmões."
          },
          {
            id: "B",
            texto: "Dar água com açúcar imediatamente para repor a glicose do cérebro, já que ele gastou muita energia.",
            correta: false,
            feedback: "Incorreto. Regra de ouro: nunca dê nada pela boca para uma pessoa inconsciente ou confusa. Os reflexos de deglutição estão alterados e ele sofrerá um engasgo grave."
          },
          {
            id: "C",
            texto: "Virar o paciente de lado (Posição Lateral de Segurança - PLS), mantendo a via aérea aberta para que a saliva escorra para fora, e monitorar sua respiração.",
            correta: true,
            feedback: "Correto! A Posição Lateral de Segurança (PLS) usa a gravidade para impedir que a língua relaxada bloqueie a garganta e permite que fluidos (saliva/vômito) drenem, evitando a broncoaspiração na fase de recuperação (pós-ictal)."
          },
          {
            id: "D",
            texto: "Bater levemente no rosto e gritar o nome dele repetidas vezes até que ele acorde totalmente, para garantir que não entrou em coma.",
            correta: false,
            feedback: "Incorreto. O período 'pós-ictal' é um estado de exaustão neurológica profunda. O cérebro precisa de tempo para 'reiniciar'. Forçar o despertar gera extrema confusão, agitação e até agressividade por parte da vítima."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: O aluno acorda cerca de 10 minutos depois, ainda no chão. Ele está muito confuso, não sabe onde está e reclama de dor muscular forte. A equipe do SAMU chega à escola neste momento. Qual é a sua conduta final?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Dispenso o SAMU, ajudo o aluno a se levantar rapidamente e o levo para a diretoria, pois a crise já acabou e ele está bem.",
            correta: false,
            feedback: "Incorreto. Mesmo que a crise tenha passado, ele precisa de avaliação médica. O estado de confusão requer repouso, e levantá-lo bruscamente pode causar tonturas ou uma nova crise por esforço."
          },
          {
            id: "B",
            texto: "Mantenho o aluno calmo e deitado. Ao passar o caso para o SAMU, informo: o tempo exato de duração da crise (2,5 minutos), os sintomas (espuma, espasmos completos) e que ele esteve em Posição Lateral desde que parou de se debater.",
            correta: true,
            feedback: "Desfecho Perfeito! Acompanhar a vítima até o fim e repassar informações objetivas (especialmente o tempo de duração da crise, crucial para a equipe médica descartar o letal 'Estado de Mal Epiléptico') garante a excelência da corrente de sobrevivência."
          },
          {
            id: "C",
            texto: "Peço aos paramédicos que apliquem a medicação anticonvulsivante de emergência imediatamente, pois ele ainda está confuso.",
            correta: false,
            feedback: "Incorreto. Decisões farmacológicas cabem exclusivamente à equipe médica após avaliarem os sinais vitais, a glicemia e a resposta neurológica do paciente."
          },
          {
            id: "D",
            texto: "Saio de perto para não atrapalhar e deixo a equipe do SAMU descobrir o que aconteceu perguntando ao próprio aluno.",
            correta: false,
            feedback: "Incorreto. O aluno sofre de amnésia retrógrada típica do período pós-ictal; ele não lembra o que aconteceu. O relato do socorrista leigo que presenciou a cena é a única fonte de dados confiável para os médicos."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_24",
    titulo: "A Pressa e a Água Fervente (Queimadura Térmica e Edema)",
    tag_visual_cenario: "cenario_cozinha",
    descricao_inicial: "Durante o preparo do almoço, seu familiar esbarra no fogão e derruba uma panela de água fervente. Boa parte da água atinge a perna direita dele, encharcando a calça de moletom que ele veste. Ele cai gritando de dor, e você percebe que o tecido está fumegando.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A calça de moletom está encharcada de água fervente, mantendo o calor em contato direto com a pele da vítima. Qual é a sua atitude imediata?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Deixar a calça para proteger a ferida e jogar bastante gelo por cima do tecido para esfriar mais rápido.",
            correta: false,
            feedback: "Incorreto. O gelo aplicado em uma queimadura causa vasoconstrição extrema e uma segunda lesão ('queimadura por frio' - geladura), agravando a destruição da pele."
          },
          {
            id: "B",
            texto: "Soprar a perna vigorosamente para esfriar o tecido e passar uma pomada contra queimaduras por cima da roupa.",
            correta: false,
            feedback: "Incorreto. Soprar é ineficaz e contamina a área. Pomadas selarão o calor dentro da pele, fazendo com que a queimadura continue se aprofundando."
          },
          {
            id: "C",
            texto: "Retirar rapidamente a calça encharcada com cuidado (ou cortá-la) para remover a fonte de calor, e colocar a perna imediatamente sob água corrente fria (temperatura ambiente).",
            correta: true,
            feedback: "Correto! Roupa com líquidos quentes continua queimando a pele a cada segundo. Retirar a vestimenta e resfriar com água corrente (por 10 a 15 min) interrompe o dano térmico nas camadas profundas e alivia a dor."
          },
          {
            id: "D",
            texto: "Puxar a calça de uma vez só com força, mesmo se a pele já estiver grudada, para que o ar frio bata na ferida.",
            correta: false,
            feedback: "Incorreto. Se algum tecido estiver grudado (mais comum em óleo ou plásticos, mas possível em tecidos sintéticos quentes), arrancar a roupa arrancará a pele junto. Se estiver grudado, deve-se cortar ao redor."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta! Enquanto a perna está sob a água, a dor diminui, mas a pele fica intensamente vermelha e grandes bolhas começam a surgir (Queimadura de 2º Grau). Você também nota que a vítima usa uma tornozeleira justa na perna queimada.",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Furar as bolhas com uma agulha para liberar a pressão do líquido quente e não mexer na tornozeleira para não causar mais dor.",
            correta: false,
            feedback: "Erro crítico. As bolhas são curativos naturais e perfeitamente estéreis do próprio corpo. Rompê-las abre uma imensa porta para bactérias e infecções letais."
          },
          {
            id: "B",
            texto: "Não estourar nenhuma bolha e retirar rapidamente a tornozeleira (e outros anéis/pulseiras) antes que a perna comece a inchar.",
            correta: true,
            feedback: "Correto! O tecido queimado incha rapidamente (edema). Se anéis, pulseiras ou tornozeleiras não forem retirados logo, agirão como um torniquete, cortando a circulação do membro e podendo causar amputação."
          },
          {
            id: "C",
            texto: "Passar clara de ovo ou manteiga nas bolhas para hidratar a pele esticada, e tirar a tornozeleira.",
            correta: false,
            feedback: "Incorreto. Remédios caseiros irritam o tecido queimado, retêm o calor, alimentam bactérias (risco de salmonela com o ovo) e obrigarão o médico a esfregar a ferida para limpá-la."
          },
          {
            id: "D",
            texto: "Furar apenas as bolhas maiores que estão atrapalhando a retirada da tornozeleira.",
            correta: false,
            feedback: "Incorreto. Nenhuma bolha deve ser rompida de propósito em ambiente pré-hospitalar. A tornozeleira deve ser removida cortando-a se necessário, mas sem violar a pele."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "O resfriamento de 15 minutos foi concluído e a tornozeleira removida. Você precisa proteger a ferida extensa e úmida da exposição ao ar (o ar bate nas terminações nervosas expostas, causando dor intensa). Como fazer o curativo?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Enrolar a perna com ataduras bem apertadas (compressivas) para impedir que as bolhas cresçam durante o transporte ao hospital.",
            correta: false,
            feedback: "Incorreto. Curativos apertados em queimaduras vão esmagar as bolhas e bloquear a circulação sanguínea assim que o edema (inchaço) natural aumentar."
          },
          {
            id: "B",
            texto: "Colocar placas de algodão diretamente sobre a pele queimada para ficar macio e prender com esparadrapo.",
            correta: false,
            feedback: "Incorreto. Fiapos de algodão grudam fortemente nos tecidos úmidos da queimadura, tornando a remoção hospitalar extremamente traumática e dolorosa."
          },
          {
            id: "C",
            texto: "Cobrir a lesão de forma frouxa e suave com plástico filme limpo (PVC), ou com panos limpos/compressas estéreis umedecidas com soro fisiológico.",
            correta: true,
            feedback: "Correto! O plástico filme é excelente pois não gruda na ferida, isola as terminações nervosas do contato com o ar (reduzindo muito a dor) e protege contra bactérias. Panos limpos úmidos e frouxos também são indicados."
          },
          {
            id: "D",
            texto: "Lavar com sabão em pó, passar álcool e deixar a ferida totalmente exposta para secar.",
            correta: false,
            feedback: "Incorreto. Álcool causa dor excruciante e piora a queimadura. Sabão em pó é tóxico e corrosivo. Deixar exposto aumenta a dor e o risco de contaminação."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: A queimadura é grande (atinge toda a panturrilha). O curativo frouxo com plástico filme foi colocado. Porém, a vítima começa a tremer violentamente, reclamando de muito frio devido à grande perda de calor pela pele lesionada e ao banho prolongado de água fria. O SAMU avisa que as viaturas estão presas num grande engarrafamento na cidade. O que fazer?",
        tag_visual_detalhe: "vitima_queimadura_transporte",
        opcoes: [
          {
            id: "A",
            texto: "Aquecer o resto do corpo da vítima com cobertores (sem abafar a perna queimada), confortá-la e realizar o transporte imediato para o hospital em carro particular.",
            correta: true,
            feedback: "Desfecho Perfeito! A pele regula a temperatura; grandes queimaduras perdem calor rápido, levando à hipotermia letal (Tríade do Trauma). Aquecer as áreas ilesas é vital. Como a lesão é grave (2º grau, extensão considerável) e o SAMU atrasou, o transporte particular cauteloso (vítima estável, via aérea livre) é justificado e necessário."
          },
          {
            id: "B",
            texto: "Colocar bolsas de água quente diretamente em cima do curativo da perna para aquecer a vítima mais rápido.",
            correta: false,
            feedback: "Incorreto. Colocar fontes de calor sobre a área já queimada agravará a lesão e reativará a queima tecidual profunda."
          },
          {
            id: "C",
            texto: "Oferecer uma dose de bebida alcoólica (conhaque ou uísque) para esquentar o corpo por dentro e anestesiar a dor.",
            correta: false,
            feedback: "Incorreto. Álcool causa vasodilatação (perde-se mais calor) e altera o nível de consciência. Vítimas que precisarão de intervenção hospitalar/medicamentosa não devem ingerir nada (jejum)."
          },
          {
            id: "D",
            texto: "Desistir de ir ao hospital, dar um remédio para dor que você tem em casa e colocar o paciente para dormir até o dia seguinte.",
            correta: false,
            feedback: "Erro grave. Queimaduras de 2º grau que atingem grandes partes de membros têm altíssimo risco de choque circulatório (perda de líquidos para o inchaço) e infecção sistêmica. O atendimento médico nas primeiras horas é obrigatório."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_25",
    titulo: "Suspeita de AVC em Casa",
    tag_visual_cenario: "cenario_interno_comum", 
    descricao_inicial: "Você está assistindo TV com seu avô na sala quando ele, de repente, deixa cair o copo de água que segurava. Você pergunta se está tudo bem, mas ele parece confuso, não consegue te responder direito e você nota que um lado do rosto dele está nitidamente caído (assimétrico).",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você suspeita de um Acidente Vascular Cerebral (AVC/Derrame). Qual teste pré-hospitalar rápido e validado você deve aplicar para confirmar essa suspeita?",
        tag_visual_detalhe: "estado_avc_assimetria", 
        opcoes: [
          {
            id: "A",
            texto: "Furar a ponta dos dedos dele com uma agulha limpa para ver se o sangue sai escuro, indicando falta de oxigênio no cérebro.",
            correta: false,
            feedback: "Erro crítico. Furar os dedos é um mito popular da internet. Isso não tem base científica, não reduz a pressão no cérebro, causa dor desnecessária e atrasa o socorro médico vital."
          },
          {
            id: "B",
            texto: "Oferecer um copo de água ou um pedaço de pão para testar o reflexo de engolir (deglutição).",
            correta: false,
            feedback: "Incorreto. Nunca ofereça líquidos ou alimentos a alguém com suspeita de AVC. O paciente frequentemente perde o controle dos músculos da garganta (disfagia) e pode broncoaspirar, causando asfixia e pneumonia."
          },
          {
            id: "C",
            texto: "Aplicar a escala SAMU: pedir para ele Sorrir (rosto torto?), Abraçar/levantar os braços (um braço cai?) e dizer uma Mensagem/frase simples (fala arrastada?).",
            correta: true,
            feedback: "Correto! A escala SAMU (Sorria, Abrace, Mensagem, Urgência) ou a escala de Cincinnati são testes rápidos universais. Se houver falha em pelo menos UM desses três comandos, a chance de AVC é superior a 70%."
          },
          {
            id: "D",
            texto: "Pedir para ele deitar no chão de barriga para cima e elevar as pernas dele por 10 minutos para o sangue voltar à cabeça.",
            correta: false,
            feedback: "Incorreto. Essa é a manobra para desmaio comum (síncope por queda de pressão). No AVC, o problema é um coágulo ou sangramento no cérebro, e elevar as pernas não resolve o quadro."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Ele tenta sorrir, mas o lado esquerdo do rosto não se move. Ele não consegue manter o braço esquerdo levantado e a fala sai completamente incompreensível. Você decide ligar para o 192 (SAMU). Qual informação extra é a mais importante a ser repassada e controlada por você?",
        tag_visual_detalhe: "acao_ligando_emergencia", 
        opcoes: [
          {
            id: "A",
            texto: "Aferir a pressão arterial dele no aparelho de farmácia e informar se está alta ou baixa.",
            correta: false,
            feedback: "Incorreto. Embora a pressão seja um dado útil, ela não muda a conduta inicial. Além disso, leigos perdem tempo tentando aferir a pressão em vez de focar na prioridade do AVC."
          },
          {
            id: "B",
            texto: "O horário exato em que ele foi visto normal pela última vez (quando os sintomas começaram).",
            correta: true,
            feedback: "Perfeito! No AVC, 'Tempo é Cérebro'. O hospital tem uma janela terapêutica curta (geralmente até 4,5 horas) para aplicar o trombolítico (remédio que desfaz o coágulo). Saber o horário exato salva o cérebro do paciente."
          },
          {
            id: "C",
            texto: "Informar o que ele comeu no café da manhã para a equipe saber se foi intoxicação.",
            correta: false,
            feedback: "Incorreto. A dieta recente raramente tem relação imediata com o surgimento súbito de um déficit neurológico focal (AVC)."
          },
          {
            id: "D",
            texto: "Perguntar ao atendente qual remédio para pressão você pode dar a ele agora.",
            correta: false,
            feedback: "Incorreto. Em um AVC, a pressão arterial frequentemente sobe como um mecanismo de defesa do corpo para forçar o sangue a chegar na área do cérebro afetada. Baixar a pressão abruptamente em casa pode piorar muito a lesão."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você ligou para o SAMU e a ambulância está a caminho. De repente, seu avô começa a ficar sonolento (rebaixamento de consciência) e parece enjoado, fazendo menção de que vai vomitar. O que fazer enquanto o resgate não chega?",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Sentá-lo em uma poltrona macia e segurar um balde perto do rosto dele.",
            correta: false,
            feedback: "Incorreto. Se ele está sonolento, ficar sentado o expõe a um alto risco de queda. Além disso, se ele desmaiar, a cabeça vai pender para frente, fechando a passagem de ar."
          },
          {
            id: "B",
            texto: "Deitá-lo de barriga para cima no chão e dar um remédio para enjoo triturado.",
            correta: false,
            feedback: "Erro grave. Deitar de barriga para cima uma pessoa com náusea e perda de consciência é risco extremo de broncoaspiração (o vômito vai para os pulmões). Nunca dê medicamentos por via oral."
          },
          {
            id: "C",
            texto: "Colocá-lo cuidadosamente no chão em Posição Lateral de Segurança (de lado), com o lado paralisado para cima, e amparar a cabeça.",
            correta: true,
            feedback: "Correto! A Posição Lateral de Segurança (PLS) garante que, caso ele vomite ou produza muita saliva, o líquido escorra para fora da boca e não para os pulmões, protegendo a via aérea enquanto a consciência diminui."
          },
          {
            id: "D",
            texto: "Fazer massagem cardíaca (RCP) imediatamente, pois ele está piorando.",
            correta: false,
            feedback: "Incorreto. Só se inicia a massagem cardíaca se a vítima não responder E não estiver respirando (Parada Cardiorrespiratória). Ele está sonolento e com enjoo, logo, respira e tem pulso."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: A Unidade de Suporte Avançado do SAMU chega. O médico o avalia rapidamente no chão da sala. Como deve ser a sua passagem de plantão (handoff) para a equipe?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Deixar a equipe trabalhar em silêncio, pois os médicos já sabem o que fazer apenas olhando para o paciente.",
            correta: false,
            feedback: "Incorreto. O médico não adivinha há quanto tempo os sintomas começaram nem as doenças prévias do paciente. A comunicação do familiar é essencial."
          },
          {
            id: "B",
            texto: "Avisar em voz alta e clara: 'Ele estava normal e começou a falar enrolado e perder a força às 14h15 (horário exato). Ele toma remédio para pressão e não dei nada para ele comer ou beber'.",
            correta: true,
            feedback: "Desfecho Perfeito! Você forneceu as informações cruciais para a 'Via Rápida do AVC': o último horário em que foi visto normal, o estado inicial, os antecedentes médicos básicos e confirmou o jejum, facilitando o transporte imediato para a tomografia."
          },
          {
            id: "C",
            texto: "Pedir que eles apliquem a injeção para dissolver o coágulo ali mesmo na sala para não perder tempo.",
            correta: false,
            feedback: "Incorreto. O trombolítico só pode ser administrado dentro do hospital APÓS uma Tomografia Computadorizada de Crânio, pois é impossível saber clinicamente se o AVC é Isquêmico (coágulo) ou Hemorrágico (veia rompida). Dar remédio para coágulo em um AVC hemorrágico é fatal."
          },
          {
            id: "D",
            texto: "Exigir ir junto na ambulância para continuar testando os braços dele no caminho.",
            correta: false,
            feedback: "Incorreto. Embora acompanhantes sejam importantes, o espaço da ambulância é restrito e as avaliações no trajeto competem à equipe médica/de enfermagem."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_26",
    titulo: "O Calor e a Fila do Banco (Síncope Vasovagal)",
    tag_visual_cenario: "cenario_publico_fechado", 
    descricao_inicial: "O dia está extremamente quente e o banco, lotado. Uma mulher idosa, que está de pé na fila há mais de 40 minutos, começa a suar frio, relata visão escurecendo, fica intensamente pálida e perde a força muscular. Antes que alguém possa segurá-la, ela 'apaga' e cai no chão.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Houve um alvoroço e todos olham para a mulher caída. Antes de tentar acordá-la com qualquer técnica, qual deve ser a sua avaliação imediata e prioritária ao se ajoelhar ao lado dela?",
        tag_visual_detalhe: "estado_caida_inconsciente", 
        opcoes: [
          {
            id: "A",
            texto: "Procurar imediatamente os documentos dela na bolsa para descobrir se ela tem diabetes ou hipertensão.",
            correta: false,
            feedback: "Incorreto. O histórico médico é importante depois, mas a prioridade primária é descobrir se há risco iminente de morte."
          },
          {
            id: "B",
            texto: "Bater palmas perto do ouvido dela e jogar água no rosto para ver se há reação aos sustos.",
            correta: false,
            feedback: "Incorreto. Jogar água não avalia clinicamente a vítima e pode causar engasgo se a água entrar nas vias aéreas dela enquanto está inconsciente."
          },
          {
            id: "C",
            texto: "Checar a responsividade (chamando-a com firmeza pelos ombros) e observar o tórax por até 10 segundos para confirmar se ela está respirando normalmente.",
            correta: true,
            feedback: "Correto! A regra de ouro ao encontrar alguém caído é descartar uma Parada Cardiorrespiratória. Se ela não responder e não respirar, é RCP. Se não responde, mas respira normalmente, confirmamos o quadro de desmaio (síncope) ou coma."
          },
          {
            id: "D",
            texto: "Medir a pulsação no punho por um minuto inteiro para garantir que o coração não está acelerado.",
            correta: false,
            feedback: "Incorreto. Aferir o pulso periférico em vítimas inconscientes é difícil, especialmente em quadros de pressão baixa como o desmaio. A checagem da respiração é o indicador mais rápido e confiável para o leigo."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você a chama com firmeza, mas ela não responde. Contudo, você nota claramente que o peito dela sobe e desce ritmadamente. Confirmado o desmaio simples, qual a manobra física ideal para reverter a falta de sangue no cérebro?",
        tag_visual_detalhe: "acao_elevacao_pernas", 
        opcoes: [
          {
            id: "A",
            texto: "Passar um algodão com álcool ou amônia no nariz dela para o cheiro forte 'acordar' o cérebro.",
            correta: false,
            feedback: "Incorreto. Cheirar álcool é um mito clássico. Substâncias fortes irritam a mucosa nasal, podem causar espasmos respiratórios e não tratam a causa real (que é a queda de pressão e fluxo sanguíneo)."
          },
          {
            id: "B",
            texto: "Mantê-la deitada de costas (decúbito dorsal), afrouxar roupas apertadas e elevar as pernas dela cerca de 30 a 40 cm acima do nível do coração.",
            correta: true,
            feedback: " Correto! A gravidade puxou o sangue para as pernas. Elevar os membros inferiores facilita o retorno venoso, forçando o sangue a voltar para o coração e o cérebro, revertendo a síncope rapidamente."
          },
          {
            id: "C",
            texto: "Levantá-la imediatamente e colocá-la sentada com a cabeça enfiada no meio das pernas.",
            correta: false,
            feedback: "Incorreto. Sentar com a cabeça entre as pernas é uma manobra de *prevenção* (quando a pessoa avisa que vai desmaiar). Se ela já apagou, forçá-la a sentar dificulta o bombeamento de sangue para cima e gera risco de queda."
          },
          {
            id: "D",
            texto: "Colocar um sachê de açúcar debaixo da língua dela, pois todo desmaio no calor é hipoglicemia.",
            correta: false,
            feedback: "Erro grave. Inserir alimentos sólidos, líquidos ou açúcar na boca de uma pessoa inconsciente cria um risco altíssimo de broncoaspiração (asfixia). Além disso, a causa mais comum neste cenário é a queda de pressão pelo calor, não falta de açúcar."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Após cerca de 1 a 2 minutos com as pernas elevadas, a mulher suspira, abre os olhos e começa a se recuperar. Ela parece confusa e fraca. As pessoas em volta começam a puxá-la pelos braços dizendo: 'Levanta logo a dona, dá uma água pra ela beber!'. Qual a sua conduta agora?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Ceder à pressão da multidão, ajudá-la a ficar de pé rapidamente e dar um copo d'água grande para ela virar de uma vez.",
            correta: false,
            feedback: "Incorreto. Colocá-la em pé abruptamente logo após o cérebro 'religar' fará o sangue descer novamente devido à gravidade, causando um segundo desmaio quase imediato, com grande risco de bater a cabeça."
          },
          {
            id: "B",
            texto: "Impedir que a levantem, mantê-la deitada por mais alguns minutos até ela relatar estar se sentindo normal. Depois, sentá-la devagar e só então oferecer água aos poucos.",
            correta: true,
            feedback: "Desfecho Perfeito! A recuperação de um desmaio deve ser gradativa (deitada -> sentada -> em pé), dando tempo para o sistema cardiovascular se reajustar à gravidade. Água só deve ser oferecida com a vítima totalmente lúcida e na posição sentada."
          },
          {
            id: "C",
            texto: "Avisar que ela teve uma parada cardíaca reversível e que todos devem se afastar porque você vai iniciar compressões torácicas por precaução.",
            correta: false,
            feedback: "Incorreto. Ela estava respirando o tempo todo e já acordou. Fazer massagem cardíaca em quem tem pulso e está consciente é desnecessário e muito perigoso."
          },
          {
            id: "D",
            texto: "Deixá-la sozinha no chão, pois seu trabalho acabou assim que ela abriu os olhos, e voltar para o seu lugar na fila.",
            correta: false,
            feedback: "Incorreto. É negligência abandonar a vítima. Você deve monitorá-la para garantir que a recuperação seja completa, pois as causas do desmaio podem exigir que o SAMU (192) seja acionado se houver queixas de dor no peito, dormência ou se o desmaio se repetir."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_27",
    titulo: "A Queda da Escada",
    tag_visual_cenario: "cenario_externo_servico", 
    descricao_inicial: "Você está no seu quintal quando escuta um estrondo vindo da casa vizinha, seguido de gritos. Você corre e encontra seu vizinho estendido no chão de cimento. Ele caiu de uma escada de cerca de 3 metros de altura enquanto limpava a calha. Ele está de costas, consciente, respirando rápido e tenta se levantar em desespero, gritando: 'Minhas pernas estão dormentes, não consigo mexer direito! Meu pescoço dói muito!'",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Diante do pânico da vítima e dos fortes indícios de Trauma Raquimedular (TRM - lesão na coluna), qual deve ser a sua PRIMEIRA ação ao se aproximar?",
        tag_visual_detalhe: "vitima_queda_chao", 
        opcoes: [
          {
            id: "A",
            texto: "Ajudar a sentá-lo encostado na parede para acalmá-lo e avaliar se há sangramentos graves nas costas.",
            correta: false,
            feedback: "Erro crítico. Sentar a vítima comprime a coluna pela força da gravidade. Se houver fraturas nas vértebras, esse movimento pode seccionar a medula espinhal, causando paralisia irreversível."
          },
          {
            id: "B",
            texto: "Ajoelhar-se atrás da cabeça dele, segurá-la firmemente com as duas mãos (estabilização manual), dar uma ordem firme para ele não se mexer e pedir que alguém ligue para o 193 (Bombeiros).",
            correta: true,
            feedback: "Perfeito! A regra de ouro é a restrição de movimento da coluna (alinhamento neutro). A estabilização manual firme e o comando verbal impedem que a vítima piore a própria lesão em momentos de pânico, garantindo a segurança até o resgate chegar."
          },
          {
            id: "C",
            texto: "Testar a sensibilidade puxando e dobrando as pernas e braços dele para ver se ele realmente perdeu os movimentos.",
            correta: false,
            feedback: "Incorreto. A avaliação de fraturas deve ser feita visualmente e por perguntas simples ('sente meu toque?'). Tracionar membros pode agravar fraturas associadas na bacia ou nas pernas."
          },
          {
            id: "D",
            texto: "Correr para dentro de casa, pegar uma tábua de madeira ou porta e amarrar o corpo dele nela imediatamente para imobilizar.",
            correta: false,
            feedback: "Incorreto. A manipulação do corpo para colocação em prancha rígida exige equipe treinada (múltiplos socorristas) e técnica sincronizada. Tentar fazer isso sozinho torcerá a coluna fatalmente."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você está segurando a cabeça dele firmemente no chão. A esposa dele chega correndo, desesperada, e traz um copo de água com açúcar para 'acalmar os nervos' e aliviar a dor. O que você diz a ela?",
        tag_visual_detalhe: "acao_estabilizacao_cervical", 
        opcoes: [
          {
            id: "A",
            texto: "'Pode dar a água com cuidado usando um canudinho, assim ele não precisa levantar a cabeça para beber.'",
            correta: false,
            feedback: "Incorreto. Beber água deitado gera engasgo imediato. O engasgo provoca tosse violenta, e a tosse faz a coluna vertebral tremer bruscamente, o que é péssimo para uma possível fratura."
          },
          {
            id: "B",
            texto: "'Jogue a água no rosto dele para mantê-lo bem acordado, mas não deixe ele beber.'",
            correta: false,
            feedback: "Incorreto. O choque térmico ou o susto da água no rosto pode fazer a vítima ter um sobressalto (espasmo muscular de susto), movimentando o pescoço e a coluna."
          },
          {
            id: "C",
            texto: "'Por favor, afaste esse copo! Não dê absolutamente nada para ele ingerir. Em casos de trauma grave, ele precisa ficar em jejum para o hospital.'",
            correta: true,
            feedback: "Correto! Vítimas de trauma grave não devem ingerir nada (NPO - Nada Por Via Oral). Elas podem precisar de cirurgia de emergência e anestesia geral. Ter o estômago cheio aumenta drasticamente o risco de vômito e asfixia no centro cirúrgico."
          },
          {
            id: "D",
            texto: "'Dilua um comprimido de analgésico forte nessa água e dê para ele, senão ele vai entrar em choque por causa da dor.'",
            correta: false,
            feedback: "Incorreto. Leigos nunca devem administrar medicamentos analgésicos no trauma. Além do risco de engasgo, a medicação pode mascarar a dor, dificultando a avaliação neurológica e ortopédica que o médico fará no hospital."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Complicação! A ambulância ainda não chegou. De repente, o vizinho empalidece e relata muita náusea. Ele começa a ter ânsia de vômito forte. Se ele vomitar deitado de costas, aspirará o líquido para o pulmão (asfixia fatal). O que você e a esposa dele devem fazer juntos?",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Virar apenas a cabeça dele para o lado rapidamente, permitindo que o vômito escorra pela boca, deixando o corpo no chão.",
            correta: false,
            feedback: "Erro letal. Se você girar apenas a cabeça de alguém com suspeita de lesão na coluna cervical, você torcerá o pescoço da vítima, podendo cortar a medula espinhal instantaneamente."
          },
          {
            id: "B",
            texto: "Sentá-lo rapidamente e inclinar o tronco dele para frente para ele vomitar entre as pernas.",
            correta: false,
            feedback: "Incorreto. Dobrar a coluna torácica e lombar de uma vez pode causar agravamento severo na lesão medular nas costas."
          },
          {
            id: "C",
            texto: "A via aérea tem prioridade (a asfixia mata antes). Fazer um 'Rolamento em Bloco' a 90 graus com ele: virar cabeça, ombros e quadril TODOS AO MESMO TEMPO para o lado, como se ele fosse um tronco de madeira rígido.",
            correta: true,
            feedback: "Correto! Esta é a exceção para mover uma vítima de trauma de coluna. A via aérea não pode ser obstruída por vômito. O 'Rolamento em Bloco' feito com sincronia (você coordena a cabeça e a esposa o corpo) salva a vida do paciente sem torcer o eixo da coluna."
          },
          {
            id: "D",
            texto: "Manter ele de barriga para cima e enfiar o dedo na boca dele para retirar o vômito ou usar um pano para secar.",
            correta: false,
            feedback: "Incorreto. Além de não conseguir tirar líquidos com o dedo, empurrará o material mais para dentro da garganta ou sofrerá uma mordida involuntária severa."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: A viatura do resgate (193) chega ao local com colar cervical e prancha rígida. Os bombeiros se aproximam com os equipamentos. Qual a atitude correta para a passagem do caso?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Solto a cabeça do vizinho imediatamente e dou um passo para trás para liberar o espaço para os profissionais trabalharem.",
            correta: false,
            feedback: "Incorreto. Nunca solte a estabilização manual da cabeça até que o socorrista se posicione, segure a cabeça da vítima e dê a ordem clara para você soltar ('Assumi a cabeça!'). O colar cervical sozinho não imobiliza totalmente."
          },
          {
            id: "B",
            texto: "Continuo segurando a cabeça firmemente até o socorrista assumir meu lugar. Ao repassar a ocorrência, destaco: altura da queda (3 metros), do que ele se queixa (formigamento e dor) e se ocorreu algum evento, como vômito.",
            correta: true,
            feedback: "Desfecho Perfeito! A transição segura da imobilização manual e o relato objetivo da Cinemática do Trauma (altura, superfície e como caiu) somados aos sintomas neurológicos (formigamento nas pernas) darão à equipe a exata gravidade do caso para o transporte rápido ao hospital certo."
          },
          {
            id: "C",
            texto: "Recomendo aos bombeiros que apliquem uma massagem rápida na coluna dele antes de pranchar, pois ele estava com cãibras e dormentes nas pernas.",
            correta: false,
            feedback: "Incorreto. Socorristas jamais massageiam áreas de fratura ou trauma contuso severo."
          },
          {
            id: "D",
            texto: "Ajudo a pegar a vítima pelos braços e pernas para acelerar a colocação dele na maca, poupando o trabalho dos bombeiros.",
            correta: false,
            feedback: "Incorreto. A transição para a prancha rígida tem técnicas próprias (como elevação a cavaleiro ou rolamento específico) lideradas pelos socorristas. Puxar por membros agravará a lesão."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_28",
    titulo: "A Bolada no Rosto",
    tag_visual_cenario: "quadra_esportes", 
    descricao_inicial: "Durante uma partida de futsal escolar, uma bola chutada com extrema força atinge o rosto de um adolescente em cheio. Ele cai de joelhos na quadra, segurando o rosto, e um sangramento nasal abundante (epistaxe) começa imediatamente, pingando rapidamente na quadra e sujando sua camisa.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "O garoto está assustado e o treinador manda ele 'jogar a cabeça para trás e olhar para o teto'. Qual é a sua intervenção imediata como socorrista?",
        tag_visual_detalhe: "estado_hemorragia_ativa", 
        opcoes: [
          {
            id: "A",
            texto: "Concordar com o treinador e pedir para o garoto engolir o sangue para não sujar mais a quadra.",
            correta: false,
            feedback: "Incorreto. O sangue irrita fortemente o estômago. Engolir o sangue causará náuseas e vômitos severos, o que aumenta a pressão na cabeça e piora o sangramento."
          },
          {
            id: "B",
            texto: "Corrigir a postura: pedir para ele inclinar a cabeça levemente para a frente, respirar pela boca e apertar firmemente a parte mole (cartilagem) do nariz.",
            correta: true,
            feedback: "Correto! Inclinar a cabeça para a frente permite que o sangue escorra para fora, evitando engasgos ou vômitos. A pressão contínua na parte mole do nariz (logo abaixo do osso) comprime os vasos sangrantes e permite a formação do coágulo."
          },
          {
            id: "C",
            texto: "Mandar ele assoar o nariz com muita força para tirar todos os coágulos e depois colocar um chumaço de algodão fundo na narina.",
            correta: false,
            feedback: "Incorreto. Assoar o nariz destrói qualquer coágulo que o corpo esteja tentando formar para tampar a ferida. Inserir algodão profundamente pode causar mais lesões na mucosa."
          },
          {
            id: "D",
            texto: "Colocar bastante gelo na nuca e na testa dele, sem apertar o nariz, pois o frio para o sangue instantaneamente.",
            correta: false,
            feedback: "Incorreto. O gelo pode até ajudar a causar vasoconstrição secundária, mas sem a pressão mecânica direta (apertar a cartilagem do nariz), o vaso rompido continuará sangrando livremente."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você posicionou o garoto corretamente com a cabeça para frente e pinçando o nariz. No entanto, a cada 1 minuto ele solta os dedos para 'ver se já parou'. O que você orienta?",
        tag_visual_detalhe: "acao_compressao_direta", 
        opcoes: [
          {
            id: "A",
            texto: "Avisar que ele deve manter a pressão de forma ininterrupta por pelo menos 10 a 15 minutos, pois soltar antes rompe o coágulo em formação.",
            correta: true,
            feedback: "Correto! A coagulação leva tempo. Soltar a pressão a toda hora para checar destrói o 'tampão' que as plaquetas estão formando, reiniciando o sangramento do zero."
          },
          {
            id: "B",
            texto: "Dizer que ele está certo e que deve soltar a cada minuto para o sangue pisado sair e não infeccionar.",
            correta: false,
            feedback: "Incorreto. Hemorragias precisam de pressão contínua. Não existe 'sangue pisado' para sair nesse contexto, apenas fluxo ativo que precisa ser contido."
          },
          {
            id: "C",
            texto: "Mudar a pressão para a parte dura (osso) do topo do nariz, pois é lá que os vasos principais passam.",
            correta: false,
            feedback: "Incorreto. Apertar o osso nasal não comprime os vasos sanguíneos. Os vasos que causam 90% dos sangramentos nasais ficam no plexo de Kiesselbach, localizado na cartilagem (parte mole e inferior do nariz)."
          },
          {
            id: "D",
            texto: "Pedir para ele deitar no chão de barriga para baixo e continuar apertando.",
            correta: false,
            feedback: "Incorreto. Deitar aumenta a pressão sanguínea nos vasos da cabeça, dificultando o estancamento da hemorragia. Ele deve permanecer sentado."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta! Antes de você assumir o controle, o adolescente engoliu muito sangue quando o treinador mandou ele jogar a cabeça para trás. Agora, ele fica muito pálido, diz que está tonto e vomita um grande coágulo de sangue escuro no chão da quadra. Como agir?",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Desesperar-se e iniciar massagem cardíaca, pois o vômito de sangue significa hemorragia interna grave.",
            correta: false,
            feedback: "Incorreto. O vômito ocorreu porque o estômago não tolera o sangue que foi engolido (irritação gástrica). Ele está consciente e respirando, então RCP é contraindicada."
          },
          {
            id: "B",
            texto: "Dar bastante água gelada para ele beber e lavar o estômago.",
            correta: false,
            feedback: "Incorreto. Dar líquidos para alguém com náuseas e tontura pode provocar mais vômitos e risco de asfixia (broncoaspiração)."
          },
          {
            id: "C",
            texto: "Acalmá-lo, explicar que o vômito é apenas o sangue que ele engoliu antes. Como ele está tonto, deitá-lo de lado (Posição Lateral de Segurança) e manter a pressão no nariz com compressa fria no rosto.",
            correta: true,
            feedback: "Correto! A Posição Lateral de Segurança protege a via aérea (evita engasgo com o vômito) ao mesmo tempo que a posição deitada melhora o fluxo de sangue para o cérebro, aliviando a tontura. Explicar a causa do vômito reduz o pânico."
          },
          {
            id: "D",
            texto: "Colocá-lo de pé imediatamente e fazê-lo andar para pegar um ar e passar a tontura.",
            correta: false,
            feedback: "Incorreto. Se ele está tonto, forçá-lo a ficar em pé causará uma síncope (desmaio) e uma possível lesão na cabeça ao cair na quadra dura."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: O sangramento parou após os 15 minutos e o mal-estar do vômito passou. No entanto, o nariz dele está visivelmente torto e muito inchado, indicando uma possível fratura pela força da bolada. Qual a orientação final antes de liberar a cena?",
        tag_visual_detalhe: "nariz_suspeita_fratura",
        opcoes: [
          {
            id: "A",
            texto: "Tentar endireitar o nariz torto com as próprias mãos no local, para que o osso não cole errado.",
            correta: false,
            feedback: "Incorreto. Apenas médicos, após exames de imagem, podem reduzir (endireitar) fraturas faciais. Manipular o nariz sem técnica causará dor excruciante, novas lesões e a volta da hemorragia severa."
          },
          {
            id: "B",
            texto: "Dizer que ele está pronto para voltar para o jogo, desde que prometa não cabecear a bola.",
            correta: false,
            feedback: "Incorreto. O coágulo é frágil e a suspeita de fratura exige repouso absoluto. O aumento da frequência cardíaca no esporte fará o nariz sangrar novamente."
          },
          {
            id: "C",
            texto: "Lavar a narina com soro fisiológico sob pressão para limpar as crostas de sangue que ficaram dentro.",
            correta: false,
            feedback: "Incorreto. Lavagens ou assobios nasais devem ser evitados nas primeiras horas, pois a pressão arranca o coágulo recém-formado e reinicia o fluxo."
          },
          {
            id: "D",
            texto: "Orientá-lo a não assoar o nariz nas próximas horas, aplicar gelo local indiretamente (enrolado em pano) para o inchaço e encaminhá-lo ao Pronto Socorro para avaliação médica da suspeita de fratura facial.",
            correta: true,
            feedback: "Desfecho Perfeito! A conduta pós-epistaxe com trauma foca na preservação do coágulo (não assoar, não cutucar, não fazer esforço). A deformidade e inchaço rápido são sinais de fratura, que exigem avaliação clínica e radiológica especializada em ambiente hospitalar."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_29",
    titulo: "O Perigo na Área de Serviço (Eletrocussão)",
    tag_visual_cenario: "cenario_externo_servico", 
    descricao_inicial: "Você entra na área de serviço e se depara com uma cena aterrorizante: um familiar está agarrado ao fio desencapado da máquina de lavar. O chão está levemente úmido. O corpo dele sofre espasmos violentos e os músculos estão travados (tetania), impedindo-o de soltar o cabo. Ele está recebendo uma descarga elétrica contínua e não consegue falar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A vítima está servindo de condutor para a eletricidade. Qual é a sua ÚNICA ação inicial prioritária e segura para interromper o choque?",
        tag_visual_detalhe: "estado_espasmo_muscular", 
        opcoes: [
          {
            id: "A",
            texto: "Correr, agarrar a pessoa pelos ombros ou cintura e puxá-la com muita força para longe do fio.",
            correta: false,
            feedback: "Erro fatal. O corpo humano é um excelente condutor de eletricidade. Se você tocar na vítima com as mãos nuas enquanto a corrente estiver ativa, você também tomará o choque, seus músculos travarão e teremos duas vítimas."
          },
          {
            id: "B",
            texto: "Jogar um balde de água fria nela para causar um susto e provocar um curto-circuito que desative o fio.",
            correta: false,
            feedback: "Erro letal. A água (especialmente a água encanada com minerais) é uma ótima condutora de eletricidade. Jogar água aumentará a área eletrificada pelo chão, colocando a sua vida em risco iminente."
          },
          {
            id: "C",
            texto: "Procurar imediatamente o quadro de força (disjuntor) da casa e desligar a chave geral de energia.",
            correta: true,
            feedback: "Correto! A segurança da cena é a regra número um. Cortar a energia na fonte (disjuntor) é a única maneira 100% segura de interromper o choque. (Nota: Caso o disjuntor estivesse trancado, a alternativa extrema seria usar um objeto longo, de madeira seca ou borracha espessa - como um cabo de vassoura de madeira - para afastar o fio, jamais tocando na vítima)."
          },
          {
            id: "D",
            texto: "Bater com uma barra de ferro ou cano de metal nas mãos da vítima para quebrar o contato com o fio.",
            correta: false,
            feedback: "Incorreto. O metal conduzirá a eletricidade da vítima direto para você. Além disso, causar um trauma grave (fratura) com a barra é desnecessário e prejudicial."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você desligou o disjuntor geral. Imediatamente a pessoa despenca no chão. A cena agora é segura. Você se ajoelha ao lado dela, chama alto e bate nos ombros, mas ela não reage. Você olha para o tórax e ele não se move (não respira). Qual o próximo passo?",
        tag_visual_detalhe: "vitima_pcr_choque", 
        opcoes: [
          {
            id: "A",
            texto: "Ligar 192 (SAMU), pedir para alguém buscar um DEA (Desfibrilador) e iniciar compressões torácicas (RCP) fortes e rápidas no centro do peito.",
            correta: true,
            feedback: "Excelente! Choques elétricos graves bagunçam os impulsos naturais do coração, causando arritmias letais (Fibrilação Ventricular) e Parada Cardiorrespiratória. A vítima precisa de RCP imediata para que o cérebro não morra sem oxigênio."
          },
          {
            id: "B",
            texto: "Enterrar os pés ou mãos da vítima em um vaso de planta ou na terra do quintal para que a eletricidade estática residual descarregue.",
            correta: false,
            feedback: "Incorreto. Este é um mito popular muito perigoso. Assim que a energia é cortada, o corpo humano NÃO armazena eletricidade. Esse procedimento apenas faz o socorrista perder minutos vitais de reanimação."
          },
          {
            id: "C",
            texto: "Procurar as queimaduras de entrada nas mãos e de saída nos pés para passar pomada hidratante.",
            correta: false,
            feedback: "Incorreto. A queimadura elétrica é uma lesão grave, mas a falta de respiração e batimentos cardíacos é uma ameaça imediata à vida. O protocolo CAB (Compressões, Vias Aéreas, Respiração) vem sempre antes de tratar ferimentos."
          },
          {
            id: "D",
            texto: "Aguardar cerca de 2 a 5 minutos para ver se o coração faz um 'reset' e volta a bater sozinho após a descarga.",
            correta: false,
            feedback: "Incorreto. O coração não volta a bater sozinho em uma Fibrilação Ventricular sem desfibrilação ou RCP. Cada minuto de atraso reduz a chance de sobrevivência em 10%."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você está fazendo a massagem cardíaca. Um vizinho chega correndo com o DEA (Desfibrilador) do condomínio. No entanto, você lembra que a máquina de lavar vazou e o chão em volta de vocês está molhado, assim como a camisa da vítima. O que fazer antes de dar o choque do DEA?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Não usar o DEA. É proibido usar Desfibrilador em vítimas de choque elétrico, pois o coração já sofreu com eletricidade demais.",
            correta: false,
            feedback: "Mito. O coração parou justamente por uma corrente elétrica desorganizada. O choque controlado do DEA é o único tratamento capaz de 'reiniciar' o ritmo correto do coração."
          },
          {
            id: "B",
            texto: "Colar as pás do DEA por cima da camisa molhada da vítima para não perder tempo tentando despir a pessoa.",
            correta: false,
            feedback: "Incorreto. A eletricidade do DEA viaja pela água. Se o peito estiver molhado ou com roupa úmida, a faísca vai deslizar pela pele (podendo causar graves queimaduras e faíscas no ambiente) em vez de atravessar o coração."
          },
          {
            id: "C",
            texto: "Arrastar a vítima rapidamente pelo quadril/ombros para uma área seca, rasgar a camisa, secar o peito com um pano e só então colar as pás.",
            correta: true,
            feedback: "Correto! Segurança sempre. Embora em traumas normais não devamos mover a vítima, a Parada Cardíaca em poça de água exige que você mova a pessoa para um piso seco e enxugue o tórax antes de usar o DEA, protegendo os socorristas e garantindo a eficácia do choque."
          },
          {
            id: "D",
            texto: "Aplicar as pás normalmente na poça de água, mas pedir para todos darem 3 passos para trás e pularem no momento do choque.",
            correta: false,
            feedback: "Incorreto. Dar um choque do DEA enquanto a vítima e/ou o socorrista estão em contato com poças de água cria um risco real de o choque ser transferido para quem estiver perto. Pular não é uma técnica de segurança aprovada."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Desfecho: O DEA recomendou choque, você aplicou e continuou a RCP. A vítima finalmente tosse, volta a respirar e abre os olhos, confusa. A ambulância está a 5 minutos. Você percebe que as palmas das mãos dela (entrada da energia) e a sola do pé descalço (saída) têm queimaduras escurecidas. Qual o cuidado até o SAMU chegar?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Passar pasta de dente ou borra de café nas queimaduras para aliviar a dor e evitar bolhas.",
            correta: false,
            feedback: "Incorreto. Nunca passe produtos caseiros em queimaduras. Eles dificultam a avaliação médica, causam infecção severa e terão que ser raspados no hospital, causando muita dor."
          },
          {
            id: "B",
            texto: "Avisar a ela que queimaduras elétricas são 'como gelo' e que ela deve estourar qualquer bolha que aparecer para curar mais rápido.",
            correta: false,
            feedback: "Incorreto. Bolhas protegem a pele machucada contra bactérias. Rompê-las abre uma porta direta para infecções graves."
          },
          {
            id: "C",
            texto: "Resfriar as queimaduras suavemente com água limpa em temperatura ambiente e cobrir com um pano limpo/compressa esterilizada, mantendo a vítima em repouso.",
            correta: true,
            feedback: "Desfecho Perfeito! Queimaduras elétricas parecem pequenas por fora ('efeito iceberg'), mas a eletricidade queima os órgãos e músculos por dentro no trajeto entre a mão e o pé. Proteger a ferida com pano limpo e manter a vítima imobilizada e monitorada até a equipe avançada chegar é a conduta ideal."
          },
          {
            id: "D",
            texto: "Amarrar um pano bem apertado (torniquete) nos braços e pernas dela para o veneno da queimadura não subir para o coração.",
            correta: false,
            feedback: "Incorreto. Choque elétrico não injeta veneno ou toxinas no corpo. Torniquetes são exclusivos para sangramentos massivos (hemorragias), nunca para queimaduras."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_30",
    titulo: "Síncope na fila do banco",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Você está em uma agência bancária lotada. Um homem de aproximadamente 50 anos, que estava à sua frente na fila, reclama de tontura, fica pálido e subitamente desmaia, caindo no chão.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Diante da queda súbita da vítima, qual sua primeira atitude?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Correr até a vítima e tentar levantá-la imediatamente para que ela retome os sentidos.",
            correta: false,
            feedback: "Nunca tente levantar alguém que desmaiou subitamente. Isso pode agravar uma lesão de queda ou dificultar a irrigação cerebral."
          },
          {
            id: "B",
            texto: "Avaliar a segurança do local e verificar se a vítima responde a estímulos chamando-a e tocando em seus ombros.",
            correta: true,
            feedback: "Correto! A segurança da cena é primordial e o primeiro passo no SBV é verificar a responsividade (Protocolo AHA)."
          },
          {
            id: "C",
            texto: "Jogar água fria no rosto da vítima para despertá-la do desmaio.",
            correta: false,
            feedback: "Jogar água ou usar substâncias de odor forte (como álcool ou amoníaco) não é recomendado e pode causar aspiração ou reações adversas."
          },
          {
            id: "D",
            texto: "Procurar por um médico na agência antes de se aproximar da vítima.",
            correta: false,
            feedback: "Embora ajuda especializada seja ideal, como socorrista leigo, você deve iniciar a avaliação primária imediatamente enquanto outros buscam ajuda."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A vítima não responde aos seus chamados. O que você deve verificar em seguida?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Verificar se há pulso na região do punho (radial) por pelo menos 30 segundos.",
            correta: false,
            feedback: "Leigos não devem perder tempo tentando localizar pulsos periféricos; as diretrizes recomendam observar apenas a respiração."
          },
          {
            id: "B",
            texto: "Observar o movimento do tórax para checar se a vítima respira normalmente.",
            correta: true,
            feedback: "Exato. Se a vítima não responde e não respira (ou apenas 'gaspeia'), deve-se suspeitar de PCR. Se respira, prosseguimos com cuidados de desmaio."
          },
          {
            id: "C",
            texto: "Colocar o ouvido perto da boca da vítima para ouvir a respiração (técnica do Ver, Ouvir e Sentir).",
            correta: false,
            feedback: "A técnica 'Ver, Ouvir e Sentir' foi descontinuada para leigos para simplificar o protocolo e focar na observação visual do tórax."
          },
          {
            id: "D",
            texto: "Abrir a boca da vítima para garantir que a língua não esteja 'enrolada'.",
            correta: false,
            feedback: "O mito da 'língua enrolada' é perigoso. Nunca coloque os dedos na boca de uma vítima inconsciente."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você percebe que ele respira normalmente, mas continua inconsciente. Qual a ação correta agora?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Pedir que alguém ligue para o 192 (SAMU) e informe que a vítima está inconsciente, mas respira.",
            correta: true,
            feedback: "Correto. A ativação do serviço de emergência é vital, detalhando o estado de consciência e respiração."
          },
          {
            id: "B",
            texto: "Realizar massagem cardíaca imediatamente.",
            correta: false,
            feedback: "Compressões torácicas só devem ser feitas se a vítima NÃO estiver respirando ou se a respiração for anormal (gasping)."
          },
          {
            id: "C",
            texto: "Dar algo doce (açúcar ou bala) para a vítima ingerir caso seja hipoglicemia.",
            correta: false,
            feedback: "Nunca ofereça comida ou líquidos a uma pessoa inconsciente, devido ao risco altíssimo de engasgo e aspiração pulmonar."
          },
          {
            id: "D",
            texto: "Aguardar 10 minutos para ver se ele acorda sozinho antes de ligar para o socorro.",
            correta: false,
            feedback: "Em casos de inconsciência, o tempo é crítico. O socorro deve ser chamado imediatamente após a constatação da não responsividade."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Enquanto aguarda o SAMU, como você deve posicionar a vítima para garantir sua segurança?",
        tag_visual_detalhe: "acao_elevacao_pernas",
        opcoes: [
          {
            id: "A",
            texto: "Sentá-lo em uma cadeira com a cabeça entre as pernas.",
            correta: false,
            feedback: "Vítimas inconscientes não conseguem manter a postura sentada, o que pode causar quedas ou obstrução das vias aéreas."
          },
          {
            id: "B",
            texto: "Mantê-lo deitado de costas e elevar as pernas cerca de 30 cm (se não houver suspeita de trauma).",
            correta: true,
            feedback: "Esta técnica ajuda no retorno venoso ao cérebro em casos de síncope simples. Caso ele vomite, você deve virá-lo de lado."
          },
          {
            id: "C",
            texto: "Colocá-lo de bruços para facilitar a saída de secreções.",
            correta: false,
            feedback: "A posição de bruços dificulta a expansão torácica e a monitoração da respiração pelo socorrista."
          },
          {
            id: "D",
            texto: "Deixá-lo exatamente como caiu, sem tocá-lo até o médico chegar.",
            correta: false,
            feedback: "Embora o excesso de movimentação seja ruim, posicionar as pernas ou colocar em posição lateral de segurança é necessário para a proteção da vítima."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "A vítima começa a despertar, mas parece confusa. Qual o desfecho adequado?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Oferecer um copo de água e ajudá-lo a sair caminhando da agência para tomar ar fresco.",
            correta: false,
            feedback: "Ele deve permanecer em repouso. O esforço físico logo após um desmaio pode causar uma nova queda."
          },
          {
            id: "B",
            texto: "Informar ao SAMU que ele acordou e cancelar a ambulância.",
            correta: false,
            feedback: "O desmaio pode ser sinal de problemas cardíacos ou neurológicos graves. Ele ainda precisa de avaliação médica profissional."
          },
          {
            id: "C",
            texto: "Mantê-lo calmo, deitado, monitorar a respiração e aguardar a equipe do SAMU para a passagem do caso.",
            correta: true,
            feedback: "Perfeito. O papel do leigo termina na transição segura do cuidado para os profissionais (Cadeia de Sobrevivência)."
          },
          {
            id: "D",
            texto: "Pedir que ele assine um termo de que está bem e ir embora.",
            correta: false,
            feedback: "Um leigo não tem competência legal ou técnica para liberar um paciente que sofreu perda de consciência."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_31",
    titulo: "Engasgo Total em Restaurante",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Durante um almoço, um cliente na mesa ao lado levanta-se bruscamente, leva as mãos ao pescoço, está com o rosto ficando arroxeado e não consegue tossir ou falar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você identifica o sinal universal de engasgo. Qual a conduta imediata?",
        tag_visual_detalhe: "estado_engasgo_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Dar tapas vigorosos nas costas enquanto ele estiver em pé.",
            correta: false,
            feedback: "Para adultos conscientes com obstrução grave, a Manobra de Heimlich (compressões abdominais) é mais eficaz que tapas nas costas isolados."
          },
          {
            id: "B",
            texto: "Perguntar: 'Você está engasgado?' e, se ele confirmar com a cabeça, iniciar compressões abdominais.",
            correta: true,
            feedback: "Correto. Primeiro confirmamos a obstrução total (incapacidade de tossir/falar) e iniciamos a Manobra de Heimlich (AHA)."
          },
          {
            id: "C",
            texto: "Oferecer miolo de pão ou água para empurrar o objeto.",
            correta: false,
            feedback: "Isso pode piorar a obstrução ou causar aspiração. Nunca dê nada para ingerir durante um engasgo."
          },
          {
            id: "D",
            texto: "Tentar pinçar o objeto com os dedos dentro da boca da vítima.",
            correta: false,
            feedback: "A tentativa cega de retirada pode empurrar o objeto ainda mais fundo na via aérea."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você se posiciona atrás da vítima para a Manobra de Heimlich. Onde devem ser posicionadas suas mãos?",
        tag_visual_detalhe: "acao_manobra_heimlich",
        opcoes: [
          {
            id: "A",
            texto: "Sobre o osso do peito (esterno).",
            correta: false,
            feedback: "Compressões torácicas são usadas apenas em gestantes ou pessoas obesas onde não se consegue abraçar o abdome."
          },
          {
            id: "B",
            texto: "Abaixo da cicatriz umbilical (baixo ventre).",
            correta: false,
            feedback: "Nesta posição, a pressão não será direcionada corretamente para o diafragma."
          },
          {
            id: "C",
            texto: "Entre a cicatriz umbilical e o final do osso do peito (apêndice xifoide).",
            correta: true,
            feedback: "Exato. O movimento deve ser 'para dentro e para cima' (em J) para simular uma tosse artificial."
          },
          {
            id: "D",
            texto: "Diretamente sobre o estômago, no lado esquerdo do abdome.",
            correta: false,
            feedback: "A manobra deve ser centralizada para maximizar a pressão intratorácica."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: Após 5 manobras, a vítima perde a consciência e amolece em seus braços. O que você faz?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Continuar a Manobra de Heimlich com a vítima deitada.",
            correta: false,
            feedback: "Manobras abdominais em vítimas inconscientes não são mais recomendadas. O protocolo muda para RCP."
          },
          {
            id: "B",
            texto: "Amparar a vítima até o chão, pedir que liguem 192, busquem um DEA e iniciar compressões torácicas.",
            correta: true,
            feedback: "Correto. Se a vítima de engasgo fica inconsciente, iniciamos o protocolo de RCP (compressões) para tentar expulsar o objeto pela pressão."
          },
          {
            id: "C",
            texto: "Tentar fazer respiração boca-a-boca imediatamente antes de qualquer outra ação.",
            correta: false,
            feedback: "As compressões são prioritárias. Em engasgos, a ventilação só é tentada após as compressões e checagem da boca."
          },
          {
            id: "D",
            texto: "Sacudir a vítima para que ela acorde e continue tentando tossir.",
            correta: false,
            feedback: "Inconsciência significa que o cérebro não está recebendo oxigênio; sacudir não resolve a obstrução mecânica."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você está realizando RCP. O que deve fazer cada vez que for realizar as ventilações (ou a cada ciclo de 30 compressões)?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Olhar dentro da boca da vítima e remover o objeto apenas se estiver visível e fácil de alcançar.",
            correta: true,
            feedback: "Correto. No protocolo de engasgo inconsciente, inspecionamos a via aérea rapidamente antes de tentar ventilar."
          },
          {
            id: "B",
            texto: "Enfiar o dedo em gancho o mais fundo possível para buscar o objeto.",
            correta: false,
            feedback: "Varredura cega é proibida, pois pode impactar o objeto definitivamente."
          },
          {
            id: "C",
            texto: "Ignorar a boca e focar apenas nas compressões sem parar para nada.",
            correta: false,
            feedback: "Como a causa é obstrutiva, checar a boca é parte integrante da tentativa de desobstrução durante a RCP."
          },
          {
            id: "D",
            texto: "Virar a vítima de bruços e bater nas costas.",
            correta: false,
            feedback: "Interromper a RCP para bater nas costas de um inconsciente reduz drasticamente as chances de sobrevivência."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Após o segundo ciclo, você vê um pedaço de carne na boca, remove-o e a vítima dá um suspiro profundo e volta a respirar. Qual o próximo passo?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Deixá-la ir para casa, pois o objeto já foi removido.",
            correta: false,
            feedback: "Vítimas que sofreram manobras de Heimlich ou RCP precisam de avaliação médica para checar lesões internas ou edema de glote."
          },
          {
            id: "B",
            texto: "Colocá-la em posição lateral de segurança, mantê-la aquecida e aguardar o SAMU monitorando a respiração.",
            correta: true,
            feedback: "Exato. A posição lateral protege a via aérea se ela vomitar e o monitoramento garante que ela não entre em PCR novamente."
          },
          {
            id: "C",
            texto: "Sentá-la e pedir que ela coma algo leve para acalmar o estômago.",
            correta: false,
            feedback: "A via aérea pode estar sensível ou inflamada. Nada deve ser ingerido até avaliação médica."
          },
          {
            id: "D",
            texto: "Continuar as compressões torácicas por mais 10 minutos por segurança.",
            correta: false,
            feedback: "Nunca realize RCP em alguém que tenha sinais de vida ou respiração normal."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_32",
    titulo: "Atropelamento com Hemorragia e Fogo",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você presencia um atropelamento. A vítima está caída no asfalto com um sangramento intenso e pulsante na perna direita. O motorista do carro está em choque dentro do veículo.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Antes de tocar na vítima com hemorragia, o que é prioritário na via pública?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Sinalizar a via com triângulo, galhos ou o próprio carro para evitar novos acidentes.",
            correta: true,
            feedback: "Segurança da cena. Um socorrista atropelado não ajuda ninguém. O PHTLS enfatiza o controle de riscos ambientais primeiro."
          },
          {
            id: "B",
            texto: "Correr para estancar o sangue usando as mãos nuas.",
            correta: false,
            feedback: "Segurança biológica é importante. Sempre tente usar luvas ou barreiras (panos, plásticos) para evitar contato com sangue."
          },
          {
            id: "C",
            texto: "Remover a vítima do meio da rua imediatamente, arrastando-a pela calçada.",
            correta: false,
            feedback: "Movimentar vítimas de trauma sem estabilização cervical só é permitido em caso de risco iminente de morte (como incêndio ou explosão)."
          },
          {
            id: "D",
            texto: "Ligar para os familiares da vítima antes de qualquer outra ação.",
            correta: false,
            feedback: "O acionamento do socorro médico e o controle de riscos vêm muito antes de avisar familiares."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está sinalizada. O sangramento na perna é 'em jato' (arterial). Como você deve agir?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Lavar a ferida com água corrente para ver de onde vem o sangue.",
            correta: false,
            feedback: "Lavar feridas arteriais atrasa o controle da hemorragia e não ajuda na coagulação."
          },
          {
            id: "B",
            texto: "Aplicar pressão direta e firme sobre o ferimento usando um pano limpo.",
            correta: true,
            feedback: "Compressão direta é a primeira linha de tratamento para hemorragias externas segundo o Stop the Bleed e protocolos AHA/PHTLS."
          },
          {
            id: "C",
            texto: "Fazer um torniquete no pescoço da vítima para diminuir a pressão geral.",
            correta: false,
            feedback: "Opção absurda. Torniquetes são usados apenas em membros e nunca no pescoço!"
          },
          {
            id: "D",
            texto: "Apenas cobrir o ferimento frouxamente para que o sangue coagule sozinho.",
            correta: false,
            feedback: "Sangramentos arteriais não param sem pressão mecânica externa ativa."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: O carro do atropelador começa a soltar uma fumaça preta e densa, e você vê chamas sob o capô. A vítima está a 2 metros do carro.",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Continuar a compressão no local, confiando que o fogo não vai se espalhar.",
            correta: false,
            feedback: "Risco de explosão ou incêndio exige a evacuação imediata da zona de perigo. Vida sobre membro."
          },
          {
            id: "B",
            texto: "Realizar uma extração de emergência, arrastando a vítima pelo eixo longo do corpo para um local seguro.",
            correta: true,
            feedback: "Correto. Em risco iminente (fogo), o protocolo permite mover a vítima tentando manter o alinhamento cabeça-pescoço-tronco o máximo possível."
          },
          {
            id: "C",
            texto: "Ir buscar um extintor e deixar a vítima sozinha sangrando.",
            correta: false,
            feedback: "O socorrista leigo não deve tentar combater incêndios veiculares se isso significar abandonar a vítima em perigo ou se colocar em risco."
          },
          {
            id: "D",
            texto: "Gritar por ajuda e correr para longe sem a vítima.",
            correta: false,
            feedback: "Abandonar a vítima quando se pode realizar uma extração de emergência segura não é a conduta esperada de um socorrista capacitado."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Longe do fogo, o sangramento continua atravessando os panos. O SAMU informa que o acesso está congestionado e vai demorar. O que fazer?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Retirar os panos sujos e colocar novos panos limpos.",
            correta: false,
            feedback: "Nunca remova os panos saturados de sangue, pois você destruirá os coágulos que começaram a se formar. Adicione mais por cima."
          },
          {
            id: "B",
            texto: "Aplicar um torniquete comercial (ou improvisado com tecido largo e um braço de alavanca) acima do ferimento.",
            correta: true,
            feedback: "Correto. Se a pressão direta falha e o socorro está distante, o torniquete é indicado em membros para salvar a vida (PHTLS)."
          },
          {
            id: "C",
            texto: "Dar bastante água para a vítima compensar o sangue perdido.",
            correta: false,
            feedback: "Vítimas de trauma grave não devem ingerir nada (risco de cirurgia e vômito)."
          },
          {
            id: "D",
            texto: "Apenas elevar a perna e soltar a compressão.",
            correta: false,
            feedback: "Elevação de membros não é mais recomendada como método isolado para controlar grandes hemorragias."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "A vítima apresenta suor frio, palidez e fala desconexa. O sangramento parou com o torniquete. Qual o cuidado final?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Cobrir a vítima para manter o calor corporal e anotar o horário que o torniquete foi aplicado.",
            correta: true,
            feedback: "Perfeito. Prevenir a hipotermia é parte do tratamento do choque hipovolêmico, e o horário do torniquete é vital para a equipe médica."
          },
          {
            id: "B",
            texto: "Afrouxar o torniquete a cada 10 minutos para o sangue circular.",
            correta: false,
            feedback: "Nunca afrouxe um torniquete aplicado. Isso pode causar choque fatal ou embolia. Somente médicos o removem."
          },
          {
            id: "C",
            texto: "Fazer massagem cardíaca para ajudar o sangue a chegar no cérebro.",
            correta: false,
            feedback: "Se a vítima tem pulso ou sinais de vida, a RCP é contraindicada."
          },
          {
            id: "D",
            texto: "Pedir que ela tente se levantar para testar a força das pernas.",
            correta: false,
            feedback: "Vítimas em choque devem ser mantidas deitadas e em repouso absoluto."
         }
       ]
     },
     {
       "id": "etapa_6",
       "pergunta": "Desfecho: As sirenes se aproximam e a equipe do SAMU/Bombeiros desembarca da ambulância. A vítima está viva, aquecida e com o sangramento controlado. Como você deve agir na entrega do paciente?",
       "tag_visual_detalhe": "desfecho_chegada_socorro",
       "opcoes": [
         {
           "id": "A",
           "texto": "Ir embora silenciosamente, pois o seu trabalho como socorrista de primeiros socorros já terminou.",
           "correta": false,
           "feedback": "Incorreto. A transição de cuidados é crucial. A equipe precisa das informações que você coletou para dar continuidade ao tratamento com segurança."
         },
         {
           "id": "B",
           "texto": "Tirar o torniquete rapidamente para que os paramédicos vejam o tamanho original da ferida.",
           "correta": false,
           "feedback": "Incorreto. A remoção do torniquete deve ser feita apenas no ambiente hospitalar ou por um médico equipado com soro e medicamentos."
         },
         {
           "id": "C",
           "texto": "Afastar-se para dar espaço à equipe, relatar de forma breve e clara o que aconteceu e informar o horário exato em que o torniquete foi colocado.",
           "correta": true,
           "feedback": "Missão cumprida! O socorrista leigo é a ponte de ouro que mantém a vítima viva até o suporte avançado. Um relato claro salva um tempo precioso e garante o melhor desfecho possível para a vítima."
         },
         {
           "id": "D",
           "texto": "Exigir entrar na ambulância para acompanhar a vítima até o hospital, já que você fez o primeiro atendimento.",
           "correta": false,
           "feedback": "Incorreto. O espaço na ambulância é restrito e reservado apenas para os profissionais trabalharem durante o transporte."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_33",
    titulo: "Suspeita de AVC e Crise Convulsiva",
    tag_visual_cenario: "cenario_interno_comum",
    descricao_inicial: "Você está visitando seu avô. Subitamente, ele tenta falar e as palavras saem arrastadas. Você nota que um lado da boca dele está caído.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual teste rápido você deve realizar para confirmar a suspeita de AVC (Acidente Vascular Cerebral)?",
        tag_visual_detalhe: "estado_avc_assimetria",
        opcoes: [
          {
            id: "A",
            texto: "Pedir para ele dar um sorriso, levantar os dois braços e repetir uma frase curta.",
            correta: true,
            feedback: "Escala de Cincinnati (SAMU): Sorriso (assimetria), Abraço (fraqueza) e Música (fala). Se um estiver alterado, há 72% de chance de ser AVC."
          },
          {
            id: "B",
            texto: "Medir a pressão arterial e dar um remédio para baixar se estiver alta.",
            correta: false,
            feedback: "Leigos nunca devem medicar vítimas. No AVC, a pressão alta pode ser um mecanismo de compensação do cérebro."
          },
          {
            id: "C",
            texto: "Pedir para ele tossir com força e soprar a mão.",
            correta: false,
            feedback: "Estes testes não têm evidência científica para diagnóstico de AVC."
          },
          {
            id: "D",
            texto: "Furar a ponta dos dedos dele com uma agulha para liberar a pressão sanguínea.",
            correta: false,
            feedback: "Isso é um mito perigoso da internet que atrasa o atendimento e causa dor desnecessária."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "REVIRAVOLTA: Um familiar chega desesperado e tenta dar água com açúcar ao seu avô, achando que é 'queda de pressão'. Como você intervém?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Deixar dar a água, pois açúcar ajuda a acalmar em situações de estresse.",
            correta: false,
            feedback: "No AVC, a deglutição costuma estar afetada. Dar líquidos pode causar engasgo e pneumonia aspirativa."
          },
          {
            id: "B",
            texto: "Impedir o familiar e explicar que ele não deve ingerir nada, pois pode engasgar e piorar a situação.",
            correta: true,
            feedback: "Correto. O jejum é obrigatório em casos neurológicos agudos por risco de broncoaspiração e necessidade de exames/cirurgia."
          },
          {
            id: "C",
            texto: "Pedir que ele dê apenas um pouquinho, bem devagar.",
            correta: false,
            feedback: "Mesmo pequenas quantidades são perigosas se o reflexo de deglutição estiver comprometido."
          },
          {
            id: "D",
            texto: "Sugerir que deem café forte em vez de água.",
            correta: false,
            feedback: "Estimulantes como cafeína podem agravar o quadro neurológico ou cardíaco."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA 2: Enquanto você liga para o 192, seu avô cai da cadeira e começa a ter contrações musculares bruscas e generalizadas. O que você faz?",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Segurar os braços e pernas dele com força para interromper os movimentos.",
            correta: false,
            feedback: "Tentar conter a convulsão pode causar fraturas na vítima ou ferimentos em você. Deixe o movimento acontecer."
          },
          {
            id: "B",
            texto: "Colocar um lenço enrolado ou os dedos na boca dele para ele não morder a língua.",
            correta: false,
            feedback: "NUNCA coloque nada na boca. Você pode ser mordido ou causar quebra de dentes que obstruirão a garganta."
          },
          {
            id: "C",
            texto: "Afastar móveis próximos, proteger a cabeça dele com algo macio e não interferir nos movimentos.",
            correta: true,
            feedback: "Correto. A prioridade na convulsão é evitar que a vítima se machuque contra objetos e proteger o crânio."
          },
          {
            id: "D",
            texto: "Jogar álcool no rosto dele para interromper a crise.",
            correta: false,
            feedback: "Substâncias químicas próximas às vias aéreas durante uma crise podem causar queimaduras ou irritação pulmonar."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Os movimentos pararam após 2 minutos. Ele está desacordado e roncando alto, com muita saliva na boca. Qual a conduta?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Virar a vítima de lado (Posição Lateral de Segurança) para evitar que a saliva ou vômito obstruam a respiração.",
            correta: true,
            feedback: "Exato. O período pós-convulsivo (pós-ictal) exige proteção das vias aéreas devido ao relaxamento muscular e excesso de secreção."
          },
          {
            id: "B",
            texto: "Sacudi-lo para que ele acorde logo.",
            correta: false,
            feedback: "A vítima acordará naturalmente mas estará muito confusa. Sacudir só causa mais desorientação."
          },
          {
            id: "C",
            texto: "Mantê-lo de costas com a cabeça elevada por travesseiros.",
            correta: false,
            feedback: "De costas, a língua relaxada ou secreções podem bloquear a passagem do ar (ronco)."
          },
          {
            id: "D",
            texto: "Tentar dar os remédios de uso contínuo dele imediatamente.",
            correta: false,
            feedback: "Ele ainda está inconsciente ou semiconsciente; o risco de asfixia é total."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O SAMU chega. Quais informações são as mais críticas para passar à equipe?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Dizer apenas que ele 'passou mal' e se afastar.",
            correta: false,
            feedback: "Informações vagas atrasam o diagnóstico correto no hospital."
          },
          {
            id: "B",
            texto: "Informar o horário exato que os sintomas de AVC começaram e quanto tempo durou a convulsão.",
            correta: true,
            feedback: "Fundamental! No AVC, 'tempo é cérebro'. O horário de início determina se ele poderá receber medicamentos trombolíticos."
          },
          {
            id: "C",
            texto: "Dizer que ele está bem agora porque a crise passou.",
            correta: false,
            feedback: "Ele teve um evento neurológico grave que pode se repetir ou ser o início de um dano permanente."
          },
          {
            id: "D",
            texto: "Reclamar da demora da ambulância.",
            correta: false,
            feedback: "Embora frustrante, isso não ajuda no tratamento clínico do paciente."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_34",
    titulo: "Amputação Traumática em Oficina",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Um vizinho estava usando uma serra circular na garagem quando a ferramenta travou e ricocheteou, causando a amputação traumática de dois dedos da mão esquerda. Há muito sangue no chão e ele está muito pálido.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ao chegar na oficina, qual a sua primeira ação de segurança?",
        tag_visual_detalhe: "cenario_externo_servico",
        opcoes: [
          {
            id: "A",
            texto: "Pegar os dedos amputados do chão imediatamente.",
            correta: false,
            feedback: "A prioridade é a segurança da cena e a vida da vítima, não a parte amputada."
          },
          {
            id: "B",
            texto: "Desligar a serra circular da tomada e garantir que nenhuma outra ferramenta esteja ligada.",
            correta: true,
            feedback: "Correto. Eliminar a fonte de risco (energia elétrica/equipamento) é o primeiro passo para não se tornar a próxima vítima."
          },
          {
            id: "C",
            texto: "Amarrar um cordão apertado no braço dele antes de se aproximar.",
            correta: false,
            feedback: "Torniquetes só são aplicados após avaliação e falha da compressão, e nunca com 'cordões' finos que cortam a pele."
          },
          {
            id: "D",
            texto: "Gritar para o vizinho manter a calma enquanto você procura luvas de jardinagem.",
            correta: false,
            feedback: "Embora luvas sejam boas, o controle da hemorragia grave não pode esperar se você tiver outros meios de barreira (como um saco plástico limpo)."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A hemorragia nos cotos dos dedos é severa. Como realizar a compressão correta?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Pressionar diretamente o local do sangramento com um pano limpo e elevar a mão acima do nível do coração.",
            correta: true,
            feedback: "Correto. Pressão direta firme é a conduta inicial. A elevação pode auxiliar levemente na redução do fluxo em extremidades."
          },
          {
            id: "B",
            texto: "Colocar a mão dele debaixo da torneira para limpar o sangue.",
            correta: false,
            feedback: "Água corrente impede a coagulação e pode causar hipotermia ou espalhar contaminantes no ferimento aberto."
          },
          {
            id: "C",
            texto: "Apenas envolver a mão em um saco plástico sem apertar.",
            correta: false,
            feedback: "O saco plástico não exerce pressão; a hemorragia continuará livremente."
          },
          {
            id: "D",
            texto: "Colocar pó de café ou açúcar na ferida para estancar.",
            correta: false,
            feedback: "Mitos perigosos. Isso causa infecção gravíssima e dificulta muito o trabalho de limpeza do cirurgião."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: O vizinho começa a desfalecer, a pele está fria e ele diz que 'está tudo escurecendo'. O sangue continua minando pelo curativo. O que fazer?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Dar um tapa leve no rosto dele para ele não dormir.",
            correta: false,
            feedback: "Ele está entrando em choque hipovolêmico por perda de sangue. Estímulos dolorosos não resolvem a falta de volume sanguíneo."
          },
          {
            id: "B",
            texto: "Aplicar um torniquete no antebraço e deitar a vítima.",
            correta: true,
            feedback: "Correto. Sinais de choque + hemorragia não controlada em membros = Torniquete. Deitar ajuda a manter o sangue nos órgãos vitais."
          },
          {
            id: "C",
            texto: "Tirar o curativo anterior para ver se o corte aumentou.",
            correta: false,
            feedback: "Nunca remova o primeiro curativo, você removerá os coágulos e piorará o choque."
          },
          {
            id: "D",
            texto: "Sentá-lo em uma cadeira e dar água com sal.",
            correta: false,
            feedback: "Sentar alguém em choque reduz a oxigenação cerebral. Nada de líquidos por via oral."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Agora que a vítima está estável, você precisa cuidar dos dedos amputados que encontrou. Qual o procedimento correto?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Colocar os dedos diretamente em um pote com gelo ou água gelada.",
            correta: false,
            feedback: "O contato direto com gelo causa queimadura térmica e necrose dos tecidos, impedindo o reimplante."
          },
          {
            id: "B",
            texto: "Envolver os dedos em gaze úmida (soro ou água), colocá-los em um saco plástico fechado e só então colocar ESSE saco dentro de um recipiente com gelo.",
            correta: true,
            feedback: "Correto. O resfriamento deve ser indireto. Isso preserva os tecidos por mais tempo para uma possível cirurgia de reimplante."
          },
          {
            id: "C",
            texto: "Lavar os dedos com álcool e guardá-los no bolso para não perder.",
            correta: false,
            feedback: "O álcool destrói as células. O calor do corpo no bolso acelera a decomposição do tecido amputado."
          },
          {
            id: "D",
            texto: "Jogar os dedos fora, pois amputações de dedos não têm conserto.",
            correta: false,
            feedback: "Muitas amputações de dedos são passíveis de reimplante com sucesso se preservadas corretamente."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O SAMU chega e a vítima está consciente, mas muito fraca. Qual o desfecho da sua atuação?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Entregar a parte amputada à equipe, informar o uso do torniquete e o horário da aplicação.",
            correta: true,
            feedback: "Perfeito. Esta tríade (vítima controlada + parte preservada + informações técnicas) maximiza as chances de recuperação do paciente."
          },
          {
            id: "B",
            texto: "Dizer que não conseguiu achar os dedos para não atrasar a saída da ambulância.",
            correta: false,
            feedback: "A equipe médica pode esperar alguns segundos pela parte preservada, pois isso muda o futuro funcional da vítima."
          },
          {
            id: "C",
            texto: "Pedir para ir na ambulância para aprender como os médicos trabalham.",
            correta: false,
            feedback: "O espaço na ambulância é restrito para o atendimento. Familiares ou socorristas leigos raramente acompanham, a menos que solicitado."
          },
          {
            id: "D",
            texto: "Soltar o torniquete assim que ver a ambulância dobrando a esquina.",
            correta: false,
            feedback: "Mantenha o torniquete. A descompressão súbita pode liberar toxinas ou causar nova hemorragia antes da equipe estar pronta."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_35",
    titulo: "Eletrocussão com evolução para PCR",
    tag_visual_cenario: "cenario_cozinha",
    descricao_inicial: "Você está na casa de um amigo quando ouve um estrondo na cozinha. Ao chegar, encontra seu amigo caído no chão, tremendo violentamente (espasmos), segurando o fio desencapado de uma geladeira.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual a sua primeira atitude ao se deparar com a vítima sofrendo o choque elétrico?",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Puxar a vítima pelos ombros imediatamente para afastá-la do fio.",
            correta: false,
            feedback: "Se você tocar na vítima enquanto ela ainda está recebendo a descarga elétrica, você também será eletrocutado."
          },
          {
            id: "B",
            texto: "Correr até o quadro de energia e desligar a chave geral (disjuntor) antes de se aproximar.",
            correta: true,
            feedback: "A segurança da cena é a regra número um. Cortar a fonte de energia é a única forma totalmente segura de interromper a eletrocussão."
          },
          {
            id: "C",
            texto: "Jogar um balde de água na vítima para quebrar o contato elétrico.",
            correta: false,
            feedback: "A água é uma excelente condutora de eletricidade e agravaria severamente a situação, colocando você e a vítima em risco letal."
          },
          {
            id: "D",
            texto: "Ligar para o SAMU (192) e aguardar do lado de fora sem fazer nada.",
            correta: false,
            feedback: "Embora o SAMU deva ser acionado, o tempo que a vítima passa recebendo a corrente elétrica é crucial. Desligar a energia é uma ação imediata e segura que um leigo deve fazer."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "REVIRAVOLTA: Após desligar a energia geral, os espasmos param. A vítima está caída, mole e muito pálida. Você a chama, mas ela não responde. O que deve observar agora?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Procurar por queimaduras nas mãos ou pés para tratar os ferimentos primeiro.",
            correta: false,
            feedback: "As queimaduras elétricas são secundárias neste momento. A prioridade máxima é avaliar as funções vitais de uma vítima inconsciente."
          },
          {
            id: "B",
            texto: "Observar o tórax e o abdômen da vítima por cerca de 10 segundos para ver se ela está respirando normalmente.",
            correta: true,
            feedback: "Correto. Segundo a AHA, em uma vítima não responsiva, você deve verificar a respiração observando o movimento do peito para identificar uma possível Parada Cardiorrespiratória (PCR)."
          },
          {
            id: "C",
            texto: "Procurar sentir o pulso no pescoço por 1 minuto inteiro.",
            correta: false,
            feedback: "Leigos não devem perder tempo procurando pulso. A ausência de respiração normal já é o gatilho para iniciar a RCP."
          },
          {
            id: "D",
            texto: "Sentá-la e dar tapas no rosto para que recobre a consciência.",
            correta: false,
            feedback: "Nunca tente sentar uma pessoa inconsciente, pois a via aérea pode ser obstruída e a irrigação cerebral diminuída."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você nota que a vítima não respira (ou apresenta apenas 'gasping' / respiração agônica). Outra pessoa chega na cozinha. O que você delega a ela?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Pedir que ela ligue para o 192 (SAMU), informe a suspeita de parada cardíaca e busque um DEA (Desfibrilador), enquanto você inicia as compressões torácicas.",
            correta: true,
            feedback: "Ação perfeita! Você ativou a Cadeia de Sobrevivência de forma clara e direcionada, garantindo ajuda especializada enquanto assume a RCP."
          },
          {
            id: "B",
            texto: "Pedir que ela faça as compressões enquanto você vai até a rua buscar um desfibrilador.",
            correta: false,
            feedback: "Se você é o socorrista primário e já identificou a PCR, deve iniciar a RCP imediatamente e delegar a busca por ajuda a terceiros."
          },
          {
            id: "C",
            texto: "Pedir que ela faça respiração boca-a-boca enquanto você observa.",
            correta: false,
            feedback: "As compressões torácicas são a prioridade absoluta na PCR. A ventilação boca-a-boca não deve atrasar o início das compressões."
          },
          {
            id: "D",
            texto: "Pedir que ela prepare água com açúcar para quando a vítima acordar.",
            correta: false,
            feedback: "A vítima está em PCR (morte clínica). Preparar líquidos é inútil e perigoso."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "REVIRAVOLTA: O vizinho traz um DEA da portaria do prédio, mas está muito nervoso e entrega os adesivos para você colocar por cima da camisa da vítima. O que você faz?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Cola os adesivos por cima da camisa, pois o choque é forte o suficiente para atravessar o tecido.",
            correta: false,
            feedback: "Os adesivos do DEA precisam de contato direto com a pele nua para ler o ritmo cardíaco e entregar o choque corretamente."
          },
          {
            id: "B",
            texto: "Tira a camisa da vítima (ou corta) e aplica os adesivos diretamente no peito nu e seco, seguindo as imagens nas pás.",
            correta: true,
            feedback: "Correto. O tórax deve estar nu e seco. Se houver excesso de pelos e o adesivo não colar, use a navalha do kit do DEA."
          },
          {
            id: "C",
            texto: "Ignora o DEA, pois a causa foi choque elétrico e um novo choque poderia piorar.",
            correta: false,
            feedback: "Mito! A eletrocussão frequentemente causa Fibrilação Ventricular. O choque do DEA é exatamente o tratamento necessário para 'reiniciar' o coração."
          },
          {
            id: "D",
            texto: "Aplica os adesivos, mas continua fazendo massagem cardíaca enquanto a máquina dá o choque.",
            correta: false,
            feedback: "NUNCA toque no paciente enquanto o DEA estiver analisando ou administrando o choque. Você poderia ser afetado e atrapalhar a leitura."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Após o primeiro choque do DEA, o que você deve fazer Imediatamente?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Aguardar o paciente acordar e verificar novamente se ele respira.",
            correta: false,
            feedback: "Pausas nas compressões reduzem a sobrevida. Não espere para reavaliar logo após o choque."
          },
          {
            id: "B",
            texto: "Retirar os adesivos do DEA para não dar um segundo choque sem querer.",
            correta: false,
            feedback: "Nunca remova as pás do DEA. O aparelho continuará monitorando e avisará se um novo choque for necessário após 2 minutos."
          },
          {
            id: "C",
            texto: "Retomar as compressões torácicas imediatamente, sem pausa para checar pulso, e continuar até a equipe do SAMU assumir.",
            correta: true,
            feedback: "Excelente! O protocolo de SBV determina que a RCP (compressões) recomece imediatamente após o choque, durante o ciclo de 2 minutos que o DEA programa."
          },
          {
            id: "D",
            texto: "Virar a vítima de lado em posição de recuperação.",
            correta: false,
            feedback: "A posição lateral só é usada se a vítima apresentar sinais claros de retorno da circulação (começar a se mover, abrir os olhos e respirar normalmente)."
         }
       ]
     },
     {
       "id": "etapa_6",
       "pergunta": "Desfecho: Você escuta as sirenes e, logo depois, a equipe do SAMU entra na cozinha com os equipamentos avançados enquanto você está no meio do ciclo de compressões torácicas. Como você deve proceder na transição?",
       "tag_visual_detalhe": "desfecho_chegada_socorro",
       "opcoes": [
         {
           "id": "A",
           "texto": "Parar as compressões imediatamente assim que ouvir a sirene ou ver os paramédicos entrarem, pois a ajuda já chegou.",
           "correta": false,
           "feedback": "Incorreto. Cada segundo sem compressão diminui a chance de sobrevivência. Não interrompa a RCP até que a equipe esteja ao lado da vítima e peça verbalmente para você parar e trocar de lugar."
         },
         {
           "id": "B",
           "texto": "Desligar o DEA e retirar os adesivos do peito do seu amigo para que os paramédicos possam colocar os cabos deles.",
           "correta": false,
           "feedback": "Incorreto. Nunca desligue ou remova o DEA. A equipe avançada fará a transição segura dos equipamentos sem perder o monitoramento atual."
         },
         {
           "id": "C",
           "texto": "Continuar as compressões até que os socorristas peçam para você parar, afastar-se e informar rapidamente há quanto tempo ele está em parada e se o DEA aplicou choque.",
           "correta": true,
           "feedback": "Perfeito! A manutenção da perfusão contínua é fundamental. Sua passagem de informações (tempo de PCR e choques dados) é o elo que conecta o Suporte Básico ao Suporte Avançado com sucesso."
         },
         {
           "id": "D",
           "texto": "Pegar o seu amigo no colo e levá-lo até a maca do lado de fora para adiantar o trabalho da equipe.",
           "correta": false,
           "feedback": "Incorreto. Uma vítima em PCR não deve ser transportada no colo, e as manobras não podem parar para isso. A equipe estabilizará o paciente ali mesmo antes de pranchá-lo."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_36",
    titulo: "Vidraça Estilhaçada e Choque Hemorrágico",
    tag_visual_cenario: "cenario_interno_comum",
    descricao_inicial: "Durante uma festa de família, um adolescente correndo atravessa uma porta de vidro fechada. Ele sofre um corte profundo no antebraço direito. Há um esguicho de sangue vermelho vivo (arterial) manchando rapidamente o chão.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Diante da hemorragia arterial grave, qual é a primeira intervenção para salvar a vida do jovem?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Lavar a ferida com água corrente para retirar os cacos de vidro antes de qualquer coisa.",
            correta: false,
            feedback: "Tentar limpar a ferida em caso de hemorragia massiva gasta um tempo crítico e remove fatores de coagulação. O foco é parar o sangramento."
          },
          {
            id: "B",
            texto: "Pegar um pano limpo (ou camisa) e exercer compressão direta forte e constante sobre o ferimento.",
            correta: true,
            feedback: "A compressão direta é o primeiro e mais importante passo no controle de hemorragias externas (Protocolo Stop the Bleed)."
          },
          {
            id: "C",
            texto: "Fazer um torniquete no pescoço ou tórax do adolescente.",
            correta: false,
            feedback: "Nunca se aplica torniquete no pescoço, tórax ou abdômen, apenas em membros (braços e pernas)."
          },
          {
            id: "D",
            texto: "Levantar o braço dele o mais alto possível, sem aplicar pressão na ferida.",
            correta: false,
            feedback: "A elevação sem compressão direta é ineficaz para hemorragias arteriais graves."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "REVIRAVOLTA: Uma tia do adolescente se aproxima correndo com um pote de pó de café e tenta jogar em cima do machucado para 'estancar o sangue'. Como você deve agir?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Deixar ela jogar, pois o pó de café absorve o líquido e ajuda na coagulação.",
            correta: false,
            feedback: "Mito perigoso. O pó de café causa infecção severa e dificulta imensamente o trabalho cirúrgico no hospital, além de não parar hemorragias arteriais."
          },
          {
            id: "B",
            texto: "Impedir firmemente a tia, explicando rapidamente que apenas pressão com pano limpo deve ser usada, e pedir que ela ligue para o SAMU 192.",
            correta: true,
            feedback: "Correto. O socorrista deve intervir contra práticas incorretas de terceiros e, de preferência, redirecionar a pessoa para uma tarefa útil (ligar para a emergência)."
          },
          {
            id: "C",
            texto: "Sugerir que ela troque o pó de café por manteiga ou pasta de dente.",
            correta: false,
            feedback: "Nenhuma substância caseira deve ser aplicada em ferimentos, muito menos em ferimentos hemorrágicos graves."
          },
          {
            id: "D",
            texto: "Começar a gritar e discutir com ela, parando a compressão da ferida.",
            correta: false,
            feedback: "A compressão direta nunca deve ser interrompida. Mantenha a calma, imponha autoridade e continue focando no sangramento."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA 2: Mesmo com você pressionando com força por vários minutos, o primeiro pano fica completamente encharcado de sangue e o sangramento continua. Qual o próximo passo?",
        tag_visual_detalhe: "acao_curativo_adicional",
        opcoes: [
          {
            id: "A",
            texto: "Retirar o pano encharcado para ver o tamanho do corte e colocar um pano novo.",
            correta: false,
            feedback: "Remover o primeiro curativo destrói o início da formação de coágulos e faz o sangramento recomeçar do zero."
          },
          {
            id: "B",
            texto: "Desistir da compressão e tentar encontrar o caco de vidro para tapar o buraco.",
            correta: false,
            feedback: "Procurar objetos dentro de ferimentos ou usar objetos sujos agravará a lesão e a hemorragia."
          },
          {
            id: "C",
            texto: "Colocar um novo pano limpo por cima do pano já encharcado e aplicar ainda mais pressão.",
            correta: true,
            feedback: "Correto. Adicionar camadas mantendo a pressão preserva o coágulo em formação. É a técnica do curativo compressivo."
          },
          {
            id: "D",
            texto: "Mandar o adolescente fazer flexões com o braço para cansar o músculo e diminuir o sangue.",
            correta: false,
            feedback: "Qualquer movimentação física aumenta os batimentos cardíacos, o que fará o sangue ser bombeado com ainda mais força."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "O adolescente começa a ficar confuso, suando frio e com a pele extremamente pálida. A compressão direta não está funcionando. O que fazer imediatamente?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Oferecer um copo de refrigerante para aumentar a glicose dele.",
            correta: false,
            feedback: "Ele está entrando em choque hipovolêmico grave. Vítimas que precisarão de cirurgia de emergência não podem ingerir NADA por via oral (risco de vômito e aspiração)."
          },
          {
            id: "B",
            texto: "Aplicar um torniquete no braço, alguns centímetros acima do ferimento, e apertar até o sangramento parar.",
            correta: true,
            feedback: "Exatamente. Quando a compressão direta falha em uma hemorragia massiva de extremidade, ou a vítima apresenta sinais de choque, o torniquete é a conduta salva-vidas recomendada pelo PHTLS e AHA."
          },
          {
            id: "C",
            texto: "Fazer respiração boca-a-boca para aumentar o oxigênio dele.",
            correta: false,
            feedback: "Enquanto ele estiver respirando, o problema não é a ventilação mecânica, mas sim a perda do transportador de oxigênio (o sangue)."
          },
          {
            id: "D",
            texto: "Bater levemente no rosto dele repetidas vezes para ele não fechar os olhos.",
            correta: false,
            feedback: "O rebaixamento de consciência é devido à falta de sangue no cérebro. Estímulos dolorosos não curam a hipovolemia."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Com o torniquete aplicado, o sangramento cessa totalmente. Como você finaliza os cuidados enquanto a ambulância chega?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Afrouxo o torniquete de 5 em 5 minutos para não perder o braço.",
            correta: false,
            feedback: "NUNCA afrouxe um torniquete após aplicado. A descompressão libera toxinas metabólicas que podem parar o coração (Síndrome de Esmagamento/Reperfusão). Só o médico no hospital pode retirar."
          },
          {
            id: "B",
            texto: "Anoto o horário de aplicação do torniquete (seja no próprio torniquete ou na testa da vítima), deito o adolescente e o cubro com um cobertor para evitar a hipotermia.",
            correta: true,
            feedback: "Procedimento perfeito. O horário orienta a equipe médica e prevenir a hipotermia é um dos passos cruciais no tratamento do choque hemorrágico."
          },
          {
            id: "C",
            texto: "Apenas aguardo, pois o sangramento parou e não há mais risco.",
            correta: false,
            feedback: "O choque hipovolêmico continua agindo internamente. A manutenção do aquecimento é vital."
          },
          {
            id: "D",
            texto: "Retiro as ataduras sujas agora que o torniquete está funcionando, para a ferida respirar.",
            correta: false,
            feedback: "Mantenha o curativo no lugar para proteger a ferida de contaminações externas."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_37",
    titulo: "Anafilaxia no Parque que evolui para PCR",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Você está caminhando em um parque quando um homem sentado em um banco começa a tossir, segurar a garganta, apresentar o rosto extremamente inchado e respirar com um chiado muito agudo. Ele aponta desesperado para o que parece ser uma picada de abelha em seu pescoço.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Reconhecendo os sinais de um choque anafilático grave (reação alérgica extrema), qual a sua primeira ação?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Deitá-lo imediatamente de barriga para cima e erguer suas pernas bem alto.",
            correta: false,
            feedback: "Deitar um paciente com severa dificuldade respiratória (edema de glote) agrava enormemente a falta de ar, pois a língua e os tecidos inchados recuam."
          },
          {
            id: "B",
            texto: "Pedir para alguém ligar para o 192 (SAMU), mantê-lo na posição mais confortável para ele respirar (geralmente sentado) e perguntar se ele possui uma caneta de adrenalina auto-injetável.",
            correta: true,
            feedback: "Correto. O SAMU é urgente. Pacientes com falta de ar preferem ficar sentados ou semi-sentados. Se ele tiver a medicação de resgate (EpiPen), você pode auxiliá-lo a utilizá-la."
          },
          {
            id: "C",
            texto: "Procurar um canivete ou caneta para fazer um furo na garganta dele (traqueostomia improvisada).",
            correta: false,
            feedback: "Isso é uma manobra cirúrgica de filmes que resulta em morte por hemorragia severa quando tentada por leigos. Nunca tente fazer procedimentos invasivos."
          },
          {
            id: "D",
            texto: "Forçar o paciente a beber um litro de água para diluir o veneno da abelha.",
            correta: false,
            feedback: "Com a garganta inchada, ele tem altíssimo risco de broncoaspiração (a água vai para os pulmões)."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "REVIRAVOLTA: Ele não possui a caneta. Em poucos minutos, os olhos dele reviram, ele desaba no banco e para de responder. Você o deita no chão e percebe que ele faz apenas movimentos de 'peixe fora d'água' (gasping).",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Aplicar a manobra de Heimlich, pois o inchaço é como um engasgo.",
            correta: false,
            feedback: "A manobra de Heimlich serve para obstrução por corpos estranhos (comida/objetos), não para tecidos internos inchados."
          },
          {
            id: "B",
            texto: "Reconhecer que o gasping é parada cardíaca, posicionar as mãos no centro do peito (esterno) e iniciar compressões torácicas fortes e rápidas.",
            correta: true,
            feedback: "Correto. O 'gasping' é respiração agônica e sinal clássico de PCR. Ao iniciar as compressões, você garante a perfusão dos órgãos, independente da causa inicial da parada."
          },
          {
            id: "C",
            texto: "Procurar o ferrão da abelha e tentar puxar com uma pinça antes de iniciar a reanimação.",
            correta: false,
            feedback: "O veneno já foi inoculado e causou o choque anafilático. Cada segundo gasto procurando o ferrão é tempo de cérebro morrendo sem oxigênio."
          },
          {
            id: "D",
            texto: "Dar tapas violentos nas costas para fazer o ar entrar.",
            correta: false,
            feedback: "Tapas nas costas não têm efeito na anafilaxia e atrasam as compressões vitais."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA 2: Um transeunte se aproxima gritando: 'Pare as massagens! Ele só desmaiou pela alergia, você vai quebrar as costelas dele! Só erga as pernas!'. Como você reage?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Parar as compressões, erguer as pernas e aguardar, já que pode machucá-lo.",
            correta: false,
            feedback: "Uma vítima que não respira ou gaspeia está morta. Quebrar costelas é uma complicação aceitável quando a alternativa é a morte cerebral irreversível."
          },
          {
            id: "B",
            texto: "Ignorar o transeunte, continuar as compressões ininterruptamente e afirmar com voz de comando: 'Ele está em parada cardíaca, me ajude buscando um DEA!'",
            correta: true,
            feedback: "Correto! O socorrista precisa demonstrar confiança e liderança, mantendo o protocolo correto e delegando tarefas aos curiosos para afastá-los do foco negativo."
          },
          {
            id: "C",
            texto: "Levantar e começar a discutir sobre as diretrizes da AHA com o transeunte para provar que está certo.",
            correta: false,
            feedback: "Qualquer pausa na RCP compromete drasticamente as chances do paciente. Não perca tempo argumentando longamente."
          },
          {
            id: "D",
            texto: "Fazer as compressões mais devagar para evitar fraturar as costelas e acalmar o transeunte.",
            correta: false,
            feedback: "A profundidade (5 a 6 cm) e a velocidade (100 a 120 por minuto) devem ser mantidas rigorosamente para que o bombeamento seja eficaz."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "A equipe do SAMU ainda não chegou e você está realizando as compressões há cerca de 4 minutos. O que é mais importante sobre a qualidade da sua massagem cardíaca?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Manter os braços flexionados (dobrados) para não cansar rápido e pressionar com a ponta dos dedos.",
            correta: false,
            feedback: "Braços dobrados reduzem a força do peso do corpo, cansando muito mais. Deve-se usar o 'calcanhar' da mão, não os dedos."
          },
          {
            id: "B",
            texto: "Garantir o retorno completo do tórax após cada compressão, minimizando as pausas.",
            correta: true,
            feedback: "Exato! O retorno do tórax cria o 'vácuo' interno necessário para que o coração volte a se encher de sangue. Se você ficar apoiado no peito, o sangue não entra."
          },
          {
            id: "C",
            texto: "Fazer pausas de 30 segundos a cada minuto para o paciente descansar.",
            correta: false,
            feedback: "O fluxo sanguíneo artificial cai a zero sempre que você pausa. As interrupções devem ser estritamente mínimas (menos de 10 segundos)."
          },
          {
            id: "D",
            texto: "Apertar o peito o mais fundo que conseguir, mesmo ultrapassando 8 cm.",
            correta: false,
            feedback: "Compressões excessivamente profundas (acima de 6 cm) podem causar lesões internas graves não justificáveis em órgãos vitais."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O SAMU finalmente chega. A equipe médica desembarca com os equipamentos. Qual a sua conduta na transição dos cuidados?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Parar imediatamente as compressões assim que ver a ambulância e sentar no chão para descansar.",
            correta: false,
            feedback: "Você só interrompe as compressões quando a equipe posicionar o equipamento e Disser explicitamente 'Pode soltar, eu assumo'."
          },
          {
            id: "B",
            texto: "Continuar as compressões até o paramédico pedir para trocar, informando que foi uma reação a picada de abelha e o tempo aproximado de PCR.",
            correta: true,
            feedback: "Perfeito! A transição deve ser fluida. A informação da anafilaxia como causa permitirá que a equipe prepare a adrenalina injetável rapidamente."
          },
          {
            id: "C",
            texto: "Pegar o DEA das mãos do médico e você mesmo colar na vítima.",
            correta: false,
            feedback: "A equipe de suporte avançado (ALS) traz monitores multiparamétricos e assumirá todo o controle da cena."
          },
          {
            id: "D",
            texto: "Pedir aos paramédicos que façam um curativo na picada de abelha primeiro.",
            correta: false,
            feedback: "A PCR é o foco absoluto. O ferimento da picada é irrelevante frente à falta de circulação cerebral."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_38",
    titulo: "Acidente de Moto e Risco de Incêndio na Via",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Um motociclista cai da moto em alta velocidade em uma avenida movimentada. Ele está deitado de costas, de capacete, consciente, reclamando de fortes dores nas costas e não consegue mexer as pernas.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você para o carro de forma segura. Antes de correr até o motociclista, qual é a prioridade absoluta?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr para o meio da via e gritar com os outros motoristas para que parem.",
            correta: false,
            feedback: "Correr no meio de uma avenida não sinalizada expõe o socorrista a um alto risco de novo atropelamento."
          },
          {
            id: "B",
            texto: "Garantir a segurança da cena, utilizando o triângulo de sinalização, pisca-alerta do seu carro a uma distância segura e, se possível, pedir a outros para ajudarem no bloqueio do trânsito.",
            correta: true,
            feedback: "A segurança do socorrista e da cena é o primeiro passo da abordagem do trauma (Protocolo PHTLS). Sinalize muito antes de se focar na vítima."
          },
          {
            id: "C",
            texto: "Ligar imediatamente para familiares da vítima para avisar do acidente.",
            correta: false,
            feedback: "A segurança vem antes, seguida da avaliação da vítima e do contato com o socorro especializado (192/193). Familiares são avisados depois."
          },
          {
            id: "D",
            texto: "Tirar a moto de cima da via para liberar o tráfego.",
            correta: false,
            feedback: "Mover veículos antes da chegada das autoridades ou perícia só se faz por risco iminente. E a prioridade inicial é sinalizar o entorno."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está sinalizada. Ao abordar a vítima, ela tenta se sentar e pede desesperadamente que tirem o capacete dela, pois está 'sufocando'.",
        tag_visual_detalhe: "acao_estabilizacao_cervical",
        opcoes: [
          {
            id: "A",
            texto: "Tirar o capacete imediatamente para ajudar na respiração e confortá-lo.",
            correta: false,
            feedback: "Retirar o capacete de forma inadequada por uma pessoa não treinada é a maior causa de agravamento de lesões na medula, podendo deixar a vítima paraplégica ou tetraplégica."
          },
          {
            id: "B",
            texto: "Instruí-lo a não se mover, segurar o capacete nas laterais para estabilizar a cabeça e manter o pescoço alinhado, explicando que o resgate especializado é quem irá removê-lo.",
            correta: true,
            feedback: "Correto. Estabilização manual da cervical em linha neutra (sem puxar) é essencial no trauma. Como ele não mexe as pernas, a suspeita de TRM (Trauma Raquimedular) é altíssima."
          },
          {
            id: "C",
            texto: "Colocar um travesseiro debaixo da cabeça dele (mesmo de capacete) para ficar mais confortável.",
            correta: false,
            feedback: "Elevar a cabeça tira a coluna do alinhamento natural, piorando possíveis fraturas vertebrais cervicais."
          },
          {
            id: "D",
            texto: "Puxar a mandíbula dele com força para abrir a via aérea.",
            correta: false,
            feedback: "Ele está falando, o que significa que a via aérea está aberta. Não mexa no pescoço/mandíbula de vítimas conscientes em trauma sem necessidade."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: O tanque da moto furou no impacto e a gasolina está vazando intensamente sob a vítima. Subitamente, faíscas da lataria no asfalto acendem o combustível e o fogo começa a avançar rápido na direção do motociclista.",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Manter a vítima estritamente no local porque ela tem lesão na coluna; a regra é clara sobre nunca mexer.",
            correta: false,
            feedback: "A regra de ouro é 'vida sobre membro/lesão'. Em caso de risco iminente e não controlável (fogo, explosão, desabamento), a extricação de emergência é mandatória."
          },
          {
            id: "B",
            texto: "Realizar uma extração de emergência (arrastamento pelo eixo longitudinal do corpo) o mais rápido possível para afastá-lo do fogo.",
            correta: true,
            feedback: "Correto! O protocolo prevê a movimentação da vítima quando o ambiente se torna fatal. Deve-se tentar manter o alinhamento corporal durante o arrasto, se possível pelas roupas/ombros."
          },
          {
            id: "C",
            texto: "Fugir sozinho e ligar para os bombeiros para apagarem o fogo.",
            correta: false,
            feedback: "Embora o socorrista não deva se matar, se o fogo ainda está apenas se aproximando e dá tempo de arrastar a vítima para trás com segurança, deve fazê-lo."
          },
          {
            id: "D",
            texto: "Tentar jogar areia com os pés no fogo enquanto continua segurando a cabeça dele.",
            correta: false,
            feedback: "Combater um incêndio de líquidos inflamáveis com o pé é inútil e expõe você e o paciente às chamas."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você arrastou a vítima para longe com segurança, cerca de 10 metros de distância. A vítima acabou desmaiando durante o arrasto. Qual é a conduta imediata após colocá-lo no chão seguro?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Tirar o capacete finalmente, já que ele desmaiou.",
            correta: false,
            feedback: "Se ele estiver respirando adequadamente dentro do capacete (viseira aberta), não remova, pois o risco da coluna permanece."
          },
          {
            id: "B",
            texto: "Verificar a respiração (observar tórax) mantendo a estabilização cervical. Se respirar, monitorar até o resgate; se não, preparar para RCP.",
            correta: true,
            feedback: "A avaliação X-A-B-C-D-E é reiniciada sempre que movemos a vítima ou ela altera seu estado de consciência. Checar a respiração é a prioridade na inconsciência."
          },
          {
            id: "C",
            texto: "Jogar água fria nele para acordá-lo do desmaio.",
            correta: false,
            feedback: "A vítima pode ter desmaiado devido ao choque neurogênico ou choque hemorrágico interno causado pelo trauma. Água não resolve o quadro."
          },
          {
            id: "D",
            texto: "Fazer flexão e extensão das pernas dele para testar se a medula foi cortada.",
            correta: false,
            feedback: "É um absurdo manipular fraturas ou testar nervos movendo ativamente os membros de um paciente traumatizado e inconsciente."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "A vítima está respirando de forma superficial, continua inconsciente. O Corpo de Bombeiros (193) chega com o caminhão para o fogo e a unidade de resgate. O que você relata?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Relata a cinemática do trauma (moto x queda), que ele estava consciente e sem movimento nas pernas, e que precisou arrastá-lo devido ao fogo que iniciou.",
            correta: true,
            feedback: "Relato exemplar! Informar o estado neurológico prévio da vítima (não sentia as pernas) antes de desmaiar é uma informação ouro para a equipe avançada e para os cirurgiões depois."
          },
          {
            id: "B",
            texto: "Diz apenas que ele caiu e se afasta, pois não quer assumir responsabilidade pela movimentação de arrasto.",
            correta: false,
            feedback: "Omitir informações críticas, como a movimentação forçada e a paralisia prévia, prejudica seriamente o plano terapêutico da equipe médica."
          },
          {
            id: "C",
            texto: "Pede desculpas por ter arrastado a vítima e quebrado a regra da coluna.",
            correta: false,
            feedback: "Você não errou; salvou a vida dele do incêndio. Apenas relate a ocorrência técnica."
          },
          {
            id: "D",
            texto: "Pede para ver o equipamento da ambulância enquanto os paramédicos trabalham.",
            correta: false,
            feedback: "O socorrista leigo deve fornecer os dados e abrir espaço para o atendimento profissional imediatamente."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_39",
    titulo: "Bebê engasgado e pânico familiar",
    tag_visual_cenario: "cenario_quarto_infantil",
    descricao_inicial: "Você está visitando a casa de parentes. Um bebê de 8 meses, que estava engatinhando pelo tapete, começa a se debater, ficar roxinho (cianótico), arregala os olhos e não emite nenhum som, choro ou tosse.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "REVIRAVOLTA: A avó do bebê percebe o engasgo total, entra em pânico, pega o bebê pelos pés deixando-o de ponta-cabeça e sacode vigorosamente para 'o objeto cair'. Qual a sua intervenção?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Ajudar a avó a sacudir, pois a gravidade ajuda a soltar o objeto.",
            correta: false,
            feedback: "Sacudir um bebê violentamente pode causar a Síndrome do Bebê Sacudido, provocando hemorragia cerebral fatal, além de não ser eficaz para engasgos graves."
          },
          {
            id: "B",
            texto: "Intervir de forma firme, pegar o bebê imediatamente, explicar que essa técnica é perigosa e assumir o controle da situação, ordenando que liguem para o 192.",
            correta: true,
            feedback: "Em situações de pânico familiar com manobras incorretas agressivas, o socorrista apto deve assumir a liderança (física e verbalmente) de forma imperativa para salvar o paciente."
          },
          {
            id: "C",
            texto: "Tentar enfiar seus dedos na garganta do bebê para tirar o que quer que seja antes de deitá-lo.",
            correta: false,
            feedback: "Nunca faça varredura cega com os dedos na boca de ninguém, muito menos em bebês; o objeto frequentemente é empurrado mais fundo."
          },
          {
            id: "D",
            texto: "Ficar observando até a avó se cansar e então assumir a situação.",
            correta: false,
            feedback: "Um bebê em asfixia tem danos cerebrais a partir dos 4 minutos. O socorrista não pode ser um mero espectador inerte."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você está com o bebê nos braços, que continua sem respirar e roxinho. Qual a manobra correta para desobstrução de lactentes (menores de 1 ano) conscientes?",
        tag_visual_detalhe: "acao_desobstrucao_bebe",
        opcoes: [
          {
            id: "A",
            texto: "Abraçá-lo por trás e fazer compressões abdominais (Heimlich) como num adulto.",
            correta: false,
            feedback: "A manobra de Heimlich no abdômen de lactentes causa ruptura do fígado e outros órgãos por eles não terem a caixa torácica fechada e protegida."
          },
          {
            id: "B",
            texto: "Apoiá-lo de bruços no seu antebraço (cabeça mais baixa que o tórax), aplicar 5 golpes nas costas entre as escápulas, depois virá-lo e aplicar 5 compressões no meio do peito com dois dedos.",
            correta: true,
            feedback: "Correto! Esta é a sequência de Desobstrução de Vias Aéreas por Corpo Estranho para bebês indicada pelas Diretrizes Internacionais: 5 golpes nas costas seguidos de 5 compressões torácicas."
          },
          {
            id: "C",
            texto: "Apertar o peito dele 30 vezes e dar 2 ventilações boca-boca-nariz repetidamente.",
            correta: false,
            feedback: "Isso é protocolo de Ressuscitação Cardiopulmonar (RCP). O bebê ainda está consciente lutando para respirar. Usa-se a manobra obstrutiva com os golpes."
          },
          {
            id: "D",
            texto: "Assoprar muito forte na boca dele para o ar descer rasgando.",
            correta: false,
            feedback: "Assoprar um corpo estranho vai mandá-lo mais fundo para os brônquios ou hiperinsuflar e estourar o estômago/pulmões da criança."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA 2: Após realizar 3 ciclos da manobra (golpes e compressões), o bebê subitamente perde a força (fica 'molinho') e fecha os olhos, não respondendo mais a nenhum estímulo. O que isso significa e o que muda?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Significa que ele dormiu de exaustão e a desobstrução funcionou; deve-se colocá-lo no berço.",
            correta: false,
            feedback: "Bebês engasgados não dormem, eles desmaiam por falta de oxigênio no cérebro. É um sinal de extrema gravidade."
          },
          {
            id: "B",
            texto: "Significa que o engasgo evoluiu para Parada Cardiorrespiratória (PCR). O socorrista deve colocá-lo em uma superfície rígida e iniciar o protocolo de RCP para bebê.",
            correta: true,
            feedback: "Exato! Quando qualquer vítima de engasgo se torna inconsciente, o corpo estranho impediu a oxigenação e o coração está parando ou já parou. A RCP é iniciada."
          },
          {
            id: "C",
            texto: "Significa que você deve dar os golpes nas costas com muito mais força até ele chorar.",
            correta: false,
            feedback: "Não se faz manobra de tapotagem (golpes nas costas) em paciente inconsciente. A conduta se torna RCP."
          },
          {
            id: "D",
            texto: "Significa que a via aérea foi liberada, agora basta jogar um pouco de água fria nele.",
            correta: false,
            feedback: "A inconsciência é o passo que antecede a morte cerebral. Não espere e não use água."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Iniciando a RCP no bebê inconsciente, você deita-o na mesa e prepara-se para as compressões e ventilações. Qual a particularidade na via aérea para o engasgo inconsciente?",
        tag_visual_detalhe: "acao_rcp_bebe",
        opcoes: [
          {
            id: "A",
            texto: "Não fazer compressões torácicas; fazer apenas respirações muito profundas sem checar a boca.",
            correta: false,
            feedback: "A compressão ajuda não só a bombear o sangue mas também pode expulsar o objeto pela pressão criada nos pulmões."
          },
          {
            id: "B",
            texto: "Sempre que for abrir a via aérea para as ventilações de resgate, abrir a boca e olhar lá dentro; se visualizar o corpo estranho e for de fácil alcance, removê-lo.",
            correta: true,
            feedback: "Correto! Na RCP por causa obstrutiva, a cada ciclo antes de tentar soprar ar para o bebê, você inspeciona a boca. Se o objeto foi empurrado para cima com as massagens, você retira."
          },
          {
            id: "C",
            texto: "Enfiar os dois dedos lá dentro independentemente de ver ou não o objeto.",
            correta: false,
            feedback: "Varredura às cegas continua sendo totalmente contraindicada."
          },
          {
            id: "D",
            texto: "Ignorar a via aérea e focar em 100 compressões por minuto ininterruptamente porque o socorrista leigo nunca deve ventilar.",
            correta: false,
            feedback: "Embora a Hands-Only CPR (só mãos) seja aceitável para colapsos súbitos em adultos, em crianças/bebês e em afogamentos/asfixias, a falta de ar foi a CAUSA. A ventilação é extremamente recomendada e crucial se o socorrista souber."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Após mais dois ciclos de RCP, você abre a boquinha dele e vê uma tampa de caneta que subiu até a base da língua. Você retira com a ponta do dedo mínimo ('mindinho'). O bebê então puxa o ar fortemente e começa a chorar alto. O que você faz a seguir?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Dar uma mamadeira de leite quente para acalmar a garganta machucada.",
            correta: false,
            feedback: "Não se dá nada via oral pós-engasgo severo. Pode haver edema (inchaço) ou irritação grave."
          },
          {
            id: "B",
            texto: "Pegar o bebê no colo, acalmá-lo na posição mais confortável (geralmente recostado no seu peito) e aguardar e equipe do SAMU chegar para levá-lo ao hospital para avaliação pediátrica.",
            correta: true,
            feedback: "Correto. O choro é um ótimo sinal (via aérea livre e oxigênio entrando). Contudo, qualquer vítima (especialmente bebês) que sofreram manobras profundas ou RCP requerem avaliação médica obrigatória para descartar lesões internas."
          },
          {
            id: "C",
            texto: "Dizer aos pais que eles podem cancelar o chamado do SAMU porque tudo acabou bem.",
            correta: false,
            feedback: "Ele teve parada respiratória e foi reanimado. O cancelamento da avaliação médica seria negligência."
          },
          {
            id: "D",
            texto: "Continuar a fazer massagem cardíaca enquanto ele chora para garantir que o coração bata firme.",
            correta: false,
            feedback: "Nunca se faz compressão torácica (massagem) em vítima consciente e responsiva (chorando)."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_40",
    titulo: "Choque Elétrico com Princípio de Incêndio",
    tag_visual_cenario: "cenario_interno_comum",
    descricao_inicial: "Você entra no escritório e encontra um colega caído no chão, segurando um cabo de extensão desencapado. Há faíscas e um pequeno princípio de incêndio no tapete próximo a ele.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual é a sua primeira ação ao se deparar com essa cena?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Puxar a vítima pelas roupas para longe do fogo.",
            correta: false,
            feedback: "Erro fatal. Se a vítima ainda estiver em contato com a corrente elétrica, você também tomará o choque e se tornará uma segunda vítima."
          },
          {
            id: "B",
            texto: "Jogar um balde de água no tapete para apagar o fogo.",
            correta: false,
            feedback: "Água é condutora de eletricidade. Jogar água em um equipamento energizado causará um choque elétrico grave em você."
          },
          {
            id: "C",
            texto: "Desligar o disjuntor principal (quadro de energia) antes de qualquer outra ação.",
            correta: true,
            feedback: "Correto! A segurança da cena (Protocolo XABCDE) é sempre a prioridade número 1. Cortar a fonte de energia garante que você possa intervir sem risco."
          },
          {
            id: "D",
            texto: "Bater no fio com uma vassoura de metal para soltá-lo.",
            correta: false,
            feedback: "Metal conduz eletricidade. Você seria eletrocutado. Sempre corte a energia na fonte."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você desligou a energia. O fogo no tapete está se espalhando lentamente e a vítima está inconsciente no meio do caminho. O que fazer?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Arrastar a vítima rapidamente para uma área segura pelos ombros ou roupas.",
            correta: true,
            feedback: "Correto! Como há um risco iminente de morte pelo fogo (cena insegura), a movimentação de emergência é justificada para salvar a vida de ambos."
          },
          {
            id: "B",
            texto: "Iniciar a massagem cardíaca ali mesmo, ignorando o fogo.",
            correta: false,
            feedback: "Nunca preste socorro em uma cena que oferece risco iminente a você. O fogo pode atingir os dois."
          },
          {
            id: "C",
            texto: "Tentar apagar o fogo batendo com a sua jaqueta enquanto a vítima fica no chão.",
            correta: false,
            feedback: "O atraso no atendimento da vítima inconsciente e a exposição ao fogo são perigosos. A prioridade é retirar a vítima do perigo."
          },
          {
            id: "D",
            texto: "Abandonar a vítima e fugir do prédio.",
            correta: false,
            feedback: "Embora sua segurança seja prioridade, como a energia foi cortada, é possível fazer uma extração rápida (arrastar) antes de evacuar."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Vocês estão em uma área segura. A vítima não responde aos seus chamados e apresenta uma respiração ruidosa e muito espaçada (agônica/gasping).",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Colocar a vítima de lado e esperar ela acordar.",
            correta: false,
            feedback: "Respiração agônica (gasping) não é respiração normal; é um sinal clássico de Parada Cardiorrespiratória (PCR). Colocar de lado atrasará a reanimação."
          },
          {
            id: "B",
            texto: "Ligar para 192 (SAMU) ou 193 (Bombeiros) no viva-voz e pedir um DEA.",
            correta: true,
            feedback: "Correto! Ao identificar ausência de respiração normal, o primeiro passo da cadeia de sobrevivência é acionar a emergência e solicitar um Desfibrilador (DEA)."
          },
          {
            id: "C",
            texto: "Dar tapas no rosto e jogar água gelada para reanimá-la.",
            correta: false,
            feedback: "Mito popular ineficaz que apenas atrasa o reconhecimento da parada cardíaca e o início das compressões."
          },
          {
            id: "D",
            texto: "Fazer respiração boca a boca imediatamente.",
            correta: false,
            feedback: "Para leigos, a prioridade máxima em caso de PCR são as compressões torácicas contínuas, não a ventilação."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "O socorro foi chamado. O atendente instrui você a iniciar a Reanimação Cardiopulmonar (RCP). Como proceder?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Comprimir o peito 15 vezes e dar 2 sopros.",
            correta: false,
            feedback: "Essa relação está desatualizada e ventilações não são a prioridade para socorristas leigos não treinados."
          },
          {
            id: "B",
            texto: "Pressionar a boca do estômago (abdômen) para estimular a respiração.",
            correta: false,
            feedback: "Comprimir o abdômen não massageia o coração e pode causar vômito, bloqueando as vias aéreas."
          },
          {
            id: "C",
            texto: "Entrelaçar as mãos no centro do peito (osso esterno) e comprimir forte e rápido sem parar.",
            correta: true,
            feedback: "Correto! Para leigos, a AHA recomenda a RCP Apenas com as Mãos (Hands-Only CPR), com compressões contínuas (100 a 120 por minuto) no centro do tórax."
          },
          {
            id: "D",
            texto: "Massagear levemente o lado esquerdo do peito, onde fica o coração.",
            correta: false,
            feedback: "As compressões devem ser feitas no centro do tórax (sobre o esterno) com força (pelo menos 5cm) para serem efetivas."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "[REVIRAVOLTA] Um colega traz o DEA (Desfibrilador), mas grita: 'Ele está muito suado e molhado, o choque vai matar a gente!'",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Descartar o uso do DEA e continuar apenas com as compressões.",
            correta: false,
            feedback: "O DEA é essencial para reverter arritmias fatais pós-choque elétrico. Não usá-lo reduz drasticamente as chances de sobrevivência."
          },
          {
            id: "B",
            texto: "Secar rapidamente o peito da vítima com uma camisa e colar os adesivos do DEA.",
            correta: true,
            feedback: "Correto! Água conduz eletricidade e pode impedir que o choque vá para o coração. Secar rapidamente o tórax resolve o problema de forma segura."
          },
          {
            id: "C",
            texto: "Colar os adesivos do DEA por cima da camisa molhada da vítima.",
            correta: false,
            feedback: "Os adesivos devem estar em contato direto com a pele nua e seca para leitura correta e entrega do choque."
          },
          {
            id: "D",
            texto: "Jogar álcool no peito para evaporar o suor mais rápido.",
            correta: false,
            feedback: "Álcool é inflamável e o DEA emite uma descarga elétrica (faísca). Isso poderia causar uma queimadura severa ou incêndio."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O DEA analisa o ritmo, recomenda o choque e você aperta o botão. O choque é administrado e a equipe do SAMU entra na sala no mesmo instante.",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Desligar o DEA, retirar os adesivos e ir embora.",
            correta: false,
            feedback: "Nunca desligue o DEA ou retire os adesivos até que a equipe médica assuma o caso e determine isso."
          },
          {
            id: "B",
            texto: "Afastar-se imediatamente e dizer: 'Ele tomou um choque elétrico, fiz RCP e o DEA acabou de dar um choque.'",
            correta: true,
            feedback: "Correto! A transição de cuidados exige que você passe as informações críticas (mecanismo do trauma e intervenções feitas) de forma rápida e clara para a equipe avançada."
          },
          {
            id: "C",
            texto: "Ficar checando o pulso da vítima no pescoço até o SAMU pedir licença.",
            correta: false,
            feedback: "Leigos não devem perder tempo checando pulso, e a equipe precisa de espaço livre para iniciar o suporte avançado imediatamente."
          },
          {
            id: "D",
            texto: "Sentar a vítima para ajudar os paramédicos a colocá-la na maca.",
            correta: false,
            feedback: "A vítima acabou de receber um choque e ainda pode estar em parada. A equipe fará a movimentação com prancha rígida e técnica correta."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_41",
    titulo: "Acidente de Moto e Controle de Sangramento",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você está dirigindo e presencia um motociclista colidir contra um poste. Ele é arremessado e cai na pista. Carros continuam passando em alta velocidade.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual é o primeiro passo absoluto antes de ajudar o motociclista?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr até ele para ver se está respirando.",
            correta: false,
            feedback: "Se você correr para a via sem sinalizar, a chance de você ser atropelado pelos carros em alta velocidade é enorme. A cena não está segura."
          },
          {
            id: "B",
            texto: "Estacionar seu carro bloqueando a via antes da vítima, ligar o pisca-alerta e usar o triângulo para sinalizar.",
            correta: true,
            feedback: "Correto! Em vias de trânsito, a sinalização e o bloqueio físico com seu veículo (a uma distância segura) são vitais para evitar novos acidentes e proteger você e a vítima."
          },
          {
            id: "C",
            texto: "Puxar a vítima pelos braços para a calçada rapidamente.",
            correta: false,
            feedback: "Movimentar uma vítima de trauma sem necessidade extrema pode agravar lesões na coluna cervical."
          },
          {
            id: "D",
            texto: "Ficar no acostamento gritando para ele levantar.",
            correta: false,
            feedback: "A vítima pode estar inconsciente ou com fraturas graves. A prioridade é sinalizar a cena de forma segura para poder intervir."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está sinalizada. Você se aproxima e vê que a coxa do motociclista tem um corte profundo e o sangue está esguichando em grande volume (hemorragia arterial maciça).",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Lavar a ferida com água e sabão para não infeccionar.",
            correta: false,
            feedback: "Em hemorragias massivas, a vítima pode sangrar até a morte em minutos. Limpeza de ferida é secundária; parar o sangramento (Letra 'X' do protocolo) é a prioridade."
          },
          {
            id: "B",
            texto: "Aplicar um torniquete improvisado (largo, com haste) bem apertado acima do ferimento.",
            correta: true,
            feedback: "Correto! O PHTLS atual enfatiza que hemorragias exsanguinantes em extremidades devem ser contidas imediatamente com torniquete. (Protocolo XABCDE - 'X')."
          },
          {
            id: "C",
            texto: "Elevar a perna da vítima e esperar o sangue parar de esguichar.",
            correta: false,
            feedback: "Elevação não é suficiente para conter uma hemorragia arterial grave (sangue esguichando). É preciso compressão mecânica (torniquete ou compressão direta forte)."
          },
          {
            id: "D",
            texto: "Tentar tirar o capacete primeiro para ver se ele respira.",
            correta: false,
            feedback: "A hemorragia massiva mata mais rápido que um potencial problema de via aérea neste instante inicial. Trate o 'X' (Exsanguinação) antes do 'A' (Airway)."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "O sangramento parou com o torniquete. O motociclista está consciente, mas pálido, suado e confuso (sinais de choque). O que fazer agora?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Afrouxar o torniquete a cada 10 minutos para não perder a perna.",
            correta: false,
            feedback: "Mito gravíssimo. Nunca afrouxe um torniquete. Isso pode causar uma queda fatal da pressão arterial e reativar o sangramento."
          },
          {
            id: "B",
            texto: "Manter o torniquete, acalmar a vítima, cobri-la para evitar hipotermia e ligar 192.",
            correta: true,
            feedback: "Correto! Vítimas de choque hemorrágico perdem calor rápido. Mantê-la aquecida e acionar o suporte avançado é essencial."
          },
          {
            id: "C",
            texto: "Oferecer um copo de água com açúcar para melhorar a pressão.",
            correta: false,
            feedback: "Nunca dê nada via oral para vítimas de trauma grave; eles podem vomitar, aspirar o líquido ou precisar de cirurgia de emergência."
          },
          {
            id: "D",
            texto: "Retirar o capacete para ele respirar melhor ao natural.",
            correta: false,
            feedback: "A remoção de capacete por leigos só é indicada se houver parada cardiorrespiratória e for essencial para RCP. Caso contrário, deixa-se para a equipe de resgate para proteger a cervical."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "[REVIRAVOLTA] A vítima entra em pânico pela falta de ar e dor, e tenta arrancar o próprio capacete de forma agressiva com as mãos.",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Deixar que ele tire, pois ele sabe o que é melhor para o próprio corpo.",
            correta: false,
            feedback: "Ele está confuso por causa da falta de sangue no cérebro (choque). Tirar o capacete bruscamente pode lesionar a medula espinhal permanentemente."
          },
          {
            id: "B",
            texto: "Ajoelhar-se, segurar o capacete pelas laterais firmemente e pedir calmamente para ele não se mexer.",
            correta: true,
            feedback: "Correto! A estabilização manual da cabeça previne movimentos bruscos que podem romper a medula em caso de fratura cervical."
          },
          {
            id: "C",
            texto: "Dar um tapa no rosto dele para que 'volte a si'.",
            correta: false,
            feedback: "Agressão nunca é justificada, não acalma o paciente e piora o estado de estresse e choque fisiológico."
          },
          {
            id: "D",
            texto: "Sentá-lo à força para ele respirar melhor.",
            correta: false,
            feedback: "Movimentar uma vítima de trauma que deveria estar imobilizada pode agravar lesões na coluna ou piorar o estado de choque."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Enquanto você segura o capacete, um pedestre se aproxima insistindo em dar água para a vítima 'acalmar os nervos'.",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Permitir que ele dê apenas um gole pequeno.",
            correta: false,
            feedback: "Qualquer quantidade de água em trauma grave pode causar aspiração para os pulmões se a vítima vomitar ou rebaixar a consciência."
          },
          {
            id: "B",
            texto: "Bloquear a ação de forma firme, explicando que a vítima passará por cirurgia e não pode beber nada.",
            correta: true,
            feedback: "Correto! Proteger a vítima contra condutas leigas prejudiciais (como dar água ou alimentos) é parte crucial do atendimento e gestão da cena."
          },
          {
            id: "C",
            texto: "Ignorar o pedestre e deixar ele fazer o que quiser.",
            correta: false,
            feedback: "Como socorrista na cena, você assumiu o cuidado. Permitir um erro grave prejudica a vítima."
          },
          {
            id: "D",
            texto: "Sugerir que deem café ao invés de água, para manter a vítima acordada.",
            correta: false,
            feedback: "A regra de Jejum Absoluto (nada pela boca) se aplica a todas as bebidas e alimentos em caso de trauma."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "[REVIRAVOLTA 2] De repente, o motociclista começa a vomitar uma grande quantidade de líquido dentro do capacete.",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Puxar o capacete com toda a força para cima imediatamente.",
            correta: false,
            feedback: "Puxar o capacete bruscamente de uma vítima deitada vai dobrar o pescoço dela, podendo causar paralisia (secção medular)."
          },
          {
            id: "B",
            texto: "Rolar o corpo inteiro da vítima como um bloco (em lateral), mantendo a cabeça e o tronco alinhados para o vômito escorrer.",
            correta: true,
            feedback: "Correto! O rolamento em bloco preserva o alinhamento da coluna cervical enquanto desobstrui as vias aéreas usando a gravidade para drenar o vômito."
          },
          {
            id: "C",
            texto: "Enfiar os dedos dentro do capacete para tentar limpar a boca.",
            correta: false,
            feedback: "Você não conseguirá limpar fluidos com o dedo em volume suficiente, e corre o risco de ser mordido em um reflexo de engasgo."
          },
          {
            id: "D",
            texto: "Deixá-lo de costas e pedir para ele engolir.",
            correta: false,
            feedback: "Deixá-lo de barriga para cima fará com que o vômito vá para os pulmões (broncoaspiração), o que é fatal."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "A via aérea está limpa. A ambulância do SAMU acaba de chegar. O que você relata à equipe?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "'Ele caiu de moto e está passando mal.' e vai embora.",
            correta: false,
            feedback: "Informação incompleta omite dados críticos que a equipe precisa saber para salvar o membro (horário do torniquete) e a vida."
          },
          {
            id: "B",
            texto: "'Acidente de moto. Sangramento massivo contido com torniquete. Ele vomitou, então rolei em bloco. Nunca perdeu a consciência.'",
            correta: true,
            feedback: "Correto! Um bom socorrista leigo entrega a vítima informando o mecanismo da lesão, as intervenções críticas feitas (como o torniquete) e eventos importantes (vômito)."
          },
          {
            id: "C",
            texto: "'Tirei a carteira dele para pegar os documentos e apliquei band-aids.'",
            correta: false,
            feedback: "Foco nos documentos e não no estado clínico prejudica o tempo de ouro do atendimento."
          },
          {
            id: "D",
            texto: "Não fala nada, pois paramédicos não precisam das informações de leigos.",
            correta: false,
            feedback: "O relato de quem estava na cena desde o início é fundamental para o raciocínio clínico da equipe médica."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_42",
    titulo: "Engasgo Severo em Restaurante",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Você está em um restaurante quando um homem de meia-idade na mesa ao lado se levanta abruptamente. Ele leva as duas mãos ao pescoço, está com o rosto vermelho, olhos arregalados e não consegue tossir, falar ou respirar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual é a sua primeira ação para confirmar a situação?",
        tag_visual_detalhe: "estado_engasgo_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Dar um forte tapa nas costas dele imediatamente, enquanto ele está de frente para você.",
            correta: false,
            feedback: "Tapas nas costas de um adulto em pé sem o devido suporte ou inclinação podem fazer o objeto descer ainda mais pela traqueia."
          },
          {
            id: "B",
            texto: "Perguntar em voz alta: 'Você está engasgado?' e observar se ele faz um sinal positivo com a cabeça.",
            correta: true,
            feedback: "Correto! O sinal universal do engasgo (mãos no pescoço) deve ser confirmado com uma pergunta direta. Se ele não consegue falar, mas acena que sim, trata-se de obstrução total grave."
          },
          {
            id: "C",
            texto: "Oferecer rapidamente um pedaço de pão para empurrar o objeto.",
            correta: false,
            feedback: "Mito muito perigoso. Se a via aérea está obstruída, tentar engolir comida sólida pode piorar drasticamente o bloqueio."
          },
          {
            id: "D",
            texto: "Deitá-lo no chão para fazer respiração boca a boca.",
            correta: false,
            feedback: "Ele está consciente. Você deve usar manobras de desobstrução enquanto ele está em pé, não deitá-lo nem ventilar em uma via bloqueada."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Ele concorda com a cabeça e começa a ficar azulado (cianose). É uma obstrução total. O que você deve fazer?",
        tag_visual_detalhe: "acao_manobra_heimlich",
        opcoes: [
          {
            id: "A",
            texto: "Abraçá-lo por trás, colocar o punho fechado um pouco acima do umbigo e fazer compressões para dentro e para cima (Manobra de Heimlich).",
            correta: true,
            feedback: "Correto! A Manobra de Heimlich empurra o diafragma para cima, criando pressão nos pulmões para expulsar o corpo estranho, como uma tosse artificial."
          },
          {
            id: "B",
            texto: "Abraçá-lo por trás e apertar com força nas costelas inferiores.",
            correta: false,
            feedback: "Comprimir nas costelas pode causar fraturas e perfuração de órgãos internos. A compressão deve ser na região macia do abdômen (boca do estômago)."
          },
          {
            id: "C",
            texto: "Colocar o dedo na garganta dele para tentar puxar a comida.",
            correta: false,
            feedback: "Varredura cega com o dedo em vítima consciente tem alto risco de empurrar o objeto ainda mais fundo, além do risco de você ser mordido."
          },
          {
            id: "D",
            texto: "Pedir que ele levante os dois braços bem alto e pule.",
            correta: false,
            feedback: "Outro mito ineficaz. Levantar os braços não remove bloqueios mecânicos na via aérea respiratória."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "[REVIRAVOLTA] Você percebe que o homem é obeso e seus braços não conseguem envolver o abdômen dele para fazer a manobra clássica.",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Pedir a outra pessoa para bater forte na nuca dele.",
            correta: false,
            feedback: "Bater na nuca pode causar lesões na coluna cervical e não desobstrui vias aéreas."
          },
          {
            id: "B",
            texto: "Desistir e esperar ele desmaiar para tentar algo no chão.",
            correta: false,
            feedback: "O tempo é essencial. Cada segundo consciente sem oxigênio leva à morte cerebral rápida. Você deve adaptar a técnica."
          },
          {
            id: "C",
            texto: "Posicionar as mãos mais para cima, no meio do osso do peito (esterno), e fazer compressões torácicas puxando para trás.",
            correta: true,
            feedback: "Correto! Em gestantes ou pessoas obesas, a adaptação da Manobra de Heimlich são as Compressões Torácicas (abraçando no nível do peito e puxando forte para trás)."
          },
          {
            id: "D",
            texto: "Tentar derrubá-lo de propósito no chão para que o impacto solte o objeto.",
            correta: false,
            feedback: "Derrubar uma pessoa intencionalmente causará traumas secundários graves, como traumatismo craniano."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Apesar dos esforços, ele perde a consciência e fica com o corpo mole (desmaia).",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Apoiá-lo pelo corpo, amparando sua queda de forma segura até o chão de costas.",
            correta: true,
            feedback: "Correto! Como ele perdeu a consciência, o suporte do próprio corpo acaba. Guiá-lo de forma segura até o chão evita um traumatismo craniano na queda."
          },
          {
            id: "B",
            texto: "Deixá-lo cair para que o tranco expulse a carne.",
            correta: false,
            feedback: "O tranco da queda descontrolada é muito mais provável de causar danos cerebrais por impacto no chão do que remover o objeto."
          },
          {
            id: "C",
            texto: "Segurá-lo de pé e continuar as compressões abdominais.",
            correta: false,
            feedback: "É impossível sustentar o peso morto de um adulto obeso em pé e fazer manobras adequadas. Ele precisa ir para uma superfície rígida (chão)."
          },
          {
            id: "D",
            texto: "Sentá-lo em uma cadeira com a cabeça caída para frente.",
            correta: false,
            feedback: "Se ele está inconsciente em parada respiratória, ele precisará de RCP no chão rígido."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Ele está deitado no chão, de costas, inconsciente e não respira. Qual é o protocolo exato agora?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Dar 5 tapas nas costas enquanto ele está deitado.",
            correta: false,
            feedback: "Tapas nas costas em um adulto no chão não geram pressão suficiente."
          },
          {
            id: "B",
            texto: "Fazer a Manobra de Heimlich apertando a barriga dele no chão.",
            correta: false,
            feedback: "A manobra abdominal no chão (astride) caiu em desuso nas diretrizes modernas devido a menor eficácia em relação à RCP e risco de dano visceral."
          },
          {
            id: "C",
            texto: "Pedir para ligarem para o SAMU e iniciar Compressões Torácicas (RCP) imediatamente.",
            correta: true,
            feedback: "Correto! Vítima engasgada que fica inconsciente entra em protocolo de PCR. As compressões torácicas são eficientes tanto para circular sangue quanto para gerar alta pressão torácica e expulsar o objeto."
          },
          {
            id: "D",
            texto: "Fazer apenas respiração boca a boca muito forte para empurrar o objeto até o pulmão.",
            correta: false,
            feedback: "Ventilar contra uma via obstruída é ineficaz e empurrar um pedaço de carne para o pulmão causará atelectasia e infecção severa."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Você inicia as compressões. Antes de dar um sopro (se for treinado), você abre a boca da vítima e vê claramente o pedaço de carne na ponta da garganta.",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Continuar as compressões torácicas e ignorar o objeto.",
            correta: false,
            feedback: "Se o objeto foi expulso até um local visível e acessível, ignorá-lo fará com que a via aérea continue bloqueada e a RCP não reverta o quadro de hipóxia."
          },
          {
            id: "B",
            texto: "Introduzir o dedo indicador em formato de gancho e retirar o objeto visível com cuidado.",
            correta: true,
            feedback: "Correto! A remoção manual só é recomendada quando o objeto está CLARAMENTE VISÍVEL e de fácil alcance (varredura visual, não cega)."
          },
          {
            id: "C",
            texto: "Colocar os dois dedos bem no fundo da garganta de forma cega para puxar tudo que estiver lá.",
            correta: false,
            feedback: "Varredura cega é contraindicada. Você pode empurrar o objeto de volta ou causar ferimentos nos tecidos da garganta."
          },
          {
            id: "D",
            texto: "Soprar a boca dele para garantir que o objeto desça e libere a traqueia.",
            correta: false,
            feedback: "Empurrar para os pulmões não é o objetivo. O objeto deve ser removido."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Você remove a carne. O homem dá um suspiro profundo e começa a respirar sozinho, recuperando gradualmente a consciência.",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Ajudá-lo a levantar rápido para evitar constrangimento no restaurante.",
            correta: false,
            feedback: "Levantar rápido pode causar uma queda de pressão (hipotensão postural) e novo desmaio."
          },
          {
            id: "B",
            texto: "Mantê-lo no chão, em posição confortável (ou de lado), acalmando-o e monitorando até a chegada do SAMU.",
            correta: true,
            feedback: "Correto! Ele sofreu um período de asfixia severa e PCR momentânea. Precisa ser avaliado por médicos para descartar lesões internas e avaliar a oxigenação."
          },
          {
            id: "C",
            texto: "Oferecer um grande copo de água para 'lavar a garganta'.",
            correta: false,
            feedback: "A garganta dele está traumatizada e os reflexos podem estar lentos. Ele corre o risco de broncoaspirar líquidos agora."
          },
          {
            id: "D",
            texto: "Dar tapas vigorosos nas costas e pedir que ele coma o resto do prato devagar.",
            correta: false,
            feedback: "Alimentação está absolutamente proibida após um trauma na via aérea dessa magnitude."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "A ambulância do SAMU chega ao restaurante. Como finalizar este atendimento?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Cancelar a ambulância porque ele já está respirando e conversando.",
            correta: false,
            feedback: "Muitas complicações (como edema de glote tardio por lesão) podem ocorrer. Ele necessita de transporte médico após evoluir para inconsciência."
          },
          {
            id: "B",
            texto: "Entregar o paciente relatando: 'Engasgo total com sólido, evoluiu com inconsciência, fiz compressões, objeto removido e ele retornou espontaneamente'.",
            correta: true,
            feedback: "Correto! O relato descreve perfeitamente a cascata de eventos. A equipe avançada saberá exatamente a gravidade do evento pelo qual a vítima passou."
          },
          {
            id: "C",
            texto: "Sair do restaurante antes do SAMU chegar, para não se envolver.",
            correta: false,
            feedback: "Abandonar a vítima antes da passagem formal de plantão quebra a cadeia de sobrevivência."
          },
          {
            id: "D",
            texto: "Exigir que o restaurante seja interditado pelos paramédicos.",
            correta: false,
            feedback: "O SAMU tem a função de tratar pacientes. Questões sanitárias ou legais não cabem ao escopo médico da emergência."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_43",
    titulo: "Queimadura na Cozinha com Complicações",
    tag_visual_cenario: "cenario_cozinha",
    descricao_inicial: "Você está na sala e ouve um grito vindo da cozinha. Um familiar acidentalmente virou uma panela de óleo quente sobre o braço e peito.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ao entrar na cozinha, qual o primeiro cuidado com a segurança da cena?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Correr e abraçar a vítima para acalmá-la.",
            correta: false,
            feedback: "Você pode se queimar com o óleo ainda quente no corpo ou nas roupas dela."
          },
          {
            id: "B",
            texto: "Garantir que o fogão esteja desligado e observar se o chão está escorregadio com óleo antes de pisar.",
            correta: true,
            feedback: "Correto! A avaliação da cena (Protocolo XABCDE) evita acidentes secundários, como queimaduras térmicas pelo fogão aceso ou escorregar no óleo fervente."
          },
          {
            id: "C",
            texto: "Pegar o celular para gravar a queimadura para o médico ver depois.",
            correta: false,
            feedback: "A perda de tempo tira o foco de interromper o processo de queimadura."
          },
          {
            id: "D",
            texto: "Jogar farinha na vítima para absorver o óleo.",
            correta: false,
            feedback: "Mito. Pós (farinha, pó de café, etc) grudam na ferida, aumentam o risco de infecção e dificultam a limpeza no hospital."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está segura. A vítima chora de dor. O braço e o peito estão intensamente vermelhos com algumas bolhas se formando (Queimadura de 2º Grau). O que fazer imediatamente?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Estourar as bolhas para aliviar a pressão da pele.",
            correta: false,
            feedback: "Nunca estoure bolhas de queimadura. Elas são um curativo natural do corpo (estéreis). Estourá-las expõe a pele à infecção."
          },
          {
            id: "B",
            texto: "Aplicar gelo diretamente sobre a queimadura.",
            correta: false,
            feedback: "Gelo direto causa queimadura por frio (criogenia), agravando ainda mais a lesão dos tecidos."
          },
          {
            id: "C",
            texto: "Colocar a área afetada em água corrente fria (temperatura ambiente) por cerca de 15 a 20 minutos.",
            correta: true,
            feedback: "Correto! O resfriamento imediato com água corrente interrompe a ação térmica do calor, alivia a dor e diminui a profundidade da lesão."
          },
          {
            id: "D",
            texto: "Passar clara de ovo e pasta de dente para refrescar.",
            correta: false,
            feedback: "Mitos comuns. Substâncias caseiras retêm calor, irritam o local, favorecem bactérias e obrigam a equipe médica a esfregar o ferimento dolorosamente para limpar depois."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "[REVIRAVOLTA] Durante o resfriamento no chuveiro/pia, a vítima começa a hiperventilar por dor e pânico. De repente, ela desmaia, cai e bate a cabeça com força no chão.",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Avaliar imediatamente a responsividade e a respiração, tratando o choque/desmaio como nova prioridade.",
            correta: true,
            feedback: "Correto! Quando ocorre uma mudança brusca no nível de consciência e potencial trauma craniano, a prioridade máxima passa a ser o ABCD (Vias aéreas, Respiração, Circulação) sobre a queimadura local."
          },
          {
            id: "B",
            texto: "Ignorar a queda e continuar jogando água na queimadura.",
            correta: false,
            feedback: "A queimadura já foi interrompida. A perda de consciência e o trauma na cabeça representam um risco de vida muito mais alto e imediato."
          },
          {
            id: "C",
            texto: "Jogar água gelada no rosto dela para acordá-la.",
            correta: false,
            feedback: "Desmaios exigem avaliação das vias aéreas. Água no rosto de quem está inconsciente pode ser aspirada para o pulmão."
          },
          {
            id: "D",
            texto: "Bater no rosto dela para que acorde rápido.",
            correta: false,
            feedback: "Agressão e estímulos dolorosos abruptos são ineficazes e incorretos na avaliação de vítima inconsciente."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você percebe que ela está inconsciente, mas está respirando (peito sobe e desce normalmente). Há um inchaço na cabeça onde bateu.",
        tag_visual_detalhe: "acao_estabilizacao_cervical",
        opcoes: [
          {
            id: "A",
            texto: "Puxá-la pelo braço queimado até a cama.",
            correta: false,
            feedback: "Puxar pelo braço agravará a queimadura, e movimentar uma vítima com suspeita de trauma craniano pode causar lesão medular."
          },
          {
            id: "B",
            texto: "Manter a vítima deitada onde está, ajoelhar atrás da cabeça dela e segurá-la firmemente com as duas mãos, impedindo movimentos do pescoço.",
            correta: true,
            feedback: "Correto! Toda vítima que perde a consciência devido a um trauma (queda da própria altura bateu a cabeça) tem suspeita de lesão na coluna cervical. A estabilização manual da cabeça é crucial."
          },
          {
            id: "C",
            texto: "Colocar um travesseiro alto debaixo do pescoço dela.",
            correta: false,
            feedback: "Elevar o pescoço flexiona a coluna, o que pode agravar uma lesão cervical invisível ou fechar as vias aéreas dela."
          },
          {
            id: "D",
            texto: "Levantar as pernas dela o mais alto possível.",
            correta: false,
            feedback: "Elevação das pernas é útil em choque leve sem trauma. Com trauma craniano, isso pode aumentar a pressão dentro do crânio."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Você está segurando a cabeça dela. Precisa acionar o socorro.",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Ligar 192 (SAMU) e focar a chamada apenas na queimadura por óleo.",
            correta: false,
            feedback: "A informação incompleta fará o SAMU subestimar a gravidade da ocorrência. O trauma e a inconsciência são mais graves."
          },
          {
            id: "B",
            texto: "Ligar para 192 e relatar: 'Vítima com queimadura extensa, que desmaiou e sofreu queda com trauma na cabeça, mas respira'.",
            correta: true,
            feedback: "Correto! Informar todos os mecanismos de lesão e o status vital (inconsciente, porém respirando) permite ao atendente enviar a ambulância de suporte avançado (UTI móvel)."
          },
          {
            id: "C",
            texto: "Ligar para um parente vir de carro buscar.",
            correta: false,
            feedback: "Transporte leigo de vítima com trauma craniano e inconsciente é altamente desaconselhado. Ela requer maca imobilizadora e colar cervical."
          },
          {
            id: "D",
            texto: "Esperar ela acordar para decidir se liga.",
            correta: false,
            feedback: "A inconsciência após trauma na cabeça é uma emergência neurológica (possível hemorragia cerebral). O tempo é crítico."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Enquanto você estabiliza a cabeça da vítima no chão da cozinha, a queimadura continua exposta e dolorosa.",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Enrolar o braço queimado apertado com ataduras ou fita adesiva.",
            correta: false,
            feedback: "Compressão apertada em queimadura causa isquemia (falta de sangue) e gruda na pele descamada."
          },
          {
            id: "B",
            texto: "Deixar o braço completamente descoberto, pegando a sujeira do chão.",
            correta: false,
            feedback: "Pele queimada perde sua barreira contra bactérias. A exposição ao chão da cozinha favorece infecção generalizada."
          },
          {
            id: "C",
            texto: "Cobrir a área queimada frouxamente com um pano limpo que não solte fiapos, compressas estéreis ou plástico filme.",
            correta: true,
            feedback: "Correto! Cobrir frouxamente (com curativo limpo e seco ou filme de PVC) isola a lesão de germes do ambiente e diminui a dor ao bloquear o contato das terminações nervosas com o vento."
          },
          {
            id: "D",
            texto: "Passar álcool sobre as bolhas para desinfetar antes do SAMU chegar.",
            correta: false,
            feedback: "Álcool em ferida aberta causa dor insuportável e destruição celular adicional (queimadura química)."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "[REVIRAVOLTA 2] A vítima, ainda inconsciente e deitada de costas (decúbito dorsal), começa a emitir sons de vômito. O líquido começa a borbulhar na boca.",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Ignorar o vômito, pois a prioridade é manter o pescoço dela reto e imóvel.",
            correta: false,
            feedback: "De nada adianta uma coluna cervical intacta se a vítima morrer asfixiada (broncoaspirando) o próprio vômito."
          },
          {
            id: "B",
            texto: "Fazer uma varredura com os dedos profundamente na garganta dela.",
            correta: false,
            feedback: "Tentar limpar o vômito com os dedos é ineficiente em fase ativa, e empurrará o conteúdo em direção aos pulmões."
          },
          {
            id: "C",
            texto: "Virar cuidadosamente o corpo inteiro da vítima de lado (Rolamento em Bloco), protegendo a via aérea ao deixar o vômito escorrer pela gravidade.",
            correta: true,
            feedback: "Correto! O rolamento em bloco (girar ombro, quadril e cabeça em sincronia) é a técnica indicada no trauma para limpar a via aérea mantendo o alinhamento da coluna na medida do possível."
          },
          {
            id: "D",
            texto: "Levantar e sentar a vítima, dobrando a barriga.",
            correta: false,
            feedback: "Sentar a vítima dobra a coluna e comprime a barriga, forçando ainda mais vômito e colocando em risco a medula devido ao trauma na cabeça."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Ela terminou de vomitar. A respiração está mais limpa, mas ela continua lateralizada e inconsciente.",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Virar as costas e ir lavar as mãos.",
            correta: false,
            feedback: "Nunca perca o contato visual e a avaliação de uma vítima inconsciente. O quadro clínico pode piorar para parada cardíaca."
          },
          {
            id: "B",
            texto: "Manter a vítima em Posição Lateral de Segurança (PLS) modificada, continuar estabilizando o pescoço e monitorar a respiração contínua.",
            correta: true,
            feedback: "Correto! Após o vômito, a via aérea está segura na posição lateral. A manutenção do monitoramento previne que eventuais agravos (PCR) passem despercebidos."
          },
          {
            id: "C",
            texto: "Dar tapinhas nas costas para garantir que tudo desceu.",
            correta: false,
            feedback: "Desnecessário e pode gerar movimentação brusca em uma vítima imobilizada."
          },
          {
            id: "D",
            texto: "Jogar água na boca para tirar o gosto de vômito.",
            correta: false,
            feedback: "Vítima inconsciente jamais deve receber líquidos na boca, pois o reflexo de deglutição está ausente."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "O SAMU chega com a equipe completa.",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Dizer apenas: 'Ela vomitou'.",
            correta: false,
            feedback: "Omitir os fatos anteriores prejudica o protocolo da equipe, pois há um trauma não relatado."
          },
          {
            id: "B",
            texto: "Relatar: 'Queimadura com óleo resfriada. Queda com trauma craniano, inconsciente mas respirando. Rolada em bloco para desobstrução por vômito.'",
            correta: true,
            feedback: "Correto! Síntese perfeita. Em poucas palavras você entrega as lesões críticas (queimadura e TCE), intervenções feitas e o estado vital. Transição de cuidados de excelência."
          },
          {
            id: "C",
            texto: "Pedir que eles passem pomada na queimadura primeiro.",
            correta: false,
            feedback: "A equipe focará primeiro na prancha rígida e proteção da coluna cervical / suporte neurológico devido ao traumatismo."
          },
          {
            id: "D",
            texto: "Deixar o local sem passar informações.",
            correta: false,
            feedback: "Ausência de histórico do trauma é perigoso para o diagnóstico médico hospitalar da vítima."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_44",
    titulo: "Queda de Árvore em Parque (Múltiplas Vítimas)",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Durante um forte vendaval no parque, um grande galho de árvore se desprende e cai violentamente sobre duas pessoas que faziam piquenique.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você é o primeiro a chegar. Qual sua primeira atitude instintiva e técnica?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Correr imediatamente para baixo da árvore e levantar o galho para salvar as vítimas.",
            correta: false,
            feedback: "Ação heróica mas incorreta (Visão em Túnel). O vento continua forte. Você não olhou para cima."
          },
          {
            id: "B",
            texto: "Parar, olhar para cima avaliando o risco de outros galhos caírem, e garantir que a cena é segura antes de se aproximar.",
            correta: true,
            feedback: "Correto! Na avaliação primária da cena em ambientes externos severos, a segurança do socorrista (olhar para os riscos em 360º e para o alto) é o que impede que você seja a terceira vítima."
          },
          {
            id: "C",
            texto: "Pegar o telefone e iniciar uma gravação para ter registro da tempestade e do acidente.",
            correta: false,
            feedback: "Uma violação da prioridade de preservação da vida. Tempo perdido."
          },
          {
            id: "D",
            texto: "Gritar de longe ordenando que as vítimas se levantem.",
            correta: false,
            feedback: "Eles sofreram esmagamento e podem ter lesões de coluna. Levantar-se não deve ser a conduta primária."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está segura no momento. Você se aproxima para a Triagem. Vítima A está gritando e segurando o braço que jorra sangue pulsante. Vítima B está completamente quieta, olhos fechados, debaixo do peso da folhagem.",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Atender a Vítima B primeiro, porque ela está quieta e quem não grita está pior.",
            correta: false,
            feedback: "Embora B esteja grave (potencial PCR), a Vítima A possui uma Hemorragia Arterial Exsanguinante que a matará em menos de 2 minutos se você agir sozinho."
          },
          {
            id: "B",
            texto: "Atender a Vítima A, aplicando pressão ou torniquete, pois uma hemorragia massiva é a prioridade 'X' em traumas severos com risco rápido e iminente de morte evitável.",
            correta: true,
            feedback: "Correto! O protocolo XABCDE coloca a Exsanguinação no topo da pirâmide do trauma. Vítima A tem uma lesão altamente letal, mas facilmente reversível."
          },
          {
            id: "C",
            texto: "Atender a que estiver mais perto de você fisicamente.",
            correta: false,
            feedback: "Em situações de múltiplas vítimas, a escolha de quem atender primeiro baseia-se na gravidade letal e reversibilidade, não na conveniência da distância."
          },
          {
            id: "D",
            texto: "Sentar no meio das duas vítimas e ligar para 192, sem tocar em ninguém até eles chegarem.",
            correta: false,
            feedback: "As vítimas sangrando muito morrerão antes do SAMU chegar se não houver intervenção imediata de suporte básico (torniquete/compressão)."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você foca na Vítima A (braço esguichando sangue). A multidão começa a cercar.",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Fazer um curativo leve no braço da Vítima A com um guardanapo.",
            correta: false,
            feedback: "Um curativo leve será encharcado e não conterá uma hemorragia arterial."
          },
          {
            id: "B",
            texto: "Fazer um torniquete improvisado usando um tecido largo e uma haste rígida (como um pedaço de madeira) para torcer até parar o sangramento, enquanto ordena a um pedestre: 'Você da camisa azul, ligue 192 e traga um DEA!",
            correta: true,
            feedback: "Correto! Além de tratar a hemorragia massiva de A rigorosamente (torniquete), a delegação direta de comandos a pedestres garante o fluxo logístico do socorro enquanto você tem as mãos ocupadas."
          },
          {
            id: "C",
            texto: "Gritar de forma genérica 'Alguém me ajude!', e continuar pressionando a ferida da Vítima A fracamente.",
            correta: false,
            feedback: "Pedidos genéricos ativam o 'efeito espectador', onde todos acham que o outro vai agir, e ninguém age."
          },
          {
            id: "D",
            texto: "Amarrar o braço dela frouxamente para não machucar e ir para a Vítima B.",
            correta: false,
            feedback: "Torniquetes frouxos são armadilhas: eles impedem o retorno venoso, mas não fecham as artérias, acelerando a perda de sangue."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "O sangramento da Vítima A está sob controle (ela está alerta e pálida). Você move-se rápido para a Vítima B. Ela está inconsciente, não responde a toques no ombro.",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Buscar o pulso no pescoço de B e conferir minuciosamente por vários minutos.",
            correta: false,
            feedback: "O leigo não deve perder tempo checando o pulso, pois é frequente errar a avaliação sob estresse."
          },
          {
            id: "B",
            texto: "Elevar o queixo de B para desobstruir a via aérea.",
            correta: false,
            feedback: "Em vítima de trauma (galho de árvore), a elevação do queixo e hiperextensão da cabeça podem romper a medula. Manobras de vias aéreas seriam Jaw-Thrust (apenas socorristas treinados)."
          },
          {
            id: "C",
            texto: "Olhar para o peito da Vítima B e observar se há movimento respiratório por até 10 segundos.",
            correta: true,
            feedback: "Correto! A avaliação visual rápida da expansão torácica por até 10 segundos é o padrão para leigos determinarem se a vítima está em PCR ou apenas desmaiada."
          },
          {
            id: "D",
            texto: "Bater nas costas da Vítima B forte para ela respirar.",
            correta: false,
            feedback: "Bater nas costas agravará lesões traumáticas ocultas e não ativa o sistema respiratório em caso de PCR."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "A Vítima B não tem movimentos no peito (não respira, caracterizando Parada Cardiorrespiratória - PCR).",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Aplicar respiração boca a boca repetidamente.",
            correta: false,
            feedback: "Isoladamente, não circula o sangue."
          },
          {
            id: "B",
            texto: "Ficar esperando o SAMU chegar para não piorar uma fratura de costela.",
            correta: false,
            feedback: "O risco de morte por PCR é 100% caso não haja compressões. Fraturas de costela (embora indesejáveis) são secundárias ao ato de salvar a vida de alguém já clinicamente morto."
          },
          {
            id: "C",
            texto: "Posicionar as duas mãos no centro do peito (esterno) e iniciar compressões torácicas fortes (mínimo 5 cm de profundidade) e rápidas (100-120 por minuto).",
            correta: true,
            feedback: "Correto! Em PCR (vítima inconsciente e não respira normalmente), a prioridade absoluta é RCP Apenas com as Mãos contínua."
          },
          {
            id: "D",
            texto: "Desistir, já que vítimas de trauma não sobrevivem a paradas cardíacas.",
            correta: false,
            feedback: "Falso. Parada por esmagamento (trauma) é crítica, mas a tentativa de RCP ainda é obrigatória, especialmente com chegada em breve de DEA e socorro."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "[REVIRAVOLTA] Enquanto você comprime o peito da Vítima B, um familiar da Vítima A se desespera e tenta arrancar o torniquete improvisado dela gritando que 'vai necrosar o braço!'.",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Parar de fazer massagem cardíaca em B para brigar fisicamente com o familiar de A.",
            correta: false,
            feedback: "A Vítima B precisa do seu fluxo contínuo de compressões para ter chance cerebral. Brigar consome tempo vital."
          },
          {
            id: "B",
            texto: "Continuar as compressões torácicas em B, mas gritar uma ordem firme e assertiva para o familiar e para a multidão: 'Não mexa! Se tirar, ela sangra até a morte!'",
            correta: true,
            feedback: "Correto! O socorrista deve usar Liderança Verbal para gerenciar a cena e instruir os leigos, impedindo atitudes iatrogênicas (que causam dano), sem abandonar a intervenção crítica de RCP."
          },
          {
            id: "C",
            texto: "Concordar com o familiar e mandar ele retirar o torniquete e botar um paninho.",
            correta: false,
            feedback: "Torniquetes são seguros por até 2 horas. A retirada causará ressangramento letal instantâneo, e em 2 minutos Vítima A também entrará em PCR por choque hipovolêmico."
          },
          {
            id: "D",
            texto: "Deixar o familiar retirar o torniquete, já que A parou de sangrar.",
            correta: false,
            feedback: "Parou porque há um torniquete estancando a pressão arterial. Retirar o bloqueio mecânico reativará a hemorragia."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "A Liderança Verbal funcionou, o torniquete em A foi mantido. O pedestre da camisa azul volta correndo, com um aparelho DEA na mão. Você continua as compressões em B.",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Dizer ao pedestre: 'Ligue o aparelho e siga os comandos de voz, cole os adesivos no peito nu da vítima agora mesmo!'",
            correta: true,
            feedback: "Correto! O uso precoce do DEA e a delegação simultânea otimizam o tempo. O próprio leigo consegue operar se você instruir que basta ligar e ouvir o equipamento."
          },
          {
            id: "B",
            texto: "Dizer ao pedestre para guardar o aparelho, pois o DEA não serve para vítimas de trauma.",
            correta: false,
            feedback: "Toda PCR (independentemente se clínica ou traumática) possui indicação imediata da colocação do DEA para análise de ritmo chocável."
          },
          {
            id: "C",
            texto: "Parar a massagem imediatamente, cruzar os braços e olhar o pedestre ler o manual de instruções.",
            correta: false,
            feedback: "Interrupções nas compressões reduzem a pressão de perfusão coronariana. Só pare quando o DEA for analisar o ritmo."
          },
          {
            id: "D",
            texto: "Colocar os adesivos do DEA na Vítima A (que está sangrando e consciente) para prevenir que ela tenha um infarto.",
            correta: false,
            feedback: "O DEA apenas é utilizado em pessoas irresponsivas e sem respiração normal."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "[REVIRAVOLTA 2] O DEA está analisando o ritmo da Vítima B ('Afastem-se do paciente'). Neste exato momento, a Vítima A (que estava acordada e pálida) começa a ter convulsões fortes devido ao choque hemorrágico extremo.",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Desligar o DEA da Vítima B e correr para colocar os dedos na boca da Vítima A para ela não enrolar a língua.",
            correta: false,
            feedback: "Mito fatal 2 vezes: Ninguém engole a língua (colocar o dedo pode gerar mutilação) e você desligou um suporte de vida que ia dar um choque na Vítima B."
          },
          {
            id: "B",
            texto: "Ignorar o comando do DEA e abraçar a Vítima B para chorar.",
            correta: false,
            feedback: "Conduta irracional e perigosa. Você tomará o choque do aparelho."
          },
          {
            id: "C",
            texto: "Permitir que o DEA complete a análise/choque em B, e comandar a um pedestre: 'Segure um casaco embaixo da cabeça da Vítima A e não tente segurá-la à força!'",
            correta: true,
            feedback: "Correto! Na convulsão, a proteção cefálica passiva e proteção do ambiente (afastar objetos contundentes) é a conduta correta. Além de manter a atenção na prioridade atual (desfibrilação de B)."
          },
          {
            id: "D",
            texto: "Gritar para todos jogarem água em A e desligar o DEA.",
            correta: false,
            feedback: "Jogar água na face de alguém com crise convulsiva agrava o risco de aspiração de líquido pelos pulmões."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "O DEA avisa: 'Choque recomendado. Pressione o botão que pisca'.",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Você aperta o botão (choque administrado), e logo depois checa o pulso de B e aguarda.",
            correta: false,
            feedback: "Após qualquer choque do DEA, não se procura o pulso. Inicia-se a massagem torácica de imediato."
          },
          {
            id: "B",
            texto: "Você se certifica de que ninguém toca em B, aperta o botão de choque e imediantamente reinicia as compressões torácicas.",
            correta: true,
            feedback: "Correto! O protocolo dita: Análise -> Afastamento -> Choque -> Retorno Imediato às Compressões por mais 2 minutos, antes da próxima análise do DEA."
          },
          {
            id: "C",
            texto: "Você aperta o botão e joga água em B para esfriar o corpo.",
            correta: false,
            feedback: "Isso anularia as avaliações seguintes do DEA e pioraria eventuais choques em pessoas ao redor."
          },
          {
            id: "D",
            texto: "Se recusa a apertar, achando que o trauma elétrico pode matá-la.",
            correta: false,
            feedback: "A Vítima B está clinicamente morta (PCR). A Fibrilação Ventricular necessita do choque para resetar o eixo elétrico cardíaco."
          }
        ]
      },
      {
        id: "etapa_10",
        pergunta: "A crise convulsiva de A terminou. Você está massageando B. As viaturas do SAMU e Bombeiros chegam ao local em grande quantidade (Múltiplas Vítimas - Sistema de Comando).",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Gritar desesperadamente que 'tá tudo um caos' e sair correndo da cena sem se identificar.",
            correta: false,
            feedback: "A falta de informações ordenadas atraseá o médico na distribuição e regulação da triagem de Múltiplas Vítimas."
          },
          {
            id: "B",
            texto: "Deixar eles avaliarem tudo sozinhos do zero.",
            correta: false,
            feedback: "Em um cenário de Múltiplas Vítimas, o relato conciso de quem prestou primeiros socorros acelera a lógica do método START usado pelas equipes."
          },
          {
            id: "C",
            texto: "Levantar os braços, apresentar-se ao comandante médico e relatar o panorama global de forma rápida e sucinta: 'Duas vítimas de trauma. Vítima A viva, torniquete aplicado no braço, teve episódio de convulsão recém-findado. Vítima B sem respiração, em RCP, um choque do DEA efetuado.'",
            correta: true,
            feedback: "Correto! Passagem de plantão primorosa. Resumo global logístico: define a quantidade de vítimas e os fatos e agravos críticos para o médico comandar as prioridades VERMELHA (Triagem START) de ambas."
          },
          {
            id: "D",
            texto: "Começar a exigir que a Vítima A seja levada primeiro por ter sangrado mais, ditando regras ao médico.",
            correta: false,
            feedback: "A equipe de Suporte Avançado fará a Triagem Médica de Prioridade. Sua função de Leigo é entregar o relato dos fatos e não demandar a hierarquia de transporte."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_45",
    titulo: "Atropelamento com Parada Cardiorrespiratória",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você presencia um carro atingir um pedestre em uma avenida movimentada. A vítima é um homem jovem, arremessado a 3 metros. O motorista está em choque dentro do carro e outros carros continuam passando em alta velocidade.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Os carros continuam passando e a vítima está no meio da pista. Qual sua primeira atitude?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr até a vítima para verificar o pulso imediatamente.",
            correta: false,
            feedback: "Segurança em primeiro lugar. Você não pode ajudar se for atropelado também. O protocolo PHTLS e o Manual do CBMMG priorizam a segurança da cena."
          },
          {
            id: "B",
            texto: "Sinalizar a via com o triângulo do seu carro, pisca-alerta e galhos, se necessário, antes de acessar a vítima.",
            correta: true,
            feedback: "Correto! A sinalização protege você, a vítima e os outros motoristas, criando uma área segura para o atendimento."
          },
          {
            id: "C",
            texto: "Gritar para o motorista do carro que atropelou sair do veículo e ajudar.",
            correta: false,
            feedback: "O motorista pode estar confuso ou ferido. Primeiro, garanta que a cena não gere novas vítimas."
          },
          {
            id: "D",
            texto: "Tentar arrastar a vítima para a calçada rapidamente.",
            correta: false,
            feedback: "Movimentar uma vítima de trauma sem estabilização pode agravar lesões na coluna cervical. Só faça isso se houver risco iminente de explosão ou novo atropelamento inevitável."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Cena segura. Você se aproxima e a vítima está imóvel. Como avaliar a consciência e respiração?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Sacudir a cabeça da vítima para ver se ela acorda.",
            correta: false,
            feedback: "Nunca sacuda a cabeça, especialmente em traumas, pelo risco de lesão cervical."
          },
          {
            id: "B",
            texto: "Jogar água no rosto da vítima e observar se ela reage.",
            correta: false,
            feedback: "Mito perigoso. Isso pode causar aspiração de líquido e não serve como teste de consciência."
          },
          {
            id: "C",
            texto: "Tocar nos ombros, chamar em voz alta e observar o movimento do tórax por até 10 segundos.",
            correta: true,
            feedback: "Correto. Segundo a AHA e o protocolo SAMU, para leigos, a ausência de resposta e de respiração normal define a necessidade de RCP."
          },
          {
            id: "D",
            texto: "Procurar por documentos na carteira da vítima para saber quem chamar.",
            correta: false,
            feedback: "A prioridade é a vida. Identificação vem depois da estabilização e do acionamento do socorro."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "A vítima não responde e não respira. Você percebe uma hemorragia intensa vindo da perna. Qual a prioridade?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Iniciar massagem cardíaca imediatamente.",
            correta: false,
            feedback: "No trauma (PHTLS), o 'X' (hemorragia exsanguinante) vem antes do 'C' (circulação/RCP). Se o sangue sair todo, a massagem não terá o que bombear."
          },
          {
            id: "B",
            texto: "Fazer um curativo frouxo com um lenço.",
            correta: false,
            feedback: "Um curativo frouxo não estanca uma hemorragia grave. É necessária compressão direta ou torniquete."
          },
          {
            id: "C",
            texto: "Aplicar compressão direta sobre o ferimento sangrento e pedir para alguém ligar 192/193.",
            correta: true,
            feedback: "Excelente. Você controla a perda de sangue enquanto ativa a corrente de sobrevivência."
          },
          {
            id: "D",
            texto: "Dar água para a vítima elevar a pressão.",
            correta: false,
            feedback: "Nunca dê líquidos a vítimas inconscientes ou com trauma grave. Risco de engasgo e necessidade de cirurgia futura."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "O sangramento parece controlado, mas a vítima continua sem respirar. O que fazer agora?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Iniciar compressões torácicas rítmicas e fortes no centro do peito.",
            correta: true,
            feedback: "Correto. Sem respiração e sem consciência, iniciamos o SBV. 100 a 120 compressões por minuto."
          },
          {
            id: "B",
            texto: "Esperar a ambulância chegar, pois você já estancou o sangue.",
            correta: false,
            feedback: "A morte cerebral ocorre em poucos minutos sem oxigenação. A RCP é vital."
          },
          {
            id: "C",
            texto: "Fazer apenas respiração boca a boca.",
            correta: false,
            feedback: "Diretrizes atuais da AHA para leigos priorizam compressões ('Hands-only CPR'). A respiração boca a boca é opcional e secundária."
          },
          {
            id: "D",
            texto: "Tentar colocar a vítima em uma cadeira.",
            correta: false,
            feedback: "Vítimas em PCR devem ser atendidas em superfície rígida e plana."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA: Um curioso se aproxima e tenta colocar um pedaço de madeira na boca da vítima para ela 'não enrolar a língua'. Como reagir?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Deixar, pois ele parece saber o que está fazendo.",
            correta: false,
            feedback: "Isso é um mito perigoso que causa lesões na boca e obstrui as vias aéreas."
          },
          {
            id: "B",
            texto: "Pedir educadamente para ele se afastar e explicar que isso obstrui a respiração, mantendo a RCP.",
            correta: true,
            feedback: "Gestão de cena é essencial. Mantenha o protocolo correto e evite intervenções prejudiciais de terceiros."
          },
          {
            id: "C",
            texto: "Parar a RCP e discutir com o curioso.",
            correta: false,
            feedback: "Nunca interrompa as compressões por mais de 10 segundos. A vida da vítima depende da continuidade."
          },
          {
            id: "D",
            texto: "Pedir para ele ajudar na massagem cardíaca colocando a madeira.",
            correta: false,
            feedback: "A madeira não tem utilidade na RCP e só atrapalharia."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Você está cansado. Um pedestre traz um Desfibrilador Externo Automático (DEA) de um estabelecimento próximo. Qual a ação?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Continuar a RCP e ignorar o DEA, pois ele é só para médicos.",
            correta: false,
            feedback: "O DEA foi feito para leigos! Ele aumenta drasticamente as chances de sobrevivência."
          },
          {
            id: "B",
            texto: "Ligar o aparelho imediatamente e seguir as instruções de voz.",
            correta: true,
            feedback: "Isso mesmo! Assim que o DEA chega, ele é a prioridade. Ele guiará todo o processo."
          },
          {
            id: "C",
            texto: "Esperar o SAMU chegar para ligar o DEA.",
            correta: false,
            feedback: "Cada minuto de atraso no choque reduz a chance de sobrevivência em 7% a 10%."
          },
          {
            id: "D",
            texto: "Tentar abrir o peito da vítima com uma faca para colocar os eletrodos dentro.",
            correta: false,
            feedback: "Absurdo. Os eletrodos são adesivos e colados sobre a pele limpa e seca."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "O DEA diz: 'NÃO TOQUE NO PACIENTE, ANALISANDO RITMO'. O que você faz?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Continua as compressões com mais força.",
            correta: false,
            feedback: "Se você tocar no paciente, o DEA lerá o seu batimento ou a vibração da massagem, impedindo a análise correta."
          },
          {
            id: "B",
            texto: "Afasta as mãos e garante que ninguém esteja tocando na vítima.",
            correta: true,
            feedback: "Perfeito. Segurança é fundamental para a análise e para o choque."
          },
          {
            id: "C",
            texto: "Desliga o aparelho para economizar bateria.",
            correta: false,
            feedback: "Nunca desligue o DEA durante o atendimento."
          },
          {
            id: "D",
            texto: "Aproveita para dar água para a vítima.",
            correta: false,
            feedback: "Vítima em PCR não bebe água. Mantenha o foco no protocolo."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "O DEA disparou o choque e mandou retomar a RCP. Após alguns ciclos, a vítima começa a tossir e se mexer. Qual o próximo passo?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Dar um tapinha nas costas e mandar ela levantar.",
            correta: false,
            feedback: "A vítima acabou de sofrer um trauma e uma PCR. Ela deve permanecer imóvel."
          },
          {
            id: "B",
            texto: "Cessar compressões, monitorar a respiração e manter o DEA ligado.",
            correta: true,
            feedback: "Correto. Se a vítima recobrou a consciência, paramos a RCP, mas mantemos os eletrodos do DEA, pois ela pode parar novamente."
          },
          {
            id: "C",
            texto: "Retirar os adesivos do DEA para não gastar o adesivo.",
            correta: false,
            feedback: "Os adesivos devem ficar até o socorro especializado chegar. Eles são de uso único."
          },
          {
            id: "D",
            texto: "Virar a vítima de bruços para ela não engasgar.",
            correta: false,
            feedback: "Em caso de trauma, a movimentação deve ser mínima. Se houver vômito, vira-se em bloco preservando a coluna (técnica avançada)."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "O SAMU chega ao local com a sirene ligada. Como deve ser o desfecho da sua atuação?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Sair correndo, pois seu trabalho acabou e você está atrasado.",
            correta: false,
            feedback: "A passagem de informações é crucial para a continuidade do cuidado médico."
          },
          {
            id: "B",
            texto: "Continuar fazendo massagem mesmo com os paramédicos ao lado.",
            correta: false,
            feedback: "Assim que a equipe chega, você deve ceder espaço para o suporte avançado."
          },
          {
            id: "C",
            texto: "Informar o tempo de PCR, que usou o DEA e que houve controle de hemorragia na perna.",
            correta: true,
            feedback: "Exato! Esse é o desfecho ideal. Você entrega o 'bastão' com informações preciosas que salvam vidas."
          },
          {
            id: "D",
            texto: "Pedir para os paramédicos darem uma carona para você.",
            correta: false,
            feedback: "O foco da ambulância é o transporte e cuidado da vítima."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_46",
    titulo: "Choque Anafilático no Parque",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Uma mulher de aproximadamente 30 anos estava fazendo um piquenique quando foi picada por uma vespa. Em menos de 2 minutos, ela apresenta inchaço no rosto, manchas vermelhas pelo corpo e dificuldade extrema para respirar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A vítima está ofegante e apavorada. Qual a primeira ação após garantir a segurança?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Tentar sugar o veneno com a boca.",
            correta: false,
            feedback: "Mito. Isso não funciona e pode causar infecções ou envenenamento em você."
          },
          {
            id: "B",
            texto: "Ligar para o 192/193 e informar suspeita de reação alérgica grave (anafilaxia).",
            correta: true,
            feedback: "Anafilaxia é uma emergência de tempo-dependente. O socorro avançado precisa de adrenalina."
          },
          {
            id: "C",
            texto: "Oferecer um copo de leite para 'cortar' o efeito do veneno.",
            correta: false,
            feedback: "Mito. Alimentos ou líquidos podem agravar a situação ou causar engasgo."
          },
          {
            id: "D",
            texto: "Mandar a vítima correr para o hospital mais próximo.",
            correta: false,
            feedback: "O esforço físico acelera a circulação do alérgeno e piora a falta de ar."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A vítima diz que tem uma 'caneta' na bolsa, mas está ficando muito fraca para usar. O que você faz?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Pegar o auto-injetor de epinefrina (adrenalina) e ajudar a vítima a aplicar na face externa da coxa.",
            correta: true,
            feedback: "AHA 2025: O uso precoce da epinefrina por leigos treinados ou auxiliando a vítima é a conduta que salva na anafilaxia."
          },
          {
            id: "B",
            texto: "Guardar a caneta para entregar ao médico do hospital.",
            correta: false,
            feedback: "Se não usar agora, a vítima pode ter uma parada respiratória em minutos."
          },
          {
            id: "C",
            texto: "Tentar injetar a caneta no braço da vítima.",
            correta: false,
            feedback: "O local correto e seguro para auto-injetores é a coxa (vasto lateral)."
          },
          {
            id: "D",
            texto: "Esperar a vítima desmaiar para usar a medicação.",
            correta: false,
            feedback: "A medicação deve ser usada aos primeiros sinais de gravidade (dificuldade respiratória)."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: Um transeunte diz que ela está apenas tendo um ataque de pânico e tenta dar um calmante em comprimido para ela. O que fazer?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Deixar ela tomar o comprimido para relaxar.",
            correta: false,
            feedback: "Vítimas com dificuldade respiratória nunca devem ingerir nada via oral. Risco de morte por asfixia."
          },
          {
            id: "B",
            texto: "Impedir a ingestão, explicando que os sinais (manchas e inchaço) indicam alergia grave.",
            correta: true,
            feedback: "Sua função é proteger a vítima de condutas erradas enquanto o socorro não chega."
          },
          {
            id: "C",
            texto: "Pedir para o transeunte ir buscar água para o comprimido.",
            correta: false,
            feedback: "Isso atrasaria o atendimento correto e colocaria a vítima em risco."
          },
          {
            id: "D",
            texto: "Ignorar e começar a fazer massagem cardíaca.",
            correta: false,
            feedback: "A vítima ainda está consciente e respirando (mesmo com dificuldade). RCP não é indicada aqui."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "A vítima começa a ficar muito pálida, com suor frio e sente que vai desmaiar (sinais de choque). Qual a melhor posição?",
        tag_visual_detalhe: "acao_elevacao_pernas",
        opcoes: [
          {
            id: "A",
            texto: "Sentada com a cabeça entre as pernas.",
            correta: false,
            feedback: "Essa posição pode dificultar a respiração em casos de anafilaxia."
          },
          {
            id: "B",
            texto: "Deitada de costas com as pernas elevadas (se não houver dificuldade respiratória grave).",
            correta: true,
            feedback: "Ajuda no retorno venoso para o coração e cérebro em estados de choque."
          },
          {
            id: "C",
            texto: "Em pé, caminhando para o sangue circular.",
            correta: false,
            feedback: "Isso pode causar um desmaio súbito e queda com trauma."
          },
          {
            id: "D",
            texto: "Deitada de bruços.",
            correta: false,
            feedback: "Piora drasticamente a mecânica respiratória."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "A respiração dela piora, ela para de responder e não apresenta movimentos respiratórios. O que você faz agora?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Iniciar ciclos de 30 compressões e 2 ventilações (se treinado) ou apenas compressões contínuas.",
            correta: true,
            feedback: "Correto. A anafilaxia evoluiu para PCR. Inicie o SBV imediatamente."
          },
          {
            id: "B",
            texto: "Aplicar uma segunda dose de adrenalina, mesmo ela estando em PCR.",
            correta: false,
            feedback: "Se ela parou de respirar e ter pulso, a prioridade absoluta é a RCP para circular o que resta de oxigênio."
          },
          {
            id: "C",
            texto: "Gritar por socorro e esperar.",
            correta: false,
            feedback: "A ação imediata do socorrista leigo é o diferencial entre vida e morte."
          },
          {
            id: "D",
            texto: "Tirar a roupa da vítima para ela 'respirar melhor'.",
            correta: false,
            feedback: "Inútil e expõe a vítima desnecessariamente."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Você mantém a RCP. O socorro demora a chegar. O que fazer para não exaurir suas forças?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Fazer as compressões mais devagar para cansar menos.",
            correta: false,
            feedback: "Compressões lentas não geram fluxo sanguíneo suficiente para o cérebro."
          },
          {
            id: "B",
            texto: "Pedir para alguém ao redor observar sua técnica e alternar com você a cada 2 minutos.",
            correta: true,
            feedback: "A alternância evita o cansaço e garante a alta qualidade das compressões (profundidade de 5-6 cm)."
          },
          {
            id: "C",
            texto: "Parar por 5 minutos para descansar e depois voltar.",
            correta: false,
            feedback: "Interrupções matam. A circulação para instantaneamente quando você para."
          },
          {
            id: "D",
            texto: "Tentar fazer a massagem com os pés para usar o peso do corpo.",
            correta: false,
            feedback: "A massagem deve ser feita com as mãos, braços esticados e usando o peso do tronco."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "A ambulância do SAMU chega. Como você finaliza?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Informa que foi picada de vespa, que usou a caneta de adrenalina e o tempo que está em RCP.",
            correta: true,
            feedback: "Desfecho perfeito. Dados precisos ajudam a equipe médica a decidir os próximos fármacos e intervenções."
          },
          {
            id: "B",
            texto: "Entrega a caneta de adrenalina vazia e vai embora.",
            correta: false,
            feedback: "A comunicação verbal é essencial na transição de cuidados."
          },
          {
            id: "C",
            texto: "Pergunta se eles têm água para você beber.",
            correta: false,
            feedback: "Embora você esteja cansado, a prioridade é a vida da vítima e o repasse das informações."
          },
          {
            id: "D",
            texto: "Diz que não sabe o que aconteceu.",
            correta: false,
            feedback: "Como testemunha e socorrista, sua informação é o histórico clínico do paciente."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_47",
    titulo: "Engasgo Crítico com Risco de Incêndio",
    tag_visual_cenario: "cenario_cozinha",
    descricao_inicial: "Você está jantando com um amigo. Ele subitamente leva as mãos ao pescoço, não consegue tossir, nem falar e está ficando com o rosto roxo (cianótico). Ao mesmo tempo, uma panela esquecida no fogo começa a levantar labaredas altas.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Duas emergências simultâneas. O que você faz primeiro?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Inicia a manobra de Heimlich no seu amigo.",
            correta: false,
            feedback: "Segurança da cena. Se o fogo se espalhar, haverá duas vítimas ou você terá que abandonar o atendimento pela metade."
          },
          {
            id: "B",
            texto: "Desliga o fogo e tampa a panela (ou usa um pano úmido) para abafar as chamas rapidamente.",
            correta: true,
            feedback: "Cena segura primeiro. Controlar o princípio de incêndio leva segundos e permite atender a vítima com segurança."
          },
          {
            id: "C",
            texto: "Joga água na panela de óleo pegando fogo.",
            correta: false,
            feedback: "ERRO GRAVE! Jogar água em fogo de óleo causa uma explosão de labaredas (boilover)."
          },
          {
            id: "D",
            texto: "Sai correndo da cozinha e deixa o amigo lá.",
            correta: false,
            feedback: "Você deve garantir a segurança, mas não abandonar uma vítima que pode ser salva."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Cena controlada. O amigo está em pé, desesperado, mãos no pescoço. Qual a manobra indicada?",
        tag_visual_detalhe: "estado_engasgo_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Dar tapas fortes nas costas com ele em pé.",
            correta: false,
            feedback: "Para adultos conscientes, a Manobra de Heimlich (compressões abdominais) é mais eficaz que tapas nas costas isolados."
          },
          {
            id: "B",
            texto: "Fazer compressões abdominais (Manobra de Heimlich) logo acima do umbigo, em forma de 'J'.",
            correta: true,
            feedback: "Correto. O objetivo é criar uma pressão interna que expulse o objeto como uma rolha de champanhe."
          },
          {
            id: "C",
            texto: "Pedir para ele beber um copo grande de água.",
            correta: false,
            feedback: "Isso vai ocupar o pouco espaço de ar que resta e pode piorar a obstrução."
          },
          {
            id: "D",
            texto: "Colocar o dedo na garganta para tentar pescar o objeto.",
            correta: false,
            feedback: "Conduta cega pode empurrar o objeto ainda mais fundo."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você realiza a manobra, mas o objeto não sai. O amigo perde as forças e escorrega pelos seus braços até o chão, inconsciente. O que fazer?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Continuar tentando o Heimlich com ele deitado.",
            correta: false,
            feedback: "Uma vez inconsciente, o protocolo muda para RCP. O Heimlich deitado não é mais recomendado pela AHA."
          },
          {
            id: "B",
            texto: "Amparar a vítima até o chão, ligar 192/193 e iniciar compressões torácicas.",
            correta: true,
            feedback: "Correto. As compressões torácicas geram mais pressão que o Heimlich e ajudam a desobstruir enquanto mantêm o fluxo sanguíneo."
          },
          {
            id: "C",
            texto: "Tentar fazer respiração boca a boca imediatamente.",
            correta: false,
            feedback: "Se ele está engasgado, o ar não vai passar. As compressões são prioritárias."
          },
          {
            id: "D",
            texto: "Sacudir a vítima para ver se ela acorda.",
            correta: false,
            feedback: "Perda de tempo precioso. Inicie as compressões."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Durante as compressões torácicas, você olha para a boca da vítima e vê o pedaço de carne visível. Qual a conduta?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Tentar retirar o objeto com o dedo apenas se ele estiver visível e fácil de alcançar.",
            correta: true,
            feedback: "Sim. A pinça digital só deve ser feita se o objeto estiver acessível, para não empurrá-lo novamente."
          },
          {
            id: "B",
            texto: "Continuar comprimindo o peito em cima do objeto.",
            correta: false,
            feedback: "Se o objeto saiu e está na boca, ele deve ser removido para liberar a via aérea."
          },
          {
            id: "C",
            texto: "Soprar com força para o objeto descer para o estômago.",
            correta: false,
            feedback: "O objeto está na traqueia (via aérea), não no esôfago. Soprar só o empurraria para o pulmão."
          },
          {
            id: "D",
            texto: "Virar a vítima de cabeça para baixo e sacudir.",
            correta: false,
            feedback: "Inviável e perigoso em adultos."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Você retirou o pedaço de carne. A vítima ainda não respira. Você tenta ventilar e o peito sobe. O que faz agora?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Para tudo e espera o SAMU.",
            correta: false,
            feedback: "Se não respira e não tem sinais de vida, a PCR continua. O engasgo foi apenas a causa."
          },
          {
            id: "B",
            texto: "Continua a RCP (30 compressões : 2 ventilações) até o socorro chegar ou a vítima acordar.",
            correta: true,
            feedback: "Exato. Agora o caso é uma PCR padrão. Mantenha o suporte básico."
          },
          {
            id: "C",
            texto: "Faz apenas 10 compressões e para.",
            correta: false,
            feedback: "Ciclos incompletos não mantêm a pressão de perfusão cerebral."
          },
          {
            id: "D",
            texto: "Dá tapas no rosto para ver se ele volta.",
            correta: false,
            feedback: "Agressões físicas não revertem uma parada cardíaca."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "REVIRAVOLTA: O telefone toca. É o SAMU dizendo que a ambulância vai demorar 20 minutos devido a um alagamento. O que você faz?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Desiste, pois 20 minutos é tempo demais.",
            correta: false,
            feedback: "Há relatos de sobrevivência sem sequelas após RCP prolongada, especialmente se houver boa técnica."
          },
          {
            id: "B",
            texto: "Mantém a RCP com calma, foco na técnica e pede para alguém buscar um DEA se houver por perto.",
            correta: true,
            feedback: "Resiliência é a chave. Continue até a exaustão física ou chegada do socorro."
          },
          {
            id: "C",
            texto: "Coloca a vítima no carro e dirige correndo para o hospital.",
            correta: false,
            feedback: "Fazer RCP dentro de um carro em movimento é impossível e perigoso. O melhor lugar é no chão firme."
          },
          {
            id: "D",
            texto: "Tenta fazer uma traqueostomia com uma caneta.",
            correta: false,
            feedback: "Isso é cena de filme. Um leigo tentando isso causaria uma hemorragia fatal em segundos."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "A vítima apresenta um movimento brusco, abre os olhos e começa a respirar profundamente. Qual sua ação imediata?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Continuar a massagem para garantir que ela não pare de novo.",
            correta: false,
            feedback: "Nunca faça RCP em pessoas conscientes e que respiram."
          },
          {
            id: "B",
            texto: "Colocar a vítima na Posição Lateral de Segurança (virada de lado).",
            correta: true,
            feedback: "A Posição Lateral de Segurança (PLS) evita que a vítima aspire vômito e mantém a língua longe da garganta."
          },
          {
            id: "C",
            texto: "Mandar ela sentar e comer um pão para 'limpar' a garganta.",
            correta: false,
            feedback: "A garganta pode estar lesionada ou edemaciada. Nada de comida."
          },
          {
            id: "D",
            texto: "Deixar ela deitada de costas (supino).",
            correta: false,
            feedback: "Nesta posição, se ela vomitar (comum pós-RCP), ela pode aspirar o conteúdo gástrico para os pulmões."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "A vítima está confusa e quer levantar para limpar a cozinha. O que você orienta?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Deixar, pois o exercício ajuda a circular o sangue.",
            correta: false,
            feedback: "O esforço pode causar um novo colapso cardíaco ou síncope."
          },
          {
            id: "B",
            texto: "Pedir para ela ficar deitada e imóvel até o SAMU chegar para uma avaliação completa.",
            correta: true,
            feedback: "Vítimas de engasgo grave e PCR precisam de exames hospitalares para checar lesões internas e oxigenação."
          },
          {
            id: "C",
            texto: "Dizer que não precisa mais de médico, pois ela já acordou.",
            correta: false,
            feedback: "O risco de edema tardio na garganta ou pneumonia por aspiração é alto."
          },
          {
            id: "D",
            texto: "Dar um café forte para ela 'despertar'.",
            correta: false,
            feedback: "Estimulantes são contraindicados após eventos cardíacos."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "A fumaça da panela que você tampou ainda está no ambiente. O que fazer para melhorar a situação?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Abrir as janelas para ventilar o ambiente sem abandonar a vítima.",
            correta: true,
            feedback: "Ventilação é importante para evitar a inalação de monóxido de carbono, mas o foco continua no monitoramento da vítima."
          },
          {
            id: "B",
            texto: "Ligar o ventilador diretamente no rosto da vítima.",
            correta: false,
            feedback: "Isso pode causar resfriamento excessivo e não ajuda na troca gasosa pulmonar."
          },
          {
            id: "C",
            texto: "Sair da cozinha e deixar a vítima sozinha lá dentro.",
            correta: false,
            feedback: "O socorrista deve permanecer junto à vítima até a chegada do socorro."
          },
          {
            id: "D",
            texto: "Jogar perfume no ar para tirar o cheiro de queimado.",
            correta: false,
            feedback: "Perfumes podem irritar ainda mais as vias aéreas já sensibilizadas da vítima."
          }
        ]
      },
      {
        id: "etapa_10",
        pergunta: "O SAMU finalmente chega. Como é a entrega do paciente?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Explica sobre o engasgo, a manobra de Heimlich, o tempo de inconsciência e a manobra de desobstrução bem-sucedida.",
            correta: true,
            feedback: "Perfeito. Você narrou a sequência cronológica que ajuda os médicos a entenderem a gravidade do evento."
          },
          {
            id: "B",
            texto: "Diz que ele 'passou mal' e agora está bem.",
            correta: false,
            feedback: "Informação vaga. 'Passar mal' não descreve uma obstrução de via aérea seguida de PCR."
          },
          {
            id: "C",
            texto: "Entrega o pedaço de carne que você tirou da boca dele para eles analisarem.",
            correta: false,
            feedback: "Embora curioso, o importante é o estado clínico da vítima, não o objeto em si (a menos que seja algo tóxico)."
          },
          {
            id: "D",
            texto: "Pede para eles limparem a cozinha enquanto você descansa.",
            correta: false,
            feedback: "A equipe de emergência está lá para cuidados médicos, não para serviços domésticos."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_48",
    titulo: "Amputação Traumática em Oficina",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Um mecânico estava usando uma serra circular que travou e saltou, atingindo seu antebraço. Há uma amputação parcial com sangramento em jatos (pulsátil) e muita sujeira de graxa no local.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Sangramento pulsátil indica ruptura arterial. Qual a ação imediata mais eficaz?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Lavar o ferimento com água e sabão para tirar a graxa.",
            correta: false,
            feedback: "Em hemorragias arteriais, a prioridade é o estancamento, não a limpeza. Lavar pode remover coágulos iniciais e piorar o sangramento."
          },
          {
            id: "B",
            texto: "Aplicar compressão direta com pano limpo e elevar o membro.",
            correta: true,
            feedback: "A compressão direta é o primeiro passo para controlar hemorragias externas graves (Protocolo XABCDE)."
          },
          {
            id: "C",
            texto: "Fazer um torniquete no pescoço para diminuir o fluxo total.",
            correta: false,
            feedback: "Isso é fatal. Torniquetes são usados apenas em membros e nunca no pescoço."
          },
          {
            id: "D",
            texto: "Colocar pó de café sobre a ferida.",
            correta: false,
            feedback: "Mito perigoso. O café causa infecção severa e dificulta o trabalho do cirurgião no hospital."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "O sangue continua jorrando e atravessa rapidamente os panos da compressão. O que fazer?",
        tag_visual_detalhe: "acao_curativo_adicional",
        opcoes: [
          {
            id: "A",
            texto: "Retirar os panos molhados e colocar novos.",
            correta: false,
            feedback: "Nunca retire os panos. Isso destrói os coágulos que estão se formando. Coloque novos por cima."
          },
          {
            id: "B",
            texto: "Manter a compressão e aplicar um torniquete acima do ferimento (entre a ferida e o coração).",
            correta: true,
            feedback: "Em amputações ou hemorragias que não param com compressão, o torniquete é a conduta padrão ouro para salvar a vida."
          },
          {
            id: "C",
            texto: "Amarrar um barbante bem apertado.",
            correta: false,
            feedback: "Barbantes cortam a pele e não garantem a pressão necessária para parar uma artéria. Use tiras largas de tecido."
          },
          {
            id: "D",
            texto: "Apertar o ferimento com as mãos nuas sem proteção.",
            correta: false,
            feedback: "Risco biológico para você. Use sempre luvas ou barreiras se possível, mas aqui a prioridade é o torniquete."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Como improvisar um torniquete eficaz se não tiver um comercial?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Usar um cinto de couro apertando até o último furo.",
            correta: false,
            feedback: "Cintos raramente conseguem a pressão necessária. O ideal é o uso de um 'molinete' (bastão)."
          },
          {
            id: "B",
            texto: "Usar um tecido largo (7-10cm), dar um nó, colocar um bastão/chave de fenda por cima e girar até o sangramento parar.",
            correta: true,
            feedback: "Correto. O sistema de molinete permite a pressão mecânica necessária para colapsar a artéria branquial."
          },
          {
            id: "C",
            texto: "Apenas amarrar uma camiseta bem forte.",
            correta: false,
            feedback: "Sem o molinete para girar, você dificilmente parará o sangramento arterial apenas com a força das mãos ao dar o nó."
          },
          {
            id: "D",
            texto: "Colocar gelo dentro do nó do torniquete.",
            correta: false,
            feedback: "Desnecessário e pode causar lesão por frio no tecido saudável."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "O sangramento parou. A vítima está consciente, mas muito pálida, com sede e confusa. O que isso indica?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Ela está ficando com fome.",
            correta: false,
            feedback: "Sinais de má perfusão indicam Choque Hipovolêmico por perda de sangue."
          },
          {
            id: "B",
            texto: "Início de Choque Hipovolêmico. Mantenha a vítima aquecida e deitada.",
            correta: true,
            feedback: "Correto. A prevenção da hipotermia e a posição horizontal ajudam a combater o choque."
          },
          {
            id: "C",
            texto: "Ela está fingindo para ganhar atenção.",
            correta: false,
            feedback: "Em traumas graves, ignore suposições psicológicas e foque nos sinais vitais."
          },
          {
            id: "D",
            texto: "Ela precisa correr para o hospital agora.",
            correta: false,
            feedback: "Se ela está em choque, deve ser transportada deitada por profissionais. O esforço piora o estado."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA: O ajudante do mecânico desmaia ao ver o sangue. O que você faz com ele?",
        tag_visual_detalhe: "acao_elevacao_pernas",
        opcoes: [
          {
            id: "A",
            texto: "Deixa ele no chão, foca no amputado e pede para outra pessoa elevar as pernas do ajudante.",
            correta: true,
            feedback: "Triagem simples. O amputado é a prioridade vital. O desmaio (síncope) geralmente resolve-se elevando as pernas."
          },
          {
            id: "B",
            texto: "Abandona o amputado para fazer RCP no ajudante.",
            correta: false,
            feedback: "O ajudante provavelmente só teve uma síncope vasovagal. O amputado morre sem o torniquete e monitoramento."
          },
          {
            id: "C",
            texto: "Joga água gelada no rosto do ajudante.",
            correta: false,
            feedback: "Desnecessário e cria mais bagunça na cena."
          },
          {
            id: "D",
            texto: "Dá álcool para ele cheirar.",
            correta: false,
            feedback: "Prática antiga e irritante que não traz benefícios clínicos reais."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Sobre a parte amputada (o pedaço que caiu), qual o procedimento correto?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Lavar com álcool e colocar direto no gelo.",
            correta: false,
            feedback: "O gelo direto 'queima' os tecidos e inviabiliza o reimplante."
          },
          {
            id: "B",
            texto: "Envolver em pano limpo, colocar em saco plástico vedado e colocar esse saco dentro de um recipiente com água e gelo.",
            correta: true,
            feedback: "Correto. O objetivo é manter o membro resfriado, mas seco e sem contato direto com o gelo."
          },
          {
            id: "C",
            texto: "Jogar no lixo, pois não tem como costurar.",
            correta: false,
            feedback: "A medicina moderna consegue reimplantes incríveis se o membro for bem preservado."
          },
          {
            id: "D",
            texto: "Colocar no freezer da oficina.",
            correta: false,
            feedback: "O congelamento destrói as células. Deve ser apenas resfriado."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "A vítima diz que está com muita dor no local do torniquete e pede para você afrouxar um pouco. O que você faz?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Afrouxa um pouco para ele descansar.",
            correta: false,
            feedback: "NUNCA afrouxe um torniquete. Isso pode causar a liberação de toxinas e o retorno da hemorragia fatal."
          },
          {
            id: "B",
            texto: "Explica que o torniquete dói mas é necessário para ele não morrer, e mantém apertado.",
            correta: true,
            feedback: "O torniquete dói muito (isquemia), mas é a garantia de vida. Somente o médico no hospital o removerá."
          },
          {
            id: "C",
            texto: "Dá uma aspirina para a dor.",
            correta: false,
            feedback: "Aspirina afina o sangue (anticoagulante), o que é péssimo para quem está sangrando."
          },
          {
            id: "D",
            texto: "Retira o torniquete e volta apenas para a compressão manual.",
            correta: false,
            feedback: "Se a compressão falhou antes, falhará agora com a pressão arterial instável."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "O Bombeiro chega. Como deve ser a transição?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Informa o horário exato em que o torniquete foi aplicado e entrega a parte amputada preservada.",
            correta: true,
            feedback: "O horário do torniquete é a informação mais crítica para a equipe de cirurgia salvar o braço da vítima."
          },
          {
            id: "B",
            texto: "Diz que 'foi feio' e sai para lavar as mãos.",
            correta: false,
            feedback: "Falta de profissionalismo no atendimento. O repasse de dados é parte do socorro."
          },
          {
            id: "C",
            texto: "Tira o torniquete para mostrar ao bombeiro onde era o furo.",
            correta: false,
            feedback: "Erro fatal. Nunca remova o torniquete no campo."
          },
          {
            id: "D",
            texto: "Pede para eles darem um atestado médico para você.",
            correta: false,
            feedback: "Socorristas leigos não recebem atestado de equipes de emergência; o foco é o paciente."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_49",
    titulo: "Suspeita de AVC em Ambiente Bancário",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Você está na fila do banco quando um senhor ao seu lado começa a falar de forma enrolada, como se estivesse bêbado. Ele tenta segurar o celular, mas o aparelho cai da mão direita, que parece sem força.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você suspeita de um Acidente Vascular Cerebral (AVC). Qual o teste rápido para confirmar?",
        tag_visual_detalhe: "estado_avc_assimetria",
        opcoes: [
          {
            id: "A",
            texto: "Pedir para ele correr um pouco.",
            correta: false,
            feedback: "Esforço físico agrava quadros neurológicos e causa quedas."
          },
          {
            id: "B",
            texto: "Escala de SAMU (Sorriso, Abraço, Música, Urgência): pedir para sorrir, levantar os braços e repetir uma frase.",
            correta: true,
            feedback: "Correto. Assimetria no sorriso, queda de um dos braços ou fala enrolada são sinais claros de AVC."
          },
          {
            id: "C",
            texto: "Dar um beliscão forte para ver se ele sente dor.",
            correta: false,
            feedback: "Não é um teste diagnóstico padrão e causa sofrimento desnecessário."
          },
          {
            id: "D",
            texto: "Olhar o fundo dos olhos dele com o flash do celular.",
            correta: false,
            feedback: "Isso requer treinamento médico e não substitui os testes motores e de fala."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "O senhor não consegue sorrir de um lado e o braço direito cai. O que fazer imediatamente?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Dar uma aspirina, pois ajuda a dissolver coágulos.",
            correta: false,
            feedback: "Perigoso. Se o AVC for hemorrágico (sangramento no cérebro), a aspirina pode matá-lo. Só o hospital diferencia os tipos com tomografia."
          },
          {
            id: "B",
            texto: "Ligar 192 e informar: 'Vítima com sinais de AVC, teste de Cincinnati positivo'.",
            correta: true,
            feedback: "Tempo é cérebro. Avisar os sinais ajuda o SAMU a preparar o hospital de destino com unidade de AVC."
          },
          {
            id: "C",
            texto: "Esperar 30 minutos para ver se os sintomas passam sozinhos.",
            correta: false,
            feedback: "Isso pode ser um AIT (Ataque Isquêmico Transitório), um aviso de que um AVC maior está vindo. Nunca espere."
          },
          {
            id: "D",
            texto: "Mandar ele beber água com açúcar.",
            correta: false,
            feedback: "Açúcar não ajuda no AVC e a água pode causar engasgo se ele tiver dificuldade de deglutição."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: Enquanto espera o socorro, o senhor começa a ter uma convulsão (corpo rígido e tremores generalizados). Qual sua atitude?",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Segurar os braços e pernas dele com força para ele parar de tremer.",
            correta: false,
            feedback: "Nunca segure uma vítima em convulsão. Isso pode causar fraturas nela e lesões em você."
          },
          {
            id: "B",
            texto: "Proteger a cabeça dele, afastar objetos próximos e não colocar nada na boca.",
            correta: true,
            feedback: "Perfeito. O objetivo é evitar traumas secundários. A língua NÃO enrola."
          },
          {
            id: "C",
            texto: "Colocar um lenço na boca para ele não morder a língua.",
            correta: false,
            feedback: "Isso pode causar asfixia ou ele pode quebrar os dentes e morder seus dedos."
          },
          {
            id: "D",
            texto: "Dar tapas no rosto para ele 'acordar' da convulsão.",
            correta: false,
            feedback: "A convulsão é uma descarga elétrica cerebral, estímulos físicos não a interrompem."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "A convulsão parou. Ele está inconsciente e roncando (respiração ruidosa). Há muita saliva na boca. O que fazer?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Colocar em Posição Lateral de Segurança para manter a via aérea livre.",
            correta: true,
            feedback: "Correto. Após a convulsão, a vítima fica em estado pós-ictal e pode vomitar ou ter a língua obstruindo a garganta."
          },
          {
            id: "B",
            texto: "Mantenha-o de costas e levante as pernas.",
            correta: false,
            feedback: "Isso facilita que a saliva ou vômito desçam para o pulmão."
          },
          {
            id: "C",
            texto: "Iniciar RCP imediatamente.",
            correta: false,
            feedback: "Se ele está roncando, ele está respirando. Não se faz RCP em quem respira."
          },
          {
            id: "D",
            texto: "Tentar acordá-lo gritando no ouvido.",
            correta: false,
            feedback: "Ele precisa de tempo para o cérebro se recuperar da descarga elétrica."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Um funcionário do banco pergunta se deve pegar o DEA. Como você responde?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Sim, traga e ligue os eletrodos agora.",
            correta: false,
            feedback: "O DEA só é indicado para vítimas inconscientes E sem respiração. Ele está respirando (ronco)."
          },
          {
            id: "B",
            texto: "Peça para ele trazer e deixar ao lado, pronto para uso caso a vítima pare de respirar.",
            correta: true,
            feedback: "Prevenção. Vítimas neurológicas podem evoluir para parada respiratória. Ter o DEA perto é uma decisão inteligente."
          },
          {
            id: "C",
            texto: "Diga que DEA é só para quem levou choque elétrico.",
            correta: false,
            feedback: "DEA é para qualquer parada cardíaca súbita."
          },
          {
            id: "D",
            texto: "Mande o funcionário voltar ao trabalho.",
            correta: false,
            feedback: "Ajuda extra é sempre bem-vinda na gestão de uma emergência."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O SAMU chega. Qual o desfecho da sua ajuda?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Informa o horário do início dos sintomas de fala enrolada, a duração da convulsão e a posição atual da vítima.",
            correta: true,
            feedback: "Excelente. O horário de início dos sintomas (janela terapêutica) decide se o médico poderá usar trombolíticos para reverter o AVC."
          },
          {
            id: "B",
            texto: "Diz que ele 'teve um troço' e caiu.",
            correta: false,
            feedback: "Seja específico. 'Falar enrolado' e 'perda de força' são termos que direcionam o diagnóstico."
          },
          {
            id: "C",
            texto: "Tenta ajudar a carregar a maca sem eles pedirem.",
            correta: false,
            feedback: "Deixe os profissionais trabalharem. Ajude apenas se solicitado."
          },
          {
            id: "D",
            texto: "Vai embora sem falar com a equipe.",
            correta: false,
            feedback: "Sua informação pode ser a diferença entre sequelas permanentes ou recuperação total da vítima."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_50",
    titulo: "Queda de Bicicleta com Deformidade no Braço",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Você está em um parque no final da tarde quando vê um ciclista perder o controle e cair de mau jeito sobre o braço esticado. Ele grita de dor e não consegue levantar do chão. Você se aproxima para ajudar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual é a sua primeira ação ao se aproximar da vítima?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr imediatamente até ele e tentar levantá-lo do chão.",
            correta: false,
            feedback: "Mover a vítima sem avaliação prévia pode agravar lesões na coluna ou na fratura. A segurança da cena vem primeiro."
          },
          {
            id: "B",
            texto: "Verificar a segurança do local, pedindo para outros ciclistas desviarem, e só então se aproximar.",
            correta: true,
            feedback: "Correto! O primeiro passo no protocolo de APH (mesmo para leigos) é garantir a segurança da cena para que você não se torne a próxima vítima."
          },
          {
            id: "C",
            texto: "Ligar para o 192 antes mesmo de olhar para a vítima.",
            correta: false,
            feedback: "Embora ligar para emergência seja crucial, você precisa de uma rápida avaliação visual da cena e do estado do paciente para passar informações úteis ao atendente."
          },
          {
            id: "D",
            texto: "Oferecer sua garrafa de água para acalmá-lo.",
            correta: false,
            feedback: "Nunca ofereça líquidos a vítimas de trauma, pois elas podem precisar de cirurgia e devem estar em jejum, além do risco de engasgo."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está segura. O ciclista está consciente, pálido, com respiração ofegante pela dor e segurando o antebraço direito, que apresenta uma deformidade em 'S', mas sem sangramento. O que você faz?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Puxo o braço dele firmemente pelas extremidades para colocar o osso no lugar.",
            correta: false,
            feedback: "Mito perigoso! Tentar alinhar ou 'colocar o osso no lugar' pode romper nervos e vasos sanguíneos, causando danos irreversíveis. Apenas médicos fazem redução de fraturas."
          },
          {
            id: "B",
            texto: "Faço uma massagem no local da deformidade para aliviar a dor.",
            correta: false,
            feedback: "Massagear uma fratura causará dor extrema e pode agravar a lesão tecidual interna."
          },
          {
            id: "C",
            texto: "Aconselho o ciclista a não mover o braço e ligo para o SAMU (192), relatando suspeita de fratura fechada.",
            correta: true,
            feedback: "Exato! Em casos de fratura, a regra de ouro é imobilizar a vítima e acionar o socorro especializado."
          },
          {
            id: "D",
            texto: "Faço um torniquete acima do cotovelo por precaução.",
            correta: false,
            feedback: "O torniquete é usado EXCLUSIVAMENTE para hemorragias severas (sangramento ativo grave), não para fraturas fechadas."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Um amigo do ciclista chega correndo, muito nervoso, e tenta puxar o braço acidentado dizendo 'Eu sei como destravar isso, já vi em filme!'. Como você reage?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Deixo ele tentar, pois pode aliviar a dor do amigo.",
            correta: false,
            feedback: "Como socorrista no local, você deve proteger a vítima de intervenções incorretas que possam causar danos."
          },
          {
            id: "B",
            texto: "Intervenho firmemente, peço que ele não toque na vítima, explico o risco de lesão em nervos e peço sua ajuda para aguardar o SAMU.",
            correta: true,
            feedback: "Perfeito. Você gerenciou a cena, impediu uma conduta prejudicial (mito) e engajou o terceiro de forma útil."
          },
          {
            id: "C",
            texto: "Começo a discutir com o amigo até que ele vá embora.",
            correta: false,
            feedback: "Evite conflitos que aumentem o estresse da cena; comunique-se de forma assertiva e focada no bem-estar da vítima."
          },
          {
            id: "D",
            texto: "Ajudo o amigo a segurar o ciclista para que ele faça a manobra.",
            correta: false,
            feedback: "A manobra é estritamente contraindicada e pioraria o quadro clínico."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Enquanto aguardam o SAMU, o ciclista reclama que o braço está muito solto e doendo a cada movimento que ele faz respirando. O que pode ser feito?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Amarrar o braço dele firmemente a uma árvore próxima.",
            correta: false,
            feedback: "Isso restringiria o paciente inteiro e causaria pânico e dor."
          },
          {
            id: "B",
            texto: "Apoiar o braço fraturado de forma cuidadosa na posição em que foi encontrado, usando um casaco dobrado para dar suporte.",
            correta: true,
            feedback: "Correto. O princípio da imobilização de primeiros socorros é dar suporte à lesão na exata posição em que foi encontrada, minimizando o movimento e a dor."
          },
          {
            id: "C",
            texto: "Forçar o braço contra o peito do ciclista e amarrar com a camisa dele.",
            correta: false,
            feedback: "Forçar uma mudança de posição em uma fratura deformada causa dor intensa e risco de perfuração interna pelo osso quebrado."
          },
          {
            id: "D",
            texto: "Mandar ele levantar e caminhar para distrair a dor.",
            correta: false,
            feedback: "Movimentação desnecessária aumenta o risco de choque e piora a lesão."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Após cerca de 15 minutos, o paciente começa a apresentar tremores, suor frio e palidez excessiva, indicando um possível estado de choque devido à dor intensa e estresse. Qual a conduta?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Aqueço o paciente com um casaco e converso continuamente para mantê-lo calmo e consciente.",
            correta: true,
            feedback: "Correto! Prevenir a perda de calor e oferecer suporte emocional são medidas essenciais de suporte básico no manejo inicial do choque."
          },
          {
            id: "B",
            texto: "Dou um copo de refrigerante com açúcar para ele se recuperar.",
            correta: false,
            feedback: "A vítima pode evoluir para vômito devido ao estado de choque, havendo risco de broncoaspiração, além de quebrar o jejum para possível cirurgia."
          },
          {
            id: "C",
            texto: "Jogo água fria no rosto dele para ele despertar bem.",
            correta: false,
            feedback: "Água fria piora a perda de calor (hipotermia), agravando o estado de choque."
          },
          {
            id: "D",
            texto: "Levanto as pernas dele o mais alto possível e puxo o braço fraturado.",
            correta: false,
            feedback: "Movimentação brusca piora a dor e a lesão; focar apenas no aquecimento e na tranquilidade é mais seguro aqui."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O socorro especializado chega ao parque. Qual deve ser sua atitude final neste atendimento?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Vou embora discretamente, pois meu trabalho acabou.",
            correta: false,
            feedback: "Você tem informações valiosas sobre o acidente e a evolução da vítima. A transição de cuidados é vital."
          },
          {
            id: "B",
            texto: "Aproximo-me da equipe, relato o mecanismo da queda, os sinais que ele apresentou (palidez) e as ações que tomei (suporte do braço).",
            correta: true,
            feedback: "Excelente! A passagem do plantão (transição de cuidados) garante que a equipe médica tenha o histórico completo, melhorando o tratamento definitivo."
          },
          {
            id: "C",
            texto: "Tento ajudar os paramédicos a colocar a tala no braço do paciente, mexendo na fratura.",
            correta: false,
            feedback: "Deixe os procedimentos técnicos para os profissionais a partir do momento em que assumem a ocorrência."
          },
          {
            id: "D",
            texto: "Peço ao paramédico que aplique um remédio para a dor antes de olhar a fratura.",
            correta: false,
            feedback: "A equipe de APH segue protocolos próprios de avaliação antes de medicar."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_51",
    titulo: "Trilha na Mata: Acidente Ofídico (Cobra)",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Você está em uma trilha com um grupo de amigos em uma região de mata. De repente, um de seus amigos grita e cai para trás. Ele aponta para a panturrilha, onde há duas marcas de presas sangrando levemente. Ele diz que foi picado por uma cobra marrom que fugiu para o mato.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A cobra fugiu e seu amigo está no chão apavorado. Qual sua primeira ação?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Corro atrás da cobra para tentar matá-la ou capturá-la para identificação no hospital.",
            correta: false,
            feedback: "Risco de novo acidente! Nunca persiga o animal. A segurança da cena é prioridade; os médicos podem tratar com base nos sintomas clínicos."
          },
          {
            id: "B",
            texto: "Afasto meu amigo e o grupo da área do acidente com segurança e peço para ele ficar em repouso imediato.",
            correta: true,
            feedback: "Correto! Afastar-se do perigo garante a segurança, e o repouso da vítima retarda a absorção do veneno pelo metabolismo."
          },
          {
            id: "C",
            texto: "Peço para meu amigo correr o mais rápido possível até o início da trilha.",
            correta: false,
            feedback: "Acelerar os batimentos cardíacos com corrida fará o veneno se espalhar mais rápido pelo corpo."
          },
          {
            id: "D",
            texto: "Ignoro a picada, pois a maioria das cobras não é venenosa.",
            correta: false,
            feedback: "Na dúvida, toda picada de cobra deve ser tratada como acidente ofídico até avaliação médica."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Com a vítima em local seguro e em repouso, você observa as duas marcas de presas na perna. Outro amigo do grupo saca um canivete e diz: 'Temos que cortar o local e chupar o veneno agora!'. O que você faz?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Deixo ele fazer o procedimento, pois é a técnica padrão em locais isolados.",
            correta: false,
            feedback: "Mito de filmes! Cortar a ferida aumenta o risco de hemorragia e infecção. Sugar o local não remove o veneno e pode envenenar o socorrista se houver lesões na boca."
          },
          {
            id: "B",
            texto: "Pego o canivete e faço eu mesmo o corte em formato de 'X', pois sou o socorrista.",
            correta: false,
            feedback: "Qualquer incisão ou perfuração agrava seriamente o quadro, favorecendo necrose e sangramento (comum em picadas de jararaca, por exemplo)."
          },
          {
            id: "C",
            texto: "Impeço a ação imediatamente, explicando que cortar e sugar são mitos perigosos, e apenas lavo o local com água limpa e sabão.",
            correta: true,
            feedback: "Perfeito! A lavagem com água e sabão é a única conduta recomendada para o local da picada, além do repouso."
          },
          {
            id: "D",
            texto: "Coloco terra e folhas sobre a ferida para estancar o sangue.",
            correta: false,
            feedback: "Isso causaria infecção grave, incluindo risco de tétano."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "A perna do seu amigo começa a inchar rapidamente e a doer muito (edema característico). O mesmo amigo sugere amarrar um cinto apertado (torniquete) na coxa para impedir que o veneno suba. Qual é a conduta correta?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Fazer o torniquete imediatamente; é essencial em picadas de cobra.",
            correta: false,
            feedback: "Mito perigoso! O torniquete concentra o veneno no membro, potencializando a destruição dos tecidos (necrose) e pode resultar em amputação."
          },
          {
            id: "B",
            texto: "Não fazer torniquete. Mantenho a perna do paciente em nível neutro ou discretamente elevada, garanto repouso e retiro anéis, pulseiras e sapatos.",
            correta: true,
            feedback: "Exato! O edema (inchaço) é rápido; retirar adornos evita efeito de garrote. O torniquete é contraindicado em acidentes com animais peçonhentos."
          },
          {
            id: "C",
            texto: "Fazer um torniquete, mas soltá-lo a cada 5 minutos.",
            correta: false,
            feedback: "A recomendação moderna de APH é não aplicar nenhuma forma de garroteamento em acidentes ofídicos."
          },
          {
            id: "D",
            texto: "Aplicar gelo diretamente sobre a picada para desinchar.",
            correta: false,
            feedback: "O gelo pode agravar a isquemia e a necrose tecidual causada pelo veneno."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Vocês estão a cerca de 30 minutos de caminhada do carro e não há sinal de celular na trilha. A vítima não consegue andar devido à dor intensa. O que fazer?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Obrigo o paciente a vir caminhando devagar para não perdermos tempo.",
            correta: false,
            feedback: "A contração muscular da perna fará o veneno ser absorvido rapidamente pela corrente sanguínea."
          },
          {
            id: "B",
            texto: "Deixo o paciente sozinho e vou buscar ajuda no carro.",
            correta: false,
            feedback: "A vítima pode evoluir com complicações sistêmicas (choque, desmaio). Não se deve abandonar a vítima."
          },
          {
            id: "C",
            texto: "Improvisamos uma maca (com galhos e casacos) ou carregamos o paciente no colo/costas até o carro para ele não fazer esforço.",
            correta: true,
            feedback: "Correto. O transporte deve garantir o repouso absoluto da vítima para retardar a absorção do veneno."
          },
          {
            id: "D",
            texto: "Acendo uma fogueira e espero anoitecer para alguém notar a fumaça.",
            correta: false,
            feedback: "O tempo é ouro (o soro antiofídico deve ser administrado o quanto antes). Atrasar o resgate é perigoso."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Durante o carregamento, a vítima começa a ficar sonolenta, com suor frio, e relata estar enxergando duplo e com a pálpebra caída (ptose palpebral). Qual a avaliação?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Ele está apenas cansado da trilha; dou água e continuo.",
            correta: false,
            feedback: "Visão dupla e pálpebra caída (fácies miastênica) são sinais neurotóxicos graves, típicos de acidentes com cobras como a Cascavel."
          },
          {
            id: "B",
            texto: "Reconheço como sinais sistêmicos graves do envenenamento e acelero a extração, monitorando constantemente a respiração dele.",
            correta: true,
            feedback: "Correto. Estes são sinais de alerta sistêmicos graves. A vítima pode parar de respirar e você deve estar preparado para RCP se necessário."
          },
          {
            id: "C",
            texto: "Viro o paciente de cabeça para baixo para o sangue ir para a cabeça.",
            correta: false,
            feedback: "Conduta sem embasamento que dificulta a respiração e pode causar lesões."
          },
          {
            id: "D",
            texto: "Faço respiração boca-a-boca preventivamente.",
            correta: false,
            feedback: "A ventilação artificial só é feita se a vítima efetivamente parar de respirar."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Vocês finalmente chegam ao carro. Ao dirigir para o socorro, para onde você deve se encaminhar?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Para uma farmácia para comprar analgésicos.",
            correta: false,
            feedback: "Farmácias não possuem soro antiofídico, que é de distribuição exclusiva da rede hospitalar pública/referência."
          },
          {
            id: "B",
            texto: "Para o posto de saúde mais próximo ou hospital de referência da região, avisando familiares para contatarem o 192 (SAMU) e interceptarem o carro se necessário.",
            correta: true,
            feedback: "Excelente! O tratamento definitivo é o soro antiveneno, disponível em hospitais. O contato com o SAMU durante o trajeto ajuda na regulação."
          },
          {
            id: "C",
            texto: "Para a casa da vítima para ela tomar um banho e descansar.",
            correta: false,
            feedback: "O veneno continuará agindo e pode ser fatal sem o soro."
          },
          {
            id: "D",
            texto: "Para um curandeiro local que tem ervas para picadas.",
            correta: false,
            feedback: "Tratamentos caseiros não neutralizam a peçonha; o único tratamento eficaz é a soroterapia."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Você chega à emergência do hospital. A equipe médica vem receber o paciente. Como deve ser sua comunicação?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Deixo o paciente na porta e vou estacionar o carro com calma.",
            correta: false,
            feedback: "A equipe médica precisará do histórico que você acompanhou para agir rapidamente."
          },
          {
            id: "B",
            texto: "Relato o tempo estimado desde a picada, a aparência do ferimento, a evolução dos sintomas (visão dupla) e que o local foi apenas lavado.",
            correta: true,
            feedback: "Perfeito! Essas informações ajudam o médico a suspeitar do tipo de serpente (ex: cascavel ou jararaca) e definir a dose do soro."
          },
          {
            id: "C",
            texto: "Digo que não vi nada e que a culpa foi dele por pisar no mato.",
            correta: false,
            feedback: "Comunicação improdutiva que não auxilia o tratamento clínico do paciente."
          },
          {
            id: "D",
            texto: "Exijo que a equipe me dê o soro para eu mesmo aplicar no meu amigo.",
            correta: false,
            feedback: "A administração do soro requer ambiente hospitalar para tratar possíveis reações alérgicas severas (anafilaxia)."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_52",
    titulo: "Canteiro de Obras: Fratura Exposta com Hemorragia",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Um operário de uma construção civil sofreu uma queda de um andaime (cerca de 3 metros). Ao ouvir o grito, você se aproxima e vê o trabalhador no chão. Sua perna direita na altura da canela apresenta uma deformidade severa, o osso rasgou a pele e há um sangramento intenso, formando uma poça de sangue rapidamente.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você avalia a cena antes de chegar ao paciente. O andaime parece estável agora, mas há ferramentas jogadas. Qual sua prioridade inicial?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Gritar para que todos os operários voltem ao trabalho e não olhem.",
            correta: false,
            feedback: "Afastar os curiosos é bom, mas o foco é avaliar a própria segurança e a do paciente."
          },
          {
            id: "B",
            texto: "Entrar correndo sem olhar para os lados e agarrar a perna do paciente.",
            correta: false,
            feedback: "Visão de túnel (focar só no ferimento) pode expor você a riscos como choques elétricos ou queda de mais objetos."
          },
          {
            id: "C",
            texto: "Garantir que não há risco de queda de materiais, isolar a área ao redor do operário e pedir para alguém acionar imediatamente o 192/193 (SAMU/Bombeiros).",
            correta: true,
            feedback: "Correto! Segurança da cena assegurada, e como é trauma com sangramento severo, a chamada precoce de ajuda é vital."
          },
          {
            id: "D",
            texto: "Limpar as ferramentas caídas e varrer a poça de sangue antes de ajudar.",
            correta: false,
            feedback: "Você está perdendo tempo crítico de controle de hemorragia em uma vítima grave."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Ao se ajoelhar perto da vítima, ela está consciente, mas grita de dor. O osso da tíbia está exposto e a hemorragia é ativa e abundante. Segundo o protocolo atual de trauma (PHTLS), o que você deve tratar primeiro?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Alinhar o osso para parar de sangrar.",
            correta: false,
            feedback: "Nunca tente alinhar uma fratura exposta; risco de lesão severa e infecção."
          },
          {
            id: "B",
            texto: "Imobilizar a perna em talas para evitar dor.",
            correta: false,
            feedback: "A imobilização é secundária. Hemorragia exsanguinante (sangramento massivo) mata em minutos e deve ser a prioridade 'X' do protocolo XABCDE."
          },
          {
            id: "C",
            texto: "Controlar o sangramento severo com compressão ou, se necessário, torniquete.",
            correta: true,
            feedback: "Excelente! A contenção de hemorragias externas graves (X do XABCDE) é a prioridade absoluta no trauma, antes mesmo da abertura das vias aéreas."
          },
          {
            id: "D",
            texto: "Limpar o osso exposto com água e sabão para evitar infecção.",
            correta: false,
            feedback: "A prioridade não é assepsia no pré-hospitalar imediato, mas impedir que o paciente sangre até a morte."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você decide controlar a hemorragia com compressão. Como você aplica pressão em uma fratura exposta?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Pressiono o osso exposto para dentro da perna com as mãos sujas.",
            correta: false,
            feedback: "Absolutamente contraindicado! Pressionar o osso causa dor, agrava a lesão e empurra sujeira para a medula óssea."
          },
          {
            id: "B",
            texto: "Aplico pressão com panos limpos ao redor das bordas da ferida, evitando pressionar diretamente o osso exposto.",
            correta: true,
            feedback: "Exato! Na fratura exposta, a compressão direta deve ser nas bordas para conter o sangramento sem empurrar o osso fraturado."
          },
          {
            id: "C",
            texto: "Coloco pó de café na ferida aberta para estancar.",
            correta: false,
            feedback: "Pó de café, açúcar ou pomadas são mitos e causam infecções severas e dificuldade na limpeza hospitalar."
          },
          {
            id: "D",
            texto: "Deixo sangrar para 'limpar' a ferida por dentro.",
            correta: false,
            feedback: "A vítima morrerá de choque hipovolêmico em minutos se o sangramento não for estancado."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Apesar da compressão nas bordas, o sangue continua jorrando de forma pulsátil, molhando várias compressas rapidamente. A vida dele está em risco iminente. O que você faz agora?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Continuo apenas trocando os panos sujos por limpos.",
            correta: false,
            feedback: "Retirar os panos remove os coágulos que estão tentando se formar. Se não parou o sangramento, a compressão direta falhou."
          },
          {
            id: "B",
            texto: "Aplico um torniquete improvisado (com tecido largo) na coxa, 5 a 7 centímetros acima do ferimento, e aperto até o sangramento parar.",
            correta: true,
            feedback: "Correto! Quando a compressão direta falha em uma hemorragia exsanguinante nos membros, o torniquete salva vidas e é recomendado nos protocolos modernos (Stop the Bleed)."
          },
          {
            id: "C",
            texto: "Elevo a perna da vítima acima da altura do coração, balançando-a.",
            correta: false,
            feedback: "Mover um membro com fratura exposta dessa forma causará dor indescritível e agravamento da fratura."
          },
          {
            id: "D",
            texto: "Faço um curativo com fita adesiva sobre o osso.",
            correta: false,
            feedback: "Isso não terá pressão suficiente para parar o sangramento arterial pulsante."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O sangramento parou após a aplicação do torniquete. Um colega do operário diz: 'Vi na internet que temos que afrouxar o torniquete a cada 10 minutos para não perder a perna!'. Qual a sua atitude?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Concordo e afrouxo o torniquete imediatamente.",
            correta: false,
            feedback: "Afrouxar o torniquete fará a vítima voltar a sangrar, liberar toxinas acumuladas na corrente sanguínea e perder o coágulo formado."
          },
          {
            id: "B",
            texto: "Mantenho o torniquete apertado, explico que não se afrouxa no APH, e anoto o horário exato da aplicação.",
            correta: true,
            feedback: "Perfeito! Torniquetes pré-hospitalares NUNCA devem ser afrouxados por leigos. Apenas médicos no hospital farão a remoção segura."
          },
          {
            id: "C",
            texto: "Tiro o torniquete, pois ele já fez o trabalho dele e a perna agora está segura.",
            correta: false,
            feedback: "O risco de morte por hemorragia é real; a pressão dos vasos romperá o coágulo assim que for afrouxado."
          },
          {
            id: "D",
            texto: "Afrouxo apenas um pouco, mantendo o sangue pingando levemente.",
            correta: false,
            feedback: "Sangramento contínuo, mesmo gotejando, leva ao choque prolongado."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Hemorragia controlada. O osso exposto e a ferida ainda estão em contato com o ar cheio de poeira da obra. O que fazer com a ferida aberta antes de imobilizar?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Cubro a ferida e o osso suavemente com um pano limpo ou gaze úmida estéril, se disponível, para proteger da contaminação.",
            correta: true,
            feedback: "Isso aí. O curativo frouxo sobre a fratura exposta minimiza a contaminação bacteriana externa até a chegada no hospital."
          },
          {
            id: "B",
            texto: "Jogo álcool 70% direto no osso para desinfetar.",
            correta: false,
            feedback: "O álcool causa necrose tecidual e dor excruciante em feridas abertas/ossos."
          },
          {
            id: "C",
            texto: "Amarro o osso firmemente com uma atadura apertada.",
            correta: false,
            feedback: "Apertar o osso quebrado exposto gera mais trauma mecânico. O curativo deve ser suave."
          },
          {
            id: "D",
            texto: "Não faço nada, deixo ao ar livre para o osso secar.",
            correta: false,
            feedback: "Deixar exposto ao ambiente sujo de obra aumenta o risco de osteomielite (infecção no osso)."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Devido à perda de sangue inicial, o operário está muito pálido, confuso e com sede intensa. Qual é a conduta preventiva contra o agravamento do choque?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Dou bastante água para repor o sangue perdido.",
            correta: false,
            feedback: "A vítima precisará de anestesia geral e cirurgia de urgência para a fratura. Dar água aumenta o risco de aspiração para os pulmões se ele vomitar."
          },
          {
            id: "B",
            texto: "Não ofereço líquidos, cubro-o com uma manta para evitar hipotermia e continuo monitorando sua consciência e respiração.",
            correta: true,
            feedback: "Correto. O tratamento do choque para leigos inclui controle de sangramento, prevenção de hipotermia (aquecimento) e restrição de líquidos por via oral."
          },
          {
            id: "C",
            texto: "Sento o paciente para que ele não desmaie.",
            correta: false,
            feedback: "Deixar o paciente deitado (em decúbito dorsal) ajuda na perfusão cerebral. Sentá-lo piora o choque."
          },
          {
            id: "D",
            texto: "Dou um pedaço de chocolate para dar energia.",
            correta: false,
            feedback: "Qualquer alimento sólido ou líquido é contraindicado no pré-operatório iminente."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "A ambulância do SAMU (Suporte Avançado) chega ao local. O que você informa ao médico regulador da equipe?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Apenas digo: 'Ele quebrou a perna, podem levar'.",
            correta: false,
            feedback: "Omissão de informações críticas, como a aplicação do torniquete, atrasa condutas vitais no hospital."
          },
          {
            id: "B",
            texto: "Relato o mecanismo de trauma (queda de 3m), a presença da fratura exposta, os sinais de choque, e o mais importante: o horário exato da aplicação do torniquete.",
            correta: true,
            feedback: "Excepcional! A passagem de informações completas salva o paciente. O tempo do torniquete é a informação mais vital para a equipe médica."
          },
          {
            id: "C",
            texto: "Digo que não fiz nada e estava só olhando.",
            correta: false,
            feedback: "A comunicação transparente das manobras feitas protege tanto o socorrista quanto a vítima."
          },
          {
            id: "D",
            texto: "Cobro do médico para que devolvam meu pano usado no torniquete.",
            correta: false,
            feedback: "Foco irrelevante perante a gravidade da emergência."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_53",
    titulo: "Acidente com Escorpião na Garagem",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Você está visitando a casa de parentes. Enquanto brinca na garagem, uma criança de 5 anos grita de dor desesperadamente. Você a encontra chorando, segurando o dedo da mão. Perto dali, você vê um escorpião amarelo fugindo para debaixo de caixas de papelão.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A criança chora copiosamente. O pai corre para a garagem e, ao ver o escorpião, quer levantar todas as caixas para pegá-lo. Qual sua primeira orientação?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Ajudo o pai a procurar o escorpião para matá-lo.",
            correta: false,
            feedback: "Isso os coloca em risco de sofrerem uma segunda picada. Escorpiões se escondem bem."
          },
          {
            id: "B",
            texto: "Digo para o pai parar imediatamente, manter-se afastado das caixas e focar apenas em socorrer a criança.",
            correta: true,
            feedback: "Correto! A prioridade é a criança e a segurança da cena. No Brasil, o escorpião amarelo (Tityus serrulatus) é o mais perigoso, não tente capturá-lo sem equipamento."
          },
          {
            id: "C",
            texto: "Jogo água com mangueira em todas as caixas para afogar o bicho.",
            correta: false,
            feedback: "Desperdício de tempo e causa mais alvoroço, além do animal poder fugir para áreas imprevisíveis."
          },
          {
            id: "D",
            texto: "Pego a criança e corro com ela pela rua para balançar a mão.",
            correta: false,
            feedback: "Movimento excessivo acelera a circulação do veneno."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A criança está segura e você observa o local da picada no dedo. Está apenas um pouco inchado e avermelhado, mas a dor relatada pela criança é extrema (incompatível com o visual). O que você faz no local da ferida?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Lavo o local apenas com água e sabão.",
            correta: true,
            feedback: "Perfeito. O tratamento local inicial se resume a higienização com água e sabão. O veneno causa dor excruciante sem muita lesão aparente na pele."
          },
          {
            id: "B",
            texto: "Faço um corte no dedo e sugo o veneno.",
            correta: false,
            feedback: "Mito. Como já vimos em picadas de cobra, não se corta nem se chupa venenos. No caso do escorpião, piora muito a dor."
          },
          {
            id: "C",
            texto: "Passo pomada para assaduras e coloco um band-aid apertado.",
            correta: false,
            feedback: "Pomadas não têm efeito contra a dor neurotóxica e podem dificultar a avaliação médica."
          },
          {
            id: "D",
            texto: "Esfrego alho picado no local.",
            correta: false,
            feedback: "Tratamento caseiro sem base científica que atrasa o socorro real e causa contaminação."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "A mãe da criança traz uma bolsa de gelo para colocar no dedo para 'adormecer a dor'. Como você orienta?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Apoio a decisão; gelo é o padrão para qualquer picada.",
            correta: false,
            feedback: "Na picada de escorpião, o frio pode aumentar a dor e o espasmo muscular local."
          },
          {
            id: "B",
            texto: "Digo para não usar gelo, e oriento a usar compressas mornas (água morna), pois o calor local alivia a dor causada pela peçonha do escorpião.",
            correta: true,
            feedback: "Excelente! As diretrizes do Ministério da Saúde recomendam compressas mornas ou água morna para alívio imediato da dor do escorpião."
          },
          {
            id: "C",
            texto: "Digo para mergulhar a mão na água fervendo.",
            correta: false,
            feedback: "Água muito quente ou fervendo causará queimadura grave na criança."
          },
          {
            id: "D",
            texto: "Amarro um torniquete no pulso para o gelo fazer mais efeito.",
            correta: false,
            feedback: "O torniquete é terminantemente proibido em acidentes com animais peçonhentos."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "O pai da criança sugere dar um xarope antialérgico (anti-histamínico) que eles têm em casa, imaginando que seja uma reação alérgica.",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Aconselho a dar uma dose alta do xarope.",
            correta: false,
            feedback: "A dor do escorpião é por neurotoxinas, não apenas histamina. Além disso, automedicar pode mascarar sintomas (ex: deixar a criança com sono)."
          },
          {
            id: "B",
            texto: "Oriento a não dar nenhum remédio sem prescrição e a focar no transporte e no alívio com compressa morna.",
            correta: true,
            feedback: "Correto! Automedicar crianças atrasa a avaliação e pode causar efeitos colaterais. O tratamento é soro específico e analgesia hospitalar."
          },
          {
            id: "C",
            texto: "Dou um analgésico forte de adulto para a criança mastigar.",
            correta: false,
            feedback: "Overdose acidental ou intoxicação infantil. Não dê medicamentos para adultos a crianças."
          },
          {
            id: "D",
            texto: "Mando a criança engolir carvão ativado.",
            correta: false,
            feedback: "Carvão ativado é para ingestão oral de tóxicos (venenos ingeridos), inútil para veneno inoculado na pele."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Vocês decidem levar a criança para a emergência. Porque em acidentes com escorpiões as crianças representam grupo de risco prioritário?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Porque elas choram mais alto, causando pânico.",
            correta: false,
            feedback: "O risco é fisiológico, não comportamental."
          },
          {
            id: "B",
            texto: "Apenas porque os ossos delas são menores.",
            correta: false,
            feedback: "O problema não é ósseo, mas sim a relação dose-peso."
          },
          {
            id: "C",
            texto: "Devido à menor massa corporal, o veneno tem concentração maior e pode causar efeitos sistêmicos graves e rápidos (como insuficiência cardíaca e edema pulmonar).",
            correta: true,
            feedback: "Exato! Crianças (especialmente menores de 10 anos) e idosos têm alta taxa de letalidade devido à relação entre a quantidade de veneno inoculada e a massa corporal."
          },
          {
            id: "D",
            texto: "Elas não correm mais riscos que os adultos, é apenas protocolo.",
            correta: false,
            feedback: "Crianças correm risco imediato de morte em acidentes com escorpião amarelo ou marrom."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Durante o trajeto de carro para o hospital, a criança que estava gritando começa a ter suor intenso, náusea e vômitos repetidos. Qual é o significado disso?",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Ela comeu algo estragado mais cedo.",
            correta: false,
            feedback: "Neste contexto, o vômito está ligado ao envenenamento."
          },
          {
            id: "B",
            texto: "São sinais de enjoo do movimento do carro.",
            correta: false,
            feedback: "Vômito profuso e sudorese (suor) são sinais clássicos da ação sistêmica do veneno do escorpião."
          },
          {
            id: "C",
            texto: "O quadro é classificado agora como moderado/grave, com sinais sistêmicos. É preciso manter as vias aéreas livres de vômito (lateralizar) e chegar rápido ao hospital.",
            correta: true,
            feedback: "Correto! Vômitos, sudorese, taquicardia ou sonolência indicam gravidade iminente. Virar a criança de lado (PLS) ou manter a cabeça lateralizada evita broncoaspiração."
          },
          {
            id: "D",
            texto: "Significa que o corpo expulsou o veneno pelo vômito.",
            correta: false,
            feedback: "Mito. O veneno está no sangue, não no estômago. O vômito é um reflexo neurológico causado pela toxina."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Para evitar que a criança engasgue com o próprio vômito no banco de trás do carro, qual deve ser a sua postura tática?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Sentar a criança com a cabeça jogada para trás.",
            correta: false,
            feedback: "Essa posição facilita o engasgo."
          },
          {
            id: "B",
            texto: "Virar a criança ou o seu rosto suavemente para a lateral (Posição Lateral) enquanto a ampara.",
            correta: true,
            feedback: "Correto. O decúbito lateral ou lateralização da cabeça previne a obstrução das vias aéreas por líquidos (vômito ou secreções)."
          },
          {
            id: "C",
            texto: "Colocar meu dedo na garganta da criança para forçar mais vômito e limpar tudo.",
            correta: false,
            feedback: "Pode causar lesão nas vias aéreas e induzir engasgo."
          },
          {
            id: "D",
            texto: "Tampar a boca dela para não sujar o carro.",
            correta: false,
            feedback: "Conduta absurda que pode causar asfixia."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Vocês estão chegando ao hospital. A criança começa a apresentar tremores leves (fasciculações) pelo corpo. Qual setor do hospital você deve procurar?",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Espero na fila da triagem comum do ambulatório.",
            correta: false,
            feedback: "Paciente com tremores e vômitos por escorpionismo é caso de sala vermelha (Emergência imediata)."
          },
          {
            id: "B",
            texto: "Entro diretamente pelo acesso da Emergência/Sala Vermelha, comunicando tratar-se de acidente com escorpião com sintomas sistêmicos em criança.",
            correta: true,
            feedback: "Correto! Isso ativará a equipe imediatamente para administração do Soro Antiescorpiônico (SAEE) e suporte de UTI, se necessário."
          },
          {
            id: "C",
            texto: "Vou para a farmácia do hospital pedir analgésico.",
            correta: false,
            feedback: "Farmácias não administram soros intravenosos."
          },
          {
            id: "D",
            texto: "Levo a criança para o banheiro do hospital para dar banho e aliviar o tremor.",
            correta: false,
            feedback: "Perda de tempo fatal."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "A equipe médica assume a criança e pede um relato rápido e claro. O que você informa?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Digo o tipo provável do escorpião (amarelo), tempo do acidente, o que foi feito no local (água morna e lavagem) e o início dos vômitos e tremores no carro.",
            correta: true,
            feedback: "Excepcional! A tríade (agente, tempo, clínica evolutiva) dá ao médico a clareza para classificar o caso como grave e aplicar o soro imediatamente."
          },
          {
            id: "B",
            texto: "Digo apenas que ela está com dor no dedo e precisa de Tylenol.",
            correta: false,
            feedback: "Isso mascara a gravidade real e pode induzir o médico a um erro de triagem se a criança estiver sonolenta no momento."
          },
          {
            id: "C",
            texto: "Digo que não prestei atenção a nada, pois estava preocupado dirigindo.",
            correta: false,
            feedback: "Como socorrista acompanhante, você é os olhos da equipe pré-hospitalar."
          },
          {
            id: "D",
            texto: "Dou bronca no médico para ele adivinhar o que aconteceu.",
            correta: false,
            feedback: "A postura hostil atrasa o atendimento da própria vítima."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_54",
    titulo: "Acidente de Carro: Suspeita de Fratura de Pelve e Fêmur",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você presencia um acidente de trânsito em um cruzamento. Um carro popular colidiu fortemente a lateral direita em um poste. No banco do passageiro (lado da batida), há uma mulher idosa consciente, mas queixando-se de dor insuportável no quadril e na coxa direita, que parece muito inchada e mais curta que a perna esquerda.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Antes de se aproximar do veículo, o que você deve fazer para garantir que você não seja a próxima vítima?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr para o carro buzinando.",
            correta: false,
            feedback: "Buzinar não garante que o fluxo pare de forma segura."
          },
          {
            id: "B",
            texto: "Sinalizar a via com o triângulo do seu carro, pedir para pessoas afastarem o fluxo de veículos e ligar o pisca-alerta, avaliando o risco da cena.",
            correta: true,
            feedback: "Correto! Em vias de trânsito, a sinalização prévia (isolamento da cena) evita o 'efeito dominó' de engavetamentos e novos atropelamentos."
          },
          {
            id: "C",
            texto: "Entrar na frente dos outros carros acenando com os braços.",
            correta: false,
            feedback: "Alto risco de atropelamento."
          },
          {
            id: "D",
            texto: "Filmar o acidente com o celular e postar pedindo ajuda.",
            correta: false,
            feedback: "Além de não proteger a cena, viola a privacidade e atrasa o atendimento."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está devidamente sinalizada. Ao abordar a vítima (idosa), você percebe o encurtamento da perna e dor excruciante na bacia (pelve). Ela está sentada no carro. Qual a conduta primária do resgatista leigo?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Puxar a senhora para fora do carro pelos braços.",
            correta: false,
            feedback: "Movimentação em suspeita de fratura de pelve ou fêmur causa hemorragia interna maciça (pode sangrar litros de sangue internamente) e dor extrema."
          },
          {
            id: "B",
            texto: "Pedir que ela saia andando devagar.",
            correta: false,
            feedback: "Com fratura de pelve/fêmur, ela é incapaz de andar e a sustentação de peso piora drasticamente a lesão."
          },
          {
            id: "C",
            texto: "Puxar a perna encurtada até ela voltar ao tamanho normal.",
            correta: false,
            feedback: "Mito. A tração e alinhamento de fêmur requerem talas específicas (como tala de tração) aplicadas apenas por paramédicos."
          },
          {
            id: "D",
            texto: "Orientar a vítima a não se mover de forma alguma (manter estabilidade manual na posição encontrada) e acionar imediatamente o 192/193 relatando suspeita de fratura de fêmur/pelve.",
            correta: true,
            feedback: "Exato! Fraturas de ossos longos e pelve são emergências com risco de morte por choque hipovolêmico interno. A imobilização in loco é vital."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: Repentinamente, você nota que está saindo fumaça escura do capô e chamas começam a surgir no motor. A vítima entra em pânico. Qual o princípio aplicável agora?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Dizer a ela que as regras de trauma dizem que não posso mexê-la e aguardar os bombeiros.",
            correta: false,
            feedback: "Se o carro incendiar, ela vai a óbito por queimaduras. Risco de vida iminente na cena sobrepõe a regra de imobilização ideal."
          },
          {
            id: "B",
            texto: "Realizar uma extração de emergência (retirada rápida), priorizando salvar a vida do fogo, arrastando-a para um local seguro o mais rápido e cuidadosamente possível.",
            correta: true,
            feedback: "Correto! Vida antes do membro. Se o local apresentar risco iminente de explosão, fogo ou afogamento, o socorrista deve retirar a vítima (manobra de extração rápida)."
          },
          {
            id: "C",
            texto: "Correr para longe e deixar a vítima sozinha.",
            correta: false,
            feedback: "Embora a autoproteção seja chave, com auxílio de outros, extrações rápidas costumam salvar vítimas presas sem chamas diretas na cabine ainda."
          },
          {
            id: "D",
            texto: "Jogar terra sobre a paciente dentro do carro.",
            correta: false,
            feedback: "Isso não apaga incêndio de motor e pode causar asfixia na paciente."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Com a ajuda de populares, você conseguiu fazer a extração de emergência puxando-a pelas roupas/axilas em linha reta para fora do carro em segurança (longe do fogo). Ao deitá-la no asfalto seguro, como deve ser o posicionamento dela?",
        tag_visual_detalhe: "acao_estabilizacao_cervical",
        opcoes: [
          {
            id: "A",
            texto: "Mando ela sentar para respirar melhor.",
            correta: false,
            feedback: "Pacientes com fratura de pelve devem permanecer deitados (decúbito dorsal plano) para evitar deslocamentos ósseos graves e agravo do choque."
          },
          {
            id: "B",
            texto: "Viro ela de lado (Posição Lateral de Segurança).",
            correta: false,
            feedback: "Mover lateralmente alguém com a bacia quebrada causará colapso dos ossos fragmentados."
          },
          {
            id: "C",
            texto: "Mantenho-a deitada de costas no chão (decúbito dorsal absoluto), com o mínimo de manipulação possível na região do quadril.",
            correta: true,
            feedback: "Correto. O decúbito dorsal plano oferece estabilidade à coluna e à pelve fraturada."
          },
          {
            id: "D",
            texto: "Dobro as duas pernas dela sobre o peito.",
            correta: false,
            feedback: "Isso agravaria incrivelmente a lesão pélvica e a dor."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Após cerca de 5 minutos, o rosto dela fica pálido, a pele pegajosa e os lábios arroxeados (cianose leve). Ela diz que está com muito frio, apesar do clima quente. O que está acontecendo internamente?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "É apenas um susto passageiro pelo acidente.",
            correta: false,
            feedback: "Não ignore sinais de choque; fraturas de fêmur e pelve comportam muito sangue (hemorragia interna invisível)."
          },
          {
            id: "B",
            texto: "O osso da pelve perfurou o pulmão dela.",
            correta: false,
            feedback: "A pelve e o pulmão são regiões anatomicamente distantes."
          },
          {
            id: "C",
            texto: "Ela provavelmente está desenvolvendo um quadro de Choque Hipovolêmico grave, pois fraturas de pelve e fêmur podem causar hemorragias internas ocultas de 1 a 2 litros de sangue.",
            correta: true,
            feedback: "Exato! Uma fratura de fêmur pode esconder até 1,5L de sangue, e a pelve mais de 2L. O choque é o esvaziamento do sangue circulante no corpo."
          },
          {
            id: "D",
            texto: "Ela está com hipoglicemia por falta de comer.",
            correta: false,
            feedback: "No trauma violento com fratura de grandes ossos, palidez e suor frio significam hemorragia oculta."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Percebendo os sinais de choque, um popular pega uma garrafinha de água e insiste: 'Toma um pouco de água para melhorar a pressão, senhora!'. Qual sua intervenção?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Permito que ele dê água; é bom para hidratar.",
            correta: false,
            feedback: "Água via oral não repõe volume de sangue rapidamente e predispõe a vítima a vômitos na intubação/cirurgia."
          },
          {
            id: "B",
            texto: "Apenas umedeço os lábios dela com a água.",
            correta: false,
            feedback: "É menos prejudicial, mas intervir com prevenção do choque (aquecer) é mais urgente que os lábios secos."
          },
          {
            id: "C",
            texto: "Impeço o popular, explico que ela não pode engolir nada devido ao risco de vômito e necessidade de cirurgia, e a cubro com uma blusa/manta térmica.",
            correta: true,
            feedback: "Excelente! Você combateu um mito comum, protegeu a via aérea dela para a cirurgia iminente e focou na prioridade: evitar hipotermia."
          },
          {
            id: "D",
            texto: "Dou bebida alcoólica para aliviar a dor.",
            correta: false,
            feedback: "Álcool é vasodilatador, acelera a queda de pressão e compromete o nível de consciência."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "A idosa começa a ficar sonolenta (rebaixamento de nível de consciência) e murmurações fracas. Qual técnica você usa para manter as vias aéreas dela protegidas mantendo a suspeita de trauma pélvico e de coluna?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Faço a manobra de elevação do queixo (chin-lift) ou tração da mandíbula (jaw-thrust) sem mexer o pescoço e a cabeça.",
            correta: true,
            feedback: "Perfeito! A abertura das vias aéreas (letra A do protocolo) em pacientes com suspeita de trauma raquimedular deve ser feita com técnicas que evitam dobrar/estender o pescoço."
          },
          {
            id: "B",
            texto: "Coloco um travesseiro alto debaixo da nuca dela.",
            correta: false,
            feedback: "Isso força a flexão cervical, podendo agravar lesões na medula espinhal."
          },
          {
            id: "C",
            texto: "Viro ela totalmente de lado.",
            correta: false,
            feedback: "Lembre-se da fratura instável de pelve: virar ela em bloco, se não estiver vomitando, é desnecessário e muito danoso."
          },
          {
            id: "D",
            texto: "Dou tapas fortes no rosto dela para acordá-la.",
            correta: false,
            feedback: "Estimular dor com tapas não melhora o nível de consciência (causado por choque) e agride o paciente."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Enquanto estabiliza a cabeça dela, você nota que a respiração dela está rápida e superficial (taquipneia do choque). Você precisa atualizar a central do SAMU (192). O que você relata?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Aviso que ela quebrou a perna e que eles precisam vir.",
            correta: false,
            feedback: "Apenas 'quebrou a perna' não passa a gravidade da hemorragia interna e do rebaixamento de consciência."
          },
          {
            id: "B",
            texto: "Relato que a vítima foi retirada do carro incendiado, tem suspeita de fratura de fêmur/pelve grave, e que agora apresenta palidez intensa e sonolência (sinais de choque em evolução).",
            correta: true,
            feedback: "Correto! Esta informação muda a prioridade da ambulância; o médico regulador enviará, com certeza, uma unidade de suporte avançado (USA/UTI Móvel)."
          },
          {
            id: "C",
            texto: "Digo para mandarem um caminhão de bombeiros apenas.",
            correta: false,
            feedback: "Ela precisa de intervenção médica (reposição de volume venoso imediato), não apenas extinção de chamas."
          },
          {
            id: "D",
            texto: "Desligo o telefone e espero eles aparecerem por milagre.",
            correta: false,
            feedback: "Atualizar os dados com a regulação médica pode gerar orientações essenciais em tempo real."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "A paciente para de responder e ao verificar, você constata que ela ainda respira (tem movimento no tórax), porém está inconsciente. O que fazer até o SAMU chegar?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Começo a RCP (massagem cardíaca) imediatamente.",
            correta: false,
            feedback: "Não se faz RCP em vítima que está respirando espontaneamente. O coração dela ainda bate."
          },
          {
            id: "B",
            texto: "Continuo monitorando a respiração rigorosamente, mantendo a via aérea aberta (jaw-thrust) e controlando o calor do corpo.",
            correta: true,
            feedback: "Exato. Em um estado de choque severo não compensado, a parada cardiorrespiratória (PCR) pode ser o próximo passo. A vigilância contínua é crítica."
          },
          {
            id: "C",
            texto: "Jogo água no rosto dela.",
            correta: false,
            feedback: "Água no rosto pode causar engasgo severo em paciente inconsciente."
          },
          {
            id: "D",
            texto: "Encho o peito dela de band-aids para estancar ferimentos invisíveis.",
            correta: false,
            feedback: "Ação irreal e inútil diante de hemorragia interna em cavidade pélvica."
          }
        ]
      },
      {
        id: "etapa_10",
        pergunta: "A viatura de Suporte Avançado chega acompanhada do caminhão dos bombeiros (para o carro). A equipe médica salta. Como você faz a transferência de cuidados dessa vítima crítica?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Fico em silêncio assistindo.",
            correta: false,
            feedback: "Você tem os dados vitais desde o momento do impacto."
          },
          {
            id: "B",
            texto: "Aproximo-me do médico, relato o trauma (batida de carro), a extração pelo incêndio, a deformidade da pelve/fêmur constatada antes de movimentar, e a evolução rápida do choque (palidez e perda da consciência há 2 minutos).",
            correta: true,
            feedback: "Perfeito! Você entregou um relatório no padrão adequado, garantindo que o médico saiba que houve movimento apenas por risco de vida, focando a equipe no controle do choque."
          },
          {
            id: "C",
            texto: "Grito para o médico correr, sem explicar o que houve.",
            correta: false,
            feedback: "Isso gera caos e atrasa a abordagem sistemática."
          },
          {
            id: "D",
            texto: "Reclamo da demora da ambulância.",
            correta: false,
            feedback: "Foco irrelevante neste momento, onde cada segundo conta para salvar a idosa."
          }
        ]
      }
    ]
  }
  {
    id: "cenario_55",
    titulo: "Acidente com Aranha-Marrom (Loxosceles)",
    tag_visual_cenario: "cenario_interno_comum",
    descricao_inicial: "Você está ajudando um vizinho a limpar entulhos em um porão escuro. Ele sente uma pequena picada na perna, como se fosse um mosquito, e ignora. Doze horas depois, ele te chama: o local está muito inchado, com uma mancha vermelha e roxa no centro, e ele sente dor em queimação e mal-estar geral.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A picada evoluiu para uma lesão dolorosa e com aspecto de necrose (escura no centro). Qual é a sua primeira ação de primeiros socorros?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Faço um corte superficial em forma de 'X' sobre a mancha roxa para drenar o veneno acumulado.",
            correta: false,
            feedback: "Mito gravíssimo. Cortar o local não remove o veneno (que já está espalhado após 12 horas) e causa uma infecção bacteriana grave na ferida que já tende à necrose."
          },
          {
            id: "B",
            texto: "Lavo a ferida apenas com água e sabão e oriento a buscar atendimento médico imediato.",
            correta: true,
            feedback: "Correto! Em acidentes por aranha-marrom, a picada inicial é indolor, mas horas depois causa dor e necrose. Lavar o local e ir ao hospital para avaliação do soro antiaracnídico é o procedimento padrão."
          },
          {
            id: "C",
            texto: "Amarro um torniquete acima da picada para o veneno não chegar ao coração.",
            correta: false,
            feedback: "O torniquete é inútil após 12 horas e totalmente contraindicado em acidentes peçonhentos, pois agrava a destruição dos tecidos da perna."
          },
          {
            id: "D",
            texto: "Aplico uma bolsa de água quente bem apertada no local para aliviar a dor.",
            correta: false,
            feedback: "O calor dilata os vasos e pode acelerar a propagação do veneno ou agravar o inchaço. Compressas não substituem a avaliação médica."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A esposa do seu vizinho traz uma pasta feita com fumo de rolo e pó de café, dizendo que isso 'puxa o veneno para fora'. O que você diz a ela?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Aceito a ajuda, pois receitas caseiras ajudam a limpar a ferida antes do hospital.",
            correta: false,
            feedback: "Substâncias caseiras em feridas abertas ou necróticas causam infecções severas e dificultam a avaliação do médico."
          },
          {
            id: "B",
            texto: "Agradeço, aplico a pasta, mas cubro com plástico filme para não sujar o carro.",
            correta: false,
            feedback: "Isso abafaria a infecção, piorando drasticamente o quadro do paciente."
          },
          {
            id: "C",
            texto: "Impeço a aplicação, explicando que qualquer substância na ferida causará infecção e que o tratamento seguro só pode ser feito no hospital.",
            correta: true,
            feedback: "Perfeito! Proteger o paciente de mitos perigosos é uma função crucial do socorrista leigo. Apenas água e sabão devem tocar a ferida."
          },
          {
            id: "D",
            texto: "Digo que só podemos colocar se tivermos passado álcool na pasta antes.",
            correta: false,
            feedback: "Álcool causa dor intensa e lesão nos tecidos; a pasta continua sendo proibida."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Enquanto se preparam para ir ao hospital, o vizinho vai ao banheiro e nota que sua urina está da cor de um refrigerante de cola (muito escura). Ele relata isso assustado. O que esse sinal indica?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Indica apenas que ele bebeu pouca água durante a limpeza do porão.",
            correta: false,
            feedback: "Neste contexto, urina muito escura é um sinal de alerta vermelho para o veneno, não apenas desidratação comum."
          },
          {
            id: "B",
            texto: "Indica que o veneno está sendo eliminado de forma segura pelos rins.",
            correta: false,
            feedback: "Mito. A cor escura indica que os rins estão em sofrimento."
          },
          {
            id: "C",
            texto: "Indica um possível dano sistêmico grave (hemólise), onde os glóbulos vermelhos são destruídos e sobrecarregam os rins. A ida ao hospital é uma emergência absoluta.",
            correta: true,
            feedback: "Exato! A urina escura (hemoglobinúria) é sinal da forma cutâneo-visceral do acidente por aranha-marrom, que pode levar à falência renal aguda e morte."
          },
          {
            id: "D",
            texto: "Indica que ele comeu algo estragado, sem relação com a picada.",
            correta: false,
            feedback: "No APH, associe os sinais agudos ao trauma ou envenenamento principal. É uma complicação sistêmica sistêmica direta."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Devido ao mal-estar e à urina escura, o vizinho está trêmulo. Como deve ser o transporte dele até o hospital?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Deixo ele ir dirigindo o próprio carro para se distrair da dor.",
            correta: false,
            feedback: "Ele pode desmaiar ao volante devido ao veneno, causando um acidente de trânsito."
          },
          {
            id: "B",
            texto: "Mando ele correr quarteirões até o pronto-socorro para o sangue circular.",
            correta: false,
            feedback: "O esforço físico acelera a absorção das toxinas no corpo."
          },
          {
            id: "C",
            texto: "Ele deve ser levado por mim ou pelo SAMU (192), mantendo-se em repouso absoluto no banco de trás, com a perna afetada em posição confortável.",
            correta: true,
            feedback: "Correto! O repouso retarda a absorção do veneno, e o transporte passivo garante a segurança caso ele perca a consciência."
          },
          {
            id: "D",
            texto: "Amarro as pernas dele juntas para ele não se debater no carro.",
            correta: false,
            feedback: "Imobilizações restritivas desnecessárias geram pânico e dor."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Você decide acionar o SAMU (192) em vez de dirigir, devido à gravidade. O que é fundamental relatar ao atendente?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "O histórico médico familiar do vizinho e o que ele comeu ontem.",
            correta: false,
            feedback: "Informações longas e irrelevantes atrasam o envio da ambulância."
          },
          {
            id: "B",
            texto: "Suspeita de picada de aranha há 12 horas, o aspecto de necrose na pele e, crucialmente, a urina muito escura e o mal-estar.",
            correta: true,
            feedback: "Excelente. A informação da urina escura avisa à regulação médica que os rins estão em risco, alterando a prioridade do atendimento."
          },
          {
            id: "C",
            texto: "Apenas que ele está com dor na perna e precisa de remédio.",
            correta: false,
            feedback: "Isso subestima a gravidade real do envenenamento sistêmico."
          },
          {
            id: "D",
            texto: "Que ele não quer ir ao hospital, mas eu quero que o médico venha convencê-lo.",
            correta: false,
            feedback: "O SAMU não é serviço de convencimento. Focar na clínica é o que ativa o socorro."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O SAMU chega à residência. Ao passar o caso para os paramédicos, o que você DEVE entregar ou informar, se for possível e seguro?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Uma lista dos bens materiais do vizinho.",
            correta: false,
            feedback: "Irrelevante para a emergência médica."
          },
          {
            id: "B",
            texto: "As informações da evolução desde a picada e, caso tenham fotografado ou capturado a aranha morta com segurança, mostrar para identificação do soro correto.",
            correta: true,
            feedback: "Perfeito! A identificação do animal (foto ou frasco seguro) é vital para a equipe hospitalar decidir se usa o Soro Antiaracnídico específico."
          },
          {
            id: "C",
            texto: "A pasta de fumo e café para o médico usar no hospital.",
            correta: false,
            feedback: "O hospital utilizará apenas protocolos médicos estéreis."
          },
          {
            id: "D",
            texto: "Cobrar que o paramédico dê o soro ali mesmo no sofá.",
            correta: false,
            feedback: "Soros antiveneno são feitos no hospital devido ao risco de choque anafilático grave durante a aplicação."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_56",
    titulo: "Trabalho Rural: Acidente com Jararaca (Botrópico)",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Você está ajudando a carpir um lote com um trabalhador rural. De repente, ele grita e dá um pulo para trás. Uma cobra parda e camuflada (Jararaca) o picou logo acima da botina. Ele cai sentado no chão, gemendo de dor intensa imediata.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A cobra ainda está no mato, a cerca de 2 metros de vocês. Qual a sua primeira ação instintiva?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Pegar a enxada e ir caçar a cobra no mato para levá-la ao hospital.",
            correta: false,
            feedback: "Regra número 1 do APH: não crie novas vítimas. Caçar a cobra aumenta o risco de você ser picado."
          },
          {
            id: "B",
            texto: "Garantir a segurança da cena afastando a si mesmo e a vítima para longe do raio de ação da cobra.",
            correta: true,
            feedback: "Correto! A segurança do socorrista e da vítima vem antes de qualquer atendimento médico. Afastar-se garante que não haverá nova picada."
          },
          {
            id: "C",
            texto: "Correr sozinho para buscar ajuda e deixar a vítima ali.",
            correta: false,
            feedback: "A vítima está na zona de perigo. Ela deve ser removida dali antes de você buscar ajuda."
          },
          {
            id: "D",
            texto: "Jogar pedras na cobra para assustá-la.",
            correta: false,
            feedback: "Isso pode atiçar o animal e torná-lo agressivo."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Vocês estão em local seguro. O pé do trabalhador começa a inchar rapidamente (edema) e sangrar bastante pelo local das presas. Ele usa uma botina de couro apertada. O que você faz?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Mantenho a botina apertada para servir como torniquete e impedir o veneno de subir.",
            correta: false,
            feedback: "O inchaço em acidentes botrópicos é massivo. Manter calçados cria um 'efeito garrote' que pode necrozar o pé, levando à amputação."
          },
          {
            id: "B",
            texto: "Retiro imediatamente a botina, meias, relógios ou qualquer anel, antes que o inchaço impeça a retirada.",
            correta: true,
            feedback: "Exato! Remover adornos e roupas apertadas é prioridade, pois o inchaço severo transformará esses itens em torniquetes mortais para os tecidos."
          },
          {
            id: "C",
            texto: "Faço pequenos furos na bota para aliviar a pressão, mas não a tiro.",
            correta: false,
            feedback: "A restrição continuará existindo; a bota deve ser totalmente removida."
          },
          {
            id: "D",
            texto: "Amarro as pernas dele juntas para imobilizar tudo.",
            correta: false,
            feedback: "Desnecessário e causa desconforto extremo sem benefício clínico."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "O sangramento nas marcas das presas não para devido à ação anticoagulante do veneno. Um terceiro trabalhador chega e sugere amarrar um cinto na coxa bem forte. Qual a conduta?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Faço o torniquete com o cinto, pois o sangramento é preocupante.",
            correta: false,
            feedback: "Torniquetes são terminantemente PROIBIDOS em picadas de cobra. Eles concentram o veneno, causando necrose (apodrecimento) do membro inteiro."
          },
          {
            id: "B",
            texto: "Impeço o torniquete, lavo o local com água, cubro frouxamente com pano limpo e mantenho o membro elevado/neutro.",
            correta: true,
            feedback: "Perfeito! Você evitou a necrose do membro. Em acidentes ofídicos, apenas lavamos e mantemos o repouso."
          },
          {
            id: "C",
            texto: "Deixo o colega sugar o veneno com a boca, já que ele se ofereceu.",
            correta: false,
            feedback: "Mito dos filmes de faroeste. Sugar não remove o veneno e pode envenenar quem suga através de cáries ou feridas na boca."
          },
          {
            id: "D",
            texto: "Jogo pó de café na ferida para estancar o sangue.",
            correta: false,
            feedback: "Causa infecção severa. O sangramento é sistêmico (coagulopatia) e só vai parar com o soro antiofídico no hospital."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "A caminhonete da fazenda está a uns 100 metros. O trabalhador diz que consegue ir pulando em um pé só. Você permite?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Sim, isso agiliza o resgate.",
            correta: false,
            feedback: "O esforço físico (pular) aumenta enormemente a frequência cardíaca, espalhando o veneno rapidamente por todo o corpo."
          },
          {
            id: "B",
            texto: "Não. Peço ajuda ao outro colega e carregamos a vítima (em cadeira ou nos braços), garantindo repouso absoluto.",
            correta: true,
            feedback: "Correto! Vítimas de animais peçonhentos não devem andar nem fazer esforço. O repouso retarda a absorção venosa e linfática do veneno."
          },
          {
            id: "C",
            texto: "Digo para ele ir rastejando para não cansar as pernas.",
            correta: false,
            feedback: "Rastejar exige imenso esforço físico global."
          },
          {
            id: "D",
            texto: "Mando ele correr o mais rápido possível para chegarmos logo.",
            correta: false,
            feedback: "Isso pode provocar um colapso sistêmico muito antes de chegarem ao hospital."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "No trajeto de carro para o hospital, a vítima cospe e você nota que a gengiva dele está sangrando espontaneamente, sem ter machucado a boca. O que isso significa?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Apenas que ele mordeu a língua de dor.",
            correta: false,
            feedback: "No contexto de acidente ofídico, sangramentos à distância não são coincidências."
          },
          {
            id: "B",
            texto: "É um sinal de distúrbio de coagulação (sangramento sistêmico) induzido pelo veneno botrópico, indicando quadro grave. Ligo pro 192 (SAMU) para possível interceptação.",
            correta: true,
            feedback: "Correto! O veneno da Jararaca destrói a capacidade de coagulação do sangue. Sangramento na gengiva ou urina mostra que o veneno já se espalhou."
          },
          {
            id: "C",
            texto: "Significa que o veneno está saindo pelo sangue da boca.",
            correta: false,
            feedback: "Mito. É uma hemorragia sistêmica, e ele corre risco de hemorragia interna grave (ex: AVC hemorrágico)."
          },
          {
            id: "D",
            texto: "Dou bastante água para ele engolir o sangue.",
            correta: false,
            feedback: "Dar água agora aumenta o risco de vômitos, que podem vir com sangue."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Devido ao sangramento e dor, o trabalhador fica muito pálido, com suor frio e meio desorientado. Como você o posiciona no banco de trás?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Sento ele bem ereto para não desmaiar.",
            correta: false,
            feedback: "Isso dificulta a chegada de sangue ao cérebro e agrava o choque."
          },
          {
            id: "B",
            texto: "Mantenho-o deitado, prevenindo perda de calor, para combater o estado de choque hipovolêmico.",
            correta: true,
            feedback: "Correto. Tratar o choque (palidez, suor frio) inclui mantê-lo deitado (decúbito dorsal) e aquecido durante o transporte."
          },
          {
            id: "C",
            texto: "Dou tapas de leve no rosto o tempo todo.",
            correta: false,
            feedback: "Desnecessário e irritante. Aja nas causas do choque (repouso, decúbito, temperatura)."
          },
          {
            id: "D",
            texto: "Viro ele de bruços.",
            correta: false,
            feedback: "Prejudica a respiração e a monitoração."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Vocês chegam ao Hospital de Referência. O médico pergunta sobre as características do animal e os sintomas. Qual seu relato?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Não sei nada de cobra, só curem ele.",
            correta: false,
            feedback: "Ocultar informações atrasa a escolha do soro correto."
          },
          {
            id: "B",
            texto: "Descrevo que a cobra era parda/camuflada (Jararaca), informo o horário do ataque e relato o inchaço severo, a dor e o sangramento na gengiva no caminho.",
            correta: true,
            feedback: "Perfeito! Esse relato clínico dá ao médico o diagnóstico exato para aplicar o Soro Antibotrópico (SAB) em dose adequada."
          },
          {
            id: "C",
            texto: "Digo que apliquei um torniquete que resolveu tudo.",
            correta: false,
            feedback: "Se você não fez isso, não minta. Se tivesse feito, o médico precisaria saber para se preparar para o agravamento ao retirar."
          },
          {
            id: "D",
            texto: "Exijo que deem um analgésico e o mandem para casa.",
            correta: false,
            feedback: "Apenas o médico pode determinar a alta após exames laboratoriais de coagulação."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_57",
    titulo: "Ataque de Enxame de Abelhas no Parque (Anafilaxia)",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Você está caminhando num parque quando ouve gritos. Um adolescente esbarrou em uma lixeira onde havia um enxame de abelhas. Ele correu, mas foi picado dezenas de vezes no rosto, pescoço e braços. Ele se atira no gramado, debatendo-se para espantá-las.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ainda há algumas abelhas voando ao redor dele. Qual deve ser sua primeira atitude tática?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Corro até ele balançando minha blusa para espantar as abelhas.",
            correta: false,
            feedback: "Balançar panos irrita mais as abelhas, que liberarão feromônios de ataque contra você."
          },
          {
            id: "B",
            texto: "Pulo em cima dele para protegê-lo com meu corpo.",
            correta: false,
            feedback: "Você se tornará a segunda vítima."
          },
          {
            id: "C",
            texto: "Oriento-o gritando de longe para que proteja o rosto, corra para um local fechado ou se afaste rapidamente da zona do enxame antes de eu me aproximar com segurança.",
            correta: true,
            feedback: "Correto! O protocolo de fuga de abelhas exige afastar-se rápido e não se debater. A sua segurança é prioridade 1."
          },
          {
            id: "D",
            texto: "Mando ele se fingir de morto.",
            correta: false,
            feedback: "As abelhas continuarão picando."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Ele corre para um quiosque seguro, as abelhas se dispersam. Ele tem muitos ferrões cravados na pele, cada um com uma pequena bolsa de veneno pulsando. Como você remove os ferrões?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Uso meus dedos em formato de pinça para puxar cada um.",
            correta: false,
            feedback: "Apertar o ferrão espreme a bolsa de veneno residual, injetando ainda mais veneno na vítima."
          },
          {
            id: "B",
            texto: "Deixo os ferrões lá, pois cairão sozinhos com o tempo.",
            correta: false,
            feedback: "Eles continuam injetando veneno por vários minutos."
          },
          {
            id: "C",
            texto: "Raspo a pele lateralmente usando a borda de um cartão de crédito, documento ou faca sem corte, para ejetar os ferrões sem apertar as bolsas de veneno.",
            correta: true,
            feedback: "Exato! A técnica de raspagem (com lâmina cega ou cartão plástico) remove o ferrão de baixo para cima, sem espremer o veneno restante."
          },
          {
            id: "D",
            texto: "Passo um pano com álcool esfregando com força.",
            correta: false,
            feedback: "Isso espremerá os ferrões e causará dor aguda."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Enquanto você raspa os ferrões, o adolescente diz, com a voz ofegante: 'Eu sou muito alérgico a abelhas... minha garganta está fechando!'. Qual a prioridade agora?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Terminar de tirar todos os 30 ferrões antes de fazer qualquer outra coisa.",
            correta: false,
            feedback: "O risco de morte por fechamento da via aérea (edema de glote) é mais rápido que a retirada dos ferrões restantes."
          },
          {
            id: "B",
            texto: "Parar tudo e ligar imediatamente para o SAMU (192), relatando quadro de anafilaxia severa (choque anafilático) com obstrução respiratória.",
            correta: true,
            feedback: "Perfeito! A anafilaxia é uma emergência extrema de vias aéreas e circulação. Cada segundo conta para o envio da UTI Móvel."
          },
          {
            id: "C",
            texto: "Dar bastante água para lavar a garganta dele por dentro.",
            correta: false,
            feedback: "Com a garganta fechando, ele vai engasgar ou aspirar água para o pulmão."
          },
          {
            id: "D",
            texto: "Fazer massagem cardíaca.",
            correta: false,
            feedback: "Ele ainda está respirando e conversando; a RCP só é feita se houver parada cardiorrespiratória (ausência de pulso/respiração normal)."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Ele começa a fazer um ruído agudo ao respirar (estridor) e fica muito agitado pela falta de ar. Como você o posiciona enquanto aguarda o SAMU?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Deito ele de costas e levanto as pernas dele.",
            correta: false,
            feedback: "Isso aumenta a pressão no diafragma e piora imensamente a dificuldade respiratória que ele já tem."
          },
          {
            id: "B",
            texto: "Obrigo-o a caminhar de um lado para o outro para o ar entrar nos pulmões.",
            correta: false,
            feedback: "Caminhar consome oxigênio vital que ele não tem como repor agora."
          },
          {
            id: "C",
            texto: "Deixo-o na posição em que se sinta mais confortável para respirar, geralmente sentado ou semissentado, afrouxando as roupas do pescoço.",
            correta: true,
            feedback: "Correto! Pessoas em desconforto respiratório instintivamente preferem sentar. Essa posição facilita a expansão dos pulmões e usa a gravidade a favor."
          },
          {
            id: "D",
            texto: "Viro-o de bruços.",
            correta: false,
            feedback: "Restringe a expansão torácica."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Um transeunte se aproxima com uma caneta e diz: 'Eu vi na TV, temos que furar a garganta dele com a caneta para ele respirar!'. O que você faz?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Deixo ele fazer, pois a traqueostomia de urgência salva vidas.",
            correta: false,
            feedback: "Mito cinematográfico perigoso. Tentar uma cricotireoidostomia por leigos causará hemorragia severa, laceração e morte imediata."
          },
          {
            id: "B",
            texto: "Pego a caneta e eu mesmo faço, já que sou o socorrista.",
            correta: false,
            feedback: "Procedimentos invasivos são de uso restrito a médicos."
          },
          {
            id: "C",
            texto: "Bloqueio o homem com firmeza, afirmo que procedimentos invasivos matam e peço que ele vá até a rua para sinalizar para a ambulância.",
            correta: true,
            feedback: "Excelente! Você conteve uma conduta fatal (mito da TV) e redirecionou a energia do terceiro para algo útil (sinalizar o resgate)."
          },
          {
            id: "D",
            texto: "Começo a brigar fisicamente com o homem.",
            correta: false,
            feedback: "Desvia seu foco da vítima que está asfixiando."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O adolescente repentinamente desmaia. Você verifica e percebe que ele ainda respira, porém muito fraco e rápido, e está suando frio e pálido. Qual a sua ação de SBV?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Dou tapas no rosto gritando para ele acordar.",
            correta: false,
            feedback: "Ele está inconsciente por falta de oxigênio (hipóxia) e choque, tapas não revertem isso."
          },
          {
            id: "B",
            texto: "Coloco-o em Posição Lateral de Segurança (PLS) para evitar que a língua obstrua ainda mais a via aérea ou que ele engasgue com saliva, e monitoro a respiração de perto.",
            correta: true,
            feedback: "Correto! Paciente inconsciente que ainda respira deve ter a via aérea protegida; a PLS é a conduta ideal para prevenir obstrução pela própria língua ou secreções."
          },
          {
            id: "C",
            texto: "Começo as compressões cardíacas.",
            correta: false,
            feedback: "Ainda há respiração presente, o coração está batendo."
          },
          {
            id: "D",
            texto: "Faço respiração boca a boca repetidamente.",
            correta: false,
            feedback: "O problema não é só a ventilação, mas a obstrução física das vias. Sem abrir a via (ou PLS), o ar não passa."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Dois minutos depois, o tórax dele para de se mover. Você checa e ele NÃO respira mais e não responde. O quadro evoluiu para Parada Cardiorrespiratória (PCR). O que você inicia Imediatamente?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Espero o SAMU chegar, pois não há mais o que eu possa fazer.",
            correta: false,
            feedback: "A morte cerebral ocorre em 4 a 6 minutos sem oxigênio. A inação garante a morte."
          },
          {
            id: "B",
            texto: "Início imediatamente as compressões torácicas (RCP) contínuas, fortes e rápidas (100 a 120 por minuto), no centro do peito.",
            correta: true,
            feedback: "Vital! O choque anafilático levou à PCR. A ressuscitação cardiopulmonar imediata mantém o sangue circulando até a chegada do desfibrilador/remédios."
          },
          {
            id: "C",
            texto: "Procuro um pulso no pulso dele por 5 minutos.",
            correta: false,
            feedback: "Leigos não perdem tempo checando pulso; a ausência de respiração normal dita o início imediato da RCP."
          },
          {
            id: "D",
            texto: "Abandono a vítima e corro para buscar a ambulância no trânsito.",
            correta: false,
            feedback: "Você já ligou para o SAMU. Interromper as manobras no paciente asfixiado é fatal."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "A unidade de Suporte Avançado (USA) do SAMU chega, e a equipe assume a RCP. Como é a sua transição de cuidados?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Saio de perto sem falar nada, pois estou cansado.",
            correta: false,
            feedback: "Suas informações ditam o protocolo medicamentoso médico (ex: adrenalina)."
          },
          {
            id: "B",
            texto: "Informo rápido e claramente: 'Ataque de abelhas. Ele disse ser alérgico, teve edema de glote e parou de respirar há 3 minutos. Fiz RCP contínua até vocês chegarem'.",
            correta: true,
            feedback: "Fantástico! Esse histórico imediato direciona o médico para o uso urgente de Epinefrina (Adrenalina), além do tubo de respiração. Você fechou a cadeia de sobrevivência!"
          },
          {
            id: "C",
            texto: "Digo que ele teve um ataque cardíaco do nada.",
            correta: false,
            feedback: "Omitir a anafilaxia como causa da parada leva a um tratamento clínico inadequado."
          },
          {
            id: "D",
            texto: "Sento no chão e choro, pedindo para eles o salvarem.",
            correta: false,
            feedback: "Mantenha o foco objetivo até a passagem de plantão estar completa."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_58",
    titulo: "Praia: Acidente com Água-viva (Caravela-portuguesa)",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Em um dia de praia lotada, uma jovem sai do mar gritando de dor, segurando a perna. Você nota que há longas marcas lineares, avermelhadas e inchadas na pele, parecendo chicotadas, típicas de contato com tentáculos de água-viva ou caravela.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A vítima está desesperada de dor, coçando freneticamente as marcas vermelhas na coxa. Qual a sua primeira instrução?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Ajudo a coçar para aliviar a queimação.",
            correta: false,
            feedback: "A fricção fará com que as cápsulas de veneno (nematocistos) na pele explodam, injetando ainda mais veneno."
          },
          {
            id: "B",
            texto: "Seguro as mãos dela e ordeno firmemente que ela não esfregue ou coce o local de jeito nenhum.",
            correta: true,
            feedback: "Correto! A prioridade mecânica é impedir a fricção (esfregar), que aciona as toxinas dos tentáculos invisíveis que ainda estão grudados."
          },
          {
            id: "C",
            texto: "Esfrego areia seca no local para arrancar o veneno.",
            correta: false,
            feedback: "Areia age como uma lixa e causará a explosão de milhares de células de veneno na pele dela."
          },
          {
            id: "D",
            texto: "Digo para ela voltar correndo para o mar para lavar as feridas nadando.",
            correta: false,
            feedback: "Ela pode desmaiar pela dor no mar e se afogar, ou encontrar mais caravelas."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você precisa lavar o local para tirar os restos de tentáculos, mas o posto de guarda-vidas está longe. O que você usa para lavar a perna da vítima?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Água doce gelada da minha garrafa térmica.",
            correta: false,
            feedback: "Água doce causa uma reação química (osmose) que faz os nematocistos estourarem, piorando a dor subitamente."
          },
          {
            id: "B",
            texto: "Álcool em gel que tenho na bolsa.",
            correta: false,
            feedback: "Álcool piora a queimação e estimula a injeção de veneno."
          },
          {
            id: "C",
            texto: "Lavo abundantemente com água do mar e peço para alguém buscar vinagre no quiosque mais próximo.",
            correta: true,
            feedback: "Excelente! A água do mar lava sem estourar as células de veneno (pois tem a mesma salinidade). O vinagre (ácido acético) neutraliza as cápsulas de veneno que ainda não estouraram."
          },
          {
            id: "D",
            texto: "Esfrego sabonete com esponja.",
            correta: false,
            feedback: "A fricção com esponja causaria uma dor insuportável por injeção massiva de peçonha."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Um banhista se aproxima e diz: 'Gente, eu sei o que fazer. Alguém tem que urinar na perna dela, xixi cura picada de água-viva!'. Qual a sua atitude?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Deixo o rapaz agir, pois é um conhecimento popular de surfistas.",
            correta: false,
            feedback: "Mito muito difundido por filmes! A urina não tem eficácia comprovada, pode ter ph e temperatura variáveis que pioram a liberação de veneno, além de causar infecção e humilhação."
          },
          {
            id: "B",
            texto: "Impeço firmemente a ação, explico que isso é um mito perigoso e mantenho o foco no banho de vinagre e água salgada.",
            correta: true,
            feedback: "Perfeito. O socorrista educado protege a vítima não apenas do veneno, mas também de constrangimentos e mitos."
          },
          {
            id: "C",
            texto: "Digo que só serve se for a urina da própria vítima.",
            correta: false,
            feedback: "Não serve de ninguém. É uma prática incorreta no APH moderno."
          },
          {
            id: "D",
            texto: "Urino eu mesmo, já que sou o socorrista responsável.",
            correta: false,
            feedback: "Conduta antiética, sem base científica e ineficaz."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Após banhar com vinagre, você percebe que ainda há pequenos fios azulados (tentáculos) grudados na pele. Como retirá-los com segurança?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Arranco-os puxando com meus dedos nus rapidamente.",
            correta: false,
            feedback: "O veneno penetrará na sua mão, tornando você a segunda vítima do caso."
          },
          {
            id: "B",
            texto: "Raspo a pele suavemente usando uma espátula plástica, um palito de picolé ou um cartão, ou uso uma pinça, sem tocar nos tentáculos com as mãos desprotegidas.",
            correta: true,
            feedback: "Correto! A remoção mecânica indireta é segura para a vítima (já neutralizada pelo vinagre) e impede que o socorrista se queime."
          },
          {
            id: "C",
            texto: "Deixo secar no sol até caírem como cascas.",
            correta: false,
            feedback: "Os tentáculos podem se reativar, prolongando o dano tecidual."
          },
          {
            id: "D",
            texto: "Aperto os tentáculos contra a pele para esvaziá-los antes de puxar.",
            correta: false,
            feedback: "Isso injeta toda a carga tóxica final na vítima."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O local agora está limpo, mas a jovem chora muito de dor e ardência aguda. Qual é a conduta para alívio analgésico local que você pode improvisar ali?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Fazer uma compressa direta com gelo de água doce que vende na praia.",
            correta: false,
            feedback: "Gelo direto feito de água doce derrete e aciona as células tóxicas remanescentes na pele."
          },
          {
            id: "B",
            texto: "Aplicar compressas frias embaladas em sacos plásticos (para não vazar água doce) ou banhos de água do mar gelada.",
            correta: true,
            feedback: "Exato! O frio (sem contato de água doce) causa vasoconstrição e alivia muito a dor da queimadura química."
          },
          {
            id: "C",
            texto: "Passar pasta de dente com hortelã para refrescar.",
            correta: false,
            feedback: "Produtos químicos agridem a pele queimada."
          },
          {
            id: "D",
            texto: "Colocar folhas de amendoeira por cima.",
            correta: false,
            feedback: "Tratamento folclórico ineficaz."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Passados 15 minutos, a jovem diz que seu peito está apertado, tem náuseas e você nota que sua voz está rouca. O que esta mudança no quadro indica?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "É apenas ansiedade pelo susto na água.",
            correta: false,
            feedback: "Aperto no peito, rouquidão e náuseas após envenenamento são sinais de alerta de reação sistêmica/alérgica grave."
          },
          {
            id: "B",
            texto: "O veneno das caravelas pode desencadear choque anafilático ou reações tóxicas sistêmicas (arritmias, broncoespasmo). Isso é emergência médica e aciono o 193/192 imediatamente.",
            correta: true,
            feedback: "Correto! A maioria dos acidentes é só dor local, mas as toxinas (especialmente de caravelas) podem evoluir para reações sistêmicas letais rapidamente."
          },
          {
            id: "C",
            texto: "O vinagre fez mal para ela, devo lavar tudo com sabão.",
            correta: false,
            feedback: "A reação é da peçonha circulando na corrente sanguínea, não do vinagre superficial."
          },
          {
            id: "D",
            texto: "Significa que a dor vai passar em breve e ela vai relaxar.",
            correta: false,
            feedback: "Ignorar sinais respiratórios é um erro fatal no APH."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Com a respiração dela ficando difícil (chiado no peito), qual a melhor posição para mantê-la enquanto os bombeiros/SAMU chegam?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Deitada com as pernas para cima.",
            correta: false,
            feedback: "Pioraria o esforço para respirar."
          },
          {
            id: "B",
            texto: "Sentada com a cabeça apoiada entre os joelhos.",
            correta: false,
            feedback: "Posição para evitar desmaio por vasovagal, mas restringe o tórax."
          },
          {
            id: "C",
            texto: "Apoiá-la na areia em posição semissentada ou sentada, que facilita a mecânica da respiração.",
            correta: true,
            feedback: "Correto. Essa posição usa a gravidade para baixar o diafragma e abrir mais espaço para os pulmões se encherem de ar."
          },
          {
            id: "D",
            texto: "Forçá-la a ficar em pé pulando.",
            correta: false,
            feedback: "Aumenta o cansaço e espalha o veneno."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "De repente, ela diz 'Tudo está ficando escuro...' e fica muito pálida e suada (Choque anafilático hipotensivo). O que você altera na posição dela agora?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Continuo deixando ela sentada a qualquer custo.",
            correta: false,
            feedback: "A pressão sanguínea caiu; sentada, o sangue não chega ao cérebro e ela desmaiará de vez."
          },
          {
            id: "B",
            texto: "Deito-a imediatamente de costas no chão (decúbito dorsal).",
            correta: true,
            feedback: "Exato! Quando os sinais de choque (pressão despencando) superam o desconforto respiratório ou a pessoa perde a consciência, a posição deitada facilita a chegada de sangue ao cérebro."
          },
          {
            id: "C",
            texto: "Viro-a de barriga para baixo.",
            correta: false,
            feedback: "Impede o monitoramento das vias aéreas e circulação."
          },
          {
            id: "D",
            texto: "Sacudo ela com força para não apagar.",
            correta: false,
            feedback: "Sacudir agrava o choque circulatório e pode gerar trauma."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "O quadriciclo dos Guarda-Vidas do Corpo de Bombeiros chega com oxigênio e rádio médico. Qual a sua fala na transição?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Falo apenas: 'Ela encostou num bicho do mar'.",
            correta: false,
            feedback: "Muito vago para uma paciente entrando em choque."
          },
          {
            id: "B",
            texto: "Descrevo claramente: 'Contato com caravela/água-viva. Lavei com água do mar e vinagre, não coçou. Mas ela começou com chiado no peito há 10 minutos e agora ficou muito pálida e com quase perda de consciência'.",
            correta: true,
            feedback: "Excepcional. Essa passagem de plantão clara mostra a evolução do trauma local para choque sistêmico alérgico, acelerando o suporte avançado dos Bombeiros."
          },
          {
            id: "C",
            texto: "Invento que ela se afogou para eles trabalharem mais rápido.",
            correta: false,
            feedback: "O tratamento para afogamento é totalmente diferente do choque anafilático. Mente na triagem é fatal."
          },
          {
            id: "D",
            texto: "Brigo com eles pela falta de avisos de perigo na praia.",
            correta: false,
            feedback: "Hora errada para discussões de gestão pública; o foco deve ser estritamente clínico na vítima."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_59",
    titulo: "Sítio: Acidente com Taturana (Lonomia)",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Durante uma roçada no sítio, um trabalhador escora o braço no tronco de uma árvore e dá um grito de dor lancinante. Você se aproxima e vê que ele encostou em um grupo de taturanas (lagartas peludas) marrom-esverdeadas. O braço dele tem marcas vermelhas intensas e queimação insuportável.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ele está de pé, chacoalhando o braço de dor. O agrupamento de lagartas ainda está no tronco ao lado dele. Qual sua primeira ação de segurança?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Esmagar as lagartas no tronco com minhas próprias mãos para eliminá-las.",
            correta: false,
            feedback: "As cerdas venenosas perfurariam sua mão, transferindo o veneno neurotóxico/coagulante para você."
          },
          {
            id: "B",
            texto: "Afastar o trabalhador imediatamente da árvore com cuidado e não tocar nas lagartas de forma alguma.",
            correta: true,
            feedback: "Correto! Evacuar o local previne acidentes secundários. As lagartas do gênero Lonomia ficam camufladas e em grupo no tronco."
          },
          {
            id: "C",
            texto: "Bater nas costas dele para ver se caiu alguma na camisa.",
            correta: false,
            feedback: "Se houver lagartas, bater vai esmagá-las contra a pele, aumentando o envenenamento."
          },
          {
            id: "D",
            texto: "Soprar o braço dele para aliviar a ardência.",
            correta: false,
            feedback: "Não tem efeito prático e o mantém perto do risco."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Em local seguro, ele queixa-se que a dor é irradiada para a axila. O que você faz como primeiros socorros locais para o contato com taturana?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Lavo cuidadosamente com água corrente fria e aplico compressas frias locais.",
            correta: true,
            feedback: "Exato! A água limpa e fria alivia o ardor, e a compressa fria (sem contato direto de gelo na pele) causa leve analgesia e retarda a circulação periférica."
          },
          {
            id: "B",
            texto: "Jogo álcool com querosene, prática comum na roça.",
            correta: false,
            feedback: "Derivados de petróleo ou álcool ressecam a pele já ferida quimicamente e causam queimaduras graves secundárias."
          },
          {
            id: "C",
            texto: "Esfrego terra seca na ferida para sugar os pelos da lagarta.",
            correta: false,
            feedback: "Friccionar quebra as cerdas venenosas na pele e introduz bactérias do solo."
          },
          {
            id: "D",
            texto: "Amarro o braço com uma atadura bem apertada.",
            correta: false,
            feedback: "Garrotes pioram dor e não devem ser usados em acidentes peçonhentos."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Apesar das compressas, ele começa a ter dor de cabeça forte (cefaléia) e sente muita vontade de vomitar. Qual conduta posicional previne aspiração caso ele vomite?",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Mando ele deitar de barriga para cima e colocar um travesseiro.",
            correta: false,
            feedback: "Se ele vomitar e estiver levemente tonto pelo veneno, vai aspirar para os pulmões (broncoaspiração)."
          },
          {
            id: "B",
            texto: "Acomodo-o deitado de lado (Posição Lateral) ou sentado inclinado para frente, monitorando-o.",
            correta: true,
            feedback: "Correto! Na presença de náuseas graves, lateralizar a vítima garante que o vômito seja expulso pela gravidade, sem risco de sufocamento."
          },
          {
            id: "C",
            texto: "Mando ele ficar de pé curvado na cerca.",
            correta: false,
            feedback: "Risco de desmaio repentino e queda traumática."
          },
          {
            id: "D",
            texto: "Faço ele beber 1 litro de leite para cortar o vômito.",
            correta: false,
            feedback: "Líquidos em grande volume forçarão o vômito iminente. Nunca dê nada oral se o paciente estiver nauseado/inconsciente."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "REVIRAVOLTA: O trabalhador vomita e você nota pequenos fios de sangue no vômito. Ao falar com ele, você percebe que as gengivas também estão sangrando sutilmente. Qual sua avaliação no contexto do envenenamento?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "A taturana devia ter espinhos de metal escondidos.",
            correta: false,
            feedback: "O envenenamento é biológico, não mecânico."
          },
          {
            id: "B",
            texto: "Ele está apenas com deficiência de vitaminas na gengiva e o vômito feriu a garganta.",
            correta: false,
            feedback: "Coincidências são perigosas no APH."
          },
          {
            id: "C",
            texto: "Identifico um provável quadro de Síndrome Hemorrágica (ação da lagarta Lonomia). É uma emergência absoluta; aciono o resgate/hospital rapidamente.",
            correta: true,
            feedback: "Excepcional percepção. A Lonomia obliqua no sul/sudeste do Brasil causa distúrbios graves de coagulação no sangue. Sangramentos à distância (gengiva, urina, cortes antigos) são o sinal de alerta vermelho."
          },
          {
            id: "D",
            texto: "Concluo que o veneno foi curado porque o sangue estragado está saindo.",
            correta: false,
            feedback: "Ele corre risco de hemorragia interna cerebral ou abdominal fatal. O sangramento é patológico."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Devido aos sangramentos, o paciente relata tontura, fraqueza, e a pele dele está úmida e fria (sudorese). Você já chamou o socorro (192). O que fazer enquanto o SAMU não chega?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Lavo ele com água fria de mangueira para acordá-lo.",
            correta: false,
            feedback: "Causaria hipotermia severa, o que piora a capacidade do sangue de coagular."
          },
          {
            id: "B",
            texto: "Trato os sinais de Choque (Hipovolêmico pelo sangramento), mantendo-o deitado, aquecendo-o com um casaco e restringindo líquidos orais.",
            correta: true,
            feedback: "Correto! O suporte básico do choque: deitar, aquecer (prevenir perda de calor) e confortar. Isso ajuda na perfusão sanguínea do cérebro."
          },
          {
            id: "C",
            texto: "Eleva as mãos dele para o céu rezando.",
            correta: false,
            feedback: "Sem efeito fisiológico para estabilizar o choque."
          },
          {
            id: "D",
            texto: "Começo manobras de reanimação (RCP).",
            correta: false,
            feedback: "Ele está respirando e conversando (tonto, mas alerta). RCP só em parada cardíaca."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "A dor de cabeça do trabalhador piora muito. Um familiar traz uma aspirina (AAS - Ácido Acetilsalicílico) que tinha no bolso e diz que vai curar a dor de cabeça e melhorar a pressão. Você permite?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Sim, analgésico é permitido para leigos se a dor for forte.",
            correta: false,
            feedback: "Medicamentos com AAS interferem na agregação plaquetária."
          },
          {
            id: "B",
            texto: "Não. Impeço duramente, pois a aspirina é anticoagulante e pioraria massivamente a síndrome hemorrágica em andamento.",
            correta: true,
            feedback: "Perfeito! Em vítimas de envenenamento com risco hemorrágico (cobras, lagartas lonomia, ou dengue), a aspirina (AAS) é um veneno secundário grave."
          },
          {
            id: "C",
            texto: "Apenas se ele mastigar bem a pílula.",
            correta: false,
            feedback: "A absorção ocorrerá de qualquer forma; a contraindicação é absoluta."
          },
          {
            id: "D",
            texto: "Dou o remédio para ele se calar, já que o choro irrita.",
            correta: false,
            feedback: "Atitude antiprofissional e perigosa contra a vida da vítima."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Faltando 15 minutos para o SAMU chegar, o paciente fica completamente molinho, revira os olhos e apaga. Qual é o seu primeiro passo do protocolo XABCDE ao notar que alguém caiu inconsciente?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Checo se o peito/barriga dele está se movendo para ver se está respirando normalmente (avaliação de vias aéreas e respiração - AB).",
            correta: true,
            feedback: "Exato! A perda de consciência exige verificação imediata da respiração torácica (ou checar o pulso e respiração se for profissional), para saber se é um desmaio ou uma parada cardíaca."
          },
          {
            id: "B",
            texto: "Faço respiração boca a boca instintivamente.",
            correta: false,
            feedback: "Não se ventila sem antes observar se a pessoa está respirando sozinha."
          },
          {
            id: "C",
            texto: "Encho um balde de água gelada e jogo na cabeça dele.",
            correta: false,
            feedback: "Risco de choque térmico e broncoaspiração de água."
          },
          {
            id: "D",
            texto: "Vou medir a pressão arterial com um aparelho.",
            correta: false,
            feedback: "Saber a pressão agora é inútil se ele estiver sem respirar. O suporte de vida imediato é clínico, não instrumentalizado para leigos."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Você observa o peito subir e descer normalmente (ele está respirando de forma ritmada). Como o familiar e você devem agir nesta fase de espera do SAMU?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "O familiar faz massagem no peito e eu aperto as pernas.",
            correta: false,
            feedback: "Ele está respirando. Massagem torácica (RCP) num coração batendo é desnecessário."
          },
          {
            id: "B",
            texto: "Colocamos ele na Posição Lateral de Segurança (PLS) e monitoramos a respiração continuamente a cada 1 a 2 minutos.",
            correta: true,
            feedback: "Correto! O quadro é de um choque hemorrágico/neurológico severo. A PLS mantém a língua sem cair na garganta enquanto aguardam. A vigilância é vital, pois ele pode parar a qualquer momento."
          },
          {
            id: "C",
            texto: "Sentamos o paciente e encostamos ele na parede.",
            correta: false,
            feedback: "Ele cairia para o lado. A gravidade piora a perfusão cerebral."
          },
          {
            id: "D",
            texto: "Colocamos o dedo na boca dele para segurar a língua com a mão.",
            correta: false,
            feedback: "Risco grave de amputação do dedo do socorrista se a vítima tiver reflexos mandibulares espasmódicos."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "O médico do SAMU entra em contato via telefone de dentro da ambulância e pergunta o motivo da perda de consciência. O que você supõe clinicamente pelo histórico que coletou?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Acho que foi o calor do sol.",
            correta: false,
            feedback: "Incoerente com a sequência agressiva do veneno."
          },
          {
            id: "B",
            texto: "Informo o contato com as lagartas (Lonomia), o sangramento ativo nas mucosas visto há pouco e que a inconsciência agora pode indicar hemorragia cerebral ou choque descompensado.",
            correta: true,
            feedback: "Excelente raciocínio. A Lonomia pode causar hemorragias intracranianas (AVC hemorrágico), justificando a dor de cabeça excruciante e a subsequente perda de consciência."
          },
          {
            id: "C",
            texto: "Digo que ele estava fingindo e acabou dormindo.",
            correta: false,
            feedback: "Menospreza o risco de vida de forma infundada."
          },
          {
            id: "D",
            texto: "Não falo nada para o médico descobrir sozinho.",
            correta: false,
            feedback: "Isso custará a vida do paciente nos primeiros 10 minutos de hospital."
          }
        ]
      },
      {
        id: "etapa_10",
        pergunta: "A UTI Móvel chega. O socorrista desembarca, e o colega de trabalho diz: 'Tirei uma foto com o celular do grupo de lagartas na árvore antes de vir para cá'. O que você faz com essa informação ao encontrar o médico?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Digo para o colega apagar a foto pois foto de bicho não importa.",
            correta: false,
            feedback: "Identificar o animal é essencial no envenenamento sistêmico."
          },
          {
            id: "B",
            texto: "Faço a passagem do quadro de emergência (sangramentos e coma) ao médico e, imediatamente, mostro a foto das lagartas, garantindo que o hospital providencie o Soro Antilonômico (SALon).",
            correta: true,
            feedback: "Perfeito! O relato clínico junto à prova visual definitiva (foto das Lonomias) dá precisão cirúrgica ao tratamento hospitalar (Soro Antilonômico específico). Você conduziu uma das emergências toxicológicas mais temidas com maestria!"
          },
          {
            id: "C",
            texto: "Digo ao colega que devíamos ter trazido as lagartas num pote.",
            correta: false,
            feedback: "A foto é o meio mais seguro. Tentar capturar as lagartas faria outra vítima."
          },
          {
            id: "D",
            texto: "Peço o celular emprestado para postar o acidente na internet.",
            correta: false,
            feedback: "Desrespeita o paciente crítico."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_60",
    titulo: "Almoço de Domingo Interrompido",
    tag_visual_cenario: "cenario_cozinha", 
    descricao_inicial: "Você está em um almoço de família. Seu avô, de 68 anos, está comendo um pedaço de carne quando de repente para de mastigar, arregala os olhos, fica vermelho e leva as duas mãos ao pescoço em desespero, sem conseguir tossir ou falar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual é a sua primeira ação ao ver o idoso com as mãos no pescoço?",
        tag_visual_detalhe: "estado_engasgo_adulto", 
        opcoes: [
          {
            id: "A",
            texto: "Oferecer um copo de água para ajudar a carne a descer.",
            correta: false,
            feedback: "Mito perigoso. Se a via aérea está obstruída, a água pode ir para os pulmões (broncoaspiração), piorando drasticamente o engasgo."
          },
          {
            id: "B",
            texto: "Bater forte nas costas dele repetidas vezes sem avisar.",
            correta: false,
            feedback: "Em adultos em pé, bater nas costas sem posicionar corretamente ou avisar pode empurrar o objeto mais para o fundo. A abordagem principal é a manobra de desobstrução."
          },
          {
            id: "C",
            texto: "Perguntar alto: 'Você está engasgado?' e incentivar a tosse se ele conseguir emitir som.",
            correta: true,
            feedback: "Correto. O sinal universal do engasgo são as mãos no pescoço. Perguntar avalia o grau de obstrução. Se não sair som ou tosse, a obstrução é total e exige intervenção imediata."
          },
          {
            id: "D",
            texto: "Deitá-lo no chão imediatamente e iniciar massagem cardíaca.",
            correta: false,
            feedback: "Ele ainda está consciente. A massagem cardíaca (RCP) só é iniciada se a vítima estiver inconsciente e sem respirar."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Ele tenta responder, mas não emite nenhum som. Seus lábios começam a ficar levemente arroxeados. O que você faz agora?",
        tag_visual_detalhe: "estado_engasgo_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Enfiar os dedos na garganta dele às cegas para tentar puxar a carne.",
            correta: false,
            feedback: "A 'varredura às cegas' com os dedos pode empurrar o objeto ainda mais fundo, travando a via aérea de vez."
          },
          {
            id: "B",
            texto: "Realizar a Manobra de Heimlich, abraçando-o por trás e comprimindo o abdômen para dentro e para cima.",
            correta: true,
            feedback: "Correto. A Manobra de Heimlich cria uma tosse artificial, aumentando a pressão no peito e expulsando o objeto da garganta."
          },
          {
            id: "C",
            texto: "Ligar para o 192 e ficar aguardando o socorro chegar, sem tocar nele.",
            correta: false,
            feedback: "O socorro deve ser chamado, mas uma obstrução total mata em poucos minutos. Você precisa agir no local enquanto aguarda o SAMU."
          },
          {
            id: "D",
            texto: "Levantar os braços dele para cima e pedir para prender a respiração.",
            correta: false,
            feedback: "Mito popular ineficaz. Levantar os braços não altera a anatomia da via aérea a ponto de soltar um corpo estranho."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta: Você iniciou a Manobra de Heimlich, mas após 4 compressões, o avô fica completamente mole e desmaia em seus braços. Como agir?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Continuar fazendo a Manobra de Heimlich com ele deitado no chão.",
            correta: false,
            feedback: "Com a vítima inconsciente, o protocolo muda. Compressões abdominais em vítima no chão não são o padrão recomendado e atrasam a RCP."
          },
          {
            id: "B",
            texto: "Amparar a queda, deitá-lo de barriga para cima em uma superfície firme, e pedir para alguém ligar 192/193.",
            correta: true,
            feedback: "Correto! Quando a vítima engasgada perde a consciência, a prioridade máxima passa a ser acionar a emergência e preparar para RCP."
          },
          {
            id: "C",
            texto: "Jogar água gelada no rosto e dar tapas no peito para ele acordar.",
            correta: false,
            feedback: "Ele desmaiou por falta de oxigênio. Água no rosto não desobstrui a via aérea e atrasa as manobras que salvam vidas."
          },
          {
            id: "D",
            texto: "Sentá-lo em uma cadeira e soprar ar na boca dele repetidamente.",
            correta: false,
            feedback: "Ventilações sem tirar o objeto podem não funcionar, e vítima inconsciente deve ficar deitada no chão duro para fluxo sanguíneo e compressões."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Com o avô deitado e o SAMU a caminho, ele não respira. Qual o próximo passo imediato?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Iniciar compressões torácicas fortes e rápidas no centro do peito.",
            correta: true,
            feedback: "Correto. O protocolo de engasgo inconsciente é iniciar a RCP. As compressões no peito fazem circular o sangue e também criam pressão para empurrar o objeto para fora."
          },
          {
            id: "B",
            texto: "Procurar pulso no pescoço por 2 a 3 minutos para ter certeza que o coração parou.",
            correta: false,
            feedback: "Leigos não devem perder mais de 10 segundos procurando pulso. Se está inconsciente e não respira, assuma a necessidade de RCP."
          },
          {
            id: "C",
            texto: "Fazer apenas respiração boca a boca até a barriga inflar.",
            correta: false,
            feedback: "O ar não vai entrar enquanto a carne estiver travando a via. Além disso, leigos devem focar nas compressões torácicas."
          },
          {
            id: "D",
            texto: "Virar ele de barriga para baixo e empurrar as costas.",
            correta: false,
            feedback: "Essa posição inviabiliza as compressões torácicas e a avaliação da respiração. A vítima deve ficar de barriga para cima."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Após cerca de 3 minutos de compressões ininterruptas, você vai abrir a boca dele e vê claramente o pedaço de carne solto na língua. O que fazer?",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Empurrar o pedaço de volta para evitar que ele morda seu dedo.",
            correta: false,
            feedback: "Nunca empurre um objeto de volta, pois a asfixia será reiniciada."
          },
          {
            id: "B",
            texto: "Retirar o pedaço com cuidado usando o dedo em formato de gancho (pinça), sem empurrar.",
            correta: true,
            feedback: "Correto! Se o objeto estiver solto e amplamente visível, remova-o. As compressões torácicas funcionaram e expulsaram a carne."
          },
          {
            id: "C",
            texto: "Ignorar a carne na boca e continuar as compressões cardíacas indefinidamente.",
            correta: false,
            feedback: "Se a via aérea foi liberada, a carne deve ser removida para permitir que o ar volte a entrar."
          },
          {
            id: "D",
            texto: "Dar um tapa forte no peito para expelir a carne longe.",
            correta: false,
            feedback: "Não há protocolo de tapa no peito. O objeto já está na boca e visível, basta retirá-lo manualmente."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Após tirar a carne, o peito dele volta a subir e descer, ele tosse fraco e abre os olhos confuso. O desfecho está próximo. O que fazer agora?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Sentá-lo, dar um prato de comida e cancelar o SAMU.",
            correta: false,
            feedback: "A garganta pode estar lesionada e ele pode sofrer complicações pós-asfixia ou reengasgar. Ele precisa de avaliação médica."
          },
          {
            id: "B",
            texto: "Colocá-lo em Posição Lateral de Segurança (de lado), acalmá-lo e aguardar o SAMU para avaliação médica.",
            correta: true,
            feedback: "Correto. O desfecho ideal é virar a vítima de lado (PLS) para prevenir novos engasgos com vômito, acalmá-la e transferir os cuidados ao SAMU quando chegarem."
          },
          {
            id: "C",
            texto: "Fazer respiração boca a boca como suporte extra de oxigênio.",
            correta: false,
            feedback: "Se ele já está respirando sozinho e abrindo os olhos, ventilar forçadamente vai causar incômodo e risco de vômito."
          },
          {
            id: "D",
            texto: "Mandar ele levantar rapidamente e dar pulinhos para descer o resto.",
            correta: false,
            feedback: "Levantar rápido pode causar queda de pressão e novo desmaio. Ele sofreu grande estresse cardíaco e respiratório."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_61",
    titulo: "O Acidente na Marcenaria",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Sábado de manhã, você ouve um grito na garagem do vizinho. Ao chegar, vê que a serra circular escapou da madeira e cortou profundamente o braço dele. Há muito sangue no chão, jorrando em esguichos no ritmo dos batimentos cardíacos.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "O vizinho está segurando o braço e gritando. O sangue jorra. Qual sua PRIMEIRA ação antes de encostar nele?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Correr e abraçar a vítima para acalmá-la.",
            correta: false,
            feedback: "Você pulou a segurança da cena. A serra circular pode estar ligada ou em movimento, colocando você em risco."
          },
          {
            id: "B",
            texto: "Avaliar rapidamente se a máquina está desligada (cena segura), pedir para alguém ligar para 192/193 e calçar luvas se disponíveis.",
            correta: true,
            feedback: "Correto. A regra de ouro é: garanta a própria segurança (desligue a máquina) e chame ajuda antes de começar o tratamento."
          },
          {
            id: "C",
            texto: "Jogar um balde de água na ferida para limpar o sangue e ver o corte.",
            correta: false,
            feedback: "Isso lava os fatores de coagulação que o corpo tenta formar e faz sangrar ainda mais."
          },
          {
            id: "D",
            texto: "Oferecer um analgésico e água para diminuir a dor.",
            correta: false,
            feedback: "Remédios não estancam sangramento arterial (jorrando), e dar água a uma vítima que pode precisar de cirurgia atrasa o hospital."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está segura. Como você tenta controlar a hemorragia severa inicial no braço?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Colocar pó de café ou açúcar no ferimento para estancar.",
            correta: false,
            feedback: "Mito gravíssimo. Isso contamina profundamente a ferida, não estanca sangramentos severos e complica a limpeza cirúrgica."
          },
          {
            id: "B",
            texto: "Pegar um pano limpo e aplicar pressão direta constante e firme em cima do ferimento.",
            correta: true,
            feedback: "Correto. A compressão direta é o primeiro passo padrão para a grande maioria das hemorragias. Aperte forte e não solte para olhar."
          },
          {
            id: "C",
            texto: "Amarra a ponta do dedo dele com um barbante fino.",
            correta: false,
            feedback: "O corte é no braço. Barbantes finos em qualquer lugar cortam a pele e não controlam hemorragia de grandes vasos."
          },
          {
            id: "D",
            texto: "Levantar o braço dele o mais alto possível e deixar sangrar para limpar a ferida.",
            correta: false,
            feedback: "Elevação pode ajudar minimamente, mas sem pressão direta o sangramento de artéria levará à morte em minutos."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Em um minuto, o pano fica completamente encharcado de sangue e começa a vazar muito, sem sinal de parar. O que fazer?",
        tag_visual_detalhe: "acao_curativo_adicional",
        opcoes: [
          {
            id: "A",
            texto: "Tirar o pano encharcado para colocar um novo e seco no lugar.",
            correta: false,
            feedback: "Nunca retire o primeiro pano! Ao retirá-lo, você arranca o coágulo que está tentando se formar, reiniciando o sangramento."
          },
          {
            id: "B",
            texto: "Colocar mais panos limpos POR CIMA do primeiro e manter pressão forte, ou, se não parar, aplicar um torniquete 5 a 7cm acima do corte.",
            correta: true,
            feedback: "Correto. Você deve empilhar panos (curativo compressivo) e usar mais força. Como é um membro (braço) e a hemorragia é severa, o uso do torniquete é a conduta salvadora se a pressão falhar."
          },
          {
            id: "C",
            texto: "Fazer uma compressa de gelo e colocar direto na carne viva.",
            correta: false,
            feedback: "Gelo pode queimar o tecido e não é eficaz para parar uma hemorragia arterial intensa jorrando."
          },
          {
            id: "D",
            texto: "Fazer uma massagem cardíaca no peito para acalmar o coração.",
            correta: false,
            feedback: "A vítima está acordada e com o coração batendo forte, massagear o peito não faz sentido e tira as mãos de cima da ferida."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Reviravolta (Choque): Você colocou um torniquete improvisado largo com haste, que estancou o sangue. Porém, o vizinho subitamente fica extremante pálido, com suor frio, olhos vidrados e respiração rápida.",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Mandá-lo levantar, sacudi-lo e mandar caminhar para não dormir.",
            correta: false,
            feedback: "Ele está em Choque Hipovolêmico por falta de sangue. Colocá-lo em pé vai tirar o restinho de sangue da cabeça e ele vai desmaiar gravemente."
          },
          {
            id: "B",
            texto: "Deitá-lo imediatamente no chão, aquecê-lo com um casaco e elevar as pernas dele (se não houver suspeita de fratura nelas).",
            correta: true,
            feedback: "Correto. Isso combate o estado de choque (choque hemorrágico), ajudando o sangue das pernas a ir para órgãos vitais (coração e cérebro) e evitando hipotermia."
          },
          {
            id: "C",
            texto: "Dar uma garrafa de refrigerante ou suco doce para aumentar a glicose dele.",
            correta: false,
            feedback: "É choque por falta de volume de sangue, não hipoglicemia. O estômago em choque paralisa; se ele beber, vai vomitar e engasgar."
          },
          {
            id: "D",
            texto: "Afrouxar o torniquete para o sangue voltar a circular e ele não ficar pálido.",
            correta: false,
            feedback: "Se afrouxar, o sangramento volta e ele morre. Nunca afrouxe um torniquete no ambiente pré-hospitalar após ter sido devidamente aplicado."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Deitado no chão, ele começa a se debater, gritando que o torniquete está esmagando o braço e tentando desamarrar o curativo e a haste do torniquete.",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Bater no rosto dele para ele se acalmar.",
            correta: false,
            feedback: "Agressões nunca são indicadas. Ele está agitado pela falta de oxigênio no cérebro (choque)."
          },
          {
            id: "B",
            texto: "Soltar o torniquete só um pouquinho para aliviar a dor e agradar a vítima.",
            correta: false,
            feedback: "A dor do torniquete é severa, mas afrouxar significa retomar uma hemorragia letal. A vida vem antes do membro e da dor."
          },
          {
            id: "C",
            texto: "Impedi-lo de soltar o torniquete, explicando com voz firme e calma que a dor é normal, mas que o aperto está salvando a vida dele.",
            correta: true,
            feedback: "Correto. Torniquetes eficientes causam dor extrema. Você deve manter o curativo no lugar e dar suporte emocional para conter a vítima."
          },
          {
            id: "D",
            texto: "Amarar as pernas dele também para que ele não se mova.",
            correta: false,
            feedback: "Amarrar desnecessariamente outras partes cria mais pânico e não resolve a agitação nos braços."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Apesar de seus esforços para acalmá-lo, os olhos dele reviram e ele perde a consciência. Mas ao observar o peito, você nota que ele ainda está respirando.",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Achar que o coração parou e iniciar RCP massagem cardíaca em cima do peito.",
            correta: false,
            feedback: "Ele está inconsciente, mas AINDA RESPIRA. RCP só é feita em vítima sem respiração ou com gasping anormal."
          },
          {
            id: "B",
            texto: "Manter as pernas elevadas, monitorar a respiração a cada instante, mantê-lo aquecido e checar se o torniquete continua firme.",
            correta: true,
            feedback: "Correto. O desmaio é fruto do choque (perda severa de volume). Continue tratando o choque, segurando a via aérea e vigiando se ele para de respirar."
          },
          {
            id: "C",
            texto: "Dar banho de água gelada nele para acordar o cérebro.",
            correta: false,
            feedback: "Vítimas de choque hemorrágico perdem calor rápido. Hipotermia impede o sangue de coagular, o que piora o quadro e pode levar à morte."
          },
          {
            id: "D",
            texto: "Tirar o torniquete agora, pois estando desmaiado ele não vai sentir dor.",
            correta: false,
            feedback: "O sangramento aconteceria com ele dormindo ou acordado. O torniquete fica."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "O desfecho: A ambulância do SAMU chega ao local com as sirenes ligadas. Qual é a melhor forma de transferir os cuidados da vítima?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Passar ao médico ou paramédico o quadro exato: que foi corte de serra, muito sangue, colocou torniquete (informar a hora exata) e que ele entrou em choque e apagou.",
            correta: true,
            feedback: "Correto. A comunicação do horário de colocação do torniquete e de como ocorreu o desmaio é uma informação valiosa (transição de cuidados) para a equipe avançada."
          },
          {
            id: "B",
            texto: "Arrancar o torniquete e todos os curativos para o médico ver o tamanho do buraco.",
            correta: false,
            feedback: "Nunca retire o torniquete no ambiente pré-hospitalar. Os médicos farão isso de forma controlada dentro da ambulância avançada ou centro cirúrgico."
          },
          {
            id: "C",
            texto: "Ir embora discretamente pois o seu papel acabou e eles que resolvam.",
            correta: false,
            feedback: "A equipe vai precisar saber há quanto tempo o sangue parou, quando ele desmaiou e se havia outras testemunhas ou riscos no local."
          },
          {
            id: "D",
            texto: "Exigir assumir a ambulância, afinal, foi você quem salvou a vítima até ali.",
            correta: false,
            feedback: "O cuidado pré-hospitalar tem hierarquia. Chegando o Suporte Avançado, o leigo deve relatar e se afastar para a equipe trabalhar."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_62",
    titulo: "Susto na Banheira",
    tag_visual_cenario: "cenario_quarto_infantil",
    descricao_inicial: "Enquanto a mãe ia pegar a toalha no quarto, o bebê de 8 meses escorregou e caiu de bruços na banheira cheia. A mãe grita por você. Ao entrar, ela segura o bebê no ar. Ele está mole, pele azulada e não chora.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Qual a ação imediata em relação ao bebê e ao ambiente?",
        tag_visual_detalhe: "estado_molhada_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Secar o bebê detalhadamente com a toalha e colocar pomada.",
            correta: false,
            feedback: "Tempo é vida. Preocupações estéticas ou pequenos resfriamentos são secundários; o bebê pode estar em parada respiratória."
          },
          {
            id: "B",
            texto: "Pegar o bebê, colocá-lo imediatamente de barriga para cima em uma superfície seca, plana e rígida (como o chão seco ou mesa).",
            correta: true,
            feedback: "Correto. Em afogamento, deve-se remover a vítima da água e buscar imediatamente uma base rígida para iniciar a avaliação."
          },
          {
            id: "C",
            texto: "Balançar o bebê de cabeça para baixo segurando pelos tornozelos para a água escorrer do pulmão.",
            correta: false,
            feedback: "Mito gravíssimo. Essa prática pode causar lesões na coluna, pescoço e agravar danos cerebrais, além de não drenar água do pulmão."
          },
          {
            id: "D",
            texto: "Tentar fazer respiração boca a boca com a criança ainda dentro da banheira.",
            correta: false,
            feedback: "A água traz riscos (escorregar) e impede que você faça as manobras adequadamente numa base rígida."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Na mesa, como você verifica se este bebê responde a estímulos?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Bater de leve e esfregar a sola dos pés do bebê chamando em voz alta.",
            correta: true,
            feedback: "Correto. O protocolo para bebês (lactentes) é realizar o estímulo físico dando batidinhas na sola do pé e observando choro ou movimento."
          },
          {
            id: "B",
            texto: "Procurar pulso no pescoço do bebê (carotídeo) por 3 minutos.",
            correta: false,
            feedback: "Bebês têm pescoço curto e gordinho, achar o pulso lá é quase impossível para leigos. O pulso verificado em bebês seria o braquial, mas leigos focam na resposta a estímulos e respiração."
          },
          {
            id: "C",
            texto: "Balançar os ombros violentamente e gritar.",
            correta: false,
            feedback: "Sacudir bebês pode causar a Síndrome do Bebê Sacudido (lesão cerebral grave)."
          },
          {
            id: "D",
            texto: "Dar palmadas fortes nas costas e bumbum.",
            correta: false,
            feedback: "Palmadas agressivas não avaliam consciência e geram lesões indesejadas."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "O bebê não responde ao estímulo nos pés e não parece estar respirando (não há movimento no peito). O que você solicita à mãe histérica?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Peça: 'Espera aí que eu vou tentar acordar ele, não liga para ninguém ainda'.",
            correta: false,
            feedback: "Um bebê que não respira após afogamento é uma emergência crítica; o SAMU deve ser ativado na hora."
          },
          {
            id: "B",
            texto: "Grite: 'Liga para o seu marido e manda ele vir do trabalho'.",
            correta: false,
            feedback: "Parentes não trazem suporte médico avançado nem ambulância."
          },
          {
            id: "C",
            texto: "Aponte, olhe nos olhos dela e diga de forma diretiva: 'Ligue agora para o 192 (SAMU), coloque no viva-voz e deixe do meu lado!'.",
            correta: true,
            feedback: "Correto. Ao direcionar objetivamente, você aciona ajuda especializada e mantém as duas mãos livres para iniciar a RCP, além de dar foco para a mãe no pânico."
          },
          {
            id: "D",
            texto: "Peça para ela correr para o hospital com o bebê no colo enquanto você liga.",
            correta: false,
            feedback: "Correr para o hospital sem fazer RCP em vítima sem respirar resulta em danos cerebrais e morte em menos de 5 minutos."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Com o socorro sendo chamado, o bebê está em Parada Cardiorrespiratória. Como fazer a compressão (RCP) em um bebê?",
        tag_visual_detalhe: "acao_rcp_bebe",
        opcoes: [
          {
            id: "A",
            texto: "Usar duas mãos, cruzando os dedos em cima do peito do bebê e jogar todo o peso do corpo.",
            correta: false,
            feedback: "Essa força e técnica são para adultos. Usar duas mãos pode quebrar os ossos frágeis do bebê e causar hemorragia interna."
          },
          {
            id: "B",
            texto: "Usar dois dedos (indicador e médio) no centro do peito (linha entre os mamilos), comprimindo rápido (100 a 120 por minuto) e afundando cerca de 4 cm (1/3 do peito).",
            correta: true,
            feedback: "Correto! Para bebês abaixo de 1 ano, a RCP deve ser feita com apenas dois dedos no centro do tórax, de forma forte, permitindo o retorno do tórax."
          },
          {
            id: "C",
            texto: "Apertar a barriga, acima do umbigo, como na manobra de engasgo, para tentar vomitar a água.",
            correta: false,
            feedback: "Apertar a barriga não bombeia o coração e causa vômito descontrolado, afogando ainda mais a criança."
          },
          {
            id: "D",
            texto: "Colocar as mãos nas costelas do bebê e apertar como uma sanfona.",
            correta: false,
            feedback: "Isso comprime pulmões e fratura costelas sem gerar pressão nas câmaras cardíacas adequadamente."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Reviravolta: Você está concentrado massageando com 2 dedos, e a mãe, em pânico total, puxa seu braço gritando 'Para, você tá machucando ele, deixa eu pegar meu bebê!'. O que fazer?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Entregar o bebê para ela chorar no colo, respeitando a dor da mãe.",
            correta: false,
            feedback: "Parar a RCP no meio condena a criança à morte cerebral. A compaixão agora exige salvar a vida."
          },
          {
            id: "B",
            texto: "Afastá-la com um empurrão forte para ela não atrapalhar.",
            correta: false,
            feedback: "Escalar a agressividade gera caos no ambiente e pode fazer você perder o controle da cena."
          },
          {
            id: "C",
            texto: "Manter-se firme na massagem, sem parar, usar tom de voz forte e dar uma tarefa: 'Estou salvando a vida dele! Fica no telefone e me repassa o que o SAMU está falando!'.",
            correta: true,
            feedback: "Correto. O controle de cena envolve firmeza e dar uma função para familiares em pânico, redirecionando o foco deles e impedindo a interrupção do suporte básico."
          },
          {
            id: "D",
            texto: "Parar a massagem para abraçar a mãe e tentar explicar a fisiologia do coração.",
            correta: false,
            feedback: "Você não tem tempo. Cada segundo sem massagem destrói neurônios do bebê."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Após cerca de 2 minutos contínuos de RCP, uma quantidade razoável de água e uma espuma clara começam a sair da boca e nariz do bebê. O que fazer imediatamente?",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Limpar o vômito empurrando os dedos no fundo da garganta para tirar toda a água.",
            correta: false,
            feedback: "Nunca enfie os dedos no fundo da garganta; isso machuca tecidos macios e pode estimular reflexos vagais ou empurrar sujeira."
          },
          {
            id: "B",
            texto: "Não fazer nada e continuar massagem em cima do vômito.",
            correta: false,
            feedback: "Se a boca estiver submersa em fluido, o ar que entrará (seja por ventilação ou descompressão do peito) vai ser água."
          },
          {
            id: "C",
            texto: "Virar rapidamente o bebê (ou sua cabeça) de lado para que a água e o vômito escorram para fora, limpar externamente a boca e reavaliar a respiração.",
            correta: true,
            feedback: "Correto! É comum que vítimas de afogamento e RCP vomitem. Virar a vítima de lado evita que o vômito retorne aos pulmões e permite que você mantenha a via aérea limpa."
          },
          {
            id: "D",
            texto: "Parar a RCP de vez e dar o bebê para a mãe, achando que o vômito significa que a água toda já saiu.",
            correta: false,
            feedback: "Sair água não quer dizer que o coração ou respiração já voltaram. O bebê precisa ser checado após a limpeza."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Você desvira o bebê e agora observa que ele dá um leve choro resmungado e o peito começa a se mover, indicando que a respiração espontânea retornou.",
        tag_visual_detalhe: "estado_recuperacao_consciencia",
        opcoes: [
          {
            id: "A",
            texto: "Continuar a massagem cardíaca para 'reforçar' o coração.",
            correta: false,
            feedback: "Fazer RCP em paciente que respira pode causar arritmias letais. Parar as compressões é imperativo ao primeiro sinal claro de vida/respiração efetiva."
          },
          {
            id: "B",
            texto: "Parar a massagem, deitar o bebê de lado no colo (posição de segurança), secá-lo se ainda estiver muito molhado, tentar aquecê-lo e monitorar.",
            correta: true,
            feedback: "Correto. O bebê reanimado pós-afogamento corre enorme risco de hipotermia e vômitos subsequentes. Mantê-lo de lado, aquecido e sob vigília é a melhor atitude até o SAMU chegar."
          },
          {
            id: "C",
            texto: "Dar peito (amamentar) para consolar a criança.",
            correta: false,
            feedback: "Amamentar após quase afogamento e parada cardíaca gera alto risco de re-engasgo e vômito, a criança ainda está letárgica."
          },
          {
            id: "D",
            texto: "Dar uns tapas nas costas para fazê-lo chorar bem alto.",
            correta: false,
            feedback: "Bebês pós-PCR não precisam de choro provocado por dor, precisam de estabilidade e aquecimento."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Desfecho: A equipe do SAMU chega. A mãe fala 'Obrigada, mas ele já acordou, não precisa mais do médico, vamos ficar em casa'.",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Concordar, afinal a criança já está respirando e bebês se recuperam rápido.",
            correta: false,
            feedback: "Afogamento não acaba quando a criança acorda. Os pulmões podem estar irritados com a água da banheira, sofrendo de inflamações posteriores."
          },
          {
            id: "B",
            texto: "Insistir fortemente (junto aos médicos) para entregar o bebê à equipe, explicando que a água inspirada pode causar complicações respiratórias horas depois e ele precisa de internação/avaliação.",
            correta: true,
            feedback: "Correto. Toda vítima de quase afogamento e RCP deve ser conduzida a uma unidade hospitalar. O 'afogamento secundário' ou edema pulmonar tardio é real."
          },
          {
            id: "C",
            texto: "Ir embora indignado, xingando a mãe por ser irresponsável.",
            correta: false,
            feedback: "Ofender não salva vidas. O seu papel é garantir o encaminhamento correto informando as consequências."
          },
          {
            id: "D",
            texto: "Pegar o bebê à força e jogá-lo dentro da maca do SAMU.",
            correta: false,
            feedback: "Atitude ilegal e inadequada. A negociação e orientação técnica são a via correta de transição de cuidados."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_63",
    titulo: "Caos no Restaurante: Fogo, Queimadura e um Derrame",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Sexta-feira à noite, num restaurante lotado. De repente, muita fumaça sai da cozinha. Uma panela de óleo tombou e pegou fogo no balcão de serviço rápido. Há correria e gritos.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "No meio do tumulto inicial de um incêndio na cozinha, qual o primeiro passo ao se deparar com a cena?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Correr pegar água na torneira e jogar direto na panela de óleo em chamas.",
            correta: false,
            feedback: "Fogo classe K (óleo de cozinha) em contato com água causa uma explosão severa do fluido, piorando terrivelmente o incêndio e causando queimaduras nos presentes."
          },
          {
            id: "B",
            texto: "Tentar salvar as mesas e cadeiras e pedir pras pessoas continuarem comendo.",
            correta: false,
            feedback: "Ignorar o perigo põe todos em risco. Fogo propaga muito rápido."
          },
          {
            id: "C",
            texto: "Parar e avaliar a cena a uma distância segura, pedir evacuação e garantir que o Corpo de Bombeiros (193) seja acionado.",
            correta: true,
            feedback: "Correto. Avaliar cena e solicitar socorro adequado para fogo (193). A vida humana sempre tem prioridade sobre os bens."
          },
          {
            id: "D",
            texto: "Correr para o meio da fumaça para resgatar os panelões.",
            correta: false,
            feedback: "Inalar fumaça pode matar em minutos e te tornar uma segunda vítima no chão."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "O fogo na cozinha foi isolado, mas no salão um dos cozinheiros está gritando de dor, exibindo o antebraço com pele avermelhada, inchada e grandes bolhas (queimadura térmica de 2º grau por respingo de óleo).",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Passar imediatamente creme dental ou manteiga no local atingido.",
            correta: false,
            feedback: "Mito. Esses produtos abafam a ferida, retém calor, causam infecções e o médico no hospital terá que escovar a ferida para retirá-los, com dor terrível."
          },
          {
            id: "B",
            texto: "Levar o braço do cozinheiro para baixo de uma torneira e deixar escorrer água fria/temperatura ambiente por 10 a 15 minutos.",
            correta: true,
            feedback: "Correto. O resfriamento com água limpa (não gelada) cessa o processo de queimadura que ainda ocorre debaixo da pele, limpa e oferece alívio analgésico."
          },
          {
            id: "C",
            texto: "Furar todas as bolhas para aliviar a pressão da pele.",
            correta: false,
            feedback: "A bolha é um curativo estéril do próprio corpo. Furar abre a porta para bactérias mortais e atrasa a cicatrização."
          },
          {
            id: "D",
            texto: "Colocar gelo puro em contato direto com as bolhas.",
            correta: false,
            feedback: "Gelo direto queima novamente a pele já fragilizada pelo óleo."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Reviravolta: Enquanto você resfria o braço do cozinheiro, o dono do restaurante (homem de 70 anos) se senta em uma cadeira arfando devido ao estresse absurdo da cena. Ele tenta lhe dizer algo, mas a fala sai grossa, arrastada, enrolada e impossível de entender.",
        tag_visual_detalhe: "estado_avc_assimetria",
        opcoes: [
          {
            id: "A",
            texto: "Perceber que ele está apenas assustado (ataque de pânico) e mandar respirar em um saco de papel.",
            correta: false,
            feedback: "Assumir que fala enrolada (disartria) num idoso é mero pânico pode custar-lhe o cérebro. Sinais neurológicos em forte estresse indicam risco."
          },
          {
            id: "B",
            texto: "Dar um copo de água com açúcar para o idoso e esperar passar.",
            correta: false,
            feedback: "Com a fala enrolada, os músculos de engolir também podem estar falhos. Ele vai se engasgar ou aspirar a água para o pulmão."
          },
          {
            id: "C",
            texto: "Desconfiar de Acidente Vascular Cerebral (AVC/Derrame) e iniciar rapidamente um teste da face e força pedindo para ele 'Sorrir' e 'Levantar os dois braços'.",
            correta: true,
            feedback: "Correto. A triagem pré-hospitalar para AVC pelo leigo é a escala SAMU (Sorriso, Abraço/Braço, Mensagem, Urgência). A suspeita deve ser rápida."
          },
          {
            id: "D",
            texto: "Pedir para ele levantar e caminhar na praça para abaixar a pressão.",
            correta: false,
            feedback: "Caminhar com suspeita de AVC é arriscado devido à fraqueza súbita nas pernas; ele pode cair e ter traumatismo craniano."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você pede para ele sorrir: um lado do rosto fica paralisado (boca torta). Pede para levantar os braços: um braço não sobe direito. E a fala segue enrolada (Teste do SAMU positivo). O que fazer agora?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Ligar para o 192 (SAMU) e falar: 'Mande a ambulância, acho que é um AVC. Anote que os sintomas começaram agora mesmo, às 20h15'.",
            correta: true,
            feedback: "Correto. Em suspeitas de AVC, o 'Tempo é Cérebro'. Dizer o horário exato em que os sintomas começaram é crucial porque hospitais só aplicam o remédio que dissolve o coágulo numa janela de tempo específica."
          },
          {
            id: "B",
            texto: "Dar uma aspirina e remédio de pressão que estava no bolso dele.",
            correta: false,
            feedback: "Dar aspirina em AVC hemorrágico piora o sangramento. Nunca medique na rua sem orientação médica."
          },
          {
            id: "C",
            texto: "Massagear o lado torto do rosto para soltar o músculo.",
            correta: false,
            feedback: "O problema não é o músculo da face, e sim neurônios morrendo no cérebro."
          },
          {
            id: "D",
            texto: "Aguardar de 30 a 40 minutos com o idoso deitado para ver se o rosto volta ao normal.",
            correta: false,
            feedback: "AVC é emergência grave! Cada minuto de espera destrói cerca de 2 milhões de neurônios."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "O SAMU foi chamado com prioridade. O cozinheiro retira o braço queimado da água após 15 minutos de resfriamento. Como você protege a queimadura agora?",
        tag_visual_detalhe: "acao_curativo_limpo",
        opcoes: [
          {
            id: "A",
            texto: "Cobrir com algodão grosso enrolado apertado com gaze.",
            correta: false,
            feedback: "Algodão solta fiapos que grudam na ferida úmida, causando enorme dor na retirada."
          },
          {
            id: "B",
            texto: "Não cobrir e pedir para ele ficar balançando no vento para secar a pele.",
            correta: false,
            feedback: "A ferida exposta está sujeita à poeira, bactérias e o ar movendo sobre nervos expostos causa mais dor."
          },
          {
            id: "C",
            texto: "Cobrir a área de forma frouxa e sem apertar com plástico filme de cozinha (PVC) ou panos úmidos bem limpos.",
            correta: true,
            feedback: "Correto. O plástico filme é isolante, não gruda e evita o contato do ar com as terminações nervosas. Panos limpos também funcionam."
          },
          {
            id: "D",
            texto: "Jogar pó cicatrizante em toda a extensão do braço.",
            correta: false,
            feedback: "Pós misturados com secreção de bolhas criam uma crosta dura que infecciona."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Reviravolta 2: No exato instante que você isolava a ferida, o dono do restaurante (vítima de AVC) 'apaga' e amolece, escorregando da cadeira.",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Amparar a queda dele e deitá-lo com cuidado de barriga para cima no chão seguro.",
            correta: true,
            feedback: "Correto. A piora do AVC levou à síncope e possível rebaixamento de consciência. Vítima inconsciente na cadeira dobra de corpo e não consegue respirar."
          },
          {
            id: "B",
            texto: "Segurá-lo firme sentado na cadeira, dobrando o pescoço dele para trás encostado na parede.",
            correta: false,
            feedback: "Ele pode engasgar na própria saliva ou a língua cair para trás impedindo a respiração."
          },
          {
            id: "C",
            texto: "Puxá-lo pelas pernas arrastando pelo chão para perto da cozinha.",
            correta: false,
            feedback: "Apenas agrava a lesão sem nenhum motivo (a área já foi dada como segura)."
          },
          {
            id: "D",
            texto: "Jogar água no rosto dele e gritar muito alto nos ouvidos.",
            correta: false,
            feedback: "Ele teve um evento neurológico profundo, água ou barulho não mudam isso e não garantem vias aéreas abertas."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Com o idoso deitado de barriga para cima, como você confere se este desmaio por AVC não evoluiu para uma parada cardíaca?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Abrindo o peito da camisa dele para encostar a orelha direto no coração.",
            correta: false,
            feedback: "Muito demorado e ruidoso em um restaurante."
          },
          {
            id: "B",
            texto: "Procurar muito pulso carotídeo, radial e no pé dele por mais de 5 minutos.",
            correta: false,
            feedback: "O pulso não deve levar mais do que 10 segundos para leigos."
          },
          {
            id: "C",
            texto: "Ajoelhando-se ao lado, e observando por até 10 segundos se o peito/barriga sobe e desce, confirmando que há respiração regular.",
            correta: true,
            feedback: "Correto. Observar a elevação do tórax (e sentir respiração se possível) é a melhor e mais rápida avaliação para leigos sobre o funcionamento cardíaco."
          },
          {
            id: "D",
            texto: "Iniciando logo a massagem cardíaca para ver se ele resmunga de dor.",
            correta: false,
            feedback: "Jamais inicie compressões torácicas sem primeiro confirmar que a pessoa está sem respirar/responder."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Ele está respirando de forma pesada, como num ronco contínuo. Ele está inconsciente. Qual a melhor posição para ele aguardar o SAMU?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Deixá-lo exatamente de barriga para cima.",
            correta: false,
            feedback: "Se ele vomitar devido ao AVC, o vômito pode ir pro pulmão, e como está com rebaixamento e ronco, a língua já pode estar fechando a via aérea."
          },
          {
            id: "B",
            texto: "Sentá-lo recostado nas suas pernas.",
            correta: false,
            feedback: "O corpo solto cairá pro lado, obstruindo novamente o pescoço."
          },
          {
            id: "C",
            texto: "Colocá-lo em Posição Lateral de Segurança (virado de lado), para que o ronco pare, a língua caia pra frente e vômito eventual possa escorrer da boca.",
            correta: true,
            feedback: "Correto. A PLS protege a via aérea (tubo de ar) de pacientes que estejam inconscientes mas que ainda consigam respirar por conta própria."
          },
          {
            id: "D",
            texto: "Levantar as pernas dele a 90 graus para mandar sangue pra cabeça.",
            correta: false,
            feedback: "AVC é um problema de circulação no cérebro (entupimento/rompimento), aumentar mais a pressão cerebral e dificultar respiração elevando pernas é negativo."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "Desfecho: As equipes de resgate do SAMU (avançado) e Bombeiros (caminhão) chegam ao mesmo tempo. Como organizar o repasse do caso?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Passar primeiro o relatório do incêndio e resfriamento da queimadura, enquanto o idoso continua no chão.",
            correta: false,
            feedback: "A triagem manda tratar primeiro quem tem maior risco de vida iminente: o AVC do idoso inconsciente."
          },
          {
            id: "B",
            texto: "Direcionar a equipe médica (SAMU) imediatamente para o idoso, falando sobre o tempo inicial do AVC e a piora, e passar o cozinheiro e dados do fogo aos Bombeiros.",
            correta: true,
            feedback: "Correto! Você atuou como elo de ligação excelente. Identificou a vítima com maior prioridade médica e ajudou na delegação inteligente do socorro."
          },
          {
            id: "C",
            texto: "Sair correndo e deixar que os profissionais perguntem e descubram sozinhos aos garçons.",
            correta: false,
            feedback: "A janela de tempo para salvamento do derrame e informações vitais se perderiam sem o seu repasse."
          },
          {
            id: "D",
            texto: "Exigir que o médico olhe o cozinheiro antes, pois ele gritava mais de dor e foi o primeiro ferido.",
            correta: false,
            feedback: "Quem grita mais num resgate em massa não é o mais grave; o silêncio do idoso demonstra urgência vital."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_64",
    titulo: "A Poça d'Água e o Choque Fatal",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "A chuva forte na praça acabou, mas deixou o calçadão encharcado. Um jovem, de fones de ouvido, esbarra num poste que teve a fiação exposta por vândalos. Ele recebe um choque elétrico maciço, fica grudado ao poste tremendo violentamente (espasmo), e em seguida cai duro de costas numa grande poça.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você vê o corpo caído na água, sem movimento. Qual a primeiríssima atitude como leigo?",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Correr pisando na poça, pegar no braço do jovem e tentar acordá-lo.",
            correta: false,
            feedback: "Péssima escolha. A água conduz eletricidade. O fio exposto encosta na poça, portanto, se você entrar nela, receberá um choque forte e possivelmente morrerá ali do lado dele."
          },
          {
            id: "B",
            texto: "Bater nele com uma cadeira de metal do bar da praça.",
            correta: false,
            feedback: "Metal é outro condutor elétrico potente."
          },
          {
            id: "C",
            texto: "Assumir que a cena não está segura. Não tocar na vítima nem na água. Isolar a área gritando para afastarem todos, e ligar para a emergência (192) e companhia elétrica para corte da luz.",
            correta: true,
            feedback: "Correto. Proteção da cena envolvendo eletricidade é inegociável. Jamais tente descolar a pessoa em área molhada sem isolamento de energia e equipamentos certos."
          },
          {
            id: "D",
            texto: "Usar o pé sem calçado (descalço) e empurrar o fio solto.",
            correta: false,
            feedback: "Descalço aumenta absurdamente sua conexão com o solo, fazendo o choque matar instantaneamente."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Reviravolta da Cena: Em segundos, um estouro alto no transformador da praça corta a luz do quarteirão. A iluminação pública apaga. Você tem certeza de que a área está sem energia. O que fazer?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Agora, com segurança, você se aproxima, toca firmemente nos ombros e chama bem alto: 'Moço! Moço! Você me ouve?'.",
            correta: true,
            feedback: "Correto. O primeiro passo da cadeia de sobrevivência, já com cena segura, é verificar o nível de consciência chamando e estimulando."
          },
          {
            id: "B",
            texto: "Ficar ainda do outro lado da praça esperando pelo SAMU, com medo de relâmpagos.",
            correta: false,
            feedback: "O risco de eletricidade acabou. Ao se omitir com segurança estabelecida, ele morrerá se estiver em PCR."
          },
          {
            id: "C",
            texto: "Chegar de lado e empurrá-lo bem forte para que acorde.",
            correta: false,
            feedback: "Choque elétrico pode envolver trauma de coluna e pescoço ao cair para trás. Empurrões e viradas fortes são perigosos."
          },
          {
            id: "D",
            texto: "Começar a fazer RCP na perna dele para circular o sangue de baixo para cima.",
            correta: false,
            feedback: "Mito completo. As massagens sempre ocorrem no tórax (coração)."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Ele não responde e o peito dele não sobe e não desce (não há respiração visível). A boca dele apenas solta um 'glup' engasgado (gasping) a cada muitos segundos. O que é isso?",
        tag_visual_detalhe: "acao_ligando_emergencia",
        opcoes: [
          {
            id: "A",
            texto: "Gasping não é respiração. É uma parada cardiorrespiratória (PCR). Mandar outra pessoa presente ligar pro 192 e gritar 'Traga um DEA (Desfibrilador) do shopping em frente urgente!'.",
            correta: true,
            feedback: "Correto. O engolir de ar agônico (gasping) é sinal que o coração já parou, o cérebro apenas dá o reflexo final. Trate como Parada Cardíaca e solicite DEA e Socorro."
          },
          {
            id: "B",
            texto: "É a volta da respiração, ele está puxando o ar bem devagar. Observar por 10 minutos.",
            correta: false,
            feedback: "Gasping não ventila pulmão. Observar um paciente em gasping é uma sentença de morte rápida."
          },
          {
            id: "C",
            texto: "Fazer uma fogueira próximo para esquentá-lo da chuva.",
            correta: false,
            feedback: "O que ele precisa é suporte circulatório mecânico urgente."
          },
          {
            id: "D",
            texto: "Aplicar respiração boca a boca e abandonar a vítima para você correr ao shopping.",
            correta: false,
            feedback: "Na ausência de oxigênio a ventilação é feita, mas correr e largar a vítima abandona as chances de ressuscitação torácica que salva o cérebro."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você concluiu PCR e não há como atrasar as compressões. Como as compressões devem ser posicionadas em um adulto?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Apoiar a mão no lado esquerdo do peito (sobre o coração) e apertar.",
            correta: false,
            feedback: "Comprimir sobre as costelas esquerdas falha na massagem e pode quebrar osso, perfurando pulmões."
          },
          {
            id: "B",
            texto: "Uma mão sobre a barriga, acima do umbigo, e a outra no pescoço.",
            correta: false,
            feedback: "Não funciona no mecanismo de ejeção cardíaca, esmaga outros órgãos."
          },
          {
            id: "C",
            texto: "Com o calcanhar das mãos sobrepostas, no centro absoluto do tórax (na linha dos mamilos, sobre o osso esterno), mantendo braços esticados.",
            correta: true,
            feedback: "Correto! É a biomecânica perfeita. Posição no esterno espreme o coração entre o osso e a espinha dorsal, bombeando para o cérebro."
          },
          {
            id: "D",
            texto: "Abraçando a pessoa por trás (Heimlich).",
            correta: false,
            feedback: "Heimlich serve para engasgo em pessoa de pé ou sentada consciente, não em paciente com coração parado."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Reviravolta 2: Você iniciou a RCP perfeita, mas a namorada dele aparece desesperada e grita: 'A língua dele tá solta, ele engoliu a língua com o choque! Deixa eu enfiar a mão na boca dele pra puxar!'.",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Parar de comprimir o coração por 30 segundos, abrir a boca do jovem com a sua mão suja e enfiar os dedos.",
            correta: false,
            feedback: "Se você parar as compressões a pressão sanguínea artificial desaba a zero."
          },
          {
            id: "B",
            texto: "Deixar a namorada puxar a língua enquanto você massageia, afinal de contas ela sabe do corpo do namorado.",
            correta: false,
            feedback: "Leigos nunca devem enfiar a mão dentro de paciente em PCR e convulsionando."
          },
          {
            id: "C",
            texto: "Não interromper a massagem de jeito nenhum. Falar alto e direto: 'Ninguém engole a língua! O coração dele parou, essas massagens estão levando sangue pra cabeça! Fica aqui do meu lado rezando!'.",
            correta: true,
            feedback: "Correto. Ninguém consegue 'engolir' a própria língua fisiologicamente. O relaxamento apenas obstrui a via e deitado de barriga pra cima a língua escorrega, as vias áreas são mantidas pelas compressões e posição correta da cabeça."
          },
          {
            id: "D",
            texto: "Ligar para a polícia para retirar a namorada de perto da cena e fugir.",
            correta: false,
            feedback: "Inviável e quebra os deveres do prestador de socorro já engajado."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "A pessoa que correu ao shopping chega ofegante e traz o DEA (Desfibrilador Automático Externo). Lembre-se, o jovem ainda está dentro da grande poça d'água de chuva.",
        tag_visual_detalhe: "estado_molhada_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Ligar o DEA e aplicar o choque diretamente, pois o DEA protege contra choques na água.",
            correta: false,
            feedback: "O DEA solta uma descarga elétrica alta. Dar choque em paciente em superfície de água espalha a eletricidade, diminuindo sua efetividade e colocando você também em risco grave."
          },
          {
            id: "B",
            texto: "Parar e arrastar o jovem pelos ombros para um local de calçada seca e não poçada bem perto dali, mantendo cuidado com a cabeça e pescoço.",
            correta: true,
            feedback: "Correto. Por ser parada cardíaca com uso de DEA e ambiente aquático, a vítima deve ser levada a uma superfície relativamente seca. O tempo é crucial, arraste rapidamente."
          },
          {
            id: "C",
            texto: "Cancelar o uso do DEA já que choveu e voltar a fazer massagens apenas por causa da água.",
            correta: false,
            feedback: "O choque provocado pelas causas elétricas tem alto índice de ritmos chocáveis (fribilação ventricular), não usar o DEA aniquila as chances de salvar a vida dele."
          },
          {
            id: "D",
            texto: "Dar choque com água mas usar sacolas plásticas nos pés como EPI.",
            correta: false,
            feedback: "Sacolas não isolam alta voltagem real do DEA, risco extremo de morte sua."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Ele está num trecho seco da praça. Você liga o botão verde no DEA e o aparelho fala. O que ele orienta a fazer em um tórax molhado de suor e chuva, e o que deve ser feito com a roupa?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Cortar ou rasgar a camisa da vítima e enxugar o peito rapidamente com um pano (ou camisa) para que os adesivos colarem fixos à pele desnuda.",
            correta: true,
            feedback: "Correto. Os eletrodos do DEA precisam aderir perfeitamente à pele. Tórax molhado faz a pá não colar direito e dissipa a força do choque sobre a pele, queimando e ineficiente."
          },
          {
            id: "B",
            texto: "Colar os eletrodos por cima da camiseta seca ou molhada, eles têm cola forte de hospital.",
            correta: false,
            feedback: "Pás coladas em roupa vão dar erro de contato no DEA e atrasar o salvamento. Tem que ser na pele."
          },
          {
            id: "C",
            texto: "Ligar o equipamento na testa e no estômago para facilitar a leitura da umidade.",
            correta: false,
            feedback: "Pás coladas na testa e barriga errarão o vetor do choque que tem que passar pelo meio do coração."
          },
          {
            id: "D",
            texto: "Não secar, a água na pele ajuda a transportar a eletricidade igual um cabo.",
            correta: false,
            feedback: "A água formaria uma camada escorregadia que atira as cargas do pulso elétrico para as laterais (por fora do tórax) ao invés de forçar energia pro miocárdio."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Você cola as pás onde os desenhos recomendam (peito direito em cima, debaixo da axila esquerda) e o DEA analisa avisando em voz bem alta: 'Choque recomendado, carregando. Não toque no paciente'. O que fazer antes de apertar o botão que brilha vermelho?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Dar a mão à namorada do paciente e encostar o dedo nele pra ver se volta.",
            correta: false,
            feedback: "Estar em contato transfere o choque elétrico terapêutico a quem está perto, criando outra parada cardíaca de ressalto na praça."
          },
          {
            id: "B",
            texto: "Tirar e recolocar as pás rápido pra dar choque forte.",
            correta: false,
            feedback: "Não se remove pás coladas; elas fazem o trabalho."
          },
          {
            id: "C",
            texto: "Olhar a seu redor, garantir com os olhos que todas as suas mãos e pernas, e todas as pessoas se afastaram, gritar 'TODO MUNDO AFASTA!' e em seguida apertar o botão e soltar.",
            correta: true,
            feedback: "Correto! Segurança em desfibrilação exige 'limpar o paciente' garantindo isolamento tátil antes da descarga ser enviada com segurança."
          },
          {
            id: "D",
            texto: "Continuar pressionando massagem no peito da pessoa no momento de dar o choque.",
            correta: false,
            feedback: "Choque no doente em cima de sua mão dá choque em você; afaste imediatamente."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "O botão vermelho é apertado, o jovem dá um baque violento do peito pulando no chão e recaindo imóvel. O equipamento do DEA diz em seguida: 'O choque foi administrado. Pode iniciar a RCP'. Como agir?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Arrancar os adesivos porque ele tem alergia.",
            correta: false,
            feedback: "DEA avalia coração e se parar recarregará. Arranque é fatal."
          },
          {
            id: "B",
            texto: "Retomar imediatamente as compressões vigorosas bem no meio do peito, sem perder tempo conferindo os pulsos, durante 2 minutos ininterruptos.",
            correta: true,
            feedback: "Correto! O coração acabou de receber o choque, mas o sangue tá parado, quem bombeia sangue pra ele enquanto ele tenta pegar no tranco é as compressões da RCP retomadas de prontidão."
          },
          {
            id: "C",
            texto: "Esperar ele se levantar e perguntar se está melhor ou ir embora porque acordará na ambulância.",
            correta: false,
            feedback: "Após o primeiro choque ele não revive subitamente como nos filmes; exige fluxo sanguíneo por compressão torácica extra para nutrir artéria antes do pulso firmar."
          },
          {
            id: "D",
            texto: "Dar o segundo choque sem a máquina mandar.",
            correta: false,
            feedback: "Deas analisam a arritmia exata por algoritmos; não aperta-se os botões livremente sem o apito permissivo de indicação de falha."
          }
        ]
      },
      {
        id: "etapa_10",
        pergunta: "Desfecho final: Depois do segundo choque do DEA e do ciclo de compressão contínua, o corpo dele tosse forte, os olhos dele piscam virados em pânico e você vê ele respirando fundo asfixiado. A ambulância do 192 breca com força logo à beira da calçada na praça.",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Falar pra ele levantar o braço da praça comemorando por estar vivo e sair andando pra ambulância sorrindo.",
            correta: false,
            feedback: "Vítimas pós paradas reagem com tremores, sem força ou pulso oscilantes letal para caminhada."
          },
          {
            id: "B",
            texto: "Arrancar as pás o mais forte que conseguir do peito dele e correr pra sua casa pra se limpar.",
            correta: false,
            feedback: "Pás do DEA acompanham a vítima no transporte pois relatam arritmias ao monitor da U.T.I móvel."
          },
          {
            id: "C",
            texto: "Parar de comprimir, mantê-lo deitado de lado (PLS), impedir a vítima de se levantar e passar à equipe de paramédicos dados como: 'Teve parada por choque elétrico de poste e eu vi esse aparelho DEA dar 2 choques'.",
            correta: true,
            feedback: "Correto! Conduta magistral: vítima com retorno de respiração é preservada na segurança sem estresse por PLS. Transferiu a informação precisa salvando de vez e perfeitamente uma falha de choque maciça!"
          },
          {
            id: "D",
            texto: "Desligar o DEA bruscamente porque ele recomeçou a respirar com dificuldade no peito.",
            correta: false,
            feedback: "Nunca desligue ou remova um DEA; em um re-colapso ou arritmia, a fala contínua de análise é o resguarde final em suporte até a máquina do médico trocar de pá."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_65",
    titulo: "Acidente na Marcenaria: Sangramento e Fogo",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Você está na marcenaria de um vizinho quando escuta um grito forte. Ao chegar no fundo do quintal, vê seu vizinho caído perto de uma serra circular que ainda está ligada. Há uma poça de sangue crescendo rapidamente ao redor do braço direito dele, que sofreu um corte profundo.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você acabou de chegar à cena. Qual é a sua primeira ação?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Correr imediatamente até ele e amarrar a camisa no braço para estancar o sangue.",
            correta: false,
            feedback: "Erro crítico. A serra circular ainda está ligada e o ambiente não foi avaliado. A segurança do socorrista (você) é sempre o passo número 1."
          },
          {
            id: "B",
            texto: "Desligar a serra na tomada, afastar ferramentas perigosas e garantir que a cena está segura antes de se aproximar.",
            correta: true,
            feedback: "Correto! A avaliação e segurança da cena (Regra do 'S' inicial ou XABCDE) é primordial. Nunca se torne uma segunda vítima."
          },
          {
            id: "C",
            texto: "Ligar para o 192 (SAMU) imediatamente antes de olhar o que aconteceu com ele.",
            correta: false,
            feedback: "Você deve primeiro garantir a segurança e dar uma rápida olhada na gravidade para informar ao SAMU o que está ocorrendo."
          },
          {
            id: "D",
            texto: "Jogar água no ferimento para limpar a serragem e ver o tamanho do corte.",
            correta: false,
            feedback: "Não se perde tempo limpando ferimentos que estão sangrando ativamente, e a cena ainda nem foi garantida como segura."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está segura. O sangue está jorrando em jatos pulsáteis (hemorragia exsanguinante). O que você faz agora?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Faço compressão direta com força sobre o ferimento usando um pano limpo ou camisa e peço para alguém ligar 192/193.",
            correta: true,
            feedback: "Correto! No protocolo XABCDE, o 'X' (Hemorragia Exsanguinante) é a prioridade absoluta. A compressão direta é a primeira manobra."
          },
          {
            id: "B",
            texto: "Elevo o braço dele acima do nível do coração e espero o sangue parar sozinho.",
            correta: false,
            feedback: "Elevação de membro isolada não é suficiente para hemorragias graves arteriais (jorrando). A compressão direta é necessária."
          },
          {
            id: "C",
            texto: "Verifico se ele está respirando primeiro e faço massagem cardíaca.",
            correta: false,
            feedback: "O sangramento exsanguinante mata em poucos minutos. Deve ser contido antes ou simultaneamente à checagem de respiração."
          },
          {
            id: "D",
            texto: "Coloco pó de café ou açúcar em cima do corte para ajudar a coagular rapidamente.",
            correta: false,
            feedback: "Mito popular perigoso! Substâncias na ferida causam infecção grave e dificultam o trabalho médico. Use apenas pano limpo."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: O pano rapidamente fica encharcado de sangue. Um outro ajudante se aproxima querendo tirar o pano sujo para ver a ferida. Qual a sua atitude?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Deixo ele tirar o pano sujo para colocarmos um novo mais limpo por cima.",
            correta: false,
            feedback: "Ao retirar o pano inicial, você remove os coágulos que estavam começando a se formar, reiniciando o sangramento."
          },
          {
            id: "B",
            texto: "Impeço o ajudante, mantenho o primeiro pano e coloco um segundo pano limpo por cima, aplicando ainda mais força.",
            correta: true,
            feedback: "Correto! Nunca retire o curativo inicial se ele encharcar. Adicione mais camadas por cima (curativo compressivo adicional)."
          },
          {
            id: "C",
            texto: "Mando o ajudante passar manteiga ou pasta de dente no ferimento.",
            correta: false,
            feedback: "Outro mito perigoso. Nunca coloque produtos caseiros em lesões abertas ou queimaduras."
          },
          {
            id: "D",
            texto: "Grito com o ajudante e abandono a vítima para ir buscar um kit de primeiros socorros dentro de casa.",
            correta: false,
            feedback: "Você não deve aliviar a pressão do sangramento grave. O ajudante é quem deve ir buscar o kit enquanto você mantém a compressão."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Mesmo com vários panos e muita força, o sangue arterial continua vazando absurdamente pelo braço. O que fazer?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Continuo apenas apertando e rezo para o SAMU chegar rápido.",
            correta: false,
            feedback: "Se a compressão direta falhou em uma hemorragia grave de membros, a vítima sangrará até a morte se você não escalar a intervenção."
          },
          {
            id: "B",
            texto: "Faço um torniquete improvisado largo (ex: cinto, faixa) cerca de 5 a 7 cm acima do ferimento e aperto com uma haste até o sangue parar.",
            correta: true,
            feedback: "Correto! O torniquete é o próximo passo vital (Protocolo X) para hemorragias severas em membros que não param com compressão direta."
          },
          {
            id: "C",
            texto: "Faço um torniquete no pescoço do paciente para diminuir o fluxo de sangue geral.",
            correta: false,
            feedback: "Absolutamente não! Torniquetes no pescoço causam estrangulamento e morte."
          },
          {
            id: "D",
            texto: "Costuro a ferida usando agulha e linha de pesca que achei na oficina.",
            correta: false,
            feedback: "Isso é procedimento médico avançado. Leigos não devem tentar suturar feridas, alto risco de dano e infecção."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA: O sangramento parou com o torniquete. De repente, a vítima fica extremamente pálida, com suor frio, olhar perdido e desmaia (Choque Hipovolêmico). Como você o posiciona?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Sento a vítima em uma cadeira e bato nas costas dela para acordar.",
            correta: false,
            feedback: "Sentar alguém em estado de choque dificulta ainda mais a chegada do sangue (que já está escasso) ao cérebro."
          },
          {
            id: "B",
            texto: "Deito a vítima de barriga para cima (decúbito dorsal) e elevo as pernas dela acima do nível da cabeça.",
            correta: true,
            feedback: "Correto! Elevar as pernas de uma vítima em choque (sem suspeita de fratura nelas) ajuda a redirecionar o sangue para órgãos vitais (coração e cérebro)."
          },
          {
            id: "C",
            texto: "Coloco a cabeça da vítima entre as próprias pernas dela (sentada).",
            correta: false,
            feedback: "Essa posição é antiga e contraindicada para choque hemorrágico, pois comprime o abdômen e piora a respiração."
          },
          {
            id: "D",
            texto: "Dou água com açúcar na boca dele para dar energia.",
            correta: false,
            feedback: "Nunca dê nada por via oral para uma vítima inconsciente ou semi-inconsciente, pois há altíssimo risco de engasgo e asfixia."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Você deitou a vítima e elevou as pernas. Ela está inconsciente. Você verifica a respiração observando o tórax. A vítima ESTÁ respirando normalmente. O que fazer a seguir?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Começo a fazer massagem cardíaca (RCP) só por precaução.",
            correta: false,
            feedback: "A massagem cardíaca só é feita se a vítima estiver Inconsciente E Não Respirando (ou gasping). Fazer RCP em quem tem pulso/respira causa danos."
          },
          {
            id: "B",
            texto: "Aguardo ao lado da vítima, monitorando se ela continua respirando e se o sangramento não volta, até o socorro chegar.",
            correta: true,
            feedback: "Correto! Se ela respira normalmente, mantenha o monitoramento contínuo dos sinais vitais e da hemorragia enquanto o SAMU não chega."
          },
          {
            id: "C",
            texto: "Dou tapas fortes no rosto dele para forçar que ele acorde.",
            correta: false,
            feedback: "Tapas no rosto não revertem estado de choque hemorrágico e podem lesionar a vítima. É inútil e agressivo."
          },
          {
            id: "D",
            texto: "Solto o torniquete a cada 5 minutos para o braço 'respirar'.",
            correta: false,
            feedback: "Nunca afrouxe um torniquete. Quem colocou só tira no hospital. Afrouxar libera toxinas na corrente sanguínea e retoma a hemorragia."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "REVIRAVOLTA CRÍTICA: Uma faísca da serra atingiu a serragem acumulada no canto e um foco de incêndio começou a se espalhar rápido para onde vocês estão. E agora?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Abandono a vítima e corro para me salvar, pois não se pode mover vítimas de trauma.",
            correta: false,
            feedback: "Embora a regra seja não mover vítimas de trauma, em casos de risco extremo de morte no local (fogo), a movimentação emergencial é necessária e justificada."
          },
          {
            id: "B",
            texto: "Faço um arraste de emergência (ex: puxando pelas roupas ou pelas axilas) para retirar a vítima rapidamente da área de fogo.",
            correta: true,
            feedback: "Correto! A regra de ouro de não mover a vítima é quebrada APENAS se houver risco iminente à vida na cena (incêndio, desabamento)."
          },
          {
            id: "C",
            texto: "Tento soprar o fogo para apagá-lo enquanto continuo segurando o braço dele.",
            correta: false,
            feedback: "A serragem queima rápido. Tentar combater o fogo desprotegido atrasará a evacuação e matará os dois."
          },
          {
            id: "D",
            texto: "Coloco o paciente em uma prancha rígida e imobilizo a cervical com colar antes de tirar do fogo.",
            correta: false,
            feedback: "Você não tem esses equipamentos e não há tempo. Fogo requer extração de emergência (imediata), sem preciosismo de imobilização."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Você conseguiu arrastar a vítima para a rua em segurança. A ambulância do SAMU acaba de chegar. O que você relata à equipe?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Digo apenas 'Ele cortou o braço, assumam' e vou embora.",
            correta: false,
            feedback: "A transição de cuidados exige a passagem de dados vitais para garantir o tratamento adequado e rápido."
          },
          {
            id: "B",
            texto: "Relato o que causou o ferimento, que ele perdeu muito sangue, a hora exata que apliquei o torniquete e que ele desmaiou há poucos minutos.",
            correta: true,
            feedback: "Correto! Informações vitais: Mecanismo do trauma, intervenções feitas (hora do torniquete é fundamental) e evolução do estado de consciência."
          },
          {
            id: "C",
            texto: "Digo que ele sofreu um infarto porque desmaiou.",
            correta: false,
            feedback: "Não invente diagnósticos. Ele desmaiou por choque hemorrágico (perda de sangue). Relate os fatos, não suas suposições."
          },
          {
            id: "D",
            texto: "Peço para eles darem um remédio de dor logo antes de avaliar.",
            correta: false,
            feedback: "Quem dita a conduta médica a partir de agora é a equipe do SAMU."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_66",
    titulo: "Almoço de Domingo: Desespero e Engasgo",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Em um restaurante lotado no domingo, uma criança de 5 anos subitamente levanta da cadeira, arregala os olhos, leva as duas mãos ao pescoço e não consegue tossir, falar ou chorar. Ela está ficando com os lábios roxos.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você percebe a cena. A mãe da criança entra em pânico e enfia os dedos na boca do menino para tentar puxar a comida às cegas. O que você faz?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Apoio a mãe e também tento colocar meu dedo na garganta dele para ajudar.",
            correta: false,
            feedback: "A varredura digital às cegas (colocar o dedo sem ver o objeto) é proibida! Isso frequentemente empurra o objeto mais para o fundo, piorando a obstrução."
          },
          {
            id: "B",
            texto: "Intervenho rapidamente, afasto a mão da mãe, explico que ela está empurrando o objeto e me posiciono para ajudar o menino que apresenta engasgo severo.",
            correta: true,
            feedback: "Correto! O sinal de mãos no pescoço e a incapacidade de tossir indicam Obstrução de Via Aérea por Corpo Estranho (OVACE) grave. É preciso agir tecnicamente e impedir manobras perigosas."
          },
          {
            id: "C",
            texto: "Ofereço um copo de água para a criança empurrar a comida.",
            correta: false,
            feedback: "Dar líquidos para alguém engasgado é extremamente perigoso, a água pode ir para o pulmão (aspiração) e agravar o bloqueio de ar."
          },
          {
            id: "D",
            texto: "Mando o menino tossir mais forte e volto para a minha mesa.",
            correta: false,
            feedback: "Ele não consegue tossir (obstrução total). Se você não intervir com manobras, ele entrará em parada respiratória em minutos."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você assumiu o controle. Como você realiza a manobra de desengasgo (Heimlich) em uma criança de 5 anos consciente?",
        tag_visual_detalhe: "acao_manobra_heimlich",
        opcoes: [
          {
            id: "A",
            texto: "Fico de pé, a abraço por trás e aperto o estômago dela para dentro e para cima.",
            correta: false,
            feedback: "Como é uma criança de 5 anos, se você ficar em pé de forma ereta, não terá alavanca correta e poderá machucar as costelas dela."
          },
          {
            id: "B",
            texto: "Ajoelho-me atrás da criança para ficar na altura dela, abraço-a por trás, fecho uma mão e com a outra aplico compressões abdominais para dentro e para cima.",
            correta: true,
            feedback: "Correto! Em crianças maiores que 1 ano, a Manobra de Heimlich deve ser feita ajoelhando-se para igualar a altura, fazendo o movimento de 'J' no abdômen."
          },
          {
            id: "C",
            texto: "Viro a criança de cabeça para baixo segurando pelos pés e bato nas costas.",
            correta: false,
            feedback: "Isso é altamente perigoso e não recomendado. Bater nas costas invertido é apenas para bebês menores de 1 ano, e de forma segura, apoiado no braço."
          },
          {
            id: "D",
            texto: "Faço compressões bem fortes no meio do peito da criança (no osso esterno).",
            correta: false,
            feedback: "Compressões torácicas são para vítimas inconscientes ou bebês menores de 1 ano. Em crianças maiores e adultos, usa-se a compressão abdominal."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: Após 4 tentativas de compressões abdominais (Heimlich), o objeto não sai. O menino subitamente amolece o corpo, perde a consciência e desmaia nos seus braços. Qual é a ação imediata?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Deito o menino no chão com cuidado, peço em voz alta para alguém ligar 192 (SAMU) e trazer um DEA.",
            correta: true,
            feedback: "Correto! Se a vítima de engasgo fica inconsciente, o protocolo muda. Ela agora é tratada como possível Parada Cardiorrespiratória (PCR). O primeiro passo é pedir ajuda e deitar a vítima no chão duro."
          },
          {
            id: "B",
            texto: "Continuo fazendo a Manobra de Heimlich nele deitado, apertando a barriga.",
            correta: false,
            feedback: "A diretriz atual da AHA não recomenda compressões abdominais em vítimas de engasgo que se tornam inconscientes."
          },
          {
            id: "C",
            texto: "Faço respiração boca a boca repetidamente até o objeto descer.",
            correta: false,
            feedback: "Se você soprar ar agora, pode empurrar o objeto ainda mais para o pulmão, além de não fazer o sangue circular."
          },
          {
            id: "D",
            texto: "Coloco o menino sentado na cadeira e jogo água no rosto dele.",
            correta: false,
            feedback: "Ele perdeu a consciência por falta de oxigênio no cérebro. Água no rosto não vai remover a obstrução."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "A criança está no chão e o SAMU foi acionado. Segundo a AHA (2020), o que você deve fazer a seguir para uma vítima de engasgo inconsciente?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Faço compressões torácicas (RCP) contínuas sem parar.",
            correta: false,
            feedback: "Embora as compressões comecem o ciclo, o ciclo correto para engasgo exige olhar a boca a cada abertura de via aérea, não apenas compressão contínua."
          },
          {
            id: "B",
            texto: "Início as compressões torácicas (massagem cardíaca). Farei 30 compressões fortes e rápidas no centro do peito.",
            correta: true,
            feedback: "Correto! Quando a vítima engasgada perde a consciência, as compressões torácicas ajudam a tentar expulsar o objeto (pelo aumento da pressão intratorácica) e fazem o sangue circular."
          },
          {
            id: "C",
            texto: "Aperto a barriga dele com as duas mãos 5 vezes seguidas.",
            correta: false,
            feedback: "Manobras no abdômen não são usadas em vítimas inconscientes. A abordagem é a RCP (massagem no peito)."
          },
          {
            id: "D",
            texto: "Espero o desfibrilador (DEA) chegar antes de encostar nele.",
            correta: false,
            feedback: "Não se deve atrasar o início das compressões. O cérebro morre em poucos minutos sem oxigênio."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Você completou as 30 compressões torácicas. Qual o próximo passo vital no ciclo do engasgo inconsciente?",
        tag_visual_detalhe: "acao_estabilizacao_cervical",
        opcoes: [
          {
            id: "A",
            texto: "Abro a boca da vítima, olho lá dentro para ver se o objeto subiu, e se conseguir vê-lo e alcançá-lo, eu o retiro.",
            correta: true,
            feedback: "Correto! Na RCP por engasgo, antes de tentar fazer as ventilações de resgate (se você souber/quiser), deve-se SEMPRE olhar a cavidade oral para ver se a compressão expulsou a comida."
          },
          {
            id: "B",
            texto: "Faço imediatamente 2 respirações boca a boca bem fortes sem olhar a boca.",
            correta: false,
            feedback: "Se você ventilar sem olhar, pode acabar empurrando de volta um objeto que havia acabado de ser desprendido pelas compressões."
          },
          {
            id: "C",
            texto: "Volto a fazer mais 30 compressões torácicas.",
            correta: false,
            feedback: "Você deve checar a via aérea e tentar ventilar (se for capacitado/estiver disposto) antes de iniciar um novo ciclo de 30."
          },
          {
            id: "D",
            texto: "Faço a varredura digital (passar o dedo dentro da boca) de qualquer maneira para ter certeza.",
            correta: false,
            feedback: "Varredura cega não deve ser feita. Você só remove o objeto se CONSEGUIR VÊ-LO nitidamente."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Você abriu a boca, mas NÃO viu o objeto. Tentou fazer 2 ventilações de resgate, mas o ar não fez o peito subir. O que isso significa e o que fazer?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "A via aérea ainda está bloqueada. Devo reiniciar imediatamente as 30 compressões torácicas.",
            correta: true,
            feedback: "Correto! Se o ar não entra, a obstrução persiste. Retorne às compressões torácicas que atuarão tanto como circulação quanto como manobra para desobstruir."
          },
          {
            id: "B",
            texto: "A via aérea ainda está bloqueada. Sopre com toda a sua força possível até o peito inflar.",
            correta: false,
            feedback: "Forçar excessivamente pode estourar os pulmões (barotrauma) ou insuflar o estômago, causando vômito e piorando a situação."
          },
          {
            id: "C",
            texto: "Significa que o coração parou de vez, devo desistir.",
            correta: false,
            feedback: "Em engasgo, a reversão é altamente possível se continuarmos insistindo no protocolo. Nunca desista até a exaustão ou o socorro chegar."
          },
          {
            id: "D",
            texto: "Ele deve estar fingindo, aplique estímulos de dor.",
            correta: false,
            feedback: "Absurdo. A falta de ar visível e cianose (arroxeado) provam que é uma emergência real."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "REVIRAVOLTA: Após o segundo ciclo de 30 compressões, você olha novamente a boca e VE um pedaço grande de carne solto na língua. Você o retira com os dedos. O que fazer agora?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Tento dar água para ele limpar a garganta.",
            correta: false,
            feedback: "Ele ainda está inconsciente. Nunca de líquidos para uma vítima que não está acordada e alerta."
          },
          {
            id: "B",
            texto: "Checo se a criança voltou a respirar normalmente e, caso negativo, continuo a RCP e uso o DEA.",
            correta: true,
            feedback: "Correto! Retirar o objeto não garante que ele volte a respirar ou que o coração tenha voltado. Você deve avaliar a respiração; se não houver, continue a reanimação."
          },
          {
            id: "C",
            texto: "Dou tapas nas costas para que ele tussa o resto da carne.",
            correta: false,
            feedback: "Tapas em alguém caído e inconsciente não têm efeito."
          },
          {
            id: "D",
            texto: "Levanto a criança e a carrego correndo para o hospital.",
            correta: false,
            feedback: "Se ele estiver em Parada Cardiorrespiratória (sem respirar), parar as compressões para transportá-lo sem suporte anula as chances de sobrevivência."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Você avaliou a respiração e a criança NÃO está respirando normalmente, embora o objeto tenha saído. O segurança traz o Desfibrilador Externo Automático (DEA). Como proceder?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "O DEA não pode ser usado em crianças, jogo o aparelho fora e continuo comprimindo.",
            correta: false,
            feedback: "DEAs podem e devem ser usados em crianças. A maioria possui pás pediátricas ou um botão redutor de energia. Na falta destes, usa-se as pás de adulto (uma na frente, outra nas costas)."
          },
          {
            id: "B",
            texto: "Ligo o DEA, aplico as pás no peito nu da criança (ou frente/costas se encostarem) e sigo exatamente as instruções de voz do aparelho.",
            correta: true,
            feedback: "Correto! O DEA é essencial. Ele falará tudo que você precisa fazer. Se for pequeno demais para as duas pás no peito sem tocarem uma na outra, coloque uma no meio do peito e outra no meio das costas."
          },
          {
            id: "C",
            texto: "Coloco as pás por cima da camisa da criança para não queimar a pele e aperto o botão de choque.",
            correta: false,
            feedback: "O DEA só funciona com contato direto com a pele nua."
          },
          {
            id: "D",
            texto: "Coloco o DEA na barriga, pois foi onde apliquei a manobra de Heimlich.",
            correta: false,
            feedback: "O DEA analisa o ritmo do coração, então as pás vão no tórax."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "O DEA analisou, não recomendou choque e logo depois a criança começa a tossir, chorar e respirar ativamente. A equipe do SAMU chega nesse exato momento. Qual o desfecho correto?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Digo para a mãe cancelar a ambulância, já que a criança sobreviveu e está chorando.",
            correta: false,
            feedback: "Uma vítima que precisou de RCP e Heimlich avançado tem risco de edemas na laringe, lesões internas e complicações. Deve ser avaliada em hospital."
          },
          {
            id: "B",
            texto: "Entrego a criança para a equipe do SAMU, relato que ela se engasgou com carne, chegou a perder a consciência e precisou de massagem cardíaca até expelir o objeto e voltar a respirar.",
            correta: true,
            feedback: "Correto! A transição de cuidados detalhando que houve perda de consciência e parada respiratória é crucial para o médico saber o estresse ao qual o corpo foi submetido."
          },
          {
            id: "C",
            texto: "Vou embora antes que a equipe faça perguntas, afinal meu trabalho terminou.",
            correta: false,
            feedback: "Omitir informações de quem prestou o primeiro socorro prejudica muito o trabalho da equipe de suporte avançado."
          },
          {
            id: "D",
            texto: "Deixo o DEA ligado nele e vou para casa com os paramédicos sem contar o que o aparelho indicou.",
            correta: false,
            feedback: "A equipe precisa do seu relato sobre as intervenções do DEA."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_67",
    titulo: "Perigo no Quintal: Fio de Alta Tensão",
    tag_visual_cenario: "cenario_externo_servico",
    descricao_inicial: "Após uma forte chuva, você escuta um estouro no quintal do seu vizinho. Ao olhar por cima do muro, você o vê deitado no gramado molhado, rígido, com um galho de árvore e um fio elétrico rompido caídos por cima da perna dele.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A esposa da vítima sai correndo de casa em pânico, indo na direção do marido para tentar tirar o fio elétrico com as mãos limpas. Qual é a sua ação prioritária?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Grito para que ela pare imediatamente, pois a cena está energizada (risco de vida). Ligo para a concessionária de energia e Corpo de Bombeiros (193).",
            correta: true,
            feedback: "Correto! Eletricidade e água são combinações mortais. Tocar na vítima ou no fio energizado transferirá o choque para quem tentar ajudar, gerando múltiplas vítimas."
          },
          {
            id: "B",
            texto: "Pulo o muro correndo e puxo o fio com um pedaço de ferro que encontrei no chão.",
            correta: false,
            feedback: "Ferro conduz eletricidade. Você morrerá eletrocutado se tentar fazer isso."
          },
          {
            id: "C",
            texto: "Deixo ela puxar o fio, pois o sapato dela deve ser de borracha e protege contra alta tensão.",
            correta: false,
            feedback: "Calçados comuns não isolam alta tensão de rua. Ela também seria eletrocutada."
          },
          {
            id: "D",
            texto: "Começo a instruí-la a fazer massagem cardíaca no marido enquanto ele ainda está tomando choque.",
            correta: false,
            feedback: "Tocar na vítima enquanto a corrente elétrica ainda passa por ela causará choque no socorrista. Segurança da cena é lei."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A concessionária cortou a energia da rua. A cena finalmente está segura. Você se aproxima, a vítima não reage ao chamado (inconsciente) e não respira (tórax imóvel). O que isso indica?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Um desmaio simples. Devo jogar água no rosto dele e aguardar.",
            correta: false,
            feedback: "Vítima que não responde e não respira após choque elétrico está em Parada Cardiorrespiratória (PCR)."
          },
          {
            id: "B",
            texto: "Indica uma Parada Cardiorrespiratória (PCR). Peço para a esposa ligar para o SAMU (192) e buscar um DEA se houver na redondeza, enquanto me preparo para agir.",
            correta: true,
            feedback: "Correto! O choque elétrico frequentemente causa arritmias fatais (Fibrilação Ventricular). A vítima precisa de RCP imediata e choque do DEA."
          },
          {
            id: "C",
            texto: "Indica que ele sofreu traumatismo craniano, então só coloco colar cervical e não toco no peito.",
            correta: false,
            feedback: "Mesmo com suspeita de trauma (queda da escada/árvore), a RCP tem precedência sobre a imobilização da coluna se o paciente não tiver pulso/respiração."
          },
          {
            id: "D",
            texto: "Significa que ele precisa ser enterrado na terra úmida para 'puxar' a eletricidade.",
            correta: false,
            feedback: "Isso é um mito perigoso e bizarro. O que ele precisa é compressão no peito e desfibrilação."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você precisa iniciar a Reanimação Cardiopulmonar (RCP). Como o socorrista leigo deve proceder?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Faço massagens muito devagar (30 por minuto) e aplico respiração boca a boca sem proteger minha boca.",
            correta: false,
            feedback: "O ritmo deve ser rápido (100 a 120 por minuto). Ventilação boca a boca só deve ser feita se houver dispositivo de barreira ou segurança/treinamento."
          },
          {
            id: "B",
            texto: "Posiciono minhas mãos no centro do peito e realizo compressões fortes (pelo menos 5 cm) e rápidas (100 a 120 por minuto), permitindo o retorno total do peito.",
            correta: true,
            feedback: "Correto! Segundo a AHA 2020, o foco leigo (Hands-Only CPR) é fazer compressões contínuas, rápidas e fortes no centro do tórax, sem interromper."
          },
          {
            id: "C",
            texto: "Aperto a região da costela lateral para massagear os pulmões.",
            correta: false,
            feedback: "A RCP é feita na metade inferior do osso esterno (centro do peito). Apertar as costelas quebrará os ossos e não bombeará o coração."
          },
          {
            id: "D",
            texto: "Coloco o paciente de bruços (barriga para baixo) e faço compressões nas costas.",
            correta: false,
            feedback: "A RCP tradicional é sempre feita com o paciente em decúbito dorsal (barriga para cima), apoiado em superfície rígida."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "REVIRAVOLTA: Após 8 minutos de massagem sem parar, o socorro ainda não chegou, você está exausto e perdendo a qualidade das compressões. A esposa está ao seu lado assistindo. O que fazer?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Paro a massagem cardíaca para descansar por uns 3 minutos e depois volto.",
            correta: false,
            feedback: "Parar a RCP por mais de 10 segundos faz a pressão sanguínea no cérebro cair a zero, diminuindo drasticamente as chances de sobrevida."
          },
          {
            id: "B",
            texto: "Ensino rapidamente a esposa como colocar as mãos e peço para ela assumir as compressões enquanto eu descanso por 2 minutos (rodízio).",
            correta: true,
            feedback: "Correto! É fundamental revezar os socorristas a cada 2 minutos ou sempre que houver cansaço, para manter a eficácia (profundidade e ritmo) das compressões torácicas."
          },
          {
            id: "C",
            texto: "Diminuo a profundidade da massagem para poupar minhas energias.",
            correta: false,
            feedback: "Se você não afundar o peito pelo menos 5 cm, o coração não é espremido e o sangue não circula."
          },
          {
            id: "D",
            texto: "Jogo um balde de água gelada nele para ver se a eletricidade dá um tranco final e acordo ele.",
            correta: false,
            feedback: "Ações cinematográficas não funcionam. Mantenha o ciclo de suporte básico."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "A esposa assumiu. O segurança do condomínio chega correndo com o DEA. O peito do vizinho está encharcado da chuva e ele está sobre uma poça d'água. O que você deve avaliar antes de colar as pás?",
        tag_visual_detalhe: "estado_molhada_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Colo as pás na água mesmo, pois a eletricidade do DEA vai viajar melhor pela água.",
            correta: false,
            feedback: "A eletricidade não cruzará o coração, ela passará pela poça de água no peito de uma pá para a outra (curto-circuito), inativando o choque terapêutico e queimando a pele."
          },
          {
            id: "B",
            texto: "Removo a vítima da poça de água principal, enxugo vigorosamente o peito com uma toalha ou camisa e aplico as pás no tórax seco.",
            correta: true,
            feedback: "Correto! O DEA e a água não combinam no tórax. Para o choque ser efetivo e seguro, o peito precisa estar seco e a vítima não pode estar submersa em poças grandes."
          },
          {
            id: "C",
            texto: "Não uso o DEA de jeito nenhum, ligo para o fabricante do aparelho e peço orientação.",
            correta: false,
            feedback: "Você perderá tempo precioso. Basta secar o tórax e usá-lo imediatamente."
          },
          {
            id: "D",
            texto: "Coloco jornais entre a pele dele e as pás para isolar a água.",
            correta: false,
            feedback: "As pás precisam estar em contato DIRETO com a pele humana. O jornal bloquearia o choque."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O DEA analisa o ritmo, avisa que um choque é indicado e começa a apitar. O que fazer neste instante exato?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Continuo tocando nele e massageando enquanto aperto o botão, para não perder tempo.",
            correta: false,
            feedback: "Risco fatal! Se você encostar no paciente na hora do choque do DEA, a corrente passará para você."
          },
          {
            id: "B",
            texto: "Grito em voz alta 'AFASTADOS!', verifico visualmente se ninguém (nem eu, nem a esposa) está encostando na vítima, e aperto o botão de choque.",
            correta: true,
            feedback: "Correto! Antes de deflagrar o choque, garantir o afastamento total de todos ao redor é obrigatório para a segurança da cena."
          },
          {
            id: "C",
            texto: "Desligo o DEA porque choque em quem tomou choque da rua vai piorar a situação.",
            correta: false,
            feedback: "O choque da rua causou o dano desorganizando o coração. O choque do DEA organiza novamente. É o tratamento ideal."
          },
          {
            id: "D",
            texto: "Peço para a esposa segurar a cabeça dele para ele não bater no chão quando o corpo pular.",
            correta: false,
            feedback: "A esposa tomaria o choque junto. NINGUÉM encosta."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "O choque foi aplicado. O paciente sofreu um leve espasmo e o DEA falou: 'Choque administrado. Inicie a RCP'. O SAMU (suporte avançado) acabou de estacionar no portão. O que você faz?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Espero a vítima acordar para ver se o choque funcionou e vou abrindo o portão para o SAMU.",
            correta: false,
            feedback: "Nunca se espera para ver se funcionou. O fluxo sanguíneo precisa ser restaurado imediatamente."
          },
          {
            id: "B",
            texto: "Retomo IMEDIATAMENTE as compressões torácicas por mais 2 minutos sem checar pulso. Peço à esposa que oriente os médicos do SAMU a chegarem até nós.",
            correta: true,
            feedback: "Correto! Após o choque do DEA, a regra absoluta é voltar diretamente para as compressões, pois o coração leva um tempo para voltar a bater com força mesmo se o ritmo foi corrigido. Só pare quando a equipe especializada mandar parar."
          },
          {
            id: "C",
            texto: "Tiro as pás do DEA do peito dele e guardo o aparelho na bolsa antes que os médicos cheguem.",
            correta: false,
            feedback: "Nunca remova o DEA ou o desligue. A equipe do SAMU precisará baixar os dados armazenados nele (eletrocardiograma do evento)."
          },
          {
            id: "D",
            texto: "Dou um copo d'água na boca do paciente, caso o choque tenha acordado ele.",
            correta: false,
            feedback: "A vítima provavelmente segue inconsciente. Nada pela boca."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_68",
    titulo: "Mal-estar no Transporte Público: Sintomas e Convulsões",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Você está no ônibus quando um jovem passageiro ao seu lado começa a suar muito frio, tremer e agir de maneira confusa. Ele não parece conseguir falar frases inteiras, está pálido, mas se mantém sentado acordado.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Baseado nos sinais (suor frio, confusão, tremores), qual a abordagem investigativa (levantar dados) que você tenta fazer imediatamente?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Dou um tapa no rosto dele e mando ele descer no próximo ponto.",
            correta: false,
            feedback: "Comportamento confuso pode ser uma emergência médica severa (hipoglicemia, AVC). É necessário investigar."
          },
          {
            id: "B",
            texto: "Pergunto de forma calma se ele é diabético, se tomou insulina ou se não comeu. Procuro também se ele carrega algum colar ou pulseira de alerta médico.",
            correta: true,
            feedback: "Correto! Em vítimas conscientes mas alteradas (sem histórico de trauma), procurar identificação médica e realizar perguntas curtas sobre diabetes é uma excelente tática de investigação de cena."
          },
          {
            id: "C",
            texto: "Concluo que ele está alcoolizado e me afasto para o outro lado do ônibus.",
            correta: false,
            feedback: "Hipoglicemia é famosa por simular embriaguez (hálito estranho, andar trôpego, fala pastosa). Ignorar pode levar a pessoa ao coma."
          },
          {
            id: "D",
            texto: "Imobilizo a cabeça dele com as duas mãos achando que ele caiu e bateu a cabeça.",
            correta: false,
            feedback: "Não houve queda observada. Ele está apenas sentado e passando mal."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Ele acena que SIM para a pergunta de diabetes. Ele ainda consegue engolir sob comando e ficar sentado com os olhos abertos. Qual a conduta básica ideal neste momento?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Injeto a insulina que está na mochila dele para resolver o problema.",
            correta: false,
            feedback: "A insulina reduz o açúcar. O que está causando os sintomas provavelmente é a FALTA de açúcar (hipoglicemia severa). Mais insulina seria letal. Leigos nunca administram injeções."
          },
          {
            id: "B",
            texto: "Ofereço de 15g a 20g de carboidrato de rápida absorção (ex: um suco de caixinha adoçado, sachês de açúcar, refrigerante não-diet) e aguardo 15 minutos para ver se ele melhora.",
            correta: true,
            feedback: "Correto! Se o diabético está CONSCIENTE e consegue engolir, oferecer açúcar ou bebida adoçada é a manobra de suporte básico vital para hipoglicemia."
          },
          {
            id: "C",
            texto: "Ofereço pão integral com queijo branco.",
            correta: false,
            feedback: "Comidas com gordura e muita fibra demoram demais para virarem glicose no sangue. A emergência requer absorção ultra-rápida (açúcar puro, líquidos adoçados)."
          },
          {
            id: "D",
            texto: "Obrigo ele a deitar de barriga para baixo no corredor do ônibus.",
            correta: false,
            feedback: "Isso é humilhante e não ajuda a reverter o quadro glicêmico."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: Antes de conseguir beber o suco que você arrumou, os olhos dele reviram, ele escorrega para o chão do corredor do ônibus e todo o seu corpo começa a tremer violentamente (Convulsão Generalizada). O que você faz?",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Seguro os braços e pernas dele com toda a minha força para impedir que ele se debata.",
            correta: false,
            feedback: "Conter uma pessoa convulsionando pode causar luxações articulares, fraturas musculares graves na vítima."
          },
          {
            id: "B",
            texto: "Afasto mochilas e bancos perto, coloco meu casaco dobrado sob a cabeça dele para protegê-la das batidas e marco o tempo de duração da convulsão.",
            correta: true,
            feedback: "Correto! A prioridade em convulsões é proteger a cabeça de traumas e garantir um espaço seguro até que a crise acabe naturalmente."
          },
          {
            id: "C",
            texto: "Jogo água fria no rosto dele para cortar a crise convulsiva.",
            correta: false,
            feedback: "Isso não interrompe o curtu-circuito cerebral e causa risco de a água ser aspirada para o pulmão durante a respiração ofegante."
          },
          {
            id: "D",
            texto: "Início massagem cardíaca no peito dele enquanto ele se bate.",
            correta: false,
            feedback: "É impossível e contraindicado fazer RCP em uma pessoa com tônus muscular rígido se debatendo. Ele não está em PCR."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Enquanto a vítima se debate, outro passageiro desesperado tenta enfiar uma colher de metal na boca dele 'para ele não engolir a língua'. Como você intervém?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Deixo o passageiro usar a colher, pois o engolimento da língua causa morte certa.",
            correta: false,
            feedback: "É fisicamente impossível engolir a própria língua. A língua pode relaxar e cair para trás depois da crise (bloqueando a via aérea), mas nunca se engole."
          },
          {
            id: "B",
            texto: "Impeço o passageiro imediatamente. Explico que não se deve colocar absolutamente nada na boca da vítima, pois ele pode quebrar os próprios dentes ou mutilar nosso dedo.",
            correta: true,
            feedback: "Correto! Inserir objetos na boca de quem convulsiona quebra os dentes (que podem ir para o pulmão) e provoca lesões graves. A boca deve ficar livre."
          },
          {
            id: "C",
            texto: "Tiro a colher dele, mas coloco meus próprios dedos para segurar a língua.",
            correta: false,
            feedback: "A mandíbula humana travada em convulsão pode amputar seus dedos sem esforço."
          },
          {
            id: "D",
            texto: "Coloco um pano enrolado dentro da boca em vez da colher.",
            correta: false,
            feedback: "O pano vai bloquear a passagem de ar e asfixiá-lo de fato. NUNCA coloque nada na boca."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA: Após 2 minutos, os tremores param. O corpo relaxa e ele fica inconsciente (Estado Pós-Ictal). Você nota que a respiração dele é pesada e ele faz ânsia de vômito. Qual a manobra imediata?",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Viro-o de lado (Posição Lateral de Segurança - PLS) e deixo a boca direcionada para baixo para que os fluidos/vômito saiam pela gravidade.",
            correta: true,
            feedback: "Correto! Vítimas inconscientes que respiram, especialmente aquelas propensas a vomitar, DEVEM ser viradas de lado (PLS) para prevenir a asfixia por aspiração de vômito para o pulmão."
          },
          {
            id: "B",
            texto: "Mantenho ele de barriga para cima e levanto o pescoço dele com um travesseiro grande.",
            correta: false,
            feedback: "Dobrar o pescoço dessa forma obstrui as vias aéreas (como dobrar uma mangueira de ar)."
          },
          {
            id: "C",
            texto: "Coloco ele sentado na cadeira do ônibus para ele não se sujar no chão.",
            correta: false,
            feedback: "Uma pessoa inconsciente (flácida) escorregará e ficará sufocada com o próprio peso na cadeira."
          },
          {
            id: "D",
            texto: "Tento forçar a ingestão do suco agora que ele parou de tremer.",
            correta: false,
            feedback: "Ele está INCONSCIENTE. Dar líquido agora = morte por asfixia garantida."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O motorista parou o ônibus em segurança. A vítima está deitada de lado, vomitou um pouco, mas está respirando. O que deve ser feito a seguir como desfecho?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Digo para o motorista continuar a viagem e levar a vítima para o ponto final.",
            correta: false,
            feedback: "Ele teve uma crise severa associada à possível hipoglicemia e está pós-ictal. Requer atendimento imediato."
          },
          {
            id: "B",
            texto: "Aciono o SAMU (192), passo as informações detalhadas sobre a suspeita de hipoglicemia, o tempo da convulsão (2 minutos) e aguardo junto dele, vigiando a respiração até a equipe chegar.",
            correta: true,
            feedback: "Correto! A transição de cuidados requer que o socorrista informe os paramédicos sobre todo o histórico levantado (diabetes) e a duração da crise. Vigiar a respiração contínua é vital."
          },
          {
            id: "C",
            texto: "Dou tapas no peito dele para que ele acorde mais rápido e vá para casa.",
            correta: false,
            feedback: "O cérebro demora de 10 a 30 minutos para 'reiniciar' após uma crise forte. Não adianta agredir o paciente."
          },
          {
            id: "D",
            texto: "Reanimo ele com massagem cardíaca para forçar o coração a bombear açúcar.",
            correta: false,
            feedback: "Ele TEM pulso e RESPIRA, apenas está apagado pelo curto-circuito cerebral. RCP está contraindicada."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_69",
    titulo: "Caos na Rodovia: Triagem e Salvamento Rápido",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Noite escura, rodovia estadual. Você se depara com uma batida grave entre dois carros. Você encosta o seu no acostamento. A cena está escura e os carros envolvidos estão espalhados na pista.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Como primeiro socorrista na cena de um acidente de trânsito à noite, qual é a ação mais urgente antes mesmo de sair do seu carro?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Pegar meu celular e começar a filmar as vítimas para mostrar aos paramédicos depois.",
            correta: false,
            feedback: "Filmar é perda de tempo precioso, invasão de privacidade e não garante a segurança da cena."
          },
          {
            id: "B",
            texto: "Ligar o pisca-alerta do meu carro (já em local seguro), colocar colete refletivo (se tiver) e usar o triângulo de sinalização bem antes da curva para avisar outros motoristas, evitando engavetamentos.",
            correta: true,
            feedback: "Correto! O controle do tráfego e a sinalização da cena são as medidas mais críticas em rodovias. Um segundo acidente pode matar os socorristas."
          },
          {
            id: "C",
            texto: "Correr desesperadamente para o meio da pista até os carros para puxar as vítimas.",
            correta: false,
            feedback: "Correr às cegas para a rodovia à noite é suicídio."
          },
          {
            id: "D",
            texto: "Arremessar pedras nos carros batidos para ver se os motoristas acordam.",
            correta: false,
            feedback: "Ação absurda que pode causar ferimentos e pânico."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A pista está bem sinalizada. Ao se aproximar, você se depara com um homem (motorista do Carro 1) que saiu sozinho, mas está caminhando desorientado bem no meio da pista de rodagem. O que você faz?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Digo para ele sentar no asfalto bem onde ele está, no meio da via.",
            correta: false,
            feedback: "Deixar uma vítima no meio da via rodoviária, mesmo sentada, a expõe ao atropelamento."
          },
          {
            id: "B",
            texto: "Eu o chamo, conduzo-o suavemente para sentar no acostamento, bem longe do fluxo, peço para não se mover e ligo para o Resgate (SAMU/Bombeiros - 192/193).",
            correta: true,
            feedback: "Correto! Essa vítima desorientada pode ser atropelada. Remova-a para a zona segura (acostamento distante) e realize o acionamento dos recursos de emergência relatando as múltiplas vítimas."
          },
          {
            id: "C",
            texto: "Obrigo ele a deitar de costas na canaleta de água de chuva.",
            correta: false,
            feedback: "Isso gera desconforto e risco de hipotermia ou afogamento se chover."
          },
          {
            id: "D",
            texto: "Ignoro esse homem e vou ver os outros feridos que parecem piores.",
            correta: false,
            feedback: "Se você o ignorar, ele pode caminhar de volta para a estrada e causar outro acidente gravíssimo. Garanta a segurança dele e da via."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: O homem desorientado está sentado no acostamento. Você vai até o Carro 2. Dentro há uma mulher presa no cinto, caída sobre o volante, inconsciente. O motor do carro começa a pegar fogo intenso (chamas invadindo a cabine). Qual a atitude correta?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Não toco nela, porque aprendi na autoescola que não devemos mover vítimas presas em ferragens, senão elas ficam paraplégicas.",
            correta: false,
            feedback: "A imobilização da coluna é prioridade EM SITUAÇÕES NORMAIS. O fogo vai matar o paciente de forma garantida em poucos segundos. Vida sobrepõe o membro."
          },
          {
            id: "B",
            texto: "Solto o cinto de segurança e utilizo manobras de extração rápida (Ex: Chave de Rautek) para arrancar a vítima do carro em chamas imediatamente.",
            correta: true,
            feedback: "Correto! Situação de vida ou morte extrema. O protocolo permite e obriga a quebra da imobilização espinhal padrão quando a cena impõe perigo de incêndio ou explosão iminente."
          },
          {
            id: "C",
            texto: "Sopro as chamas tentando ganhar tempo para o corpo de bombeiros chegar.",
            correta: false,
            feedback: "Chamas de veículo se espalham quase imediatamente e os materiais são tóxicos. Soprar é ineficaz."
          },
          {
            id: "D",
            texto: "Fecho os vidros e as portas para abafar o fogo do lado de dentro do carro.",
            correta: false,
            feedback: "Isso vai aprisionar a fumaça tóxica, sufocando a vítima e permitindo que o calor a cozinhe viva."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você conseguiu retirar a mulher (Manobra de Rautek) e a arrastou para longe cerca de 20 metros. Ela está deitada no mato do acostamento, pálida e inconsciente. Qual o seu próximo passo de avaliação rápida (XABCDE)?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Olho o tórax para ver se sobe e desce, sentindo se há respiração. Em paralelo, dou uma varredura visual em busca de grandes sangramentos.",
            correta: true,
            feedback: "Correto! Após retirar a vítima do perigo mortal, a avaliação primária resume-se a ver se não há hemorragia exsanguinante (X) e se o paciente respira/tem via aérea desimpedida (A e B)."
          },
          {
            id: "B",
            texto: "Coloco talas de papelão nas pernas dela para imobilizar fraturas.",
            correta: false,
            feedback: "Cuidar de fraturas de ossos longos antes de saber se ela respira ou sangra intensamente (prioridades vitais) é um erro grave de sequência."
          },
          {
            id: "C",
            texto: "Passo álcool e mertiolate nos cortes superficiais do rosto.",
            correta: false,
            feedback: "Desperdício de tempo focado em lesões cosméticas em detrimento das ameaças à vida."
          },
          {
            id: "D",
            texto: "Cruzo os braços dela e deixo ali descansando enquanto ligo de novo pro socorro.",
            correta: false,
            feedback: "Sem checar a respiração, ela pode ter tido uma PCR durante a extração e morrer silenciosamente."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "Durante sua varredura (Letra X do XABCDE), você percebe que, devido ao esmagamento na porta, a perna dela foi cortada até a artéria e está esguichando muito sangue rápido no mato. O que fazer?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Coloco fita crepe ou band-aid e sigo em frente.",
            correta: false,
            feedback: "Sangramento em jato (arterial) exige pressão forte ou torniquete. Curativos simples não seguram."
          },
          {
            id: "B",
            texto: "Aplico pressão direta extrema no ferimento usando minhas mãos e qualquer tecido limpo disponível e, se não parar, aplico torniquete na perna.",
            correta: true,
            feedback: "Correto! Sangramento massivo no trauma mata em minutos e deve ser contido com força bruta de compressão e torniquete caso a compressão seja ineficaz ou você precise soltar as mãos."
          },
          {
            id: "C",
            texto: "Amarro o pescoço dela para causar uma hipotensão geral.",
            correta: false,
            feedback: "Resposta letal e absurda."
          },
          {
            id: "D",
            texto: "Elevo a perna, deixando esguichar para o lado até coagular com o frio da noite.",
            correta: false,
            feedback: "Ela morrerá de hipovolemia. Somente elevação não interrompe o jato de sangue forte."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "REVIRAVOLTA: Você está fazendo força comprimindo a perna da mulher ferida. O homem lá do primeiro carro, que estava apenas desorientado sentado no acostamento a 10 metros, levanta, dá dois passos e cai desmaiado de bruços no asfalto. Você está sozinho. O que dita a triagem leiga nesse caos?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Abandono a mulher que está sangrando intensamente e corro para olhar o homem desmaiado.",
            correta: false,
            feedback: "Se você soltar a compressão da perna da mulher, o sangramento voltará com força e ela morrerá rapidamente."
          },
          {
            id: "B",
            texto: "Grito por ajuda na pista para outros motoristas. Enquanto não tiver mais ninguém, mantenho a compressão na hemorragia grave da mulher, pois o sangramento massivo tem precedência na prioridade de vida.",
            correta: true,
            feedback: "Correto! Hemorragia massiva exsanguinante (Letra X) tem prioridade sobre um desmaio à distância de causa desconhecida. Você pede ajuda, mas não abandona a fonte óbvia de morte sangrante rápida."
          },
          {
            id: "C",
            texto: "Chuto uma pedra no homem para ver se ele acorda sozinho.",
            correta: false,
            feedback: "Imprudente e desrespeitoso."
          },
          {
            id: "D",
            texto: "Arraste a mulher pela perna quebrada até onde o homem está.",
            correta: false,
            feedback: "Arrastar uma perna esmagada/sangrando piora a hemorragia e a dor, podendo matá-la de choque."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Por sorte, um caminhoneiro para e desce correndo com uma caixa de primeiros socorros. Você pede a ele que assuma o que?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Peço a ele para me substituir na compressão da perna (ou me ajudar com um torniquete comercial da caixa dele) para que eu possa avaliar o homem caído.",
            correta: true,
            feedback: "Correto! Com dois socorristas (Trabalho em Equipe), você delega o sangramento já identificado e corre para aplicar a avaliação inicial (XABCDE) na outra vítima."
          },
          {
            id: "B",
            texto: "Peço a ele para abrir as redes sociais do caminhão dele e pedir ajuda no Facebook.",
            correta: false,
            feedback: "Perda total de foco. A emergência já está acontecendo fisicamente ali."
          },
          {
            id: "C",
            texto: "Mando o caminhoneiro pegar o homem caído e jogá-lo no caminhão e dirigir até o hospital.",
            correta: false,
            feedback: "Transporte sem suporte avançado para vítimas traumatizadas e inconscientes é altamente perigoso."
          },
          {
            id: "D",
            texto: "Digo para ele ir combater o incêndio do carro, que já explodiu de qualquer forma.",
            correta: false,
            feedback: "A vida das vítimas já retiradas é a prioridade em relação à lataria que queima longe deles."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "O caminhoneiro apertou o torniquete. Você corre e vira o homem desmaiado de costas mantendo cuidado com a cervical. Ele está branco feito papel, com respiração fraca, suado e o abdômen dele está estranhamente duro e inchado. O que isso significa no contexto do trauma?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Apenas excesso de gases presos no intestino dele.",
            correta: false,
            feedback: "Abdômen rígido 'em tábua' após trauma forte de trânsito é sinal clássico e grave de outra coisa."
          },
          {
            id: "B",
            texto: "Isso aponta para forte suspeita de Hemorragia Interna Abdominal. O sangue está vazando dentro dele causando choque. Devo manter ele aquecido e não oferecer nada pela boca.",
            correta: true,
            feedback: "Correto! As hemorragias internas não podem ser contidas no pré-hospitalar, mas o socorrista deve identificar os sinais (abdome tenso, choque) e prevenir hipotermia (aquecimento) e avisar a equipe médica da urgência cirúrgica."
          },
          {
            id: "C",
            texto: "Faço compressões fortes na barriga dele para tentar espremer o sangue de volta para o coração.",
            correta: false,
            feedback: "Isso só aumentaria o rompimento dos órgãos internos (fígado/baço) e mataria o paciente mais rápido."
          },
          {
            id: "D",
            texto: "Dou comida para absorver o sangue solto no estômago.",
            correta: false,
            feedback: "Ele está inconsciente, comida causa asfixia imediata e atrapalha a provável cirurgia futura."
          }
        ]
      },
      {
        id: "etapa_9",
        pergunta: "Você precisa cobrir o homem para reter o calor (Prevenção de Hipotermia no Trauma). O caminhoneiro pergunta por que. O que você responde na linguagem técnica do APH?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "'Porque a noite está meio fria para ele pegar um resfriado'.",
            correta: false,
            feedback: "A hipotermia no trauma vai muito além de conforto ou resfriado; ela afeta processos químicos sanguíneos vitais."
          },
          {
            id: "B",
            texto: "'Vítimas com choque e perda de sangue não conseguem manter a temperatura, e o frio extremo corta a capacidade do sangue de coagular, causando um ciclo que leva à morte (Tríade Letal).'",
            correta: true,
            feedback: "Correto! A prevenção de hipotermia é ensinada (Letra E - Exposição e controle térmico) para prevenir a Tríade Letal (Hipotermia, Acidose e Coagulopatia) onde o sangue perde a eficácia de tapar feridas internas."
          },
          {
            id: "C",
            texto: "'Não tem motivo técnico, é só frescura das apostilas.'",
            correta: false,
            feedback: "A prevenção da hipotermia em vítima de trauma é um pilar da medicina de combate e do PHTLS moderno."
          },
          {
            id: "D",
            texto: "'É para ele ficar mais confortável enquanto o coração para.'",
            correta: false,
            feedback: "Resposta fatalista e cientificamente pobre."
          }
        ]
      },
      {
        id: "etapa_10",
        pergunta: "O caminhão de Resgate dos Bombeiros (ABTR) chega com giroflex e sirenes, apagando os restos do incêndio, junto com uma ambulância avançada do SAMU (USA). Como se encerra a ocorrência em relação ao seu papel?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Saio de fininho, pego meu carro e sumo antes que me coloquem como testemunha, não quero B.O.",
            correta: false,
            feedback: "A evasão do socorrista omite informações determinantes para a sobrevivência das vítimas no trajeto para o hospital."
          },
          {
            id: "B",
            texto: "Faço a passagem do caso focada: 'Senhores, a mulher sofreu extração de emergência por fogo, teve hemorragia exsanguinante contida por torniquete. O homem estava desorientado, deitou e está em choque com abdome rígido'.",
            correta: true,
            feedback: "Correto! Uma passagem de plantão concisa, reportando as intervenções salvadoras (Rautek e Torniquete) e a evolução do homem (Choque e suspeita de abdome agudo) determina as condutas imediatas das equipes avançadas."
          },
          {
            id: "C",
            texto: "Exijo que os médicos me deixem ir no fundo da ambulância para ver as cirurgias.",
            correta: false,
            feedback: "Seu papel acaba após o relato."
          },
          {
            id: "D",
            texto: "Desmaio no chão para ver se serei atendido também.",
            correta: false,
            feedback: "Sem comentários."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_70",
    titulo: "Explosão na Cozinha: Caos Familiar",
    tag_visual_cenario: "cenario_cozinha",
    descricao_inicial: "Você ouve um estrondo vindo da casa vizinha e corre para ajudar. Houve uma explosão de um botijão de gás. A cozinha está destruída, mas não há fogo ativo. A mãe está gritando com queimaduras no rosto e braços; o filho pequeno está caído no chão, imóvel; e o pai corre em círculos, histérico e ileso.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Ao chegar na porta da cozinha destruída, antes de focar nos feridos, qual é a sua primeira ação obrigatória?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Correr imediatamente para a criança caída, pois crianças sempre têm prioridade absoluta.",
            correta: false,
            feedback: "Erro crítico de segurança. O ambiente pode estar saturado de gás, com risco de nova explosão ou asfixia do socorrista."
          },
          {
            id: "B",
            texto: "Avaliar a cena (cheirar gás, olhar o teto), fechar o registro do gás se for visível e seguro, abrir portas/janelas para ventilar e acionar o 193 (Bombeiros).",
            correta: true,
            feedback: "Correto! A regra número um é a segurança da cena. Em vazamentos de gás, cortar a fonte, ventilar e acionar os Bombeiros previne que você e outras pessoas morram em uma segunda explosão."
          },
          {
            id: "C",
            texto: "Gritar com o pai para ele calar a boca e parar de atrapalhar.",
            correta: false,
            feedback: "Agredir verbalmente pessoas em choque piora o caos. O foco inicial deve ser a segurança estrutural e respiratória da cena."
          },
          {
            id: "D",
            texto: "Ligar a luz da cozinha para enxergar melhor os ferimentos da mãe.",
            correta: false,
            feedback: "Ação letal! Acender interruptores em ambiente com vazamento de gás gera faísca e causa explosão imediata."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está ventilada e segura. Você tem três vítimas: a mãe (consciente, gritando de dor pelas queimaduras), a criança (inconsciente, imóvel no chão) e o pai (ileso, mas em pânico). Quem você atende primeiro (Triagem Básica)?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "A mãe, porque a dor das queimaduras é insuportável e ela está pedindo socorro ativamente.",
            correta: false,
            feedback: "Quem grita respira. Em triagem, vítimas silenciosas e imóveis são o maior indicativo de risco iminente de morte."
          },
          {
            id: "B",
            texto: "A criança caída, pois ela está inconsciente e pode estar em Parada Cardiorrespiratória (PCR) ou asfixiada.",
            correta: true,
            feedback: "Correto! Vítimas inconscientes e imóveis têm prioridade máxima de avaliação (Letras A e B do XABCDE), pois a falta de oxigênio mata em minutos."
          },
          {
            id: "C",
            texto: "O pai, para acalmá-lo primeiro, pois ele pode atrapalhar o atendimento das outras duas.",
            correta: false,
            feedback: "Você pode dar ordens curtas ao pai, mas atrasar o socorro da criança inconsciente pode custar a vida dela."
          },
          {
            id: "D",
            texto: "Puxo todos para a rua ao mesmo tempo para avaliar sob a luz do sol.",
            correta: false,
            feedback: "A cena já foi garantida como segura por você. Arrastar desnecessariamente pode agravar traumas na criança."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você avalia a criança caída: ela não responde a chamados, mas você observa o peito subir e descer ritmicamente e sente a respiração. Não há sangramentos visíveis. Qual a conduta para ela enquanto você vai checar a mãe?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Faço massagem cardíaca rápida só para acordá-la.",
            correta: false,
            feedback: "Nunca se faz RCP em alguém que está respirando. Isso pode causar arritmias fatais e quebrar costelas."
          },
          {
            id: "B",
            texto: "Deixo ela de barriga para cima e vou atender a mãe.",
            correta: false,
            feedback: "Uma vítima inconsciente deitada de barriga para cima corre alto risco de asfixia pela queda da própria língua ou se vomitar."
          },
          {
            id: "C",
            texto: "Coloco a criança em Posição Lateral de Segurança (PLS) para manter as vias aéreas abertas e prevenir engasgo com vômito, e peço ao pai para ficar olhando o peito dela.",
            correta: true,
            feedback: "Correto! A PLS é a conduta padrão para vítimas inconscientes que respiram. Delegar a vigilância ao pai também ajuda a tirá-lo do estado de pânico dando-lhe uma tarefa vital."
          },
          {
            id: "D",
            texto: "Sento a criança na cadeira e amarro com um pano para ela não cair.",
            correta: false,
            feedback: "Vítimas inconscientes não têm controle de tronco ou pescoço e vão sufocar se colocadas sentadas."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você vira para a mãe. Ela tem queimaduras de 2º grau (bolhas e pele vermelha) nos braços e no rosto. A blusa dela está derretida e grudada em parte do braço. O que fazer?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Puxo a blusa derretida para ver a extensão da ferida e estouro as bolhas para aliviar a pressão.",
            correta: false,
            feedback: "Puxar tecido grudado arranca a pele junto. Estourar bolhas abre portas para infecções generalizadas severas."
          },
          {
            id: "B",
            texto: "Resfrio as queimaduras apenas com água corrente em temperatura ambiente por vários minutos e NÃO tento desgrudar a roupa.",
            correta: true,
            feedback: "Correto! O resfriamento com água limpa (não gelada) cessa o aprofundamento da queimadura e alivia a dor. O que está grudado só deve ser removido no hospital."
          },
          {
            id: "C",
            texto: "Coloco gelo diretamente sobre as queimaduras para resfriar bem rápido.",
            correta: false,
            feedback: "O gelo queima os tecidos danificados, agravando a lesão térmica por frio (isquemia)."
          },
          {
            id: "D",
            texto: "Não faço nada nas queimaduras e mando ela deitar do lado do filho.",
            correta: false,
            feedback: "A queimadura continua 'cozinhando' as camadas profundas da pele se não for resfriada ativamente com água."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA: O pai, no desespero, pega um pote de farinha de trigo e um pote de manteiga, correndo para jogar em cima do rosto da mãe dizendo que 'vai curar a ardência'. Como você reage?",
        tag_visual_detalhe: "risco_pratica_incorreta",
        opcoes: [
          {
            id: "A",
            texto: "Deixo ele passar apenas a manteiga, mas bloqueio a farinha.",
            correta: false,
            feedback: "Qualquer substância caseira (manteiga, pasta de dente, café) isola o calor dentro da pele, piora a lesão e causa infecções gravíssimas."
          },
          {
            id: "B",
            texto: "Intervenho fisicamente com firmeza, tiro os potes dele e explico rapidamente que isso vai infeccionar e piorar a queimadura, mantendo apenas a água corrente.",
            correta: true,
            feedback: "Correto! O socorrista deve intervir contra práticas incorretas perigosas. Produtos caseiros dificultam a limpeza no hospital, onde o médico terá que raspar a ferida para tirar tudo."
          },
          {
            id: "C",
            texto: "Pego os potes e passo eu mesmo, pois o pai está com as mãos sujas.",
            correta: false,
            feedback: "O erro não está em quem aplica, mas na aplicação em si. NUNCA use remédios caseiros em queimaduras."
          },
          {
            id: "D",
            texto: "Bato no rosto dele para ele 'acordar' do choque.",
            correta: false,
            feedback: "Agressão física não é técnica de primeiros socorros."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "A ambulância avançada do SAMU chega. Você precisa fazer a passagem do caso (transição de cuidados). Qual o relato mais eficiente?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "'A cozinha explodiu, os três estão aí, boa sorte e tchau'.",
            correta: false,
            feedback: "A falta de informações atrasa o atendimento. Você já fez a triagem e o suporte, deve repassar o que descobriu."
          },
          {
            id: "B",
            texto: "'Tivemos explosão de gás. A criança estava inconsciente mas respirando, coloquei em posição lateral. A mãe tem queimaduras de vias aéreas (rosto) e braços, foi resfriada só com água. O pai está em choque psicológico.'",
            correta: true,
            feedback: "Correto! Um relato preciso que aponta os mecanismos de lesão, os estados neurológicos encontrados, a evolução e os tratamentos que você já instituiu."
          },
          {
            id: "C",
            texto: "'Eles estão todos bem, não precisa de maca, podem ir embora'.",
            correta: false,
            feedback: "Queimadura de rosto (via aérea) e inconsciência são emergências médicas absolutas de internação."
          },
          {
            id: "D",
            texto: "Passo a receita de como eu resfriei com água e exijo que o médico anote no prontuário.",
            correta: false,
            feedback: "O seu papel é relatar, não exigir anotações médicas."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_71",
    titulo: "Desabamento na Festa: Triagem e Ação",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Durante uma festa, a varanda de madeira colapsa com várias pessoas em cima. Você está no jardim ileso. Há gritos de dor, poeira subindo e pedaços de madeira pendurados ameaçando cair.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Você é o único socorrista no momento. Os escombros pararam de cair, mas a estrutura ainda parece instável. Qual a sua primeira ação para organizar esse incidente com múltiplas vítimas (IMV)?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Corro para o meio dos escombros e começo a puxar as pessoas mais pesadas.",
            correta: false,
            feedback: "Ir para uma área instável sem dimensionar a cena fará de você mais uma vítima se a estrutura ruir novamente."
          },
          {
            id: "B",
            texto: "Avalio a segurança. Grito em voz alta: 'Quem conseguir andar, venha até mim no jardim!'. Ligo 193/192 informando desabamento com múltiplas vítimas.",
            correta: true,
            feedback: "Correto! É o princípio da Triagem START: retirar os 'Verdes' (ilesos/leves) da área de risco pela própria voz ajuda a limpar a cena e identificar os feridos graves que não conseguem sair sozinhos."
          },
          {
            id: "C",
            texto: "Não faço nada e espero os bombeiros, afinal leigos não devem atuar em desabamentos.",
            correta: false,
            feedback: "Você pode e deve atuar garantindo o fluxo de vítimas ilesas para fora e sinalizando a emergência para envio de suporte adequado."
          },
          {
            id: "D",
            texto: "Ligo a música de novo para acalmar as pessoas que estão presas.",
            correta: false,
            feedback: "Ação irracional. Você precisa escutar os pedidos de socorro e monitorar estalos da estrutura."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Quem podia andar já saiu. Sobraram duas vítimas visíveis e seguras de acessar. Vítima 1: Um jovem gritando desesperadamente, segurando o braço que parece quebrado. Vítima 2: Uma mulher em total silêncio, pálida, com uma poça de sangue crescendo absurdamente rápido na coxa. Quem você atende primeiro?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Vítima 1, pois ele está gritando e claramente sentindo muita dor.",
            correta: false,
            feedback: "Novamente, quem grita tem via aérea aberta e está respirando. Dor no braço não mata em 3 minutos."
          },
          {
            id: "B",
            texto: "Vítima 2, pois uma hemorragia massiva exsanguinante (Letra X) mata em pouquíssimos minutos. O silêncio e palidez indicam choque grave.",
            correta: true,
            feedback: "Correto! O sangue jorrando é a maior causa de mortes evitáveis no trauma. A prioridade é estancar grandes sangramentos antes de qualquer fratura de braço."
          },
          {
            id: "C",
            texto: "Corro de um para o outro fazendo curativos pequenos nos dois.",
            correta: false,
            feedback: "Você deve focar na ameaça mais imediata à vida de forma resolutiva."
          },
          {
            id: "D",
            texto: "Nenhum dos dois. Começo a tentar levantar as tábuas pesadas sozinho.",
            correta: false,
            feedback: "Você tem vítimas visíveis morrendo por causas tratáveis (hemorragia). O resgate pesado é função dos Bombeiros."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você chega na Vítima 2 (mulher da perna sangrando). O sangue é vermelho vivo e sai em jatos fortes (arterial) devido a um corte profundo por madeira. O que fazer imediatamente?",
        tag_visual_detalhe: "acao_compressao_direta",
        opcoes: [
          {
            id: "A",
            texto: "Faço compressão direta com as duas mãos e um pano grosso, colocando o peso do meu corpo sobre a ferida para estancar.",
            correta: true,
            feedback: "Correto! A compressão direta firme e agressiva é o primeiro passo para o controle de hemorragias exsanguinantes (Protocolo XABCDE)."
          },
          {
            id: "B",
            texto: "Levanto a perna dela e faço um curativo frouxo com papel toalha.",
            correta: false,
            feedback: "A força da pressão arterial empurrará curativos frouxos. É preciso aplicar força mecânica extrema."
          },
          {
            id: "C",
            texto: "Coloco terra ou poeira da obra em cima para secar o sangue.",
            correta: false,
            feedback: "Risco brutal de infecção grave e gangrena. Use apenas panos os mais limpos possíveis ou as mãos nuas em último caso."
          },
          {
            id: "D",
            texto: "Checo se ela está respirando antes de ligar para o sangramento.",
            correta: false,
            feedback: "A diretriz atual (XABCDE) coloca o X (Hemorragia Exsanguinante) ANTES da via aérea, pois a perda de volume mata antes."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Você comprimiu com força máxima por 2 minutos, mas o sangue não para e está vazando por entre os seus dedos. Ela perde a consciência. O que fazer?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Eu solto a perna, desisto dela e vou tratar o rapaz do braço quebrado.",
            correta: false,
            feedback: "Abandonar uma vítima com chance de reversão por escalonamento de técnica não é ético."
          },
          {
            id: "B",
            texto: "Aplico um torniquete comercial (se tiver) ou improvisado (faixa larga e rígida com uma haste) cerca de 5 a 7cm acima do corte, apertando até o sangue cessar totalmente.",
            correta: true,
            feedback: "Correto! Se a compressão direta falha em ferimentos de braços/pernas, o torniquete é a conduta salvadora de vidas imediata."
          },
          {
            id: "C",
            texto: "Elevação da perna até a altura da cabeça dela.",
            correta: false,
            feedback: "Elevação não estanca hemorragia massiva de grandes vasos se a compressão falhou."
          },
          {
            id: "D",
            texto: "Dou tapas nela para ela acordar e tentar comprimir a própria perna.",
            correta: false,
            feedback: "Ela desmaiou por Choque Hemorrágico (falta de sangue no cérebro). Ela não vai acordar com tapas."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA: O torniquete parou o sangue. Um dos convidados ilesos corre até você para ajudar. Nesse exato momento, vocês encontram a Vítima 3 debaixo de uma mesa intacta: não responde, e ao observar o peito, não respira (PCR). Como gerenciar as 3 vítimas agora?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Continuo cuidando do braço quebrado do rapaz e peço ao convidado para rezar pela Vítima 3.",
            correta: false,
            feedback: "PCR é tratável com RCP. Ignorar para tratar um braço quebrado é um erro gravíssimo de prioridade."
          },
          {
            id: "B",
            texto: "Delego a vigilância das Vítimas 1 e 2 ao convidado ileso. Eu me ajoelho ao lado da Vítima 3 e inicio a massagem cardíaca (RCP) imediatamente, solicitando um DEA.",
            correta: true,
            feedback: "Correto! Na triagem com socorristas adicionais, as hemorragias já estão contidas. Você escala a prioridade máxima (PCR) e delega o que já está estabilizado."
          },
          {
            id: "C",
            texto: "Mando o convidado fazer massagem cardíaca enquanto eu arrumo o osso do braço do rapaz.",
            correta: false,
            feedback: "Leigos não devem tentar 'arrumar' fraturas no local. Você deve assumir a RCP que é o procedimento crítico que requer mais foco."
          },
          {
            id: "D",
            texto: "Faço respiração boca a boca nos três pacientes para garantir.",
            correta: false,
            feedback: "Apenas a Vítima 3 não respira."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Enquanto você faz as compressões torácicas na Vítima 3, o convidado ileso avisa: 'A mulher do torniquete está acordando e quer arrancar o pano apertado da perna porque está doendo muito!'. O que você responde sem parar a massagem?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "'Deixa ela afrouxar um pouco para aliviar a dor, depois você aperta.'",
            correta: false,
            feedback: "Nunca afrouxe um torniquete. O sangue que estava represado voltará a vazar e os coágulos se desfarão, causando morte."
          },
          {
            id: "B",
            texto: "'Segure as mãos dela! Não deixe ela tirar o torniquete sob nenhuma hipótese! É a vida dela que está em jogo!'",
            correta: true,
            feedback: "Correto! Torniquetes salvam vidas, mas causam dor intensa. Vítimas confusas podem tentar retirá-los. O socorrista deve impedir física e verbalmente que isso aconteça."
          },
          {
            id: "C",
            texto: "'Tira o torniquete e coloca um band-aid então!'",
            correta: false,
            feedback: "Absurdo clínico."
          },
          {
            id: "D",
            texto: "'Vou parar a massagem aqui e lá segurar a perna dela.'",
            correta: false,
            feedback: "Parar a RCP na Vítima 3 garante a morte cerebral dele. O convidado precisa seguir a sua ordem de segurar as mãos da mulher."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "A unidade de Resgate Múltiplo dos Bombeiros (com Médico) chega ao local. Como você, que atuou na triagem inicial, se apresenta para passar o plantão perante o cenário de caos?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Levanto as mãos, digo que fiz o que pude e sento no canto exausto.",
            correta: false,
            feedback: "Os bombeiros precisam do seu raio-x mental da cena. Quantos feridos, onde estão e o que foi feito."
          },
          {
            id: "B",
            texto: "Eu me identifico como primeiro respondente: 'Temos 3 feridos graves! Um em PCR que estou massageando há 5 min, uma mulher com torniquete aplicado na coxa e um consciente com fratura de braço logo ali.'",
            correta: true,
            feedback: "Correto! Essa comunicação curta e precisa define toda a dinâmica de recursos que o Comandante do Incidente vai desdobrar, salvando tempo vital para as 3 vítimas."
          },
          {
            id: "C",
            texto: "Peço para o médico atender o rapaz do braço primeiro, pois a dor dele é maior.",
            correta: false,
            feedback: "O médico confirmará que a PCR e a Hemorragia são as prioridades absolutas (Vermelhas), e o braço é secundário (Amarelo)."
          },
          {
            id: "D",
            texto: "Exijo que eu continue massageando e expulso os Bombeiros da Vítima 3.",
            correta: false,
            feedback: "O Suporte Avançado assumirá com drogas, intubação e o DEA profissional. A transição de cuidados é obrigatória."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_72",
    titulo: "Raio no Parque: Triagem Reversa",
    tag_visual_cenario: "cenario_publico_aberto",
    descricao_inicial: "Uma tempestade de verão se forma rapidamente em um parque. Dois jovens buscaram abrigo debaixo de uma árvore isolada. Um raio atinge a árvore. Você vê o clarão e corre até lá. Um jovem (V1) está caído imóvel, de bruços. O outro (V2) está perambulando sem rumo, com as roupas queimadas e chorando alto.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A tempestade está muito forte. O que você deve considerar antes de tocar nas vítimas atingidas pelo raio?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Não toco neles, pois o corpo deles retém a eletricidade do raio e vai me dar um choque mortal.",
            correta: false,
            feedback: "Mito. O corpo humano não armazena eletricidade após uma descarga elétrica natural (raio). É totalmente seguro tocá-los."
          },
          {
            id: "B",
            texto: "Verifico apenas se há cabos de energia urbana caídos na área. Como não há postes, vítimas de raios não retêm carga elétrica e podem ser tocadas com segurança. Peço a alguém para ligar 192 (SAMU).",
            correta: true,
            feedback: "Correto! Ao contrário de choques em tomadas contínuas, vítimas de raios são seguras para toque imediato. A segurança envolve apenas o risco de cair outro raio se você ficar sob a mesma árvore, então aja rápido."
          },
          {
            id: "C",
            texto: "Bato com um pedaço de madeira de longe para descarregar a energia no chão.",
            correta: false,
            feedback: "Não há energia para descarregar. Isso só vai feri-los."
          },
          {
            id: "D",
            texto: "Mando o jovem que está andando voltar para debaixo da árvore para se proteger da chuva.",
            correta: false,
            feedback: "A árvore isolada foi o que atraiu o raio. Voltar para lá é expô-lo a um segundo impacto mortal."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você tem que decidir quem atender primeiro. V1 está em Parada Cardiorrespiratória (sem pulso/respiração). V2 está confuso, com queimaduras na camisa e chorando muito de dor. Qual é a regra de triagem exclusiva para acidentes com raios (Triagem Reversa)?",
        tag_visual_detalhe: "estado_choque_palidez",
        opcoes: [
          {
            id: "A",
            texto: "Atendo o que chora primeiro (V2), pois os mortos não podem ser salvos.",
            correta: false,
            feedback: "Em ocorrências comuns isso pode ser verdade, mas vítimas de raio em PCR têm altíssimas taxas de retorno se reanimadas rápido, pois o coração apenas 'resetou', muitas vezes sem danos aos órgãos."
          },
          {
            id: "B",
            texto: "Atendo V1 (em Parada Cardiorrespiratória) PRIMEIRO. Em acidentes com raios, inverte-se a triagem: as vítimas em PCR têm prioridade absoluta de RCP.",
            correta: true,
            feedback: "Correto! Na Triagem Reversa (exclusiva para raios), vítimas que parecem mortas são a prioridade, pois a descarga massiva para o coração (asfixia e assistolia) é altamente reversível com RCP precoce."
          },
          {
            id: "C",
            texto: "Coloco os dois em posição lateral e vou buscar ajuda longe dali.",
            correta: false,
            feedback: "Se você abandonar V1 em PCR, ele morrerá em definitivo por falta de fluxo sanguíneo cerebral."
          },
          {
            id: "D",
            texto: "Corro atrás do jovem V2 para passar água fria na queimadura.",
            correta: false,
            feedback: "O tempo gasto em uma queimadura custará a vida do V1 (PCR). Delegue o V2 a um passante ou mande ele sentar no chão."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você se ajoelha ao lado de V1 para iniciar a RCP. Ele está de barriga para baixo (decúbito ventral). O que fazer?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Faço massagens nas costas dele com toda a minha força.",
            correta: false,
            feedback: "Compressões torácicas são ineficazes pelas costas devido à rigidez da coluna vertebral e distância do coração."
          },
          {
            id: "B",
            texto: "Giro-o cuidadosamente em bloco (Rolamento) para que fique de barriga para cima em uma superfície rígida, protejo a cabeça e inicio as compressões torácicas no centro do peito.",
            correta: true,
            feedback: "Correto! A RCP só é eficaz com a vítima em decúbito dorsal (barriga para cima) sobre uma base firme."
          },
          {
            id: "C",
            texto: "Dobro as pernas dele para trás para forçar a circulação até ele acordar.",
            correta: false,
            feedback: "Ação inútil e perigosa para PCR."
          },
          {
            id: "D",
            texto: "Espero o DEA chegar para analisar o ritmo pelas costas dele.",
            correta: false,
            feedback: "O atraso na RCP zera as chances de vida. Você precisa virá-lo e começar a compressão manual imediatamente."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "REVIRAVOLTA: Enquanto você está fazendo massagem cardíaca em V1, o jovem V2 (confuso e surdo pelo trovão) entra em pânico e começa a correr em direção a um lago próximo, desorientado. O que você faz?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Paro a RCP por 5 minutos, corro até ele, amarro-o em uma árvore e volto.",
            correta: false,
            feedback: "Se você parar a RCP por 5 minutos, o V1 morre."
          },
          {
            id: "B",
            texto: "Grito ordens curtas e firmes para um passante/testemunha segurá-lo e sentá-lo no chão longe da água, mantendo minha massagem sem interrupção.",
            correta: true,
            feedback: "Correto! O controle de cena com múltiplas vítimas exige liderança. Você deve usar testemunhas (bystanders) para evitar que o desorientado se afogue, sem abandonar o paciente crítico."
          },
          {
            id: "C",
            texto: "Abandono V1, pois V2 tem mais chances de sobreviver se não se afogar.",
            correta: false,
            feedback: "Na triagem de raio, o V1 é sua responsabilidade vitalícia até o resgate. Delegue a contenção."
          },
          {
            id: "D",
            texto: "Deixo ele ir. A água vai aliviar a queimadura dele naturalmente.",
            correta: false,
            feedback: "Ele está confuso e pode sofrer uma convulsão tardia ou afogamento passivo no lago."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA 2: O chão está muito encharcado da chuva. Um segurança do parque chega correndo com o DEA. O que você deve gerenciar em relação à água no chão de terra/grama antes de dar o choque?",
        tag_visual_detalhe: "estado_molhada_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Não podemos usar o DEA na chuva de jeito nenhum. Descarta o aparelho.",
            correta: false,
            feedback: "Você PODE usar o DEA na chuva. O risco é se o peito estiver muito molhado ou a vítima submersa."
          },
          {
            id: "B",
            texto: "Peço ao segurança para secar rapidamente o peito da vítima com a camisa dele (ou pano) enquanto colo as pás. Como não é uma poça contínua de água em piso liso, podemos usar o aparelho protegendo-o da chuva direta.",
            correta: true,
            feedback: "Correto! O peito DEVE estar seco para as pás aderirem. A umidade da grama molhada ou asfalto molhado (sem estar imerso) não impede o choque seguro se ninguém encostar no paciente."
          },
          {
            id: "C",
            texto: "Jogo uma lona de borracha embaixo da vítima inteira, parando a massagem por 3 minutos.",
            correta: false,
            feedback: "Tempo excessivo sem RCP. Apenas seque o tórax e siga o DEA."
          },
          {
            id: "D",
            texto: "Coloco o DEA por cima da camisa molhada da vítima para isolar a água.",
            correta: false,
            feedback: "O DEA precisa de contato pele a pele. Camisa molhada cortará a condução."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O DEA recomenda o choque em V1. Você aplica o choque. Logo após o corpo pular pelo impacto, o que é mandatório fazer, segundo o protocolo de SBV?",
        tag_visual_detalhe: "acao_uso_dea",
        opcoes: [
          {
            id: "A",
            texto: "Verifico o pulso no pescoço para ver se o raio e o choque reativaram o coração.",
            correta: false,
            feedback: "Leigos não perdem tempo checando pulso após o choque. O coração leva minutos para gerar fluxo palpável mesmo batendo."
          },
          {
            id: "B",
            texto: "Retomo IMEDIATAMENTE as compressões torácicas por 2 minutos sem checar pulso ou respiração, a menos que ele comece a falar ou se debater ativamente.",
            correta: true,
            feedback: "Correto! Regra de ouro da AHA: após qualquer choque do DEA, a RCP reinicia instantaneamente para ajudar o coração 'atordoado' a bombear."
          },
          {
            id: "C",
            texto: "Tiro as pás e espero o DEA analisar de novo em 10 segundos.",
            correta: false,
            feedback: "As pás nunca são removidas, e a reanálise leva 2 minutos."
          },
          {
            id: "D",
            texto: "Viro ele de lado e dou água.",
            correta: false,
            feedback: "Absurdo total. Ele segue inconsciente e provavelmente em PCR."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "REVIRAVOLTA 3: Enquanto você retoma a RCP em V1, o jovem V2 (que estava sentado contido) escorrega de lado no chão, fica rígido, revira os olhos e começa a ter uma Convulsão forte (efeito tardio neurológico do choque elétrico). Como você age sozinho no comando?",
        tag_visual_detalhe: "estado_espasmo_muscular",
        opcoes: [
          {
            id: "A",
            texto: "Abandono a RCP do V1 e vou segurar a língua do V2 para ele não asfixiar.",
            correta: false,
            feedback: "Não se coloca a mão em boca de convulsionando (risco de amputação digital) e interromper a RCP mata o V1."
          },
          {
            id: "B",
            texto: "Continuo minha massagem em V1 e grito ordens ao segurança: 'Afaste as pedras de perto do V2 e coloque algo macio sob a cabeça dele! Não segurem os braços dele!'.",
            correta: true,
            feedback: "Correto! Liderança de cena. A convulsão é autolimitada; apenas requer proteção contra traumas (proteger a cabeça e afastar objetos). O V1 (PCR) ainda exige sua energia física integral."
          },
          {
            id: "C",
            texto: "Mando o segurança usar o DEA também no jovem que está convulsionando.",
            correta: false,
            feedback: "O DEA não trata convulsões. Ele trata fibrilação ventricular do coração."
          },
          {
            id: "D",
            texto: "Jogo terra molhada no rosto dos dois para 'aterrar' a carga residual.",
            correta: false,
            feedback: "Mito estúpido e risco de sufocamento."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Os paramédicos do SAMU chegam com macas. A chuva apertou. Como você consolida a cena para a equipe?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Não digo nada e deixo eles avaliarem tudo do zero, afinal eles são médicos.",
            correta: false,
            feedback: "Informações ocultadas podem levar a decisões incorretas ou atrasadas da equipe médica."
          },
          {
            id: "B",
            texto: "'Ambos sofreram descarga elétrica por raio! Esse estava em PCR, apliquei RCP e 1 choque com o DEA do parque. O segundo está confuso, apresentou convulsão há 2 minutos, agora está em período pós-ictal e deitado.'",
            correta: true,
            feedback: "Correto! Em um evento de múltiplas vítimas com etiologia rara (raios), passar o mecanismo de trauma e a contagem de choques/convulsões salva tempo crítico da equipe de trauma."
          },
          {
            id: "C",
            texto: "'Um morreu e o outro endoidou, tomem conta.'",
            correta: false,
            feedback: "Relato irresponsável que não agrega condutas clínicas."
          },
          {
            id: "D",
            texto: "Desligo o DEA correndo para economizar bateria e fujo da chuva.",
            correta: false,
            feedback: "O DEA não pode ser desligado; o médico precisa do log de eventos do aparelho."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_73",
    titulo: "Pânico no Shopping: Corre-corre e Empalamento",
    tag_visual_cenario: "cenario_publico_fechado",
    descricao_inicial: "Após um falso alarme de incêndio no shopping, uma multidão corre desesperada em direção à saída, pisoteando pessoas. Você aguardou protegido numa loja. Quando a onda passa, você vai ao corredor e encontra duas vítimas caídas: uma jovem com um suporte de guarda-sol de ferro enfiado profundamente na coxa; e um idoso pisoteado no chão, agarrando o peito com extrema dificuldade de respirar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "O corredor está esvaziando, mas algumas pessoas ainda correm em pânico. Qual a primeira coisa que você garante antes de se agachar para o atendimento?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Corro na contramão da multidão gritando para eles voltarem.",
            correta: false,
            feedback: "Você será atropelado. Não se luta contra uma multidão em pânico."
          },
          {
            id: "B",
            texto: "Garanto que o fluxo não vai pisotear a mim nem às vítimas, usando objetos pesados (ex: uma lixeira, banco) como barreira física para isolar nosso quadrante e aciono o 192 (SAMU) pedindo várias viaturas.",
            correta: true,
            feedback: "Correto! Controle da cena em tumultos exige barreira física improvisada para desviar a rota de quem corre cego pelo pânico, garantindo a sua proteção física."
          },
          {
            id: "C",
            texto: "Arrasto as duas vítimas pelos braços ao mesmo tempo para dentro da loja.",
            correta: false,
            feedback: "Arrastar uma vítima com objeto empalado (espetado) pode agravar brutalmente a lesão interna."
          },
          {
            id: "D",
            texto: "Pego meu celular e tiro foto do objeto de ferro para os médicos.",
            correta: false,
            feedback: "Perda de tempo vital enquanto eles podem estar morrendo."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Na triagem visual rápida (START/XABCDE), quem você atende primeiro entre os dois?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "A jovem com o ferro na perna, porque é muito chocante de ver.",
            correta: false,
            feedback: "As aparências enganam. Se não há sangue jorrando (esguichando), o objeto na perna pode aguardar um pouco."
          },
          {
            id: "B",
            texto: "Avalio a poça de sangue: se a jovem não estiver esguichando sangue massivamente, a prioridade absoluta é o idoso pisoteado com extrema dificuldade respiratória (problema em vias aéreas/respiração A e B).",
            correta: true,
            feedback: "Correto! Na ausência de hemorragia exsanguinante (X), a via aérea e respiração (A e B) vêm primeiro. Um tórax esmagado causa asfixia e morte rápida."
          },
          {
            id: "C",
            texto: "Nenhum dos dois. Eu verifico quem tem plano de saúde.",
            correta: false,
            feedback: "Comportamento criminoso de omissão de socorro e discriminação."
          },
          {
            id: "D",
            texto: "O idoso, porque os mais velhos devem sempre ter preferência na triagem médica.",
            correta: false,
            feedback: "A triagem médica é guiada pela severidade fisiológica da lesão (risco de vida), não pela idade."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você atende o idoso pisoteado. Ele tem os lábios roxos (cianose), respiração muito curta e superficial, peito visivelmente deformado e está consciente, mas assustado. Como você o posiciona até a ambulância chegar?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "Obrigo ele a deitar totalmente de costas no chão duro.",
            correta: false,
            feedback: "Deitar um paciente com trauma grave no tórax (costelas fraturadas/esmagadas) piora a mecânica respiratória, causando sensação de asfixia imediata."
          },
          {
            id: "B",
            texto: "Coloco-o sentado com o tronco inclinado para a frente ou semi-sentado (na posição em que ele referir sentir mais facilidade para puxar o ar), mantendo-o o mais calmo possível.",
            correta: true,
            feedback: "Correto! Pacientes conscientes com angústia respiratória devem ser deixados na posição de maior conforto (geralmente sentados ou recostados), pois a gravidade ajuda o diafragma a trabalhar."
          },
          {
            id: "C",
            texto: "Abraço o peito dele por trás e aperto firme para as costelas voltarem ao lugar.",
            correta: false,
            feedback: "Você estaria cravando as costelas quebradas no pulmão e coração, possivelmente matando-o na hora."
          },
          {
            id: "D",
            texto: "Faço respiração boca a boca nele enquanto ele está acordado para ajudar a empurrar o ar.",
            correta: false,
            feedback: "Nunca ventile um paciente consciente que respira espontaneamente, mesmo que com dificuldade."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Enquanto um segurança cuida do idoso sentado, você vai até a jovem. O ferro de 50 cm atravessou a coxa e está alojado. Há um pouco de sangramento na base, mas escuro e contínuo (venoso/capilar). O que você FAZ com o ferro?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Puxo de uma vez só bem rápido para doer menos.",
            correta: false,
            feedback: "O objeto empalado age como uma 'rolha' (tampão) para as veias cortadas. Se você puxar, ela vai sangrar até a morte em minutos."
          },
          {
            id: "B",
            texto: "NUNCA removo o objeto. Uso panos enrolados (como rolinhos) ao redor da base do ferro na perna para fixá-lo (imobilizá-lo), impedindo que ele se movimente e corte mais tecidos internos.",
            correta: true,
            feedback: "Correto! A regra de ouro no APH para objetos empalados é: NUNCA REMOVA. O socorrista deve construir um curativo em anel ou volumoso para travar o objeto na posição exata em que foi encontrado."
          },
          {
            id: "C",
            texto: "Corto o ferro rente à perna com uma serra que peguei na loja de construção do lado.",
            correta: false,
            feedback: "A vibração da serra destruirá a artéria interna da coxa e aquecerá o metal queimando os tecidos."
          },
          {
            id: "D",
            texto: "Faço um torniquete no pescoço dela para ela desmaiar e não sentir dor.",
            correta: false,
            feedback: "Conduta assassina e absurda."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA: Um dos lojistas, tentando ajudar cegamente, tropeça no escuro e chuta acidentalmente a ponta livre do ferro fincado na perna da jovem. O ferro rasga internamente a artéria. Um jato de sangue arterial pulsátil (vermelho vivo e esguichando) começa a inundar o chão. Como você escala o tratamento imediatamente?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "Agora eu puxo o ferro fora porque ele já piorou tudo mesmo e faço pressão no buraco.",
            correta: false,
            feedback: "Remover só agravaria ainda mais a lesão vascular maciça."
          },
          {
            id: "B",
            texto: "Aplico um torniquete comercial ou improvisado na raiz da coxa (o mais alto possível, ACIMA do objeto empalado) e aperto a haste até o jato de sangue parar totalmente.",
            correta: true,
            feedback: "Correto! A hemorragia se tornou exsanguinante e não é possível comprimir direto sobre o objeto de metal. A solução é ocluir a artéria inteira usando um torniquete apertado entre o ferimento e a virilha."
          },
          {
            id: "C",
            texto: "Elevação da perna para o sangue voltar para o corpo.",
            correta: false,
            feedback: "Mover a perna vai movimentar o ferro e destruir ainda mais o tecido muscular e os nervos, sem parar o sangramento massivo."
          },
          {
            id: "D",
            texto: "Dou um lenço para ela limpar o sangue e vou brigar com o lojista.",
            correta: false,
            feedback: "Enquanto você briga, o paciente sangra até o choque irreversível em 2 minutos."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O torniquete foi um sucesso. A jovem está muito pálida e suando frio (choque inicial), mas segura. REVIRAVOLTA 2: O segurança chama você. O idoso pisoteado (que estava sentado) perdeu a consciência, caiu pro lado no chão e subitamente vomitou muito sangue e comida. O que você faz com o idoso?",
        tag_visual_detalhe: "estado_vomito_ativo",
        opcoes: [
          {
            id: "A",
            texto: "Viro ele de costas (barriga para cima) e empurro a barriga para espremer o resto do vômito.",
            correta: false,
            feedback: "Se ele ficar de costas, vai aspirar o sangue (irá para os pulmões) causando afogamento nos próprios fluidos."
          },
          {
            id: "B",
            texto: "Ajoelho-me ao lado dele e, mantendo o controle da cabeça dele, giro-o totalmente de lado (Posição Lateral de Segurança) para que a gravidade drene o sangue e vômito para fora da boca, desobstruindo a via aérea.",
            correta: true,
            feedback: "Correto! A gestão das vias aéreas (Letra A) é primária. Uma vítima inconsciente vomitando precisa estar de lado (PLS) ou todo o líquido fechará a passagem de ar para os pulmões."
          },
          {
            id: "C",
            texto: "Mando o segurança colocar os dedos dentro da garganta dele para tirar a sujeira.",
            correta: false,
            feedback: "Dedos às cegas empurram os fluidos e podem gerar mais lesão."
          },
          {
            id: "D",
            texto: "Inicio a massagem cardíaca em cima do sangue que ele vomitou.",
            correta: false,
            feedback: "Ele ainda não está em PCR (não avaliamos respiração sem vômito na boca). Desobstrua a via virando-o de lado primeiro."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "Após virá-lo de lado, você limpa a boca dele externamente. Você olha para o tórax do idoso por 10 segundos: ele parou completamente de respirar (Sem movimento no peito). Ele entrou em PCR devido à asfixia. E agora?",
        tag_visual_detalhe: "estado_caida_inconsciente",
        opcoes: [
          {
            id: "A",
            texto: "Desisto, pois como o peito dele está quebrado pelos pisões, eu vou machucar ainda mais fazendo RCP.",
            correta: false,
            feedback: "Não se preocupa com costelas quebradas quando o paciente está morto por PCR. A chance de vida (RCP) se sobrepõe ao dano anatômico do tórax."
          },
          {
            id: "B",
            texto: "Volto ele para a posição de barriga para cima (decúbito dorsal) e inicio compressões torácicas contínuas fortes e rápidas no centro do peito, a despeito das prováveis fraturas de costela.",
            correta: true,
            feedback: "Correto! A PCR secundária a trauma/asfixia requer massagem cardíaca imediata e potente. Você sentirá estalos (crepitações das costelas), mas deve continuar comprimindo, pois é a única forma mecânica de circular oxigênio."
          },
          {
            id: "C",
            texto: "Aperto a barriga em vez do peito para não machucar as costelas fraturadas.",
            correta: false,
            feedback: "Compressão na barriga não faz o coração bombear sangue e apenas estourará órgãos como o fígado ou estômago."
          },
          {
            id: "D",
            texto: "Deixo ele na Posição Lateral e tento massagear as costas.",
            correta: false,
            feedback: "RCP em decúbito lateral ou dorsal não atinge o coração com eficiência e falhará miseravelmente."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Você aplicou 4 minutos de RCP ininterrupta. As macas do SAMU chegam com equipes duplas de paramédicos pelo corredor. Como encerrar sua participação no incidente e garantir a eficácia da equipe avançada?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Vou cuidar da jovem, pois eles vieram apenas para o idoso que está mais grave.",
            correta: false,
            feedback: "Você solicitou Múltiplas Viaturas e precisa orientar a equipe onde estão todas as vítimas espalhadas e o que foi feito em cada uma."
          },
          {
            id: "B",
            texto: "Continuo comprimindo o idoso até o paramédico pedir para trocar. Relato rápido em voz alta: 'Idoso pisoteado evoluiu para PCR há 4 minutos. Mulher está a 10 metros com ferro empalado na perna com sangramento massivo contido por torniquete'.",
            correta: true,
            feedback: "Correto! A transição assertiva de cuidados. Você não interrompe a RCP precocemente e orienta a equipe completa sobre onde estão os focos críticos (PCR e Empalamento + Torniquete), permitindo que eles se dividam inteligentemente."
          },
          {
            id: "C",
            texto: "Interrompo a RCP, afinal 'chegou médico', e vou sentar.",
            correta: false,
            feedback: "Se você parar as compressões antes de eles montarem o equipamento ou tocarem o paciente, a pressão de perfusão cai a zero e anula todo o seu esforço prévio."
          },
          {
            id: "D",
            texto: "Tiro fotos das macas chegando e posto nos stories do Instagram.",
            correta: false,
            feedback: "Ética e foco. Seu dever de transição de informação é a última etapa crítica de sobrevivência no APH."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_74",
    titulo: "Caos na Rodovia: Carro Contra Ponto de Ônibus",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você é frentista de um posto na beira da rodovia e escuta uma forte freada. Um carro desgovernado invadiu o ponto de ônibus lotado e atingiu um poste. O motor do carro fumaça. Há pedaços da carenagem pelo chão. Você pega o kit de primeiros socorros do posto e corre até lá. São 3 vítimas diretas envolvidas.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A cena está dominada por destroços e as pessoas começam a se aglomerar em volta. Qual é o primeiro princípio de controle de Múltiplas Vítimas que você adota na rua?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Vou em silêncio atender um por um para não causar histeria.",
            correta: false,
            feedback: "Em acidentes viários as pessoas desorganizadas podem invadir a pista e gerar um engavetamento grave."
          },
          {
            id: "B",
            texto: "Sinalizo a rodovia com cones do posto/triângulos, afasto a multidão dos destroços com voz de comando firme e grito pedindo para 3 pessoas específicas ligarem (Bombeiros 193, SAMU 192 e Polícia Militar Rodoviária), avisando de múltiplas vítimas presas.",
            correta: true,
            feedback: "Correto! Gerenciamento de crise: Sinalização protege a cena; direcionar ligações (apontando dedos para pessoas) evita o efeito espectador ('alguém vai ligar e ninguém liga') e aciona os recursos compatíveis com o desastre."
          },
          {
            id: "C",
            texto: "Jogo areia no motor fumacento e ignoro os feridos por hora.",
            correta: false,
            feedback: "Prevenção de incêndio é boa, mas você deve sinalizar a pista para não morrer atropelado e avaliar logo se há necessidade de extração ou controle hemorrágico massivo."
          },
          {
            id: "D",
            texto: "Corro desesperado para fora do local porque pode ter terrorista escondido.",
            correta: false,
            feedback: "Reação paranoica. Acidentes viários exigem foco no controle tráfego/vítimas."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "A cena está sinalizada. Você se aproxima para triagem rápida e encontra 3 vítimas: O motorista do carro (dentro, trancado, tendo uma forte convulsão no banco), uma mulher grávida no chão (acordada, pálida) e um homem (cuja perna foi parcialmente amputada pelo para-choque e jorra sangue pulsátil). Em quem você põe a mão PRIMEIRO?",
        tag_visual_detalhe: "estado_hemorragia_ativa",
        opcoes: [
          {
            id: "A",
            texto: "O motorista, pois a convulsão pode sufocá-lo no carro.",
            correta: false,
            feedback: "Uma convulsão (via aérea/neurológica) no trauma é grave, mas o sangue jorrando do outro mata em volume (choque exsanguinante) muito mais rápido que o sufocamento inicial da crise."
          },
          {
            id: "B",
            texto: "O homem com a perna amputada jorrando sangue pulsátil.",
            correta: true,
            feedback: "Correto! O protocolo XABCDE coloca hemorragias exsanguinantes externas graves (Letra X) como a prioridade número 1 de trauma severo civil ou militar. Amputações com sangramento ativo arterial drenam todo o sangue do corpo em menos de 2 a 3 minutos."
          },
          {
            id: "C",
            texto: "A mulher grávida, porque salvar gestantes salva duas vidas.",
            correta: false,
            feedback: "No APH frio e técnico, prioriza-se quem está morrendo mais rápido e possui uma lesão diretamente tratável (sangramento massivo). A grávida, se não tem sangramento visível forte, é a segunda/terceira prioridade."
          },
          {
            id: "D",
            texto: "Trato os três ao mesmo tempo gritando com todos.",
            correta: false,
            feedback: "Falta de foco causa ineficiência letal em quem está sangrando ativamente."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "Você vai até o homem com amputação na perna. O que fazer para estancar aquele jato colossal de sangue?",
        tag_visual_detalhe: "acao_torniquete",
        opcoes: [
          {
            id: "A",
            texto: "Mando ele elevar a perna machucada e aperto com dois dedos onde está saindo o sangue.",
            correta: false,
            feedback: "Amputação parcial tem músculos e vasos destruídos, compressão com os dedos é inútil. Requer pressão circunferencial extrema."
          },
          {
            id: "B",
            texto: "Passo um torniquete comercial ou improviso uma tira larga (ex: cinto, camisa e um pedaço de pau grosso), coloco 5 a 7cm acima da amputação e dou voltas na haste até que o jato de sangue estanque completamente, travando a haste ali.",
            correta: true,
            feedback: "Correto! Amputações traumáticas com sangramento massivo são indicações clássicas e imediatas do uso de Torniquete (Protocolo X). Sem isso, ele morrerá antes da ambulância passar da primeira curva."
          },
          {
            id: "C",
            texto: "Junto o pedaço de perna solto e tento costurar rapidamente com linha de náilon e agulha.",
            correta: false,
            feedback: "Costurar ou grampear na rua com material sujo é impossível e não para o sangramento arterial. Torniquete é mandatório."
          },
          {
            id: "D",
            texto: "Coloco terra em cima do toco da perna para forçar a coagulação.",
            correta: false,
            feedback: "Prática infecciosa letal (gangrena gasosa, tétano)."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Sangramento estancado (X resolvido). Você corre para a mulher grávida no chão (ela caiu com o impacto). Ela está consciente, muito pálida, com respiração ofegante, sem fraturas visíveis (sintomas de Choque). Como deve posicioná-la para aguardar o SAMU?",
        tag_visual_detalhe: "acao_posicao_lateral",
        opcoes: [
          {
            id: "A",
            texto: "Deito ela de barriga para cima e levanto as duas pernas (Trendelenburg).",
            correta: false,
            feedback: "Em gestantes (último trimestre), se ela ficar de barriga para cima, o peso do útero esmaga a Veia Cava Inferior contra a coluna, bloqueando todo o retorno do sangue para o coração e agravando o choque."
          },
          {
            id: "B",
            texto: "Auxilio-a a se deitar virada sobre o LADO ESQUERDO do corpo (decúbito lateral esquerdo), mantendo-a aquecida e calma.",
            correta: true,
            feedback: "Correto! Posição salvadora para gestantes em choque ou passando mal: o decúbito lateral ESQUERDO tira o peso do bebê de cima das veias vitais (veia cava) no lado direito, restaurando o fluxo de sangue no corpo da mãe e no bebê."
          },
          {
            id: "C",
            texto: "Sentada abraçando os joelhos.",
            correta: false,
            feedback: "Isso comprime ainda mais o abdômen e piora a angústia respiratória."
          },
          {
            id: "D",
            texto: "Coloco-a de bruços (barriga para baixo) para o útero encostar no chão gelado e diminuir a febre do choque.",
            correta: false,
            feedback: "De bruços esmaga o feto diretamente."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA: O motorista do carro parou de convulsionar. Subitamente, labaredas altas sobem do motor fumacento e o fogo começa a invadir o para-brisa. A porta do motorista está destrancada, e ele está desacordado e mole (relaxado) no banco. Qual a conduta urgente?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Corro no posto para buscar um extintor e tento apagar o fogo sozinho antes de tocar no paciente.",
            correta: false,
            feedback: "Enquanto você vai e volta com um extintor, as chamas dentro do habitáculo sufocarão e queimarão vivo o motorista. A extração humana ganha da extinção material se há viabilidade."
          },
          {
            id: "B",
            texto: "Abro a porta, solto o cinto de segurança, posiciono os braços dele e utilizo a técnica de Extração Rápida (Manobra de Rautek), arrastando-o para uma área segura bem longe do carro em chamas.",
            correta: true,
            feedback: "Correto! O risco de incêndio iminente comanda a quebra da imobilização espinhal. Realiza-se a extração rápida com a Chave de Rautek para tirá-lo do veículo antes que ele queime, arrastando-o para segurança e assumindo o dano mínimo na cervical para preservar a vida."
          },
          {
            id: "C",
            texto: "Sento no banco do passageiro e tento acordá-lo jogando água no rosto.",
            correta: false,
            feedback: "Você vai se prender numa armadilha de fogo fatal ao entrar no carro em vez de extraí-lo por fora."
          },
          {
            id: "D",
            texto: "Ligo o limpador de para-brisa e os esguichos de água do carro na esperança de apagar o fogo.",
            correta: false,
            feedback: "O esguicho não contém fogo de motor com combustível derramado."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "Você retirou o motorista com sucesso usando Rautek e o arrastou por 20 metros. Ele está no chão. Você nota que ele não respira mais (após a convulsão pesada, ele sofreu Parada Respiratória/Cardíaca). Você precisa de ajuda física para a RCP. O que você delega aos transeuntes nesse caos?",
        tag_visual_detalhe: "acao_rcp_adulto",
        opcoes: [
          {
            id: "A",
            texto: "Peço a dois passantes para filmarem minha ação com celular em caso de processo legal.",
            correta: false,
            feedback: "Você desperdiça braços úteis para vaidade ou paranóia."
          },
          {
            id: "B",
            texto: "Grito para um passante correr no posto de combustível ou loja próxima e me trazer o Desfibrilador Externo Automático (DEA), e peço a outro que mantenha a grávida calma e o ferido da perna parado. Eu inicio a massagem cardíaca no motorista IMEDIATAMENTE.",
            correta: true,
            feedback: "Correto! Gerenciamento multi-focal. Delegue a busca pelo DEA ativamente (não diga apenas 'alguém traga', aponte e mande correr) e garanta a vigilância dos demais feridos. Aja imediatamente na RCP."
          },
          {
            id: "C",
            texto: "Mando o pessoal ir combater as chamas do carro com garrafas d'água.",
            correta: false,
            feedback: "Risco aos civis e desperdício de tempo. Deixe o carro queimar, vidas já foram salvas daquele ponto."
          },
          {
            id: "D",
            texto: "Mando um passante amarrar a perna do amputado ainda mais forte, por via das dúvidas.",
            correta: false,
            feedback: "O torniquete já conteve o sangue. Manipular excessivamente pode arrebentá-lo."
          }
        ]
      },
      {
        id: "etapa_7",
        pergunta: "O DEA chegou, você colou as pás, e ele aconselhou CHOQUE. O choque foi desferido. REVIRAVOLTA 2: Imediatamente após o choque, o homem amputado da perna (que estava confuso pelo choque hemorrágico) começa a tentar arrancar o seu torniquete improvisado com agressividade. O que fazer se você está massageando o motorista sozinho agora?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Deixa ele tirar o torniquete. O corpo sabe o que é melhor e se está doendo demais é porque passou da hora.",
            correta: false,
            feedback: "Se ele tirar, ele morrerá em menos de 1 minuto."
          },
          {
            id: "B",
            texto: "Levanto, vou até ele e dou um soco para ele desmaiar, garantindo o torniquete no lugar.",
            correta: false,
            feedback: "Agressão, além de interromper a RCP do motorista."
          },
          {
            id: "C",
            texto: "Eu grito para as pessoas que estão em volta: 'Pulem em cima do braço dele e segurem forte! Se ele arrancar aquela faixa, ele vai sangrar até a morte agora na frente de vocês!'.",
            correta: true,
            feedback: "Correto! Uso imperativo de comando (Bystander Intervention). O peso das testemunhas contendo o membro evitará que o paciente delirante ou com muita dor tire o dispositivo vital, enquanto você NÃO PARALISA o seu esforço no coração parado do motorista."
          },
          {
            id: "D",
            texto: "Paro a RCP no motorista e vou segurar o braço dele.",
            correta: false,
            feedback: "Isso condenaria o motorista à morte certa por falha de perfusão na janela de ouro pós-choque."
          }
        ]
      },
      {
        id: "etapa_8",
        pergunta: "Você retoma a RCP no motorista por mais 3 minutos. Ouves-se múltiplas sirenes. Chegam ao local uma viatura da Polícia Rodoviária, dois caminhões de Bombeiros (ABTR) e três ambulâncias do SAMU (Suporte Avançado e Básico). Como orquestrar a passagem final de um evento desse porte?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Grito 'ESTÁ TUDO DOMINADO, VÃO EMBORA!', pois eu resolvi tudo.",
            correta: false,
            feedback: "Falso. As vítimas estão em estado limítrofe entre vida, morte e choque."
          },
          {
            id: "B",
            texto: "Sinalizo para os médicos correrem até mim. Digo em voz alta: 'Temos 3 Vítimas Críticas (Vermelhas)! Eu tirei o motorista em chamas, ele está em PCR sob RCP pós-choque do DEA! O homem no ponto teve amputação de perna, o torniquete está segurando o sangue, mas ele está agitado! A gestante está em choque pálida, já no decúbito esquerdo!'",
            correta: true,
            feedback: "Correto! A passagem perfeita METHANE / IMV. Você definiu as prioridades e localização, informando rapidamente o histórico das intervenções mais extremas que aplicou: Rautek e Choque DEA, Torniquete em amputado, e Posição Lateral para Grávida."
          },
          {
            id: "C",
            texto: "Exijo que todos aplaudam antes de eu entregar os pacientes, para valorizar o frentista.",
            correta: false,
            feedback: "Comportamento narcisista incompatível com o APH."
          },
          {
            id: "D",
            texto: "Eu cobro o extintor do posto dos Policiais Rodoviários, porque o carro queimou inteiro.",
            correta: false,
            feedback: "Questões patrimoniais não importam durante a transição clínica das vidas."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_75",
    titulo: "Nuvem Tóxica no Clube: Mistura Letal",
    tag_visual_cenario: "cenario_incidente_quimico",
    descricao_inicial: "Você está na área externa de um clube quando ouve gritos vindo da piscina coberta (ambiente fechado). Um funcionário misturou produtos químicos incompatíveis (cloro e ácido) na casa de máquinas, gerando uma espessa nuvem de gás tóxico amarelo-esverdeado que invadiu a piscina. Pessoas correm tossindo violentamente. O funcionário está caído na porta da casa de máquinas, e um banhista desmaiou na borda da piscina.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A nuvem tóxica está se expandindo lentamente pelo recinto fechado. Qual a sua PRIMEIRA ação ao chegar à porta do local?",
        tag_visual_detalhe: "risco_quimico_inalacao",
        opcoes: [
          {
            id: "A",
            texto: "Prendo a respiração, corro até o banhista desmaiado, puxo-o para fora e depois volto para buscar o funcionário.",
            correta: false,
            feedback: "Erro fatal. Nunca entre em uma atmosfera tóxica sem Equipamento de Proteção Respiratória Autônoma (EPR). Prender a respiração falha rapidamente sob esforço físico, e você se tornará a terceira vítima."
          },
          {
            id: "B",
            texto: "Não entro no ambiente. Grito do lado de fora: 'Saiam todos agora e venham para o pátio aberto!'. Aciono 193 (Bombeiros) informando vazamento químico (HazMat) com vítimas presas.",
            correta: true,
            feedback: "Correto! A segurança do socorrista é absoluta. Em incidentes com produtos perigosos (HazMat), a contenção, o acionamento especializado e a retirada apenas de quem consegue andar (vítimas verdes) pela própria voz é a única conduta segura."
          },
          {
            id: "C",
            texto: "Pego um extintor de pó químico e descarrego na nuvem para neutralizar o gás.",
            correta: false,
            feedback: "Pó químico não neutraliza gases tóxicos e piorará a visibilidade e a respiração de quem ainda tenta sair."
          },
          {
            id: "D",
            texto: "Tampo o nariz com a camisa molhada e entro engatinhando, pois o gás cloro sobe.",
            correta: false,
            feedback: "Gás cloro é mais pesado que o ar e se concentra no chão. Camisa molhada não filtra vapores químicos letais."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Dez pessoas saíram tossindo e estão no pátio aberto. O resgate foi acionado para os que ficaram. Das vítimas no pátio, uma mulher grávida (V1) tosse sangue e tem chiado forte no peito, e um jovem (V2) está com os olhos vermelhos e a pele ardendo muito devido aos respingos da água contaminada. Quem você atende primeiro e como?",
        tag_visual_detalhe: "estado_angustia_respiratoria",
        opcoes: [
          {
            id: "A",
            texto: "V2, lavando os olhos dele imediatamente para evitar cegueira.",
            correta: false,
            feedback: "A perda de visão é grave, mas a asfixia química (Letra A/B) mata em minutos. A mulher grávida tossindo sangue está em edema pulmonar fulminante."
          },
          {
            id: "B",
            texto: "V1 (a grávida), pois o comprometimento respiratório grave (tossindo sangue/edema) é a ameaça imediata à vida. Mantenho-a sentada ou semissentada para facilitar a respiração e delego a lavagem dos olhos de V2 para terceiros.",
            correta: true,
            feedback: "Correto! Pelo protocolo XABCDE/START, problemas respiratórios críticos são prioridade vermelha. A posição sentada usa a gravidade para diminuir o esforço respiratório."
          },
          {
            id: "C",
            texto: "Deito V1 no chão de costas e elevo as pernas dela para tratar o choque.",
            correta: false,
            feedback: "Deitar uma vítima com edema pulmonar (fluido nos pulmões) causa afogamento imediato em suas próprias secreções, além de a posição supina piorar a perfusão da gestante."
          },
          {
            id: "D",
            texto: "Nenhum dos dois. Mando todos tomarem leite para cortar o efeito do veneno.",
            correta: false,
            feedback: "Mito perigoso. Leite não 'corta' veneno inalado e pode causar vômito e aspiração pulmonar."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "REVIRAVOLTA: Enquanto você ampara a gestante sentada, você percebe que a sua própria garganta começa a arder, seus olhos lacrimejam intensamente e você tem ânsia de vômito, mesmo estando no pátio aberto. Qual é o erro invisível que está ocorrendo?",
        tag_visual_detalhe: "risco_contaminacao_secundaria",
        opcoes: [
          {
            id: "A",
            texto: "O vento mudou de direção e trouxe toda a nuvem do clube para o pátio.",
            correta: false,
            feedback: "Pode ser uma hipótese, mas em contato próximo com as vítimas há uma causa mecânica mais direta e letal."
          },
          {
            id: "B",
            texto: "Ataque de pânico de sua parte, um sintoma psicológico comum em desastres.",
            correta: false,
            feedback: "Os sintomas físicos descritos são de contaminação cruzada, não apenas psicológicos."
          },
          {
            id: "C",
            texto: "Você está sofrendo contaminação secundária (Off-Gassing). As roupas das vítimas estão encharcadas de produtos químicos e continuam emitindo vapores tóxicos diretamente no seu rosto.",
            correta: true,
            feedback: "Correto! O 'Off-Gassing' (emissão de gases residuais) das roupas molhadas das vítimas é uma das maiores causas de morte ou intoxicação de socorristas. A descontaminação básica é vital."
          },
          {
            id: "D",
            texto: "O cloro reage com o oxigênio do pátio criando radiação.",
            correta: false,
            feedback: "Incorreto química e fisicamente."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "Percebendo a contaminação secundária pelas roupas, como você gerencia IMEDIATAMENTE a multidão afetada no pátio para salvar a eles e a você mesmo antes da chegada das ambulâncias?",
        tag_visual_detalhe: "acao_descontaminacao",
        opcoes: [
          {
            id: "A",
            texto: "Mando todos tirarem as roupas contaminadas imediatamente (descontaminação seca) e aciono os chuveiros externos do pátio para lavar a pele de todos com água em abundância (descontaminação úmida).",
            correta: true,
            feedback: "Correto! Retirar as roupas elimina 80% da contaminação em incidentes químicos. A lavagem com água abundante dilui o produto da pele, parando a reação e protegendo o ambiente."
          },
          {
            id: "B",
            texto: "Coloco cobertores sobre todos para que não sintam frio, prendendo o gás.",
            correta: false,
            feedback: "Cobrir roupas contaminadas cria uma câmara de gás ao redor da vítima, acelerando a intoxicação cutânea e inalatória."
          },
          {
            id: "C",
            texto: "Fujo do local, pois não há equipamento de proteção para mim.",
            correta: false,
            feedback: "Afastar-se momentaneamente para ordenar a remoção das roupas e ligar a água é correto, mas abandonar o local totalmente caracteriza omissão de um gerenciamento que você pode fazer à distância."
          },
          {
            id: "D",
            texto: "Esfrego a pele das vítimas com toalhas secas para tirar a água do clube.",
            correta: false,
            feedback: "Esfregar empurra o produto químico para dentro dos poros da pele, piorando a absorção."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA 2: Após o banho de emergência, a gestante (V1) entra em colapso. Ela perde a consciência e para de respirar (PCR). Você precisa iniciar a RCP. Qual a adaptação OBRIGATÓRIA no Suporte Básico de Vida para vítimas de intoxicação química em Parada Cardíaca?",
        tag_visual_detalhe: "acao_rcp_adaptada",
        opcoes: [
          {
            id: "A",
            texto: "Realizo as compressões torácicas, mas não faço respiração boca a boca sob nenhuma hipótese para não inalar o veneno exalado pelos pulmões dela.",
            correta: true,
            feedback: "Correto! Na PCR por causas tóxicas/químicas, a respiração boca a boca é estritamente proibida para socorristas não equipados com dispositivos de barreira com filtro (Pocket Mask com válvula unidirecional ou Ambu). Você deve fazer apenas compressões contínuas (Hands-Only CPR)."
          },
          {
            id: "B",
            texto: "Faço respiração boca a boca profundamente, pois o que ela mais precisa é de oxigênio limpo para combater o cloro.",
            correta: false,
            feedback: "Você inalará os vapores tóxicos retidos nos pulmões e estômago dela, podendo sofrer uma parada respiratória também."
          },
          {
            id: "C",
            texto: "Não faço RCP. Vítimas de envenenamento químico não respondem a massagem cardíaca.",
            correta: false,
            feedback: "Falso. As compressões torácicas ainda circulam o oxigênio residual no sangue e mantêm o cérebro viável até o Suporte Avançado chegar."
          },
          {
            id: "D",
            texto: "Aperto a barriga dela para expulsar o ar tóxico antes de massagear o coração.",
            correta: false,
            feedback: "Isso forçará o vômito, causando aspiração gástrica fatal de ácidos."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "A unidade de Produtos Perigosos do Corpo de Bombeiros e o SAMU chegam. A área é isolada. Como você transmite o cenário para o Comandante das Operações?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "'Há uma mulher morta aqui e vários tossindo. Não sei o que aconteceu lá dentro.'",
            correta: false,
            feedback: "Relato muito pobre. Informações críticas sobre o tipo de evento foram omitidas."
          },
          {
            id: "B",
            texto: "'Incidente HazMat! Mistura de cloro e ácido na piscina. 2 vítimas caídas lá dentro (Zona Quente). Aqui na Zona Fria temos 10 pessoas já descontaminadas com água e sem roupas contaminadas. A gestante está em PCR há 3 minutos sob compressões. Há vítimas com lesão ocular.'",
            correta: true,
            feedback: "Correto! Relato situacional impecável (METHANE adaptado). Você definiu a natureza do produto, o local exato dos presos, o que já foi feito (descontaminação) e a prioridade clínica máxima do momento."
          },
          {
            id: "C",
            texto: "Eu exijo entrar com os bombeiros porque sei onde o funcionário caiu.",
            correta: false,
            feedback: "Leigos nunca entram em Zonas Quentes (HazMat), independentemente do conhecimento espacial."
          },
          {
            id: "D",
            texto: "Mando o SAMU entrar na piscina imediatamente para pegar o funcionário.",
            correta: false,
            feedback: "Médicos do SAMU não têm EPR e roupa de proteção nível A/B. A extração na Zona Quente é exclusiva dos Bombeiros."
          }
        ]
      }
    ]
  },
  {
   "id": "cenario_76",
   "titulo": "Desabamento de Arquibancada: Triagem no Caos",
   "tag_visual_cenario": "cenario_publico_aberto",
   "descricao_inicial": "Durante uma competição escolar em um pequeno ginásio, um dos lances da arquibancada metálica cede. Cerca de 15 pessoas caem emaranhadas em tubos de ferro. Há muita poeira, gritaria e pânico. Você estava na quadra e é o primeiro a reagir. A estrutura restante parou de ranger e parece ter estabilizado.",
   "etapas": [
     {
       "id": "etapa_1",
       "pergunta": "Para iniciar a triagem START (Simple Triage and Rapid Treatment) em um cenário de escombros, qual é a primeira ordem que você dá em voz alta?",
       "tag_visual_detalhe": "acao_triagem_start",
       "opcoes": [
         {
           "id": "A",
           "texto": "'Todos fiquem exatamente onde estão, não se mexam!'",
           "correta": false,
           "feedback": "Manter pessoas ilesas ou levemente feridas na área de escombros atrapalha o acesso aos feridos graves e as mantém em risco."
         },
         {
           "id": "B",
           "texto": "'Atenção! Quem consegue andar, levante-se e venha até mim no centro da quadra!'",
           "correta": true,
           "feedback": "Correto! O passo 1 da triagem START é pedir para os que andam (vítimas VERDES) saírem da cena. Isso limpa a área de trabalho, tira pessoas do risco e revela imediatamente quem são as vítimas mais graves que não conseguem se mover."
         },
         {
           "id": "C",
           "texto": "'Quem estiver sangrando levante a mão!'",
           "correta": false,
           "feedback": "Com a confusão, poeira e adrenalina, muitos não sabem se estão sangrando ou não ouvirão. A triagem motora é mais eficaz."
         },
         {
           "id": "D",
           "texto": "Começo a puxar os feridos pelos pés para tirar todos do bolo.",
           "correta": false,
           "feedback": "Mover pacientes de trauma sem avaliação inicial pode causar lesões medulares irreversíveis ou agravar hemorragias."
         }
       ]
     },
     {
       "id": "etapa_2",
       "pergunta": "Nove pessoas saíram andando (Verdes). Sobraram três na estrutura. V1: Adolescente com osso da coxa exposto (fratura de fêmur) jorrando sangue pulsátil vermelho vivo. V2: Homem adulto deitado de barriga para cima, olhos fechados, respiração ruidosa (roncando). V3: Criança chorando muito com o braço em um ângulo estranho. Qual a sequência exata de atendimento?",
       "tag_visual_detalhe": "estado_hemorragia_ativa",
       "opcoes": [
         {
           "id": "A",
           "texto": "V3 (criança chorando), V2 (homem roncando), V1 (jovem sangrando).",
           "correta": false,
           "feedback": "A criança que chora está respirando e o cérebro está oxigenado. Fratura de braço não é ameaça imediata à vida."
         },
         {
           "id": "B",
           "texto": "V2 (homem roncando), V1 (jovem sangrando), V3 (criança chorando).",
           "correta": false,
           "feedback": "A respiração está comprometida, mas uma hemorragia exsanguinante (sangue jorrando) mata ainda mais rápido em volume de sangue perdido do que a falta momentânea de oxigênio pelo ronco."
         },
         {
           "id": "C",
           "texto": "V1 (Torniquete Imediato para conter a hemorragia massiva exsanguinante), depois V2 (abertura de via aérea pois o ronco indica obstrução), e delego o cuidado da V3 (criança, vítima amarela) para um dos 'verdes' que saíram andando.",
           "correta": true,
           "feedback": "Correto! Protocolo XABCDE. O 'X' (hemorragia exsanguinante em V1) tem prioridade zero, estanca em segundos. Em seguida, 'A' (via aérea do V2) virando a cabeça ou elevando o queixo para o ronco parar. Vítimas ruidosas estão vivas, mas precisam de permeabilidade."
         },
         {
           "id": "D",
           "texto": "Trato os três ao mesmo tempo gritando por ajuda.",
           "correta": false,
           "feedback": "Falta de metodologia resulta em morte. Um socorrista trata uma ameaça de cada vez, sempre do X para o E."
         }
       ]
     },
     {
       "id": "etapa_3",
       "pergunta": "Você aplica o torniquete na perna do adolescente (V1). O sangue estanca instantaneamente. Você pula para o homem adulto (V2). Ele está de barriga para cima, inconsciente, roncando muito alto devido à queda da língua contra a garganta. Você tem suspeita de trauma na coluna cervical devido à queda. O que você faz para desobstruir a respiração dele?",
       "tag_visual_detalhe": "acao_manobra_mandibular",
       "opcoes": [
         {
           "id": "A",
           "texto": "Coloco um travesseiro debaixo da cabeça dele para ele ficar mais confortável.",
           "correta": false,
           "feedback": "Isso flexiona o pescoço, fechando ainda mais a via aérea e agravando lesões cervicais."
         },
         {
           "id": "B",
           "texto": "Ajoelho atrás da cabeça dele, estabilizo a coluna cervical com as mãos e uso a manobra de Tração da Mandíbula (Jaw-Thrust): puxo apenas a mandíbula (queixo) dele para cima sem mover o pescoço.",
           "correta": true,
           "feedback": "Correto! No paciente de trauma inconsciente, não se pode inclinar a cabeça para trás (risco medular). A manobra de Jaw-Thrust desloca a língua e abre a via aérea mantendo o pescoço em linha reta."
         },
         {
           "id": "C",
           "texto": "Viro o pescoço dele de lado bruscamente.",
           "correta": false,
           "feedback": "Movimento brusco em pescoço traumatizado pode cortar a medula e deixá-lo tetraplégico ou matá-lo por parada respiratória alta."
         },
         {
           "id": "D",
           "texto": "Puxo a língua dele para fora com os meus dedos.",
           "correta": false,
           "feedback": "Prática perigosa. Se ele convulsionar ou ter espasmo, pode amputar seus dedos. Além de ser ineficiente e escorregadio."
         }
       ]
     },
     {
       "id": "etapa_4",
       "pergunta": "A respiração de V2 fica limpa e silenciosa após você tracionar a mandíbula. REVIRAVOLTA: Subitamente, V2 abre os olhos de forma agressiva (delírio/agitação do Traumatismo Craniano), empurra você com violência e tenta se levantar cambaleando em cima dos escombros dizendo que 'precisa achar a chave do carro'. Como gerenciar essa ameaça?",
       "tag_visual_detalhe": "risco_interferencia_terceiros",
       "opcoes": [
         {
           "id": "A",
           "texto": "Tento derrubá-lo no chão com uma chave de braço para forçá-lo a manter a coluna reta.",
           "correta": false,
           "feedback": "Entrar em combate físico com uma vítima de TCE em agitação extrema geralmente resulta em lesões graves para ambos."
         },
         {
           "id": "B",
           "texto": "Deixo ele ir embora, já que ele acordou e está andando, passou a ser prioridade verde.",
           "correta": false,
           "feedback": "Ele tem um Traumatismo Craniano severo, não tem juízo crítico, e vai desabar em segundos ou cair dos escombros."
         },
         {
           "id": "C",
           "texto": "Não entro em confronto físico direto. Peço ajuda a dois adultos 'verdes', contenho-o verbalmente com voz firme e calma, e o seguramos pelos braços e ombros, forçando-o suavemente a sentar no chão seguro, longe dos ferros.",
           "correta": true,
           "feedback": "Correto! Vítimas com TCE podem apresentar força desproporcional e agitação psicomotora. A contenção deve ser feita em equipe, focando em sentá-lo ou deitá-lo em local seguro por gravidade, evitando lesões secundárias e acalmando-o verbalmente sem agressividade."
         },
         {
           "id": "D",
           "texto": "Dou um tapa no rosto dele para ele 'voltar à realidade'.",
           "correta": false,
           "feedback": "A agressão piora o quadro psiquiátrico/neurológico e é crime."
         }
       ]
     },
     {
       "id": "etapa_5",
       "pergunta": "REVIRAVOLTA 2: V2 está contido e amparado por terceiros. Você varre a cena pela última vez e nota que há uma vítima (V4) completamente presa embaixo de uma viga de metal pesada. O tronco está esmagado. Ele não responde e, após você tentar posicionar a cabeça, percebe que ele não respira. Como o protocolo START orienta um socorrista a agir nesta situação?",
       "tag_visual_detalhe": "estado_caida_inconsciente",
       "opcoes": [
         {
           "id": "A",
           "texto": "Convoco todas as pessoas para levantar a viga de metal e inicio a massagem cardíaca (RCP) imediatamente, pois ele é o caso mais grave da cena.",
           "correta": false,
           "feedback": "Em um evento com várias vítimas (IMV) onde os recursos médicos ainda não chegaram, focar 100% da força em uma vítima em parada por esmagamento fará os pacientes viáveis (como o jovem do torniquete) morrerem."
         },
         {
           "id": "B",
           "texto": "Classifico V4 como prioridade PRETA (Expectante / Sem sinais de respiração). Como os recursos são escassos, não inicio a RCP e retorno minha atenção para monitorar os pacientes Vermelhos viáveis até o resgate chegar.",
           "correta": true,
           "feedback": "Correto! Socorristas leigos não 'declaram óbito' (isso é ato médico), mas no protocolo START, vítimas que não respiram mesmo após a abertura das vias aéreas são marcadas como 'Pretas/Expectantes'. É a decisão mais difícil, mas garante que vidas viáveis não sejam negligenciadas."
         },
         {
           "id": "C",
           "texto": "Faço massagem cardíaca em cima da viga de metal para ver se ele volta a respirar.",
           "correta": false,
           "feedback": "Ação mecanicamente impossível e clinicamente fútil."
         },
         {
           "id": "D",
           "texto": "Tiro o torniquete do adolescente (V1) e tento colocar no V4 para ajudar.",
           "correta": false,
           "feedback": "Isso comprometeria a vida da vítima viável (V1) em troca de um esforço sem eficácia."
         }
       ]
     },
     {
       "id": "etapa_6",
       "pergunta": "Os paramédicos do Corpo de Bombeiros chegam com equipamentos de desencarceramento e macas. Como você relata a triagem efetuada para a equipe médica?",
       "tag_visual_detalhe": "desfecho_chegada_socorro",
       "opcoes": [
         {
           "id": "A",
           "texto": "'Está um caos, só salvem a criança, por favor!'",
           "correta": false,
           "feedback": "O fator emocional, embora compreensível, não ajuda a equipe médica a distribuir recursos e priorizar o atendimento."
         },
         {
           "id": "B",
           "texto": "Relato técnico: 'Evacuei 9 Verdes para a quadra. Temos 2 Vermelhos: um jovem (V1) com torniquete na perna; um homem (V2) contido com agitação (TCE). Uma criança Amarela estável. Há uma vítima classificada como Preta (sem respirar) presa nas ferragens.'",
           "correta": true,
           "feedback": "Correto! Você entregou a cena organizada. Ao informar que há uma 'vítima preta (sem respirar)', você passa o quadro clínico exato para a equipe médica sem cometer o erro de declarar o óbito antecipadamente."
         },
         {
           "id": "C",
           "texto": "Digo para me darem analgésicos para eu aplicar nas vítimas que estão chorando de dor.",
           "correta": false,
           "feedback": "Leigos e primeiros respondentes não prescrevem ou aplicam medicação intravenosa."
         },
         {
           "id": "D",
           "texto": "Declaro o horário exato da morte da vítima V4 para o médico anotar no prontuário.",
           "correta": false,
           "feedback": "Apenas o médico, após avaliação clínica e uso de equipamentos adequados, tem a autoridade para atestar o óbito."
         }
       ]
     }
   ]
 }
  {
    id: "cenario_77",
    titulo: "Rodovia Sob Neblina: Choque de Veículos",
    tag_visual_cenario: "cenario_via_transito",
    descricao_inicial: "Você trafega por uma rodovia sob forte neblina matinal. Logo à frente, ouve um estrondo severo. Um caminhão-tanque freou bruscamente e uma van escolar (tipo micro-ônibus) colidiu na traseira dele. Um carro pequeno tentou desviar e capotou no acostamento. Você encosta seu veículo em local seguro e vai ajudar.",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "A neblina reduz a visibilidade para 10 metros. A pista não está bloqueada totalmente e carros continuam passando em alta velocidade, buzinando. Qual a prioridade número ZERO antes de correr para os veículos batidos?",
        tag_visual_detalhe: "risco_transito_perigo",
        opcoes: [
          {
            id: "A",
            texto: "Correr para a van escolar pois crianças sempre são prioridade vital.",
            correta: false,
            feedback: "Se você entrar na via com neblina e trânsito fluindo, você e as crianças serão esmagados pelo próximo caminhão que vier. O 'Efeito Cascata' (engavetamento) é o maior risco aqui."
          },
          {
            id: "B",
            texto: "Não invadir a via. Caminhar pelo acostamento bem para trás (antes da curva/acidente) para montar uma barreira visual com o triângulo do meu carro, galhos e lanternas piscando, forçando a redução de velocidade dos outros carros, e ligar 191 (Polícia Rodoviária) e 192/193.",
            correta: true,
            feedback: "Correto! Controle de fluxo em acidentes de rodovia sob baixa visibilidade é mandatório. Sem sinalização pesada a montante (antes) da ocorrência, o engavetamento em massa é inevitável. Só depois a cena se torna minimamente segura para socorrer."
          },
          {
            id: "C",
            texto: "Ligar o farol alto do meu carro iluminando o acidente.",
            correta: false,
            feedback: "Farol alto na neblina reflete na água suspensa e cria um 'paredão branco' que cega totalmente os motoristas que se aproximam."
          },
          {
            id: "D",
            texto: "Jogar pedras nos carros que passam para eles diminuírem a velocidade.",
            correta: false,
            feedback: "Ação irresponsável que pode causar acidentes secundários."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Com a via parcialmente sinalizada, você faz o dimensionamento. O motorista do caminhão-tanque (ileso) desceu. Na van escolar, o motorista está preso nas ferragens inconsciente, mas 5 crianças adolescentes saíram pelas janelas, algumas com cortes sangrando no rosto, e estão perambulando atordoadas no meio da via. No carro capotado, há silêncio. Como aplicar controle imediato?",
        tag_visual_detalhe: "acao_triagem_start",
        opcoes: [
          {
            id: "A",
            texto: "Vou avaliar o silêncio do carro capotado primeiro, pois silêncio significa morte.",
            correta: false,
            feedback: "Correto o raciocínio sobre silêncio, mas você deixou 5 adolescentes desorientados no meio da rodovia, sujeitos a atropelamento imediato."
          },
          {
            id: "B",
            texto: "Grito ordens firmes às crianças para saírem do asfalto, instruindo-as a sentarem juntas no barranco seguro, fora da pista (evacuação de Verdes/Amarelos). Delega a guarda delas ao motorista do caminhão que está ileso.",
            correta: true,
            feedback: "Correto! Gestão de MCI. Controlar os pacientes deambulantes confusos previne novas tragédias. Usar recursos disponíveis (o motorista ileso) é fundamental para você ter as mãos livres."
          },
          {
            id: "C",
            texto: "Faço curativos no rosto de cada criança ali mesmo no asfalto.",
            correta: false,
            feedback: "Você se expõe e expõe as vítimas a risco na via. Cortes no rosto não matam rápido."
          },
          {
            id: "D",
            texto: "Começo a puxar o motorista da van pelos braços presos.",
            correta: false,
            feedback: "Ele está preso nas ferragens (encarcerado). Puxá-lo não vai libertá-lo e causará hemorragia interna maciça."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "As crianças estão no barranco. Você vai até o carro capotado no acostamento. Há apenas uma mulher de cabeça para baixo, presa pelo cinto de segurança. Ela está acordada, mas com sangramento moderado no nariz e queixa-se de forte dor na barriga (sinal de cinto de segurança, possível hemorragia interna). O que você faz enquanto o resgate não chega?",
        tag_visual_detalhe: "estado_lesao_pele",
        opcoes: [
          {
            id: "A",
            texto: "Corto o cinto de segurança para ela cair e eu a puxo pela janela para confortá-la.",
            correta: false,
            feedback: "Se você cortar o cinto sem apará-la corretamente, o impacto da cabeça contra o teto do carro quebrará o pescoço dela instantaneamente."
          },
          {
            id: "B",
            texto: "Mantenho-a suspensa pelo cinto (desde que o carro não esteja pegando fogo e o cinto não a asfixie). Peço que fique imóvel, estabilizo a cabeça dela por trás (se acessível) e monitoro seu nível de consciência.",
            correta: true,
            feedback: "Correto! Na ausência de risco iminente (fogo/asfixia), não se realiza extração complexa de vítimas presas (principalmente capotadas). Mover alguém com suspeita de hemorragia abdominal pode agravar o sangramento. Imobilização no local e apoio psicológico são vitais."
          },
          {
            id: "C",
            texto: "Coloco o dedo no nariz dela para estancar o sangramento.",
            correta: false,
            feedback: "Sangramento nasal (epistaxe) em trauma craniofacial forte pode ser indício de fratura de base de crânio. Tampar o nariz aumenta a pressão intracraniana."
          },
          {
            id: "D",
            texto: "Dou água para aliviar a dor na barriga.",
            correta: false,
            feedback: "Absolutamente proibido. Vítima com trauma abdominal fará cirurgia de emergência e broncoaspirará a água se tomar anestesia, além do estômago possivelmente já estar rompido."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "REVIRAVOLTA: O motorista do caminhão-tanque vem correndo desesperado do barranco avisando: 'A válvula traseira rompeu! O caminhão está vazando combustível líquido (gasolina) que está descendo pelo asfalto em direção à van batida!'. A poça está enorme e cheirando forte. Como a sua prioridade muda agora?",
        tag_visual_detalhe: "risco_incendio",
        opcoes: [
          {
            id: "A",
            texto: "Continuo segurando a cabeça da mulher no carro capotado, pois o fogo ainda não começou.",
            correta: false,
            feedback: "Você está ignorando uma ameaça de incêndio/explosão de alta letalidade contra o motorista da van, que está na rota do combustível."
          },
          {
            id: "B",
            texto: "Interrompo meu atendimento atual. Ameaça de fogo (ambiente hostil) exige Manobra de Extração Rápida (Ex: Chave de Rautek) do motorista da van (mesmo preso) se for fisicamente possível, e evacuação total da cena das crianças e todos os presentes para um ponto elevado (aclive) e distante do combustível.",
            correta: true,
            feedback: "Correto! Vida sobre membro/coluna. O risco iminente de explosão em poça de líquido inflamável justifica a quebra da imobilização espinhal. Tenta-se extrair as vítimas na rota de risco e afastar todos para contra o vento e aclive (combustível desce)."
          },
          {
            id: "C",
            texto: "Começo a jogar terra sobre a gasolina para estancar o vazamento do tanque.",
            correta: false,
            feedback: "Terra não conterá milhares de litros de combustível inflamável de um caminhão-tanque avariado."
          },
          {
            id: "D",
            texto: "Ligo a chave do carro capotado para tentar desvirá-lo com o motor.",
            correta: false,
            feedback: "Ligar ignições na presença de vapores inflamáveis gera a faísca para a explosão do ambiente inteiro."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "REVIRAVOLTA 2: Enquanto você tenta destrancar a porta do motorista da van amassada, percebe que um motorista curioso (que parou no acostamento) está caminhando em direção à cena fumando um cigarro para 'ver o que aconteceu'. A gasolina está evaporando na neblina ao redor dele. O que fazer?",
        tag_visual_detalhe: "risco_interferencia_terceiros",
        opcoes: [
          {
            id: "A",
            texto: "Corro até ele e dou um tapa na mão dele para derrubar o cigarro na poça de gasolina e apagar.",
            correta: false,
            feedback: "Derrubar a brasa viva sobre o combustível líquido iniciará o incêndio que você tenta evitar."
          },
          {
            id: "B",
            texto: "Grito agressivamente um comando de choque: 'PARE! TEM GÁS AQUI! NÃO JOGUE O CIGARRO NO CHÃO! APAGUE ISSO NA LÍNGUA OU VOLTE PARA O SEU CARRO AGORA!'.",
            correta: true,
            feedback: "Correto! Situações extremas exigem ruptura do estado mental da testemunha irresponsável. Você deve impedir que a fonte de ignição (cigarro) seja descartada no ambiente inflamável a todo custo, forçando-o a levá-lo de volta ou apagá-lo longe do chão."
          },
          {
            id: "C",
            texto: "Ignoro ele, pois se explodir a culpa é dele.",
            correta: false,
            feedback: "Se explodir, você e os feridos que estão na área também morrerão carbonizados."
          },
          {
            id: "D",
            texto: "Jogo a água do meu cantil na ponta do cigarro dele de longe.",
            correta: false,
            feedback: "É improvável que você acerte a brasa e vai parecer uma atitude maluca, não parando o risco real."
          }
        ]
      },
      {
        id: "etapa_6",
        pergunta: "O motorista afastou o cigarro. A equipe de resgate chega: Polícia Rodoviária (bloqueando a pista), SAMU Avançado e Caminhão HazMat/Resgate dos Bombeiros. Como deve ser a transferência de comando desta crise multivariada?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "Relato apenas os feridos aos paramédicos e vou embora para o meu trabalho.",
            correta: false,
            feedback: "A ameaça química/explosiva é a prioridade informacional máxima nesse cenário."
          },
          {
            id: "B",
            texto: "Abordo o oficial superior dos Bombeiros (ou Policial) informando o risco primário: 'ATENÇÃO! Vazamento de combustível líquido! Vento para lá! Há 5 crianças no barranco seguro, 1 mulher contida no carro capotado (Vermelha, suspeita interna) e 1 homem encarcerado na van (Vermelho) perto da poça inflamável!'",
            correta: true,
            feedback: "Correto! Em incidentes críticos com risco tecnológico (HazMat/Fogo), a passagem de comando prioriza o status da ameaça ambiental (o vazamento) para que os Bombeiros estabeleçam a linha de espuma e proteção, em seguida informando a localização e status de vida (METHANE)."
          },
          {
            id: "C",
            texto: "Exijo que tirem o homem da van primeiro antes de olharem o caminhão.",
            correta: false,
            feedback: "Os Bombeiros usarão espuma extintora e linhas de mangueira para cobrir a van ANTES de usar ferramentas de corte geradoras de faísca."
          },
          {
            id: "D",
            texto: "Digo que não consegui fazer nada porque um homem atrapalhou com o cigarro.",
            correta: false,
            feedback: "Relato não operacional. Não transmite informações focadas na mitigação das vidas e riscos presentes."
          }
        ]
      }
    ]
  },
  {
    id: "cenario_78",
    titulo: "Atirador Ativo na Praça de Alimentação",
    tag_visual_cenario: "cenario_ameaca_tatica",
    descricao_inicial: "Você está na praça de alimentação lotada de um shopping quando ouve estampidos secos e contínuos. O pânico se instaura. Pessoas gritam e correm em todas as direções, cadeiras são derrubadas. Você avista, a cerca de 50 metros, um indivíduo armado atirando a esmo. A ameaça é ativa e o cenário é de altíssimo risco (Zona Quente).",
    etapas: [
      {
        id: "etapa_1",
        pergunta: "Em um cenário de Atirador Ativo (Ameaça Direta), qual é a sua PRIMEIRA ação de sobrevivência baseada no protocolo internacional 'Fugir, Esconder, Lutar' (Run, Hide, Fight)?",
        tag_visual_detalhe: "acao_fuga_tatica",
        opcoes: [
          {
            id: "A",
            texto: "Grito 'Sou socorrista!' e corro na direção das vítimas caídas para estancar sangramentos, usando as mesas como escudo.",
            correta: false,
            feedback: "Mesas de praça de alimentação não param tiros de fuzil ou pistola (não são cobertura balística, apenas ocultação). Tentar socorrer na linha de fogo transforma você na próxima vítima. Na Zona Quente, a prioridade absoluta é neutralizar a ameaça ou fugir."
          },
          {
            id: "B",
            texto: "Avalio a rota de fuga mais próxima e corro na direção oposta ao atirador, incentivando outros a me seguirem, deixando os feridos para trás nesse primeiro momento.",
            correta: true,
            feedback: "Correto! Sob ameaça direta, a regra é evacuar (Fugir). Se você não pode fugir, deve se abrigar (Esconder). Tentar prestar socorro em uma linha de fogo ativa viola a regra número um do APH: a segurança do socorrista."
          },
          {
            id: "C",
            texto: "Pego um extintor, me aproximo por trás do atirador e tento desarmá-lo heroicamente para salvar a todos.",
            correta: false,
            feedback: "Lutar (Fight) é o último e derradeiro recurso, usado APENAS quando a sua vida está em risco iminente e não há possibilidade de fuga ou esconderijo. Não se deve procurar ativamente o confronto se a rota de fuga está livre."
          },
          {
            id: "D",
            texto: "Deito no chão aberto, finjo de morto e espero a polícia chegar.",
            correta: false,
            feedback: "Fingir-se de morto em local aberto expõe você a tiros de execução ou balas perdidas. Você deve buscar abrigo balístico real ou fugir do ambiente."
          }
        ]
      },
      {
        id: "etapa_2",
        pergunta: "Você conseguiu entrar na cozinha blindada de um restaurante (Zona Fria/Morna - Ameaça Indireta) e trancou a porta de aço. Há 4 pessoas feridas lá dentro com você. V1: Tiro na perna, jorrando muito sangue pulsátil. V2: Tiro no peito, consciente e ofegante. V3: Tiro na cabeça, inconsciente, massa encefálica exposta. V4: Ilesa, mas em pânico e gritando muito. Qual a intervenção prioritária?",
        tag_visual_detalhe: "acao_controle_hemorragia",
        opcoes: [
          {
            id: "A",
            texto: "Faço compressão torácica na V3 (tiro na cabeça), pois lesão no cérebro mata mais rápido.",
            correta: false,
            feedback: "Em IMV e medicina tática, ferimentos massivos no crânio com perda de massa encefálica e inconsciência são classificados como Expectantes (Preto). A RCP não salvará esta vítima e consumirá recursos valiosos."
          },
          {
            id: "B",
            texto: "Aplico um torniquete alto e apertado (high and tight) na perna da V1 imediatamente, por cima da roupa mesmo.",
            correta: true,
            feedback: "Correto! Protocolo XABCDE / TECC. Hemorragia exsanguinante em extremidades sob ameaça indireta exige a aplicação imediata e agressiva do torniquete. Coloca-se o mais alto possível na coxa, por cima da roupa, para estancar o sangue em segundos."
          },
          {
            id: "C",
            texto: "Tampo o peito da V2 com as minhas duas mãos para o ar não entrar.",
            correta: false,
            feedback: "Isso inviabiliza você de atender outras feridas. Um curativo oclusivo valvulado deve ser usado, mas a hemorragia massiva da V1 mata antes do pneumotórax da V2."
          },
          {
            id: "D",
            texto: "Abraço a V4 para acalmá-la, pedindo silêncio absoluto para o atirador não nos ouvir.",
            correta: false,
            feedback: "Silenciar o ambiente é taticamente importante, mas o sangramento em jato da V1 vai esgotar o sangue do paciente em menos de 3 minutos. Você precisa agir no 'X' primeiro e delegar o silêncio à própria V4."
          }
        ]
      },
      {
        id: "etapa_3",
        pergunta: "A hemorragia da V1 está controlada. Você foca na V2, que tem um ferimento de bala no peito. O buraco está sugando ar e fazendo um barulho de 'borbulha' quando a vítima respira (Pneumotórax Aberto). Você não tem kit médico, apenas os itens do restaurante. Como improvisar o atendimento?",
        tag_visual_detalhe: "acao_curativo_valvulado",
        opcoes: [
          {
            id: "A",
            texto: "Encho o buraco da bala com gases ou farinha de trigo para estancar o sangue.",
            correta: false,
            feedback: "NUNCA preencha (wound packing) ferimentos cavitários no peito ou abdômen. Isso danifica os órgãos internos (coração/pulmão) e não cria pressão mecânica útil contra o osso, além de causar infecção severa."
          },
          {
            id: "B",
            texto: "Deixo o ferimento aberto, pois o pulmão precisa respirar pelo buraco.",
            correta: false,
            feedback: "O ar entrando pelo ferimento colapsará o pulmão (Pneumotórax Hipertensivo), causando asfixia e parada cardíaca rapidamente."
          },
          {
            id: "C",
            texto: "Pego um plástico limpo ou papel celofane e fecho o buraco completamente com fita adesiva nos quatro lados.",
            correta: false,
            feedback: "Fechar totalmente os quatro lados impede a entrada de ar, mas também impede a saída do ar que já vazou para o espaço pleural, causando Pneumotórax Hipertensivo da mesma forma."
          },
          {
            id: "D",
            texto: "Pego um pedaço de plástico liso (embalagem) e fixo sobre o ferimento colando a fita adesiva em apenas TRÊS lados (Curativo Valvulado de Três Pontas).",
            correta: true,
            feedback: "Correto! Isso cria uma válvula unidirecional (selo de tórax improvisado). Quando o paciente inspira, o plástico é sugado e fecha o buraco. Quando expira, o ar preso sai pelo lado sem fita, impedindo o colapso pulmonar total."
          }
        ]
      },
      {
        id: "etapa_4",
        pergunta: "REVIRAVOLTA: Após 15 minutos trancados, você ouve passos pesados de coturnos, gritos táticos ('POLÍCIA!') e um estrondo na porta da cozinha, que é arrombada por uma equipe da SWAT/BOPE com fuzis apontados para dentro. Como você deve se comportar EXATAMENTE nesse milissegundo de invasão tática?",
        tag_visual_detalhe: "acao_rendicao_tatica",
        opcoes: [
          {
            id: "A",
            texto: "Corro na direção deles gritando 'Graças a Deus! Temos feridos aqui, me ajudem com o torniquete!'",
            correta: false,
            feedback: "Correr em direção a uma equipe de intervenção tática num ambiente de atirador ativo fará você ser alvejado. Eles ainda não sabem quem é a ameaça."
          },
          {
            id: "B",
            texto: "Coloco as mãos na cintura ou no bolso para não parecer ameaçador e pergunto se está tudo bem lá fora.",
            correta: false,
            feedback: "Esconder as mãos (no bolso ou cintura) é um indicativo de que você pode puxar uma arma oculta, provocando fogo policial."
          },
          {
            id: "C",
            texto: "Continuo focado no paciente mexendo na blusa dele, afinal eu sou o socorrista e minha prioridade é a vítima.",
            correta: false,
            feedback: "Movimentos bruscos perto da linha de cintura de um corpo caído (vasculhar) podem ser confundidos com a tentativa de pegar a arma do suspeito abatido ou retirar explosivos."
          },
          {
            id: "D",
            texto: "Largo imediatamente qualquer objeto que esteja nas minhas mãos, levanto as duas mãos abertas para o alto com os dedos separados, fico parado e obedeço cegamente a todas as ordens que gritarem.",
            correta: true,
            feedback: "Correto! Em uma invasão tática, a equipe entra com a premissa de eliminar a ameaça. Mãos vazias, abertas e bem visíveis provam que você não é o atirador. A conformidade total é sua garantia de sobrevivência."
          }
        ]
      },
      {
        id: "etapa_5",
        pergunta: "A equipe tática 'limpa' a cozinha, imobiliza os presentes de forma preventiva e os paramédicos táticos entram. Como você transmite o cenário ao médico da equipe (Handoff Tático)?",
        tag_visual_detalhe: "desfecho_chegada_socorro",
        opcoes: [
          {
            id: "A",
            texto: "'Demoraram muito! Pega meu torniquete e salva o cara da cabeça que ainda respira!'",
            correta: false,
            feedback: "Reclamações não ajudam e focar em paciente inviável (tiro na cabeça com perda de massa encefálica) quebra o protocolo de IMV."
          },
          {
            id: "B",
            texto: "'Sou o primeiro interventor. 4 vítimas: V1 (Vermelho) com torniquete na coxa aplicado há 15 min; V2 (Vermelho) com selo de tórax por tiro no peito; V3 (Preto) tiro craniano sem resposta; V4 (Verde) crise de ansiedade. Nenhuma arma no local.'",
            correta: true,
            feedback: "Correto! Relato impecável usando METHANE e cores da triagem. Você apontou as prioridades vermelhas, o tempo do torniquete (crítico) e confirmou a ausência de armas na cena, o que relaxa a tensão da equipe."
          },
          {
            id: "C",
            texto: "Não falo nada, o médico que se vire, eu já fiz a minha parte e quero sair daqui.",
            correta: false,
            feedback: "A omissão de informações vitais (como a hora em que o torniquete foi aplicado) pode custar o membro ou a vida das vítimas nos cuidados definitivos."
          },
          {
            id: "D",
            texto: "'Um homem levou tiro na perna, a mulher não sei, e o outro tomou na cabeça, foi horrível!'",
            correta: false,
            feedback: "Relato emocional que perde tempo valioso na transição de cuidados."
          }
        ]
      }
    ]
  },
 {
   "id": "cenario_79",
   "titulo": "Festival em Pânico: O Efeito Multidão",
   "tag_visual_cenario": "cenario_esmagamento_pessoal",
   "descricao_inicial": "Fim de um festival de música para 50 mil pessoas. Um falso boato de bomba causa pânico generalizado. A multidão corre para a única saída, que está parcialmente fechada. Cria-se um 'gargalo' brutal. Pessoas estão sendo prensadas contra as grades de metal e dezenas caíram umas sobre as outras formando uma pilha humana. Você está na frente, perto dos seguranças da grade, protegido momentaneamente.",
   "etapas": [
     {
       "id": "etapa_1",
       "pergunta": "A força da multidão empurrando por trás é de toneladas e está esmagando quem está na frente. Antes de puxar qualquer ferido, qual é a única ação que pode parar a causa mecânica do desastre?",
       "tag_visual_detalhe": "acao_controle_cena",
       "opcoes": [
         {
           "id": "A",
           "texto": "Começar a puxar as pessoas desmaiadas da grade para aliviar a pressão nelas.",
           "correta": false,
           "feedback": "Fisicamente impossível. Puxar vítimas presas sob a pressão contínua de milhares de pessoas falhará e pode arrancar membros, além de você ser esmagado junto."
         },
         {
           "id": "B",
           "texto": "Auxiliar os seguranças a abrir ou derrubar imediatamente os portões/grades de contenção frontais para dar vazão à massa, permitindo que a pressão se dissipe.",
           "correta": true,
           "feedback": "Correto! O colapso de multidão (crowd crush) só cessa quando o 'gargalo' é removido. Escoar a pressão é a única forma de evitar centenas de mortes por asfixia compressiva."
         },
         {
           "id": "C",
           "texto": "Entrar na pilha humana e tentar usar o próprio corpo para segurar o peso.",
           "correta": false,
           "feedback": "Comportamento suicida. A pressão dinâmica de uma multidão em pânico facilmente quebra o gradil de ferro; ossos humanos não resistem."
         },
         {
           "id": "D",
           "texto": "Gritar pelo megafone para as pessoas na frente darem dois passos para trás.",
           "correta": false,
           "feedback": "Quem está na frente não tem controle motor, estão sendo empurrados pela massa de trás (que não ouve nem vê o gargalo). A ordem verbal é ineficaz em 'crowd crush' grave."
         }
       ]
     },
     {
       "id": "etapa_2",
       "pergunta": "Os portões são abertos, a pressão é liberada e a multidão escoa. Ficam para trás cerca de 20 pessoas caídas, esgotadas, machucadas ou inconscientes. Iniciando a triagem START, você pede para que todos que conseguem andar saiam da área de risco. Oito saem caminhando (Verdes). Restam vítimas no chão. Você chega a V1: Jovem, com o rosto extremamente inchado, arroxeado/azulado da clavícula para cima, e olhos injetados de sangue (petéquias). Ele está confuso, mas respira superficialmente. Qual é a condição dele?",
       "tag_visual_detalhe": "estado_asfixia_traumatica",
       "opcoes": [
         {
           "id": "A",
           "texto": "Ele quebrou o pescoço na queda e está sem ar.",
           "correta": false,
           "feedback": "Possível trauma cervical existe, mas o padrão visual (rosto azul/petéquias apenas da clavícula para cima) sugere algo mecânico sistêmico."
         },
         {
           "id": "B",
           "texto": "Ele está sofrendo de Asfixia Traumática, causada pelo esmagamento severo do tórax na grade, que impediu o sangue venoso de retornar da cabeça e impediu a expansão do pulmão.",
           "correta": true,
           "feedback": "Correto! Esta é a síndrome clássica do esmagamento de multidões. A compressão tóraco-abdominal contínua inverte o fluxo das veias cavas, rompendo capilares no rosto e olhos, e gerando hipóxia grave. Ele é prioridade Vermelha."
         },
         {
           "id": "C",
           "texto": "É uma reação alérgica extrema (Choque Anafilático) ao suor e poeira.",
           "correta": false,
           "feedback": "Anafilaxia causa edema e fechamento de glote, não o padrão de estase sanguínea e petéquias maciças no rosto por compressão torácica."
         },
         {
           "id": "D",
           "texto": "Ele inalou algum gás tóxico e está asfixiado.",
           "correta": false,
           "feedback": "Não há cenário de gás descrito, apenas compressão mecânica extrema."
         }
       ]
     },
     {
       "id": "etapa_3",
       "pergunta": "Para a Asfixia Traumática de V1, enquanto o oxigênio avançado não chega, qual a melhor posição se ele tolerar e não houver sinal franco de lesão espinhal, considerando a dificuldade respiratória severa?",
       "tag_visual_detalhe": "acao_posicionamento",
       "opcoes": [
         {
           "id": "A",
           "texto": "Deitá-lo de barriga para baixo para aliviar as costas.",
           "correta": false,
           "feedback": "Piora totalmente a expansão de um tórax que já sofreu trauma esmagador."
         },
         {
           "id": "B",
           "texto": "Sentado ou semissentado (Fowler/Semi-Fowler) para usar a gravidade a favor do rebaixamento do diafragma e retorno venoso da cabeça.",
           "correta": true,
           "feedback": "Correto! Na asfixia traumática consciente, manter o tronco elevado facilita a mecânica ventilatória do tórax machucado e ajuda a drenar o sangue engorgitado da cabeça."
         },
         {
           "id": "C",
           "texto": "Posição de Trendelenburg (pernas elevadas bem acima da cabeça).",
           "correta": false,
           "feedback": "Isto fará mais sangue ir para a cabeça já engorgitada de sangue, aumentando a pressão intracraniana e piorando o quadro."
         },
         {
           "id": "D",
           "texto": "Ajoelhado e curvado para frente.",
           "correta": false,
           "feedback": "Ele está confuso e hipóxico, não conseguirá manter o próprio peso e cairá de rosto no chão."
         }
       ]
     },
     {
       "id": "etapa_4",
       "pergunta": "REVIRAVOLTA: Você vê V2, um homem cujas DUAS pernas ficaram presas debaixo do pedestal de concreto gigante que segurava os portões. Populares dizem que a estrutura caiu nele logo no início do pânico, há cerca de 45 minutos. Ele está acordado, conversando, com dor nas pernas dormentes. Um grupo de 10 pessoas levanta a pedra brutalmente e liberta as pernas de V2 de uma vez só para comemorar. Qual é o RISCO CLÍNICO FATAL agudo que eles acabaram de desencadear?",
       "tag_visual_detalhe": "risco_sindrome_esmagamento",
       "opcoes": [
         {
           "id": "A",
           "texto": "A pedra vai cair de novo e esmagar a barriga dele.",
           "correta": false,
           "feedback": "Pode ser um risco mecânico se a equipe soltar, mas há um processo químico-fisiológico letal ocorrendo imediatamente na descompressão de membros esmagados por longo período."
         },
         {
           "id": "B",
           "texto": "Síndrome do Esmagamento (Rabdomiólise traumática). Ao soltar o peso abruptamente, uma inundação de toxinas (potássio letal e mioglobina) do músculo morto nas pernas é liberada na corrente sanguínea, podendo causar Parada Cardíaca Imediata por hipercalemia.",
           "correta": true,
           "feedback": "Correto! A 'Síndrome do Sorriso da Morte'. O paciente sob escombros há mais de 30 minutos pode parecer bem, mas ao retirar o peso sem preparo médico (soro IV, bicarbonato, torniquete profilático), o 'lixo tóxico' acumulado volta ao coração causando arritmia fatal na hora."
         },
         {
           "id": "C",
           "texto": "Hemorragia externa maciça na pele por conta do esmagamento superficial.",
           "correta": false,
           "feedback": "O risco principal do esmagamento prolongado fechado não é a hemorragia externa, mas o edema interno (Síndrome Compartimental) e a intoxicação sistêmica (Síndrome do Esmagamento)."
         },
         {
           "id": "D",
           "texto": "Convulsão tetânica porque o concreto estava sujo de ferrugem.",
           "correta": false,
           "feedback": "Tétano demora dias para incubar, não acontece instantaneamente ao levantar um peso."
         }
       ]
     },
     {
       "id": "etapa_5",
       "pergunta": "Você chega na última vítima da fila, V3. É uma criança (cerca de 6 anos). Ela não responde, não respira, mas tem pulso presente (Parada Respiratória isolada pelo esmagamento peitoral na multidão). Como você trata APNEIA (ausência de respiração) com pulso em paciente pediátrico, diferente de adultos na triagem IMV?",
       "tag_visual_detalhe": "acao_triagem_pediatrica",
       "opcoes": [
         {
           "id": "A",
           "texto": "Classifico como Preto (Inviável) imediatamente. Não se ventila crianças em Incidentes com Múltiplas Vítimas para poupar recursos.",
           "correta": false,
           "feedback": "Diferente de adultos, a principal causa de parada em crianças é respiratória, não cardíaca. Crianças sobrevivem e respondem incrivelmente bem se o pulmão for oxigenado rapidamente. O protocolo (JumpSTART) difere do START adulto."
         },
         {
           "id": "B",
           "texto": "Início compressões torácicas bem fortes, pois o coração dela vai parar de qualquer jeito.",
           "correta": false,
           "feedback": "Ela TEM pulso. Fazer compressões torácicas em coração que está batendo pode causar arritmia maligna e matá-la."
         },
         {
           "id": "C",
           "texto": "Faço a abertura das vias aéreas. Se continuar sem respirar, entrego 5 Ventilações de Resgate (Boca a boca/máscara). Se ela voltar a respirar, vira prioridade Vermelha.",
           "correta": true,
           "feedback": "Correto! Protocolo JumpSTART para crianças. Se criança não respira mas tem pulso, o problema puramente mecânico (asfixia) pode ser revertido rapidamente com 5 ventilações. Muitos voltam a respirar espontaneamente só com isso."
         },
         {
           "id": "D",
           "texto": "Viro ela de cabeça para baixo para desengasgar.",
           "correta": false,
           "feedback": "Asfixia por esmagamento (falta de ar por compressão) não é engasgo por corpo estranho nas vias aéreas. Bater nas costas ou virar de cabeça para baixo não corrige hipóxia."
         }
       ]
     },
     {
       "id": "etapa_6",
       "pergunta": "Desfecho: As primeiras ambulâncias de resgate avançado e o médico regulador chegam ao local. A cena está mais calma. O comandante da equipe médica se aproxima de você pedindo um relatório. Qual a melhor forma de repassar as informações para salvar as vítimas críticas?",
       "tag_visual_detalhe": "desfecho_chegada_socorro",
       "opcoes": [
         {
           "id": "A",
           "texto": "'Estão todos morrendo! Aquela criança parou de respirar e tem um homem preso ali atrás, façam alguma coisa rápido!'",
           "correta": false,
           "feedback": "O pânico e a falta de objetividade atrasam o atendimento médico. Eles precisam de informações clínicas rápidas e organizadas para distribuir os recursos adequados (como oxigênio e medicações venosas)."
         },
         {
           "id": "B",
           "texto": "Relato objetivo: 'A área está segura. Temos prioridades Vermelhas críricas: V1 com asfixia traumática grave; V2 teve as pernas desesmagadas subitamente por populares e corre risco iminente de Síndrome do Esmagamento; e V3 é uma criança que estava em apneia e precisou de ventilações de resgate.'",
           "correta": true,
           "feedback": "Perfeito! Você atuou como os 'olhos' da equipe de resgate. Ao alertar sobre a liberação abrupta de V2 e a apneia prévia de V3, você indicou condições invisíveis que exigem oxigenação avançada e medicações imediatas contra parada cardíaca."
         },
         {
           "id": "C",
           "texto": "Eu me afasto rapidamente e deixo os médicos descobrirem sozinhos, afinal eles são os profissionais e eu já fiz minha parte.",
           "correta": false,
           "feedback": "Sua saída repentina apaga informações vitais. O médico não tem como saber que a perna do V2 ficou presa por 45 minutos ou que a criança parou de respirar antes, detalhes que mudam todo o tratamento."
         },
         {
           "id": "D",
           "texto": "'Levem a criança primeiro, ela é a única que importa. Esqueçam o homem que estava preso.'",
           "correta": false,
           "feedback": "Na triagem médica (IMV), todas as vítimas 'Vermelhas' correm risco de morte iminente e requerem intervenção paralela da equipe, não cabendo ao leigo ditar o abandono de vítimas viáveis."
         }
       ]
     }
   ]
 },
 {
   "id": "cenario_80",
   "titulo": "A Tempestade e o Ônibus Eletrificado",
   "tag_visual_cenario": "cenario_acidente_eletrico",
   "descricao_inicial": "Durante um temporal com ventania severa, você vê o galho de uma árvore gigante quebrar e derrubar a rede elétrica de alta tensão em cima de um micro-ônibus na rodovia. O veículo derrapa e bate na calçada. Fios grossos chicoteiam e ficam repousando sobre o teto de metal do ônibus molhado pela chuva. Os 12 passageiros lá dentro começam a gritar e tentar abrir as portas para fugir.",
   "etapas": [
     {
       "id": "etapa_1",
       "pergunta": "Você para seu carro a 20 metros de distância. Qual é a sua ação IMEDIATA ao descer do carro (mantendo distância de segurança), sabendo que há cabos de alta tensão ativos tocando o ônibus?",
       "tag_visual_detalhe": "risco_eletrico_letal",
       "opcoes": [
         {
           "id": "A",
           "texto": "Corro com luvas de borracha (de lavar louça) e puxo o cabo com um pedaço de pau seco.",
           "correta": false,
           "feedback": "Alta tensão (13.800 volts ou mais) rompe facilmente o isolamento de borracha comum e até madeira molhada/úmida conduz. Você será carbonizado na hora."
         },
         {
           "id": "B",
           "texto": "Grito ordens urgentes e claras para dentro do ônibus: 'NÃO SAIAM! NÃO TOQUEM NO METAL DAS PORTAS! FIQUEM SENTADOS! A CHAPA DO ÔNIBUS PROTEGE VOCÊS!' Ligo imediatamente para 193 e Concessionária de Energia.",
           "correta": true,
           "feedback": "Correto! Enquanto estão dentro do veículo metálico e não tocam no chão, eles estão seguros devido ao princípio da 'Gaiola de Faraday'. O pneu de borracha isola, mas o verdadeiro protetor é o metal ao redor deles que direciona a corrente. Sair é assinar a sentença de morte."
         },
         {
           "id": "C",
           "texto": "Jogo baldes de areia em cima dos fios no teto do ônibus para apagar a eletricidade.",
           "correta": false,
           "feedback": "Areia não corta o fornecimento de energia de uma subestação elétrica."
         },
         {
           "id": "D",
           "texto": "Corro, toco no vidro da janela do ônibus pelo lado de fora para acalmar as pessoas.",
           "correta": false,
           "feedback": "O chão ao redor do ônibus sob chuva e o próprio veículo estão energizados. Apenas aproximar-se da área molhada próxima ao ônibus pode matá-lo por 'tensão de passo'."
         }
       ]
     },
     {
       "id": "etapa_2",
       "pergunta": "Um passageiro desesperado ignora suas ordens, força a porta traseira e tenta pular do ônibus para a poça d'água no asfalto. No instante em que ele tem um pé no ônibus e um pé no chão, há um estalo alto, um clarão, e ele cai rígido na poça a poucos metros de você, de bruços e soltando fumaça. O que você faz com ele?",
       "tag_visual_detalhe": "acao_manter_distancia",
       "opcoes": [
         {
           "id": "A",
           "texto": "Corro e chuto ele rapidamente para fora da poça energizada, pois toque rápido não dá choque.",
           "correta": false,
           "feedback": "Qualquer aproximação na poça d'água sob o campo elétrico da alta tensão causará eletrocussão e morte em você antes mesmo de tocá-lo."
         },
         {
           "id": "B",
           "texto": "Faço compressão cardíaca no peito dele à distância usando o cabo de uma vassoura.",
           "correta": false,
           "feedback": "Fisicamente ineficaz e perigoso pela condução elétrica em materiais em dia de chuva."
         },
         {
           "id": "C",
           "texto": "Absolutamente nada fisicamente. Mantenho a distância limite, evito a zona da poça d'água e uso isso como exemplo para gritar mais alto aos demais dentro do ônibus: 'OLHEM PARA ELE! QUEM DESCER VAI MORRER! FIQUEM DENTRO!'",
           "correta": true,
           "feedback": "Correto! A segurança de cena não foi atingida. Ele é uma vítima inacessível até a concessionária cortar a energia da rua. Tentar o resgate gerará múltiplas vítimas mortais (você e os próximos). O foco é contenção de danos dos que restaram vivos."
         },
         {
           "id": "D",
           "texto": "Pego um cabo de aço do meu carro, laço o pé dele e puxo.",
           "correta": false,
           "feedback": "O aço é um condutor perfeito de eletricidade. Você morrerá ao segurar o cabo."
         }
       ]
     },
     {
       "id": "etapa_3",
       "pergunta": "REVIRAVOLTA: O motorista relata por gritos pela janela que o motor do ônibus começou a pegar FOGO por conta de curtos-circuitos, e a fumaça tóxica está enchendo a cabine. Agora eles DEVEM evacuar o ônibus, caso contrário, morrerão carbonizados ou asfixiados, mesmo com a energia da rua ainda ligada. Como deve ser a orientação tática EXATA para eles saírem vivos do campo elétrico?",
       "tag_visual_detalhe": "acao_evacuacao_extrema",
       "opcoes": [
         {
           "id": "A",
           "texto": "Oriento: 'Desçam de mãos dadas, um puxando o outro, para que o peso seja dividido na água e o choque seja menor'.",
           "correta": false,
           "feedback": "Dar as mãos criará um circuito elétrico humano perfeito e massivo, matando todos instantaneamente ao primeiro toque no solo."
         },
         {
           "id": "B",
           "texto": "Oriento: 'Desçam correndo muito rápido dando passos largos! A velocidade evita o contato constante com a energia'.",
           "correta": false,
           "feedback": "Passos largos criam um Diferencial de Potencial elétrico no solo (Tensão de Passo). A corrente subirá por uma perna, passará pelos órgãos vitais (coração) e descerá pela outra, causando Parada Cardíaca na hora."
         },
         {
           "id": "C",
           "texto": "Oriento: 'Vão para a porta, pulem o mais longe possível para NÃO tocar o ônibus e o chão ao mesmo tempo. Ao cair no chão, NÃO separarem os pés! Afastem-se dando apenas saltos curtos como um coelho (pés unidos e arrastando/saltitando sem descolar um do outro)'.",
           "correta": true,
           "feedback": "Correto! O risco máximo é fechar o circuito. Pular sem tocar veículo e solo ao mesmo tempo evita aterreamento. Andar de pés unidos (saltos curtos ou arrastando juntos) impede a 'Tensão de Passo', pois não cria diferença de voltagem entre os dois pés no solo energizado."
         },
         {
           "id": "D",
           "texto": "Oriento: 'Tirem os sapatos, pois a sola derretida atrai os raios, e corram descalços pela água'.",
           "correta": false,
           "feedback": "A sola do sapato molhada ajuda pouco contra alta tensão, mas pele nua direta no solo energizado potencializa absurdamente a absorção letal da corrente."
         }
       ]
     },
     {
       "id": "etapa_4",
       "pergunta": "Os passageiros seguem as ordens, pulam e se afastam com saltos curtos. Todos sobrevivem à fuga. Nesse momento, a concessionária de energia chega, desliga e aterra a rede. O chefe da equipe elétrica grita: 'LINHA FRIA! SEGURO!'. Você finalmente pode chegar no V1 (o passageiro que pulou errado no início e está caído na poça). Ele está em Parada Cardiorrespiratória e tem queimaduras graves nos pés e mãos (marcas de entrada e saída). O que o DEA (Desfibrilador) tem a ver com vítimas de raio ou choque de alta tensão?",
       "tag_visual_detalhe": "acao_uso_dea",
       "opcoes": [
         {
           "id": "A",
           "texto": "O choque da alta tensão causou uma arritmia caótica no coração dele (Fibrilação Ventricular). RCP imediata e uso do DEA (choque elétrico terapêutico) o mais rápido possível são o tratamento padrão-ouro para reverter isso.",
           "correta": true,
           "feedback": "Correto! Ironia médica: o veneno e a cura são a eletricidade. O choque externo letal parou o marcapasso natural. Um choque controlado do DEA tem altas chances de 'resetar' e ressuscitar o paciente jovem sem doença arterial prévia."
         },
         {
           "id": "B",
           "texto": "Não se pode usar DEA em quem tomou choque, o corpo dele vai explodir de sobrecarga elétrica.",
           "correta": false,
           "feedback": "O corpo humano não 'armazena' a eletricidade após a fonte ser desligada (não é uma bateria). Usar o DEA é totalmente seguro e indicado."
         },
         {
           "id": "C",
           "texto": "Queimaduras de saída no pé contraindicam a massagem cardíaca para não infeccionar a ferida.",
           "correta": false,
           "feedback": "Vida sobre membro. Feridas de entrada e saída são graves, mas a ausência de circulação sanguínea mata em minutos. Foco no 'C' de circulação."
         },
         {
           "id": "D",
           "texto": "Em paradas cardíacas por eletrocussão, devemos apenas ventilar (boca a boca) porque o choque gasta todo o oxigênio.",
           "correta": false,
           "feedback": "O problema central da eletrocussão de alta tensão é elétrico (coração parou/arritmia maligna). Compressões torácicas e DEA são mandatórios."
         }
       ]
     },
     {
       "id": "etapa_5",
       "pergunta": "Desfecho: Enquanto você realiza a RCP e o DEA analisa o ritmo do paciente, as ambulâncias do SAMU chegam. O médico socorrista se aproxima com a equipe. Qual é a forma mais eficaz de relatar a situação para garantir o melhor atendimento a todos os envolvidos?",
       "tag_visual_detalhe": "desfecho_chegada_socorro",
       "opcoes": [
         {
           "id": "A",
           "texto": "Paro imediatamente a massagem cardíaca, aponto para o ônibus e digo: 'Ele está morto, mas salvem as pessoas que saíram do ônibus porque elas estão muito assustadas!'",
           "correta": false,
           "feedback": "Você nunca deve interromper a RCP até que a equipe médica literalmente toque no paciente para assumir. Além disso, declarar óbito não é função do leigo."
         },
         {
           "id": "B",
           "texto": "Mantenho as compressões e relato: 'Cena segura, linha fria confirmada! Este homem sofreu choque de alta tensão há cerca de 10 minutos. O DEA está conectado. Os outros 11 passageiros conseguiram evacuar, mas precisam ser avaliados por possível inalação de fumaça do incêndio.'",
           "correta": true,
           "feedback": "Excelente! Você manteve o Suporte Básico de Vida rodando enquanto passava informações críticas: confirmou a segurança da cena, informou o tempo de parada (crucial para o prognóstico), o mecanismo (alta tensão) e alertou sobre um risco 'invisível' (inalação de fumaça) nos outros sobreviventes."
         },
         {
           "id": "C",
           "texto": "Foco apenas nas feridas dele: 'Doutor, olhe as queimaduras nos pés dele! Vocês precisam colocar um curativo rápido para não infeccionar!'",
           "correta": false,
           "feedback": "Distração perigosa. Em uma Parada Cardiorrespiratória, queimaduras de extremidade são a menor das preocupações. O foco é choque elétrico (desfibrilação), vias aéreas e adrenalina."
         },
         {
           "id": "D",
           "texto": "Deixo o paciente com eles e vou embora discretamente, pois meu trabalho terminou quando a ambulância chegou.",
           "correta": false,
           "feedback": "Sair sem passar o plantão (handover) priva a equipe médica do histórico de todo o evento (como a tensão de passo, o tempo exato e o incêndio), comprometendo o tratamento das vítimas."
           }
        ]
      }
    ]
  }
]; 

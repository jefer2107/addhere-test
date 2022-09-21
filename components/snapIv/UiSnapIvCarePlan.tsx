import * as React from "react";
import { EnSnapIvDisability } from "../../enum/en-snapiv-disability.enum";
import { IDisability } from "../../interfaces/idisability";
import { IVulnerability } from "../../interfaces/ivulnerability";
import classes from "../../styles/snapIv/UiSnapIvCarePlan.module.css";

interface IUiSnapIvCarePlanProps {
  score: any;
  disabilitiesChecks: any;
  vulnerabilities: any[];
}

const UiSnapIvCarePlan: React.FunctionComponent<IUiSnapIvCarePlanProps> = ({
  score,
  disabilitiesChecks,
  vulnerabilities,
}) => {
  const checks = getChecks(disabilitiesChecks) || {};
  return (
    <>
      {/* // <!-- TODO: Faltam orientações gerais para robusto e em risco --> */}
      {isVulnerabilityChecked(vulnerabilities[2], score) && (
        <section>
          <div className={classes.title}>ORIENTAÇÕES GERAIS</div>
          <div className={classes.subTitle}>
            INTERPRETAÇÃO DA PONTUAÇÃO FINAL DO IVCF-20
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.header}></th>
              <th className={classes.header}>≥ 15 pontos</th>
            </tr>
            <tr className={classes.row}>
              <td className={classes.clmTitle}>Categoria de risco</td>
              <td className={classes.clmTitle}>
                ALTO RISCO de vulnerabilidade clínico-funcional
              </td>
            </tr>
            <tr className={classes.row}>
              <td className={classes.clmTitle}>Orientações Gerais</td>
              <td className={classes.cell}>
                <p>
                  A probabilidade de apresentar fragilidade é bastante elevada.
                  Neste caso, está fortemente indicada uma avaliação
                  clínico-funcional mais detalhada, que deve ser realizada por
                  equipe geriátrico-gerontológica especializada. O
                  envelhecimento não explica a situação clínica atual do idoso,
                  independentemente de sua idade. Este idoso apresenta alto
                  potencial de recuperação de sua saúde ou de sua qualidade de
                  vida.
                </p>
                <p>
                  Este idoso deve ser frágil (estratos 6, 7, 8, 9 ou 10) ou em
                  risco de fragilização (estratos 4 ou 5), conforme pode ser
                  visto na Escala Visual de Fragilidade (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ivcf-20.com.br/institucional/escalavisualdefragilidade/5/15?pg=institucional/escalavisualdefragilidade/5/15"
                  >
                    *****
                  </a>
                  ). Provavelmente, apresenta algum grau de dependência nas
                  tarefas do cotidiano. Desta forma, deve-se definir quais
                  incapacidades estão presentes (incapacidade cognitiva,
                  instabilidade postural, imobilidade, incontinência
                  esfincteriana e incapacidade comunicativa), além das condições
                  crônicas determinantes da fragilidade. Os cuidados
                  profissionais são indispensáveis e devem ser realizados por
                  profissionais capacitados no atendimento de idosos frágeis,
                  pois o risco de iatrogenia é elevado. Toda prescrição e os
                  diagnósticos das doenças devem ser revistos cuidadosamente.
                  Ficar atento aos efeitos colaterais dos medicamentos
                  utilizados.
                </p>
                <p>
                  Consulte a lista de medicamentos considerados inapropriados
                  para os idosos e discuta com seu médico a sua substituição por
                  medicamentos mais seguros{" "}
                  <a target="_blank" href="#">
                    ***
                  </a>
                  . Consulte também a lista de medicamentos de alta vigilância
                  <a target="_blank" href="#">
                    ****
                  </a>
                  . <br />
                  Provavelmente, o idoso necessita de acompanhamento
                  interdisciplinar.
                </p>
                <p>
                  É importante avaliar se há sobrecarga dos familiares e/ou
                  cuidadores e tentar melhorar o desempenho do idosos nas
                  tarefas do cotidiano, através da redução da iatrogenia,
                  tratamento de problemas não diagnosticados ou subtratados,
                  priorização das metas terapêuticas e reabilitação.
                  Intervenções preventivas devem ser revistas (prevenção
                  quaternária), pois apresentam menor impacto na funcionalidade
                  do idoso e podem ser causa de “adoecimento iatrogênico”.
                </p>
                <p>
                  Seguir as orientações específicas relacionadas aos itens
                  pontuados no IVCF-20.
                </p>
                <p>
                  Todos os idosos devem ser rotineiramente imunizados com as
                  vacinas anti-influenza, anti-pneumocócica, dupla/tripla tipo
                  adulto, anti-zoster, anti-hepatite B e A e anti-amarílica,
                  exceto na presença de restrições específicas que devem ser
                  discutidas com seu médico.
                </p>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.idade] && (
        <section>
          <div className={classes.title}>IDADE</div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                Qual é a sua idade?
                <ul>
                  <li className={classes.topic}>60 a 74 anos = 0</li>
                  <li className={classes.topic}>75 a 84 anos = 1</li>
                  <li className={classes.topic}>≥ 85 anos = 3</li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  O envelhecimento reduz a capacidade do organismo de se
                  defender das agressões do meio interno e externo, aumentando o
                  risco de adoecimento e de incapacidades. Esta maior
                  vulnerabilidade do organismo predispõe ao risco de doenças
                  neurodegenerativas, doenças cardiovasculares, doenças
                  respiratórias, doenças músculo-esqueléticas, diabetes
                  mellitus, hipertensão arterial, dentre outras. Todavia, tais
                  condições crônicas de saúde não são causadas pela “velhice”,
                  mas sim, resultantes de hábitos de vida e de outros fatores de
                  risco que se desenvolveram ao longo de toda a vida.{" "}
                </p>
                <p>
                  A heterogeneidade entre os indivíduos idosos é marcante e
                  progressiva ao longo do processo de envelhecimento. Quanto
                  mais velhos, maiores são as diferenças entre os indivíduos. A
                  idade por si só não é um bom marcador de declínio funcional e
                  dependência. Idosos com a mesma idade cronológica apresentam
                  padrões de dependência funcional extremamente variáveis.
                  Doenças, por sua vez, são frequentes nos idosos. Envelhecer
                  sem nenhuma doença crônica é mais uma exceção do que a regra.
                  Todavia, indivíduos com o mesmo diagnóstico clínico podem ter
                  a capacidade funcional absolutamente distinta um do outro.
                  Assim, a presença de doenças também não significa ausência de
                  saúde. Desta forma, SAÚDE no idoso pode ser definida como a
                  capacidade individual de realização das aspirações e da
                  satisfação das necessidades, independentemente da idade e da
                  presença ou não de doenças. O termo FRAGILIDADE é utilizado
                  para definir aqueles idosos que apresentam declínio funcional
                  estabelecido (dependência nas atividades de vida diária) ou
                  condições crônicas altamente preditores de dependência
                  funcional, como a presença de comorbidades múltiplas
                  (polipatologia, polifarmácia e internação recente), sarcopenia
                  (redução da massa, da força e do desempenho muscular) e
                  comprometimento cognitivo leve. Nem a idade e nem a presença
                  de doenças podem ser considerados bons marcadores de
                  fragilidade, pois não há uma relação de causa e efeito direta.
                  Idosos com a mesma idade e/ou os mesmos diagnósticos clínicos
                  podem ter a capacidade funcional absolutamente distinta um do
                  outro, o que faz com que essa população seja extremamente
                  heterogênea. Esta heterogeneidade entre os idosos pode ser
                  resumida em três grupos de idosos:
                </p>
                <ul>
                  <li className={classes.topic}>
                    Idosos Robustos: são os idosos que apresentam boa reserva
                    homeostática e, portanto, são capazes de gerenciar sua vida
                    de forma independente e autônoma e não apresentam nenhuma
                    incapacidade funcional ou condição crônica de saúde
                    associada a maior vulnerabilidade.
                  </li>
                  <li className={classes.topic}>
                    Idosos em Risco de Fragilização: são os idosos independentes
                    para as atividade de vida diária, mas que apresentam
                    condições crônicas preditores de declínio funcional.
                  </li>
                  <li className={classes.topic}>
                    Idosos Frágeis: são os idosos que apresentam dependência
                    funcional nas atividades de vida diária e, consequentemente,
                    necessitam de cuidados de longa duração.
                  </li>
                </ul>
                <p>
                  Estes 3 grupos de idosos podem ser ainda subdivididos em 10
                  categorias de idosos, conforme a Escala Visual de Fragilidade
                  (
                  <a href="https://www.ivcf-20.com.br/institucional/escalavisualdefragilidade/5/15?pg=institucional/escalavisualdefragilidade/5/15">
                    *****
                  </a>
                  ).
                </p>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.percepcao] && (
        <section>
          <div className={classes.title}>AUTO-PERCEPÇÃO DA SAÚDE</div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <span className={classes.txt}>
                  Em geral, comparando com outras pessoas de sua idade, você
                  diria que sua saúde é:
                </span>
                <ul>
                  <li className={classes.topic}>
                    Excelente, muito boa ou boa=0
                  </li>
                  <li className={classes.topic}>Regular ou ruim=1</li>
                </ul>
              </td>
              <td className={classes.cell}>
                <ul>
                  <li className={classes.topic}>
                    Esclarecer que a velhice não é causa de declínio funcional;
                  </li>
                  <li className={classes.topic}>
                    Todo declínio funcional está associado a alterações nos
                    sistemas funcionais: cognição, humor/comportamento,
                    mobilidade ou comunicação;
                  </li>
                  <li className={classes.topic}>
                    Orientar o paciente a buscar a causa da incapacidade;
                  </li>
                  <li className={classes.topic}>
                    Estimular o paciente a manter as atividade anteriormente
                    desenvolvidas, se necessário, sob supervisão, conforme a
                    avaliação funcional;
                  </li>
                  <li className={classes.topic}>
                    Procurar atividades mais simples e agradáveis para o idoso,
                    de acordo com sua satisfação;
                  </li>
                  <li className={classes.topic}>
                    Propor o uso de agenda de atividades, se for o caso;
                  </li>
                  <li className={classes.topic}>
                    Descrever o passo a passo ou dicas para a realização de
                    algumas tarefas (receitas, trabalho artesanal);
                  </li>
                  <li className={classes.topic}>
                    Buscar ajuda profissional para reabilitação e melhor
                    utilização da tecnologia assistiva, adaptação ambiental e
                    uso de dispositivos de ajuda, conforme o diagnóstico
                    clínico-funcional.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.avdi] && (
        <section>
          <div className={classes.title}>
            ATIVIDADES DE VIDA DIÁRIA INSTRUMENTAL
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    Por causa de sua saúde ou condição física, você deixou de
                    fazer compras?
                  </li>
                  <li className={classes.topic}>
                    Por causa de sua saúde ou condição física, você deixou de
                    controlar seu dinheiro, gastos ou pagar as contas de sua
                    casa?{" "}
                  </li>
                  <li className={classes.topic}>
                    Por causa de sua saúde ou condição física, você deixou de
                    realizar pequenos trabalhos domésticos, como lavar louça,
                    arrumar a casa ou fazer limpeza leve?
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <ul>
                  <li className={classes.topic}>
                    Esclarecer que a velhice não é causa de declínio funcional;
                  </li>
                  <li className={classes.topic}>
                    Todo declínio funcional está associado a alterações nos
                    sistemas funcionais: cognição, humor/comportamento,
                    mobilidade ou comunicação;
                  </li>
                  <li className={classes.topic}>
                    Orientar o paciente a buscar a causa da incapacidade;
                  </li>
                  <li className={classes.topic}>
                    Estimular o paciente a manter as atividade anteriormente
                    desenvolvidas, se necessário, sob supervisão, conforme a
                    avaliação funcional;
                  </li>
                  <li className={classes.topic}>
                    Procurar atividades mais simples e agradáveis para o idoso,
                    de acordo com sua satisfação;
                  </li>
                  <li className={classes.topic}>
                    Propor o uso de agenda de atividades, se for o caso;
                  </li>
                  <li className={classes.topic}>
                    Descrever o passo a passo ou dicas para a realização de
                    algumas tarefas (receitas, trabalho artesanal);
                  </li>
                  <li className={classes.topic}>
                    Buscar ajuda profissional para reabilitação e melhor
                    utilização da tecnologia assistiva, adaptação ambiental e
                    uso de dispositivos de ajuda, conforme o diagnóstico
                    clínico-funcional.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.avdb] && (
        <section>
          <div className={classes.title}>ATIVIDADES DE VIDA DIÁRIA BÁSICA</div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    Por causa de sua saúde ou condição física, você deixou de
                    tomar banho sozinho?
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <ul>
                  <li className={classes.topic}>
                    Esclarecer que a velhice não pode justificar a incapacidade
                    para tomar banho sozinho;
                  </li>
                  <li className={classes.topic}>
                    Necessariamente, este declínio funcional está associado a
                    problemas na cognição, humor/comportamento, mobilidade e/ou
                    comunicação;
                  </li>
                  <li className={classes.topic}>
                    Orientar o paciente a buscar a causa da incapacidade;
                  </li>
                  <li className={classes.topic}>
                    Estimular o banho diário, preferencialmente de chuveiro,
                    mesmo nos pacientes acamados;
                  </li>
                  <li className={classes.topic}>
                    Manter uma postura determinada quando o idoso não quiser
                    fazer a sua higiene e nem deixar o cuidador fazê-lo.
                    Todavia, deve-se evitar confrontação e discussão, conduzindo
                    com firmeza, passo a passo, a execução de toda a tarefa;
                  </li>
                  <li className={classes.topic}>
                    Evitar a palavra “banho”, se esta atividade o deixa
                    irritado;
                  </li>
                  <li className={classes.topic}>
                    Estimular a independência do idoso, dando os comandos de
                    forma clara, objetiva e passo a passo e só ajude quando o
                    idoso não der conta de fazer sozinho; Elogiar as ordens bem
                    executadas.
                  </li>
                  <li className={classes.topic}>
                    Hidratar a pele todos os dias, se possível, 2 vezes ao dia,
                    com creme de ureia ou outro hidratante que estiver
                    disponível;{" "}
                  </li>
                  <li className={classes.topic}>
                    Manter os hábitos do idoso (batons, esmaltes, penteados,
                    barba);
                  </li>
                  <li className={classes.topic}>
                    Trocar as roupas diariamente e permitir que o idoso as
                    escolha;{" "}
                  </li>
                  <li className={classes.topic}>
                    Separar toda a roupa e entregar ao paciente peça por peça na
                    ordem de vestir;
                  </li>
                  <li className={classes.topic}>
                    Preparar antecipadamente tudo que precisa para o banho e em
                    lugares de fácil alcance (sabonete, shampoo, toalha, roupas
                    limpas);
                  </li>
                  <li className={classes.topic}>
                    Não deixar o idoso sozinho e molhado num ambiente
                    extremamente perigoso, para evitar quedas;
                  </li>
                  <li className={classes.topic}>
                    Seja discreto e peça licença antes de despir o idoso;
                  </li>
                  <li className={classes.topic}>
                    Manter sempre a mesma rotina, isto facilita o trabalho do
                    cuidador e cria um hábito para o paciente;
                  </li>
                  <li className={classes.topic}>
                    Verificar a temperatura da água, antes de colocar o paciente
                    debaixo do chuveiro;
                  </li>
                  <li className={classes.topic}>
                    Evitar banhos muito quentes e demorados para não ressecar a
                    pele;
                  </li>
                  <li className={classes.topic}>
                    Usar sabonetes neutros, dar preferência a sabonete líquido e
                    evitar uso de buchas;
                  </li>
                  <li className={classes.topic}>
                    Manter a privacidade do paciente, mas solicitar que não
                    tranque a porta;
                  </li>
                  <li className={classes.topic}>
                    Orientar o idoso a enxugar bem as partes íntimas, dobras,
                    debaixo das mamas, axilas e entre os dedos.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.cognicao] && (
        <section>
          <div className={classes.title}>COGNIÇÃO</div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    Algum familiar ou amigo falou que você está ficando
                    esquecido?
                  </li>
                  <li className={classes.topic}>
                    Este esquecimento está impedindo a realização de alguma
                    atividade do cotidiano?
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  O cérebro envelhece, assim como as outras partes do corpo. O
                  cérebro é responsável pela nossa cognição, que é a capacidade
                  mental de compreender e resolver adequadamente os problemas do
                  cotidiano. A cognição inclui algumas funções mentais como a
                  memória, a tomada de decisão, a velocidade de processamento e
                  a aprendizagem. Este “envelhecimento cognitivo” é normal e
                  acontece em todos os indivíduos, durante toda a vida, mas de
                  forma variável. Ocorre uma maior lentificação da velocidade do
                  processamento cognitivo, redução da atenção seletiva e da
                  capacidade de fazer várias coisas ao mesmo tempo (memória de
                  trabalho). Estas alterações justificam um menor rendimento na
                  aprendizagem de coisas novas (memória episódica), que, apesar
                  de preservada, exige um esforço maior. Outra caraceterística é
                  a maior dificuldade de “lembrar-se de lembrar” (memória
                  prospectiva), ou seja, o idoso deve ter maior cuidado nos
                  compromissos futuros, pois tem mais dificuldade de lembrar-se
                  deles. O uso de agenda e anotações podem compensar esta
                  alteração. Todavia, estas alterações não são consideradas
                  patológicas, tampouco consideradas como uma doença, pois não
                  impedem que as pessoas continuem independentes para a maioria
                  das tarefas do cotidiano. Estas mudanças não tem nenhuma
                  relação com a doença de Alzheimer, esta sim capaz de
                  comprometer significativamente a capacidade individual de
                  decisão, tornando os doentes dependentes de outras pessoas.
                  Por outro lado, algumas funções cognitivas melhoram com o
                  envelhecimento cerebral, como o conhecimento do mundo
                  (habilidades linguísticas e a inteligência cristalizada) e,
                  particularmente, a principal função cognitiva, a SABEDORIA. A
                  sabedoria é definida como o conjunto de habilidades
                  cognitivas, reflexivas e afetivas compreendidas como
                  capacidade de discernimento, julgamento, gestão de
                  determinadas circunstâncias da vida, conduta pessoal e social,
                  que vão muito além do conhecimento descritivo e implicam numa
                  compreensão e interpretação mais profunda do sentido da vida.
                  Assim, este envelhecimento cognitivo facilita a percepção da
                  felicidade e aumenta o grau de satisfação dos indivíduos.{" "}
                </p>
                <p>
                  A preservação das funções cognitivas pode ser obtida através
                  da atividade física regular, controle de condições crônicas de
                  saúde, como a hipertensão arterial, diabetes e o tabagismo, e
                  evitando-se o uso de medicamentos inapropriados para o
                  idoso***. Além da atividade física, a estimulação intelectual
                  e social são também importantes para a pessoa se manter ativa,
                  buscando sempre novas oportunidades de aprendizagem. O sono
                  também é vital para a cognição. Finalmente, recomenda-se
                  prevenir o delirium (confusão mental aguda), que ocorre
                  frequentemente em idosos internados ou que usam medicamentos
                  inadequados.
                </p>
                <p>
                  No questionário, a presença de respostas positivas merece uma
                  investigação mais detalhada das funções cognitivas,
                  principalmente quando todas as três respostasforem positivas.
                  Assim, respostas positivas nestas três perguntas associadas a
                  declínio funcional ou perda nas atividades de vida diária
                  (pontuação nas questões 3, 4, 5 e 6) sugerem fortemente a
                  presença de incapacidade cognitiva.{" "}
                </p>
                <p>
                  Nos idosos com incapacidade cognitiva secundária a quadros
                  demenciais, as seguintes orientações podem ser úteis:
                </p>
                <div className={classes.strong}>
                  1. INTERVENÇÕES QUE AUMENTAM A SEGURANÇA DO PACIENTE E REDUZEM
                  O RISCO DE ACIDENTES:
                </div>
                <ul>
                  <li className={classes.topic}>
                    Supervisão na cozinha, principalmente com o fogão e panelas.
                  </li>
                  <li className={classes.topic}>
                    Guardar fósforos e isqueiros em local de difícil acesso,
                    ficar atento a fogão aceso, gás ligado (desligar o
                  </li>
                  gás geral).
                  <li className={classes.topic}>
                    Manter a segurança ambiental do idoso: evitar tapetes,
                    móveis, degraus, escadas, fios soltos e as tomadas
                  </li>
                  devem ser cobertas.
                  <li className={classes.topic}>
                    Guardar medicamentos e produtos não comestíveis em locais
                    fechados.
                  </li>
                  <li className={classes.topic}>
                    Manter materiais de limpeza e inseticidas guardados em
                    lugares de difícil acesso.
                  </li>
                  <li className={classes.topic}>Cobrir tomadas elétricas.</li>
                  <li className={classes.topic}>Cuidado com ventiladores.</li>
                  <li className={classes.topic}>
                    Promover áreas seguras, barra de apoio, piso antiderrapante,
                    principalmente quando há perambulação.
                  </li>
                  <li className={classes.topic}>
                    Manter janelas, portas e portões protegidos para evitar
                    fugas e guardar as chaves em locais seguros.
                  </li>
                  <li className={classes.topic}>
                    Estimular a ida do paciente ao banheiro antes de colocá-lo
                    na cama.
                  </li>
                  <li className={classes.topic}>
                    Orientar porteiros e vizinhos informados sobre o problema
                    para que nunca saia desacompanhado e promover a
                  </li>
                  identificação da pessoa idosa por meio de etiqueta na
                  vestimenta ou pulseira (nome, telefone, endereço).
                  <li className={classes.topic}>
                    Evitar a direção veicular: é perigoso dirigir, mesmo nas
                    fases iniciais da demência.
                  </li>
                  <li className={classes.topic}>
                    Atentar para mudanças de comportamento, careta ou tocar-se
                    repetidamente em uma parte do corpo, observar
                  </li>
                  sinais de prazer e desagrado, quando o paciente não consegue
                  mais se comunicar verbalmente.
                  <li className={classes.topic}>
                    Manter sempre uma luz acessa no corredor durante a noite.
                  </li>
                  <li className={classes.topic}>
                    Manter atenção rigorosa para estes pacientes.
                  </li>
                </ul>

                <div className={classes.strong}>
                  2. INTERVENÇÕES QUE ESTIMULAM A MEMÓRIA E A INDEPENDÊNCIA DO
                  INDIVÍDUO:
                </div>
                <ul>
                  <li className={classes.topic}>
                    Evitar fazer tudo para o paciente. Manter a independência do
                    paciente conforme seu potencial cognitivo é
                  </li>
                  importante para estimular a cognição e promover um senso de
                  dignidade e respeito, reduzindo o sentimento de inutilidade.
                  <li className={classes.topic}>
                    Caso a atividade deixe a pessoa chateada ou agressiva por
                    não conseguir mais realizá-la, simplifique ou
                  </li>
                  apresente uma nova alternativa, de acordo com a capacidade da
                  pessoa, evitando que ela fique frustrada.
                  <li className={classes.topic}>
                    Se for necessário, simplifique ou divida as tarefas em
                    etapas, mas não o impeça de participar.
                  </li>
                  <li className={classes.topic}>
                    Manter sempre a mesma rotina é fundamental: higiene,
                    alimentação, repouso e atividades, em geral.
                  </li>
                  <li className={classes.topic}>
                    Evite viajar com o paciente, exceto quando for para lugares
                    previamente conhecidos.
                  </li>
                  <li className={classes.topic}>
                    Evita mudanças de moradia para o paciente, pois o tempo
                    necessário para sua adaptação é normalmente
                  </li>
                  prolongado.
                  <li className={classes.topic}>
                    Manter relógio e calendário de fácil acesso.
                  </li>
                  <li className={classes.topic}>
                    Estimular a memória oferecendo atividades e terapias que não
                    provocam agitação.
                  </li>
                  <li className={classes.topic}>
                    Manter a casa sempre organizada e evitar mudanças
                    desnecessárias, para evitar confusão.
                  </li>
                  <li className={classes.topic}>
                    A música estimula a memória, alivia a tensão e a ansiedade,
                    causando bem estar e melhora cognitiva.
                  </li>
                </ul>

                <div className={classes.strong}>
                  3. MEDIDAS QUE PROMOVEM QUALIDADE DE VIDA:
                </div>
                <ul>
                  <li className={classes.topic}>
                    Evite confrontação. Discutir só causa frustração e
                    agressividade. Em vez de corrigir, distraia a pessoa, mude
                    de assunto, tire-a do ambiente e é provável que em pouco
                    tempo ela não mais se lembre do que estava fazendo.
                  </li>
                  <li className={classes.topic}>
                    Evitar discussão com o paciente, tente encontrar a razão do
                    problema e ajudá-lo.
                  </li>
                  <li className={classes.topic}>
                    Manter o paciente ativo durante o dia. Incentive a
                    participação na realização de tarefas que gostava ou de
                    tarefas novas. Mesmo não conseguindo desempenhar da mesma
                    maneira que antes, pode realizar alguma parte.
                  </li>
                  <li className={classes.topic}>
                    Algumas atividades, como caminhar, dançar e jardinagem podem
                    ser experi- mentadas para evitar que a pessoa fique
                    perambulando, por exemplo.
                  </li>
                  <li className={classes.topic}>
                    Manter o ambiente calmo, silencioso, confortável, tranquilo
                    e seguro no domicílio. Ruídos e muita claridade
                    superestimulam o paciente.
                  </li>
                  <li className={classes.topic}>
                    Lidar com crianças e animais de estimação pode apresentar
                    resultados terapêuticos positivos.
                  </li>
                  <li className={classes.topic}>
                    Ao chamar o idoso para fazer algo, seja claro e afirmativo:
                    “vamos almoçar”; “vamos tomar banho agora”; “é hora de
                    deitar”. Não ofereça várias opções para o paciente decidir.
                  </li>
                  <li className={classes.topic}>
                    Evite desafiar ou fazer piadas com seu esquecimento ou
                    brincar de adivinhação, como: “... lembra?”. De nada vai
                    adiantar você dizer que já falou mil vezes se o outro não
                    grava essa informação.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.humor] && (
        <section>
          <div className={classes.title}>HUMOR</div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    No último mês, você ficou com desânimo, tristeza ou
                    desesperança?
                  </li>
                  <li className={classes.topic}>
                    {" "}
                    No último mês, você perdeu o interesse ou prazer em
                    atividades anteriormente prazerosas?
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  A depressão é uma doença frequente em todas as faixas etárias.
                  Sintomas depressivos podem estar presentes em cerca de 10 a
                  20% idosos, principalmente quando há outras doenças crônicas
                  associadas. Depressão é bem diferente de tristeza, pois, nesta
                  última, não há sentimento de culpa, auto-acusação ou desejo de
                  morrer, como ocorre na depressão. O diagnóstico de depressão
                  no idoso é mais difícil, pois, muitas vezes, o idoso acha que
                  “depressão é normal da velhice” ou que a depressão pode ser
                  controlada por ele mesmo, basta querer. Ainda existem muitas
                  atitudes negativas em relação ao diagnóstico de depressão,
                  como se fosse um tipo de “fraqueza de espiríto”. Muitas vezes,
                  a depressão é confundida com outras doenças clínicas,
                  dificultando mais ainda seu diagnóstico. Deve-se ter clareza
                  que a depressão é uma doença potencialmente grave, capaz de
                  comprometer significativamente a vida das pessoas e é
                  considerada uma das principais causas de incapacidade. O
                  tratamento é simples e extremamente eficaz, baseado no uso de
                  medicamentos anti-depressivos e da psicoterapia.
                </p>
                <p>
                  No questionário, a pontuação nas questões 10 e 11 sugere a
                  presença de sintomatologia depressiva. Nestes casos,
                  recomenda-se as seguintes intervenções:
                </p>
                <ul>
                  <li className={classes.topic}>
                    Confirmar o diagnóstico de depressão maior com o médico
                    assistente, para que seja prescrito o tratamento
                    farmacológico e não farmacológico mais conveniente.
                  </li>
                  <li className={classes.topic}>
                    Evitar o isolamento social, manter o paciente sempre com
                    outras pessoas.
                  </li>
                  <li className={classes.topic}>
                    Estimular atividades físicas: caminhadas, corridas, escutar
                    música suave, danças e fazer exercícios de relaxamento.
                  </li>
                  <li className={classes.topic}>
                    Evitar uso de drogas e álcool.
                  </li>
                  <li className={classes.topic}>
                    Estimular tarefas fáceis para o paciente.
                  </li>
                  <li className={classes.topic}>
                    Evitar tomada de grandes decisões imediatamente.
                  </li>
                  <li className={classes.topic}>
                    Encorajar a procura de auxílio psicoterapêutico.
                  </li>
                  <li className={classes.topic}>
                    Verificar o uso do medicamento e encorajar a adesão ao
                    tratamento.
                  </li>
                  <li className={classes.topic}>
                    Atentar para as referências ao suicídio, todos aqueles que
                    querem suicidar-se avisam que vão fazê-lo, mas raramente a
                    família entende o &quot;recado&quot;.
                  </li>
                  <li className={classes.topic}>
                    Compreender e ter paciência.
                  </li>
                  <li className={classes.topic}>
                    A duração do tratamento é variável, mas usualmente é
                    prolongado. Estimular a continuidade do tratamento e do
                    seguimento do paciente.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.mmss] && (
        <section>
          <div className={classes.title}>
            <span className={classes.txt}>MOBILIDADE</span>{" "}
            <span className={classes.txt}>Alcance, preenção e pinça</span>
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    Você é incapaz de elevar os braços acima do nível do ombro?
                  </li>
                  <li className={classes.topic}>
                    {" "}
                    Você é incapaz de manusear ou segurar pequenos objetos?
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <ul>
                  <li className={classes.topic}>
                    Avaliar a necessidade do uso de dispositivos de auxílio ou
                    adaptação dos talheres e prato, principalmente no caso de
                    tremores importantes ou seqüelas de AVE.{" "}
                  </li>
                  <li className={classes.topic}>
                    Sugerir a utilização de toalhas antiderrapantes ou pratos
                    com ventosas de borracha que se fixam à mesa.
                  </li>
                  <li className={classes.topic}>
                    Deixe os alimentos já picados em pequenos pedaços para
                    facilitar o manuseio.{" "}
                  </li>
                  <li className={classes.topic}>
                    Aumentar a independência e a participação do idoso durante
                    as refeições.{" "}
                  </li>
                  <li className={classes.topic}>
                    Utilizar os utensílios adequados à idade para não
                    infantilizá-lo.
                  </li>
                  <li className={classes.topic}>
                    Deixar disponível próximo ao idoso uma toalha para a limpeza
                    da boca.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.sarcopenia] && (
        <section>
          <div className={classes.title}>
            <span className={classes.txt}>MOBILIDADE</span>{" "}
            <span className={classes.txt}>Capacidade aeróbica e muscular</span>
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <span className={classes.txt}>
                    Você tem alguma das quatro condições abaixo relacionadas?
                  </span>
                  <li className={classes.topic}>
                    Perda de peso não intencional de 4,5 kg ou 5% do peso
                    corporal no último ano ou 6 kg nos últimos 6 meses ou 3 kg
                    no último mês?
                  </li>
                  <li className={classes.topic}> IMC menor que 22 kg/m2?</li>
                  <li className={classes.topic}>
                    {" "}
                    Circunferência da panturrilha &lt; 31 cm?
                  </li>
                  <li className={classes.topic}>
                    {" "}
                    Tempo gasto no teste de velocidade da marcha (4m) &gt; 5
                    segundos?
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  As orientações para os idosos com suspeita de sarcopenia
                  consistem no estímulo à atividade física** e utilização de uma
                  dieta rica em proteínas de alto valor biológico (binômio
                  alimentação-atividade fisica).
                </p>
                <p>
                  A prescrição de atividade física deve ser individualizada e
                  não necessita de avaliação clínica rigorosa. Recomenda-se o
                  início gradual e a progressão lenta da atividade física, para
                  aumentar a segurança e adesão. Não é imprescindível a
                  realização de teste ergométrico ou avaliação cardiológica
                  especializada, exceto na presença de evidências clínicas de
                  doença cardiovascular. Cuidado especial deve ser dado nos
                  idosos com doenças osteomusculares, como osteartrose, e nos
                  idosos com instabilidade postural, devido ao maior risco de
                  quedas. Nestes idosos, a atividade física deve ser orientada
                  por profissionais de saúde.
                </p>
                <a href="https://www.addhere.com.br/Intranet/Reports/IVCF/RptIVCF_QuestFinal_DezPassos.aspx?p=146&o=1136956&p=146&o=1136956">
                  (clicar aqui para ver o anexo 10 passos para uma alimentação
                  saudável).
                </a>
                <p>
                  Na presença de sarcopenia, recomenda-se uma dieta mais rica em
                  proteínas, ricas em aminoácidos essenciais e de cadeia
                  ramificada, como a leucina, isoleucina e valina. Os principais
                  alimentos ricos em leucina são carne, peixe, ovo, leite e
                  derivados. Recomenda-se a utilização destes alimentos nas três
                  principais refeições e, principalmente, após a atividade
                  física.
                </p>
                <p>
                  Sugerimos as seguintes recomendações para a dieta nos idosos:
                </p>
                <ul>
                  <li className={classes.topic}>
                    Seguir os 10 passos para uma alimentação saudável
                  </li>
                  <li className={classes.topic}>
                    Uma boa alimentação é fundamental para a qualidade de vida.
                  </li>
                  <li className={classes.topic}>
                    As refeições devem ser saborosas e devem respeitar os
                    hábitos de vida do idoso.
                  </li>
                  <li className={classes.topic}>
                    Não há nenhum alimento considerado proibido para todos os
                    idosos. Portanto, restrições alimentares devem
                  </li>
                  ser cuidadosas em idosos, pois alguns benefícios podem não
                  estar comprovados nesta faixa etária.
                  <li className={classes.topic}>
                    Estimular o apetite do idoso com uma refeição colorida,
                    diversificada, bem temperada com aroma agradável.
                  </li>
                  <li className={classes.topic}>
                    Evitar alimentos sem sal nenhum.
                  </li>
                  <li className={classes.topic}>
                    Realizar as refeições do idoso junto à família, a fim de
                    proporcionar a convivência social e a interação.
                  </li>
                  <li className={classes.topic}>
                    Realizar a refeição em um local calmo, tranqüilo, limpo e
                    arejado.
                  </li>
                  <li className={classes.topic}>Preferir alimentos frescos.</li>
                  <li className={classes.topic}>
                    Fazer entre 5 ou 6 refeições por dia
                  </li>
                  <li className={classes.topic}>
                    Deixar o alimento na frente do idoso para estimular o
                    processo de salivação.
                  </li>
                  <li className={classes.topic}>
                    Diversificar os alimentos todos os dias (suco, fruta,
                    gelatina, verduras, legumes, etc.).
                  </li>
                  <li className={classes.topic}>
                    Usar talheres e materiais apropriados.
                  </li>
                  <li className={classes.topic}>
                    Beber de 1,5 a 2,0 litros de líquido diariamente (chá,
                    leite, água, suco).
                  </li>
                  <li className={classes.topic}>
                    Aproximar o alimento das narinas para o idoso sentir o
                    cheiro do alimento.
                  </li>
                  <li className={classes.topic}>
                    Nos idosos acamados, manter a cabeceira elevada a 90°, se
                    possível, caso não seja possível retirar o idoso
                  </li>
                  do leito.
                  <li className={classes.topic}>
                    Manter o idoso assentado por um período mínimo de 30 minutos
                    após as refeições.
                  </li>
                  <li className={classes.topic}>
                    Utilizar espessante para modificar a consistência dos
                    alimentos, mas sempre com orientações do
                  </li>
                  profissional de saúde.
                  <li className={classes.topic}>
                    O idoso deve ser conscientizado sobre o momento da
                    alimentação e de suas dificuldades. Por exemplo lembrar
                  </li>
                  o idoso de mastigar e engolir o alimento.
                  <li className={classes.topic}>
                    Respeitar o tempo do idoso, dar a comida de forma lenta, não
                    encher muito a colher.
                  </li>
                  <li className={classes.topic}>
                    Orientar o cuidador a permanecer assentado ao lado do idoso.
                  </li>
                  <li className={classes.topic}>
                    Solicitar ao idoso que abra a boca após a deglutição e
                    verificar se existem resíduos de alimentos dentro
                  </li>
                  da cavidade oral. Se o idoso não deglutir os restos
                  alimentares que permaneceram na cavidade oral, o cuidador
                  deverá retirar o alimento na cavidade oral do idoso.
                  <li className={classes.topic}>
                    Evitar a ingestão de líquidos durante as refeições.
                  </li>
                  <li className={classes.topic}>
                    Ofertar a dieta na consistência adequada (livre, branda,
                    pastosa ou líquida).
                  </li>
                  <li className={classes.topic}>
                    Procurar um Fonoaudiólogo sempre que perceber que o idoso
                    apresenta dificuldade de deglutir.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.marcha] && (
        <section>
          <div className={classes.title}>
            <span className={classes.txt}>MOBILIDADE</span>{" "}
            <span className={classes.txt}>Marcha</span>
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    Você tem dificuldade para caminhar capaz de impedir a
                    realização de alguma atividade do cotidiano?
                  </li>
                  <li className={classes.topic}>
                    Você teve duas ou mais quedas no último ano?
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  Os idosos devem ser questionados, nas suas consultas
                  rotineiras com profissionais de saúde, sobre a ocorrência de
                  quedas, pelo menos uma vez ao ano. Condições capazes de
                  provocar as quedas devem ser identificadas, prevenidas e
                  tratadas, como o uso inadequado de medicamentos, a hipotensão
                  ortostática, a demência, a depressão, as alterações do
                  equilíbrio e da força muscular, que, aliadas a maior
                  prevalênciade osteoporose, aumentam significativamente o risco
                  de fraturas nesta faixa etária. Recomenda-se as seguintes
                  precauções em idosos com quedas e/ou instabilidade postural:
                </p>
                <ul>
                  <li className={classes.topic}>
                    Retirar tapetes, ou, se não for possível, substituir por
                    tapetes antiderrapantes.
                  </li>
                  <li className={classes.topic}>
                    Retirar móveis que obstruam a passagem, deixar o espaço
                    livre para movimentar-se.
                  </li>
                  <li className={classes.topic}>
                    Atentar para degraus, escadas, fios soltos e objetos
                    espalhados. Ao subir ou descer escadas ou rampas,
                  </li>
                  segure sempre no corrimão. As escadas e corredores devem ter
                  corrimão dos dois lados.
                  <li className={classes.topic}>
                    Destacar os degraus das escadas e colocar antiderrapante.
                  </li>
                  <li className={classes.topic}>
                    Utilizar armários e prateleiras em alturas mais próximas,
                    para evitar que o idoso fique na ponta dos pés
                  </li>
                  e/ou subir em bancos.
                  <li className={classes.topic}>
                    Elevar camas e assentos para facilitar assentar e levantar.
                    Porém, é importante que a pessoa sentada na
                  </li>
                  cadeira ou na beirada da cama apoie os pés no chão.
                  <li className={classes.topic}>
                    Os assentos não devem ser muito macios.
                  </li>
                  <li className={classes.topic}>
                    Dar preferência para cadeiras que tenham apoios para os
                    braços e para as costas.
                  </li>
                  <li className={classes.topic}>
                    Levantar-se devagar da cadeira ou da cama, para evitar
                    tonteira e desequilíbrio.
                  </li>
                  <li className={classes.topic}>
                    Se estiver deitado e for se levantar, primeiro assente-se,
                    aguarde um pouco e depois levante-se
                  </li>
                  calmamente.
                  <li className={classes.topic}>
                    Evitar o uso de cera no chão. Isso deixa o piso escorregadio
                    aumentando o risco para quedas.
                  </li>
                  <li className={classes.topic}>
                    Dar preferência a calçados fechados, confortáveis, com
                    solado de borracha, salto baixo e que não
                  </li>
                  escorreguem. Optar por solados com antiderrapante. Evitar
                  chinelos (“havaianas”), principalmente com meias.
                  <li className={classes.topic}>
                    Usar sandálias que tenham tiras de fixação no tornozelo e
                    velcros. Evitar calçados com a sola gasta.
                  </li>
                  <li className={classes.topic}>
                    Adaptar o ambiente com barras de apoio para a maior
                    segurança e independência durante a movimentação do
                  </li>
                  idoso.
                  <li className={classes.topic}>
                    Manter durante a noite sempre uma luz acesa no banheiro ou
                    corredor (luz de vigília ou sentinela).
                  </li>
                  <li className={classes.topic}>
                    Elevar vasos sanitários com os elevadores ou adaptadores de
                    vaso sanitários.
                  </li>
                  <li className={classes.topic}>
                    Manter pisos antiderrapantes e secos. Evite encerar a casa.
                    Evitar andar em áreas com piso úmido.
                  </li>
                  <li className={classes.topic}>
                    Utilizar a cadeira própria para banho, barras de apoio, piso
                    antiderrapante e deixar tudo que o idoso
                  </li>
                  precisa ao seu alcance. Não trancar a porta durante o banho.
                  <li className={classes.topic}>
                    Levar o idoso para fazer caminhadas estando sempre ao seu
                    lado. Isso ajuda a fortalecer os músculos.
                  </li>
                  <li className={classes.topic}>
                    Usar dispositivo para auxiliar a marcha (andador e bengala),
                    conforme orientação de profissional da saúde.
                  </li>
                  <li className={classes.topic}>
                    A altura da bengala deve ser adequada à estatura do
                    paciente. Bengalas mais altas ou muito baixas podem
                  </li>
                  aumentar o risco de quedas.
                  <li className={classes.topic}>
                    A ponteira da sua bengala ou do seu andador deve ser de
                    borracha e antiderrapante. Trocá-la sempre que
                  </li>
                  estiver gasta.
                  <li className={classes.topic}>
                    Aplicar compressas quentes ou banho quente mais demorado
                    para relaxar a musculatura, no caso de rigidez
                  </li>
                  corporal.
                  <li className={classes.topic}>
                    Orientar a necessidade de fisioterapia para auxiliar no
                    treino de força, orientar o uso de dispositivos de
                  </li>
                  auxílio à marcha (bengala, andador), treino de estratégias
                  posturais e treino funcional.
                  <li className={classes.topic}>
                    Estimular o idoso a realizar atividade física regular, de
                    acordo com sua preferência e funcionalidade,
                  </li>
                  para fortalecimento muscular e aumento da força.
                  <li className={classes.topic}>
                    Colocar o telefone em local acessível.
                  </li>
                  <li className={classes.topic}>
                    Utilizar sempre a faixa de pedestre.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.continencia] && (
        <section>
          <div className={classes.title}>
            <span className={classes.txt}>MOBILIDADE</span>{" "}
            <span className={classes.txt}>Continência esfincteriana</span>
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    Você perde urina ou fezes, sem querer, em algum momento?{" "}
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  O tratamento adequado da incontinência urinária ou fecal está
                  associado a melhora significativa em mais de 50% dos casos.
                  Por vezes é necessário o uso de medicamentos ou a realização
                  de intervenções cirúrgicas, além da fisioterapia
                  uro-ginecológica. Todavia, mesmo na ausência de intervenções
                  específicas, algumas orientações podem ser úteis:
                </p>
                <ul>
                  <li className={classes.topic}>
                    A restrição hídrica não deve ser recomendada, pois o risco
                    de desidratação é elevado nos idosos. Todavia, recomenda-se
                    evitar líquidos 3 horas antes de dormir e durante a noite,
                    para reduzir a noctúria (micção noturna).
                  </li>
                  <li className={classes.topic}>
                    Fazer a higiene íntima após todas as perdas urinárias, com
                    água e sabão.
                  </li>
                  <li className={classes.topic}>
                    Usar roupas fáceis de tirar (velcro, elástico, saia,
                    vestido).
                  </li>
                  <li className={classes.topic}>
                    Esvaziar a bexiga antes de sair de casa, mesmo que não
                    esteja sentindo vontade de ir ao banheiro.
                  </li>
                  <li className={classes.topic}>
                    Inclinar-se para frente, depois de urinar, quando sentado no
                    sanitário e comprimir o baixo abdome para
                  </li>
                  esvaziar bem a bexiga.
                  <li className={classes.topic}>
                    Evitar bebidas e alimentos que irritam a bexiga como café,
                    chás (preto e mate), refrigerantes a base de
                  </li>
                  cola e bebidas com gás, bebidas alcoólicas, temperos fortes na
                  comida e chocolate.
                  <li className={classes.topic}>
                    Criar o hábito de ir ao banheiro de 3/3 h, se necessário, de
                    2/2 h.
                  </li>
                  <li className={classes.topic}>
                    Estimular a ida da paciente ao banheiro antes de ir para a
                    cama dormir.
                  </li>
                  <li className={classes.topic}>
                    Orientar as mulheres a evitar urinar em pé.
                  </li>
                  <li className={classes.topic}>
                    Manter sempre uma luz acesa (corredor ou no banheiro)
                    durante a noite para facilitar a ida ao banheiro.
                  </li>
                  <li className={classes.topic}>
                    Garantir que o banheiro seja de acesso fácil (retirar
                    móveis, objetos, tapetes).
                  </li>
                  <li className={classes.topic}>
                    Deixar perto do leito ou da cadeira: comadre, marreco ou um
                    pinico (a idosa ao usar o pinico, apoia-lo em uma cadeira,
                    evitando agachar).
                  </li>
                  <li className={classes.topic}>
                    Sugerir para pequena perda de urina o uso de absorventes
                    masculinos ou femininos.
                  </li>
                  <li className={classes.topic}>
                    Sugerir para grandes volumes o uso de fraldas e o coletor
                    urinário para homens.
                  </li>
                </ul>
                <div className={classes.strong}>
                  Realizar exercícios de Kegel:
                </div>
                <ul>
                  <li className={classes.topic}>
                    <div className={classes.strong}>
                      Exercícios de contração rápida:
                    </div>{" "}
                    Contrair o ânus como se fosse segurar o “pum” e a urina e
                    soltar. Realizar 10 vezes e descansar, repetir 10 vezes
                    deitado de barriga para cima, de um lado, do outro, sentado
                    e de pé.
                  </li>
                  <li className={classes.topic}>
                    <div className={classes.strong}>
                      Exercícios de contração lenta:
                    </div>{" "}
                    Contrair o ânus como se fosse segurar “pum” e a urina e
                    contar 10 segundos e descansar 12 segundos repetir 10 vezes.
                    Deitado de barriga para cima, de um lado, do outro, sentado
                    e de pé.
                  </li>
                  <li className={classes.topic}>
                    Apertar um travesseiro entre os joelhos. Realizar as
                    contrações rápidas e as lentas.
                  </li>
                  <li className={classes.topic}>
                    Não se deve fazer estes exercícios quando estiver urinando.
                  </li>
                </ul>

                <div className={classes.strong}>Paciente em uso de fralda:</div>
                <ul>
                  <li className={classes.topic}>
                    Verificar a cada duas horas se a pessoa idosa está molhada,
                    e, se necessário, trocar fralda, roupas e roupa de cama.
                  </li>
                  <li className={classes.topic}>
                    Fazer a higiene íntima após todas as perdas urinárias e
                    fecais, com água e sabão.
                  </li>
                  <li className={classes.topic}>
                    Observar a presença de dermatites na região da fralda. Caso
                    presente, procurar um profissional de saúde.
                  </li>
                  <li className={classes.topic}>
                    Usar creme barreira de sua preferência em região genital.
                  </li>
                  <li className={classes.topic}>
                    Observar sinais de infecção urinaria, como: alteração de
                    cor, cheiro ou (se o idoso está ingerindo a quantidade de
                    líquido recomendada).
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.visao] && (
        <section>
          <div className={classes.title}>
            <span className={classes.txt}>COMUNICAÇÃO</span>{" "}
            <span className={classes.txt}>Visão</span>
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    Você tem problemas de visão capazes de impedir a realização
                    de alguma atividade do cotidiano?
                    <br />
                    OBS: É permitido o uso de óculos ou lentes de contato
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  A avaliação da pessoa idosa deve incluir a avaliação visual, a
                  fim de identificar déficits que justifiquem exame mais
                  detalhado por profissional oftalmologista. Entretanto, em
                  alguns casos há um comprometimento tão avançado que lentes
                  corretivas habituais já não podem ser empregadas. Todavia,
                  pode haver ainda uma visão residual ou visão subnormal. Nesse
                  momento, deve ser discutida a indicação de reabilitação, que
                  visa estimular ao máximo a visão residual, através de
                  estratégias compensatórias e dispositivos de tecnologia
                  assistiva ópticos e não-ópticos. O objetivo é restaurar e
                  manter a capacidade funcional e a independência. Todo esse
                  processo é complexo e exige esforço e conhecimento de uma
                  equipe multidisciplinar. Através de avaliação do idoso em
                  atividade, busca-se identificar as limitações impostas pelo
                  déficit visual e quais são os facilitadores e barreiras que
                  interferem na participação, segurança e independência. Dessa
                  forma, objetiva-se modificar a tarefa e/ou o meio ambiente,
                  para minimizar ou eliminar essas limitações. Sendo assim, o
                  foco do tratamento está na redução do impacto da perda visual,
                  promovendo a autonomia e participação nas atividades
                  avaliadas. Com relação à avaliação ambiental, esta deve se
                  atentar para a iluminação e uso de cores e contrastes que
                  podem facilitar a segurança e a participação independente nas
                  atividades diárias. Independentemente do tipo de intervenção,
                  são ensinadas e treinadas estratégias de utilização de
                  iluminação adequada, contraste de cores, tamanhos, adaptações
                  e como usar as funções sensoriais e cognitivas para lidar com
                  a deficiência visual no dia-a-dia. Além disso, sabe-se que a
                  deficiência visual aumenta o risco de quedas. Assim, o
                  ambiente deve ser otimizado, removendo perigos físicos e
                  outros fatores predisponentes às quedas. Algumas orientações
                  podem ser úteis nos idosos com perda visual:
                </p>
                <ul>
                  <li className={classes.topic}>
                    Manter o ambiente sempre iluminado e sinalizado.{" "}
                  </li>
                  <li className={classes.topic}>
                    Manter sempre uma luz acesa durante a noite (corredor,
                    banheiro).
                  </li>
                  <li className={classes.topic}>
                    Adaptar o banheiro com barras de apoio, piso antiderrapante.{" "}
                  </li>
                  <li className={classes.topic}>
                    Incentivar o uso do urinol (marreco, comadre).
                  </li>
                  <li className={classes.topic}>
                    Evitar obstáculos nos locais onde o idoso circula, tais
                    como: excesso de móveis, objetos pelo chão, tapetes, pisos
                    escorregadios, ausência de barras de apoio, etc.
                  </li>
                  <li className={classes.topic}>
                    Retirar os tapetes ou colocar antiderrapante em baixo.
                  </li>
                  <li className={classes.topic}>
                    Sinalizar os degraus do início e do final das escadas com
                    fita antiderrapante e de cor contrastante. As escadas devem
                    ter corrimão.
                  </li>
                  <li className={classes.topic}>
                    Manter calendário, relógio e telefone com números grandes.
                  </li>
                  <li className={classes.topic}>
                    Manter os objetos sempre no mesmo lugar, evitando mudanças
                    desnecessárias.
                  </li>
                  <li className={classes.topic}>
                    Incentivar o uso de óculos, se for o caso.Verificar a
                    necessidade do uso de óculos.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.audicao] && (
        <section>
          <div className={classes.title}>
            <span className={classes.txt}>COMUNICAÇÃO</span>{" "}
            <span className={classes.txt}>Audição</span>
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  <li className={classes.topic}>
                    Você tem problemas de audição capazes de impedir a
                    realização de alguma atividade do cotidiano?
                    <br />
                    OBS: É permitido o uso de aparelhos de audição.
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  Os aparelhos auditivos podem ajudar a corrigir a entrada
                  periférica do som. Nos casos indicados, o aparelho auditivo
                  deve ser fornecido, uma vez que a reabilitação auditiva pode
                  contribuir para a independência e melhorar a qualidade de
                  vida. Vários ensaios clínicos randomizados atuais demonstraram
                  que a amplificação auditiva pode reverter muitos dos efeitos
                  negativos da perda auditiva, contribuindo para o melhor
                  funcionamento nos sistemas funcionais de comunicação, cognição
                  e humor e, consequentemente, melhora emocional e social do
                  indivíduo. Algumas orientações devem ser dadas ao idoso com
                  perda auditiva:
                </p>
                <ul>
                  <li className={classes.topic}>
                    Fale devagar e articule claramente;
                  </li>
                  <li className={classes.topic}>
                    Posicionar-se de frente para o idoso ao iniciar uma
                    conversa. O contato visual é muito importante.
                  </li>
                  <li className={classes.topic}>
                    Procure conversar em locais iluminados;
                  </li>
                  <li className={classes.topic}>
                    Não exagere o movimento de lábios;
                  </li>
                  <li className={classes.topic}>
                    Repita a mensagem para compensar déficit de memória e
                    facilitar a compreensão e aprendizado;
                  </li>
                  <li className={classes.topic}>
                    Altere a sentença se não for compreendido e certifique-se de
                    que o foi;
                  </li>
                  <li className={classes.topic}>
                    Use gestos indicativos e representativos para complementar a
                    mensagem;
                  </li>
                  <li className={classes.topic}>
                    Procure local silencioso para conversar com a pessoa;
                  </li>
                  <li className={classes.topic}>
                    Garanta sua atenção, falando próximo à pessoa;
                  </li>
                  <li className={classes.topic}>
                    Não fale em voz alta, pois o grito não favorece a
                    comunicação, além de aumentar a tensão entre os falantes;
                  </li>
                  <li className={classes.topic}>
                    Evitar conversar em ambientes muito barulhentos e sempre que
                    possível reduza as fontes de ruído (rádio, TV, etc.). Quando
                    existir mais de duas pessoas falando certamente haverá
                    dificuldade na conversação;
                  </li>
                  <li className={classes.topic}>
                    Incentivar o idoso a fazer lavagem de ouvido, se indicação
                    médica, pois o acúmulo de cerúmen (cera) pode ocasionar um
                    leve déficit auditivo;
                  </li>
                  <li className={classes.topic}>
                    Evitar o uso de cotonete para limpeza do ouvido, pois a
                    haste flexível do cotonete pode empurrar o cerúmen para
                    dentro do ouvido;
                  </li>
                  <li className={classes.topic}>
                    Tocar o idoso suavemente para chamar sua atenção;
                  </li>
                  <li className={classes.topic}>
                    Falar pausadamente, respeitando as pausas e as variações de
                    entonação da fala e evitar exgeros quanto aos gestos;
                  </li>
                  <li className={classes.topic}>
                    Evitar frases compridas e difíceis. Utilize sempre palavras
                    simples, claras e afirmativas e familiares. Se necessário
                    use gestos convenientes;
                  </li>
                  <li className={classes.topic}>Ser amável e atencioso;</li>
                  <li className={classes.topic}>
                    Ouvir o idoso com paciência, respeitando seu ritmo de
                    resposta;
                  </li>
                  <li className={classes.topic}>
                    Evitar mudança de assunto sem avisar o idoso;
                  </li>
                  <li className={classes.topic}>
                    Repetir a o que você queria dizer com palavras mais simples,
                    se houver necessidade;
                  </li>
                  <li className={classes.topic}>
                    Conhecer o vocabulário utilizado pelo idoso.
                  </li>
                </ul>
                <p>
                  Além disso, o uso de dispositivos de escuta assistiva
                  (amplificadores de telefone, fones de ouvido para televisão,
                  telefones iluminados, sistemas de alerta de campainha,
                  relógios vibratórios) devem ser estimulados, porque estes
                  dispositivos auxiliares podem aprimorar as habilidades
                  comunicativas e a segurança do indivíduo com perda auditiva
                  profunda.
                </p>
              </td>
            </tr>
          </table>
        </section>
      )}

      {checks[ENIVCFDISABILITY.polifarmacia] && (
        <section>
          <div className={classes.title}>
            <span className={classes.txt}>MORBIDADE MÚLTIPLA</span>{" "}
            <span className={classes.txt}>Polifarmácia</span>
          </div>
          <table className={classes.tb}>
            <tr className={classes.row}>
              <th className={classes.clmSubTitle}>
                Pergunta em que o idoso pontuou
              </th>
              <th className={classes.clmSubTitle}>
                Orientações para quem pontuar na pergunta
              </th>
            </tr>
            <tr className={classes.row}>
              <td className={`${classes.clmTitle} ${classes.vaTop}`}>
                <ul>
                  Você tem alguma das três condições abaixo relacionadas?
                  <li className={classes.topic}>
                    Cinco ou mais doenças crônicas?
                  </li>
                  <li className={classes.topic}>
                    {" "}
                    Uso regular de cinco ou mais medicamentos diferentes, todo
                    dia?
                  </li>
                  <li className={classes.topic}>
                    {" "}
                    Internação recente, nos últimos 6 meses?
                  </li>
                </ul>
              </td>
              <td className={classes.cell}>
                <p>
                  <div className={classes.strong}>
                    Orientações para o idoso com polifarmácia
                  </div>
                </p>
                <ul>
                  <li className={classes.topic}>
                    Consulta a lista de medicamentos potencialmente
                    inapropriados***;
                  </li>
                  <li className={classes.topic}>
                    Consultar a lista de medicamentos de alta vigilância****;
                  </li>
                  <li className={classes.topic}>
                    Lavar as mãos antes de manusear qualquer medicamento;
                  </li>
                  <li className={classes.topic}>
                    Utilizar técnicas para lembrar a tomar os medicamentos
                    (medicamentos em lugar visível, despertador, calendário -
                    folhinha);
                  </li>
                  <li className={classes.topic}>
                    Colocar os medicamentos que não utiliza em um local
                    diferente dos que utiliza;
                  </li>
                  <li className={classes.topic}>
                    Manter os medicamentos em lugares seguros, fora do alcance
                    de crianças e animais;
                  </li>
                  <li className={classes.topic}>
                    Evite guardar com produtos de limpeza, perfumaria e
                    alimentos;
                  </li>
                  <li className={classes.topic}>
                    Guardar na geladeira apenas os medicamentos líquidos que
                    você recebeu orientação do médico ou farmacêutico. Não
                    guardar medicamentos na porta da geladeira ou próximo ao
                    congelador. A insulina, por exemplo, perde o efeito se for
                    congelada;
                  </li>
                  <li className={classes.topic}>
                    Manter os medicamentos nas embalagens originais para
                    facilitar sua identificação e controle da validade;
                  </li>
                  <li className={classes.topic}>
                    Armazenar os medicamentos de forma individualizada para
                    evitar erros e trocas com medicamentos de outras pessoas;
                  </li>
                  <li className={classes.topic}>
                    Usar regularmente os medicamentos nos horários indicados na
                    receita médica. Alguns remédios precisam ser tomados em
                    jejum, outros após as refeições ou à noite, antes de dormir.
                    Temos também remédios que podem interagir com alimentos e
                    precisam ser tomados em horários distantes das refeições;
                  </li>
                  <li className={classes.topic}>
                    Administrar os comprimidos sempre com água. Existem
                    medicamentos que podem ter menos efeito se tomados com
                    leite, sucos ou outros líquidos;
                  </li>
                  <li className={classes.topic}>
                    Permanecer próximo do idoso até que ele tome os
                    medicamentos. Certifique-se que ele realmente tomou os
                    remédios;
                  </li>
                  <li className={classes.topic}>
                    Utilizar métodos alternativos para o uso correto dos
                    medicamentos em pacientes com problemas visuais ou mentais;
                  </li>
                  <li className={classes.topic}>
                    Não aumentar, diminuir, substituir ou retirar medicamentos
                    sem o conhecimento do médico;
                  </li>
                  <li className={classes.topic}>
                    Manter a última receita médica junto com os medicamentos;
                  </li>
                  <li className={classes.topic}>
                    Observe frequentemente a data de validade e não tome
                    medicamentos vencidos;
                  </li>
                  <li className={classes.topic}>
                    Sempre levar todas as receitas, exames e medicamentos em uso
                    de todos os atendimentos médicos. Informar ao médico sobre o
                    uso de chás ou plantas medicinais.
                  </li>
                </ul>
                <p>
                  <div className={classes.strong}>
                    Orientações para o idoso com polipatologia
                  </div>
                </p>
                <ul>
                  <li className={classes.topic}>
                    Organizar todos os relatórios médicos, exames, internações,
                    cirurgias e resultado de todo atendimento em hospital,
                    pronto atendimento, clínicas, etc, e deixar em uma pasta de
                    fácil acesso. Levar todos estes documentos a toda consulta
                    médica;
                  </li>
                  <li className={classes.topic}>
                    Ter vários médicos especialistas, sem um diálogo ou
                    integração entre eles, representa um perigo para a saúde;
                  </li>
                  <li className={classes.topic}>
                    Evitar consultar com vários especialistas simultaneamente,
                    exceto quando indicado pelo seu médico de referência,
                    responsável pela centralização de todas as decisões e
                    realização de novas intervenções. O médico de referência
                    deve estar ciente de todas as mudanças no tratamento para se
                    evitar erros de prescrição;
                  </li>
                  <li className={classes.topic}>
                    Orientar que alguns medicamentos podem ser úteis para uma
                    determinada doença, mas podem prejudicar o tratamento de
                    outras doenças. Esta interação droga-doença deve ser
                    discutida em toda consulta médica;
                  </li>
                  <li className={classes.topic}>
                    Exames laboratoriais só devem ser realizados quando forem
                    estritamente necessários;
                  </li>
                  <li className={classes.topic}>
                    Orientar que o tratamento de algumas doenças deve ser
                    individualizado. Mesmas doenças podem ter tratamento
                    diferentes.
                  </li>
                </ul>
                <p>
                  <div className={classes.strong}>
                    Orientações para o idoso com internação hospitalar recente
                  </div>
                </p>
                <ul>
                  <li className={classes.topic}>
                    Orientar o idoso e sua família que toda internação
                    hospitalar está associada a risco de declínio funcional,
                    independente da causa;
                  </li>
                  <li className={classes.topic}>
                    Esclarecer que a imobilidade, mesmo que por pouco tempo,
                    está associada a hipotensão ortostática e perda da massa
                    muscular e óssea;{" "}
                  </li>
                  <li className={classes.topic}>
                    Toda nova prescrição, suspensão, substituição ou mudança de
                    dose de medicamentos deve ser imediatamente comunicada ao
                    médico de referência;{" "}
                  </li>
                  <li className={classes.topic}>
                    Em caso de internação hospitalar, o médico de referência
                    deve ser comunicado em 48h, no máximo, para o fornecimento
                    de informações da história clínica e avaliações
                    anteriormente realizadas, medicações prescritas e outros
                    aspectos da saúde do idoso;
                  </li>
                  <li className={classes.topic}>
                    Orientar que, após a alta hospitalar, uma reavaliação com o
                    médico de referência deve ser realizada em 6 semanas, no
                    máximo.
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </section>
      )}
    </>
  );
};

export default UiSnapIvCarePlan;

// checks: { [key: string]: boolean };

const ENIVCFDISABILITY = EnSnapIvDisability;

const getChecks = (
  disabilities: IDisability[]
): { [key: string]: boolean } | null => {
  try {
    return disabilities.reduce((item: { [key: string]: boolean }, m) => {
      item[m.enSnapIvDisability] = m.checked;
      return item;
    }, {});
  } catch (error) {
    console.log("getChecks", error.message);
  }
  return null;
};

const isVulnerabilityChecked = (
  vulnerability: IVulnerability,
  score: number
): boolean => {
  try {
    return (
      ((vulnerability?.minScore || 0) <= score &&
        (vulnerability?.maxScore || 40) >= score) ||
      (vulnerability?.maxScore === null &&
        score >= (vulnerability?.minScore || 0))
    );
  } catch (error) {
    console.log("isVulnerabilityChecked", error.message);
  }
  return false;
};

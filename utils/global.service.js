/* @classdesc Biblioteca de funções globais.
 * OBS: Não será possível utilizar o método de Log nessa classe, pois, o mesmo depende da GlobalService.
 */
export class GlobalService {
  

  constructor() { 
    // Constants:
    this.GE_NOT_INFORMED = 'NÃO INFORMADO';
    this.GE_EMPTY = '#VAZIO#';
    this.EnTypedValue = { 'Date': 'Date', 'Real': 'Real', 'Float': 'Float', 'Dollar': 'Dollar', 'Null': 'Null', 'None': 'None', 'Percent': 'Percent', 'Integer': 'Integer' };
    this.exprConjuncao = /\s(de|do|o|a|e|dos|da|das|de|para|se)\s/gi;

    this.arrayOperatorMathSimbol = new Array('+', '-', '/', '*');
    this.arrayMathSimbol = new Array('+', '-', '%', '/', '*', '=', ' ', '(', ')', '[', ']', ',', '.', '{', '}');
    this.arrayOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.arrayOfMonthsPtBr = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
    // url encoding
    this.arrayEncodingCharCode = new Array('%23');
    this.arrayEncodingChar = new Array('#');

    this.arrayEncodingCharAll = new Array(
      '%',
      ' ',
      '!',
      '"',
      '#',
      '$',
      '&',
      // tslint:disable-next-line: quotemark
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/'
    );
    this.arrayEncodingCharCodeAll = new Array(
      '%25',
      '%20',
      '%21',
      '%22',
      '%23',
      '%24',
      '%26',
      '%27',
      '%28',
      '%29',
      '%2A',
      '%2B',
      '%2C',
      '%2D',
      '%2E',
      '%2F'
    );

    this.EMPTY_CHAR = '#VAZIO#';
    this.NOITEM_TEXT = 'Não informado';
    this.NAO_RECALCULAR_ITEM = '#CARREGANDO#';
    // Variável utilizada para impedir que o retorno de uma
    // função de servidor que atualiza o valor assincro substitua
    // também no retorno sincrono.

    this.GE_EMPTY_STRINGS = [this.EMPTY_CHAR, this.NAO_RECALCULAR_ITEM, this.NOITEM_TEXT, 'null', 'undefined'];

    this.replace = [
      { de: 'Á', para: 'A' },
      { de: 'É', para: 'E' },
      { de: 'Í', para: 'I' },
      { de: 'Ó', para: 'O' },
      { de: 'Ú', para: 'U' },
      { de: 'À', para: 'A' },
      { de: 'È', para: 'E' },
      { de: 'Ì', para: 'I' },
      { de: 'Ò', para: 'O' },
      { de: 'Ù', para: 'U' },
      { de: 'Ä', para: 'A' },
      { de: 'Ë', para: 'E' },
      { de: 'Ï', para: 'I' },
      { de: 'Ö', para: 'O' },
      { de: 'Ü', para: 'U' },
      { de: 'Ã', para: 'A' },
      { de: 'Õ', para: 'O' },
      { de: 'Â', para: 'A' },
      { de: 'Ê', para: 'E' },
      { de: 'Î', para: 'I' },
      { de: 'Ô', para: 'O' },
      { de: 'Û', para: 'U' },
      { de: 'Ç', para: 'C' }
    ];

    // Constants:
    this.arrayOfMonthsAbrevPtBr = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    this.arrayOfWeekDays = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado'
    ];

    this.arrayOfWeekDaysAbrev = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    this.arrayOfWeekDaysAbrevMin = ['Do', 'Sg', 'Te', 'Qa', 'Qi', 'Sx', 'Sa'];
    this.genderAbrev = ['M', 'F'];
    this.gender = ['Masculino', 'Feminino'];
    this.stateAbrev = [
      'AC',
      'AL',
      'AM',
      'AP',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MG',
      'MS',
      'MT',
      'PA',
      'PB',
      'PE',
      'PI',
      'PR',
      'RJ',
      'RN',
      'RO',
      'RR',
      'RS',
      'SC',
      'SE',
      'SP',
      'TO'
    ];
    this.state = [
      'Acre',
      'Alagoas',
      'Amazonas',
      'Amapá',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Minas Gerais',
      'Mato Grosso do Sul',
      'Mato Grosso',
      'Pará',
      'Paraíba',
      'Pernambuco',
      'Piauí',
      'Paraná',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rondônia',
      'Roraima',
      'Rio Grande do Sul',
      'Santa Catarina',
      'Sergipe',
      'São Paulo',
      'Tocantins'
    ];

    // names
    this.namesDoctorFiction = [
      'Dra.Thirteen',
      'Dra.Ellie Bartowski',
      'Dra.Meredith Grey',
      'Dra.Elliot Reid',
      'Dra.Sara Tancredi',
      'Dr.Carlisle Cullen',
      'Dra.Izzie Stevens',
      'Dra.Juliet Burke',
      'Dr.Patch Adams',
      'Dr.Derek Shepherd',
      'Dr.Jack Shephard',
      'Dra.Alisson Cameron',
      'Dr.Drake Ramoray',
      'Dr.Al Robbins',
      'Dr.Albieri'
    ];

    // 		let caracterInvalido:Array = ["/", "<", ">"];
    this.caracterInvalido = ['</', '<'];
    // 		let caracterSubstituto:Array = ["-", " menor que ", " maior que "];
    this.caracterSubstituto = ['/', ' '];

    this.regexEntreAspas = /("[\w\s,!@#$%ˆ&*()-_+=[\]\\|;:'/?.>,<{}]*") /gi;

    this.testExpressions = [
      [/(dd\/mm\/yyyy hh:mm:ss)/i, this.func_ddmmyyyyhhmmss],
      [/(dd\/mm\/yyyy hh:mm)/i, this.func_ddmmyyyyhhmm],
      [/(dd\/mm\/yyyy)/i, this.func_ddmmyyyy],
      [/(dd\/mm)/i, this.func_ddmm],
      [/(mm\/yyyy)/i, this.func_mmyyyy],
      [/(hh:mm:ss)/i, this.func_hhmmss],
      [/(hh:mm)/i, this.func_hhmm],
      [/(mm:ss)/i, this.func_mmss],
      [/(D)/, this.func_D],
      [/(d)/, this.func_d],
      [/(M3)/, this.func_M3],
      [/(M)/, this.func_M],
      [/(m)/, this.func_m],
      [/(y)/i, this.func_y],
      [/(h)/i, this.func_h],
      [/(mm)/i, this.func_mm],
      [/(s)/i, this.func_s],
      [/(w)/i, this.func_w]
    ];

    this.ASCII_START = 0;
    this.ASCII__EXTENDED_START = 128;
    this.ASCII_END = 167;
    this.ASCII_EXTENDED_END = 255;
    this.ASCII_SPECIAL = [8226]; // 8226 • (bullet do Word)
    this.ASCII_SPECIAL_REPLACE = ['- '];
    this.forceMobile = true;
  }

  // tslint:disable-next-line: member-ordering
  /* Checa se o dispositivo atual é móvel */
  isMobile() {
    // var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    return this.forceMobile && true;
  }

  isAndroid() {
    const isAndroid = navigator?.userAgent?.toLowerCase().match(/android/i) !== null;
    return isAndroid;
  }

  /*
   * Remove o último caracter de uma string (não altera a string apenas retorna outra sem o caracter)
   * @param _string
   * @return
   *
   */
  RemoveLastChar(str) {
    try {
      return str.substring(0, str.length - 1);
    } catch (error) {
      console.log(this.constructor.name, 'RemoveLastChar', error.message);
    }
    return str;
  }

  /* Substitui a última ocorrência encontrada do _textToSearch por _textToReplace. */
  replaceLast(originalText, textToSearch, textToReplace) {
    try {
      const a = originalText.split('');
      a[originalText.lastIndexOf(textToSearch)] = textToReplace;
      return a.join('');
    } catch (error) {
      console.log(this.constructor.name, 'replaceLast', error.message);
    }
    return originalText;
  }

  /* Remove a última ocorrência encontrada do _textToSearch. */
  removeLastOcurrence(originalText, textToSearch) {
    try {
      return this.replaceLast(originalText, textToSearch, '');
    } catch (error) {
      console.log(this.constructor.name, 'replaceLast', error.message);
    }
    return originalText;
  }

  /*@method RemoveFirstChar
   * Retorna uma string com o primeiro caracter da _string fornecida removido.
   */
  RemoveFirstChar(str) {
    try {
      return str.substring(1);
    } catch (error) {
      console.log(this.constructor.name, 'RemoveFirstChar', error.message);
    }
  }

  // Acrescenta aspas duplas
  Quote(str) {
    try {
      return '"' + str + '"';
    } catch (error) {
      console.log(this.constructor.name, 'Quote', error.message);
    }
  }

  /*
   * Retorna a url codificada para ser possível acessar
   * @param _url
   * @return
   *
   */
  UrlEncode(url) {
    try {
      for (let i = 0, max = this.arrayEncodingChar.length; i < max; i++) {
        url = this.ReplaceAll(url, this.arrayEncodingChar[i], this.arrayEncodingCharCode[i]);
      }
      return url;
    } catch (error) {
      console.log(this.constructor.name, 'UrlEncode', error.message);
    }
  }
  UrlEncodeAll(url) {
    try {
      for (let i = 0, max = this.arrayEncodingCharAll.length; i < max; i++) {
        url = this.ReplaceAll(url, this.arrayEncodingCharAll[i], this.arrayEncodingCharCodeAll[i]);
      }
      return url;
    } catch (error) {
      console.log(this.constructor.name, 'UrlEncodeAll', error.message);
    }
  }

  /* Join different parts of an url join them with "/".
  * It will filter removing all empty parts.
  */
 urlJoin(parts) {
    try {
      // const protocol = parts.find(f => f.startsWith('https://')) ? 'https://' : 'http://';
      // parts[0] = parts[0].replace(protocol, '');
      // let url = parts
      //   .reduce((a, b) => a.concat(b.split('/')), [])
      //   .filter(f => !this.isNullOrEmpty(f))
      //   .join('/');
      // // FIXME: Por algum motivo na substituição de variáveis # está se tornando V. Necessário retornar pois isso
      // // é o que evita problemas com o roteamento app angular (SPA)
      // url = url.replace('/V/', '/#/');
      // return `${protocol}${url}`;
      return this.combineURLs(parts[0], parts.slice(1).join('/'));
    } catch (error) {
      console.log(this.constructor.name, 'urlJoin', error.message);
    }
    return parts.join('/');
  }

  combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  }

  concatAndResolveUrl(url, concat) {
    const url1 = url.split('/');
    const url2 = concat.split('/');
    const url3 = [];
    for (let i = 0, l = url1.length; i < l; i++) {
      if (url1[i] === '..') {
        url3.pop();
      } else if (url1[i] === '.') {
        continue;
      } else {
        url3.push(url1[i]);
      }
    }
    for (let i = 0, l = url2.length; i < l; i++) {
      if (url2[i] === '..') {
        url3.pop();
      } else if (url2[i] === '.') {
        continue;
      } else {
        url3.push(url2[i]);
      }
    }
    return url3.join('/');
  }

  /*
   * Procura o número existente de caracteres em determinada string
   * Atenção: e CASE SENSITIVE, ou seja a é diferente de A
   * @param _str
   * @param _caracter
   * @return
   *
   */
  ContarNumeroDoCaracteresNaString(str, caracter) {
    try {
      const numChars = str.length;
      let contador = 0;
      for (let i = 0; i < numChars; i++) {
        const item = str.charAt(i);
        if (item === caracter) {
          contador++;
        }
      }
      return contador;
    } catch (error) {
      console.log(this.constructor.name, 'ContarNumeroDoCarateresNaString', error.message);
    }
  }

  // Checa se é um número
  isNumeric(n) {
    try {
      return !isNaN(parseFloat(n)) && isFinite(n);
    } catch (error) { }
    return false;
  }

  // Se não for um número, acrescentará aspas.
  quoteIfIsNaN(str) {
    try {
      if (this.IsNullOrEmpty(str)) {
        return '\'\'';
      } else if (this.isNumeric(str)) {
        return str;
      } else {
        return this.AcrescentarAspas(str);
      }
    } catch (error) {
      console.log(this.constructor.name, 'quoteIfIsNaN', error.message);
    }
  }

  /*
   * Checa se TODOS os caracteres da _formula são ou um operador matemático, ou um número.
   * Para considerar como válida a existencia do simbolo # que é usado para as variáveis do GE.
   * @param _formula
   * @return
   *
   */
  IsNumericOrMathSimbol(formula, includeVarSeparator = false) {
    try {
      const numChars = formula.length;
      for (let i = 0; i < numChars; i++) {
        const item = formula.charAt(i);
        if (includeVarSeparator) {
          this.arrayMathSimbol.push('#');
        }
        if (
          this.arrayMathSimbol.indexOf(item) < 0 && // Não é um operador matemático
          this.arrayOfNumbers.indexOf(item) < 0
        ) {
          // Nem um número
          return false;
        }
      }
      return true;
    } catch (error) {
      console.log(this.constructor.name, 'IsNumericOrMathSimbol', error.message);
    }
  }

  /* Checa se tem pelo menos um símbolo matemático, o que é necessário para que seja considerado um cálculo. */
  hasMathSymbol(formula) {
    try {
      let has = false;
      this.arrayOperatorMathSimbol.every((e) => {
        if (formula.includes(e)) {
          has = true;
          return false;
        } else {
          return true;
        }
      });
      return has;
    } catch (error) {
      console.log(this.constructor.name, 'hasMathSymbol', error.message);
    }
    return false;
  }

  /* Checa se o objeto é um valor ou expressão booleana. */
  isBoolean(obj) {
    try {
      return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    } catch (error) {
      console.log(this.constructor.name, 'isBoolean', error.message);
    }
    return false;
  }

  /* Cria um hash a partir de uma string. */
  hashFromString(str) {
    try {
      let hash = 0;
      let i;
      let chr;
      if (str.length === 0) {
        return hash;
      }

      for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    } catch (error) {
      console.log(this.constructor.name, 'hashFromString', error.message);
    }
    return -1;
  }

  /*
   *Checa se o array é nulo ou tem zero elementos
   * @param _array
   * @return
   *
   */
  IsArrayNullOrEmpty(array) {
    try {
      if (array == null) {
        return true;
      } else {
        return array.length <= 0;
      }
    } catch (error) {
      console.log(this.constructor.name, 'IsArrayNullOrEmpty', error.message);
    }
  }

  /*Se for um único item, ou se já for um array, retornará um array.
   * Útil quando se deseja garantir que o retorno é um array, mas às vezes apresenta único elemento ou vazio.
   */
  alwaysReturnArray(itemOuArray) {
    try {
      return [].concat(itemOuArray || []);
    } catch (error) {
      console.log(this.constructor.name, 'alwaysReturnArray', error.message);
    }
    return [];
  }

  /* Checa se um objeto é do tipo Array. */
  isArray(obj) {
    try {
      if (!Array.isArray) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      }
      return obj.isArray;
    } catch (error) {
      console.log(this.constructor.name, 'isArray', error.message);
    }
    return false;
  }

  Distinct(array) {
    try {
      array.sort();
      for (let i = array.length - 1; i > 0; --i) {
        if (array[i] === array[i - 1]) {
          array.splice(i, 1);
        }
      }
    } catch (error) { }
    return array;
  }

  /** Return just the distinct objects comparing a given property. */
  distinctBy(lst, propName) {
    try {
      return lst.reduce((a, b) => {
        if (a.findIndex(f => this.isEqual(f[propName], b[propName])) < 0) {
          a.push(b);
        }
        return a;
      }, []);
    } catch (error) {
      console.log(this.constructor.name, 'distinctBy', error.message);
    }
    return null;
  }

  /*
   * Checa se a tecla é letra ou número (alfanumérica)
   * @param _keyCode
   * @return
   *
   */
  IsKeyAlphanumeric(keyCode) {
    try {
      return keyCode >= 48 && keyCode <= 90;
    } catch (error) {
      console.log(this.constructor.name, 'IsKeyAlphanumeric', error.message);
    }
  }

  /*
   * Remove todos os caracteres do tipo fornecido
   * @param str string que pode conter o caracter
   * @param fnd caracter a ser removido
   * @return
   *
   */
  RemoveAll(str, fnd) {
    try {
      if (this.IsNullOrEmpty(str)) {
        return str;
      }
      return str.toString().split(fnd).join('');
    } catch (error) {
      console.log(this.constructor.name, 'RemoveAll', error.message);
    }
  }

  /*
   * Substitui todos os caracteres do tipo fornecido
   * @param str string que pode conter o caracter
   * @param fnd caracter a ser substituído
   * @param rpl string a substituir o caracter encontrado
   * @return
   *
   */
  ReplaceAll(str, fnd, rpl) {
    try {
      if (!this.IsNullOrEmpty(str)) {
        return str.toString().split(fnd).join(rpl);
      }
      return str;
    } catch (error) {
      console.log(this.constructor.name, 'ReplaceAll', error.message);
    }
  }

  /*
   * Retorna o último caractere de uma string
   * @param _string
   * @return
   *
   */
  GetLastChar(str) {
    try {
      const str2 = str.substr(str.length - 1);
      return str2;
    } catch (error) {
      console.log(this.constructor.name, 'GetLastChar', error.message);
    }
  }

  /*
   * Retorna o primeiro caractere de uma string
   * @param _string
   * @return
   *
   */
  GetFirstChar(str) {
    try {
      return str.substring(0, 1);
    } catch (error) {
      console.log(this.constructor.name, 'GetFirstChar', error.message);
    }
  }

  /*
   *Remove os espaços antes e depois (início e fim da string).
   * @param s
   * @return
   *
   */
  trim(s) {
    try {
      if (this.IsNullOrEmptyGE(s)) {
        return '';
      }
      return s.toString().replace(/^([\s|\t|\n]+)?(.*)([\s|\t|\n]+)?$/gm, '$2');
    } catch (error) {
      console.log(this.constructor.name, 'trim', error.message);
    }
  }

  /*
   * Converte uma hora hh:MM em inteiros minutos
   * @param hhMM
   * @return
   *
   */
  toMinute(hhMM) {
    try {
      let signal = 1;
      const menos = '-';
      hhMM = this.RemoveAll(hhMM, '"');
      // A hora pode conter separador de milhar
      hhMM = this.RemoveAll(hhMM, '.');
      hhMM = this.RemoveAll(hhMM, ',');
      if (hhMM.indexOf(menos) >= 0) {
        // Por que o sinal negativo pode chegar no final da expressão
        const count = this.CountChar(hhMM, menos);
        hhMM = this.RemoveAll(hhMM, menos);
        signal = count % 2 === 0 ? 1 : -1; // Se o número de sinais negativos for par, será 1 senão -1
      }
      const pos = hhMM.indexOf(':');
      const h = parseInt(this.Left(hhMM, pos), 10);
      const m = parseInt(this.Right(hhMM, 2), 10);
      return signal * h * 60 + m * signal;
    } catch (error) {
      console.log(this.constructor.name, 'toMinute', error.message);
    }
  } /*;*/

  /*
   *Conta o número de caracteres char presentes em str
   * @param str
   * @param char
   * @return
   *
   */
  CountChar(str, char) {
    try {
      // 			let _split:Array = str.split(char);
      // 			return _split.length - 1;
      const pattern = new RegExp(char, 'g');
      const matched = str.match(pattern);
      return matched ? matched.length : 0;
    } catch (error) {
      console.log(this.constructor.name, 'CountChar', error.message);
    }
  }

  /*
   *  Retorna os n últimos caracteres
   * @param str
   * @param count
   * @return
   *
   */
  Right(str, count = 1) {
    try {
      const s = str.length - count;
      const f = str.length;
      return str.toString().substring(s, f);
    } catch (error) {
      console.log(this.constructor.name, 'Right', error.message);
    }
  } /*;*/

  // Retorna os n primeiros caracteres
  Left(str, count = 1) {
    try {
      return str.toString().substring(0, count);
    } catch (error) {
      console.log(this.constructor.name, 'Left', error.message);
    }
  } /*;*/

  /* aceita time no padrão hh:mm ou hh ou h */
  formatTime(time, extractDate = false) {
    try {
      if (time) {
        if (extractDate) {
          const typed = this.getTypedValue(time)
          if (typed.type === this.EnTypedValue.Date) {
            const dt = (typed.value);
            time = `${dt.getHours()}:${dt.getMinutes()}`;
          }
        }
        time = time.replace(/horas/g, '').replace(/hs/g, '').replace(/h/g, '');
        const split = time?.split(':');
        return split?.length <= 1 ? `${this.FormatarNumero(parseInt(time, 10))}:00` :
          split?.reduce((a, b) => {
            if (a) {
              b = b ? this.FormatarNumero(parseInt(b, 10)) : '00';
              return `${a}:${b}`;
            }
            return this.FormatarNumero(parseInt(b, 10));
          }, '');
      }
    } catch (error) {
      console.log(this.constructor.name, 'formatTime', error.message);
    }
    return time;
  }

  // Pega um número de minutos e retorna uma string no padrão hh:MM
  toHHMM(m) {
    try {
      const h = parseInt((m / 60).toString(), 10);
      const min = m % 60;
      const strMin = '0' + Math.abs(min);
      const strH =
        Math.abs(h) <= 9 ? (h >= 0 ? '0' + h.toString() : '-0' + Math.abs(h).toString()) : h.toString();
      return strH + ':' + this.Right(strMin, 2);
    } catch (error) {
      console.log(this.constructor.name, 'toHHMM', error.message);
    }
  }

  // Soma várias horas passadas como parâmetro no formato hh:MM
  // tipos: m retorna um inteiro em minutos, s retorna um inteiro
  // em segundos, h retorna um double de horas fracionadas, hhMM retorna string hh:MM
  // Uma ou mais horas pode ser negativa devendo apenas ter o sinal de negativo antes da hora -01:00
  SumHoursHHMM(tipo, hours) {
    try {
      let hoursEmMin = 0;
      for (const hour of hours) {
        const item = hour;
        hoursEmMin += this.toMinute(item);
      }
      switch (tipo.toUpperCase()) {
        case 'M':
          return hoursEmMin;
        case 'S':
          return hoursEmMin * 60;
        case 'H':
          return hoursEmMin / 60;
        default:
        case 'HHMM':
          return this.toHHMM(hoursEmMin);
      }
    } catch (e) { }
    return null;
  }

  // Public Methods:
  /*
   * Atenção: Espera data no formato dd/mm/yyyy.
   * Não pode variar nem as posições, nem o número de caracteres.
   * @param _data
   * @return
   *
   */
  getDia(data) {
    try {
      data = this.RemoverAspas(data);
      return parseInt(data.substr(0, 2), 10);
    } catch (error) {
      console.log(this.constructor.name, 'getDia', error.message);
    }
  }

  getHoraHHMM(data) {
    try {
      const zeroHora = data.getHours().toString().length === 1 ? '0' : '';
      const zeroMinuto = data.getMinutes().toString().length === 1 ? '0' : '';
      return zeroHora + data.getHours().toString() + ':' + (zeroMinuto + data.getMinutes().toString());
    } catch (error) {
      console.log(this.constructor.name, 'getHoraHHMM', error.message);
    }
  }

  getHoraHHMMSS(data) {
    try {
      const zeroHora = data.getHours().toString().length === 1 ? '0' : '';
      const zeroMinuto = data.getMinutes().toString().length === 1 ? '0' : '';
      const zeroSegundo = data.getSeconds().toString().length === 1 ? '0' : '';
      return (
        zeroHora +
        data.getHours().toString() +
        ':' +
        (zeroMinuto + data.getMinutes().toString()) +
        ':' +
        (zeroSegundo + data.getSeconds().toString())
      );
    } catch (error) {
      console.log(this.constructor.name, 'getHoraHHMMSS', error.message);
    }
  }

  getHoraMMSS(data) {
    try {
      const zeroMinuto = data.getMinutes().toString().length === 1 ? '0' : '';
      const zeroSegundo = data.getSeconds().toString().length === 1 ? '0' : '';
      return zeroMinuto + data.getMinutes().toString() + ':' + (zeroSegundo + data.getSeconds().toString());
    } catch (error) {
      console.log(this.constructor.name, 'getHoraMMSS', error.message);
    }
  }

  /*
   * Pega uma hora no formato hh:MM e retorna apenas a hora como inteiro
   ** também aceita hh
   * @param _hora
   * @return
   *
   */
  getHora(hora) {
    try {
      hora = this.RemoverAspas(hora);
      hora = this.formatTime(hora);
      const pos = hora.split(':');
      return parseInt(pos[0], 10);
    } catch (error) {
      console.log(this.constructor.name, 'getHora', error.message);
    }
    return null;
  }

  /*
   * ega uma hora no formato hh:MM e retorna apenas o minuto como inteiro
   * @param _hora
   * @param _hasSecond indica se há segundos após os minutos
   * @return
   *
   */
  getMinuto(hora, hasSecond = false) {
    try {
      hora = this.RemoverAspas(hora);
      if (hasSecond) {
        return parseInt(this.Left(this.Right(hora, 5), 2), 10);
      } else {
        return parseInt(this.Right(hora, 2), 10);
      }
    } catch (error) {
      console.log(this.constructor.name, 'getMinuto', error.message);
    }
  }

  /*
   * Pega uma hora no formato hh:MM e retorna apenas os segundos como inteiro
   * @param _hora
   * @return
   *
   */
  getSegundo(hora) {
    try {
      hora = this.RemoverAspas(hora);
      return parseInt(this.Right(hora, 2), 10);
    } catch (error) {
      console.log(this.constructor.name, 'getSegundo', error.message);
    }
  }

  /*
   * Verifica se é uma hora válida, dentro das 24h no formato HH:MM
   * Se houver aspas ou sinal negativo serão removidos e a hora poderá continuar válida
   * @param _supostaHora
   * @return
   *
   */
  IsHourHHMM(supostaHora) {
    try {
      supostaHora = this.RemoveAll(supostaHora, '"');
      supostaHora = this.RemoveAll(supostaHora, '-');
      const pos = supostaHora.indexOf(':');
      if (isNaN(Number(this.Left(supostaHora, pos))) || isNaN(Number(this.Right(supostaHora, 2)))) {
        return false;
      }
      const hora = this.getHora(supostaHora);
      const minuto = this.getMinuto(supostaHora);
      return hora >= 0 && hora <= 23 && (minuto >= 0 && minuto <= 59);
    } catch (e) {
      return false;
    }
  }

  // Verifica se é uma hora válida, dentro das 24h no formato hh:mm:ss
  IsHourHHMMSS(supostaHora) {
    try {
      supostaHora = this.RemoveAll(supostaHora, '"');
      supostaHora = this.RemoveAll(supostaHora, '-');
      const hora = this.getHora(supostaHora);
      const minuto = this.getMinuto(supostaHora, true);
      const segundo = this.getSegundo(supostaHora);
      return hora >= 0 && hora <= 23 && (minuto >= 0 && minuto <= 59) && (segundo >= 0 && segundo <= 59);
    } catch (e) {
      return false;
    }
  }

  /*
   * Verifica se é um tempo válido com horas ilimitadas e minutos < 60
   * @param _supostaHora
   * @return
   *
   */
  IsHourHHHMM(supostaHora) {
    try {
      supostaHora = this.RemoveAll(supostaHora, '"');
      supostaHora = this.RemoveAll(supostaHora, '-');
      const minuto = parseInt(supostaHora.substr(supostaHora.indexOf(':') + 1, 2), 10);
      return minuto >= 0 && minuto <= 59;
    } catch (e) {
      return false;
    }
  }

  // Retorna a HHMM máxima no formato hhmm
  MAXHOUR(hhMM) {
    try {
      const arrayMinutes = this.ARRAYMINUTES(hhMM);
      const maxHour = arrayMinutes.pop();
      return this.toHHMM(maxHour);
    } catch (error) {
      console.log(this.constructor.name, 'MAXHOUR', error.message);
    }
  }

  /*
   * Retorna a HHMM mínima no formato hhmm
   * @param _hhMM
   * @return
   *
   */
  MINHOUR(hhMM) {
    try {
      const arrayMinutes = this.ARRAYMINUTES(hhMM);
      const minHour = arrayMinutes[0];
      return this.toHHMM(minHour);
    } catch (error) {
      console.log(this.constructor.name, 'MINHOUR', error.message);
    }
  }

  // Recebe um array de elementos no formato hh:MM e retorna um array ordenado de forma crescente dos itens convertidos em minutos (int)
  ARRAYMINUTES(hhMM) {
    try {
      const arrayMinutes = new Array();
      for (const item of hhMM) {
        if (this.IsHourHHHMM(item)) {
          arrayMinutes.push(parseInt(this.toMinute(item).toString(), 10));
        }
      }
      return arrayMinutes.sort((a, b) => parseFloat(a) - parseFloat(b));
    } catch (error) {
      console.log(this.constructor.name, 'ARRAYMINUTES', error.message);
    }
  }

  /*
   * Calcula o número de horas extra
   * @param _tipo: define o tipo de retorno pode ser HHMM, h para hora fracionada, m para minutos
   * @param _hhMMTempoExpediente: Tempo total do expediente oficial diário a ser
   * cumprido// ATENÇÃO: Se _permitirCompensacao = false esse parâmetro deverá conter o
   * horário de saída do expediente e não o tempo total de expediente
   * @param _hhMMTempoTolerancia: Tempo de tolerância quanto a entrada e/ou saída
   * @param _hhMMTempoRegistradoAlmoco: Tempo total registrado pelo funcionário como almoço
   * @param _hhMMTempoRegistradoEntrada: Hora registrada pelo funcionário de entrada
   * @param _hhMMTempoRegistradoSaida: Hora registrada pelo funcionário de saída
   * @param _permitirCompensacao: Indica se é permitido o regime de Compensação.
   * Se for permitido as horas de atraso "compensam" as horas após o expediente.
   * Sem Compensação registra tanto a falta quanto horas extras.
   * @return
   *
   */
  OVERTIME(
    tipo,
    hhMMTempoRegistradoSaida,
    hhMMTempoRegistradoEntrada,
    hhMMTempoExpediente,
    hhMMTempoTolerancia,
    hhMMTempoRegistradoAlmoco,
    permitirCompensacao
  ) {
    try {
      const saidaMin = this.toMinute(hhMMTempoRegistradoSaida);
      const entradaMin = this.toMinute(hhMMTempoRegistradoEntrada);
      const expedienteMin = this.toMinute(hhMMTempoExpediente);
      const toleranciaMin = this.toMinute(hhMMTempoTolerancia);
      const almocoMin = this.toMinute(hhMMTempoRegistradoAlmoco);
      let overTimeMin;
      if (permitirCompensacao) {
        // Exemplo: Com Compensação se chegar 15 min após o horário de entrada,
        // acima da tolerância, não descontará as horas se ficar também 15 min após o expediente
        overTimeMin = saidaMin - entradaMin - expedienteMin - almocoMin;
      } else {
        // Exemplo: Sem Compensação qualquer minuto após o expediente acima da
        // tolerância é considerado como hora extra, independente de ter chegado
        // atrasado (o atraso também deverá ser descontado nesse regime)
        overTimeMin = saidaMin - expedienteMin;
      }
      const overTimeMinTol = overTimeMin > toleranciaMin ? overTimeMin : 0;
      return this.retornarFormatoConformeTipo(tipo, overTimeMinTol);
    } catch (error) {
      console.log(this.constructor.name, 'OVERTIME', error.message);
    }
  }

  /*
   * Calcula o número de horas falta
   * @param _tipo: define o tipo de retorno pode ser HHMM, h para hora fracionada, m para minutos
   * @param _hhMMTempoExpediente: Tempo total do expediente oficial diário a
   * ser cumprido// ATENÇÃO: Se _permitirCompensacao = false esse parâmetro deverá
   * conter o horário de entrada do expediente e não o tempo total de expediente
   * @param _hhMMTempoTolerancia: Tempo de tolerância quanto a entrada e/ou saída
   * @param _hhMMTempoRegistradoAlmoco: Tempo total registrado pelo funcionário como almoço
   * @param _hhMMTempoRegistradoEntrada: Hora registrada pelo funcionário de entrada
   * @param _hhMMTempoRegistradoSaida: Hora registrada pelo funcionário de saída
   * @param _permitirCompensacao: Indica se é permitido o regime de Compensação.
   *  Se for permitido as horas de atraso "compensam" as horas após o expediente.
   * Sem Compensação registra tanto a falta quanto horas extras.
   * @return
   *
   */
  ABSENT(
    tipo,
    hhMMTempoRegistradoSaida,
    hhMMTempoRegistradoEntrada,
    hhMMTempoExpediente,
    hhMMTempoTolerancia,
    hhMMTempoRegistradoAlmoco,
    permitirCompensacao
  ) {
    try {
      const saidaMin = this.toMinute(hhMMTempoRegistradoSaida);
      const entradaMin = this.toMinute(hhMMTempoRegistradoEntrada);
      const expedienteMin = this.toMinute(hhMMTempoExpediente);
      const toleranciaMin = this.toMinute(hhMMTempoTolerancia);
      const almocoMin = this.toMinute(hhMMTempoRegistradoAlmoco);
      const horasTrabalhadas = saidaMin - entradaMin - almocoMin;
      let horasFalta;
      if (permitirCompensacao) {
        // Exemplo: Com Compensação se chegar 15 min após o horário de entrada,
        // acima da tolerância, não descontará as horas se ficar também 15 min após o expediente
        horasFalta = horasTrabalhadas >= expedienteMin ? 0 : expedienteMin - horasTrabalhadas;
      } else {
        // Exemplo: Sem Compensação qualquer minuto após o expediente acima
        // da tolerância é considerado como hora extra, independente de ter
        // chegado atrasado (o atraso também deverá ser descontado nesse regime)
        horasFalta = entradaMin - expedienteMin;
      }
      const horasFaltaTol = horasFalta > toleranciaMin ? horasFalta : 0;
      return this.retornarFormatoConformeTipo(tipo, horasFaltaTol);
    } catch (error) {
      console.log(this.constructor.name, 'ABSENT', error.message);
    }
  }

  /*
   * Calcula o número de horas para cálculo de adicional noturno
   * @param _tipo: define o tipo de retorno pode ser HHMM, h para hora fracionada, m para minutos
   * @param _hhMMTempoRegistradoSaida: Hora registrada pelo funcionário de saída
   * @param _hhMMHoraInicioAdicionalNoturno: Contabilizar como adicional noturno a partir deste horário
   * @return
   *
   */
  NIGHTHOUR(tipo, hhMMTempoRegistradoSaida, hhMMHoraInicioAdicionalNoturno) {
    try {
      const saidaMin = this.toMinute(hhMMTempoRegistradoSaida);
      const inicioAdicionalNoturno = this.toMinute(hhMMHoraInicioAdicionalNoturno);
      const horasNoturnas =
        saidaMin >= inicioAdicionalNoturno ? saidaMin - inicioAdicionalNoturno : 0;
      return this.retornarFormatoConformeTipo(tipo, horasNoturnas);
    } catch (error) {
      console.log(this.constructor.name, 'NIGHTHOUR', error.message);
    }
  }

  retornarFormatoConformeTipo(tipo, tempoMinutos) {
    try {
      switch (tipo.toUpperCase()) {
        case 'M':
          return tempoMinutos;
        case 'S':
          return tempoMinutos * 60;
        case 'H':
          return tempoMinutos / 60;
        default:
        case 'HHMM':
          return this.toHHMM(tempoMinutos);
      }
    } catch (error) {
      console.log(this.constructor.name, 'retornarFormatoConformeTipo', error.message);
    }
  }

  // Formata um número no padrão 01, 02, 10, etc.. Ou seja, com dois dígitos.
  FormatarNumero(numero) {
    try {
      return String('0' + numero).substr(String(numero).length - 1, 2);
    } catch (error) {
      console.log(this.constructor.name, 'FormatarNumero', error.message);
    }
  }

  FormatarHora(numeroHora) {
    try {
      if (isNaN(numeroHora) || numeroHora === 0) {
        return '00:00';
      } else {
        let hora;
        let minuto;
        if (Math.abs(numeroHora) >= 1) {
          hora = Math.round(numeroHora - 0.5);
          minuto = numeroHora % hora;
        } else {
          hora = 0;
          minuto = numeroHora;
        }
        minuto = Math.round(minuto * 60);
        const final = ''; // _minuto == 0 ? "h" : "";
        return (
          String('0' + hora).substr(String(hora).length - 1, 2) +
          ':' +
          String('0' + minuto).substr(String(minuto).length - 1, 2) +
          final
        );
      }
    } catch (error) {
      console.log(this.constructor.name, 'FormatarHora', error.message);
    }
  }

  FormatarHHHmmss(numeroHora) {
    try {
      if (isNaN(numeroHora) || numeroHora === 0) {
        return '00:00:00';
      } else {
        const hora = Math.round(numeroHora - 0.5);
        let minuto = numeroHora % hora;
        let segundo = 0;
        minuto = Math.round(minuto * 60);
        if (minuto >= 60) {
          segundo = minuto - 60;
          minuto -= 60;
        }
        const final = ''; // _minuto == 0 ? "h" : "";
        return (
          String('0' + hora).substr(String(hora).length - 1, String(hora).length) +
          ':' +
          String('0' + minuto).substr(String(minuto).length - 1, 2) +
          ':' +
          String('0' + segundo).substr(String(segundo).length - 1, 2) +
          final
        );
      }
    } catch (error) {
      console.log(this.constructor.name, 'FormatarHHHmmss', error.message);
    }
  }

  // Soma duas horas
  // uma das horas pode ser negativa
  // Sintaxe: HOURADD(01:00; -00:30) Resultado 00:30 ou HOURADD(01:00; NOW()) Resultado hora atual + 1 hora
  AddHour(baseHHMM, addHHMM) {
    try {
      if (this.IsDateHourDDMMYYYYHHMM(baseHHMM)) {
        baseHHMM = this.FormatDateHour(new Date(baseHHMM), 'hh:mm');
      } else if (this.IsDateHourDDMMYYYYHHMMSS(baseHHMM)) {
        baseHHMM = this.FormatDateHour(new Date(baseHHMM), 'hh:mm');
      }
      if (this.isNumeric(addHHMM)) {
        addHHMM = this.Right('0' + addHHMM, 2) + ':00';
      }
      // Base Hour
      // Não dá para usar o RemoverAspas, pois no caso de número negativo a aspas poderá estar após o sinal -
      baseHHMM = this.RemoveAll(baseHHMM, '"');
      addHHMM = this.RemoveAll(addHHMM, '"');
      const baseArray = baseHHMM.split(':');
      const baseHour = baseArray[0];
      const baseMin = baseArray[1];
      let baseHourFrac = Math.abs(baseHour) + baseMin / 60;
      baseHourFrac = baseHour < 0 ? baseHourFrac * -1 : baseHourFrac; // Para considerar horas negativas
      // Add Hour
      const addArray = addHHMM.split(':');
      const addHour = addArray[0];
      const addMin = addArray[1];
      let addHourFrac = Math.abs(addHour) + addMin / 60;
      addHourFrac = addHour < 0 ? addHourFrac * -1 : addHourFrac; // Para considerar horas negativas
      // Soma
      const totalHourFrac = baseHourFrac + addHourFrac;
      const strTotal = isNaN(totalHourFrac) ? '00:00' : this.FormatarHora(totalHourFrac);
      return strTotal;
    } catch (error) {
      console.log(this.constructor.name, 'AddHour', error.message);
    }
  }

  // Atenção: _secToAdd nunca deverá ser maior que 60
  AddSeconds(hhhMMss, secToAdd) {
    try {
      const arrHora = hhhMMss.split(':');
      let hora = parseInt(arrHora[0], 10);
      let min = parseInt(arrHora[1], 10);
      let sec = parseInt(arrHora[2], 10);
      sec = sec + secToAdd;
      if (sec >= 60) {
        sec = sec - 60;
        min++;
        if (min >= 60) {
          min = 0;
          hora++;
        }
      }
      let strHora;
      strHora =
        String('0' + hora).substr(String(hora).length - 1, 2) +
        ':' +
        String('0' + min).substr(String(min).length - 4, 2) +
        ':' +
        String('0' + sec).substr(String(sec).length - 1, 2);
      return strHora;
    } catch (error) {
      console.log(this.constructor.name, 'AddSeconds', error.message);
    }
  }

  /*
   * Retornar o dia da semana em texto português
   * Domingo = 0 (padrão do AS3)
   * @param _day
   * @return
   *
   */
  DiaDaSemana(day) {
    try {
      if (day >= 0 && day <= 6) {
        const semana = [
          'Domingo',
          'Segunda-feira',
          'Terça-feira',
          'Quarta-feira',
          'Quinta-feira',
          'Sexta-feira',
          'Sábado'
        ];
        return semana[day];
      } else {
        return 'Dia inválido!';
      }
    } catch (error) {
      console.log(this.constructor.name, 'DiaDaSemana', error.message);
    }
  }

  NomeDoMes(date, abreviado = false) {
    const mt = date.getMonth();
    if (abreviado) {
      return this.arrayOfMonthsAbrevPtBr[mt];
    } else {
      return this.arrayOfMonthsPtBr[mt];
    }
  }

  /* Checa se é um objeto do tipo date, utilizando javascript puro. */
  isValidDate(date) {
    try {
      return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
    } catch (error) {
      console.log(this.constructor.name, 'isValidDate', error.message);
    }
    return false;
  }

  /*Checa se é uma data válida
  //deve ser um campo no formato data
  //ou uma string do tipo dd/mm/yyyy ou YYYY-MM-dd hh:mm:ss ou YYYY-MM-dd hh:mm:ss.mmm */
  IsDate(supostaData) {
    try {
      if (this.isNullOrEmpty(supostaData)) {
        return false;
      }

      return this.getTypedValue(supostaData).type === this.EnTypedValue.Date;
      // if (this.IsNullOrEmpty(_supostaData)) return false;
      // if (this.isNumeric(_supostaData)) return false;
      // var formats = [
      //   moment.ISO_8601,
      //   "DD/MM/YYYY",
      //   "DD/MM/YYYYThh:mm:ss",
      //   "YYYY-MM-DDThh:mm:ss",
      //   "YYYY-MM-DD",
      //   "dddd D MMMM YYYY HH:mm",
      //   "ddd MMM DD YYYY hh:mm:ss ZZ",
      //   "ddd MMM DD YYYY hh:mm:ss 'GMT-0300 (BRT)'"
      // ];
      // moment.locale('pt-br');
      // let m = moment(_supostaData, formats, true);
      // if (typeof _supostaData.getMonth === 'function') {
      //   return true;
      // } else if (this.IsYYYYMMddhhmmss(_supostaData)) {
      //   return true;
      // } else if (m.isValid()) {
      //   return true;
      // } else {
      //   let pattern1 = /\w{3} \w{3} \d{2} \d{4} \d{2}:\d{2}:\d{2} GMT-0300 \(BRT\)/; //"Thu Mar 16 2017 00:00:00 GMT-0300 (BRT)"
      //   if (pattern1.test(_supostaData)) return true;
      //   let pattern = /(\d{2})\/(\d{2})\/(\d{4})/;//Teste de dia/mes/ano
      //   let dt = new Date(_supostaData.toString().replace(pattern, '$3-$2-$1') + " GMT-0300");
      //   return (this.FormatarData(dt) == _supostaData);
      // }
    } catch (e) {
      console.log('IsDate', e);
    }
    return false;
  }

  /* converte uma sequencia de horários num array de hh:mm
  * possíveis entradas: 8h, 12, 12h30, 14:00, 16horas, 20hr
  */
 convertHorariosToList(strHorarios) {
    try {
      if (!strHorarios) {
        return null;
      }

      const regex = /(\d{1,2}(horas|hs|hrs|hr|h)\d{1,2}(minutos|mins|min|mn|ms|m)?)/gi;
      const matches = regex.exec(strHorarios);
      matches.filter(f => !!f).forEach(e => {
        strHorarios = strHorarios?.replace(e, e?.replace(/(horas|hora|minutos|mins|min|mn|ms|m|hs|hrs|hr|h)/gi, ':'));
      });
      strHorarios = strHorarios.replace(/(\s|horas|hora|mins|min|m|hs|hrs|hr|h)/gi, '');
      const separator = strHorarios.indexOf(',') >= 0 ? ',' : ';';
      const horarios = strHorarios.split(separator);
      const mapped = horarios?.map(m => {
        const splitted = m.split(':');
        const hour = +splitted[0];
        const min = splitted.length > 1 ? +splitted[1] : 0;
        const time = hour + min / 60;
        return this.FormatarHora(time);
      })
      return mapped;
    } catch (error) {
      console.log(this.constructor.name, 'convertHorariosToGrid', error.message);
    }
    return null;
  }

  /* Se não houver uma pontuação no final (. ? ou !), adiciona. */
  addPontoFinal(str, pontuacao = '.') {
    try {
      return str.endsWith('.') || str.endsWith('!') || str.endsWith('?') ? str : `${str}${pontuacao}`;
    } catch (error) {
      console.log(this.constructor.name, 'addPontoFinal', error.message);
    }
    return str;
  }

  /* Irá retornar um dos valores fornecidos, o primeiro que for válido. */
  getSomeNumber(invalidToCheck = '-1', ...args) {
    try {
      let res = null;
      args.some(e => {
        if (!this.isNullOrEmpty(e) && e.toString() !== invalidToCheck) {
          res = this.getTypedValue(e).value;
          return true;
        }
        return false;
      });
      return res;
    } catch (error) {
      console.log(this.constructor.name, 'getSome', error.message);
    }
    return null;
  }

  /*Identifica o tipo do dado e retorna o tipo, uma string e o valor transformado no tipo.
   * location é utilizado para saber o padrão que o dado entra na função, por exemplo,
   * se for pt-br o value de uma data deveria chegar como DDMMYYYY ao invés de MMDDYYYY e
   * um número XX,XX ao invés de XX.XX
  */
 getTypedValue(
    value,
    locationInput = 'en-US',
    locationOutput = 'pt-BR',
    minimumFractionDigits = 2
  ) {
    try {
      const nullObj = { type: this.EnTypedValue.Null, value: null, string: null };
      if (value && value !== undefined && Array.isArray(value)) {
        value = value[0];
      }
      if (this.isNullOrEmpty(value)) {
        return nullObj;
      }

      if (this.isValidDate(value)) {
        return {
          type: this.EnTypedValue.Date,
          string: this.dateToddMMYYYYhhmmss(value),
          value
        };
      }
      // tslint:disable: max-line-length
      // tslint:disable: variable-name
      // let pattern_wwwMMMDDYYYYhhmmssGMTLOC = /^\w{3} \w{3} \d{1,2} \d{4} \d{1,2}:\d{1,2}:\d{1,2} \w{3}(\+|\-)\d{4} \((\+|\-)?\w{2,4}\)(\s\{\})?$/; //"Thu Mar 16 2017 00:00:00 GMT-0300 (BRT)"
      // let pattern_wwwMMMDDYYYYhhmmssGMTLOC = /^\w{3} \w{3} \d{1,2} \d{4} \d{1,2}:\d{1,2}:\d{1,2} \w{3}(\+|\-)\d{4}( \(.*\))?/; // "Thu Mar 16 2017 00:00:00 GMT-0300 (BRT)" //	Wed Mar 29 2017 00:00:00 GMT-0300 (Hora oficial do Brasil)   Fri Aug 10 2018 00:00:00 GMT-0300 (Horário Padrão de Brasília)
      // ** ERP let pattern_wwwMMMDDYYYYhhmmssGMTLOC = /^\w{3} \w{3} \d{1,2} \d{4} \d{1,2}:\d{1,2}:\d{1,2} \w{3}(\+|\-)\d{4} \(\w{3,4}\)/; //"Thu Mar 16 2017 00:00:00 GMT-0300 (BRT)"
      
      const pattern_YYYYMMDDThhmmss_sssZ = /^\d{4}(\/|\-)\d{1,2}(\/|\-)\d{1,2}(.|\s)\d{1,2}:\d{1,2}:\d{1,2}.?(\d{1,3})?Z?$/; // 2017-12-06T02:00:00.000Z  2021-07-05T00:55:12.8 Mon Dec 04 2017 00:00:00 GMT-0200 (-02)
      const pattern_wwwMMMDDYYYYhhmmssGMTLOC = /^\w{3} \w{3} \d{1,2} \d{4} \d{1,2}:\d{1,2}:\d{1,2} \w{3}(\+|\-)\d{4}( \(.*\))?( \{\.*\})?/; // "Thu Mar 16 2017 00:00:00 GMT-0300 (BRT)" //	Wed Mar 29 2017 00:00:00 GMT-0300 (Hora oficial do Brasil) Fri Aug 10 2018 00:00:00 GMT-0300 (Horário Padrão de Brasília) // Wed Mar 29 2017 00:00:00 GMT-0300 (-03) {}
      const pattern_DDMMYYYYhhmmss = /^\d{1,2}(\/|\-)\d{1,2}(\/|\-)\d{4}(.|\s)\d{1,2}:\d{1,2}:\d{1,2}.?(\d{3})?$/; // "dd/mm/yyyyT00:00:00 ou dd/mm/yyyyT00:00:00.000"
      const pattern_DDMMYYYY = /^\d{1,2}(\/|\-)\d{1,2}(\/|\-)\d{4}$/; // "dd/mm/yyyy"
      const pattern_MMDDYYYYhhmmssAMPM = /^\d{1,2}(\/|\-)\d{1,2}(\/|\-)\d{4}\s\d{2}\:\d{2}\:\d{2}\s\w{2}$/; // 7/17/2018 12:00:00 AM
      const pattern_MMDDYYYY = /^\d{1,2}(\/|\-)\d{1,2}(\/|\-)\d{4}$/; // "mm/dd/yyyy"
      const pattern_MMDDYYYYThhmmss = /^\d{1,2}(\/|\-)\d{1,2}(\/|\-)\d{4}(.|\s)\d{1,2}:\d{1,2}:\d{1,2}.?(\d{3})?$/; // "mm/dd/yyyyT00:00:00 ou dd/mm/yyyyT00:00:00.000"
      const pattern_YYYYMMDD = /^\d{4}(\/|\-)\d{1,2}(\/|\-)\d{1,2}$/; // "YYYY/MM/DD"
      const pattern_YYYYMMDDhhmmss = /^\d{4}(\/|\-)\d{1,2}(\/|\-)\d{1,2}(.|\s)\d{1,2}:\d{1,2}:\d{1,2}.?(\d{3})?$/; // "yyyy/mm/dd 00:00:00 ou yyyy/mm/ddT00:00:00.000"
      // ** GE let pattern_ptBrNumber = /^(\+|\-)?\d{1,20},\d{0,5}$/;//Atenção: esse padrão pode confundir um número en com separador de caracteres 1,000
      const pattern_ptBrNumber = /^(\+|\-)?(d|.){1,20},\d{0,5}$/; // Atenção: esse padrão pode confundir um número en com separador de caracteres 1,000
      const pattern_integer = /^\d+$/; // Atenção: esse padrão pode confundir um número en com separador de caracteres 1,000

      let type;
      let rawValue = value;
      const isReal = value && value.toString().indexOf('R$') >= 0;
      if (isReal) {
        rawValue = this.ReplaceAll(value.toString().replace('R$', ''), '.', '').replace(',', '.');
        type = this.EnTypedValue.Real;
      } else if (pattern_ptBrNumber.test(value.toString())) {
        // isNumPtBr
        rawValue = this.ReplaceAll(rawValue, '.', '').replace(',', '.');
        type = this.EnTypedValue.Float;
      } else if (value.toString().indexOf('$') >= 0) {
        // isDollar
        rawValue = value.toString().replace('$', '');
        type = this.EnTypedValue.Dollar;
      } else if (value.toString().indexOf('%') >= 0) {
        // isPercent
        rawValue = value.toString().replace('%', '');
        if (locationInput === 'pt-BR') {
          rawValue = this.ReplaceAll(rawValue, '.', '').replace(',', '.');
        }
        type = this.EnTypedValue.Percent;
      }
      if (pattern_integer.test(value)) {
        // Está fora da sequencia de else if, pois, deve ser testado para os tipos moeda, percentual, etc.
        return {
          type: this.EnTypedValue.Integer,
          string: value.toString(),
          value: parseInt(value, 10)
        };
      } else if (this.isNumeric(rawValue)) {
        const numValue = parseFloat(rawValue.toString());
        const numStr = numValue.toLocaleString(locationOutput, {
          minimumFractionDigits,
          maximumFractionDigits: minimumFractionDigits
        });
        if (locationInput === 'pt-BR') {
          if (value.toString().indexOf(',') >= 0) {
            return {
              type: type || this.EnTypedValue.Float,
              string: numStr,
              value: numValue
            };
          } else {
            return {
              type: type || this.EnTypedValue.Integer,
              string: value.toString(),
              value: parseInt(numValue.toString(), 10)
            };
          }
        } else {
          if (!this.isInt(rawValue)) {
            return {
              type: type || this.EnTypedValue.Float,
              string: numStr,
              value: parseFloat(this.ReplaceAll(rawValue.toString(), ',', ''))
            };
          } else {
            return {
              type: type || this.EnTypedValue.Integer,
              string: value.toString(),
              value: parseInt(rawValue, 10)
            };
          }
        }
      } else if (pattern_wwwMMMDDYYYYhhmmssGMTLOC.test(value)) {
        const dt = value.getDate ? value : new Date(value);
        return {
          type: this.EnTypedValue.Date,
          string: this.FormatDate('DDMMYYYY', dt),
          value: dt
        };
      } else if (pattern_DDMMYYYYhhmmss.test(value)) {
        return {
          type: this.EnTypedValue.Date,
          string: value.toString(),
          value: this.ddMMYYYYThhmmssToDate(value)
        };
      } else if (pattern_MMDDYYYYhhmmssAMPM.test(value)) {
        return {
          type: this.EnTypedValue.Date,
          string: value.toString(),
          value: this.MMddYYYYToDate(value)
        };
      } else if (pattern_DDMMYYYY.test(value)) {
        return {
          type: this.EnTypedValue.Date,
          string: value.toString(),
          value: this.ddMMYYYYToDate(value)
        };
      } else if (pattern_DDMMYYYY.test(value)) {
        return {
          type: this.EnTypedValue.Date,
          string: value.toString(),
          value: new Date(value)
        };
      } else if (pattern_DDMMYYYYhhmmss.test(value)) {
        return {
          type: this.EnTypedValue.Date,
          string: value.toString(),
          value: new Date(value)
        };
      } else if (pattern_YYYYMMDD.test(value)) {
        const dt = this.YYYYMMddThhmmssToDate(value);
        return {
          type: this.EnTypedValue.Date,
          string: this.FormatDate('DDMMYYYY', dt),
          value: dt
        };
      } else if (pattern_YYYYMMDDhhmmss.test(value) || pattern_YYYYMMDDThhmmss_sssZ.test(value)) {
        const dt = this.YYYYMMddThhmmssToDate(value);
        return {
          type: this.EnTypedValue.Date,
          string: this.YYYYMMddThhmmssToDateTimeString(value),
          value: dt
        };
      }
    } catch (error) {
      console.log(this.constructor.name, 'getTypedValue', error.message);
    }
    return {
      type: this.EnTypedValue.None,
      string: value ? value.toString() : '',
      value
    };
  }

  /* Verifica se a string é uma data/hora no padrão YYYY-MM-dd hh:mm:ss */
  IsYYYYMMddhhmmss(supostaData) {
    try {
      const pattern1 = /^(\d{4})\-(\d{2})\-(\d{2})T(\d{2})(\d{2})(\d{2})$/;
      const pattern2 = /^(\d{4})\-(\d{2})\-(\d{2})T(\d{2})(\d{2})(\d{2}).(\d{3}).$/;
      return pattern1.test(supostaData) || pattern2.test(supostaData);
    } catch (error) {
      console.log(this.constructor.name, 'IsYYYYMMddhhmmss', error.message);
    }
    return false;
  }

  /* Verifica se a string é uma data/hora no padrão YYYY-MM-dd */
  IsYYYYMMdd(supostaData) {
    try {
      const pattern1 = /^(\d{4})\-(\d{2})\-(\d{2})$/;
      const pattern2 = /^(\d{4})\-(\d{2})\-(\d{2})$/;
      return pattern1.test(supostaData) || pattern2.test(supostaData);
    } catch (error) {
      console.log(this.constructor.name, 'IsYYYYMMdd', error.message);
    }
    return false;
  }

  // Identifica se a datahora no formato dd/MM/yyyy HH:mm:ss é válida
  IsDateHourDDMMYYYYHHMMSS(supostaDataHora) {
    try {
      supostaDataHora = this.RemoverAspas(supostaDataHora);
      const date = supostaDataHora.substr(0, 10);
      const _hora = supostaDataHora.substr(11);
      return this.IsDate(date) && this.IsHourHHMMSS(_hora);
    } catch (error) {
      console.log(this.constructor.name, 'IsDateHourDDMMYYYYHHMMSS', error.message);
    }
    return false;
  }

  // Identifica se a datahora no formato dd/MM/yyyy HH:mm:ss é válida
  IsDateHourDDMMYYYYHHMM(supostaDataHora) {
    try {
      supostaDataHora = this.RemoverAspas(supostaDataHora);
      const date = supostaDataHora.substr(0, 10);
      const hora = supostaDataHora.substr(11);
      return this.IsDate(date) && this.IsHourHHMM(hora);
    } catch (error) {
      console.log(this.constructor.name, 'IsDateHourDDMMYYYYHHMM', error.message);
    }
    return false;
  }

  // Além de formatar no padrão dd/mm/yyyy corrige o mës que, no as3 é baseado em zero.
  FormatarData(dt) {
    try {
      if (!dt || dt === undefined) {
        return null;
      }
      const typed = this.getTypedValue(dt);
      const data = typed.value;
      if (typed.type === this.EnTypedValue.Date) {
        const strMes = parseInt((data.getMonth() + 1).toString(), 10).toString();
        const zeroMes = strMes.length === 1 ? '0' : '';
        const strDia = data.getDate().toString();
        const zeroDia = strDia.length === 1 ? '0' : '';
        return zeroDia + strDia + '/' + zeroMes + strMes + '/' + data.getFullYear();
      }
      return null;
    } catch (error) {
      console.log(this.constructor.name, 'FormatarData', error.message);
    }
  }

  FormatarDataHora(data, caracterSeparador = ' ') {
    try {
      const zeroMinuto = data.getMinutes().toString().length === 1 ? '0' : '';
      const zeroHora = data.getHours().toString().length === 1 ? '0' : '';
      const zeroSegundo = data.getSeconds().toString().length === 1 ? '0' : '';
      return (
        this.FormatarData(data) +
        caracterSeparador +
        zeroHora +
        data.getHours().toString() +
        ':' +
        zeroMinuto +
        data.getMinutes().toString() +
        ':' +
        zeroSegundo +
        data.getSeconds().toString()
      );
    } catch (error) {
      console.log(this.constructor.name, 'FormatarDataHora', error.message);
    }
  }

  GerarData(dia, mes, ano) {
    try {
      const data = new Date(ano, mes, dia);
      return data;
    } catch (error) {
      console.log(this.constructor.name, 'GerarData', error.message);
    }
  }

  MMddYYYYToDate(MMddYYYY, arrSeparator = ['/', '-']) {
    try {
      if (!MMddYYYY || MMddYYYY === undefined) {
        return null;
      }
      if (typeof MMddYYYY !== 'string') {
        return MMddYYYY;
      }
      MMddYYYY = this.RemoverAspas(MMddYYYY);
      const separator = this.getDateSeparator(MMddYYYY);
      const dt = MMddYYYY.split(separator);
      const mes = parseInt(dt[0], 10) - 1;
      const dia = parseInt(dt[1], 10);
      const ano = parseInt(this.Left(dt[2], 4), 10);
      return new Date(ano, mes, dia);
    } catch (error) {
      console.log(this.constructor.name, 'MMddYYYYToDate', error.message);
    }
    return null;
  }

  ddMMYYYYToDate(ddMMYYYY, arrSeparator = ['/', '-']) {
    try {
      if (!ddMMYYYY || ddMMYYYY === undefined) {
        return null;
      }
      if (typeof ddMMYYYY !== 'string') {
        return ddMMYYYY;
      }
      ddMMYYYY = this.RemoverAspas(ddMMYYYY);
      const separator = this.getDateSeparator(ddMMYYYY);
      const dt = ddMMYYYY.split(separator);
      const dia = dt[0];
      const mes = dt[1] - 1;
      const ano = dt[2];
      return new Date(ano, mes, dia);
    } catch (error) {
      console.log(this.constructor.name, 'ddMMYYYYToDate', error.message);
    }
  }

  /* Retorna o separador de datas da string. */
  getDateSeparator(dtString) {
    try {
      const str = dtString.toString();
      const arrSeparator = ['/', '-'];
      let separator = '/';
      arrSeparator.every((e) => {
        if (str.indexOf(e) >= 0) {
          separator = e;
          return false;
        }
        return true;
      });
      return separator;
    } catch (error) {
      console.log(this.constructor.name, 'getDateSeparator', error.message);
    }
    return '/';
  }

  isDate(date) {
    try {
      return date instanceof Date && !isNaN(date.valueOf());
    } catch (error) {
      console.log(this.constructor.name, 'isDate', error.message);
    }
    return false;
  }

  /*Converte uma string de data no padrão dd/MM/YYYYThh:mm:ss para um Date.
   * A separação entre data e hora podem ser espaço em branco ou T.
   * A separação entre os elementos da data pode ser / ou -.
   */
  ddMMYYYYThhmmssToDate(ddMMYYYY) {
    try {
      // **GE if (!ddMMYYYY || ddMMYYYY === undefined) return null;
      if (!ddMMYYYY || ddMMYYYY === null || ddMMYYYY === undefined) {
        return null;
      }
      if (this.isDate(ddMMYYYY)) {
        return ddMMYYYY;
      }
      ddMMYYYY = this.RemoverAspas(ddMMYYYY);
      const split = ddMMYYYY.indexOf('T') >= 0 ? ddMMYYYY.split('T') : ddMMYYYY.split(' ');
      const dt = ddMMYYYY.indexOf('/') >= 0 ? split[0].split('/') : split[0].split('-');
      const hr = split[1] ? split[1].split(':') : ['00', '00', '00'];
      const dia = dt[0];
      const mes = dt[1] - 1;
      const ano = dt[2];
      const hora = hr[0];
      const minuto = hr[1];
      const segundo = hr[2];
      return new Date(ano, mes, dia, hora, minuto, segundo);
    } catch (error) {
      console.log(this.constructor.name, 'ddMMYYYYThhmmssToDate', error.message);
    }
  }

  /*Data proveniente do webservice tipo Date do .net
   * Converte uma string de data no padrão YYYY/MM/ddThh:mm:ss para um Date.
  * A separação entre data e hora podem ser espaço em branco ou T.
  * A separação entre os elementos da data pode ser / ou -.
  */
  YYYYMMddThhmmssToDate(YYYYMMddThhmmssToDate, retornarDataHojeSeNull = false) {
    try {
      if (!YYYYMMddThhmmssToDate || YYYYMMddThhmmssToDate === undefined) {
        return null;
      }
      YYYYMMddThhmmssToDate = this.RemoverAspas(YYYYMMddThhmmssToDate);
      const split =
        YYYYMMddThhmmssToDate.indexOf('T') >= 0
          ? YYYYMMddThhmmssToDate.split('T')
          : YYYYMMddThhmmssToDate.split(' ');
      const dt = YYYYMMddThhmmssToDate.indexOf('/') >= 0 ? split[0].split('/') : split[0].split('-');
      const ano = dt[0];
      const mes = dt[1] - 1;
      const dia = dt[2];
      if (split.length === 2) {
        const hr = split[1].split(':');
        const hora = hr[0];
        const minuto = hr[1];
        const segundo = +this.getLeft(hr[2], 2); // Necessário pois o último item pode ser 00.000Z
        return new Date(ano, mes, dia, hora, minuto, segundo);
      } else {
        return new Date(ano, mes, dia);
      }
    } catch (error) {
      console.log(this.constructor.name, 'YYYYMMddThhmmssToDate', error.message);
    }
  }

  /// Data proveniente do webservice tipo Date do .net
  YYYYMMddThhmmssToDateTimeString(YYYYMMddThhmmssToDate) {
    try {
      YYYYMMddThhmmssToDate = this.RemoverAspas(YYYYMMddThhmmssToDate);
      return this.FormatarDataHora(this.YYYYMMddThhmmssToDate(YYYYMMddThhmmssToDate));
    } catch (error) {
      console.log(this.constructor.name, 'YYYYMMddThhmmssToDateTimeString', error.message);
    }
  }

  /*
   * Atenção: inclui as barras dd/MM/yyyy
   * @param _data
   * @return
   *
   */
  DateToddMMYYYY(data) {
    try {
      if (!this.isValidDate(data)) {
        return data;
      }

      let dia = data.getDate().toString();
      let mes = (data.getMonth() + 1).toString();
      dia = String('0' + dia).substr(String(dia).length - 1, 2);
      mes = String('0' + mes).substr(String(mes).length - 1, 2);
      return dia + '/' + mes + '/' + data.getFullYear().toString();
    } catch (error) {
      console.log(this.constructor.name, 'DateToddMMYYYY', error.message);
    }
  }

  /*
   * Atenção: inclui as barras MM/yyyy
   * @param _data
   * @return
   *
   */
  DateToMMYYYY(data) {
    try {
      let mes = (data.getMonth() + 1).toString();
      mes = String('0' + mes).substr(String(mes).length - 1, 2);
      return mes + '/' + data.getFullYear().toString();
    } catch (error) {
      console.log(this.constructor.name, 'DateToMMYYYY', error.message);
    }
  }

  /*
   * Atenção: inclui as barras dd/MM
   * @param _data
   * @return
   *
   */
  DateToddMM(data) {
    try {
      let dia = data.getDate().toString();
      let mes = (data.getMonth() + 1).toString();
      dia = String('0' + dia).substr(String(dia).length - 1, 2);
      mes = String('0' + mes).substr(String(mes).length - 1, 2);
      return dia + '/' + mes;
    } catch (error) {
      console.log(this.constructor.name, 'DateToddMM', error.message);
    }
  }

  DateToMMddYYYY(data) {
    try {
      if (!data || !this.isDate(data)) {
        return null;
      }

      let dia = data.getDate().toString();
      let mes = (data.getMonth() + 1).toString();
      dia = String('0' + dia).substr(String(dia).length - 1, 2);
      mes = String('0' + mes).substr(String(mes).length - 1, 2);
      return mes + '/' + dia + '/' + data.getFullYear().toString();
    } catch (error) {
      console.log(this.constructor.name, 'DateToMMddYYYY', error.message);
    }
  }

  DateToYYYYMMdd(data, separator = '/') {
    try {
      if (this.isDate(data)) {
        let dia = data.getDate().toString();
        let mes = (data.getMonth() + 1).toString();
        dia = String('0' + dia).substr(String(dia).length - 1, 2);
        mes = String('0' + mes).substr(String(mes).length - 1, 2);
        return data.getFullYear().toString() + separator + mes + separator + dia;
      } else {
        return data;
      }
    } catch (error) {
      console.log(this.constructor.name, 'DateToYYYYMMdd', error.message);
    }
    return null;
  }

  GetYearsOld(dob) {
    try {
      if (!this.isDate(dob)) {
        return null;
      }
      const ageDifMs = Date.now() - dob.getTime();
      const ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    } catch (error) {
      console.log(this.constructor.name, 'GetYearsOld', error.message);
    }
  }

  /* Compara duas datas numericamente para operações de sort. */
  compareDates(dt1, dt2) {
    try {
      if (dt1 && !dt2) {
        return 1;
      } else if (!dt1 && dt2) {
        return -1;
      } else if (!dt1 && !dt2) {
        return 1;
      }
      return dt1.getTime() - dt2.getTime();
    } catch (error) {
      console.log(this.constructor.name, 'compareDates', error.message);
    }
  }

  // Calcula a diferença de tempo entre duas datas
  // exemplo de uso
  // let dt1:Date = new Date(2006, 1, 22, 23, 40, 1);
  // let dt2:Date = new Date(2008, 2, 22, 23, 50, 50);
  // dateDiff(dt1, dt2);
  // dateDiff(dt1, dt2, "t"); Retorna um texto da diferenças em dias, horas, minutos
  // dateDiff(dt1, dt2, "d"); Retorna um número em dias fracionados
  // dateDiff(dt1, dt2, "h"); Retorna um número em horas fracionadas
  // dateDiff(dt1, dt2, "m"); Retorna um número em minutos fracionados
  // dateDiff(dt1, dt2, "s"); Retorna um número em segundos
  dateDiff(date1, date2, key = 't') {
    try {
      // calculando a diferença em milisegundos das datas
      let sec = date2.getTime() - date1.getTime();

      // verificando se a segunda data é inferior que a primeira
      if (sec < 0) {
        // Alert.show("A segunda data deve ser superior a primeira!");
        return 'Data inicial maior que a final';
      }

      // variáveis auxiliares
      const second = 1000;
      const minute = 60 * second;
      const hour = 60 * minute;
      const day = 24 * hour;

      // resultado em horas decimais
      const rdh = Math.ceil(sec / hour);
      // resultado em minutos decimais
      const rdm = Math.ceil(sec / minute);
      // resultado em segundos
      const rds = Math.ceil(sec / second);

      const days = Math.floor(sec / day);
      sec -= days * day;
      const hours = Math.floor(sec / hour);
      sec -= hours * hour;
      const minutes = Math.floor(sec / minute);
      sec -= minutes * minute;
      const seconds = Math.floor(sec / second);

      let out;
      const minFrac = minutes + seconds / 60;
      const hourFrac = hours + minFrac / 60;
      const dayFrac = days + hourFrac / 24;
      switch (key.toUpperCase()) {
        default:
        case 'T':
          out =
            (days === 0 ? '' : days + ' dia' + (days > 1 ? 's' : '') + ', ') +
            (hours === 0 ? '' : hours + ' hora' + (hours > 1 ? 's' : '') + ', ') +
            (minutes === 0 ? '' : minutes + ' minuto' + (minutes > 1 ? 's' : '') + ', ') +
            (seconds === 0 ? '' : seconds + ' segundo' + (seconds > 1 ? 's' : ''));
          break;
        case 'D':
          out = parseInt(Math.round(dayFrac).toString(), 10).toString();
          break;
        case 'H':
          out = parseInt(Math.round(days * 24 + hourFrac).toString(), 10).toString();
          break;
        case 'M':
          out = parseInt(Math.round(days * 24 * 60 + hours * 60 + minFrac).toString(), 10).toString();
          break;
        case 'S':
          out = parseInt(
            Math.round(days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds).toString(),
            10
          ).toString();
          break;
      }
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return '0';
      } else {
        if (this.GetLastChar(out) === ' ') {
          out = this.RemoveLastChar(this.RemoveLastChar(out));
        }
        if (this.GetLastChar(out) === ',') {
          out = this.RemoveLastChar(out);
        }
        return out;
      }
    } catch (error) {
      console.log(this.constructor.name, 'dateDiff', error.message);
    }
  }

  /*Retorna a diferença em dias entre duas datas. Irá desconsiderar
   * os horários, pois, caso contrário, pode dar diferença no arredondamento.
  */
 dateDiffDays(first, second) {
    try {
      first = this.getDateWithoutHour(first);
      second = this.getDateWithoutHour(second);
      // Take the difference between the dates and divide by milliseconds per day.
      // Round to nearest whole number to deal with DST.
      return Math.round((second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24));
    } catch (error) {
      console.log(this.constructor.name, 'dateDiffDays', error.message);
    }
  }

  /* Retorna um tipo de Data mas com o horário zerado. */
  getDateWithoutHour(date) {
    try {
      if (!date) {
        return null;
      }
      
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    } catch (error) {
      console.log(this.constructor.name, 'getDateWithoutHour', error.message);
    }
    return null;
  }

  /*
   * Retorna a data do último dia da semana, ou seja, o próximo sábado
   * Se os dias a mais estiver preenchido, retornará a data em x dias após esse sábado
   * @param _dataNaSemana
   * @param _diasAmais
   * @return
   *
   */
  UltimoDiaDaSemana(dataNaSemana, diasAmais = 0) {
    try {
      const diferencaDiasParaProximoSabado = 6 - dataNaSemana.getDay();
      return this.DateAdd('d', diasAmais, this.DateAdd('d', diferencaDiasParaProximoSabado, dataNaSemana));
    } catch (error) {
      console.log(this.constructor.name, 'UltimoDiaDaSemana', error.message);
    }
  }

  /// retorna o Domingo
  PrimeiroDiaDaSemana(dataInicial) {
    try {
      if (dataInicial.getDay() !== 0) {
        // Domingo
        const deltaParaDomingo = 0 - dataInicial.getDay();
        dataInicial = this.DateAdd('d', deltaParaDomingo, dataInicial);
      }
      return dataInicial;
    } catch (error) {
      console.log(this.constructor.name, 'PrimeiroDiaDaSemana', error.message);
    }
  }

  /*
   *Retorna um número inteiro que representa o número da semana, no ano, para a data fornecida.
   * Se a primeira semana do ano começar num dia diferente do domingo, essa primeira semana terá dias a menos.
   * O número da primeira semana do ano é 1.
   * @param _date
   * @return
   *
   */
  WeekOfYear(date) {
    try {
      const firstOfTheYear = new Date(date.getFullYear(), 0, 1);
      const dayOfFirstDay = firstOfTheYear.getDay();
      const convertFirstDayToSunday = this.DateAdd('d', -dayOfFirstDay, firstOfTheYear);
      const dayOfYear = parseInt(
        ((date.getTime() - convertFirstDayToSunday.getTime()) / 1000 / 60 / 60 / 24).toString(),
        10
      );
      const weekNumber = parseInt((dayOfYear / 7 + 1).toString(), 10);
      return weekNumber;
    } catch (error) {
      console.log(this.constructor.name, 'WeekOfYear', error.message);
    }
  }

  /*
   * Retorna o último dia do mês extraído por _strDate conforme o _tipoRetorno
   * @param _tipoRetorno "Date" para retornar um tipo Date. "ddMMyyyy"
   * retorna uma data dd/MM/yyyy  "MMddyyyy" para MM/dd/yyyy, "yyyyMMdd" para yyyy-MM-dd, dd apenas o número do dia, MMYYYY para MM/yyyy
   * @param _strDate pode ser uma data, pode ser um número do mês e pode ser a palavra-chave TODAY (para pegar a data do dia)
   * @return
   *
   */
  LastDayOfMonth(tipoRetorno, strDate) {
    try {
      if (this.IsNullOrEmptyGE(strDate)) {
        return -1;
      } else {
        let refDate;
        const today = new Date();
        if (strDate.toUpperCase() === 'TODAY') {
          // Palavra-chave TODAY
          refDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            this.getLastDayOfMonth(today.getMonth(), today.getFullYear())
          );
        } else if (this.IsDate(strDate)) {
          // É uma data
          refDate = this.ddMMYYYYToDate(strDate);
          refDate = new Date(
            refDate.getFullYear(),
            refDate.getMonth(),
            this.getLastDayOfMonth(refDate.getMonth(), refDate.getFullYear())
          );
        } else if (!isNaN(parseInt(strDate, 10))) {
          // É um número do mês
          const mes = parseInt(strDate, 10) - 1;
          if (mes <= 11 && mes >= 0) {
            refDate = new Date(
              today.getFullYear(),
              mes,
              this.getLastDayOfMonth(mes, today.getFullYear())
            );
          } else {
            return -1;
          }
        }
        if (tipoRetorno.toUpperCase() === 'YYYYMMDD') {
          return this.FormatDate(tipoRetorno, refDate, '-');
        } else if (tipoRetorno.toUpperCase() === 'DATE') {
          return refDate;
        } else {
          return this.FormatDate(tipoRetorno, refDate);
        }
      }
    } catch (error) {
      console.log(this.constructor.name, 'LastDayOfMonth', error.message);
    }
    return -1;
  }

  /*
   *Janeiro = 0 . Cuidado pois segue o padrão das funções do AS3 janeiro = 0
   * @param _month
   * @param _year
   * @return
   *
   */
  getLastDayOfMonth(month, year) {
    try {
      const arrayLastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (month === 1 && year % 4 === 0) {
        // Teste de ano bissexto. mês 1 corresponde a fevereiro
        return 29;
      } else {
        return arrayLastDay[month];
      }
    } catch (error) {
      console.log(this.constructor.name, 'getLastDayOfMonth', error.message);
    }
  }

  /*
   *Permite especificar o formato de retorno de uma data
   * @param _tipo "ddMMyyyy" retorna uma data dd/MM/yyyy
   * "MMddyyyy" para MM/dd/yyyy, "yyyyMMdd" para yyyy-MM-dd,
   * dd apenas o número do dia, MMYYYY para MM/yyyy
   * @param _date
   * @param _separator o default é "/"
   * @return
   *
   */
  FormatDate(tipo, dt, separator = '/') {
    try {
      if (!dt || dt === undefined) {
        return null;
      }
      switch (tipo.toUpperCase()) {
        case 'DDMMYYYY':
          return dt.getDate() + separator + (dt.getMonth() + 1) + separator + dt.getFullYear();
        case 'MMDDYYYY':
          return dt.getMonth() + 1 + separator + dt.getDate() + separator + dt.getFullYear();
        case 'YYYYMMDD':
          return dt.getFullYear() + separator + (dt.getMonth() + 1) + separator + dt.getDate();
        case 'MMYYYY':
          return dt.getMonth() + 1 + separator + dt.getFullYear();
        case 'DD':
          return dt.getDate().toString();
      }
      return dt.toString();
    } catch (error) {
      console.log(this.constructor.name, 'FormatDate', error.message);
    }
  }

  /*
   * Recebe um array de datas no padrão ddmmyyyy e retorna a maior data
   * @param _ddmmyyyy
   * @return
   *
   */
  MAXDATE(ddmmyyyy) {
    try {
      if (ddmmyyyy.length > 0) {
        const dtCrescente = ddmmyyyy.sort(this.sortByDate);
        return this.ddMMYYYYToDate(dtCrescente.pop());
      }
      return null;
    } catch (error) {
      console.log(this.constructor.name, 'MAXDATE', error.message);
    }
  }

  /*
   * Recebe um array de datas no padrão ddmmyyyy e retorna a maior data
   * @param _ddmmyyyy
   * @return
   *
   */
  MINDATE(ddmmyyyy) {
    try {
      if (ddmmyyyy.length > 0) {
        const dtCrescente = ddmmyyyy.sort(this.sortByDate);
        return this.ddMMYYYYToDate(dtCrescente[0]);
      }
      return null;
    } catch (error) {
      console.log(this.constructor.name, 'MINDATE', error.message);
    }
  }

  /*
   * Função interna para ser usada como parâmetro de um array.sort para ordenar datas
   * @param a
   * @param b
   * @return
   *
   */
  sortByDate(a, b) {
    try {
      const dta = this.ddMMYYYYToDate(a);
      const dtb = this.ddMMYYYYToDate(b);
      const difference = this.truncateDate(dta) - this.truncateDate(dtb);
      return difference / Math.abs(difference);
    } catch (error) {
      console.log(this.constructor.name, 'sortByDate', error.message);
    }
  }

  // replace Object with the proper type
  truncateDate(object) {
    try {
      // Atenção: O primeiro dia do calendário de referência do
      // flash é 01/01/1970 (meia-noite de 1° de janeiro de 1970,
      // horário universal). Portanto, é necessário ajustar qualquer
      // data inferior a essa.
      const firstReferenceDate = new Date(1970, 0, 1, 0, 0, 0, 0);
      if (object < firstReferenceDate) {
        object = firstReferenceDate;
      }
      return (object).getTime() * 0.0001;
    } catch (error) {
      console.log(this.constructor.name, 'truncateDate', error.message);
    }
  }

  /*
   *Oferece várias opções para formatação de uma data válida, conforme parâmetros
   * @param _format
   * dd/mm/yyyy hh:mm:ss
   * dd/mm/yyyy hh:mm
   * dd/mm/yyyy
   * dd/mm
   * d dia do mês numérico
   * D Dia por extenso
   * m número do mês de 1 a 12
   * M mês por extenso
   * h hora
   * m minuto
   * s segundo
   * hh:mm
   * mm:ss
   * y ano numérico
   * w dia da semana de 1 a 7
   * W dia da semana por extenso
   * As combinações são aceitas, e podem ser misturadas com caracteres
   * Exemplo: W ", " d " de " M " de " y  Resultado: segunda-feira, 01 de janeiro de 2015
   * @return
   * OBS: as partes que são strings deve estar entre aspas para que não haja risco de serem substituídas.
   *
   */
  FormatDateHour(dt, format) {
    try {
      // let _glb: Global = new Global;//Necessário, pois, a execução simultânea com uso de variáveis estáticas poderia gerar erro
      const split = this.RemoverAspas(this.trim(format)).split(this.regexEntreAspas);
      // Remover os elementos vazios
      const splitFiltered = split.filter((item, index, array) => {
        return !this.IsNullOrEmpty(item);
      });
      const count = splitFiltered.length;
      for (let i = 0; i < count; i++) {
        if (this.Left(splitFiltered[i], 1) !== '"') {
          // Item entre aspas, e não deve ser substituído
          const testCount = this.testExpressions.length;
          for (let j = 0; j < testCount; j++) {
            // Testará se o item corresponde a uma formatação válida
            const test = this.testExpressions[j];
            const strToTest = this.RemoveAll(this.trim(splitFiltered[i]), '"');
            if (test[0].test(strToTest.toString())) {
              // Remover aspas e espaços
              splitFiltered[i] = test[1].call(this, dt);
              break;
            }
          }
        }
      }
      return this.RemoveAll(splitFiltered.join(''), '"');
    } catch (error) {
      console.log(this.constructor.name, 'FormatDateHour', error.message);
    }
  }

  func_d(dt) {
    try {
      const dtStr = this.DateToddMMYYYY(dt);
      return this.getDia(dtStr).toString();
    } catch (error) {
      console.log(this.constructor.name, 'func_d', error.message);
    }
  }

  /*
   *Dia da semana por extenso
   * @param _dt
   * @return
   *
   */
  func_D(dt) {
    try {
      return this.DiaDaSemana(dt.getDay()).toString();
    } catch (error) {
      console.log(this.constructor.name, 'func_D', error.message);
    }
  }

  func_m(dt) {
    try {
      return (dt.getMonth() + 1).toString();
    } catch (error) {
      console.log(this.constructor.name, 'func_m', error.message);
    }
  }

  func_M(dt) {
    try {
      return this.arrayOfMonthsPtBr[dt.getMonth()];
    } catch (error) {
      console.log(this.constructor.name, 'func_M', error.message);
    }
  }

  func_M3(dt) {
    try {
      return this.func_M(dt).substr(0, 3);
    } catch (error) {
      console.log(this.constructor.name, 'func_M3', error.message);
    }
  }

  func_h(dt) {
    try {
      return dt.getHours().toString();
    } catch (error) {
      console.log(this.constructor.name, 'func_h', error.message);
    }
  }

  func_mm(dt) {
    try {
      return dt.getMinutes().toString();
    } catch (error) {
      console.log(this.constructor.name, 'func_mm', error.message);
    }
  }

  func_s(dt) {
    try {
      return dt.getSeconds().toString();
    } catch (error) {
      console.log(this.constructor.name, 'func_s', error.message);
    }
  }

  func_y(dt) {
    try {
      return dt.getFullYear().toString();
    } catch (error) {
      console.log(this.constructor.name, 'func_y', error.message);
    }
  }

  func_w(dt) {
    try {
      return (dt.getDay() + 1).toString();
    } catch (error) {
      console.log(this.constructor.name, 'func_w', error.message);
    }
  }

  func_ddmm(dt) {
    try {
      return this.DateToddMM(dt);
    } catch (error) {
      console.log(this.constructor.name, 'func_ddmm', error.message);
    }
  }

  func_mmyyyy(dt) {
    try {
      return this.DateToMMYYYY(dt);
    } catch (error) {
      console.log(this.constructor.name, 'func_mmyyyy', error.message);
    }
  }

  func_ddmmyyyy(dt) {
    try {
      return this.DateToddMMYYYY(dt);
    } catch (error) {
      console.log(this.constructor.name, 'func_ddmmyyyy', error.message);
    }
  }

  func_ddmmyyyyhhmmss(dt) {
    try {
      return this.DateToddMMYYYY(dt) + ' ' + this.getHoraHHMMSS(dt);
    } catch (error) {
      console.log(this.constructor.name, 'func_ddmmyyyyhhmmss', error.message);
    }
  }

  func_ddmmyyyyhhmm(dt) {
    try {
      return this.DateToddMMYYYY(dt) + ' ' + this.getHoraHHMM(dt);
    } catch (error) {
      console.log(this.constructor.name, 'func_ddmmyyyyhhmm', error.message);
    }
  }

  func_hhmm(dt) {
    try {
      return this.getHoraHHMM(dt);
    } catch (error) {
      console.log(this.constructor.name, 'func_hhmm', error.message);
    }
  }

  func_hhmmss(dt) {
    try {
      return this.getHoraHHMMSS(dt);
    } catch (error) {
      console.log(this.constructor.name, 'func_hhmmss', error.message);
    }
  }

  func_mmss(dt) {
    try {
      return this.getHoraMMSS(dt);
    } catch (error) {
      console.log(this.constructor.name, 'func_mmss', error.message);
    }
  }

  // Retorna uma string no padrão yyyy-mm-dd
  // Também corrige o número do mës que, no Flash, inicia no zero
  RetornarAllXsdDate(dt) {
    try {
      if (this.IsYYYYMMdd(dt)) {
        return dt;
      }
      const strMes = parseInt((dt.getMonth() + 1).toString(), 10).toString();
      const str =
        dt.getFullYear() +
        '-' +
        ('0' + strMes).substr(String(strMes).length - 1, 2) +
        '-' +
        ('0' + dt.getDate()).substr(String(dt.getDate()).length - 1, 2);
      return str;
    } catch (error) {
      console.log(this.constructor.name, 'RetornarAllXsdDate', error.message);
    }
  }

  RetornarAllXsdDateTime(dt) {
    try {
      if (this.IsYYYYMMddhhmmss(dt)) {
        return dt;
      }
      const strMes = parseInt((dt.getMonth() + 1).toString(), 10).toString();
      const strData =
        dt.getFullYear() +
        '-' +
        ('0' + strMes).substr(String(strMes).length - 1, 2) +
        '-' +
        ('0' + dt.getDate()).substr(String(dt.getDate()).length - 1, 2);
      const strHora =
        ('0' + dt.getHours()).substr(String(dt.getHours()).length - 1, 2) +
        ':' +
        ('0' + dt.getMinutes()).substr(String(dt.getMinutes()).length - 1, 2) +
        ':' +
        ('0' + dt.getSeconds()).substr(String(dt.getSeconds()).length - 1, 2);
      return strData + 'T' + strHora;
    } catch (error) {
      console.log(this.constructor.name, 'RetornarAllXsdDateTime', error.message);
    }
  }

  RetornarAllXsdTime(dt) {
    try {
      const strHora =
        ('0' + dt.getHours()).substr(String(dt.getHours()).length - 1, 2) +
        ':' +
        ('0' + dt.getMinutes()).substr(String(dt.getMinutes()).length - 1, 2) +
        ':' +
        ('0' + dt.getSeconds()).substr(String(dt.getSeconds()).length - 1, 2);
      return strHora;
    } catch (error) {
      console.log(this.constructor.name, 'RetornarAllXsdTime', error.message);
    }
  }

  ConvertToCData(str) {
    try {
      if (this.IsNullOrEmpty(str)) {
        return '';
      }
      const startCDATA = '<![CDATA[';
      const endCDATA = ']]> ';
      if (str.toString().indexOf(startCDATA) < 0) {
        // Se encontrado, provavelmente indica um xml, necessário tratar, pois, CDATA não permite aninhamento
        str = startCDATA + str + endCDATA; // .replace("]]>", "]>")
      } else {
        str = this.ChecaAspas(str) ? str : this.Quote(str);
      }
      return str;
    } catch (error) {
      console.log(this.constructor.name, 'ConvertToCData', error.message);
    }
  }

  // Fará as limpezas e preparações necessárias para que o conteúdo de uma tag XML seja válido, ou seja, não prejudique o XML
  PrepareToXML(str) {
    try {
      str = this.CleanNonAscII(str);
      str = this.ConvertToCData(str);
    } catch (error) {
      console.log('Global', 'PrepareToXML', error.message);
    }
    return str;
  }

  /* Verifica se o parametro é nulo, undefined, vazio, ou mesmo se é um nulo no formato que o xml retorna */
  IsNullOrEmpty(str) {
    try {
      if (str === undefined || str === null) {
        return true;
      }
      if (str.$) {
        // Para cobrir os objetos nulos resgatados do XML
        if (str.$.toLocaleString() === '[object Object]') {
          return true;
        }
      }
      return str === null || str.toString() === '';
    } catch (error) {
      console.log(this.constructor.name, 'IsNullOrEmpty', error.message);
    }
  }

  /* Verifica se cada um dos parâmetros (values) é diferente de vazio, nulo, ou undefined.
  * Pode receber um conjunto de valores.
  */
 isNotNullOrEmpty(...values) {
    try {
      return values.reduce((a, b) => a && !this.isNullOrEmpty(b), true);
    } catch (error) {
      console.log(this.constructor.name, 'isNullOrEmpty', error.message);
    }
    return false;
  }

  /* Verifica se cada um dos parâmetros (values) é diferente de vazio, nulo, ou undefined.
  * Pode receber um conjunto de valores.
  * Exatamente a mesma coisa que isNotNullOrEmpty, no entanto potencialmente mais claro.
  */
  hasValue(...values) {
    try {
      return values.reduce((a, b) => a && !this.isNullOrEmpty(b), true);
    } catch (error) {
      console.log(this.constructor.name, 'isNullOrEmpty', error.message);
    }
    return false;
  }

  /*
   *Também valida o símbolo de vazio usado no GE #VAZIO#  e "NÃO INFORMADO"
   * @param _str
   * @return
   * _considerIncludeEmpty: se true, irá verificar se uma parte da string contém algum valor nulo ou não informado,
   * pois, as strings concatenadas se comportam dessa forma.
   */
  IsNullOrEmptyGE(
    str,
    considerNotInformedAsEmpty = false,
    considerIncludeEmpty = false
  ) {
    try {
      if (this.isNullOrEmpty(str)) {
        return true;
      }

      str = str.toString().toUpperCase();
      let isNull = false;
      this.GE_EMPTY_STRINGS.every((e) => {
        if (considerIncludeEmpty) {
          if (str.includes(e.toUpperCase())) {
            isNull = true;
            return false;
          }
        } else {
          if (this.isEqual(str, e)) {
            isNull = true;
            return false;
          }
        }
        return true;
      });
      return isNull;
    } catch (error) {
      console.log(this.constructor.name, 'IsNullOrEmptyGE', error.message);
    }
    return false;
  }

  // Remove todos os caracteres fora da tabela ASCII (exemplo: símbolos de formatação do word)
  /*	CleanNonAscII(_string:String)String {
  let _nonAscII:RegExp=/[^\x00-\x7f]^ç^Ç/;
  let _cleanString:String=_string.replace(_nonAscII, "");
  return _cleanString;
  }*/

  // Elimina os caracteres fora dos limites da tabela ASCII e ASCII Extendida.
  // Retorna a string modificada e corrigida
  // A função de retorno é opcional e retorna a lista de caracteres inválidos
  // tslint:disable-next-line: ban-types
  CleanNonAscII(strToClean, funcReturnArrayOfInvalid = null) {
    try {
      let str = '';
      const invalids = new Array();
      for (let i = 0; i < strToClean.length; i++) {
        if (this.isValidASC(strToClean.charCodeAt(i))) {
          str += strToClean.charAt(i);
        } else {
          const indexSpecial = this.ASCII_SPECIAL.indexOf(strToClean.charCodeAt(i));
          if (indexSpecial >= 0) {
            str += this.ASCII_SPECIAL_REPLACE[indexSpecial];
          }
          if (invalids.indexOf(strToClean.charAt(i)) < 0) {
            // Mesmo se substituído, popular a lista de inválidos
            invalids.push(strToClean.charAt(i));
          }
        }
      }
      if (funcReturnArrayOfInvalid != null && invalids.length > 0) {
        funcReturnArrayOfInvalid(invalids);
      }
      return str;
    } catch (error) {
      console.log('Global', 'CleanNonAscII', error.message);
    }
    return strToClean;
  }

  // Testa os caracteres fora dos limites da tabela ASCII e ASCII Extendida.
  isValidASC(charCode) {
    try {
      return (
        (charCode >= this.ASCII_START && charCode <= this.ASCII_END) ||
        (charCode >= this.ASCII__EXTENDED_START && charCode <= this.ASCII_EXTENDED_END)
      );
    } catch (error) {
      console.log(this.constructor.name, 'isValidASC', error.message);
    }
  }

  /// Extrai o valor da variável, desconsiderado o track armazenado
  // Atenção: Se houvesse ";" após o número de variáveis de track ele conseguirá trazer o conteúdo,
  // mas o ponto-e-vírgula será ignorado.
  extractVariableValue(variable) {
    try {
      const lstVar = variable.split(';');
      let retorno = '';
      for (const varItem of lstVar) {
        // this.config.ACTIVITY_NUMBER_OF_TRACK_VARIABLE
        retorno += varItem;
      }
      return retorno;
    } catch (error) {
      console.log(this.constructor.name, 'extractVariableValue', error.message);
    }
  }

  EstaNoVetor(vetor, elemento) {
    try {
      let isOn = false;
      for (const str of vetor) {
        if (str === elemento) {
          isOn = true;
        }
      }
      return isOn;
    } catch (error) {
      console.log(this.constructor.name, 'EstaNoVetor', error.message);
    }
  }

  /* Similar ao isEqual, no entanto, se os campos forem datas irá ignorar diferenças de horário */
  isEqualIgnoreTime(str1, str2) {
    try {
      return this.isEqual(str1, str2, true);
    } catch (error) {
      console.log(this.constructor.name, 'isEqualIgnoreTime', error.message);
    }
  }

  /* Verifica se uma data está entre duas outras, ignorando hora */
  isBetweenIgnoreTime(dateToCheck, stDate, edDate) {
    try {
      if (!dateToCheck) {
        return false;
      }
      const startDate = new Date(stDate.getFullYear(), stDate.getMonth(), stDate.getDate(), 0, 0, 0);
      const endDate = new Date(edDate.getFullYear(), edDate.getMonth(), edDate.getDate(), 23, 59, 59);
      return dateToCheck >= startDate && dateToCheck <= endDate;
    } catch (error) {
      console.log(this.constructor.name, 'isBetweenIgnoreTime', error.message);
    }
  }

  /*Verifica se duas strings são iguais ignorando acentos e maiúsculas
  * também pode receber duas datas e, se assim o for, compara as datas.
  * Se um dos campos for null, retornará false.  */
 isEqual(str1, str2, ignoreTime = false, removeSpaces = false) {
    try {
      if (this.isNullOrEmpty(str1) && this.isNullOrEmpty(str2)) {
        return true;
      }
      if (!str1 || !str2) {
        return false;
      }

      // Se ambos forem datas, comparar como datas
      // if (this.IsDate(str1) && this.IsDate(str2)) {
      // 	if (ignoreTime) {
      // 		return this.DateToddMMYYYY(str1) === this.DateToddMMYYYY(str2);
      // 	} else {
      // 		return (str1).getTime() === (str2).getTime();
      // 	}
      // }

      const typed1 = this.getTypedValue(str1);
      const typed2 = this.getTypedValue(str2);
      if (typed1.type === this.EnTypedValue.Date && typed2.type === this.EnTypedValue.Date) {
        if (ignoreTime) {
          return this.DateToddMMYYYY(typed1.value) === this.DateToddMMYYYY(typed2.value);
        } else {
          return typed1.value.getTime() === typed2.value.getTime();
        }
      }

      // Se um dos dois indefinido, considerar diferente
      if (str1 === undefined || str2 === undefined) {
        return str1 === undefined && str2 === undefined;
      }
      // Se um dos dois nulo, considerar diferente
      if (str1 === null || str2 === null) {
        return str1 === null && str2 === null;
      }
      // Se ambos vazios considerar como igual
      if (str1.toString() === '' && str2.toString() === '') {
        return true;
      }
      if (this.IsNullOrEmpty(str1) || this.IsNullOrEmpty(str2)) {
        if (str1.toString()) {
          return false;
        }
      }
      if (removeSpaces) {
        str1 = str1?.toString().replace(/\s/g, '');
        str2 = str2?.toString().replace(/\s/g, '');
      }
      // Nos demais casos, comparar a string
      return (
        this.RemoverAcentos(str1.toString().toUpperCase()) ===
        this.RemoverAcentos(str2.toString().toUpperCase())
      );
    } catch (error) {
      console.log(this.constructor.name, 'isEqual', error.message);
    }
  }

  /*Retorna true se os textos forem iguais, ignorando maiúsculas e minúsculas e também acentuação.
  *  Retorna o index of de txt2 procurado em txt1. Se for -1 então não foi encontrado. */
 CompararIgnorarCapitulacaoEAcentuacao(txtBase, txtAProcurar) {
    try {
      const txtSemAcento1 = this.RemoverAcentos(txtBase);
      const txtSemAcento2 = this.RemoverAcentos(txtAProcurar);
      // return _txtSemAcento1.toUpperCase().indexOf(_txtSemAcento2.toUpperCase());
      return txtSemAcento1?.localeCompare(txtSemAcento2);
    } catch (error) {
      console.log(this.constructor.name, 'CompararIgnorarCapitulacaoEAcentuacao', error.message);
    }
    return 0;
  }

  /*Identifica se a str1 está contida na str2, desconsiderando acentos e capitulação
   */
  ContemSemAcentos(estaContida, contem) {
    try {
      if (this.IsNullOrEmpty(contem) || this.IsNullOrEmpty(estaContida)) {
        return false;
      }
      return (
        this.RemoverAcentos(contem.toLowerCase()).indexOf(this.RemoverAcentos(estaContida.toLowerCase())) >= 0
      );
    } catch (error) {
      console.log(this.constructor.name, 'ContemSemAcentos', error.message);
    }
  }

  RemoverAcentos(str) {
    try {
      if (!str) {
        return null;
      }

      let strReturn = '';
      for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        switch (char) {
          case 'ã':
          case 'à':
          case 'á':
          case 'à':
          case 'ä':
            strReturn += 'a';
            break;
          case 'Ã':
          case 'À':
          case 'Á':
          case 'À':
          case 'Ä':
            strReturn += 'A';
            break;
          case 'é':
          case 'ë':
          case 'ê':
          case 'è':
            strReturn += 'e';
            break;
          case 'É':
          case 'Ë':
          case 'Ê':
          case 'È':
            strReturn += 'E';
            break;
          case 'í':
          case 'ì':
          case 'ï':
            strReturn += 'i';
            break;
          case 'Í':
          case 'Ì':
          case 'Ï':
            strReturn += 'I';
            break;
          case 'Ó':
          case 'Õ':
          case 'Ô':
            strReturn += 'O';
            break;
          case 'ó':
          case 'õ':
          case 'ô':
            strReturn += 'o';
            break;
          case 'ú':
          case 'ü':
          case 'ù':
            strReturn += 'u';
            break;
          case 'Ú':
          case 'Ü':
          case 'Ù':
            strReturn += 'U';
            break;
          case 'ç':
            strReturn += 'c';
            break;
          case 'Ç':
            strReturn += 'C';
            break;
          default:
            strReturn += char;
            break;
        }
      }
      return strReturn;
    } catch (error) {
      console.log(this.constructor.name, 'RemoverAcentos', error.message);
    }
  }

  /* Retorna true se _str estiver entre aspas (aspas no primeiro e no último caracter). */
  ChecaAspas(str) {
    try {
      if (this.IsNullOrEmpty(str)) {
        return false;
      }
      str = str.toString();
      const firstChar = str.substr(0, 1);
      const lastChar = str.substr(str.length - 1, 1);
      const result = firstChar === lastChar && firstChar === '"';
      return result;
    } catch (error) {
      console.log(this.constructor.name, 'ChecaAspas', error.message);
    }
  }

  // Retorna a _str entre aspas (se já estivesse entre aspas, faz nada)
  AcrescentarAspas(str) {
    try {
      if (this.ChecaAspas(str)) {
        return str;
      } else {
        return '"' + str + '"';
      }
    } catch (error) {
      console.log(this.constructor.name, 'AcrescentarAspas', error.message);
    }
  }
  // /**
  //  *Remove todas as marcações \r e \n da string.
  //  *
  //  */
  // RemoveLineBreaks(_text) {
  //   try {
  //     _text = this.RemoveAll(_text, "\r");
  //     return this.RemoveAll(_text, "\n");
  //   } catch (error) {
  //     console.log("Global", "RemoveLineBreaks", "Error: " + error.message);
  //   }
  //   return null;
  // }

  getGUID() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  isGUID(guid) {
    const regex = /.{8}-.{4}-.{4}-.{4}-.{12}/g;
    return regex.test(guid);
  }

  addMonthsUTC(date, count) {
    try {
      if (!date) {
        return null;
      }
      return new Date(date.getFullYear(), date.getMonth() + count, date.getDate());
    } catch (error) {
      console.log(this.constructor.name, 'addMonthsUTC', error.message);
    }
  }

  addDays(date, days) {
    try {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    } catch (error) {
      console.log(this.constructor.name, 'addDays', error.message);
    }
  }

  isBetween(dt, dtStart, dtEnd) {
    try {
      return new Date(dt) >= new Date(dtStart) && new Date(dt) <= new Date(dtEnd);
    } catch (error) {
      console.log(this.constructor.name, 'isBetween', error.message);
    }
  }

  getMonthName(date, locale = 'pt-BR') {
    try {
      const month = date.toLocaleString(locale, { month: 'short' });
      return month;
    } catch (error) {
      console.log(this.constructor.name, 'getMonthName', error.message);
    }
  }

  getMonthYear(dt, locale = 'pt-BR') {
    try {
      if (!dt) {
        return null;
      }
      const date = new Date(dt);
      return this.getMonthName(date, locale) + '/' + date.getFullYear();
    } catch (error) {
      console.log(this.constructor.name, 'getMonthYear', error.message);
    }
  }

  getDayMonth(dt, locale = 'pt-BR') {
    try {
      const date = new Date(dt);
      const day = '0' + date.getDate();
      return this.getRight(day, 2) + '/' + this.getMonthName(date, locale);
    } catch (error) {
      console.log(this.constructor.name, 'getDayMonth', error.message);
    }
  }

  getRight(str, num) {
    try {
      return str.slice(-num);
    } catch (error) {
      console.log(this.constructor.name, 'getRight', error.message);
    }
  }

  getLeft(str, num) {
    try {
      return str.slice(0, num);
    } catch (error) {
      console.log(this.constructor.name, 'getLeft', error.message);
    }
  }

  // Verifica se a data fornecida esta no mês/ano atual
   isInCurrentMonth(date) {
    try {
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();
      const dt = new Date(date);
      return dt.getMonth() === month && dt.getFullYear() === year;
    } catch (error) {
      console.log(this.constructor.name, 'isInCurrentMonth', error.message);
    }
  }

  /* Atenção: número do mês baseado em 1. */
  getDaysOfMonth(year, month) {
    try {
      const days = [];
      const dt = new Date(year, month, 0); // Não adicionado +1 no mês, pois é baseado em zero.
      const lastDay = dt.getDate();
      for (let i = 1; i <= lastDay; i++) {
        days.push({ id: i, name: i.toString() });
      }
      return days;
    } catch (error) {
      console.log(this.constructor.name, 'getDaysOfMonth', error.message);
    }
  }

  /* Atenção: número do mês baseado em 1. */
  getDaysMonthOfMonth(year, month) {
    try {
      const days = [];
      const dt = new Date(year, month, 0); // Não adicionado +1 no mês, pois é baseado em zero.
      const lastDay = dt.getDate();
      for (let i = 1; i <= lastDay; i++) {
        const monthName = this.getMonthName(dt);
        days.push({ id: i, name: this.getRight('0' + i, 2) + '/' + monthName });
      }
      return days;
    } catch (error) {
      console.log(this.constructor.name, 'getDaysMonthOfMonth', error.message);
    }
  }

  getMonthNames(locale = 'pt-BR') {
    try {
      const months = [];
      for (let i = 0; i <= 11; i++) {
        const date = new Date(2016, i, 1);
        months.push({ id: i, name: this.getMonthName(date, locale) });
      }
      return months;
    } catch (error) {
      console.log(this.constructor.name, 'getMonthNames', error.message);
    }
  }

  dateToYYYYMMddThhmmss(strDate) {
    try {
      if (!strDate) {
        return null;
      }
      const sep = '-';
      const sepH = ':';
      const dt = new Date(strDate);
      return (
        dt.getFullYear() +
        sep +
        this.addL0(dt.getMonth() + 1) +
        sep +
        this.addL0(dt.getDate()) +
        'T' +
        this.addL0(dt.getHours()) +
        sepH +
        this.addL0(dt.getMinutes()) +
        sepH +
        this.addL0(dt.getSeconds())
      );
    } catch (error) {
      console.log(this.constructor.name, 'dateToYYYYMMddThhmmss', error.message);
    }
  }

  dateToddMMYYYYhhmmss(strDate, sep = '/', showSeconds = true) {
    try {
      if (!strDate) {
        return null;
      }
      const sepH = ':';
      const dt = new Date(strDate);
      const sec = showSeconds ? sepH + this.addL0(dt.getSeconds()) : '';
      return (
        this.addL0(dt.getDate()) +
        sep +
        this.addL0(dt.getMonth() + 1) +
        sep +
        dt.getFullYear() +
        ' ' +
        this.addL0(dt.getHours()) +
        sepH +
        this.addL0(dt.getMinutes()) + sec
      );
    } catch (error) {
      console.log(this.constructor.name, 'dateToYYYYMMddThhmmss', error.message);
    }
  }

  dateTohhmmss(strDate, showSeconds = true, sepH = ':') {
    try {
      if (!strDate) {
        return null;
      }
      const dt = new Date(strDate);
      return (
        this.addL0(dt.getHours()) +
        sepH +
        this.addL0(dt.getMinutes()) +
        (showSeconds ? sepH + this.addL0(dt.getSeconds()) : '')
      );
    } catch (error) {
      console.log(this.constructor.name, 'dateToYYYYMMddThhmmss', error.message);
    }
  }

  dateToddMMYYYY(strDate) {
    try {
      if (strDate === undefined || strDate === '' || strDate === null) {
        return '';
      }
      const sep = '/';
      const dt = new Date(strDate);
      return this.addL0(dt.getDate()) + sep + this.addL0(dt.getMonth() + 1) + sep + dt.getFullYear();
    } catch (error) {
      console.log(this.constructor.name, 'dateToddMMYYYY', error.message);
    }
  }

  dateToYYYYMMdd(strDate, sep = '-') {
    try {
      if (strDate === undefined || strDate === '' || strDate === null) {
        return '';
      }
      const dt = new Date(strDate);
      return dt.getFullYear() + sep + this.addL0(dt.getMonth() + 1) + sep + this.addL0(dt.getDate());
    } catch (error) {
      console.log(this.constructor.name, 'dateToYYYYMMdd', error.message);
    }
  }

  addFormatDate() {
    try {
      const data = new Date();
      const dia = data.getDate().toString();
      const diaF = (dia.length === 1) ? '0' + dia : dia;
      const mes = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
      const mesF = (mes.length === 1) ? '0' + mes : mes;
      const anoF = data.getFullYear();
      return diaF + "/" + mesF + "/" + anoF;
    } catch (error) {
      console.log(this.constructor.name, 'addFormatDate', error.message);
    }
    return null;
  }

  // Adiciona um zero a esquerda
  addL0(str, numOfDig = 2) {
    try {
      if (typeof str !== 'string') {
        str = str.toString();
      }
      return this.getRight('0' + str, 2);
    } catch (error) {
      console.log(this.constructor.name, 'addL0', error.message);
    }
  }

  isSameDate(date1, date2) {
    try {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    } catch (error) {
      console.log(this.constructor.name, 'isSameDate', error.message);
    }
  }

  /*Converte número em português para padrão computacional
  //Se não for possível converter, retorna zero. */
  convertNumber(str) {
    try {
      let num = 0;
      const typed = this.getTypedValue(str);
      num = typed.value;
      try {
        // num = parseFloat((str as string).replace(".", "").replace(",", "."));
      } catch (err) { }
      return num;
    } catch (error) {
      console.log(this.constructor.name, 'convertNumber', error.message);
    }
  }

  // Verifica se o valor é SIM, true, 1, string, ou booleano
  convertBoolean(str) {
    try {
      if (typeof str === 'boolean') {
        return str;
      }
      if (typeof str === 'number') {
        return str <= 0 ? false : true;
      }
      if (typeof str === 'string') {
        if (str.toUpperCase() === 'SIM' || str.toUpperCase() === 'TRUE' || str.toUpperCase() === 'VERDADEIRO') {
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log(this.constructor.name, 'convertBoolean', error.message);
    }
  }

  contem(fullText, search) {
    try {
      return this.tratar(fullText).indexOf(this.tratar(search)) >= 0;
    } catch (error) {
      console.log(this.constructor.name, 'contem', error.message);
    }
  }

  isNullOrEmpty(str) {
    try {
      if (str === 'undefined') {
        return true;
      }
      if (str === undefined) {
        return true;
      }
      if (str === 'null') {
        return true;
      }
      if (str === null) {
        return true;
      }
      if (str?.toString() === '') {
        return true;
      }
    } catch (error) {
      console.log(this.constructor.name, 'isNullOrEmpty', error.message);
    }
    return false;
  }

  // Utilizar esse método dos dois lados da expressão de comparação para ficar caseinsensitive e desconsiderar acentos
  tratar(str) {
    try {
      if (!str) {
        return str;
      }
      str = str.toLocaleUpperCase();
      for (const obj of this.replace) {
        str = str.replace(obj.de, obj.para);
      }
      return str;
    } catch (error) {
      console.log(this.constructor.name, 'tratar', error.message);
    }
  }

  // Retorna uma string com o nome de coluna que pode ser MES/ANO, ANO ou DIA/MES
  getClm(dateDue, periodTypeId) {
    try {
      let column = '';
      switch (periodTypeId) {
        default:
        case 1:
          column = this.getDayMonth(dateDue);
          break;
        case 2:
          column = this.getMonthYear(dateDue);
          break;
        case 3:
          column = new Date(dateDue).getFullYear().toString();
          break;
      }
      return column;
    } catch (error) {
      console.log(this.constructor.name, 'getClm', error.message);
    }
  }

  // Retorna "-" se não informado
  getNaoInformadoMask(str) {
    try {
      return this.isGEEmpty(str) ? '-' : str;
    } catch (error) {
      console.log(this.constructor.name, 'getNaoInformadoMask', error.message);
    }
  }

  isGEEmpty(str) {
    try {
      return (
        str.toUpperCase() === this.GE_NOT_INFORMED ||
        str === '' ||
        str.toUpperCase() === this.GE_EMPTY ||
        str === undefined
      );
    } catch (error) {
      console.log(this.constructor.name, 'isGEEmpty', error.message);
    }
  }

  /*
* Adiciona um tempo a uma data
* @param datepart y adicionará anos, m meses, d dias
* @param number
* @param date
* @return
*
*/
DateAdd(datepart = '', nmb = 0, date = null) {
    try {
      if (date == null) {
        /* Default to current date. */
        date = new Date();
      }
      const returnDate = new Date(date.valueOf());

      // trace("ReturnDate:"+returnDate);
      // trace("datePart:"+datepart);
      switch (this.RemoverAspas(datepart).toLowerCase()) {
        case 'y':
          returnDate.setFullYear(+returnDate.getFullYear() + +nmb);
          // returnDate["fullYear"] += number;
          break;
        case 'm':
          returnDate.setMonth(+returnDate.getMonth() + +nmb);
          // returnDate["month"] += number;
          break;
        case 'w':
          returnDate.setDate(+returnDate.getDate() + +nmb * 6);
          // returnDate["date"] += number * 6;
          break;
        case 'd':
          returnDate.setDate(+returnDate.getDate() + +nmb);
          break;
        default:
          /* Unknown date part, do nothing. */
          break;
      }
      return returnDate;
    } catch (error) {
      console.log(this.constructor.name, 'DateAdd', error.message);
    }
  }

  /* Gera um vetor com todos os dias contidos num intervalo de datas. */
  generateDates(dtStart, dtEnd) {
    try {
      const dts = new Array();
      const numbOfDays = this.dateDiffDays(dtStart, dtEnd);
      let currentDt = dtStart;
      for (let i = 0; i < numbOfDays; i++) {
        dts.push(currentDt);
        currentDt = this.DateAdd('d', 1, currentDt);
      }
      return dts;
    } catch (error) {
      console.log(this.constructor.name, 'generateDates', error.message);
    }
    return null;
  }

  /*
     * Se a string estiver entre aspas (início e fim) remove, senão retorna a própria string.
     * Não remove aspas no meio da string.
     * @param _str
     * @return
     *
     */
  RemoverAspas(str) {
    try {
      if (this.ChecaAspas(str)) {
        return this.RemoveLastChar(this.RemoveFirstChar(str));
      } else {
        return str;
      }
    } catch (error) {
      console.log(this.constructor.name, 'RemoverAspas', error.message);
    }
  }

  /*
   *Remove todas as marcações \r e \n da string.
   *
   */
  RemoveLineBreaks(text) {
    try {
      text = this.RemoveAll(text, '\r');
      return this.RemoveAll(text, '\n');
    } catch (error) {
      console.log('Global', 'RemoveLineBreaks', 'Error: ' + error.message);
    }
    return null;
  }

  /*
   * Tenta converter um número para o padrão americano.
    Tentará identificar se já está no padrão americano, baseado no
    número de casas decimais depois do ponto.
   * @param _number
   * @param _removeNonDigit: removerá todos os símbolos que não sejam números ou o separador de milhar .
   * @return
   *
   */
ConvertToAmericanNumber(nmb, numDecimalPlacesIn = 2, removeNonDigit = false) {
    try {
      if (this.isNullOrEmpty(nmb)) {
        return 0;
      }
      if (this.IsAmericanNumber(nmb, numDecimalPlacesIn)) {
        // Significa que existe um único ponto (potencialmente já
        // está no padrão americado). Se for não tem ponto e se for maior mais de um ponto
        return parseFloat(nmb);
      }
      let strNum = nmb.toString().replace('/./g', '').replace(',', '.');
      if (removeNonDigit) {
        strNum = this.removeNonDigit(strNum);
      }
      const convertedNumber = parseFloat(strNum);
      return convertedNumber;
    } catch (error) {
      console.log(this.constructor.name, 'ConvertToAmericanNumber', error.message);
    }
  }

  /* Removerá todos os símbolos que não sejam números ou o separador de milhar . */
  removeNonDigit(str) {
    try {
      str = str.replace(/[^\d\.]/g, '');
      return str;
    } catch (error) {
      console.log(this.constructor.name, 'removeNonDigit', error.message);
    }
  }

  removeNumber(str) {
    try {
      const number = this.removeNonDigit(str);
      str = str.replace(number, '');
      return str;
    } catch (error) {
      console.log(this.constructor.name, 'removeNumber', error.message);
    }
  }

  IsAmericanNumber(nmb, numDecimalPlaces = 2) {
    try {
      if (this.isNullOrEmpty(nmb)) {
        return false;
      }

      const regexNum = /^-*[0-9,\,,\.]+$/;
      const isNum = regexNum.test(nmb);
      if (!isNum) {
        return false;
      }

      return !isNaN(nmb);
      // const _array = _number.toString().split('.');
      // if (_array.length === 2) {
      // Significa que existe um único ponto (potencialmente já
      // está no padrão americado). Se for não tem ponto e se for maior mais de um ponto
      //   if (_array[1].length <= _numDecimalPlaces) {
      //     return true;
      //   }
      // }
      // return false;
    } catch (error) {
      console.log(this.constructor.name, 'IsAmericanNumber', error.message);
    }
  }

  /* Checa se o número é um inteiro (ou seja, positivo, zero ou negativo mas sem casas decimais). */
  isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }

  /* Checa se o número é um fload (ou seja, positivo, zero ou negativo mas com casas decimais). */
  isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  /*
   * Tenta converter um número para o padrão brasileiro.
   Tentará identificar se já está no padrão americano,
    baseado no número de casas decimais depois do ponto.
   * @param _number
   * @param _numDecimalPlacesIn: número de casas decimais
   *  esperado (usado na comparação para determinar se está
   * no padrão americano ou brasileiro) na entrada do dado
   * @param _numDecimalPlacesOut: Número de casas decimais com que o número será retornado
   * @return
   *
   */
  ConvertToBrazilianNumber(
    nmb,
    numDecimalPlacesIn = 2,
    numDecimalPlacesOut = 2
  ) {
    try {
      if (!this.IsAmericanNumber(nmb, numDecimalPlacesIn)) {
        nmb = this.ConvertToAmericanNumber(nmb, numDecimalPlacesIn).toString();
      }
      nmb = Number(nmb).toFixed(numDecimalPlacesOut);
      const convertedNumber = nmb.toString().replace(',', '').replace('.', ',');
      return convertedNumber;
    } catch (error) {
      console.log(this.constructor.name, 'ConvertToBrazilianNumber', error.message);
    }
  }

  /* Faz o processo inverso de getId: a partir do id retorna a VariavelNo */
  getVariavelNoFromId(id) {
    try {
      return parseInt(id.toString().replace('V_', ''), 10);
    } catch (error) {
      console.log(this.constructor.name, 'getVariavelNoFromId', error.message);
    }
    return null;
  }

  // getGUID() {
  //   s4() {
  //     return Math.floor((1 + Math.random()) * 0x10000)
  //       .toString(16)
  //       .substring(1);
  //   }
  //   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  //     s4() + '-' + s4() + s4() + s4();
  // }

  /* Clona um objeto do tipo referência. Copia as propriedades e valores, mas não apontará para a mesma posição de memória. */
  cloneObj(obj) {
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch (error) {
      console.log(this.constructor.name, 'cloneObj', error.message);
    }
  }

  /* Retorna uma lista de nomes fictícios para médicos */
  getNamesDoctorFiction(quantity) {
    try {
      const names = [];
      for (let i = 0; i < quantity; i++) {
        const rnd = Math.round(Math.random() * this.namesDoctorFiction.length);
        names.push(this.namesDoctorFiction[rnd]);
      }
      return names;
    } catch (error) {
      console.log(this.constructor.name, 'getNamesDoctorFiction', error.message);
    }
  }

  /*Retorna um valor entre 0 e 1 (percentual) sobre o quão semelhante são as strings.
   * https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
   */
  similarity(s1, s2) {
    try {
      let longer = s1;
      let shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      const longerLength = longer.length;
      if (longerLength === 0) {
        return 1.0;
      }
      return (longerLength - this.editDistance(longer, shorter)) / longerLength;
    } catch (error) {
      console.log(this.constructor.name, 'similarity', error.message);
    }
  }

  extractFileNameFromPath(path) {
    try {
      const fileName = path?.replace(/^.*(\\|\/|\:)/, '');
      const extension = fileName ? fileName?.substr(fileName?.lastIndexOf('.') + 1) : '';
      return {
        fileName,
        extension
      };
    } catch (error) {
      console.log(this.constructor.name, 'extractFileNameFromPath', error.message);
    }
    return null;
  }

  /* Método auxiliar o qual o similarity depende. */
  editDistance(s1, s2) {
    try {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();
      const costs = new Array();
      for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
          if (i === 0) {
            costs[j] = j;
          } else {
            if (j > 0) {
              let newValue = costs[j - 1];
              if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
              }
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0) {
          costs[s2.length] = lastValue;
        }
      }
      return costs[s2.length];
    } catch (error) {
      console.log(this.constructor.name, 'editDistance', error.message);
    }
  }

  /* Pega um texto e remove acentos, espaços, preposições, etc. */
  convertLabelToProperty(str) {
    try {
      let res = this.removeDiacritics(str);
      res = this.removeConjuncao(res);
      const arr = res.split(' ');
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substring(1);
      }
      res = arr.join('');
      return res.substr(0, 1).toLowerCase() + res.substring(1);
    } catch (error) {
      console.log(this.constructor.name, 'convertLabelToProperty', error.message);
    }
  }

  primeiraMaiuscula(str, allUpperCase = true) {
    let isFirst = true;
    return `${str.split(' ')
      .map(m => {
        if ((isFirst || allUpperCase) && !this.isConjuncao(m)) {
          isFirst = false;
          return `${m.substr(0, 1).toUpperCase()}${m.substr(1).toLowerCase()}`;
        } else {
          return m.toLowerCase();
        }
      }).join(' ')}`;
  }

  isConjuncao(str) {
    return this.exprConjuncao.test(str);
  }

  removeConjuncao(str) {
    try {
      return str.replace(/\s(de|do|o|a|e|dos|da|das|de|para|se)\s/g, '');
    } catch (error) {
      console.log(this.constructor.name, 'removeConjuncao', error.message);
    }
  }

  getInitials(name) {
    try {
      if (name) {
        name = this.removeConjuncao(name);
        return `${name.split(' ').map(m => m.substr(0, 1).toUpperCase()).join('.')}.`;
      }
    } catch (error) {
      console.log(this.constructor.name, 'getInitials', error.message);
    }
    return name;
  }

  removeDiacritics(str) {
    try {
      return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      // str = str.toUpperCase();
      // const defaultDiacriticsRemovalMap = [
      //   {
      //     base: 'A',
      //     letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
      //   },
      //   { base: 'AA', letters: /[\uA732]/g },
      //   { base: 'AE', letters: /[\u00C6\u01FC\u01E2]/g },
      //   { base: 'AO', letters: /[\uA734]/g },
      //   { base: 'AU', letters: /[\uA736]/g },
      //   { base: 'AV', letters: /[\uA738\uA73A]/g },
      //   { base: 'AY', letters: /[\uA73C]/g },
      //   { base: 'B', letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g },
      //   { base: 'C', letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g },
      //   {
      //     base: 'D',
      //     letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
      //   },
      //   { base: 'DZ', letters: /[\u01F1\u01C4]/g },
      //   { base: 'Dz', letters: /[\u01F2\u01C5]/g },
      //   {
      //     base: 'E',
      //     letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
      //   },
      //   { base: 'F', letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g },
      //   {
      //     base: 'G',
      //     letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
      //   },
      //   {
      //     base: 'H',
      //     letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
      //   },
      //   {
      //     base: 'I',
      //     letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
      //   },
      //   { base: 'J', letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g },
      //   {
      //     base: 'K',
      //     letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
      //   },
      //   {
      //     base: 'L',
      //     letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
      //   },
      //   { base: 'LJ', letters: /[\u01C7]/g },
      //   { base: 'Lj', letters: /[\u01C8]/g },
      //   { base: 'M', letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g },
      //   {
      //     base: 'N',
      //     letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
      //   },
      //   { base: 'NJ', letters: /[\u01CA]/g },
      //   { base: 'Nj', letters: /[\u01CB]/g },
      //   {
      //     base: 'O',
      //     letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
      //   },
      //   { base: 'OI', letters: /[\u01A2]/g },
      //   { base: 'OO', letters: /[\uA74E]/g },
      //   { base: 'OU', letters: /[\u0222]/g },
      //   { base: 'P', letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g },
      //   { base: 'Q', letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g },
      //   {
      //     base: 'R',
      //     letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
      //   },
      //   {
      //     base: 'S',
      //     letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
      //   },
      //   {
      //     base: 'T',
      //     letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
      //   },
      //   { base: 'TZ', letters: /[\uA728]/g },
      //   {
      //     base: 'U',
      //     letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
      //   },
      //   { base: 'V', letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g },
      //   { base: 'VY', letters: /[\uA760]/g },
      //   { base: 'W', letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g },
      //   { base: 'X', letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g },
      //   {
      //     base: 'Y',
      //     letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
      //   },
      //   {
      //     base: 'Z',
      //     letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
      //   },
      //   {
      //     base: 'a',
      //     letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
      //   },
      //   { base: 'aa', letters: /[\uA733]/g },
      //   { base: 'ae', letters: /[\u00E6\u01FD\u01E3]/g },
      //   { base: 'ao', letters: /[\uA735]/g },
      //   { base: 'au', letters: /[\uA737]/g },
      //   { base: 'av', letters: /[\uA739\uA73B]/g },
      //   { base: 'ay', letters: /[\uA73D]/g },
      //   { base: 'b', letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g },
      //   {
      //     base: 'c',
      //     letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
      //   },
      //   {
      //     base: 'd',
      //     letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
      //   },
      //   { base: 'dz', letters: /[\u01F3\u01C6]/g },
      //   {
      //     base: 'e',
      //     letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
      //   },
      //   { base: 'f', letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g },
      //   {
      //     base: 'g',
      //     letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
      //   },
      //   {
      //     base: 'h',
      //     letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
      //   },
      //   { base: 'hv', letters: /[\u0195]/g },
      //   {
      //     base: 'i',
      //     letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
      //   },
      //   { base: 'j', letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g },
      //   {
      //     base: 'k',
      //     letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
      //   },
      //   {
      //     base: 'l',
      //     letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
      //   },
      //   { base: 'lj', letters: /[\u01C9]/g },
      //   { base: 'm', letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g },
      //   {
      //     base: 'n',
      //     letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
      //   },
      //   { base: 'nj', letters: /[\u01CC]/g },
      //   {
      //     base: 'o',
      //     letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
      //   },
      //   { base: 'oi', letters: /[\u01A3]/g },
      //   { base: 'ou', letters: /[\u0223]/g },
      //   { base: 'oo', letters: /[\uA74F]/g },
      //   { base: 'p', letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g },
      //   { base: 'q', letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g },
      //   {
      //     base: 'r',
      //     letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
      //   },
      //   {
      //     base: 's',
      //     letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
      //   },
      //   {
      //     base: 't',
      //     letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
      //   },
      //   { base: 'tz', letters: /[\uA729]/g },
      //   {
      //     base: 'u',
      //     letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
      //   },
      //   { base: 'v', letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g },
      //   { base: 'vy', letters: /[\uA761]/g },
      //   { base: 'w', letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g },
      //   { base: 'x', letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g },
      //   {
      //     base: 'y',
      //     letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
      //   },
      //   {
      //     base: 'z',
      //     letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
      //   }
      // ];
      // for (const item of defaultDiacriticsRemovalMap) {
      //   str = str.replace(item.letters, item.base);
      // }
      // return str;
    } catch (error) {
      console.log(this.constructor.name, 'removeDiacritics', error.message);
    }
  }

  /* Retorna um valor booleano a partir da comparação de um valor do tipo 'SIM'. */
  getBoolean(value, yesValue = 'SIM') {
    try {
      if (value) {
        return value.toUpperCase() === yesValue.toUpperCase() ? true : false;
      } else {
        return null;
      }
    } catch (error) {
      console.log(this.constructor.name, 'getBoolean', error.message);
    }
  }

  /* Faz o inverso de getBoolean */
  getReverseBoolean(value, yesValue = 'Sim', noValue = 'Não') {
    try {
      return value ? yesValue : noValue;
    } catch (error) {
      console.log(this.constructor.name, 'getReverseBoolean', error.message);
    }
    return 'Não';
  }

  validarCNPJ(cnpj) {
    try {
      cnpj = cnpj.replace(/[^\d]+/g, '');
      // Valida a quantidade de caracteres
      if (cnpj.length !== 14) {
        return false;
      }
      // Elimina inválidos com todos os caracteres iguais
      if (/^(\d)\1+$/.test(cnpj)) {
        return false;
      }
      // Cáculo de validação
      const t = cnpj.length - 2;
      const d = cnpj.substring(t);
      const d1 = parseInt(d.charAt(0), 10);
      const d2 = parseInt(d.charAt(1), 10);
      const calc = (x) => {
        const n = cnpj.substring(0, x);
        let y = x - 7;
        let s = 0;
        let r = 0;
        for (let i = x; i >= 1; i--) {
          s += n.charAt(x - i) * y--;
          if (y < 2) {
            y = 9;
          }
        }
        r = 11 - s % 11;
        return r > 9 ? 0 : r;
      };
      return calc(t) === d1 && calc(t + 1) === d2;
    } catch (error) {
      console.log(this.constructor.name, 'validarCNPJ', error.message);
    }
    return false;
  }

  validarCPF(strCPF) {
    try {
      if (!strCPF) {
        return null;
      }

      let soma;
      let resto;
      strCPF = strCPF.toString();
      strCPF = strCPF.replace(/[^\d]+/g, '');
      soma = 0;
      if (strCPF === '00000000000') { return false; }
      for (let i = 1; i <= 9; i++) { soma = soma + parseInt(strCPF.substring(i - 1, i), 10) * (11 - i); }
      resto = (soma * 10) % 11;
      if ((resto === 10) || (resto === 11)) { resto = 0; }
      if (resto !== parseInt(strCPF.substring(9, 10), 10)) { return false; }
      soma = 0;
      for (let i = 1; i <= 10; i++) { soma = soma + parseInt(strCPF.substring(i - 1, i), 10) * (12 - i); }
      resto = (soma * 10) % 11;
      if ((resto === 10) || (resto === 11)) { resto = 0; }
      if (resto !== parseInt(strCPF.substring(10, 11), 10)) { return false; }
      return true;
    } catch (error) {
      console.log(this.constructor.name, 'validarCPF', error.message);
    }
    return false;
  }

}

function creatretour (pos) {
  var newretour = document.createElement('br')
  document.getElementById(pos).appendChild(newretour)
}
function creatText (type, text, pos) {
  var newtext = document.createElement(type)
  newtext = document.createTextNode(text)
  document.getElementById(pos).appendChild(newtext)
}
function creatlabel (text, pos, ident) {
  var newlabel = document.createElement('label')
  newlabel = document.createTextNode(text)
  newlabel.for = 'resplabel'
  newlabel.ID = ident
  document.getElementById(pos).appendChild(newlabel)
}
function creatinput (ident, cla, nom, pos) {
  var newkey = document.createElement('input')
  newkey.id = ident
  newkey.className = cla
  newkey.type = 'text'
  newkey.name = nom
  document.getElementById(pos).appendChild(newkey)
}
function messResp (text) {
  document.getElementById('repp').innerHTML = text
}
function supr (keyID) {
  var key = document.getElementById(keyID)
  if (key) {
    key.remove()
  }
}

// add new keyword "or";
document.getElementById('add').addEventListener('click', function (e) {
  if (!document.getElementById('and0')) {
    var t = document.getElementsByTagName('form').length
    var newand = document.createElement('form')
    newand.id = 'and' + t
    document.getElementById('keyword').appendChild(newand)
    creatText('t2', 'And', 'and' + t)
    creatretour('and' + t)
    var n = document.getElementById('and' + t).elements.length
    creatlabel('Mots-clés: ', 'and' + t, 'lab')
    creatinput('kwa' + t + ',' + n, 'kw' + t, 'keywordAnd', 'and' + t)
    t = document.getElementById('and0').elements.length
    creatretour('and0')
    creatlabel('Mots-clés: ', 'and0', 'lab' + t)
    creatinput('kw' + t, 'kw1', 'keywordOr', 'and0')
    creatretour('and0')
  } else {
    t = document.getElementById('and0').elements.length
    var newor = document.createElement('div')
    newor.id = 'or' + t
    document.getElementById('and0').appendChild(newor)
    creatText('p', 'ou', 'or' + t)
    creatretour('or' + t)
    creatlabel('Mots-clés: ', 'or' + t, 'lab' + t)
    creatinput('kw' + t, 'kw1', 'keywordOr', 'or' + t)
    creatretour('or' + t)
  }
}
)

// add keyword "and"
document.getElementById('addand').addEventListener('click', function (e) {
  var t = document.getElementsByTagName('form').length
  var newand = document.createElement('form')
  newand.id = 'and' + t
  document.getElementById('keyword').appendChild(newand)
  creatText('t2', 'And', 'and' + t)
  creatretour('and' + t)
  var n = document.getElementById('and' + t).elements.length
  creatlabel('Mots-clés: ', 'and' + t, 'lab')
  creatinput('kwa' + t + ',' + n, 'kw' + t, 'keywordAnd', 'and' + t)
}
)

// launch enigme;
document.getElementById('submit').addEventListener('click', function (e) {
  document.getElementById('keyword').style.visibility = 'hidden'
  document.getElementById('reponse').style.visibility = 'visible'
  var quest = document.getElementById('questtext').value

  document.getElementById('quest').innerHTML = quest
}
)

// delete keyword
document.getElementById('suprand').addEventListener('click', function (e) {
  var t = document.getElementsByTagName('form').length - 1
  supr('and' + t)
}
)
document.getElementById('supror').addEventListener('click', function (e) {
  var t = document.getElementById('and0').elements.length - 1
  supr('or' + t)
}
)

// response treatment;
document.getElementById('but').addEventListener('click', function (e) {
  var reponse = document.getElementById('rep').value.toLowerCase().replace(/[éèêë]/g, 'e')
  var boucle = true
  for (var i = 0; boucle; i++) {
    // search keyword in "reponse"
    if (!document.getElementById('kw' + i)) {
      break
    }
    var keya = document.getElementById('kw' + i).value.toLowerCase().replace(/[éèêë]/g, 'e').replace(' ', '')
    if (keya === '') {
      keya = null
    }
    // if there is is no answer
    if (keya == null) {
      messResp('Fool ! There is no Answer !')
    }
    // check if there is a response
    var search = reponse.indexOf(keya)
    if (reponse === '') {
      messResp("vous n'avez rien écrit...")
    }
    // check if keyword is present in "reponse"
    if (search >= 0) {
      var v = document.getElementsByTagName('form').length
      if (v === 1) {
        messResp('Bien joué !')
        boucle = false
        break
      } else {
        for (var j = 0; j <= v + 1; j++) {
          var u = document.getElementById('and' + j).length
          var verif = 0
          for (var k = 0; k < u - 1; k++) {
            var a = j + 1
            var test = document.getElementById('kwa' + a + ',' + k).value.toLowerCase().replace(/[éèêë]/g, 'e').replace(' ', '')
            if (test === '') {
              test = '?'
            }
            var search1 = reponse.search(test)
            verif += search1
          }
          if (verif === u * (-1)) {
            messResp('Essaye encore !')
          } else {
            messResp('Bien joué !')
            boucle = false
            break
          }
        }
      }
    } else {
      messResp('Essaye encore !')
    }
  }
}
)

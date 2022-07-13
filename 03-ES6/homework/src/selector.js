//const TemplateGlob = require("@11ty/eleventy/src/TemplateGlob");


var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let child1 = startEl.children[i];
    let result = traverseDomAndCollectElements(matchFunc, child1)
    resultSet = [...resultSet, ...result]
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (selector.split('.').length === 2) return 'tag.class';
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (elem) => '#' + elem.id === selector;
  } else if (selectorType === "class") {
    matchFunction = function (element) {
      let clase = element.classList;
      for (let i = 0; i < clase.length; i++) {
        if ('.' + clase[i] === selector) {
          return true;
        }
      }
      return false
    }
  }
  else if (selectorType === "tag.class") {
    matchFunction = function (elem) {
      let [tag1, class1] = selector.split('.')
      return (matchFunctionMaker(tag1)(elem) && matchFunctionMaker('.' + class1)(elem));
    }

  } else if (selectorType === "tag") {
    matchFunction = function (elem) {
      return elem.tagName.toLowerCase() === selector; //localName
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

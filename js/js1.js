alert ('задание 3-4');
	function create( name, attributes ) {
var el = document.createElement( name );
if ( typeof attributes == 'object' ) {
for ( var i in attributes ) {
el.setAttribute( i, attributes[i] );

if ( i.toLowerCase() == 'class' ) {
el.className = attributes[i]; // for IE compatibility

} else if ( i.toLowerCase() == 'style' ) {
el.style.cssText = attributes[i]; // for IE compatibility
}
}
}
for ( var i = 2;i < arguments.length; i++ ) {
var val = arguments[i];
if ( typeof val == 'string' ) { val = document.createTextNode( val ) };
el.appendChild( val );
}
return el;
}

var test = create( "div", { class: "wraper"},
 create( "form",{'action':'#' },
     create( 'h1', {},"Тест по программированию"),
     create("ol",{},
         create('li',{},'Вопрос №1',
            create('ul',{},
              create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 1"))),
                create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 2"))),
                create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 3"))))),

         create('li',{},'Вопрос №2',
            create('ul',{},
                create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 1"))),
                create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 2"))),
                create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 3"))))),
         create('li',{},'Вопрос №3',
            create('ul',{},
                create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 1"))),
                create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 2"))),
                create('li',{},
                  create('label',{},
                   create('input',{type: 'checkbox'}),
                   create('span',{},"Вариант ответа № 3")))))),

    create('button',{type:'submit', "class":'btn btn-info'},"Проверить мои результаты")));


document.body.appendChild(test);

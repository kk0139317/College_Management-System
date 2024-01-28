var a = '0px';
var b = '180px';

function open_close(ClassName) {
    var x = document.getElementById("mySidepanel").offsetWidth;
    if (x == 50) {
        document.getElementById("mySidepanel").style.width = "250px";
        document.getElementById("admin_site").style.width = "200px";
        document.getElementById("sidebar_components").style.width = "220px";
        document.getElementById("sidebar_components").style.marginLeft = "30px";
        document.getElementById("Dashbord-text").style.width = "180px";
        document.getElementById("profile").style.width = "180px";
        document.getElementById("branches").style.width = "180px";
        document.getElementById("teachers").style.width = "180px";
        document.getElementById("students").style.width = "180px";
        document.getElementById("notyfications").style.width = "180px";
        document.getElementById("logout").style.width = "180px";
        document.getElementById("main_body").style.marginLeft = "242px";
        // document.getElementById("aa").style.width = "180px";
    }
    else {
        document.getElementById("mySidepanel").style.width = "50px";
        document.getElementById("admin_site").style.width = "0px";
        document.getElementById("sidebar_components").style.width = "50px";
        document.getElementById("sidebar_components").style.marginLeft = "0px";
        document.getElementById("Dashbord-text").style.width = "0px";
        document.getElementById("profile").style.width = "0px";
        document.getElementById("branches").style.width = "0px";
        document.getElementById("teachers").style.width = "0px";
        document.getElementById("students").style.width = "0px";
        document.getElementById("notyfications").style.width = "0px";
        document.getElementById("logout").style.width = "0px";
        document.getElementById("main_body").style.marginLeft = "42px"
        // document.getElementsByClassName("component_text").style.width = "0px";
        
    }
};





// Attandance page 
var dict_attandance ={

    Physics : '90',
    Chemistry : '88',
    Math : '86',
    Biology : '40',
    Hindi : '78',
    English : '65',
    Sanskrit : '10',
    Activity : '20',
}


document.getElementById("Physics").style.height = dict_attandance.Physics+"%";
// document.getElementById("Physics").innerHTML = "PHYSICS"+dict_attandance.Physics+;
document.getElementById("Chemistry").style.height = dict_attandance.Chemistry+"%";
document.getElementById("Math").style.height = dict_attandance.Math+"%";
document.getElementById("Biology").style.height = dict_attandance.Biology+"%";
document.getElementById("Hindi").style.height = dict_attandance.Hindi+"%";
document.getElementById("English").style.height = dict_attandance.English+"%";
document.getElementById("Sanskrit").style.height = dict_attandance.Sanskrit+"%";
document.getElementById("Activity").style.height = dict_attandance.Activity+"%";

if (dict_attandance.Physics > 89){
    document.getElementById("Physics").style.backgroundColor = 'Green'
}
else if (dict_attandance.Physics > 74){
    document.getElementById("Physics").style.backgroundColor = 'Blue'
}
else if (dict_attandance.Physics > 49){
    document.getElementById("Physics").style.backgroundColor = 'Yellow'
}
else{
    document.getElementById("Physics").style.backgroundColor = 'Red'
};

if (dict_attandance.Chemistry > 89){
    document.getElementById("Chemistry").style.backgroundColor = 'Green'
}
else if (dict_attandance.Chemistry > 74){
    document.getElementById("Chemistry").style.backgroundColor = 'Blue'
}
else if (dict_attandance.Chemistry > 49){
    document.getElementById("Chemistry").style.backgroundColor = 'Yellow'
}
else{
    document.getElementById("Chemistry").style.backgroundColor = 'Red'
};
if (dict_attandance.Math > 89){
    document.getElementById("Math").style.backgroundColor = 'Green'
}
else if (dict_attandance.Math > 74){
    document.getElementById("Math").style.backgroundColor = 'Blue'
}
else if (dict_attandance.Math > 49){
    document.getElementById("Math").style.backgroundColor = 'Yellow'
}
else{
    document.getElementById("Math").style.backgroundColor = 'Red'
};

if (dict_attandance.Biology > 89){
    document.getElementById("Biology").style.backgroundColor = 'Green'
}
else if (dict_attandance.Biology > 74){
    document.getElementById("Biology").style.backgroundColor = 'Blue'
}
else if (dict_attandance.Biology > 49){
    document.getElementById("Biology").style.backgroundColor = 'Yellow'
}
else{
    document.getElementById("Biology").style.backgroundColor = 'Red'
};
if (dict_attandance.Hindi > 89){
    document.getElementById("Hindi").style.backgroundColor = 'Green'
}
else if (dict_attandance.Hindi > 74){
    document.getElementById("Hindi").style.backgroundColor = 'Blue'
}
else if (dict_attandance.Hindi > 49){
    document.getElementById("Hindi").style.backgroundColor = 'Yellow'
}
else{
    document.getElementById("Hindi").style.backgroundColor = 'Red'
};
if (dict_attandance.English > 89){
    document.getElementById("English").style.backgroundColor = 'Green'
}
else if (dict_attandance.English > 74){
    document.getElementById("English").style.backgroundColor = 'Blue'
}
else if (dict_attandance.English > 49){
    document.getElementById("English").style.backgroundColor = 'Yellow'
}
else{
    document.getElementById("English").style.backgroundColor = 'Red'
};
if (dict_attandance.Sanskrit > 89){
    document.getElementById("Sanskrit").style.backgroundColor = 'Green'
}
else if (dict_attandance.Sanskrit > 74){
    document.getElementById("Sanskrit").style.backgroundColor = 'Blue'
}
else if (dict_attandance.Sanskrit > 49){
    document.getElementById("Sanskrit").style.backgroundColor = 'Yellow'
}
else{
    document.getElementById("Sanskrit").style.backgroundColor = 'Red'
};
if (dict_attandance.Activity > 89){
    document.getElementById("Activity").style.backgroundColor = 'Green'
}
else if (dict_attandance.Activity > 74){
    document.getElementById("Activity").style.backgroundColor = 'Blue'
}
else if (dict_attandance.Activity > 49){
    document.getElementById("Activity").style.backgroundColor = 'Yellow'
}
else{
    document.getElementById("Activity").style.backgroundColor = 'Red'
};






var mesos = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var dies = [
    'Diumenge',
    'Dilluns',
    'Dimarts',
    'Dimecres',
    'Dijous',
    'Divendres',
    'Dissabte'
];

var dies_abr = [
    'dg',
    'dl',
    'dm',
    'dc',
    'dj',
    'dv',
    'ds'
];

Number.prototype.pad = function(num) {
    var str = '';
    for(var i = 0; i < (num-this.toString().length); i++)
        str += '0';
    return str += this.toString();
}

function calendari(widget, data)
{

    var original = widget.getElementsByClassName('actiu')[0];

    if(typeof original === 'undefined')
    {
        original = document.createElement('table');
        original.setAttribute('data-actual',
            data.getFullYear() + '/' +
            data.getMonth().pad(2) + '/' +
            data.getDate().pad(2))
        widget.appendChild(original);
    }

    var diff = data - new Date(original.getAttribute('data-actual'));

    diff = new Date(diff).getMonth();

    var e = document.createElement('table');

    e.className = diff  === 0 ? 'amagat-esquerra' : 'amagat-dreta';
    e.innerHTML = '';

    widget.appendChild(e);

    e.setAttribute('data-actual',
                   data.getFullYear() + '/' +
                   data.getMonth().pad(2) + '/' +
                   data.getDate().pad(2))

    var fila = document.createElement('tr');
    var titol = document.createElement('th');
    titol.setAttribute('colspan', 7);

    var boto_prev = document.createElement('button');
    boto_prev.className = 'boto-prev';
    boto_prev.innerHTML = '&#9666;';

    var boto_next = document.createElement('button');
    boto_next.className = 'boto-next';
    boto_next.innerHTML = '&#9656;';

    titol.appendChild(boto_prev);
    titol.appendChild(document.createElement('span')).innerHTML = 
        mesos[data.getMonth()] + '<span class="any">' + data.getFullYear() + '</span>';

    titol.appendChild(boto_next);

    boto_prev.onclick = function() {
        data.setMonth(data.getMonth() - 1);
        calendari(widget, data);
    };

    boto_next.onclick = function() {
        data.setMonth(data.getMonth() + 1);
        calendari(widget, data);
    };

    fila.appendChild(titol);
    e.appendChild(fila);

    fila = document.createElement('tr');

    for(var i = 1; i < 7; i++)
    {
        fila.innerHTML += '<th>' + dies_abr[i] + '</th>';
    }

    fila.innerHTML += '<th>' + dies_abr[0] + '</th>';
    e.appendChild(fila);

    /* Obtinc el dia que va acabar el mes anterior */
    var inici_mes =
        new Date(data.getFullYear(), data.getMonth(), -1).getDay();

    var actual = new Date(data.getFullYear(),
        data.getMonth(),
        -inici_mes);

    /* 6 setmanes per cobrir totes les posiblitats
     *  Quedaria mes consistent alhora de mostrar molts mesos 
     *  en una quadricula */
    for(var s = 0; s < 6; s++)
    {
        var fila = document.createElement('tr');

        for(var d = 1; d < 8; d++)
        {
      var cela = document.createElement('td');
      var span = document.createElement('span');

      cela.appendChild(span);

            span.innerHTML = actual.getDate();

            if(actual.getMonth() !== data.getMonth())
                cela.className = 'fora';

            /* Si es avui el decorem */
            if(data.getDate() == actual.getDate() &&
         data.getMonth() == actual.getMonth())
    cela.className = 'avui';

      actual.setDate(actual.getDate()+1);
            fila.appendChild(cela);
        }

        e.appendChild(fila);
    }

    setTimeout(function() {
        e.className = 'actiu';
        original.className +=
        diff === 0 ? ' amagat-dreta' : ' amagat-esquerra';
    }, 20);

    original.className = 'inactiu';

    setTimeout(function() {
        var inactius = document.getElementsByClassName('inactiu');
        for(var i = 0; i < inactius.length; i++)
            widget.removeChild(inactius[i]);
    }, 1000);

}

calendari(document.getElementById('calendari'), new Date());




class Dial {
    constructor(container) {
      this.container = container;
      this.size = this.container.dataset.size;
      this.strokeWidth = this.size / 8;
      this.radius = this.size / 2 - this.strokeWidth / 2;
      this.value = this.container.dataset.value;
      this.direction = this.container.dataset.arrow;
      this.svg;
      this.defs;
      this.slice;
      this.overlay;
      this.text;
      this.arrow;
      this.create();
    }
  
    create() {
      this.createSvg();
      this.createDefs();
      this.createSlice();
      this.createOverlay();
      this.createText();
      this.createArrow();
      this.container.appendChild(this.svg);
    }
  
    createSvg() {
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", `${this.size}px`);
      svg.setAttribute("height", `${this.size}px`);
      this.svg = svg;
    }
  
    createDefs() {
      var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs"),
        linearGradient = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "linearGradient"
        ),
        stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop"),
        stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop"),
        linearGradientBackground = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "background"
        );
      linearGradient.setAttribute("id", "gradient");
      stop1.setAttribute("stop-color", "#ffa000");
      stop1.setAttribute("offset", "0%");
      linearGradient.appendChild(stop1);
      stop2.setAttribute("stop-color", "#f25767");
      stop2.setAttribute("offset", "100%");
      linearGradient.appendChild(stop2);
      linearGradientBackground.setAttribute("id", "gradient-background");
      var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop1.setAttribute("stop-color", "rgba(0,0,0,0.2)");
      stop1.setAttribute("offset", "0%");
      linearGradientBackground.appendChild(stop1);
      var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop2.setAttribute("stop-color", "rgba(0,0,0,0.5)");
      stop2.setAttribute("offset", "1000%");
      linearGradientBackground.appendChild(stop2);
      defs.appendChild(linearGradient);
      defs.appendChild(linearGradientBackground);
      this.svg.appendChild(defs);
      this.defs = defs;
    }
  
    createSlice() {
      let slice = document.createElementNS("http://www.w3.org/2000/svg", "path");
      slice.setAttribute("fill", "none");
      slice.setAttribute("stroke", "url(#gradient)");
      slice.setAttribute("stroke-width", this.strokeWidth);
      slice.setAttribute(
        "transform",
        `translate(${this.strokeWidth / 2},${this.strokeWidth / 2})`
      );
      slice.setAttribute("class", "animate-draw");
      this.svg.appendChild(slice);
      this.slice = slice;
    }
  
    createOverlay() {
      const r = this.size - this.size / 2 - this.strokeWidth / 2;
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", this.size / 2);
      circle.setAttribute("cy", this.size / 2);
      circle.setAttribute("r", r);
      circle.setAttribute("fill", "url(#gradient-background)");
      circle.setAttribute("class", "animate-draw");
      this.svg.appendChild(circle);
      this.overlay = circle;
    }
  
    createText() {
      const fontSize = this.size / 3.5;
      let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", this.size / 2 + fontSize / 7.5);
      text.setAttribute("y", this.size / 2 + fontSize / 4);
      text.setAttribute("font-family", "Century Gothic Lato");
      text.setAttribute("font-size", fontSize);
      text.setAttribute("fill", "#78f8ec");
      text.setAttribute("text-anchor", "middle");
      const tspanSize = fontSize / 3;
      text.innerHTML = `${0}% `;
      this.svg.appendChild(text);
      this.text = text;
    }
  
    createArrow() {
      var arrowSize = this.size / 10;
      var mapDir = {
        up: [(arrowYOffset = arrowSize / 2), (m = -1)],
        down: [(arrowYOffset = 0), (m = 1)]
      };
      function getDirection(i) {
        return mapDir[i];
      }
      var [arrowYOffset, m] = getDirection(this.direction);
  
      let arrowPosX = this.size / 2 - arrowSize / 2,
        arrowPosY = this.size - this.size / 3 + arrowYOffset,
        arrowDOffset = m * (arrowSize / 1.5),
        arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
      arrow.setAttribute(
        "d",
        `M 0 0 ${arrowSize} 0 ${arrowSize / 2} ${arrowDOffset} 0 0 Z`
      );
      arrow.setAttribute("fill", "none");
      arrow.setAttribute("opacity", "0.6");
      arrow.setAttribute("transform", `translate(${arrowPosX},${arrowPosY})`);
      this.svg.appendChild(arrow);
      this.arrow = arrow;
    }
  
    animateStart() {
      let v = 0;
      const intervalOne = setInterval(() => {
        const p = +(v / this.value).toFixed(2);
        const a = p < 0.95 ? 2 - 2 * p : 0.05;
        v += a;
        if (v >= +this.value) {
          v = this.value;
          clearInterval(intervalOne);
        }
        this.setValue(v);
      }, 10);
    }
  
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      const angleInRadians = ((angleInDegrees - 180) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    }
  
    describeArc(x, y, radius, startAngle, endAngle) {
      const start = this.polarToCartesian(x, y, radius, endAngle);
      const end = this.polarToCartesian(x, y, radius, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      const d = [
        "M",
        start.x,
        start.y,
        "A",
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
      ].join(" ");
      return d;
    }
  
    setValue(value) {
      let c = (value / 100) * 360;
      if (c === 360) c = 359.99;
      const xy = this.size / 2 - this.strokeWidth / 2;
      const d = this.describeArc(xy, xy, xy, 180, 180 + c);
      this.slice.setAttribute("d", d);
      const tspanSize = this.size / 3.5 / 3;
      this.text.innerHTML = `${Math.floor(value)}% `;
    }
  
    animateReset() {
      this.setValue(0);
    }
  }
  
  const containers = document.getElementsByClassName("chart");
  const dial = new Dial(containers[0]);
  dial.animateStart();
  





  
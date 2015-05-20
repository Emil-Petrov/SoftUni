Object.prototype.extends = function(parent) {
    if (!Object.create) {
        Object.prototype.create = function(proto) {
            function F() {}
            F.prototype = proto;
            return new F();
        };
    }

    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var Shapes = (function(){
    var Point, Shape, Circle, Rectangle, Triangle, Line, Segment;

    Point = (function(){
        function Point(x,y){
            this._x = x;
            this._y = y;
        }
        Point.prototype.toString = function(){
            return "Point; "+ "X: " + this._x + " Y: " + this._y;
        };

        return Point;
    })();

    Shape = (function(){
        function Shape(color){
            this._color = color;
        }
        Shape.prototype.toString = function(){
            return "Shape; " + "Color: " + this._color;
        };

        return Shape;
    })();

    Circle = (function(){
        function Circle(centerPoint, radius, color) {
            Shape.call(this, color);
            this._x = centerPoint._x;
            this._y = centerPoint._y;
            this._radius = radius;
        }

        Circle.extends(Shape);
        Circle.prototype.toString = function(){
            return "Circle; " + "Color: " + this._color + ";"+
            " Center: (x, y) - (" + this._x + ", " + this._y + "); Radius: " + this._radius + ";";
        };

        return Circle;
    })();

    Rectangle = (function(){
        function Rectangle(startingPoint, width, height, color){
            Shape.call(this, color);
            this.topLeft = startingPoint;
            this.width = width;
            this.height = height;
        }

        Rectangle.extends(Shape);
        Rectangle.prototype.toString = function(){
            return "Rectangle; " + "Color: " + this._color +
            "; Top Left: (x, y) - (" + this.topLeft._x +
            ", " + this.topLeft._y + "); Width: " + this.width + "; Height: " + this.height;
        };

        return Rectangle;
    })();

    Triangle = (function (){
        function Triangle(a, b, c, color){
            Shape.call(this, color);
            this.a = a;
            this.b = b;
            this.c = c;
        }
        Triangle.extends(Shape);
        Triangle.prototype.toString = function(){
            return "Triangle; " + "Color: " + this._color +
            "; A(x, y) - (" + this.a._x + ", " + this.a._y +")" +
            "; B(x, y) - (" + this.b._x + ", " + this.b._y +")"+
            "; C(x, y) - (" + this.c._x + ", " + this.c._y +")";
        };

        return Triangle;
    })();

    Line = (function(){
        function Line(a, b, color){
            Shape.call(this, color);
            this.a = a;
            this.b = b;
        }

        Line.extends(Shape);
        Line.prototype.toString = function(){
            return  "Line; " + "Color: " + this._color +
            "; A(x, y) - (" + this.a._x + ", " + this.a._y +")" +
            "; B(x, y) - (" + this.b._x + ", " + this.b._y +")";
        };

        return Line;
    })();

    Segment = (function(){
        function Segment(a, b, color){
            Shape.call(this, color);
            this.a = a;
            this.b = b;
        }

        Segment.extends(Shape);
        Segment.prototype.toString = function(){
            return  "Segment; " + "Color: " + this._color +
            "; A(x,y) - (" + this.a._x + ", " + this.a._y +")" +
            "; B(x,y) - (" + this.b._x + ", " + this.b._y +")";
        };

        return Segment;
    })();

    return {
        Point : Point,
        Circle : Circle,
        Rectangle : Rectangle,
        Triangle : Triangle,
        Line : Line,
        Segment : Segment
    }
})();
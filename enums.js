var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[0]); // reverse mapping
var DirectionNum;
(function (DirectionNum) {
    DirectionNum[DirectionNum["Up"] = 10] = "Up";
    DirectionNum[DirectionNum["Down"] = 11] = "Down";
    DirectionNum[DirectionNum["Left"] = 12] = "Left";
    DirectionNum[DirectionNum["Right"] = 13] = "Right";
})(DirectionNum || (DirectionNum = {}));
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Left"] = "LEFT";
    DirectionStr["Right"] = "RIGHT";
})(DirectionStr || (DirectionStr = {}));

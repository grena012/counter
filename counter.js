function up()
{
    
    var a=Number(document.getElementById("a1").value);
    a++;
    document.getElementById('a1').value= a;

}
function down()
{
    
    var a=Number(document.getElementById("a1").value);
    a--;
    document.getElementById('a1').value= a;
}
function reset()
{
    var a=0;
    document.getElementById('a1').value= a;
}



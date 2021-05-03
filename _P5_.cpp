#include <iostream>
#include <conio.h>
#include <math.h>
using namespace std;

enum TMes{janeiro=1, fevereiro, marco, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro};

struct TData
{
  int dia, ano;
  enum TMes mes;
};

int diasExistentesNoMes(struct TData data)
{
  switch (data.mes)
  {
    case janeiro:
    case marco:
    case maio:
    case julho:
    case agosto:
    case outubro:
    case dezembro: return 31;
    case abril:
    case junho:
    case setembro:
    case novembro: return 30;
    case fevereiro: if (data.ano % 4 == 0 && data.ano % 100 != 0 || data.ano % 400 == 0) return 29;
                    else return 28;
    default: return 0;
  }
}

string mesParaString(enum TMes mes)
{
  switch (mes)
  {
    case janeiro:   return "JANEIRO";
    case fevereiro: return "FEVEREIRO";
    case marco:     return "MARCO";
    case abril:     return "ABRIL";
    case maio:      return "MAIO";
    case junho:     return "JUNHO";
    case julho:     return "JULHO";
    case agosto:    return "AGOSTO";
    case setembro:  return "SETEMBRO";
    case outubro:   return "OUTUBRO";
    case novembro:  return "NOVEMBRO";
    case dezembro:  return "DEZEMBRO";
  }
}

bool dataValida(struct TData data)
{
  if (data.mes >= janeiro && data.mes <= dezembro)
    return (data.dia >=1 && data.dia <= diasExistentesNoMes(data))  ;
  else return false;
}

main()
{
  struct TData d, aux;
  enum TMes m;
  int i, diasDecorridosNoAno = 0;

  do
  {
    cout << "Forneca uma data valida...\n";
    cout << "DIA: ";
    cin >> d.dia;

    cout << "MES: ";
    cin >> i;
    d.mes = (enum TMes)i;

    cout << "ANO: ";
    cin >> d.ano;

    if (!dataValida(d)) cout << "Data invalida!!!\n\n";
  } while (!dataValida(d));

  aux = d;
  for (i = 1; i < (int)d.mes; i = i+1)
  {
    aux.mes = (enum TMes)i;
    diasDecorridosNoAno = diasDecorridosNoAno + diasExistentesNoMes(aux);
  }
  diasDecorridosNoAno = diasDecorridosNoAno + d.dia;

  cout << "No ano de " << d.ano << " ha " << diasDecorridosNoAno << " dias ate " << d.dia << "/" << mesParaString(d.mes) << "/" << d.ano << ".\n";
}

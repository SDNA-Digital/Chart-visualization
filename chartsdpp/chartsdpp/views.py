from django.shortcuts import render

def Dash_ProcessoNivelRisco(request):
    return render(request, 'ProcNivRisc.html')

def Dash_ProcessoNivelRiscoArea(request):
    return render(request, 'ProcNivRiscoArea.html')

def Teste_Index(request):
    return render(request, 'index.html')

def Chart(request):
    return render(request, 'index.html')

def Dash_IncidenteArea(request):
    return render(request, 'IncidenteArea.html')

def Dash_IncidenteAreaPizza(request):
    return render(request, 'IncidenteAreaPizza.html')

def Dash_PoliticasManuais(request):
    return render(request, 'PoliticasManuais.html')

def Dash_PoliticasManuaisTabela(request):
    return render(request, 'PoliticasManuaisTabela.html')

def Dash_CartaoNorma(request):
    return render(request, 'CartaoNorma.html')

def Dash_TabelaNorma(request):
    return render(request, 'TabelaNorma.html')

def Dash_DemandasCartao(request):
    return render(request, 'DemandasCartao.html')

def Dash_DemandasTabela(request):
    return render(request, 'DemandasTabela.html')
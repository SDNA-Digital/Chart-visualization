from django.shortcuts import render

def Chart(request):
    return render(request, 'index.html')

def Dash_IncidenteArea(request):
    return render(request, 'IncidenteArea.html')

"""
URL configuration for chartsdpp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import Chart
from .views import Dash_IncidenteArea,Dash_IncidenteAreaPizza
from .views import Dash_PoliticasManuais, Dash_PoliticasManuaisTabela
from .views import Dash_CartaoNorma,Dash_TabelaNorma
from .views import Dash_DemandasCartao,Dash_DemandasTabela
from .views import Dash_ProcessoNivelRisco
from .views import Dash_ProcessoNivelRiscoArea
from .views import Dash_PlanosMitigantesStatus
from .views import Card_ProcessosMapeados

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/',Chart),
    path('IncidenteArea/',Dash_IncidenteArea),
    path('IncidenteAreaPizza/',Dash_IncidenteAreaPizza),
    path('PoliticasManuais/',Dash_PoliticasManuais),
    path('PoliticasManuaisTabela/',Dash_PoliticasManuaisTabela),
    path('CartaoNorma/',Dash_CartaoNorma),
    path('TabelaNorma/',Dash_TabelaNorma),
    path('DemandasCartao/',Dash_DemandasCartao),
    path('DemandasTabela/',Dash_DemandasTabela),
    path('ProcNivRisc/', Dash_ProcessoNivelRisco),
    path('ProcNivRiscoArea/', Dash_ProcessoNivelRiscoArea),
    path('PlanosMitigantesStatus/', Dash_PlanosMitigantesStatus),
    path('Card_ProcessosMapeados/', Card_ProcessosMapeados)

]

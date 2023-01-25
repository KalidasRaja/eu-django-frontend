from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name='index'),
    path('self-storage-software/', ss_software, name='self-storage-software'),
    path('feature/', sss_feature, name='feature'),
    path('marketplace/', marketplace, name='marketplace'),
    path('movable-container-storage-software/', st_container, name='container'),
    path('pallet-management-software/', st_pallet, name='pallet'),
    path('rv-boat-management-software/', st_rv, name='rv'),
    path('self-storage-facilities-software/', st_self_storage, name='self-storage'),
    path('vehicle-storage-software/', st_vehicle, name='vehicle'),
    path('six-security/', six_security, name='six-security'),
    path('self-storage-calculator/', calculator, name='self-storage-calculator'),
    path('self-storage-marketing/', marketing, name='self-storage-marketing'),
    path('self-storage-website/', ss_website, name='self-storage-website'),
    path('templates/', ssw_templates, name='templates'),
    path('website-registration/', ssw_registration, name='website-registration'),
    path('self-storage-associations/', ss_associations, name='self-storage-associations'),
    path('self-storage-events/', ss_events, name='self-storage-events'),
    path('about-us/', about, name='about'),
    path('referral-program/', referral, name='referral'),
    path('research-room/', research, name='research'),    
    path('privacy-policy/', privacy, name='privacy-policy'),    
    path('terms-of-conditions/', terms, name='terms-of-conditions'),
    path('gdpr/', gdpr, name='gdpr'),
]

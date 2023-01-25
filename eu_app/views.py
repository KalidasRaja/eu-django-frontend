from django.shortcuts import render


def index(request):
    return render(request, "home.html")
def ss_software(request):
    return render(request, "self-storage-software.html")
def sss_feature(request):
    return render(request, "self-storage-software/feature.html")
def marketplace(request):
    return render(request, "self-storage-marketplace.html")
def st_container(request):
    return render(request, "storage-types/container-storage.html")
def st_pallet(request):
    return render(request, "storage-types/pallet-storage.html")
def st_rv(request):
    return render(request, "storage-types/rv-boat-storage.html")
def st_self_storage(request):
    return render(request, "storage-types/self-storage.html")
def st_vehicle(request):
    return render(request, "storage-types/vehicle-storage.html")
def six_security(request):
    return render(request, "six-security.html")
def calculator(request):
    return render(request, "self-storage-calculator.html")
def marketing(request):
    return render(request, "self-storage-marketing.html")
def ss_website(request):
    return render(request, "self-storage-website.html")
def ssw_templates(request):
    return render(request, "self-storage-website/templates.html")
def ssw_registration(request):
    return render(request, "self-storage-website/website-registration.html")
def ss_associations(request):
    return render(request, "self-storage-associations.html")
def ss_events(request):
    return render(request, "self-storage-events.html")
def about(request):
    return render(request, "aboutus.html")
def referral(request):
    return render(request, "referral-program.html")
def research(request):
    return render(request, "research-room.html")
def privacy(request):
    return render(request, "privacy-policy.html")
def terms(request):
    return render(request, "terms-of-conditions.html")
def gdpr(request):
    return render(request, "gdpr.html")

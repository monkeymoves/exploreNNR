
pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "CraigCerrigGleisiad",
        "author": "Natural Resources Wales NNR Team",
        "sceneFadeDuration": 1000,
        "autoRotate": -2,
        "autoLoad": true
    },

    "scenes": {
        "CraigCerrigGleisiad": {
            "title": "Craig Cerrig Gleisiad",
            "hfov": 100,
            "pitch": -3,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "./img/CraigCerrigGleisiad.jpg",
            "hotSpots": [
                {
                    "pitch": 12.1,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Craig Cerrig Gleisiad - Upper Section",
                    "sceneId": "CraigCerrigGleisiad_upper"
                }
            ]
        },

        "CraigCerrigGleisiad_upper": {
            "title": "Upper Section - Craig Cerrig Gleisiad",
            "hfov": 100,
            "yaw": -5,
            "type": "equirectangular",
            "panorama": "./img/CraigCerrigGleisiad_upper.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Ogof Ffynnon Ddu",
                    "sceneId": "OgofFfynnonDdu",
                    "targetYaw": -23,
                    "targetPitch": -20
                }
            ]
        },
    
    "OgofFfynnonDdu": {
            "title": "Ogof Ffynnon Ddu",
            "hfov": 90,
            "pitch": -75,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "./img/OgofFfynnonDdu.jpg",
            "hotSpots": [
                {
                    "pitch": -35.1,
                    "yaw": 15,
                    "type": "scene",
                    "text": "Oxwich Bay National Nature Reserve",
                    "sceneId": "OxwichBay"
                }
            ]
        },

        "OxwichBay": {
            "title": "OxwichBay National Nature Reserve",
            "hfov": 90,
            "yaw": 35,
            "type": "equirectangular",
            "panorama": "./img/OxwichBay.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Return to Craig Cerrig Gleisiad",
                    "sceneId": "CraigCerrigGleisiad",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});
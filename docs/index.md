---
hide:
  - navigation
  # - toc
---
# Introduction

FELionGUI is a spectrum analysis application designed specifically for use with the FELion instrument at the FELIX labaratory ([Dr. Sandra Brünken](https://www.bruenken.de/){:target="_blank"} group) , Radboud University in Nijmegen.

The software is developed by [A.N. Marimuthu](https://github.com/aravindhnivas){:target="_blank"}. It provides a user-friendly interface for analyzing spectra obtained from the FELion instrument.

## Download `feliongui`

[:simple-windows: Windows (x86_64)](#){ .md-button #download-btn-win .download-btn .windows}
[:simple-apple: macOS (x86_64)](#){ .md-button #download-btn-macos .download-btn .macos}
[:simple-linux: Linux (x86_64)](#){ .md-button #download-btn-linux .download-btn .linux}

## Installation

The installation is very simple. Just download the appropriate installer for your operating system and run it. The installer will guide you through the installation process.

???+ note
    The application will download `felionpy` assets (i.e., python files for running the application). So, make sure you have an active internet connection.

For macOS and Linux, follow the addition instruction below.

### macOS

- Download the installer (`.dmg` file) from the link above.
- Drag the downloaded `.dmg` file to the `Desktop` folder.

???+ warning
    Dragging the downloaded `.dmg` file to the `Applications` folder is not working.

???+ note
    The application by default is blocked by macOS.
    So you need to grant an exception for a blocked app by clicking the Open Anyway button in Privacy & Security settings.
    This button is available for about an hour after you try to open the app.
    To change which apps can open on your Mac, choose Apple menu :simple-apple:  > System Settings, click Privacy & Security  in the sidebar, then go to Security. (You may need to scroll down.)

### Linux

The `.appimage` file is a portable application that can be run on any Linux distribution. However, you will need to make the file executable before running it. To do this, open a terminal and run the following command:

```bash title="Make the file executable"  
chmod +x feliongui_<replace here your version number>_amd64.AppImage
```

## Home Screen

<figure markdown>
  ![Image title](assets/images/app/home.png){ align=left }
  <figcaption>Fig 1: The FELion GUI v4 - Home Screen</figcaption>
</figure>

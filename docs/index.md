---
hide:
  - navigation
  # - toc
---
# Introduction

FELionGUI is a spectrum analysis application designed specifically for use with the FELion instrument at the FELIX labaratory ([Dr. Sandra Brünken](https://www.bruenken.de/){:target="_blank"} group) , Radboud University in Nijmegen.

The software is developed by [A.N. Marimuthu](https://github.com/aravindhnivas){:target="_blank"}. It provides a user-friendly interface for analyzing spectra obtained from the FELion instrument.

## Download `feliongui`

`feliongui` is available for Windows, macOS, and Linux. You can download the installer for your operating system from the link below.

[:simple-windows: Windows <span id='feliongui-win'></span>](#){ .md-button #feliongui-win-download-btn .feliongui-download-btn .win}
[:simple-apple: macOS <span id='feliongui-darwin'></span>](#){ .md-button #feliongui-darwin-download-btn .feliongui-download-btn .darwin}
[:simple-linux: Linux <span id='feliongui-linux'></span>](#){ .md-button #feliongui-linux-download-btn .feliongui-download-btn .linux}

Optionally, you can download the `felionpy` python assets as shown below.

???+ info "Download `felionpy` (optional)"
    `felionpy` (python assets for `feliongui`) is required for running the application.
    The download will happen automatically when you run the application for the first time.
    So, make sure you have an active internet connection.

## Download `felionpy` (optional)

If you want to download the `felionpy` assets manually, you can download it from the link below.

- [:simple-windows: Windows <span id='felionpy-win'></span>](#){ #felionpy-win-download-btn .felionpy-download-btn .win}
- [:simple-apple: macOS <span id='felionpy-darwin'></span>](#){ #felionpy-darwin-download-btn .felionpy-download-btn .darwin}
- [:simple-linux: Linux <span id='felionpy-linux'></span>](#){ #felionpy-linux-download-btn .felionpy-download-btn .linux}

## Installation

The installation is very simple. Just download the appropriate installer for your operating system and run it. The installer will guide you through the installation process.

Follow the addition instruction below for your operating system.

=== "windows"

    - Download the installer (`.msi` file) from the link above.
    - Run the installer.
    - After the installation is complete, you can find the application in the `Start Menu` and `Desktop` icon.

    ???+ note
        The application by default is blocked by Windows.
        So you need to grant an exception for a blocked app by clicking the More Info button in the Windows Security dialog box.
        Then click the Run Anyway button.

    ???+ note
        The installer will install the application in the `Program Files` folder. So, you need to grant administrator privileges to the installer.

=== "macOS"

    - Download the installer (`.dmg` file) from the link above.
    - Drag the downloaded `.dmg` file to the `Desktop` folder.

    ???+ warning
        Dragging the downloaded `.dmg` file to the `Applications` folder is not working.

    ???+ note
        The application by default is blocked by macOS.
        So you need to grant an exception for a blocked app by clicking the Open Anyway button in Privacy & Security settings.
        This button is available for about an hour after you try to open the app.
        To change which apps can open on your Mac, choose Apple menu :simple-apple:  > System Settings, click Privacy & Security  in the sidebar, then go to Security. (You may need to scroll down.)

=== "Linux"

    The `.appimage` file is a portable application that can be run on any Linux distribution. However, you will need to make the file executable before running it. To do this, open a terminal and run the following command:

    ```bash title="Make the file executable"  
    chmod +x feliongui_*_amd64.AppImage
    ```

## Home Screen

<figure markdown>
  ![Image title](assets/images/app/home.png){ align=left }
  <figcaption>Fig 1: The feliongui v4 - Home Screen</figcaption>
</figure>

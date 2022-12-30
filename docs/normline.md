---
hide:
  - navigation
---

# Normline

## Functions

### Create baseline

Creating baseline for felix or opo IR spectrum

### FELIX plot

```mermaid
graph LR
  baseline[Create baseline] --> felix[FELIX plot] --> post-process
```

### OPO plot

```mermaid
graph LR
  opomode[OPO MODE] --> baseline[Create baseline] --> opo[OPO plot] --> post-process
```

### Theory plot

## Descriptions

### Folder structure

```mermaid
graph TD
    Parent[parent-folder]

    Parent --> DATA
    Parent --> EXPORT
    Parent --> OUT
    
    DATA --> felix[.felix, .cfelix, .ofelix or .cofelix]
    DATA --> .pow
    DATA --> .base

    EXPORT --> .dat

    OUT --> .expfit
    OUT --> .fullfit
    OUT --> other[.png, .pdf, etc]

```

### Data types

| Name | Description | Data source |
| --- | --- | --- |
| __FELIX__
| .felix   | FELIX IR data | Instrument (Labview) |
| .cfelix  | corrected felix | created manually (FELionGUI) |
| .pow     | powerfile for felix | created manually (FELionGUI) |
| .base    | baseline for felix | created manually (FELionGUI) |
| __OPO__
| .ofelix  | OPO IR data | Instrument (Labview) |
| .cbase   | baseline for OPO | created manually (FELionGUI) |
| .cofelix | corrected ofelix | created manually (FELionGUI) |
| __Post-processed__
| .dat    | processed .*felix data | created manually (FELionGUI) |
| .expfit | Gaussian fit parameters | created manually (FELionGUI) |
| .fullfit | Multi-Gaussian fit parameters | created manually (FELionGUI) |

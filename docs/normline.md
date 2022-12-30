---
hide:
  - navigation
---

# Normline

## Folder structure

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

## Data types

| Name | Description | Data source |
| --- | --- | --- |
| __FELIX__
| .felix   | FELIX IR data | Instrument (Labview) |
| .pow     | powerfile for felix | Manual |
| .base    | baseline for felix | Manual |
| __OPO__
| .ofelix  | OPO IR data | Instrument (Labview) |
| .cfelix  | corrected felix | Manual |
| .cbase   | baseline for OPO | Manual |
| .cofelix | corrected ofelix | Manual |
| __Post-processed__
| .dat    | processed .*felix data | Manual |
| .expfit | Gaussian fit parameters | Manual |
| .fullfit | Multi-Gaussian fit parameters | Manual |

## Create baseline

Creating baseline for felix or opo IR spectrum

## FELIX plot

```mermaid
graph LR
  baseline[Create baseline] --> felix[FELIX plot] --> post-process
```

## OPO plot

```mermaid
graph LR
  opomode[OPO MODE] --> baseline[Create baseline] --> opo[OPO plot] --> post-process
```

## Theory plot

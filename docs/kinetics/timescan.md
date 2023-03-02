<figure markdown>
  ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetics-homepage.png){ align=left }
  <figcaption>Fig 7: Timescan kinetics homepage</figcaption>
</figure>

The kinetics page is used to analyze the kinetics of the FELion experiment. The kinetics page is divided into three panels.

## Making a new kinetics project

=== "Number density"
    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetics-number-density.png){ align=left }
        <figcaption>Fig 8.1.0: Kinetics: Number density</figcaption>
    </figure>

    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_number-density-modal.png){ align=left }
        <figcaption>Fig 8.1.1: Compute number density </figcaption>
    </figure>

    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_ND-modal-filled.png){ align=left }
        <figcaption>Fig 8.1.2: Compute number density </figcaption>
    </figure>

=== "Labels"
    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetics-labels.png){ align=left }
        <figcaption>Fig 8.2.1: Kinetics: Labels with default molecular ion (CD<sup>+</sup>) name and tag (helium)</figcaption>
    </figure>

    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetics-labels-filled.png){ align=left }
        <figcaption>Fig 8.2.2: Kinetics: Labels for N<sup>+</sup> ion with He tag</figcaption>
    </figure>

=== "Channels"
    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetics-channels.png){ align=left }
        <figcaption>Fig 8.3.1: Kinetics: Channels</figcaption>
    </figure>

    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetics-channels-filled.png){ align=left }
        <figcaption>Fig 8.3.2: Kinetics: Channels</figcaption>
    </figure>

???+ note "Note"
    - :material-sync-alert: indicates the data is not yet loaded.
    - :material-check: indicates the data is loaded.

## Rate of equation

=== "Defining the rate equation"
    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetic-code-slider.png){ align=left }
        <figcaption>Fig 9.1: Kinetic code: computing sliders</figcaption>
    </figure>

    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetic-code-model.png){ align=left }
        <figcaption>Fig 9.2: Kinetic code: Full model equations</figcaption>
    </figure>

=== "Fitting rate equations"
    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetic-model-before-fit.png){ align=left }
      <figcaption>Fig 10.1: Kinetic code: Fitting rate equations</figcaption>
    </figure>

    <figure markdown>
        ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetic-model-fitted.png){ align=left }
    <figcaption>Fig 10.1: Kinetic code: Fitting rate equations</figcaption>
    </figure>

## Kinetics plots

<figure markdown>
  ![Image title](../assets/images/kinetics/timescan/felion_docs_kinetic-plots.png){ align=left }
  <figcaption>Fig 11: Kinetic plots creating window</figcaption>
</figure>

## Flowchart

```mermaid
graph TD
    Kinetics

    Kinetics --> processing
    Kinetics --> Post[post-processing]
    
    processing --> ND[Number density]
    processing --> Parameters
    processing --> Channels
    processing --> Code[Compute code]

    ND --> Table[Config Table] --> *.configs.json
    Parameters --> *.params.json
    Parameters --> *.fit.json
    Channels --> *.channels.json
    Code --> Fit[Fit and save] --> *.fit.json

    Post --> Plots

    Plots --> *.processed.json
    Plots --> *.params.processed.json

    *.processed.json --> *.rateConstants.processed.json[*.rateConstants.processed.json or *.rateConstants.fitted.json]
    *.params.processed.json --> *.rateConstants.processed.json[*.rateConstants.processed.json or *.rateConstants.fitted.json]
```

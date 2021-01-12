# Why is this necessary?

The fields of **neuroscience**, **cognitive science** and **machine learning** all develop and examine
models which process information, which are to varying degrees inspired by circuits in the brain. All of these use
computational graphs as important elements of their models. However, these fields use different software tools to 
build, analyse and simulate the models making transfer of knowledge and insights difficult. There is a pressing 
need for a common model description format is prevalent which will allow ideas to be exchanged between 
researchers in these domains. 

Currently, there are no existing standards that fully meet the identified need.
The closest standard, [ONNX](https://onnx.ai), is focused more on providing an intermediate representation 
(IR) for compilation and optimization rather than exchange. It does not naturally support hierarchical 
structure or general interpretable process control. [NeuroML](https://www.NeuroML.org) is model 
description format for biologically inspired neuronal networks, but 
is not currently used for more abstract networks and graphs used in machine learning applications.

[ModECI](http://www.modeci.org) will provide a standardized [Model Description Format (MDF)](MDF) that 
can be used to exchange models between different software modeling environments and scientific domains
and will be presented as an exchange standard, not a programming language. [ONNX](https://onnx.ai) and [NeuroML](https://www.NeuroML.org) will 
provide guidance for the scope of MDF, and will be potential input/output formats. 

Such an MDF would have numerous benefits, both scientific and technological, including: 
- dissemination of models and validation of model reproducibility
- migration of models across domains (e.g., use of models of brain function in machine learning applications)
- integration of models at different levels of analysis (e.g. biophysically-realistic neural models 
into models of cognitive function, cognitive models as agents in population level models)
- exploitation of complementary strengths of existing packages (e.g. design in a familiar environment 
but execute in one with better tools for parameter tuning and/or data-fitting)
- more efficient development of new tools, by providing developers with a representative diversity of models, all in a common format

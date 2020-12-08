# Why is this necessary?

The need for a standard model description format is prevalent in 
the fields of neuroscience, cognitive science and machine learning. 
Currently, there are no existing standards that fully meet the identified need.
The closest standard, ONNX, is focused more on providing an intermediate representation (IR) for compilation and optimization rather than exchange.
Nothing exists that naturally supports hierarchical structure or 
general interpretable process control.
ModECI will provide a standardized Model Description Format (MDF) that can be used to exchange models between different software modeling environments and scientific domains
and will be presented as an exchange standard, not a programming language.

Such an MDF would have numerous benefits, both scientific and technological, including: 
dissemination and validation of model reproducibility; migration of models across domains (e.g., use of models of brain function in machine learning applications); 
integration of models at different levels of analysis (e.g., biophysically-realistic neural models into models of cognitive function, cognitive models as agents in population level models);
exploitation of complementary strengths of existing packages (e.g., design in a familiar environment but execute in one with better tools for parameter tuning and/or data-fitting); 
and more efficient development of new tools, by providing developers with a representative diversity of models, all in a common format.

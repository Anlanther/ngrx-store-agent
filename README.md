# NgrxStoreAgent

This project was created to experiment with rendering streaming response. The simplest way to run this project is with [fastapi-playground](https://github.com/Anlanther/fastapi-playground).

## Composability

Depending on the widget input provided by the app component to the assistant, its **data services** and **toolbars** will be switched accordingly.

### Data Services

Depending on mode, which is mapped to a workspace ID provided by the widget input, the appropriate data service `postResponse()` method will be called when triggered. This is done via the `workspace-mode-map`. To add more data services, the map needs to be updated and the data service should inherit the `BaseAgentService` interface.

### Toolbars

Depending on mode, which is mapped to a workspace ID provided by the widget input, the toolbar component will be switched automatically. Each component within a toolbar will construct their own query parameters, which will be passed to the assistant component to package automatically to send to the mapped service.

### State Services

Each significant grouping of components has its own NgRx Signal Store. This is to help with grouped loading and data transformations, which are then shared within its group of components. This is also to abstract specific logic into its own dedicated layer, such as seen in for the toolbars.

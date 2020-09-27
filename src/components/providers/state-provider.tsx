import React from 'react';
import { BuilderBlockComponent, BuilderStoreContext, BuilderElement } from '@builder.io/react';

export interface StateProviderProps {
  state: any;
  builderBlock: BuilderElement;
  [key: string]: any;
}

const StateProvider: React.FC<StateProviderProps> = props => (
  <BuilderStoreContext.Consumer>
    {state => (
      <BuilderStoreContext.Provider
        value={{
          ...state,
          state: {
            ...state.state,
            ...props.state,
          },
          context: {
            ...state.context,
            ...props.context,
          },
        }}
      >
        {props.builderBlock &&
          props.builderBlock.children &&
          props.builderBlock.children.map((block, index) => (
            <BuilderBlockComponent block={block} key={block.id} index={index} child={true} />
          ))}
        {props.children}
      </BuilderStoreContext.Provider>
    )}
  </BuilderStoreContext.Consumer>
);

export default StateProvider;

import { ComponentProps, UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';

type ContentCardParameters = {
  body: string;
  title: string;
  $contextualEditing: unknown;
};
type ContentCardSlots = 'contentCardSlot';
type ContentCardProps = ComponentProps<ContentCardParameters, ContentCardSlots>;

export const ContentCardComponent = (props: ContentCardProps) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden`}>
      <div className={`px-6 py-4 border-b border-gray-200`}>
        <h3 className={`text-lg font-semibold text-gray-900`}>
          <UniformText
            placeholder="Title goes here"
            parameterId="title"
            component={props.component}
            context={props.context}
          />
        </h3>
      </div>
      <div className={`px-6 py-4`}>
        <p className={`text-gray-600`}>
          <UniformText
            placeholder="Body goes here"
            parameterId="body"
            component={props.component}
            context={props.context}
          />
        </p>
      </div>
      <UniformSlot data={props.component} context={props.context} slot={props.slots.contentCardSlot} />
    </div>
  );
};

export default ContentCardComponent;

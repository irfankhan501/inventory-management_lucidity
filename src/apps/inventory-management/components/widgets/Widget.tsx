import { IWidget } from './widgets.interface';

const Widget = (props: IWidget): JSX.Element => {
    const { Label, Icon, Value } = props
    console.log('Label', { props })
    return (
        <div className="widget">
            {Icon}
            <div className="widget-info">
                <span className='label'>
                    {Label}
                </span>
                <span className='value'>{Value}</span>
            </div>
        </div>
    );
};

export default Widget;

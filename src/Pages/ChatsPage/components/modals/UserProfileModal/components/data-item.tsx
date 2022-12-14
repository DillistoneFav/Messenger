import React, {FC} from 'react';

interface IDataItemProps {
    icon: React.ReactNode;
    description: string;
    title: string;
}

const style = {
    margin: '0 15px',
    color: '#707070',
    display: 'flex',
    alignItems: 'center',
}

const DataItem: FC<IDataItemProps> = ({icon, description, title}) => {
    return (
        <div className={"data-item"}>
            <div style={style}>{icon}</div>
            <div className={"data-item-info"}>
                <div className={"top-data-item-info"}>{description}</div>
                <div className={"bot-data-item-info"}>{title}</div>
            </div>
        </div>
    );
};

export default DataItem;
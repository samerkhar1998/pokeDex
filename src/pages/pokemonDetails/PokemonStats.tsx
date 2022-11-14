import { IStats } from "../../shared/Interfaces"


interface Props{
    stats: IStats;
};

const Stats = (prop: Props) =>{
    const stats = prop.stats;
    
    
    return (
        <div>
            <h2>--------STATS--------</h2>
            <p>{`${stats[0]?.stat.name}: ${stats[0]?.base_stat}`}</p>
            <p>{`${stats[1]?.stat.name}: ${stats[1]?.base_stat}`}</p>
            <p>{`${stats[2]?.stat.name}: ${stats[2]?.base_stat}`}</p>
            <p>{`${stats[3]?.stat.name}: ${stats[3]?.base_stat}`}</p>
            <p>{`${stats[4]?.stat.name}: ${stats[4]?.base_stat}`}</p>
            <p>{`${stats[5]?.stat.name}: ${stats[5]?.base_stat}`}</p>
            
        </div>
    )

};

export default Stats;
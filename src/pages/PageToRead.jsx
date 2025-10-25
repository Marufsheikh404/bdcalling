import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const PageToRead = () => {
    const data = [
        { name: "Book 1", uv: 300 },
        { name: "Book 2", uv: 200 },
        { name: "Book 3", uv: 250 },
        { name: "Book 4", uv: 400 },
        { name: "Book 5", uv: 180 },
    ];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
    };
    return (
        <div className='w-1/2 mx-auto mt-6'>
            <BarChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Bar dataKey="uv" fill="#8884d8" shape={TriangleBar} label={{ position: 'top' }}>
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PageToRead;
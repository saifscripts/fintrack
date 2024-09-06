import { cn } from '@/lib/utils';
import { FileTextIcon } from '@radix-ui/react-icons';

const items = [
  {
    title: 'Current Balance',
    amount: 1000,
    icon: <FileTextIcon className="size-6" />,
    bgColor: 'bg-green-400',
    textColor: 'text-green-400',
  },
  {
    title: 'Liabilities',
    amount: 1000,
    icon: <FileTextIcon className="size-6" />,
    bgColor: 'bg-pink-500',
    textColor: 'text-pink-500',
  },
  {
    title: "Current Month's Income",
    amount: 1000,
    icon: <FileTextIcon className="size-6" />,
    bgColor: 'bg-blue-400',
    textColor: 'text-blue-400',
  },
  {
    title: "Current Month's Expense",
    amount: 1000,
    icon: <FileTextIcon className="size-6" />,
    bgColor: 'bg-orange-400',
    textColor: 'text-orange-400',
  },
];
export default function TransactionPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-lg p-8 flex flex-col gap-2 justify-center items-center"
          >
            <div
              className={cn(
                'size-12 rounded-full flex justify-center items-center text-white',
                item.bgColor
              )}
            >
              {item.icon}
            </div>
            <h4 className="text-center text-2xl">{item.title}</h4>
            <p className={cn('text-center text-xl', item.textColor)}>
              $ {item.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

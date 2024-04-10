import { useRouter } from "next/navigation";

const MenuItem = ({
  currentRoute,
  title,
  route,
}: {
  currentRoute: string;
  title: string;
  route: string;
}) => {
  const { push } = useRouter();
  return (
    <div className="w-fit cursor-pointer group" onClick={() => push(route)}>
      <p
        className={`pb-[1px] font-thin ${
          currentRoute === route && "font-normal"
        }`}
      >
        {title}
      </p>
      <hr
        className={`max-w-[50%] text-primary group-hover:text-red ${
          currentRoute === route && "text-primary"
        }
        group-hover:text-white transition-all duration-300 border-[1px]
        `}
      />
    </div>
  );
};

export default MenuItem;

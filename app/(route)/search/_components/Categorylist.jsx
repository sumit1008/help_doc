"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Categorylist() {
  const [categoryList, setCategoryList] = useState([]);

  const params = usePathname();
  const category=params.split('/')[2];

  useEffect(() => {
    getCategoryList();
    console.log(category);
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      //   console.log(resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="h-screen  mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup  heading="Suggestions">
            {categoryList &&
              categoryList.map((item, index) => (
                <CommandItem key={index}>
                  <Link
                    href={'/search/'+item?.attributes?.Name}
                    className={`p-2 flex gap-2 text-[14px] items-center text-blue-600 rounded-md cursor-pointer w-full
                    ${category==item.attributes.Name && 'bg-blue-200'}
                  `}
                  >
                    <Image
                      src={item.attributes.Icon.data[0].attributes.url}
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <label>{item.attributes.Name}</label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default Categorylist;

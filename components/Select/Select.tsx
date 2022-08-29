import { useCallback, useState } from "react";
import { ArrowIcon } from "assets/svg/ArrowIcon";

import styles from "./styles.module.css";

interface Options {
  value: string;
  label: string;
}

interface SelectProps {
  msgEmpty?: string;
  placeholder: string;
  options: Options[] | [];
}
export const Select = ({
  placeholder,
  options = [],
  msgEmpty = "No items where founds",
}: SelectProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  const handleSelect = (option: Options) => {
    setSearch(option.label);
    setShowModal(false);
  };

  const handleFilter = useCallback(
    (options: Options[]) => {
      if (search.length > 0) {
        return options.filter((fruit) =>
          fruit.label.toLowerCase().includes(search.toLowerCase().trim())
        );
      } else {
        return options;
      }
    },
    [search]
  );

  const handleOnChange = (value: string) => {
    if (value.length > 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    setSearch(value);
  };

  return (
    <div className={styles.select}>
      <input
        className={styles.input}
        value={search}
        onChange={({ target }) => handleOnChange(target.value)}
        placeholder={placeholder}
      />
      <ArrowIcon />
      {showModal && (
        <ul className={styles.modal}>
          {options && handleFilter(options).length > 0 ? (
            handleFilter(options).map((option) => (
              <li onClick={() => handleSelect(option)} key={option.value}>
                {option.label}
              </li>
            ))
          ) : (
            <span className={styles.msgEmpty}>{msgEmpty}</span>
          )}
        </ul>
      )}
    </div>
  );
};

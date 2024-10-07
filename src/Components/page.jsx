import { availableComponents } from "./data";
import {
  Plus,
  Minus,
  RotateCcw,
  X,
  Search,
  Mail,
  Printer,
  Download,
  Share2,
} from "lucide-react";
import React, { useState } from "react";
import Layout from './layout';
const colors = {
  color1: "#EEEEEE",
  color2: "#D1D8C5",
  color3: "#7E8EF1",
  color4: "#615EFC",
};

export default function Component() {
  const [selectedComponents, setSelectedComponents] = useState(
    Object.keys(availableComponents).reduce((acc, category) => {
      acc[category] = null;
      return acc;
    }, {})
  );
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [quantities, setQuantities] = useState(
    Object.keys(availableComponents).reduce((acc, category) => {
      acc[category] = 1;
      return acc;
    }, {})
  );

  const selectComponent = (category, component) => {
    setSelectedComponents((prev) => ({ ...prev, [category]: component }));
    setExpandedCategory(null);
  };

  const removeComponent = (category) => {
    setSelectedComponents((prev) => ({ ...prev, [category]: null }));
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const updateQuantity = (category, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [category]: Math.max(1, (prev[category] || 1) + delta),
    }));
  };

  const filteredComponents = (category) => {
    return availableComponents[category].filter((component) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const totalPrice = Object.entries(selectedComponents).reduce(
    (sum, [category, component]) => {
      return sum + (component ? component.price * quantities[category] : 0);
    },
    0
  );

  return (
    <Layout> {/* Wrapping everything inside Layout */}
      <div
        className="container mx-auto p-4"
        style={{ backgroundColor: colors.color1 }}
      >
        <h1
          className="text-4xl font-bold mb-6 text-center animate-fadeIn"
          style={{ color: colors.color4 }}
        >
          Build Your PC
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300">
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left p-2">COMPONENT</th>
                      <th className="text-left p-2">IMAGE</th>
                      <th className="text-left p-2">PRODUCT NAME</th>
                      <th className="text-left p-2">MODEL</th>
                      <th className="text-left p-2">QUANTITY</th>
                      <th className="text-left p-2">UNIT PRICE</th>
                      <th className="text-left p-2">TOTAL</th>
                      <th className="text-left p-2">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(selectedComponents).map(
                      ([category, component]) => (
                        <React.Fragment key={category}>
                          <tr>
                            <td className="p-2 font-semibold text-black">
                              {category}
                            </td>
                            {component ? (
                              <>
                                <td className="p-2">
                                  <img
                                    src={component.image}
                                    alt={component.name}
                                    className="w-12 h-12 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                                  />
                                </td>
                                <td className="p-2">{component.name}</td>
                                <td className="p-2">{component.model}</td>
                                <td className="p-2">
                                  <div className="flex items-center">
                                    <button
                                      onClick={() =>
                                        updateQuantity(category, -1)
                                      }
                                      className="p-1 rounded-full transition-colors duration-300 hover:bg-purple-200"
                                      style={{ backgroundColor: colors.color3 }}
                                    >
                                      <Minus className="h-4 w-4 text-white" />
                                    </button>
                                    <span className="mx-2">
                                      {quantities[category]}
                                    </span>
                                    <button
                                      onClick={() =>
                                        updateQuantity(category, 1)
                                      }
                                      className="p-1 rounded-full transition-colors duration-300 hover:bg-purple-200"
                                      style={{ backgroundColor: colors.color3 }}
                                    >
                                      <Plus className="h-4 w-4 text-white" />
                                    </button>
                                  </div>
                                </td>
                                <td className="p-2">₹{component.price}</td>
                                <td className="p-2">
                                  ₹{component.price * quantities[category]}
                                </td>
                                <td className="p-2">
                                  <div className="flex space-x-2">
                                    <button
                                      onClick={() =>
                                        toggleCategory(category)
                                      }
                                      className="p-1 rounded-full transition-colors duration-300 hover:bg-purple-200"
                                      style={{ backgroundColor: colors.color3 }}
                                    >
                                      <RotateCcw className="h-4 w-4 text-white" />
                                    </button>
                                    <button
                                      onClick={() => removeComponent(category)}
                                      className="p-1 rounded-full transition-colors duration-300 hover:bg-purple-200"
                                      style={{ backgroundColor: colors.color3 }}
                                    >
                                      <X className="h-4 w-4 text-white" />
                                    </button>
                                  </div>
                                </td>
                              </>
                            ) : (
                              <td colSpan={7} className="p-2">
                                <button
                                  onClick={() => toggleCategory(category)}
                                  className="flex items-center px-4 py-2 rounded transition-all duration-300"
                                  style={{
                                    color: colors.color4,
                                    backgroundColor: "transparent",
                                  }}
                                  onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                      "#F3E8FF")
                                  }
                                  onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor =
                                      "transparent")
                                  }
                                >
                                  <Plus className="mr-2 h-4 w-4" />
                                  Choose {category}
                                </button>
                              </td>
                            )}
                          </tr>
                          {expandedCategory === category && (
                            <tr>
                              <td colSpan={8} className="p-2">
                                <div className="mt-4 animate-fadeIn">
                                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                    <select className="border rounded p-2 transition-colors duration-300 focus:border-purple-300 hover:border-purple-300">
                                      <option>Choose A Brand</option>
                                      <option value="all">All Brands</option>
                                    </select>
                                    <select className="border rounded p-2 transition-colors duration-300 focus:border-purple-300 hover:border-purple-300">
                                      <option>Choose Your Type</option>
                                      <option value="all">All Types</option>
                                    </select>
                                    <div className="flex-grow flex">
                                      <input
                                        type="text"
                                        placeholder={`Search Your ${category}`}
                                        value={searchTerm}
                                        onChange={(e) =>
                                          setSearchTerm(e.target.value)
                                        }
                                        className="border rounded-l p-2 flex-grow transition-colors duration-300 focus:border-purple-300 hover:border-purple-300"
                                      />
                                      <button
                                        className="p-2 rounded-r transition-colors duration-300 hover:bg-purple-200"
                                        style={{
                                          backgroundColor: colors.color3,
                                        }}
                                      >
                                        <Search className="h-4 w-4 text-white" />
                                      </button>
                                    </div>
                                    <select className="border rounded p-2 transition-colors duration-300 focus:border-purple-300 hover:border-purple-300">
                                      <option>Name (A - Z)</option>
                                      <option value="asc">Name (A - Z)</option>
                                      <option value="desc">Price (Low to High)</option>
                                    </select>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredComponents(category).map(
                                      (component) => (
                                        <div
                                          key={component.name}
                                          className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn"
                                        >
                                          <img
                                            src={component.image}
                                            alt={component.name}
                                            className="w-full h-32 object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105"
                                          />
                                          <h3 className="text-xl font-semibold mb-2 text-black">
                                            {component.name}
                                          </h3>
                                          <p className="text-gray-600 mb-4">
                                            {component.model}
                                          </p>
                                          <button
                                            onClick={() =>
                                              selectComponent(
                                                category,
                                                component
                                              )
                                            }
                                            className="w-full p-2 rounded text-white transition-colors duration-300"
                                            style={{
                                              backgroundColor: colors.color4,
                                            }}
                                            onMouseEnter={(e) =>
                                              (e.currentTarget.style.backgroundColor =
                                                "#6B49FF")
                                            }
                                            onMouseLeave={(e) =>
                                              (e.currentTarget.style.backgroundColor =
                                                colors.color4)
                                            }
                                          >
                                            Add {component.name}
                                          </button>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-black">Summary</h2>
              <div className="mb-2">
                <p className="text-black">
                  Selected Items:{" "}
                  <span className="font-bold text-black">
                    {Object.values(selectedComponents).filter(Boolean).length}
                  </span>
                </p>
                <p className="text-black">
                  Total:{" "}
                  <span className="font-bold text-black">₹{totalPrice}</span>
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="w-full p-2 rounded text-white transition-colors duration-300"
                  style={{ backgroundColor: colors.color4 }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#6B49FF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.color4)
                  }
                >
                  Proceed to Checkout
                </button>
                <button
                  className="w-full p-2 rounded text-white transition-colors duration-300"
                  style={{ backgroundColor: colors.color4 }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#6B49FF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.color4)
                  }
                >
                  Save Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

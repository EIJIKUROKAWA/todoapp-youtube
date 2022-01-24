import React from 'react';

export const InputForm = () => {

  const handleSubmit = () => {
    console.log("a")
  }

  return (
    <div className="inputForm">
      <form onSummit={handleSubmit}>
          <input type="text" />
          <button>
          <i class="fas fa-plus-square"></i>
          </button>
      </form>

    </div>
  )
}
